import { useState, useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import { parseSRT, SubtitleItem } from "../utils/srtParser";
import { WordAnalysis } from "../data/tianmimiVocab";
import { getVocabForSentence as getVocabForSentenceUtil, getAllVocab as getAllVocabUtil } from "../utils/vocabLoader";
import { getKoreanTranslation as getKoreanTranslationUtil } from "../utils/koreanTranslationLoader";
import { getPracticeForSentence as getPracticeForSentenceUtil, PracticeQuestion } from "../utils/practiceLoader";
import { getSentenceStructure as getSentenceStructureUtil } from "../utils/sentenceStructureLoader";
import { evaluateSentence } from "../services/chatgptApi";
import { pinyin } from "pinyin-pro";
import { SentenceView } from "./SentenceView";
import { Token } from "../types";
import { SpeechRadarChart } from "./RadarChart";
import { TTSButton } from "./TTSButton";
import { songPageTranslations } from "../i18n/songPageTranslations";
import { youtubePageTranslations } from "../i18n/youtubePageTranslations";
import { extractLineNumberAndText as extractLineNumberAndTextUtil } from "../utils/srtProcessor";

// YouTube IFrame Player API 类型声明
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YoutubeVideoDetailProps {
  videoId: string;
  title: string;
  titleKr: string;
  srtContent: string;
  onBack: () => void;
}

export default function YoutubeVideoDetail({
  videoId,
  title,
  titleKr,
  srtContent,
  onBack,
}: YoutubeVideoDetailProps) {
  const [subtitles, setSubtitles] = useState<SubtitleItem[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState<number | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  // vocabMode 已移除，现在只显示所有词汇
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'basic' | 'intermediate' | 'advanced'>('all'); // 等级筛选
  const [videoSize, setVideoSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [globalActiveTokenId, setGlobalActiveTokenId] = useState<string | null>(null);
  const [playingSubtitleIndex, setPlayingSubtitleIndex] = useState<number | null>(null); // 当前正在播放的歌词索引
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // 视频播放状态
  const [isVideoMuted, setIsVideoMuted] = useState(false); // 视频静音状态
  const [isSingAlongMode, setIsSingAlongMode] = useState(false); // 整首跟唱模式
  const [isRecording, setIsRecording] = useState(false); // 录音状态
  const [isRecordingPaused, setIsRecordingPaused] = useState(false); // 录音暂停状态
  const [recordingDuration, setRecordingDuration] = useState(0); // 录音时长（秒）- 用于显示录音进行中的时间
  const [recordSec, setRecordSec] = useState(0); // 录音秒数（用于UI显示）
  const recordSecPausedRef = useRef<number>(0); // 暂停时的秒数（用于恢复时继续计数）
  const [hasRecording, setHasRecording] = useState(false); // 是否有录音
  const [audioData, setAudioData] = useState<number[]>([]); // 音频可视化数据
  const [recordedAudioBlob, setRecordedAudioBlob] = useState<Blob | null>(null); // 录音文件
  const [isPlayingRecording, setIsPlayingRecording] = useState(false); // 是否正在播放录音
  const [recordingCurrentTime, setRecordingCurrentTime] = useState(0); // 录音播放当前时间
  const [recordingTotalDuration, setRecordingTotalDuration] = useState(0); // 录音总时长（用于播放）
  const [isDraggingRecording, setIsDraggingRecording] = useState(false); // 是否正在拖动录音进度条
  const [showEvaluation, setShowEvaluation] = useState(false); // 是否显示评分结果
  const [isEvaluating, setIsEvaluating] = useState(false); // 是否正在评分
  const [evaluationResult, setEvaluationResult] = useState<{
    totalScore: number;
    pronunciation: number;
    rhythm: number;
    overall: string;
    suggestions: string[];
  } | null>(null); // 评分结果
  const [lyricMode, setLyricMode] = useState<'standard' | 'vocab' | 'sentence' | 'pronunciation'>('standard'); // 歌词模式
  // 默认展开所有有重点词的句子
  const [expandedVocabSentences, setExpandedVocabSentences] = useState<Set<number>>(new Set());
  const [clickedVocabWord, setClickedVocabWord] = useState<{sentenceIndex: number; word: string} | null>(null); // 点击的重点词
  const [expandedVocabWords, setExpandedVocabWords] = useState<Set<string>>(new Set()); // 展开的单个重点词（当词汇数量>1时）
  const [starredWords, setStarredWords] = useState<Set<string>>(() => {
    // 从 localStorage 加载收藏的单词
    const saved = localStorage.getItem('starredWords');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch {
        return new Set();
      }
    }
    return new Set();
  });
  const [starredStructures, setStarredStructures] = useState<Set<string>>(() => {
    // 从 localStorage 加载收藏的句式
    const saved = localStorage.getItem('starredStructures');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch {
        return new Set();
      }
    }
    return new Set();
  });
  const [showSentencePracticeDialog, setShowSentencePracticeDialog] = useState<number | null>(null); // 显示句式练习对话框的句子索引
  const [sentencePracticeInput, setSentencePracticeInput] = useState("");
  const [sentencePracticeMessages, setSentencePracticeMessages] = useState<Array<{type: 'user' | 'teacher', content: string}>>([]);
  const [isAnalyzingSentence, setIsAnalyzingSentence] = useState(false);
  const lyricsCardRef = useRef<HTMLDivElement>(null); // 右侧歌词卡片，用于句式练习弹窗定位到其左侧
  const [sentenceDialogPosition, setSentenceDialogPosition] = useState<{ left: number; top: number } | null>(null);
  // 声音训练模式跟读功能状态
  const [pronunciationRecording, setPronunciationRecording] = useState<Record<number, boolean>>({}); // 每句的录音状态
  const [pronunciationMediaRecorder, setPronunciationMediaRecorder] = useState<Record<number, MediaRecorder | null>>({}); // 每句的录音器
  const [pronunciationRecordingDuration, setPronunciationRecordingDuration] = useState<Record<number, number>>({}); // 每句的录音时长
  const [hasPronunciationRecording, setHasPronunciationRecording] = useState<Record<number, boolean>>({}); // 每句是否有录音
  const [pronunciationAudioBlob, setPronunciationAudioBlob] = useState<Record<number, Blob | null>>({}); // 每句的录音文件
  const [pronunciationFeedback, setPronunciationFeedback] = useState<Record<number, string | null>>({}); // 每句的反馈
  const [isAnalyzingPronunciation, setIsAnalyzingPronunciation] = useState<Record<number, boolean>>({}); // 每句是否正在分析
  const [pronunciationAnalysisProgress, setPronunciationAnalysisProgress] = useState<Record<number, number>>({}); // 每句的分析进度
  const [pronunciationFeedbackData, setPronunciationFeedbackData] = useState<Record<number, {
    scores: {
      contentAccuracy: number;
      tonePerformance: number;
      speakingFluency: number;
    };
    overallComment: string;
    keyIssue: string;
    oneAction: string;
  } | null>>({}); // 每句的完整反馈数据（用于雷达图）
  const pronunciationStreamRef = useRef<Record<number, MediaStream | null>>({}); // 每句的音频流
  const pronunciationDurationIntervalRef = useRef<Record<number, NodeJS.Timeout | null>>({}); // 每句的计时器
  const pronunciationStartTimeRef = useRef<Record<number, number>>({}); // 每句的开始时间
  const pronunciationRecordingRef = useRef<Record<number, boolean>>({}); // 每句的录音状态（用于视频控制）
  const [isSlowSpeed, setIsSlowSpeed] = useState(true); // 默认慢速
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const [showPractice, setShowPractice] = useState<number | null>(null); // 显示练习的句子索引
  const [showDownloadDialog, setShowDownloadDialog] = useState(false); // 下载对话框
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0); // 当前题目索引
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({}); // 用户答案：questionIndex -> answer
  const [showResult, setShowResult] = useState<Record<number, boolean>>({}); // 是否显示结果：questionIndex -> boolean
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string[]>>({}); // 排序题选中的选项：questionIndex -> selectedOptions[]
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<string, string[]>>({}); // 存储每道题的乱序选项：questionKey -> shuffledOptions
  const recordingAudioRef = useRef<HTMLAudioElement | null>(null); // 录音播放器引用
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const vocabScrollRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const recordingStartTimeRef = useRef<number>(0);
  const recordingPausedTimeRef = useRef<number>(0);
  const totalPausedTimeRef = useRef<number>(0);
  const durationIntervalRef = useRef<number | null>(null);
  const isDraggingRecordingRef = useRef<boolean>(false);

  // 句式练习弹窗：定位到右侧歌词卡片左侧
  const DIALOG_WIDTH = 310;
  const DIALOG_GAP = 16;
  useEffect(() => {
    if (showSentencePracticeDialog === null) {
      setSentenceDialogPosition(null);
      return;
    }
    const updatePosition = () => {
      if (!lyricsCardRef.current) return;
      const rect = lyricsCardRef.current.getBoundingClientRect();
      setSentenceDialogPosition({
        left: rect.left - DIALOG_WIDTH - DIALOG_GAP,
        top: rect.top,
      });
    };
    const raf = requestAnimationFrame(updatePosition);
    const onResize = () => updatePosition();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [showSentencePracticeDialog]);

  // 解析SRT内容
  useEffect(() => {
    if (srtContent) {
      // 提前1秒：传入 -1 作为时间偏移
      const parsed = parseSRT(srtContent, -1);
      setSubtitles(parsed);
      console.log('解析SRT成功，共', parsed.length, '条字幕，时间轴已提前1秒');
      
      // 默认展开所有有重点词的句子
      const sentencesWithVocab = new Set<number>();
      parsed.forEach((_, idx) => {
        const sentenceIndex = idx + 1;
        const vocab = getVocabForSentenceUtil(videoId, sentenceIndex);
        if (vocab.length > 0) {
          sentencesWithVocab.add(sentenceIndex);
        }
      });
      setExpandedVocabSentences(sentencesWithVocab);
    }
  }, [srtContent]);

  // 加载YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setPlayerReady(true);
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setPlayerReady(true);
    };
  }, []);

  // 初始化播放器
  useEffect(() => {
    if (playerReady && window.YT && window.YT.Player && !playerRef.current) {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            console.log('YouTube播放器就绪');
            startTimeTracking();
          },
          onStateChange: (event: any) => {
            // 检查是否有任何句子正在录音
            const isAnyRecording = Object.values(pronunciationRecordingRef.current).some(rec => rec === true);
            
            if (event.data === window.YT.PlayerState.PLAYING) {
              // 如果正在录音，暂停视频
              if (isAnyRecording && playerRef.current) {
                playerRef.current.pauseVideo();
                return;
              }
              startTimeTracking();
              setIsVideoPlaying(true);
            } else {
              stopTimeTracking();
              setIsVideoPlaying(false);
              // 如果视频暂停或停止，清除播放状态
              if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
                setPlayingSubtitleIndex(null);
              }
            }
          },
        },
      });
    }

    return () => {
      stopTimeTracking();
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.warn('销毁播放器失败:', e);
        }
        playerRef.current = null;
      }
    };
  }, [playerReady, videoId]);

  // 开始追踪播放时间
  const startTimeTracking = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      if (playerRef.current && subtitles.length > 0) {
        try {
          const time = playerRef.current.getCurrentTime();
          setCurrentTime(time);
          
          const currentIndex = subtitles.findIndex(
            (sub) => time >= sub.startTime && time <= sub.endTime
          );
          
          if (currentIndex !== -1 && currentIndex !== currentSubtitleIndex) {
            setCurrentSubtitleIndex(currentIndex);
            scrollToSubtitle(currentIndex);
            // 如果是在"当前句子"模式，滚动解析区
            if (vocabScrollRef.current) {
              vocabScrollRef.current.scrollTop = 0;
            }
          } else if (currentIndex === -1) {
            setCurrentSubtitleIndex(null);
          }
          
          // 更新播放状态：如果当前时间超出了正在播放的句子的范围，清除播放状态
          if (playingSubtitleIndex !== null) {
            const playingSub = subtitles[playingSubtitleIndex];
            if (playingSub && (time < playingSub.startTime || time > playingSub.endTime)) {
              setPlayingSubtitleIndex(null);
            }
          }
        } catch (error) {
          console.warn('获取播放时间失败:', error);
        }
      }
    }, 100);
  };

  // 停止追踪播放时间
  const stopTimeTracking = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 滚动到指定字幕（只在视野外时才滚动，不强制居中）
  const scrollToSubtitle = (index: number) => {
    const element = document.getElementById(`subtitle-${index}`);
    if (element) {
      const container = element.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        
        // 只在元素不在视野内时才滚动
        const isVisible = 
          elementRect.top >= containerRect.top &&
          elementRect.bottom <= containerRect.bottom;
        
        if (!isVisible) {
          // 使用 nearest，让它滚动到最近的位置，不强制居中
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }
  };

  // 点击歌词跳转到视频时间
  const handleSubtitleClick = (subtitle: SubtitleItem) => {
    if (playerRef.current) {
      playerRef.current.seekTo(subtitle.startTime, true);
      playerRef.current.playVideo();
    }
  };

  // 处理单句播放/暂停
  const handleSubtitlePlayPause = (subtitle: SubtitleItem, index: number) => {
    if (playerRef.current) {
      try {
        const currentTime = playerRef.current.getCurrentTime();
        const playerState = playerRef.current.getPlayerState();
        const isPlaying = playerState === window.YT.PlayerState.PLAYING;
        const isInRange = currentTime >= subtitle.startTime && currentTime <= subtitle.endTime;
        
        // 如果当前正在播放这一句，则暂停
        if (playingSubtitleIndex === index && isPlaying && isInRange) {
          playerRef.current.pauseVideo();
          setPlayingSubtitleIndex(null);
        } else {
          // 否则跳转到这一句的开始并播放
          playerRef.current.seekTo(subtitle.startTime, true);
          playerRef.current.playVideo();
          setPlayingSubtitleIndex(index);
        }
      } catch (error) {
        console.warn('播放控制失败:', error);
      }
    }
  };

  // 格式化时间显示
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 格式化录音时间
  const formatRecordingTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 开始录音
  const startRecording = async () => {
    try {
      // 检查浏览器支持
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert(youtubePageTranslations.ko.browserNoRecord);
        return;
      }

      // 检查是否在 HTTPS 或 localhost（放宽检查，仅警告）
      if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        console.warn('建议在 HTTPS 环境下使用录音功能');
        // 不直接返回，允许继续尝试
      }

      // 请求麦克风权限 - 先尝试简单配置（与 SongPage 一致）
      let stream: MediaStream;
      try {
        // 先尝试简单配置
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (simpleError: any) {
        // 如果简单配置失败，尝试高级配置
        console.warn('简单配置失败，尝试高级配置:', simpleError);
        try {
          stream = await navigator.mediaDevices.getUserMedia({ 
            audio: {
              echoCancellation: true,
              noiseSuppression: true,
              autoGainControl: true
            } 
          });
        } catch (advancedError: any) {
          // 两种配置都失败，显示错误提示
          console.error('获取麦克风权限失败:', advancedError);
          let errorMessage = songPageTranslations.ko.micAccessFailed;
          if (advancedError.name === 'NotAllowedError' || advancedError.name === 'PermissionDeniedError') {
            errorMessage = youtubePageTranslations.ko.micDenied;
          } else if (advancedError.name === 'NotFoundError' || advancedError.name === 'DevicesNotFoundError') {
            errorMessage = youtubePageTranslations.ko.micNotFound;
          } else if (advancedError.name === 'NotReadableError' || advancedError.name === 'TrackStartError') {
            errorMessage = youtubePageTranslations.ko.micInUse;
          }
          alert(errorMessage);
          return; // 直接返回，不抛出错误
        }
      }
      
      if (!stream) {
        return;
      }
      
      streamRef.current = stream;

      // 创建音频上下文用于可视化
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;
      source.connect(analyser);

      // 创建 MediaRecorder，尝试使用不同的 mimeType
      let mimeType = 'audio/webm';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'audio/webm;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'audio/ogg;codecs=opus';
          if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = ''; // 使用浏览器默认格式
          }
        }
      }

      const options = mimeType ? { mimeType } : {};
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      // 开始播放视频
      if (playerRef.current) {
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
      }

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        console.log('录音完成，大小:', audioBlob.size);
        setRecordedAudioBlob(audioBlob);
        setHasRecording(true);
        // 停止时长更新
        if (durationIntervalRef.current !== null) {
          window.clearInterval(durationIntervalRef.current);
          durationIntervalRef.current = null;
        }
        // 停止音频可视化
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
        // 停止媒体流
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
        // 创建音频元素用于播放
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        recordingAudioRef.current = audio;
        audio.addEventListener('loadedmetadata', () => {
          setRecordingTotalDuration(audio.duration);
        });
        audio.addEventListener('timeupdate', () => {
          setRecordingCurrentTime(audio.currentTime);
        });
        audio.addEventListener('ended', () => {
          setIsPlayingRecording(false);
          setRecordingCurrentTime(0);
        });
      };

      mediaRecorder.onerror = (event) => {
        console.error('录音错误:', event);
        // 只有在正在录音时才显示错误提示，避免 stop 后误触发
        if (isRecording) {
          alert(youtubePageTranslations.ko.recordingError);
          setIsRecording(false);
          setIsRecordingPaused(false);
        }
      };

      // 先设置开始时间
      recordingStartTimeRef.current = Date.now() - totalPausedTimeRef.current;
      totalPausedTimeRef.current = 0;
      setRecordingDuration(0); // 重置为0
      setRecordSec(0); // 重置UI显示的秒数

      mediaRecorder.start();
      setIsRecording(true);
      setIsRecordingPaused(false);

      // 启动计时器（用于UI显示）
      if (durationIntervalRef.current !== null) {
        window.clearInterval(durationIntervalRef.current);
      }
      recordSecPausedRef.current = 0; // 重置暂停时的秒数
      const startAt = Date.now();
      setRecordSec(0);
      durationIntervalRef.current = window.setInterval(() => {
        setRecordSec(Math.floor((Date.now() - startAt) / 1000) + recordSecPausedRef.current);
      }, 200);

      // 更新录音时长 - 使用更可靠的方式（保留原有逻辑）
      setRecordingDuration(0);
      // 注意：这里不再使用 durationIntervalRef，因为已经用于 recordSec
      // 如果需要 recordingDuration，可以复用同一个 interval 或使用其他方式

      // 音频可视化
      const visualizeAudio = () => {
        const recorder = mediaRecorderRef.current;
        const analyser = analyserRef.current;
        if (analyser && recorder && recorder.state === 'recording') {
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyser.getByteFrequencyData(dataArray);
          
          // 取部分数据用于显示（简化显示）
          const displayData: number[] = [];
          const step = Math.floor(bufferLength / 30); // 显示30个柱子
          for (let i = 0; i < bufferLength; i += step) {
            displayData.push(dataArray[i]);
          }
          setAudioData(displayData);
          
          animationFrameRef.current = requestAnimationFrame(visualizeAudio);
        }
      };
      visualizeAudio();
    } catch (error: any) {
      // 只有在真正无法继续时才显示错误
      // 如果已经在内部处理了错误（比如 getUserMedia 失败），这里不应该再显示
      console.error('录音初始化失败:', error);
      // 不显示 alert，因为错误已经在内部处理过了
    }
  };

  // 暂停录音
  const pauseRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
      setIsRecordingPaused(true);
      recordingPausedTimeRef.current = Date.now();
      recordSecPausedRef.current = recordSec; // 保存当前秒数
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      // 停止时长更新
      if (durationIntervalRef.current !== null) {
        window.clearInterval(durationIntervalRef.current);
        durationIntervalRef.current = null;
      }
    }
  };

  // 继续录音
  const resumeRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
      setIsRecordingPaused(false);
      totalPausedTimeRef.current += Date.now() - recordingPausedTimeRef.current;
      recordingStartTimeRef.current = Date.now() - totalPausedTimeRef.current;
      
      // 恢复时长更新
      if (durationIntervalRef.current !== null) {
        window.clearInterval(durationIntervalRef.current);
      }
      const resumeStartAt = Date.now();
      const pausedSec = recordSecPausedRef.current; // 获取暂停时的秒数
      durationIntervalRef.current = window.setInterval(() => {
        setRecordSec(Math.floor((Date.now() - resumeStartAt) / 1000) + pausedSec);
      }, 200);
      
      // 恢复音频可视化
      if (analyserRef.current) {
        const visualizeAudio = () => {
          const recorder = mediaRecorderRef.current;
          const analyser = analyserRef.current;
          if (analyser && recorder && recorder.state === 'recording') {
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyser.getByteFrequencyData(dataArray);
            
            const displayData: number[] = [];
            const step = Math.floor(bufferLength / 30);
            for (let i = 0; i < bufferLength; i += step) {
              displayData.push(dataArray[i]);
            }
            setAudioData(displayData);
            
            animationFrameRef.current = requestAnimationFrame(visualizeAudio);
          }
        };
        visualizeAudio();
      }
    }
  };

  // 停止录音
  const stopRecording = () => {
    try {
      // 安全停止 MediaRecorder
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      
      // 立即更新状态
      setIsRecording(false);
      setIsRecordingPaused(false);
      
      // 清理计时器
      if (durationIntervalRef.current !== null) {
        window.clearInterval(durationIntervalRef.current);
        durationIntervalRef.current = null;
      }
      
      // 重置录音秒数（但保留用于显示）
      recordSecPausedRef.current = 0;
      
      // 停止 stream tracks
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      
      // 停止视频播放和歌词滚动
      if (playerRef.current) {
        playerRef.current.pauseVideo();
      }
      setCurrentSubtitleIndex(null);
      setPlayingSubtitleIndex(null);
    } catch (error) {
      console.error('停止录音时发生错误:', error);
      // 不 alert，不 throw，尽量收尾
      setIsRecording(false);
      setIsRecordingPaused(false);
      if (durationIntervalRef.current !== null) {
        window.clearInterval(durationIntervalRef.current);
        durationIntervalRef.current = null;
      }
      // 即使出错也尝试停止视频
      if (playerRef.current) {
        try {
          playerRef.current.pauseVideo();
        } catch (e) {
          console.warn('停止视频失败:', e);
        }
      }
      setCurrentSubtitleIndex(null);
      setPlayingSubtitleIndex(null);
    }
  };

  // 重新录音
  const restartRecording = () => {
    setHasRecording(false);
    setRecordingDuration(0);
    setRecordSec(0);
    setRecordedAudioBlob(null);
    setIsPlayingRecording(false);
    setRecordingCurrentTime(0);
    setRecordingTotalDuration(0);
    recordSecPausedRef.current = 0;
    if (recordingAudioRef.current) {
      recordingAudioRef.current.pause();
      recordingAudioRef.current = null;
    }
    audioChunksRef.current = [];
    totalPausedTimeRef.current = 0;
    
    // 视频和歌词从头播放
    if (playerRef.current) {
      try {
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
      } catch (error) {
        console.warn('重置视频播放失败:', error);
      }
    }
    setCurrentSubtitleIndex(null);
    setPlayingSubtitleIndex(null);
    
    // 开始新的录音
    startRecording();
  };

  // 播放录音
  const playRecording = async () => {
    if (recordingAudioRef.current) {
      try {
        await recordingAudioRef.current.play();
        setIsPlayingRecording(true);
      } catch (error) {
        console.error('播放录音失败:', error);
      }
    } else if (recordedAudioBlob) {
      const audioUrl = URL.createObjectURL(recordedAudioBlob);
      const audio = new Audio(audioUrl);
      recordingAudioRef.current = audio;
      audio.addEventListener('loadedmetadata', () => {
        setRecordingTotalDuration(audio.duration);
      });
      audio.addEventListener('timeupdate', () => {
        // 只有在不拖动时才更新当前时间
        if (!isDraggingRecordingRef.current) {
          setRecordingCurrentTime(audio.currentTime);
        }
      });
      audio.addEventListener('ended', () => {
        setIsPlayingRecording(false);
        setRecordingCurrentTime(0);
      });
      try {
        await audio.play();
        setIsPlayingRecording(true);
      } catch (error) {
        console.error('播放录音失败:', error);
      }
    }
  };

  // 暂停播放录音
  const pauseRecordingPlayback = () => {
    if (recordingAudioRef.current) {
      recordingAudioRef.current.pause();
      setIsPlayingRecording(false);
    }
  };

  // 设置录音播放位置
  const setRecordingPlaybackTime = (time: number) => {
    if (recordingAudioRef.current) {
      recordingAudioRef.current.currentTime = time;
      setRecordingCurrentTime(time);
    }
  };

  // 下载录音
  const downloadRecording = () => {
    if (recordedAudioBlob) {
      const url = URL.createObjectURL(recordedAudioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${youtubePageTranslations.ko.downloadFilenameRecording}_${title}_${new Date().getTime()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  // HTML转义函数
  const escapeHtml = (text: string) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  // 生成TTS脚本
  const generateTTSScript = () => {
    return `
    <script>
      class TTSManager {
        constructor() {
          this.currentUtterance = null;
          this.voice = null;
          this.initVoice();
        }

        initVoice() {
          const loadVoices = () => {
            if ('speechSynthesis' in window) {
              const voices = window.speechSynthesis.getVoices();
              const preferredVoices = ['Microsoft Xiaoxiao', 'Microsoft Yaoyao', 'Ting-Ting', 'Sin-Ji', 'Google 普通话', 'Microsoft Kangkang'];
              
              for (const preferredName of preferredVoices) {
                const voice = voices.find(v => v.name.includes(preferredName.split(' ')[0]) && v.lang.startsWith('zh'));
                if (voice) {
                  this.voice = voice;
                  return;
                }
              }
              
              const chineseVoice = voices.find(v => v.lang.startsWith('zh-CN') || v.lang.startsWith('zh'));
              if (chineseVoice) this.voice = chineseVoice;
            }
          };
          
          loadVoices();
          if ('speechSynthesis' in window) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
          }
        }

        speak(text, lang = 'zh-CN') {
          if (!('speechSynthesis' in window)) {
            alert('이 브라우저는 음성 합성 기능을 지원하지 않아요.');
            return;
          }
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = lang;
          utterance.rate = 0.7;
          if (this.voice) utterance.voice = this.voice;
          this.currentUtterance = utterance;
          window.speechSynthesis.speak(utterance);
        }
      }

      const ttsManager = new TTSManager();

      function handleTTSButtonClick(text, lang = 'zh-CN') {
        ttsManager.speak(text, lang);
      }

      document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('[data-tts-text]').forEach(button => {
          button.addEventListener('click', function() {
            const text = this.getAttribute('data-tts-text');
            const lang = this.getAttribute('data-tts-lang') || 'zh-CN';
            handleTTSButtonClick(text, lang);
          });
        });
      });
    </script>
  `;
  };

  // 生成CSS样式
  const generateStyles = () => {
    return `
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        background-color: #f9fafb;
        color: #1f2937;
        line-height: 1.6;
        padding: 20px;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        padding: 24px;
      }
      h1 { font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #111827; }
      h2 { font-size: 20px; font-weight: 600; margin-bottom: 12px; color: #374151; }
      h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; color: #4b5563; }
      .tts-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px;
        background-color: #3b82f6;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.2s;
        margin-left: 8px;
      }
      .tts-button:hover { background-color: #2563eb; }
      .vocab-item, .sentence-item {
        padding: 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        margin-bottom: 12px;
        background: white;
      }
      .vocab-item.basic { border-color: #86efac; background-color: #f0fdf4; }
      .vocab-item.intermediate { border-color: #93c5fd; background-color: #eff6ff; }
      .vocab-item.advanced { border-color: #c4b5fd; background-color: #faf5ff; }
      .level-badge {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        margin-left: 8px;
      }
      .level-basic { color: #16a34a; border: 2px solid #86efac; background-color: #dcfce7; }
      .level-intermediate { color: #2563eb; border: 2px solid #93c5fd; background-color: #dbeafe; }
      .level-advanced { color: #9333ea; border: 2px solid #c4b5fd; background-color: #f3e8ff; }
      .lyric-line {
        padding: 12px;
        margin-bottom: 8px;
        background: #f9fafb;
        border-radius: 6px;
      }
      .pinyin { font-size: 14px; color: #6b7280; margin-top: 4px; }
      .korean { font-size: 14px; color: #4b5563; margin-top: 4px; }
      .example {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid #e5e7eb;
        font-size: 14px;
      }
      .example-text { color: #374151; font-style: italic; }
      .example-kr { color: #6b7280; margin-top: 4px; }
    </style>
  `;
  };

  // 生成带颜色标记的歌词HTML（用于下载）
  const generateColoredLyricHTML = (lyricText: string, sentenceIndex: number): string => {
    const vocab = getVocabForSentenceUtil(videoId, sentenceIndex);
    const structureData = getSentenceStructureUtil(videoId, sentenceIndex);
    
    // 如果没有词汇和句式，直接返回原文本
    if (vocab.length === 0 && (!structureData || !structureData.structure)) {
      return escapeHtml(lyricText);
    }
    
    // 创建匹配数组
    interface Match {
      index: number;
      length: number;
      type: 'vocab' | 'structure';
      colorClass: string;
    }
    
    const matches: Match[] = [];
    const matchedIndices = new Set<number>();
    
    // 先添加句式的匹配
    if (structureData && structureData.structure) {
      const structure = structureData.structure;
      const level = structureData.level;
      const structureLevelColorClass = level === 'beginner' 
        ? 'bg-green-100 text-green-800' 
        : level === 'intermediate' 
        ? 'bg-blue-100 text-blue-800' 
        : 'bg-purple-100 text-purple-800';
      
      // 提取句式的关键词
      let keywords: string[] = [];
      let pattern = structure.replace(/[……]/g, '').trim();
      pattern = pattern.replace(/동사\+/g, '');
      if (pattern.includes('+')) {
        keywords = pattern.split('+').map(k => k.trim()).filter(k => k.length > 0);
      } else {
        const chineseChars = pattern.match(/[\u4e00-\u9fff]+/g);
        if (chineseChars) {
          keywords = chineseChars;
        } else {
          keywords = [pattern];
        }
      }
      keywords = keywords.filter(k => k.length > 0);
      
      keywords.forEach((keyword) => {
        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedKeyword, 'g');
        let match;
        
        while ((match = regex.exec(lyricText)) !== null) {
          const startIndex = match.index;
          const endIndex = startIndex + keyword.length;
          
          let hasOverlap = false;
          for (let i = startIndex; i < endIndex; i++) {
            if (matchedIndices.has(i)) {
              hasOverlap = true;
              break;
            }
          }
          
          if (!hasOverlap) {
            matches.push({
              index: startIndex,
              length: keyword.length,
              type: 'structure',
              colorClass: structureLevelColorClass,
            });
            
            for (let i = startIndex; i < endIndex; i++) {
              matchedIndices.add(i);
            }
          }
        }
      });
    }
    
    // 再添加词汇的匹配（词汇优先级更高）
    const sortedVocab = [...vocab].sort((a, b) => b.word.length - a.word.length);
    sortedVocab.forEach((wordItem) => {
      const word = wordItem.word;
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedWord, 'g');
      let match;
      
      while ((match = regex.exec(lyricText)) !== null) {
        const startIndex = match.index;
        const endIndex = startIndex + word.length;
        
        let hasOverlap = false;
        for (let i = startIndex; i < endIndex; i++) {
          if (matchedIndices.has(i)) {
            hasOverlap = true;
            break;
          }
        }
        
        if (!hasOverlap) {
          // 移除可能重叠的句式匹配
          const overlappingStructureMatches = matches.filter(m => 
            m.type === 'structure' && 
            !(m.index + m.length <= startIndex || m.index >= endIndex)
          );
          overlappingStructureMatches.forEach(m => {
            for (let i = m.index; i < m.index + m.length; i++) {
              matchedIndices.delete(i);
            }
          });
          matches.splice(0, matches.length, ...matches.filter(m => !overlappingStructureMatches.includes(m)));
          
          const vocabColorClass = wordItem.level === 'basic' 
            ? 'bg-green-100 text-green-800' 
            : wordItem.level === 'intermediate' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-purple-100 text-purple-800';
          
          matches.push({
            index: startIndex,
            length: word.length,
            type: 'vocab',
            colorClass: vocabColorClass,
          });
          
          for (let i = startIndex; i < endIndex; i++) {
            matchedIndices.add(i);
          }
        }
      }
    });
    
    // 按索引排序
    matches.sort((a, b) => a.index - b.index);
    
    // 构建HTML
    let result = '';
    let lastIndex = 0;
    
    matches.forEach((match) => {
      // 添加匹配前的文本
      if (match.index > lastIndex) {
        result += escapeHtml(lyricText.substring(lastIndex, match.index));
      }
      
      // 添加带颜色的词汇或句式
      result += `<span class="${match.colorClass} px-1 rounded font-semibold">${escapeHtml(lyricText.substring(match.index, match.index + match.length))}</span>`;
      
      lastIndex = match.index + match.length;
    });
    
    // 添加剩余文本
    if (lastIndex < lyricText.length) {
      result += escapeHtml(lyricText.substring(lastIndex));
    }
    
    return result || escapeHtml(lyricText);
  };

  // 生成标准模式HTML（带颜色标记）
  const generateStandardModeHTML = () => {
    let content = '<div class="container"><h1>' + escapeHtml(title) + ' - 标准模式</h1><div class="lyric-section">';
    
    subtitles.forEach((sub, idx) => {
      const { lineNumber, lyricText } = extractLineNumberAndText(sub.text);
      const pinyin = getPinyinForSentence(lyricText);
      const korean = getKoreanTranslationUtil(videoId, idx + 1);
      const coloredLyric = generateColoredLyricHTML(lyricText, idx + 1);
      
      content += `
        <div class="lyric-line">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="flex: 1;">
              ${lineNumber ? `<span style="color: #6b7280; margin-right: 8px;">${lineNumber}</span>` : ''}
              <span style="font-size: 18px;">${coloredLyric}</span>
            </div>
            <button class="tts-button" data-tts-text="${escapeHtml(lyricText)}" data-tts-lang="zh-CN">🔊 朗读</button>
          </div>
          <div class="pinyin">${escapeHtml(pinyin)}</div>
          ${korean ? `<div class="korean">${escapeHtml(korean)}</div>` : ''}
          <div style="font-size: 12px; color: #9ca3af; margin-top: 4px;">
            ${formatTime(sub.startTime)} - ${formatTime(sub.endTime)}
          </div>
        </div>
      `;
    });
    
    content += '</div></div>';
    return content;
  };

  // 生成词汇训练HTML（包含所有歌词）
  const generateVocabModeHTML = () => {
    let content = '<div class="container"><h1>' + escapeHtml(title) + ' - 词汇训练</h1>';
    
    // 显示所有歌词（带重点词颜色标记），每句下方显示该句的重点词
    content += '<h2>所有歌词</h2><div class="lyric-section">';
    subtitles.forEach((sub, idx) => {
      const sentenceIndex = idx + 1;
      const { lineNumber, lyricText } = extractLineNumberAndText(sub.text);
      const pinyin = getPinyinForSentence(lyricText);
      const korean = getKoreanTranslationUtil(videoId, sentenceIndex);
      const coloredLyric = generateColoredLyricHTML(lyricText, sentenceIndex);
      
      // 获取该句的重点词
      const vocab = getVocabForSentenceUtil(videoId, sentenceIndex);
      
      content += `
        <div class="lyric-line" style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #e5e7eb;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="flex: 1;">
              ${lineNumber ? `<span style="color: #6b7280; margin-right: 8px;">${lineNumber}</span>` : ''}
              <span style="font-size: 18px;">${coloredLyric}</span>
            </div>
            <button class="tts-button" data-tts-text="${escapeHtml(lyricText)}" data-tts-lang="zh-CN">🔊 朗读</button>
          </div>
          <div class="pinyin">${escapeHtml(pinyin)}</div>
          ${korean ? `<div class="korean">${escapeHtml(korean)}</div>` : ''}
          
          ${vocab.length > 0 ? `
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
              <div style="font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">本句重点词：</div>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${vocab.map((word) => {
                  const levelClass = word.level === 'basic' ? 'basic' : word.level === 'intermediate' ? 'intermediate' : 'advanced';
                  const levelLabel = word.level === 'basic' ? '基础' : word.level === 'intermediate' ? '中级' : '高级';
                  const levelColor = word.level === 'basic' ? '#10b981' : word.level === 'intermediate' ? '#3b82f6' : '#8b5cf6';
                  
                  return `
                    <div style="padding: 12px; background-color: #f9fafb; border-radius: 8px; border-left: 3px solid ${levelColor};">
                      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="font-size: 16px; font-weight: 600; color: ${levelColor};">${escapeHtml(word.word)}</span>
                          <span style="padding: 2px 8px; background-color: ${levelColor}20; color: ${levelColor}; border-radius: 4px; font-size: 11px; font-weight: 500;">${levelLabel}</span>
                          <span style="color: #6b7280; font-size: 14px;">${escapeHtml(word.pinyin)}</span>
                        </div>
                        <button class="tts-button" data-tts-text="${escapeHtml(word.word)}" data-tts-lang="zh-CN" style="padding: 4px 8px; font-size: 12px;">🔊</button>
                      </div>
                      ${word.meaningKr ? `<div style="color: #374151; margin-bottom: 6px; font-size: 14px;">${escapeHtml(word.meaningKr)}</div>` : ''}
                      ${word.example ? `
                        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb;">
                          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                            <span style="color: #6b7280; font-size: 13px;">예문：</span>
                            <span style="color: #1f2937; font-size: 14px;">${escapeHtml(word.example)}</span>
                            <button class="tts-button" data-tts-text="${escapeHtml(word.example)}" data-tts-lang="zh-CN" style="padding: 2px 6px; font-size: 11px;">🔊</button>
                          </div>
                          ${word.exampleKr ? `<div style="color: #6b7280; font-size: 13px; margin-left: 40px;">${escapeHtml(word.exampleKr)}</div>` : ''}
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    });
    content += '</div></div>';
    return content;
  };

  // 生成句式训练HTML（包含所有歌词）
  const generateSentenceModeHTML = () => {
    let content = '<div class="container"><h1>' + escapeHtml(title) + ' - 句式训练</h1>';
    
    // 先显示所有歌词（带重点句式颜色标记）
    content += '<h2>所有歌词</h2><div class="lyric-section">';
    subtitles.forEach((sub, idx) => {
      const { lineNumber, lyricText } = extractLineNumberAndText(sub.text);
      const pinyin = getPinyinForSentence(lyricText);
      const korean = getKoreanTranslationUtil(videoId, idx + 1);
      const coloredLyric = generateColoredLyricHTML(lyricText, idx + 1);
      
      content += `
        <div class="lyric-line">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="flex: 1;">
              ${lineNumber ? `<span style="color: #6b7280; margin-right: 8px;">${lineNumber}</span>` : ''}
              <span style="font-size: 18px;">${coloredLyric}</span>
            </div>
            <button class="tts-button" data-tts-text="${escapeHtml(lyricText)}" data-tts-lang="zh-CN">🔊 朗读</button>
          </div>
          <div class="pinyin">${escapeHtml(pinyin)}</div>
          ${korean ? `<div class="korean">${escapeHtml(korean)}</div>` : ''}
        </div>
      `;
    });
    content += '</div>';
    
    // 再显示所有句式
    content += '<h2 style="margin-top: 32px;">所有句式</h2><div class="sentence-section">';
    getAllSentenceStructures.forEach(({ structure }) => {
      const levelClass = structure.level === 'beginner' ? 'basic' : structure.level === 'intermediate' ? 'intermediate' : 'advanced';
      const levelLabel = structure.level === 'beginner' ? '基础' : structure.level === 'intermediate' ? '中级' : '高级';
      
      content += `
        <div class="sentence-item">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div style="display: flex; align-items: center;">
              <span style="font-size: 16px; font-weight: 600;">${escapeHtml(structure.structure)}</span>
              <span class="level-badge level-${levelClass}">${levelLabel}</span>
            </div>
            <button class="tts-button" data-tts-text="${escapeHtml(structure.structure)}" data-tts-lang="zh-CN">🔊 朗读</button>
          </div>
          ${structure.explanation ? `<div style="color: #6b7280; margin-bottom: 8px;">${escapeHtml(structure.explanation)}</div>` : ''}
          ${structure.example ? `
            <div class="example">
              <div class="example-text">
                ${escapeHtml(structure.example)}
                <button class="tts-button" data-tts-text="${escapeHtml(structure.example)}" data-tts-lang="zh-CN" style="margin-left: 8px; padding: 4px 8px; font-size: 12px;">🔊</button>
              </div>
              ${structure.exampleKr ? `<div class="example-kr">${escapeHtml(structure.exampleKr)}</div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    });
    
    content += '</div></div>';
    return content;
  };

  // 生成歌词+句式HTML（本首歌的歌词+句式，包含词汇和句式解析）
  const generateLyricAndSentenceHTML = () => {
    let content = '<div class="container"><h1>' + escapeHtml(title) + ' - 本首歌的歌词+句式</h1>';
    
    // 先显示所有歌词（带重点词和重点句式颜色标记）
    content += '<h2>所有歌词</h2><div class="lyric-section">';
    subtitles.forEach((sub, idx) => {
      const { lineNumber, lyricText } = extractLineNumberAndText(sub.text);
      const pinyin = getPinyinForSentence(lyricText);
      const korean = getKoreanTranslationUtil(videoId, idx + 1);
      const coloredLyric = generateColoredLyricHTML(lyricText, idx + 1);
      
      content += `
        <div class="lyric-line">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="flex: 1;">
              ${lineNumber ? `<span style="color: #6b7280; margin-right: 8px;">${lineNumber}</span>` : ''}
              <span style="font-size: 18px;">${coloredLyric}</span>
            </div>
            <button class="tts-button" data-tts-text="${escapeHtml(lyricText)}" data-tts-lang="zh-CN">🔊 朗读</button>
          </div>
          <div class="pinyin">${escapeHtml(pinyin)}</div>
          ${korean ? `<div class="korean">${escapeHtml(korean)}</div>` : ''}
        </div>
      `;
    });
    content += '</div>';
    
    // 显示所有词汇解析
    content += '<h2 style="margin-top: 32px;">所有词汇</h2><div class="vocab-section">';
    displayedVocab.forEach((word) => {
      const levelClass = word.level === 'basic' ? 'basic' : word.level === 'intermediate' ? 'intermediate' : 'advanced';
      const levelLabel = word.level === 'basic' ? '基础' : word.level === 'intermediate' ? '中级' : '高级';
      
      content += `
        <div class="vocab-item ${levelClass}">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div style="display: flex; align-items: center;">
              <span style="font-size: 18px; font-weight: 600;">${escapeHtml(word.word)}</span>
              <span class="level-badge level-${levelClass}">${levelLabel}</span>
            </div>
            <button class="tts-button" data-tts-text="${escapeHtml(word.word)}" data-tts-lang="zh-CN">🔊 朗读</button>
          </div>
          <div style="color: #6b7280; margin-bottom: 8px;">${escapeHtml(word.pinyin)}</div>
          ${word.meaningKr ? `<div style="color: #374151; margin-bottom: 8px;">${escapeHtml(word.meaningKr)}</div>` : ''}
          ${word.example ? `
            <div class="example">
              <div class="example-text">
                ${escapeHtml(word.example)}
                <button class="tts-button" data-tts-text="${escapeHtml(word.example)}" data-tts-lang="zh-CN" style="margin-left: 8px; padding: 4px 8px; font-size: 12px;">🔊</button>
              </div>
              ${word.exampleKr ? `<div class="example-kr">${escapeHtml(word.exampleKr)}</div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    });
    content += '</div>';
    
    // 再显示所有句式
    content += '<h2 style="margin-top: 32px;">所有句式</h2><div class="sentence-section">';
    getAllSentenceStructures.forEach(({ structure }) => {
      const levelClass = structure.level === 'beginner' ? 'basic' : structure.level === 'intermediate' ? 'intermediate' : 'advanced';
      const levelLabel = structure.level === 'beginner' ? '基础' : structure.level === 'intermediate' ? '中级' : '高级';
      
      content += `
        <div class="sentence-item">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div style="display: flex; align-items: center;">
              <span style="font-size: 16px; font-weight: 600;">${escapeHtml(structure.structure)}</span>
              <span class="level-badge level-${levelClass}">${levelLabel}</span>
            </div>
            <button class="tts-button" data-tts-text="${escapeHtml(structure.structure)}" data-tts-lang="zh-CN">🔊 朗读</button>
          </div>
          ${structure.explanation ? `<div style="color: #6b7280; margin-bottom: 8px;">${escapeHtml(structure.explanation)}</div>` : ''}
          ${structure.example ? `
            <div class="example">
              <div class="example-text">
                ${escapeHtml(structure.example)}
                <button class="tts-button" data-tts-text="${escapeHtml(structure.example)}" data-tts-lang="zh-CN" style="margin-left: 8px; padding: 4px 8px; font-size: 12px;">🔊</button>
              </div>
              ${structure.exampleKr ? `<div class="example-kr">${escapeHtml(structure.exampleKr)}</div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    });
    content += '</div></div>';
    
    return content;
  };

  // 下载HTML文件
  const downloadAsHTML = (type: 'standard' | 'vocab' | 'sentence' | 'lyricSentence') => {
    let htmlContent = '';
    let filename = '';
    let pageTitle = '';
    
    const t = youtubePageTranslations.ko;
    switch(type) {
      case 'standard':
        htmlContent = generateStandardModeHTML();
        filename = `${title}_${t.downloadFilenameStandard}_${new Date().getTime()}.html`;
        pageTitle = t.modeStandard;
        break;
      case 'vocab':
        htmlContent = generateVocabModeHTML();
        filename = `${title}_${t.downloadFilenameVocab}_${new Date().getTime()}.html`;
        pageTitle = t.modeVocab;
        break;
      case 'sentence':
        htmlContent = generateSentenceModeHTML();
        filename = `${title}_${t.downloadFilenameSentence}_${new Date().getTime()}.html`;
        pageTitle = t.modeSentence;
        break;
      case 'lyricSentence':
        htmlContent = generateLyricAndSentenceHTML();
        filename = `${title}_${t.downloadFilenameLyricSentence}_${new Date().getTime()}.html`;
        pageTitle = t.modeLyricSentence;
        break;
    }
    
    const fullHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} - ${pageTitle}</title>
  ${generateStyles()}
</head>
<body>
  ${htmlContent}
  ${generateTTSScript()}
</body>
</html>`;
    
    const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setShowDownloadDialog(false);
  };

  // 生成评价（使用真实API）
  const generateEvaluation = async () => {
    if (!recordedAudioBlob) {
      alert(youtubePageTranslations.ko.noRecording);
      return;
    }

    setIsEvaluating(true);
    setShowEvaluation(false);
    
    try {
      // 1. 从 subtitles 中提取所有歌词文本作为 targetText
      const allLyrics = subtitles
        .map(sub => {
          // 提取歌词文本（去掉行号，如果有的话）
          const { lyricText } = extractLineNumberAndText(sub.text);
          return lyricText;
        })
        .filter(text => text.trim()) // 过滤空文本
        .join(' '); // 用空格连接所有歌词

      if (!allLyrics) {
        throw new Error('无法获取歌词文本');
      }

      // 2. 转写录音音频
      const { transcribeAudio } = await import('../services/chatgptApi');
      const asrText = await transcribeAudio(recordedAudioBlob);

      if (!asrText || asrText.trim() === '') {
        throw new Error('录音转写失败，请检查录音内容');
      }

      // 3. 调用跟读反馈API进行评分
      const { generateReadingFeedback } = await import('../services/chatgptApi');
      const feedbackData = await generateReadingFeedback(
        '中级', // 默认中级，可以根据实际情况调整
        allLyrics, // 完整歌词作为目标文本
        asrText,   // 录音转写结果
        recordingDuration // 录音时长
      );

      // 4. 将反馈数据转换为 evaluationResult 格式
      const totalScore = Math.round(
        (feedbackData.scores.contentAccuracy * 0.4 +
         feedbackData.scores.tonePerformance * 0.3 +
         feedbackData.scores.speakingFluency * 0.3)
      );

      // 根据评分生成建议
      const suggestions: string[] = [];
      
      // 添加内容检查相关的建议
      if (feedbackData.contentCheck.missing.length > 0) {
        suggestions.push(`漏读的词语：${feedbackData.contentCheck.missing.slice(0, 3).join('、')}`);
      }
      if (feedbackData.contentCheck.extra.length > 0) {
        suggestions.push(`多读的词语：${feedbackData.contentCheck.extra.slice(0, 3).join('、')}`);
      }
      if (feedbackData.contentCheck.substitutions.length > 0) {
        const subs = feedbackData.contentCheck.substitutions.slice(0, 3);
        suggestions.push(`替换的词语：${subs.map(s => `${s.original}→${s.replaced}`).join('、')}`);
      }

      // 添加主要问题和下一步行动
      if (feedbackData.keyIssue) {
        suggestions.push(feedbackData.keyIssue);
      }
      if (feedbackData.oneAction) {
        suggestions.push(feedbackData.oneAction);
      }

      // 如果没有建议，添加默认建议
      if (suggestions.length === 0) {
        suggestions.push('继续练习，保持这个水平');
      }

      setEvaluationResult({
        totalScore,
        pronunciation: feedbackData.scores.contentAccuracy,
        rhythm: feedbackData.scores.tonePerformance,
        overall: feedbackData.overallComment || '整体表现不错，继续努力！',
        suggestions: suggestions.slice(0, 5), // 最多显示5条建议
      });
      
      setIsEvaluating(false);
      setShowEvaluation(true);
    } catch (error) {
      console.error('评分失败:', error);
      alert(`${youtubePageTranslations.ko.scoreFailed} ${error instanceof Error ? error.message : ''}`);
      setIsEvaluating(false);
    }
  };

  // 从文本中提取行号和歌词内容
  // 使用通用的SRT处理工具（所有视频统一使用，以甜蜜蜜为基础）
  const extractLineNumberAndText = (text: string): { lineNumber: string; lyricText: string } => {
    return extractLineNumberAndTextUtil(text);
  };

  // 获取句子的拼音（接收的已经是去掉行号的歌词内容）
  const getPinyinForSentence = (lyricText: string): string => {
    try {
      // pinyin-pro: toneType: 'symbol' 表示带声调符号（ā á ǎ à）
      return pinyin(lyricText, {
        toneType: 'symbol',  // 带声调符号
      });
    } catch (error) {
      console.warn('拼音转换失败:', error);
      return '';
    }
  };

  // 播放句子的发音
  // 处理发送消息（造句练习）
  const handleSendMessage = async (sentenceIdx?: number) => {
    if (!sentencePracticeInput.trim() || isAnalyzingSentence) return;
    
    const userMessage = sentencePracticeInput.trim();
    const currentSentenceIndex = sentenceIdx ?? showSentencePracticeDialog;
    if (currentSentenceIndex === null) return;
    
    // 添加用户消息
    setSentencePracticeMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setSentencePracticeInput("");
    setIsAnalyzingSentence(true);
    
    try {
      const structureData = getSentenceStructureUtil(videoId, currentSentenceIndex);
      const targetSentence = structureData?.sentence || '';
      const feedback = await evaluateSentence(userMessage, '中级', targetSentence);
      
      // 添加老师回复
      setSentencePracticeMessages(prev => [...prev, { type: 'teacher', content: feedback }]);
    } catch (error) {
      console.error('评价失败:', error);
      setSentencePracticeMessages(prev => [...prev, { 
        type: 'teacher', 
        content: youtubePageTranslations.ko.evalFailedSorry 
      }]);
    } finally {
      setIsAnalyzingSentence(false);
    }
  };

  // 获取可用的中文声音（更自然的声音）
  useEffect(() => {
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        // 优先选择更自然的中文声音
        const preferredVoices = [
          'Microsoft Xiaoxiao - Chinese (Simplified, PRC)',
          'Microsoft Yaoyao - Chinese (Simplified, PRC)',
          'Ting-Ting',
          'Sin-Ji',
          'Google 普通话（中国大陆）',
          'Microsoft Kangkang - Chinese (Simplified, PRC)',
        ];
        
        for (const preferredName of preferredVoices) {
          const voice = voices.find(v => v.name.includes(preferredName.split(' ')[0]) && v.lang.startsWith('zh'));
          if (voice) {
            voiceRef.current = voice;
            return;
          }
        }
        
        const chineseVoice = voices.find(v => v.lang.startsWith('zh-CN') || v.lang.startsWith('zh'));
        if (chineseVoice) {
          voiceRef.current = chineseVoice;
        }
      }
    };

    loadVoices();
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const handlePlaySentence = (text: string) => {
    if ('speechSynthesis' in window) {
      // 停止当前正在播放的语音
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.7; // 默认慢速0.7
      
      // 设置声音
      if (voiceRef.current) {
        utterance.voice = voiceRef.current;
      }
      
      utterance.onerror = (error) => {
        console.warn('语音播放失败:', error);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert('이 브라우저는 음성 합성 기능을 지원하지 않아요.');
    }
  };

  // 渲染歌词（高亮句型部分，按等级标记颜色）
  const renderLyricWithStructure = (text: string, structure: string, level: 'beginner' | 'intermediate' | 'advanced') => {
    // 根据等级设置颜色：基础-淡绿色，中级-淡蓝色，高级-淡紫色
    const levelColorClass = level === 'beginner' 
      ? 'bg-green-100 text-green-800' 
      : level === 'intermediate' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-purple-100 text-purple-800';
    
    // 提取句型中的关键词
    // 处理各种格式：
    // "……得……" -> 提取"得"
    // "好像……" -> 提取"好像"
    // "……在……" -> 提取"在"
    // "동사+过" -> 提取"过"
    // "是……的" -> 提取"是"和"的"
    
    let keywords: string[] = [];
    
    // 移除"……"占位符
    let pattern = structure.replace(/[……]/g, '').trim();
    
    // 处理"동사+过"这种格式（移除"동사+"）
    pattern = pattern.replace(/동사\+/g, '');
    
    // 处理"+"分隔的格式
    if (pattern.includes('+')) {
      keywords = pattern.split('+').map(k => k.trim()).filter(k => k.length > 0);
    } else {
      // 提取中文字符作为关键词
      const chineseChars = pattern.match(/[\u4e00-\u9fff]+/g);
      if (chineseChars) {
        keywords = chineseChars;
      } else {
        keywords = [pattern];
      }
    }
    
    // 过滤掉空关键词
    keywords = keywords.filter(k => k.length > 0);
    
    if (keywords.length === 0) {
      return <span>{text}</span>;
    }
    
    // 找到所有匹配的位置
    interface Match {
      index: number;
      length: number;
      keyword: string;
    }
    
    const matches: Match[] = [];
    const matchedIndices = new Set<number>();
    
    keywords.forEach((keyword) => {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedKeyword, 'g');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        const startIndex = match.index;
        const endIndex = startIndex + keyword.length;
        
        // 检查是否与已匹配的部分重叠
        let hasOverlap = false;
        for (let i = startIndex; i < endIndex; i++) {
          if (matchedIndices.has(i)) {
            hasOverlap = true;
            break;
          }
        }
        
        if (!hasOverlap) {
          matches.push({
            index: startIndex,
            length: keyword.length,
            keyword: keyword,
          });
          
          for (let i = startIndex; i < endIndex; i++) {
            matchedIndices.add(i);
          }
        }
      }
    });
    
    if (matches.length === 0) {
      return <span>{text}</span>;
    }
    
    // 按位置排序
    matches.sort((a, b) => a.index - b.index);
    
    // 构建结果
    const result: JSX.Element[] = [];
    let lastIndex = 0;
    
    matches.forEach((match, matchIdx) => {
      // 添加匹配前的文本
      if (match.index > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}-${matchIdx}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // 添加高亮的句型部分
      result.push(
        <span key={`highlight-${match.index}-${matchIdx}`} className={`${levelColorClass} px-1 rounded font-semibold`}>
          {text.substring(match.index, match.index + match.length)}
        </span>
      );
      
      lastIndex = match.index + match.length;
    });
    
    // 添加剩余的文本
    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}-end`}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return <span>{result}</span>;
  };

  // 将词汇分析数据转换为 Token 格式
  const convertVocabToTokens = (vocab: WordAnalysis[]): Token[] => {
    return vocab.map(item => ({
      text: item.word,
      glossZh: item.meaning,
      glossKr: item.meaningKr || '',
      example: item.example || '',
      pinyin: item.pinyin,
      level: item.level, // 传递难度等级，用于颜色标记
    }));
  };

  // 获取所有词汇（根据等级筛选）
  const displayedVocab = useMemo(() => {
    const allVocab = getAllVocabUtil(videoId);
    if (selectedLevel === 'all') {
      return allVocab;
    }
    // 将 selectedLevel 转换为对应的 level 值
    const levelMap: Record<string, 'basic' | 'intermediate' | 'advanced'> = {
      'basic': 'basic',
      'intermediate': 'intermediate',
      'advanced': 'advanced'
    };
    return allVocab.filter(word => word.level === levelMap[selectedLevel]);
  }, [videoId, selectedLevel]);

  // 获取所有句式（根据等级筛选）
  const getAllSentenceStructures = useMemo(() => {
    const structures: Array<{ sentenceIndex: number; structure: any }> = [];
    for (let i = 1; i <= subtitles.length; i++) {
      const structure = getSentenceStructureUtil(videoId, i);
      // 修正：只显示有structure字段且不为空的句式
      if (structure && structure.structure && structure.structure.trim()) {
        // 将 structure.level 转换为对应的筛选值
        const levelMap: Record<string, string> = {
          'beginner': 'basic',
          'intermediate': 'intermediate',
          'advanced': 'advanced'
        };
        const structureLevel = levelMap[structure.level] || 'basic';
        
        // 如果选中了特定等级，只显示该等级的句式
        if (selectedLevel === 'all' || structureLevel === selectedLevel) {
          structures.push({ sentenceIndex: i, structure });
        }
      }
    }
    return structures;
  }, [subtitles.length, selectedLevel]);

  // 同时渲染句式和词汇的颜色标记
  const renderLyricWithBoth = (text: string, sentenceIndex: number, structure: string, level: 'beginner' | 'intermediate' | 'advanced') => {
    const vocab = getVocabForSentenceUtil(videoId, sentenceIndex);
    const structureLevelColorClass = level === 'beginner' 
      ? 'bg-green-100 text-green-800' 
      : level === 'intermediate' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-purple-100 text-purple-800';
    
    // 提取句式的关键词
    let keywords: string[] = [];
    let pattern = structure.replace(/[……]/g, '').trim();
    pattern = pattern.replace(/동사\+/g, '');
    if (pattern.includes('+')) {
      keywords = pattern.split('+').map(k => k.trim()).filter(k => k.length > 0);
    } else {
      const chineseChars = pattern.match(/[\u4e00-\u9fff]+/g);
      if (chineseChars) {
        keywords = chineseChars;
      } else {
        keywords = [pattern];
      }
    }
    keywords = keywords.filter(k => k.length > 0);
    
    // 创建匹配数组（包含类型：'structure' 或 'vocab'）
    interface Match {
      index: number;
      length: number;
      type: 'structure' | 'vocab';
      level?: 'basic' | 'intermediate' | 'advanced';
      colorClass: string;
    }
    
    const matches: Match[] = [];
    const matchedIndices = new Set<number>();
    
    // 先添加句式的匹配
    keywords.forEach((keyword) => {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedKeyword, 'g');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        const startIndex = match.index;
        const endIndex = startIndex + keyword.length;
        
        let hasOverlap = false;
        for (let i = startIndex; i < endIndex; i++) {
          if (matchedIndices.has(i)) {
            hasOverlap = true;
            break;
          }
        }
        
        if (!hasOverlap) {
          matches.push({
            index: startIndex,
            length: keyword.length,
            type: 'structure',
            colorClass: structureLevelColorClass,
          });
          
          for (let i = startIndex; i < endIndex; i++) {
            matchedIndices.add(i);
          }
        }
      }
    });
    
    // 再添加词汇的匹配（词汇优先级更高，会覆盖句式的标记）
    const sortedVocab = [...vocab].sort((a, b) => b.word.length - a.word.length);
    sortedVocab.forEach((wordItem) => {
      const word = wordItem.word;
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedWord, 'g');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        const startIndex = match.index;
        const endIndex = startIndex + word.length;
        
        // 检查是否与已匹配的部分重叠
        let hasOverlap = false;
        for (let i = startIndex; i < endIndex; i++) {
          if (matchedIndices.has(i)) {
            hasOverlap = true;
            break;
          }
        }
        
        if (!hasOverlap) {
          // 移除可能重叠的句式匹配
          const overlappingStructureMatches = matches.filter(m => 
            m.type === 'structure' && 
            !(m.index + m.length <= startIndex || m.index >= endIndex)
          );
          overlappingStructureMatches.forEach(m => {
            for (let i = m.index; i < m.index + m.length; i++) {
              matchedIndices.delete(i);
            }
          });
          matches.splice(matches.indexOf(overlappingStructureMatches[0]), overlappingStructureMatches.length);
          
          matches.push({
            index: startIndex,
            length: word.length,
            type: 'vocab',
            level: wordItem.level,
            colorClass: getLyricWordBgClass(wordItem.level),
          });
          
          for (let i = startIndex; i < endIndex; i++) {
            matchedIndices.add(i);
          }
        }
      }
    });
    
    // 按索引排序
    matches.sort((a, b) => a.index - b.index);
    
    // 构建结果
    const result: JSX.Element[] = [];
    let lastIndex = 0;
    
    matches.forEach((match, matchIdx) => {
      // 添加匹配前的文本
      if (match.index > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}-${matchIdx}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // 添加带背景颜色的词汇或句式
      result.push(
        <span key={`word-${match.index}-${matchIdx}`} className={`${match.colorClass} px-1 rounded font-semibold`}>
          {text.substring(match.index, match.index + match.length)}
        </span>
      );
      
      lastIndex = match.index + match.length;
    });
    
    // 添加剩余文本
    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}-end`}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return result.length > 0 ? <>{result}</> : <span>{text}</span>;
  };

  // 渲染歌词（带颜色标记）
  const renderLyricWithColors = (text: string, sentenceIndex: number) => {
    const vocab = getVocabForSentenceUtil(videoId, sentenceIndex);
    if (vocab.length === 0) {
      return <span>{text}</span>;
    }

    // 按词汇长度排序，优先匹配长词
    const sortedVocab = [...vocab].sort((a, b) => b.word.length - a.word.length);
    
    // 创建匹配数组
    interface Match {
      index: number;
      length: number;
      word: WordAnalysis;
    }
    
    const matches: Match[] = [];
    const matchedIndices = new Set<number>();
    
    // 找到所有匹配的词汇
    sortedVocab.forEach((wordItem) => {
      const word = wordItem.word;
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedWord, 'g');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
        const startIndex = match.index;
        const endIndex = startIndex + word.length;
        
        // 检查是否与已匹配的词汇重叠
        let hasOverlap = false;
        for (let i = startIndex; i < endIndex; i++) {
          if (matchedIndices.has(i)) {
            hasOverlap = true;
            break;
          }
        }
        
        if (!hasOverlap) {
          matches.push({
            index: startIndex,
            length: word.length,
            word: wordItem,
          });
          
          // 标记已匹配的索引
          for (let i = startIndex; i < endIndex; i++) {
            matchedIndices.add(i);
          }
        }
      }
    });
    
    // 按索引排序
    matches.sort((a, b) => a.index - b.index);
    
    // 构建结果
    const result: JSX.Element[] = [];
    let lastIndex = 0;
    
    matches.forEach((match, matchIdx) => {
      // 添加匹配前的文本
      if (match.index > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}-${matchIdx}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
        // 添加带背景颜色的词汇
        const bgClass = getLyricWordBgClass(match.word.level);
      
      result.push(
        <span key={`word-${match.index}-${matchIdx}`} className={`${bgClass} px-1 rounded font-semibold`}>
          {text.substring(match.index, match.index + match.length)}
        </span>
      );
      
      lastIndex = match.index + match.length;
    });
    
    // 添加剩余文本
    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}-end`}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return result.length > 0 ? <>{result}</> : <span>{text}</span>;
  };

  // 获取词汇颜色样式（淡色系）
  const getVocabColorClass = (level: 'basic' | 'intermediate' | 'advanced') => {
    switch (level) {
      case 'basic':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'intermediate':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'advanced':
        return 'bg-purple-50 border-purple-200 text-purple-700';
    }
  };

  // 获取歌词中词汇的背景颜色
  const getLyricWordBgClass = (level: 'basic' | 'intermediate' | 'advanced') => {
    switch (level) {
      case 'basic':
        return 'bg-green-100';
      case 'intermediate':
        return 'bg-blue-100';
      case 'advanced':
        return 'bg-purple-100';
    }
  };

  const getLevelLabel = (level: 'basic' | 'intermediate' | 'advanced') => {
    switch (level) {
      case 'basic':
        return youtubePageTranslations.ko.tabBasic;
      case 'intermediate':
        return youtubePageTranslations.ko.tabIntermediate;
      case 'advanced':
        return youtubePageTranslations.ko.tabAdvanced;
    }
  };

  // 句式 level 为 'beginner' | 'intermediate' | 'advanced'，显示韩文
  const getLevelLabelKr = (level: string) => {
    if (level === 'beginner' || level === 'basic') return youtubePageTranslations.ko.tabBasic;
    if (level === 'intermediate') return youtubePageTranslations.ko.tabIntermediate;
    return youtubePageTranslations.ko.tabAdvanced;
  };

  // 获取等级颜色（用于圈起来）
  const getLevelColor = (level: 'basic' | 'intermediate' | 'advanced') => {
    switch (level) {
      case 'basic':
        return 'text-green-500 border-green-500';
      case 'intermediate':
        return 'text-blue-500 border-blue-500';
      case 'advanced':
        return 'text-purple-500 border-purple-500';
    }
  };

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 返回按钮和标题 */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {youtubePageTranslations.ko.backToSongLibrary}
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {titleKr}
          </h1>
          
          {/* 颜色标记系统 - 爱心形状 */}
          <div className="mt-6 flex justify-end">
            <div className="flex items-center gap-6">
              {/* 기초 - 淡绿色爱心 */}
              <div className="relative">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#86efac" stroke="#4ade80" strokeWidth="1.5"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-green-600">{youtubePageTranslations.ko.tabBasic}</span>
              </div>
              
              {/* 중급 - 淡蓝色爱心 */}
              <div className="relative">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#93c5fd" stroke="#60a5fa" strokeWidth="1.5"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-blue-600">{youtubePageTranslations.ko.tabIntermediate}</span>
              </div>
              
              {/* 고급 - 淡紫色爱心 */}
              <div className="relative">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#c4b5fd" stroke="#a78bfa" strokeWidth="1.5"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-purple-600">{youtubePageTranslations.ko.tabAdvanced}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域：视频（左上）+ 歌词（右上）+ 解析（下方） */}
        <div className="space-y-4">
          {/* 视频和歌词并排 */}
          <div className="grid grid-cols-12 gap-4 items-start">
            {/* 左侧：视频 */}
            <div className={`${
              videoSize === 'small' ? 'col-span-4' : 
              videoSize === 'medium' ? 'col-span-6' : 
              'col-span-8'
            } bg-white rounded-xl shadow-sm border p-4 transition-all`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">{youtubePageTranslations.ko.musicVideo}</h2>
                <div className="flex gap-2">
                  {/* 整首跟唱按钮 - 缩小版 */}
                  {!isSingAlongMode && (
                    <button
                      onClick={() => {
                        setIsSingAlongMode(true);
                      }}
                      className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-1.5"
                      title={youtubePageTranslations.ko.singAlongFull}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <span className="text-xs">{youtubePageTranslations.ko.singAlongFull}</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (videoSize === 'small') setVideoSize('medium');
                      else if (videoSize === 'medium') setVideoSize('large');
                      else setVideoSize('small');
                    }}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                    title={youtubePageTranslations.ko.toggleVideoSize}
                  >
                    {videoSize === 'small' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
{youtubePageTranslations.ko.enlarge}
                    </>
                    ) : videoSize === 'medium' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        {youtubePageTranslations.ko.enlarge}
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        {youtubePageTranslations.ko.shrink}
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black relative">
                {!playerReady ? (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p>{youtubePageTranslations.ko.loadingPlayer}</p>
                    </div>
                  </div>
                ) : (
                  <div id="youtube-player" className="w-full h-full"></div>
                )}
              </div>
              
              
              {/* 整首跟唱功能区域 */}
              <div className="mt-4 space-y-3">
                {/* 跟唱模式控制面板 */}
                {isSingAlongMode && (
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    {/* 静音控制 */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{youtubePageTranslations.ko.videoMute}</span>
                      <button
                        onClick={() => {
                          if (playerRef.current) {
                            const isMuted = playerRef.current.isMuted();
                            if (isMuted) {
                              playerRef.current.unMute();
                              setIsVideoMuted(false);
                            } else {
                              playerRef.current.mute();
                              setIsVideoMuted(true);
                            }
                          }
                        }}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          isVideoMuted
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {isVideoMuted ? youtubePageTranslations.ko.unmute : youtubePageTranslations.ko.mute}
                      </button>
                    </div>

                    {/* 录音控制 */}
                    {!isRecording && !hasRecording && (
                      <button
                        onClick={startRecording}
                        className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        {youtubePageTranslations.ko.startRecording}
                      </button>
                    )}

                    {/* 录音中界面 */}
                    {isRecording && (
                      <div className="space-y-3">
                        {/* 录音时间和状态 */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">
                              录音中：{recordSec}s
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {isRecordingPaused ? (
                              <button
                                onClick={resumeRecording}
                                className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                              >
                                继续录音
                              </button>
                            ) : (
                              <button
                                onClick={pauseRecording}
                                className="px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm font-medium transition-colors"
                              >
                                暂停
                              </button>
                            )}
                            <button
                              onClick={stopRecording}
                              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                            >
                              结束录音
                            </button>
                          </div>
                        </div>

                        {/* 音波可视化 */}
                        <div className="h-20 bg-gray-100 rounded-lg p-2 flex items-end justify-center gap-1">
                          {audioData.length > 0 ? (
                            audioData.map((value, index) => (
                              <div
                                key={index}
                                className="bg-blue-500 rounded-t"
                                style={{
                                  width: '4px',
                                  height: `${Math.max(4, (value / 255) * 100)}%`,
                                  minHeight: '4px',
                                }}
                              />
                            ))
                          ) : (
                            <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 24 }}>
                              {[0,1,2,3,4].map(i => (
                                <span
                                  key={i}
                                  style={{
                                    width: 6,
                                    height: 8,
                                    background: "#333",
                                    animation: `wave 0.8s ${i * 0.1}s infinite ease-in-out`
                                  }}
                                />
                              ))}
                              <style>{`
                                @keyframes wave {
                                  0%,100% { height: 6px; }
                                  50% { height: 24px; }
                                }
                              `}</style>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* 录音完成界面 */}
                    {hasRecording && !isRecording && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">
                            录音完成 {formatRecordingTime(recordingDuration)}
                          </span>
                          <div className="flex gap-2">
                            <button
                              onClick={generateEvaluation}
                              className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                              disabled={!recordedAudioBlob || isEvaluating}
                            >
                              {isEvaluating ? (
                                <>
                                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                  </svg>
                                  {youtubePageTranslations.ko.scoringInProgressShort}
                                </>
                              ) : (
                                <>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                  </svg>
                                  {songPageTranslations.ko.submitScore}
                                </>
                              )}
                            </button>
                            <button
                              onClick={downloadRecording}
                              className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                              disabled={!recordedAudioBlob}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              {youtubePageTranslations.ko.downloadRecording}
                            </button>
                            <button
                              onClick={restartRecording}
                              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                            >
                              重新录音
                            </button>
                          </div>
                        </div>

                        {/* 播放录音控制 */}
                        {recordedAudioBlob && (
                          <div className="space-y-2 bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  if (isPlayingRecording) {
                                    pauseRecordingPlayback();
                                  } else {
                                    playRecording();
                                  }
                                }}
                                className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                              >
                                {isPlayingRecording ? (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                )}
                              </button>
                              <div className="flex-1">
                                <input
                                  type="range"
                                  min="0"
                                  max={recordingTotalDuration || 0}
                                  value={recordingCurrentTime}
                                  onChange={(e) => {
                                    const newTime = parseFloat(e.target.value);
                                    setRecordingCurrentTime(newTime);
                                  }}
                                  onMouseDown={() => {
                                    setIsDraggingRecording(true);
                                    isDraggingRecordingRef.current = true;
                                  }}
                                  onMouseUp={(e) => {
                                    const newTime = parseFloat((e.target as HTMLInputElement).value);
                                    setRecordingPlaybackTime(newTime);
                                    setIsDraggingRecording(false);
                                    isDraggingRecordingRef.current = false;
                                  }}
                                  onTouchStart={() => {
                                    setIsDraggingRecording(true);
                                    isDraggingRecordingRef.current = true;
                                  }}
                                  onTouchEnd={(e) => {
                                    const newTime = parseFloat((e.target as HTMLInputElement).value);
                                    setRecordingPlaybackTime(newTime);
                                    setIsDraggingRecording(false);
                                    isDraggingRecordingRef.current = false;
                                  }}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                  style={{
                                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(recordingCurrentTime / (recordingTotalDuration || 1)) * 100}%, #e5e7eb ${(recordingCurrentTime / (recordingTotalDuration || 1)) * 100}%, #e5e7eb 100%)`
                                  }}
                                />
                              </div>
                              <div className="flex-shrink-0 text-xs text-gray-600 min-w-[80px] text-right">
                                {formatTime(recordingCurrentTime)} / {formatTime(recordingTotalDuration)}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 评分中提示 */}
                        {isEvaluating && (
                          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200">
                            <div className="flex items-center justify-center gap-3">
                              <svg className="w-6 h-6 text-purple-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                              <span className="text-lg font-medium text-purple-700">{youtubePageTranslations.ko.scoringPleaseWait}</span>
                            </div>
                          </div>
                        )}

                        {/* 评分结果 */}
                        {showEvaluation && evaluationResult && (
                          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                {youtubePageTranslations.ko.scoreResult}
                              </h3>
                              <button
                                onClick={() => setShowEvaluation(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>

                            {/* 雷达图 */}
                            <div className="bg-white rounded-lg p-4 border border-purple-100">
                              <div className="text-xs text-gray-500 mb-3 text-center">{youtubePageTranslations.ko.radarTitle}</div>
                              <SpeechRadarChart
                                data={[
                                  { subject: youtubePageTranslations.ko.pronAccuracy, score: evaluationResult.pronunciation, fullMark: 100 },
                                  { subject: youtubePageTranslations.ko.rhythm, score: evaluationResult.rhythm, fullMark: 100 },
                                  { subject: youtubePageTranslations.ko.fluency, score: Math.round(evaluationResult.pronunciation * 0.9), fullMark: 100 },
                                  { subject: youtubePageTranslations.ko.emotion, score: Math.round(evaluationResult.rhythm * 0.85), fullMark: 100 },
                                  { subject: youtubePageTranslations.ko.overall, score: evaluationResult.totalScore, fullMark: 100 },
                                ]}
                              />
                            </div>

                            {/* 总分 */}
                            <div className="text-center py-3">
                              <div className="text-4xl font-bold text-purple-600 mb-1">
                                {evaluationResult.totalScore}
                                <span className="text-2xl text-gray-500">/100</span>
                              </div>
                              <div className="text-sm text-gray-600">{youtubePageTranslations.ko.totalScore}</div>
                            </div>

                            {/* 分项评分 */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white rounded-lg p-3 border border-purple-100">
                                <div className="text-xs text-gray-500 mb-1">{youtubePageTranslations.ko.pronAccuracy}</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-purple-500 h-2 rounded-full transition-all"
                                      style={{ width: `${evaluationResult.pronunciation}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-700 w-10 text-right">
                                    {evaluationResult.pronunciation}{youtubePageTranslations.ko.scoreUnit}
                                  </span>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-3 border border-purple-100">
                                <div className="text-xs text-gray-500 mb-1">{youtubePageTranslations.ko.rhythm}</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full transition-all"
                                      style={{ width: `${evaluationResult.rhythm}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-700 w-10 text-right">
                                    {evaluationResult.rhythm}{youtubePageTranslations.ko.scoreUnit}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* 整体评价 */}
                            <div className="bg-white rounded-lg p-3 border border-purple-100">
                              <div className="text-xs text-gray-500 mb-2">{youtubePageTranslations.ko.overallComment}</div>
                              <div className="text-sm text-gray-700 font-medium">{evaluationResult.overall}</div>
                            </div>

                            {/* 改进建议 */}
                            <div className="bg-white rounded-lg p-3 border border-purple-100">
                              <div className="text-xs text-gray-500 mb-2">{youtubePageTranslations.ko.improvement}</div>
                              <ul className="space-y-1">
                                {evaluationResult.suggestions.map((suggestion, index) => (
                                  <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                    <span className="text-purple-500 mt-0.5">•</span>
                                    <span>{suggestion}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 退出跟唱模式 */}
                    <button
                      onClick={() => {
                        setIsSingAlongMode(false);
                        if (isRecording) {
                          stopRecording();
                        }
                        setIsVideoMuted(false);
                        if (playerRef.current) {
                          playerRef.current.unMute();
                        }
                      }}
                      className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      {youtubePageTranslations.ko.exitSingAlong}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 右侧：歌词显示区 */}
            <div
              ref={lyricsCardRef}
              className={`${
              videoSize === 'small' ? 'col-span-8' : 
              videoSize === 'medium' ? 'col-span-6' : 
              'col-span-4'
            } bg-white rounded-xl shadow-sm border p-4 transition-all`}>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">{youtubePageTranslations.ko.lyrics}</h2>
              
              {/* 模式切换栏 */}
              <div className="mb-4 flex items-center justify-between border-b pb-3">
                <button
                  onClick={() => setLyricMode('standard')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    lyricMode === 'standard'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {youtubePageTranslations.ko.modeStandard}
                </button>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setLyricMode('vocab')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lyricMode === 'vocab'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {youtubePageTranslations.ko.modeVocab}
                  </button>
                  <button
                    onClick={() => setLyricMode('sentence')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lyricMode === 'sentence'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {youtubePageTranslations.ko.modeSentence}
                  </button>
                  <button
                    onClick={() => setLyricMode('pronunciation')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lyricMode === 'pronunciation'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {youtubePageTranslations.ko.modePronunciation}
                  </button>
                </div>
              </div>
              
              <div className="h-[400px] overflow-y-auto space-y-2">
                {subtitles.map((sub, idx) => {
                  const sentenceIndex = idx + 1;
                  const vocab = getVocabForSentenceUtil(videoId, sentenceIndex);
                  const tokens: Token[] = convertVocabToTokens(vocab);
                  // 提取行号和歌词内容（只提取一次）；无行号时用句序号显示，保证界面总有行号
                  const { lineNumber, lyricText } = extractLineNumberAndText(sub.text);
                  const displayLineNumber = lineNumber || String(sentenceIndex);
                  
                  return (
                    <div
                      key={idx}
                      id={`subtitle-${idx}`}
                      className="relative"
                    >
                      <div
                      onClick={(e) => {
                        // 只有点击空白部分（不是词卡）才触发播放
                        const target = e.target as HTMLElement;
                        if (!target.closest('[data-word]') && !target.closest('[data-word-tooltip]')) {
                          handleSubtitleClick(sub);
                        }
                      }}
                        className={`p-3 rounded-lg cursor-pointer transition-all border-2 ${
                        currentSubtitleIndex === idx
                          ? 'bg-blue-50 border-blue-500 shadow-md'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {/* {youtubePageTranslations.ko.practice}气泡 - 只遮挡该句歌词内容，不影响视频 */}
                      {showPractice === sentenceIndex && vocab.length > 0 && (() => {
                        const questions = getPracticeForSentenceUtil(videoId, sentenceIndex);
                        const currentQuestion = questions[currentQuestionIndex];
                        const totalQuestions = questions.length;
                        
                        // 生成题目唯一标识（用于存储乱序选项）
                        const questionKey = `${sentenceIndex}-${currentQuestionIndex}`;
                        
                        // 获取或生成乱序选项（只对选择题、翻译题、填空题）
                        const getShuffledOptions = () => {
                          if (!currentQuestion) return [];
                          // 排序题不需要打乱
                          if (currentQuestion.type === 'sentenceOrder') {
                            return currentQuestion.options;
                          }
                          // 如果已经有乱序选项，直接返回
                          if (shuffledOptionsMap[questionKey]) {
                            return shuffledOptionsMap[questionKey];
                          }
                          // 生成新的乱序选项
                          const options = [...currentQuestion.options];
                          // Fisher-Yates 洗牌算法
                          for (let i = options.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [options[i], options[j]] = [options[j], options[i]];
                          }
                          // 保存乱序选项
                          setShuffledOptionsMap(prev => ({ ...prev, [questionKey]: options }));
                          return options;
                        };
                        
                        const shuffledOptions = getShuffledOptions();
                        
                        // 判断答案是否正确（排序题需要特殊处理）
                        const isCorrect = currentQuestion && (() => {
                          const userAnswer = userAnswers[currentQuestionIndex];
                          if (!userAnswer) return false;
                          if (currentQuestion.type === 'sentenceOrder') {
                            // 排序题：比较拼接后的字符串（去除空格）
                            return userAnswer.replace(/\s+/g, '') === currentQuestion.correctAnswer.replace(/\s+/g, '');
                          }
                          return userAnswer === currentQuestion.correctAnswer;
                        })();
                        const hasAnswered = currentQuestion && userAnswers[currentQuestionIndex] !== undefined;
                        const isResultShown = currentQuestion && showResult[currentQuestionIndex];

                        // 计算答题统计
                        const answeredCount = Object.keys(userAnswers).length;
                        const correctCount = questions.filter((q, idx) => 
                          userAnswers[idx] !== undefined && userAnswers[idx] === q.correctAnswer
                        ).length;
                        const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

                        return (
                          <div className="absolute top-0 left-0 right-0 bg-white bg-opacity-95 rounded-lg z-50 p-4 shadow-lg border-2 border-purple-300" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-sm font-semibold text-gray-800">{youtubePageTranslations.ko.sentenceVocabPractice}</h3>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowPractice(null);
                                  setCurrentQuestionIndex(0);
                                  setUserAnswers({});
                                  setShowResult({});
                                  setSelectedOptions({});
                                  setShuffledOptionsMap({});
                                }}
                                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                              >
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>

                            {/* 答题统计 */}
                            {totalQuestions > 0 && (
                              <div className="mb-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-gray-700">{youtubePageTranslations.ko.progress}: {answeredCount}/{totalQuestions}</span>
                                  <span className="text-gray-700">{youtubePageTranslations.ko.correct}: {correctCount}/{answeredCount || 1}</span>
                                  <span className="font-semibold text-blue-700">{youtubePageTranslations.ko.score}: {score}{youtubePageTranslations.ko.scoreUnit}</span>
                                </div>
                              </div>
                            )}

                            {/* 题目内容 */}
                            {currentQuestion ? (
                              <div className="space-y-3">
                                {/* 题目信息 */}
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">题目 {currentQuestionIndex + 1}/{totalQuestions}</span>
                                    <span className={`px-2 py-0.5 rounded text-xs ${
                                      currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                                      currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-red-100 text-red-700'
                                    }`}>
                                      {currentQuestion.difficulty === 'easy' ? '简单' : currentQuestion.difficulty === 'medium' ? '中等' : '困难'}
                                    </span>
                                  </div>
                                </div>

                                {/* 题目文本 */}
                                <div className="text-sm font-medium text-gray-800">{currentQuestion.question}</div>

                                {/* 选择题/翻译题/填空题 */}
                                {(currentQuestion.type === 'multipleChoice' || currentQuestion.type === 'translation' || currentQuestion.type === 'fillBlank') && (
                                  <div className="space-y-2">
                                    {shuffledOptions.map((option, optIdx) => {
                                      const isSelected = userAnswers[currentQuestionIndex] === option;
                                      const isCorrectOption = option === currentQuestion.correctAnswer;
                                      let bgClass = 'bg-white border-gray-300 hover:bg-gray-50';
                                      
                                      if (isResultShown) {
                                        if (isCorrectOption) {
                                          bgClass = 'bg-green-100 border-green-500';
                                        } else if (isSelected && !isCorrectOption) {
                                          bgClass = 'bg-red-100 border-red-500';
                                        }
                                      } else if (isSelected) {
                                        bgClass = 'bg-blue-100 border-blue-500';
                                      }

                                      return (
                                        <button
                                          key={optIdx}
                                          onClick={() => {
                                            if (!isResultShown) {
                                              setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: option }));
                                              // 自动显示结果
                                              setShowResult(prev => ({ ...prev, [currentQuestionIndex]: true }));
                                            }
                                          }}
                                          disabled={isResultShown}
                                          className={`w-full text-left p-2 rounded-lg border-2 transition-all text-xs ${bgClass} ${
                                            isResultShown ? 'cursor-default' : 'cursor-pointer'
                                          }`}
                                        >
                                          {option}
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}

                                {/* 排序题 */}
                                {currentQuestion.type === 'sentenceOrder' && (
                                  <div className="space-y-3">
                                    {/* 已选中的选项 */}
                                    <div className={`min-h-[60px] p-2 rounded-lg border-2 ${
                                      isResultShown 
                                        ? isCorrect 
                                          ? 'bg-blue-50 border-blue-500 border-solid' 
                                          : 'bg-red-50 border-red-500 border-solid'
                                        : 'bg-gray-50 border-dashed border-gray-300'
                                    }`}>
                                      {selectedOptions[currentQuestionIndex] && selectedOptions[currentQuestionIndex].length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                          {selectedOptions[currentQuestionIndex].map((opt, optIdx) => (
                                            <button
                                              key={optIdx}
                                              onClick={() => {
                                                if (!isResultShown) {
                                                  const newSelected = (selectedOptions[currentQuestionIndex] || []).filter((_, i) => i !== optIdx);
                                                  setSelectedOptions(prev => ({
                                                    ...prev,
                                                    [currentQuestionIndex]: newSelected
                                                  }));
                                                  // 如果移除选项后，重新计算答案
                                                  if (newSelected.length > 0) {
                                                    const answer = newSelected.join('');
                                                    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
                                                  } else {
                                                    setUserAnswers(prev => {
                                                      const newAnswers = { ...prev };
                                                      delete newAnswers[currentQuestionIndex];
                                                      return newAnswers;
                                                    });
                                                    setShowResult(prev => ({ ...prev, [currentQuestionIndex]: false }));
                                                  }
                                                }
                                              }}
                                              disabled={isResultShown}
                                              className="px-3 py-1 bg-blue-200 text-blue-800 rounded-lg text-xs font-medium hover:bg-blue-300 transition-colors"
                                            >
                                              {opt} ×
                                            </button>
                                          ))}
                                        </div>
                                      ) : (
                                        <div className="text-xs text-gray-400 text-center py-2">点击下方选项进行排序</div>
                                      )}
                                    </div>
                                    {/* 可选选项 */}
                                    <div className="flex flex-wrap gap-2">
                                      {currentQuestion.options
                                        .filter(opt => !selectedOptions[currentQuestionIndex]?.includes(opt))
                                        .map((option, optIdx) => (
                                          <button
                                            key={optIdx}
                                            onClick={() => {
                                              if (!isResultShown) {
                                                const newSelected = [...(selectedOptions[currentQuestionIndex] || []), option];
                                                setSelectedOptions(prev => ({
                                                  ...prev,
                                                  [currentQuestionIndex]: newSelected
                                                }));
                                                // 当所有选项都选择完毕时，自动显示结果
                                                if (newSelected.length === currentQuestion.options.length) {
                                                  const answer = newSelected.join('');
                                                  setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
                                                  setShowResult(prev => ({ ...prev, [currentQuestionIndex]: true }));
                                                }
                                              }
                                            }}
                                            disabled={isResultShown}
                                            className="px-3 py-1 bg-white border-2 border-gray-300 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
                                          >
                                            {option}
                                          </button>
                                        ))}
                                    </div>
                                  </div>
                                )}

                                {/* 结果显示 - 只有排序题显示正确答案 */}
                                {isResultShown && currentQuestion.type === 'sentenceOrder' && (
                                  <div className={`p-3 rounded-lg border-2 ${
                                    isCorrect ? 'bg-blue-50 border-blue-500' : 'bg-red-50 border-red-500'
                                  }`}>
                                    <div className="text-xs text-gray-700">
                                      <span className="font-medium">正确答案：</span>{currentQuestion.correctAnswer}
                                    </div>
                                  </div>
                                )}

                                {/* 操作按钮 */}
                                <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-200">
                                  <button
                                    onClick={() => {
                                      if (currentQuestionIndex > 0) {
                                        setCurrentQuestionIndex(currentQuestionIndex - 1);
                                      }
                                    }}
                                    disabled={currentQuestionIndex === 0}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                      currentQuestionIndex === 0
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                  >
                                    上一题
                                  </button>
                                  
                                  {isResultShown && (
                                    <button
                                      onClick={() => {
                                        if (currentQuestionIndex < totalQuestions - 1) {
                                          setCurrentQuestionIndex(currentQuestionIndex + 1);
                                          // 清除下一题的结果显示状态
                                          setShowResult(prev => ({ ...prev, [currentQuestionIndex + 1]: false }));
                                        } else {
                                          // 所有题目完成，关闭练习对话框
                                          setShowPractice(null);
                                          setCurrentQuestionIndex(0);
                                          setUserAnswers({});
                                          setShowResult({});
                                          setSelectedOptions({});
                                          setShuffledOptionsMap({});
                                        }
                                      }}
                                      className="px-4 py-1.5 rounded-lg text-xs font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
                                    >
                                      {currentQuestionIndex < totalQuestions - 1 ? '下一题' : '完成练习'}
                                    </button>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="text-center py-8 text-gray-500 text-sm">
                                暂无练习题
                              </div>
                            )}
                          </div>
                        );
                      })()}
                      {/* 时间戳 - 右上角 */}
                      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                        {currentSubtitleIndex === idx && (
                          <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded">
                            正在播放
                          </span>
                        )}
                        <div className="text-xs text-gray-500">
                          {formatTime(sub.startTime)} - {formatTime(sub.endTime)}
                        </div>
                      </div>
                      
                      {/* 中文歌词 - 使用 SentenceView 组件 */}
                      <div className="mb-1 pr-32 relative">
                        <div className="text-lg leading-relaxed flex items-start gap-2">
                          {/* 行号 */}
                          {displayLineNumber && (
                            <span className="text-gray-500 font-medium flex-shrink-0 w-8">{displayLineNumber}</span>
                          )}
                          {/* 歌词内容 */}
                          <div className="flex-1 min-w-0 flex items-center gap-2">
                            <div className="flex-1 min-w-0">
                              <style>{`
                                #subtitle-${idx} .sentence-view-wrapper * {
                                  text-align: left !important;
                                  white-space: normal !important;
                                  overflow: visible !important;
                                  max-width: none !important;
                                  width: auto !important;
                                }
                                #subtitle-${idx} .sentence-view-wrapper .text-2xl,
                                #subtitle-${idx} .sentence-view-wrapper .text-3xl {
                                  font-size: 1.125rem !important;
                                  padding-top: 0 !important;
                                  padding-bottom: 0 !important;
                                  padding-left: 0.5rem !important;
                                  padding-right: 0.5rem !important;
                                  text-align: left !important;
                                }
                              `}</style>
                              <div className="sentence-view-wrapper">
                                {lyricMode === 'sentence' && (() => {
                                  const structureData = getSentenceStructureUtil(videoId, sentenceIndex);
                                  if (structureData && structureData.structure) {
                                    return (
                                      <div className="text-lg leading-relaxed">
                                        {renderLyricWithStructure(lyricText, structureData.structure, structureData.level)}
                                      </div>
                                    );
                                  }
                                  return (
                                    <SentenceView
                                      sentence={lyricText}
                                      tokens={tokens}
                                      globalActiveTokenId={null}
                                      onTokenActivate={undefined}
                                      tokenIdPrefix={`youtube-subtitle-${idx}`}
                                      disableWordCards={true}
                                    />
                                  );
                                })()}
                                {lyricMode === 'vocab' && (
                                  <div className="text-lg leading-relaxed">
                                    {renderLyricWithColors(lyricText, sentenceIndex)}
                                  </div>
                                )}
                                {lyricMode === 'standard' && (
                                  <SentenceView
                                    sentence={lyricText}
                                    tokens={tokens}
                                    globalActiveTokenId={globalActiveTokenId}
                                    onTokenActivate={(tokenId) => setGlobalActiveTokenId(tokenId)}
                                    tokenIdPrefix={`youtube-subtitle-${idx}`}
                                    disableWordCards={false}
                                  />
                                )}
                                {lyricMode === 'pronunciation' && (
                                  <div className="text-lg leading-relaxed">
                                    {(() => {
                                      // 同时显示句式和词汇的颜色标记
                                      const structureData = getSentenceStructureUtil(videoId, sentenceIndex);
                                      const vocab = getVocabForSentenceUtil(videoId, sentenceIndex);
                                      
                                      // 如果既有句式又有词汇，需要合并标记
                                      if (structureData && structureData.structure && vocab.length > 0) {
                                        // 先应用句式的颜色标记
                                        const structureResult = renderLyricWithStructure(lyricText, structureData.structure, structureData.level);
                                        
                                        // 然后在此基础上应用词汇的颜色标记
                                        // 由于React元素已经渲染，我们需要重新处理文本
                                        // 创建一个新的函数来合并两种标记
                                        return renderLyricWithBoth(lyricText, sentenceIndex, structureData.structure, structureData.level);
                                      } else if (structureData && structureData.structure) {
                                        // 只有句式
                                        return renderLyricWithStructure(lyricText, structureData.structure, structureData.level);
                                      } else if (vocab.length > 0) {
                                        // 只有词汇
                                        return renderLyricWithColors(lyricText, sentenceIndex);
                                      } else {
                                        // 都没有
                                        return <span>{lyricText}</span>;
                                      }
                                    })()}
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* 朗读按钮 - 放在中文歌词后面 */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlaySentence(lyricText);
                              }}
                              className="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                              title="播放发音"
                            >
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* 拼音显示 */}
                      {(lyricMode === 'standard' || lyricMode === 'pronunciation' || lyricMode === 'vocab' || lyricMode === 'sentence') && (
                        <div className="text-xs text-gray-500 mb-2 leading-relaxed pr-32 flex items-start gap-2">
                          {displayLineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getPinyinForSentence(lyricText)}</span>
                        </div>
                      )}
                      
                      {/* 韩语翻译 - 标准模式和句式训练模式 */}
                      {(lyricMode === 'standard' || lyricMode === 'sentence') && (
                        <div className="text-sm text-gray-600 leading-relaxed mb-1 flex items-start gap-2">
                          {displayLineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getKoreanTranslationUtil(videoId, sentenceIndex) || ''}</span>
                          {/* 播放/暂停按钮 - 放在韩文翻译右边 */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSubtitlePlayPause(sub, idx);
                            }}
                            className="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                            title={playingSubtitleIndex === idx && isVideoPlaying ? "暂停" : "播放"}
                          >
                            {playingSubtitleIndex === idx && isVideoPlaying ? (
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      )}
                      
                      {/* 声音训练模式：显示翻译和拼音 */}
                      {lyricMode === 'pronunciation' && (
                        <div className="text-sm text-gray-600 leading-relaxed mb-1 flex items-start gap-2">
                          {displayLineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getKoreanTranslationUtil(videoId, sentenceIndex) || ''}</span>
                          {/* 播放/暂停按钮 - 放在韩文翻译右边 */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSubtitlePlayPause(sub, idx);
                            }}
                            className="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                            title={playingSubtitleIndex === idx && isVideoPlaying ? "暂停" : "播放"}
                          >
                            {playingSubtitleIndex === idx && isVideoPlaying ? (
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      )}
                      
                      {/* 词汇训练模式：显示韩文翻译 */}
                      {lyricMode === 'vocab' && (
                        <div className="text-sm text-gray-600 leading-relaxed mb-1 flex items-start gap-2">
                          {displayLineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getKoreanTranslationUtil(videoId, sentenceIndex) || ''}</span>
                          {/* 播放/暂停按钮 - 放在韩文翻译右边 */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSubtitlePlayPause(sub, idx);
                            }}
                            className="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                            title={playingSubtitleIndex === idx && isVideoPlaying ? "暂停" : "播放"}
                          >
                            {playingSubtitleIndex === idx && isVideoPlaying ? (
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      )}
                      
                      {/* 词汇训练模式：本句重点词区域 */}
                      {lyricMode === 'vocab' && (
                        <div className="mt-2 border-t border-gray-200 pt-2">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedVocabSentences(prev => {
                                  const newSet = new Set(prev);
                                  if (newSet.has(sentenceIndex)) {
                                    newSet.delete(sentenceIndex);
                                  } else {
                                    newSet.add(sentenceIndex);
                                  }
                                  return newSet;
                                });
                              }}
                              className="text-xs text-gray-600 hover:text-gray-800 flex items-center gap-1"
                            >
                              <span>{youtubePageTranslations.ko.thisSentenceVocabShort}</span>
                              <svg
                                className={`w-3 h-3 transition-transform ${expandedVocabSentences.has(sentenceIndex) ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {/* {youtubePageTranslations.ko.practice}按钮 */}
                            {vocab.length > 0 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowPractice(showPractice === sentenceIndex ? null : sentenceIndex);
                                }}
                                className="px-3 py-1 text-xs bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-1"
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                {youtubePageTranslations.ko.practice}
                              </button>
                            )}
                          </div>
                          {expandedVocabSentences.has(sentenceIndex) && (
                            <div className="mt-2 space-y-2">
                              {vocab.length === 0 ? (
                                <div className="text-xs text-gray-400">暂无重点词</div>
                              ) : (
                                <>
                                  {/* 所有词：默认全部展开显示 */}
                                  {vocab.map((word, wordIdx) => (
                                    <div key={wordIdx} className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                                      {/* 词汇、拼音、朗读按钮和收藏按钮 */}
                                      <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                          word.level === 'basic' ? 'bg-green-100 text-green-700' :
                                          word.level === 'intermediate' ? 'bg-blue-100 text-blue-700' :
                                          'bg-purple-100 text-purple-700'
                                        }`}>
                                          {word.word}
                                        </span>
                                        <span className="text-xs text-gray-500">{word.pinyin}</span>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handlePlaySentence(word.word);
                                          }}
                                          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                                          title="朗读词汇"
                                        >
                                          <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                          </svg>
                                        </button>
                                        {/* 收藏按钮 */}
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            const newStarredWords = new Set(starredWords);
                                            if (newStarredWords.has(word.word)) {
                                              newStarredWords.delete(word.word);
                                            } else {
                                              newStarredWords.add(word.word);
                                            }
                                            setStarredWords(newStarredWords);
                                            localStorage.setItem('starredWords', JSON.stringify(Array.from(newStarredWords)));
                                          }}
                                          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                                          title={starredWords.has(word.word) ? "取消收藏" : "收藏单词"}
                                        >
                                          <svg 
                                            className={`w-3 h-3 ${starredWords.has(word.word) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} 
                                            fill={starredWords.has(word.word) ? "currentColor" : "none"} 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                          </svg>
                                        </button>
                                      </div>
                                      {/* 显示韩文翻译 */}
                                      {word.meaningKr && (
                                        <div className="text-xs text-gray-600 mb-2">
                                          {word.meaningKr}
                                        </div>
                                      )}
                                      {/* 显示例句 */}
                                      {word.example && (
                                        <div className="mt-2 pt-2 border-t border-gray-300">
                                          <div className="text-xs text-gray-500 mb-1">예문：</div>
                                          <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs text-gray-800">{word.example}</span>
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handlePlaySentence(word.example!);
                                              }}
                                              className="p-0.5 rounded-full hover:bg-gray-200 transition-colors"
                                              title="朗读例句"
                                            >
                                              <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                              </svg>
                                            </button>
                                          </div>
                                          {/* 例句的韩文翻译 */}
                                          {word.exampleKr && (
                                            <div className="text-xs text-gray-600">
                                              {word.exampleKr}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* 句式训练模式：本句结构区域 */}
                      {lyricMode === 'sentence' && (() => {
                        const structureData = getSentenceStructureUtil(videoId, sentenceIndex);
                        if (!structureData) {
                          return null; // 如果没有数据，不显示
                        }
                        
                        // 如果有句型，显示句型相关内容
                        if (structureData.structure) {
                          const structureKey = `${sentenceIndex}-${structureData.structure}`;
                          const isStarred = starredStructures.has(structureKey);
                          const level = structureData.level ?? 'beginner';
                          const levelStructureClass = level === 'beginner'
                            ? 'bg-green-100 text-green-800 border-green-200'
                            : level === 'intermediate'
                            ? 'bg-blue-100 text-blue-800 border-blue-200'
                            : 'bg-purple-100 text-purple-800 border-purple-200';
                          const levelLabel = level === 'beginner' ? '基础' : level === 'intermediate' ? '中级' : '高级';
                          
                          return (
                            <div className="mt-2 border-t border-gray-200 pt-2 space-y-2">
                              {/* 句型 - 按等级显示颜色，带收藏按钮 */}
                              <div className="text-xs text-gray-600 flex items-center gap-2">
                                <span className="font-semibold">문형：</span>
                                <span className={`ml-1 flex-1 px-2 py-1 rounded border font-medium ${levelStructureClass}`}>
                                  {structureData.structure}
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                                  level === 'beginner' ? 'text-green-600 border-green-300 bg-green-50' : level === 'intermediate' ? 'text-blue-600 border-blue-300 bg-blue-50' : 'text-purple-600 border-purple-300 bg-purple-50'
                                }`}>
                                  {levelLabel}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const newStarredStructures = new Set(starredStructures);
                                    if (isStarred) {
                                      newStarredStructures.delete(structureKey);
                                    } else {
                                      newStarredStructures.add(structureKey);
                                    }
                                    setStarredStructures(newStarredStructures);
                                    localStorage.setItem('starredStructures', JSON.stringify(Array.from(newStarredStructures)));
                                  }}
                                  className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                                  title={isStarred ? "取消收藏" : "收藏句式"}
                                >
                                  <svg 
                                    className={`w-4 h-4 ${isStarred ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                  </svg>
                                </button>
                              </div>
                              
                              {/* 解释 */}
                              {structureData.explanation && (
                                <div className="text-xs text-gray-500">
                                  <span className="font-semibold">설명：</span>
                                  <span className="ml-1">{structureData.explanation}</span>
                                </div>
                              )}
                              
                              {/* 例句 - 带朗读按钮 */}
                              {structureData.example && (
                                <div className="text-xs text-gray-600 flex items-center gap-2">
                                  <span className="font-semibold">예문：</span>
                                  <span className="ml-1 flex-1">{structureData.example}</span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handlePlaySentence(structureData.example);
                                    }}
                                    className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                                    title="播放例句"
                                  >
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    </svg>
                                  </button>
                                </div>
                              )}
                              
                              {/* 例句韩语翻译 */}
                              {structureData.exampleKr && (
                                <div className="text-xs text-gray-500">
                                  <span className="font-semibold">한국어：</span>
                                  <span className="ml-1">{structureData.exampleKr}</span>
                                </div>
                              )}
                              
                              {/* 연습하기按钮 - 放在右边 */}
                              <div className="flex justify-end">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowSentencePracticeDialog(sentenceIndex);
                                    setSentencePracticeInput("");
                                    setSentencePracticeMessages([]);
                                  }}
                                  className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-medium transition-colors"
                                >
                                  연습하기
                                </button>
                              </div>
                            </div>
                          );
                        }
                        
                        // 如果没有句型但有扩写，显示扩写内容
                        if (structureData.expanded) {
                          return (
                            <div className="mt-2 border-t border-gray-200 pt-2 space-y-2">
                              {/* 扩写 */}
                              <div className="text-xs text-gray-600">
                                <span className="font-semibold">확장：</span>
                                <span className="ml-1">{structureData.expanded}</span>
                              </div>
                              
                              {/* 韩语翻译 */}
                              {structureData.translationKr && (
                                <div className="text-xs text-gray-500">
                                  <span className="font-semibold">한국어：</span>
                                  <span className="ml-1">{structureData.translationKr}</span>
                                </div>
                              )}
                              
                              {/* 연습하기按钮 - 放在右边 */}
                              <div className="flex justify-end">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowSentencePracticeDialog(sentenceIndex);
                                    setSentencePracticeInput("");
                                    setSentencePracticeMessages([]);
                                  }}
                                  className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-medium transition-colors"
                                >
                                  연습하기
                                </button>
                              </div>
                            </div>
                          );
                        }
                        
                        // 如果既没有句型也没有扩写，不显示
                        return null;
                      })()}
                      
                      {/* 句式练习对话框已移至 Portal，显示在右侧歌词卡片左侧 */}
                      
                      {/* 声音训练模式：跟读按钮和评分区域 */}
                      {lyricMode === 'pronunciation' && (
                        <div className="mt-2 border-t border-gray-200 pt-2 space-y-2">
                          {/* 雷达图和反馈内容并排显示 */}
                          {(pronunciationFeedback[sentenceIndex] || pronunciationFeedbackData[sentenceIndex]) && (
                            <div className="mb-2 relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200">
                              {/* 关闭按钮 - 放在整个评分内容的右上角 */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPronunciationFeedbackData(prev => ({ ...prev, [sentenceIndex]: null }));
                                  setPronunciationFeedback(prev => ({ ...prev, [sentenceIndex]: null }));
                                }}
                                className="absolute top-2 right-2 z-10 p-1.5 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full shadow-sm hover:bg-gray-50"
                                title={youtubePageTranslations.ko.closeScore}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                              
                              <div className="flex items-stretch gap-0 pr-6">
                                {/* 雷达图（左边占卡片 1/3，居中无留白） */}
                                {pronunciationFeedbackData[sentenceIndex] && (
                                  <div className="w-1/3 min-w-0 flex items-center justify-center shrink-0">
                                    <SpeechRadarChart
                                      compact
                                      data={[
                                        { subject: songPageTranslations.ko.scoreContentAccuracy, score: Math.max(50, pronunciationFeedbackData[sentenceIndex]!.scores.contentAccuracy), fullMark: 100 },
                                        { subject: songPageTranslations.ko.scoreTonePerformance, score: Math.max(50, pronunciationFeedbackData[sentenceIndex]!.scores.tonePerformance), fullMark: 100 },
                                        { subject: songPageTranslations.ko.scoreSpeakingFluency, score: Math.max(50, pronunciationFeedbackData[sentenceIndex]!.scores.speakingFluency), fullMark: 100 },
                                      ]}
                                    />
                                  </div>
                                )}
                                {/* 反馈内容（右边占卡片 2/3） */}
                                {pronunciationFeedback[sentenceIndex] && (
                                  <div className="flex-[2] self-start min-w-0 p-3 bg-white rounded-lg border border-gray-200">
                                    <div className="text-sm text-gray-800 whitespace-pre-wrap">{pronunciationFeedback[sentenceIndex]}</div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* 跟读按钮和录音控制 */}
                          {!pronunciationRecording[sentenceIndex] && !hasPronunciationRecording[sentenceIndex] && (
                            <button
                              onClick={async (e) => {
                                e.stopPropagation();
                                try {
                                  // 录音时暂停视频播放
                                  if (playerRef.current) {
                                    const playerState = playerRef.current.getPlayerState();
                                    if (playerState === 1) { // 1 = playing
                                      playerRef.current.pauseVideo();
                                    }
                                  }
                                  
                                  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                                  pronunciationStreamRef.current[sentenceIndex] = stream;
                                  const recorder = new MediaRecorder(stream);
                                  const chunks: Blob[] = [];
                                  
                                  recorder.ondataavailable = (e) => {
                                    if (e.data.size > 0) {
                                      chunks.push(e.data);
                                    }
                                  };
                                  
                                  recorder.onstop = async () => {
                                    const blob = new Blob(chunks, { type: 'audio/wav' });
                                    setPronunciationAudioBlob(prev => ({ ...prev, [sentenceIndex]: blob }));
                                    setHasPronunciationRecording(prev => ({ ...prev, [sentenceIndex]: true }));
                                    pronunciationRecordingRef.current[sentenceIndex] = false; // 更新ref，录音已结束
                                    if (pronunciationStreamRef.current[sentenceIndex]) {
                                      pronunciationStreamRef.current[sentenceIndex]!.getTracks().forEach(track => track.stop());
                                    }
                                    if (pronunciationDurationIntervalRef.current[sentenceIndex]) {
                                      clearInterval(pronunciationDurationIntervalRef.current[sentenceIndex]!);
                                      pronunciationDurationIntervalRef.current[sentenceIndex] = null;
                                    }
                                  };
                                  
                                  recorder.start();
                                  setPronunciationMediaRecorder(prev => ({ ...prev, [sentenceIndex]: recorder }));
                                  setPronunciationRecording(prev => ({ ...prev, [sentenceIndex]: true }));
                                  pronunciationRecordingRef.current[sentenceIndex] = true; // 更新ref
                                  setPronunciationRecordingDuration(prev => ({ ...prev, [sentenceIndex]: 0 }));
                                  pronunciationStartTimeRef.current[sentenceIndex] = Date.now();
                                  
                                  pronunciationDurationIntervalRef.current[sentenceIndex] = setInterval(() => {
                                    setPronunciationRecordingDuration(prev => ({
                                      ...prev,
                                      [sentenceIndex]: Math.floor((Date.now() - pronunciationStartTimeRef.current[sentenceIndex]) / 1000)
                                    }));
                                  }, 100);
                                } catch (error) {
                                  console.error('无法访问麦克风:', error);
                                  alert(songPageTranslations.ko.micAccessFailed);
                                }
                              }}
                              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                              </svg>
                              {songPageTranslations.ko.clickToStartShadowing}
                            </button>
                          )}
                          
                          {pronunciationRecording[sentenceIndex] && (
                            <div className="flex items-center gap-2">
                              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200">
                                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                                <span className="text-sm text-red-700 font-medium">
                                  {songPageTranslations.ko.recordingInProgressShort} {Math.floor((pronunciationRecordingDuration[sentenceIndex] || 0) / 60)}:{((pronunciationRecordingDuration[sentenceIndex] || 0) % 60).toString().padStart(2, '0')}
                                </span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (pronunciationMediaRecorder[sentenceIndex] && pronunciationMediaRecorder[sentenceIndex]!.state !== 'inactive') {
                                    pronunciationMediaRecorder[sentenceIndex]!.stop();
                                  }
                                  setPronunciationRecording(prev => ({ ...prev, [sentenceIndex]: false }));
                                  pronunciationRecordingRef.current[sentenceIndex] = false; // 更新ref
                                  if (pronunciationStreamRef.current[sentenceIndex]) {
                                    pronunciationStreamRef.current[sentenceIndex]!.getTracks().forEach(track => track.stop());
                                  }
                                  if (pronunciationDurationIntervalRef.current[sentenceIndex]) {
                                    clearInterval(pronunciationDurationIntervalRef.current[sentenceIndex]!);
                                    pronunciationDurationIntervalRef.current[sentenceIndex] = null;
                                  }
                                  // 取消录音，不进行分析
                                  setPronunciationRecordingDuration(prev => ({ ...prev, [sentenceIndex]: 0 }));
                                  setHasPronunciationRecording(prev => ({ ...prev, [sentenceIndex]: false }));
                                  setPronunciationAudioBlob(prev => ({ ...prev, [sentenceIndex]: null }));
                                }}
                                className="px-3 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600"
                              >
                                {songPageTranslations.ko.cancel}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (pronunciationMediaRecorder[sentenceIndex] && pronunciationMediaRecorder[sentenceIndex]!.state !== 'inactive') {
                                    pronunciationMediaRecorder[sentenceIndex]!.stop();
                                  }
                                  setPronunciationRecording(prev => ({ ...prev, [sentenceIndex]: false }));
                                  pronunciationRecordingRef.current[sentenceIndex] = false; // 更新ref
                                  if (pronunciationStreamRef.current[sentenceIndex]) {
                                    pronunciationStreamRef.current[sentenceIndex]!.getTracks().forEach(track => track.stop());
                                  }
                                  if (pronunciationDurationIntervalRef.current[sentenceIndex]) {
                                    clearInterval(pronunciationDurationIntervalRef.current[sentenceIndex]!);
                                    pronunciationDurationIntervalRef.current[sentenceIndex] = null;
                                  }
                                  // 结束录音，保留录音数据用于评分
                                }}
                                className="px-3 py-2 rounded-lg text-sm font-medium bg-green-500 text-white hover:bg-green-600"
                              >
                                {songPageTranslations.ko.endRecord}
                              </button>
                            </div>
                          )}
                          
                          {hasPronunciationRecording[sentenceIndex] && !pronunciationRecording[sentenceIndex] && (
                            <div className="flex items-center gap-2">
                              <div className="flex-1 px-3 py-2 rounded-lg bg-green-50 border border-green-200 text-sm text-green-700">
                                录音完成 ({Math.floor((pronunciationRecordingDuration[sentenceIndex] || 0) / 60)}:{((pronunciationRecordingDuration[sentenceIndex] || 0) % 60).toString().padStart(2, '0')})
                              </div>
                              <button
                                onClick={async (e) => {
                                  e.stopPropagation();
                                  if (!pronunciationAudioBlob[sentenceIndex]) return;
                                  
                                  setIsAnalyzingPronunciation(prev => ({ ...prev, [sentenceIndex]: true }));
                                  setPronunciationFeedback(prev => ({ ...prev, [sentenceIndex]: null }));
                                  setPronunciationAnalysisProgress(prev => ({ ...prev, [sentenceIndex]: 0 }));
                                  setPronunciationFeedbackData(prev => ({ ...prev, [sentenceIndex]: null }));
                                  
                                  // 模拟进度更新
                                  const progressInterval = setInterval(() => {
                                    setPronunciationAnalysisProgress(prev => {
                                      const current = prev[sentenceIndex] || 0;
                                      if (current < 90) {
                                        return { ...prev, [sentenceIndex]: current + 10 };
                                      }
                                      return prev;
                                    });
                                  }, 200);
                                  
                                  try {
                                    // 先转写音频
                                    setPronunciationAnalysisProgress(prev => ({ ...prev, [sentenceIndex]: 20 }));
                                    const { transcribeAudio } = await import('../services/chatgptApi');
                                    const asrText = await transcribeAudio(pronunciationAudioBlob[sentenceIndex]!);
                                    
                                    setPronunciationAnalysisProgress(prev => ({ ...prev, [sentenceIndex]: 50 }));
                                    
                                    // 使用跟读反馈API
                                    const { generateReadingFeedback } = await import('../services/chatgptApi');
                                    const feedbackData = await generateReadingFeedback(
                                      '中级', // 默认中级，可以根据实际情况调整
                                      lyricText,
                                      asrText,
                                      pronunciationRecordingDuration[sentenceIndex] || 0
                                    );
                                    
                                    setPronunciationAnalysisProgress(prev => ({ ...prev, [sentenceIndex]: 100 }));
                                    clearInterval(progressInterval);
                                    
                                    // 保存完整反馈数据（用于雷达图）
                                    setPronunciationFeedbackData(prev => ({ ...prev, [sentenceIndex]: feedbackData }));
                                    
                                    // 格式化反馈为文本（韩文标签，API 内容已为韩文）
                                    const feedbackText = `${feedbackData.overallComment}\n\n${songPageTranslations.ko.labelKeyIssue}: ${feedbackData.keyIssue}\n\n${songPageTranslations.ko.labelNextAction}: ${feedbackData.oneAction}`;
                                    setPronunciationFeedback(prev => ({ ...prev, [sentenceIndex]: feedbackText }));
                                    
                                    // 评分完成后不主动滚动，避免卡片出现时页面跳动
                                  } catch (error) {
                                    console.error('评价失败:', error);
                                    alert(songPageTranslations.ko.evalFailedRetry);
                                    clearInterval(progressInterval);
                                    setPronunciationAnalysisProgress(prev => ({ ...prev, [sentenceIndex]: 0 }));
                                  } finally {
                                    setIsAnalyzingPronunciation(prev => ({ ...prev, [sentenceIndex]: false }));
                                  }
                                }}
                                disabled={isAnalyzingPronunciation[sentenceIndex]}
                                className="px-3 py-2 rounded-lg text-sm font-medium bg-purple-500 text-white hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {isAnalyzingPronunciation[sentenceIndex] ? (
                                  <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {songPageTranslations.ko.scoringInProgress} {pronunciationAnalysisProgress[sentenceIndex] || 0}%
                                  </span>
                                ) : (
                                  songPageTranslations.ko.submitScore
                                )}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHasPronunciationRecording(prev => ({ ...prev, [sentenceIndex]: false }));
                                  setPronunciationAudioBlob(prev => ({ ...prev, [sentenceIndex]: null }));
                                  setPronunciationRecordingDuration(prev => ({ ...prev, [sentenceIndex]: 0 }));
                                  setPronunciationFeedback(prev => ({ ...prev, [sentenceIndex]: null }));
                                }}
                                className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-500 text-white hover:bg-gray-600"
                              >
                                {songPageTranslations.ko.recordAgain}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                      
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 下方：歌词解析区（左右各占一半） */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">{youtubePageTranslations.ko.lyricsParse}</h2>
              <div className="flex items-center gap-3">
                {/* 下载按钮 - 重新设计 */}
                <button
                  onClick={() => setShowDownloadDialog(true)}
                  className="group relative px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
                  title="학습 자료 다운로드"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="relative z-10">{youtubePageTranslations.ko.download}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
                {/* 提示文字 */}
                <div className="hidden md:flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-3 h-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{youtubePageTranslations.ko.downloadOffline}</span>
                </div>
              </div>
            </div>
            
            {/* 下载选择对话框 */}
            {showDownloadDialog && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowDownloadDialog(false)}>
                <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{youtubePageTranslations.ko.downloadTitle}</h3>
                    <button
                      onClick={() => setShowDownloadDialog(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm text-blue-800">
                        <div className="font-medium mb-1">📥 {youtubePageTranslations.ko.downloadOffline}</div>
                        <div className="text-xs">{youtubePageTranslations.ko.htmlFullContent}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button
                      onClick={() => downloadAsHTML('standard')}
                      className="w-full px-4 py-3 rounded-lg text-left border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-medium text-gray-800">{youtubePageTranslations.ko.modeStandard}</div>
                        <div className="text-xs text-gray-500 mt-0.5">전체 가사(핵심 어휘·문형 표시), 병음, 번역</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => downloadAsHTML('vocab')}
                      className="w-full px-4 py-3 rounded-lg text-left border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-medium text-gray-800">{youtubePageTranslations.ko.modeVocab}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{youtubePageTranslations.ko.allLyrics}(핵심 어휘 표시) + {youtubePageTranslations.ko.allVocab} 및 예문</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => downloadAsHTML('sentence')}
                      className="w-full px-4 py-3 rounded-lg text-left border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-medium text-gray-800">{youtubePageTranslations.ko.modeSentence}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{youtubePageTranslations.ko.allLyrics}(핵심 문형 표시) + {youtubePageTranslations.ko.allSentences} 및 예문</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => downloadAsHTML('lyricSentence')}
                      className="w-full px-4 py-3 rounded-lg text-left border-2 border-orange-200 bg-orange-50 hover:border-orange-500 hover:bg-orange-100 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-medium text-gray-800 flex items-center gap-2">
                          <span>{youtubePageTranslations.ko.modeLyricSentence}</span>
                          <span className="text-xs px-2 py-0.5 bg-orange-200 text-orange-700 rounded">추천</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{youtubePageTranslations.ko.allLyrics}(핵심 어휘·문형 표시) + 전체 어휘 해석 + 전체 문형 해석</div>
                      </div>
                      <svg className="w-5 h-5 text-orange-600 group-hover:text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between mb-4">
              {/* 等级筛选按钮 */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedLevel('all')}
                  className={`px-4 py-1.5 text-sm rounded transition-colors ${
                    selectedLevel === 'all'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {youtubePageTranslations.ko.tabAll}
                </button>
                <button
                  onClick={() => setSelectedLevel('basic')}
                  className={`px-4 py-1.5 text-sm rounded-full border-2 transition-colors ${
                    selectedLevel === 'basic'
                      ? 'text-green-600 border-green-500 bg-green-50'
                      : 'text-green-600 border-green-300 hover:bg-green-50'
                  }`}
                >
                  {youtubePageTranslations.ko.tabBasic}
                </button>
                <button
                  onClick={() => setSelectedLevel('intermediate')}
                  className={`px-4 py-1.5 text-sm rounded-full border-2 transition-colors ${
                    selectedLevel === 'intermediate'
                      ? 'text-blue-600 border-blue-500 bg-blue-50'
                      : 'text-blue-600 border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {youtubePageTranslations.ko.tabIntermediate}
                </button>
                <button
                  onClick={() => setSelectedLevel('advanced')}
                  className={`px-4 py-1.5 text-sm rounded-full border-2 transition-colors ${
                    selectedLevel === 'advanced'
                      ? 'text-purple-600 border-purple-500 bg-purple-50'
                      : 'text-purple-600 border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  {youtubePageTranslations.ko.tabAdvanced}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* 左侧：所有词汇 */}
              <div className="border-r border-gray-200 pr-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-700">{youtubePageTranslations.ko.allVocab}</h3>
            </div>

            {/* 词汇列表 */}
            <div 
              ref={vocabScrollRef}
              className="h-[400px] overflow-y-auto space-y-3"
            >
              {displayedVocab.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                      暂无词汇数据
                </div>
              ) : (
                    displayedVocab.map((word, idx) => {
                      const wordKey = word.word;
                      const isStarred = starredWords.has(wordKey);
                      
                      return (
                  <div
                    key={idx}
                          className={`p-3 rounded-lg border-2 ${getVocabColorClass(word.level)} transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2 flex-1">
                              <div className="font-semibold text-base">{word.word}</div>
                              <span className={`text-xs px-2 py-0.5 rounded-full border ${getLevelColor(word.level)}`}>
                        {getLevelLabel(word.level)}
                      </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {/* 朗读按钮 */}
                              <TTSButton 
                                text={word.word} 
                                className="w-6 h-6 p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors"
                              />
                              {/* 收藏按钮 */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const newStarredWords = new Set(starredWords);
                                  if (isStarred) {
                                    newStarredWords.delete(wordKey);
                                  } else {
                                    newStarredWords.add(wordKey);
                                  }
                                  setStarredWords(newStarredWords);
                                  localStorage.setItem('starredWords', JSON.stringify(Array.from(newStarredWords)));
                                }}
                                className="p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors"
                                title={isStarred ? "取消收藏" : "收藏词汇"}
                              >
                                <svg 
                                  className={`w-4 h-4 ${isStarred ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                              </button>
                            </div>
                    </div>
                    <div className="text-sm mb-1 text-gray-700">{word.pinyin}</div>
                          {/* 显示韩语翻译（替代中文解析） */}
                          {word.meaningKr ? (
                            <div className="text-sm mb-2 text-gray-800">{word.meaningKr}</div>
                          ) : (
                            <div className="text-sm mb-2 text-gray-500">暂无韩语翻译</div>
                          )}
                          {/* 例句 */}
                    {word.example && (
                            <div className="mt-2 space-y-1">
                              <div className="text-xs text-gray-600 italic border-l-2 pl-2 border-gray-300 flex items-center gap-2">
                                <span className="flex-1">{word.example}</span>
                                <TTSButton 
                                  text={word.example} 
                                  className="w-5 h-5 p-0.5 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                />
                              </div>
                              {/* 例句韩语翻译 */}
                              {word.exampleKr && (
                                <div className="text-xs text-gray-500 pl-2">
                                  {word.exampleKr}
                      </div>
                    )}
                  </div>
              )}
            </div>
                      );
                    })
                  )}
          </div>
        </div>

              {/* 右侧：전체 문형 */}
              <div className="pl-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-700">{youtubePageTranslations.ko.allSentences}</h3>
                </div>

                {/* 句式列表 */}
                <div className="h-[400px] overflow-y-auto space-y-3">
                  {getAllSentenceStructures.length === 0 ? (
                    <div className="text-center text-gray-400 py-8">
                      {youtubePageTranslations.ko.noSentenceData}
                    </div>
                  ) : (
                    getAllSentenceStructures.map((item, idx) => {
                      const { sentenceIndex, structure } = item;
                      const structureKey = `${sentenceIndex}-${structure.structure}`;
                      const isStarred = starredStructures.has(structureKey);
                      
                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg border-2 ${
                            structure.level === 'beginner' 
                              ? 'bg-green-50 border-green-200 text-green-700'
                              : structure.level === 'intermediate'
                              ? 'bg-blue-50 border-blue-200 text-blue-700'
                              : 'bg-purple-50 border-purple-200 text-purple-700'
                          } transition-all hover:shadow-md`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2 flex-1">
                              <div className="font-semibold text-base">{structure.structure}</div>
                              <span className={`text-xs px-2 py-0.5 rounded-full border ${
                                structure.level === 'beginner' 
                                  ? 'text-green-500 border-green-500'
                                  : structure.level === 'intermediate'
                                  ? 'text-blue-500 border-blue-500'
                                  : 'text-purple-500 border-purple-500'
                              }`}>
                                {getLevelLabelKr(structure.level)}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {/* 朗读按钮（朗读句式） */}
                              <TTSButton 
                                text={structure.structure} 
                                className="w-6 h-6 p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors"
                              />
                              {/* 收藏按钮 */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const newStarredStructures = new Set(starredStructures);
                                  if (isStarred) {
                                    newStarredStructures.delete(structureKey);
                                  } else {
                                    newStarredStructures.add(structureKey);
                                  }
                                  setStarredStructures(newStarredStructures);
                                  localStorage.setItem('starredStructures', JSON.stringify(Array.from(newStarredStructures)));
                                }}
                                className="p-1 hover:bg-white hover:bg-opacity-50 rounded transition-colors"
                                title={isStarred ? "取消收藏" : "收藏句式"}
                              >
                                <svg 
                                  className={`w-4 h-4 ${isStarred ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          
                          {/* 解释 */}
                          {structure.explanation && (
                            <div className="text-xs mb-2 text-gray-600">
                              {structure.explanation}
                            </div>
                          )}
                          
                          {/* 例句 */}
                          {structure.example && (
                            <div className="mt-2 space-y-1">
                              <div className="text-xs text-gray-600 italic border-l-2 pl-2 border-gray-300 flex items-center gap-2">
                                <span className="flex-1">{structure.example}</span>
                                <TTSButton 
                                  text={structure.example} 
                                  className="w-5 h-5 p-0.5 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                />
                              </div>
                              {/* 例句韩语翻译 */}
                              {structure.exampleKr && (
                                <div className="text-xs text-gray-500 pl-2">
                                  {structure.exampleKr}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 句式练习弹窗：Portal 渲染到 body，定位在右侧歌词卡片左侧 */}
    {lyricMode === 'sentence' && showSentencePracticeDialog !== null && sentenceDialogPosition !== null && createPortal(
      (() => {
        const sentenceIndex = showSentencePracticeDialog;
        const structureData = getSentenceStructureUtil(videoId, sentenceIndex);
        return (
          <div
            className="rounded-lg shadow-xl p-4 flex flex-col z-[100] border border-[rgb(226,205,184)] bg-[rgba(250,246,240,0.88)] backdrop-blur-[12px]"
            style={{
              position: 'fixed',
              left: sentenceDialogPosition.left,
              top: sentenceDialogPosition.top,
              width: DIALOG_WIDTH,
              maxHeight: '90vh',
              pointerEvents: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-800">문장 만들기 연습</h4>
              <button
                onClick={() => {
                  setShowSentencePracticeDialog(null);
                  setSentencePracticeInput("");
                  setSentencePracticeMessages([]);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {structureData && (
              <div className={`mb-4 p-3 rounded-lg border ${
                structureData.level === 'beginner'
                  ? 'bg-green-50 border-green-200'
                  : structureData.level === 'intermediate'
                  ? 'bg-blue-50 border-blue-200'
                  : 'bg-purple-50 border-purple-200'
              }`}>
                {structureData.structure && (
                  <div className="text-base mb-2 flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-gray-800">문형：</span>
                    <span className={`ml-1 px-2 py-1 rounded border font-medium ${
                      structureData.level === 'beginner'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : structureData.level === 'intermediate'
                        ? 'bg-blue-100 text-blue-800 border-blue-200'
                        : 'bg-purple-100 text-purple-800 border-purple-200'
                    }`}>
                      {structureData.structure}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${
                      structureData.level === 'beginner'
                        ? 'text-green-600 border-green-300 bg-green-50'
                        : structureData.level === 'intermediate'
                        ? 'text-blue-600 border-blue-300 bg-blue-50'
                        : 'text-purple-600 border-purple-300 bg-purple-50'
                    }`}>
                      {structureData.level === 'beginner' ? '基础' : structureData.level === 'intermediate' ? '中级' : '高级'}
                    </span>
                  </div>
                )}
                {!structureData.structure && structureData.expanded && (
                  <div className="text-base text-gray-800 mb-2">
                    <span className="font-semibold">확장：</span>
                    <span className="ml-2">{structureData.expanded}</span>
                  </div>
                )}
                {structureData.translationKr && (
                  <div className="text-base text-gray-700">
                    <span className="font-semibold">한국어：</span>
                    <span className="ml-2">{structureData.translationKr}</span>
                  </div>
                )}
              </div>
            )}
            <div className="flex-1 overflow-y-auto mb-4 space-y-3 min-h-[150px] max-h-[250px]">
              {sentencePracticeMessages.length === 0 ? (
                <div className="text-center text-gray-500 text-base py-8">
                  만든 문장을 입력해 주세요. 선생님이 첨삭해 드립니다.
                </div>
              ) : (
                sentencePracticeMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-3 py-2 text-sm break-words whitespace-pre-wrap ${
                        msg.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
              {isAnalyzingSentence && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex gap-2">
                <textarea
                  value={sentencePracticeInput}
                  onChange={(e) => setSentencePracticeInput(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-lg text-base resize-none min-h-[28px]"
                  rows={1}
                  disabled={isAnalyzingSentence}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      if (sentencePracticeInput.trim() && !isAnalyzingSentence) {
                        handleSendMessage(sentenceIndex);
                      }
                    }
                  }}
                />
                <button
                  onClick={() => handleSendMessage(sentenceIndex)}
                  disabled={isAnalyzingSentence || !sentencePracticeInput.trim()}
                  className="px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })(),
      document.body
    )}
    </>
  );
}
