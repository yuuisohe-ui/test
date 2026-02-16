import { useState, useEffect, useRef, useMemo } from "react";
import { parseSRT, SubtitleItem } from "../utils/srtParser";
import { getVocabForSentence, getAllVocab, WordAnalysis } from "../data/tianmimiVocab";
import { getKoreanTranslation } from "../data/tianmimiKorean";
import { getPracticeForSentence, PracticeQuestion } from "../data/tianmimiPractice";
import { pinyin } from "pinyin-pro";
import { SentenceView } from "./SentenceView";
import { Token } from "../types";

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
  const [vocabMode, setVocabMode] = useState<'current' | 'all'>('current');
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
  const [showPractice, setShowPractice] = useState<number | null>(null); // 显示练习的句子索引
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
        const vocab = getVocabForSentence(sentenceIndex);
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
            if (event.data === window.YT.PlayerState.PLAYING) {
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
            if (vocabMode === 'current' && vocabScrollRef.current) {
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
        alert('您的浏览器不支持录音功能，请使用现代浏览器（Chrome、Firefox、Edge等）');
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
          let errorMessage = '无法访问麦克风';
          if (advancedError.name === 'NotAllowedError' || advancedError.name === 'PermissionDeniedError') {
            errorMessage = '麦克风权限被拒绝。请点击浏览器地址栏左侧的锁图标，允许麦克风权限，然后刷新页面重试。';
          } else if (advancedError.name === 'NotFoundError' || advancedError.name === 'DevicesNotFoundError') {
            errorMessage = '未找到麦克风设备，请检查设备连接';
          } else if (advancedError.name === 'NotReadableError' || advancedError.name === 'TrackStartError') {
            errorMessage = '麦克风被其他应用占用，请关闭其他使用麦克风的应用后重试';
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
          alert('录音过程中发生错误，请重试');
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
      a.download = `录音_${title}_${new Date().getTime()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  // 生成假评价（模拟AI评分）
  const generateEvaluation = () => {
    // 生成随机但合理的评分
    const pronunciation = Math.floor(Math.random() * 20) + 70; // 70-90分
    const rhythm = Math.floor(Math.random() * 20) + 70; // 70-90分
    const totalScore = Math.round((pronunciation * 0.6 + rhythm * 0.4)); // 加权平均

    let overall = '';
    let suggestions: string[] = [];

    if (totalScore >= 90) {
      overall = '优秀！你的发音和节奏感都很棒！';
      suggestions = [
        '继续保持这个水平，多练习不同风格的歌曲',
        '可以尝试挑战更有难度的歌曲',
        '注意情感表达，让演唱更有感染力'
      ];
    } else if (totalScore >= 80) {
      overall = '很好！整体表现不错，还有提升空间。';
      suggestions = [
        '注意某些字的声调，可以更准确一些',
        '节奏感很好，继续保持',
        '多听原唱，模仿发音细节'
      ];
    } else if (totalScore >= 70) {
      overall = '不错！基础扎实，需要更多练习。';
      suggestions = [
        '加强声调练习，注意四声的区别',
        '节奏可以更稳定一些',
        '建议多跟读，提高发音准确度'
      ];
    } else {
      overall = '继续努力！多练习会有明显进步。';
      suggestions = [
        '建议先从慢速跟读开始',
        '注意每个字的发音要清晰',
        '多听多练，熟能生巧'
      ];
    }

    setEvaluationResult({
      totalScore,
      pronunciation,
      rhythm,
      overall,
      suggestions,
    });
    setShowEvaluation(true);
  };

  // 从文本中提取行号和歌词内容
  const extractLineNumberAndText = (text: string): { lineNumber: string; lyricText: string } => {
    // 匹配行号格式：01, 02, 03 等（两位数字，后面跟空格）
    const match = text.match(/^(\d{2})\s+(.+)$/);
    if (match) {
      return {
        lineNumber: match[1], // 行号（如 "01"）
        lyricText: match[2],  // 歌词内容（去掉行号后的文本）
      };
    }
    // 如果没有匹配到行号，返回空行号和原文本
    return { lineNumber: '', lyricText: text };
  };

  // 获取句子的拼音（接收的已经是去掉行号的歌词内容）
  const getPinyinForSentence = (lyricText: string): string => {
    try {
      // pinyin-pro: toneType: 'tone' 表示带声调符号（ā á ǎ à）
      return pinyin(lyricText, {
        toneType: 'tone',  // 带声调符号
      });
    } catch (error) {
      console.warn('拼音转换失败:', error);
      return '';
    }
  };

  // 播放句子的发音
  const handlePlaySentence = (text: string) => {
    if ('speechSynthesis' in window) {
      // 停止当前正在播放的语音
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8; // 稍微慢一点，便于学习
      
      utterance.onerror = (error) => {
        console.warn('语音播放失败:', error);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert('您的浏览器不支持语音合成功能');
    }
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

  // 获取当前显示的词汇
  const displayedVocab = useMemo(() => {
    if (vocabMode === 'current' && currentSubtitleIndex !== null) {
      // 模式1：只显示当前句子的词汇
      const sentenceIndex = currentSubtitleIndex + 1; // SRT索引从1开始
      return getVocabForSentence(sentenceIndex);
    } else {
      // 模式2：显示所有词汇（去重）
      return getAllVocab();
    }
  }, [vocabMode, currentSubtitleIndex]);

  // 渲染歌词（带颜色标记）
  const renderLyricWithColors = (text: string, sentenceIndex: number) => {
    const vocab = getVocabForSentence(sentenceIndex);
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
        return '基础词';
      case 'intermediate':
        return '中级词';
      case 'advanced':
        return '高级词';
    }
  };

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
            返回歌曲库
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {title} - {titleKr}
          </h1>
        </div>

        {/* 主要内容区域：视频（左上）+ 歌词（右上）+ 解析（下方） */}
        <div className="space-y-4">
          {/* 视频和歌词并排 */}
          <div className="grid grid-cols-12 gap-4">
            {/* 左侧：视频 */}
            <div className={`${
              videoSize === 'small' ? 'col-span-4' : 
              videoSize === 'medium' ? 'col-span-6' : 
              'col-span-8'
            } bg-white rounded-xl shadow-sm border p-4 transition-all`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">音乐视频</h2>
                <div className="flex gap-2">
                  {/* 整首跟唱按钮 - 缩小版 */}
                  {!isSingAlongMode && (
                    <button
                      onClick={() => {
                        setIsSingAlongMode(true);
                      }}
                      className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-1.5"
                      title="整首跟唱"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <span className="text-xs">整首跟唱</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (videoSize === 'small') setVideoSize('medium');
                      else if (videoSize === 'medium') setVideoSize('large');
                      else setVideoSize('small');
                    }}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                    title="切换视频大小"
                  >
                    {videoSize === 'small' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        放大
                      </>
                    ) : videoSize === 'medium' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        放大
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        缩小
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
                      <p>加载播放器...</p>
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
                      <span className="text-sm text-gray-700">视频静音</span>
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
                        {isVideoMuted ? '取消静音' : '静音'}
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
                        开始录音
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
                              disabled={!recordedAudioBlob}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              评分
                            </button>
                            <button
                              onClick={downloadRecording}
                              className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                              disabled={!recordedAudioBlob}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              下载录音
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

                        {/* 评分结果 */}
                        {showEvaluation && evaluationResult && (
                          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                评分结果
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

                            {/* 总分 */}
                            <div className="text-center py-3">
                              <div className="text-4xl font-bold text-purple-600 mb-1">
                                {evaluationResult.totalScore}
                                <span className="text-2xl text-gray-500">/100</span>
                              </div>
                              <div className="text-sm text-gray-600">综合得分</div>
                            </div>

                            {/* 分项评分 */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white rounded-lg p-3 border border-purple-100">
                                <div className="text-xs text-gray-500 mb-1">发音准确度</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-purple-500 h-2 rounded-full transition-all"
                                      style={{ width: `${evaluationResult.pronunciation}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-700 w-10 text-right">
                                    {evaluationResult.pronunciation}分
                                  </span>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-3 border border-purple-100">
                                <div className="text-xs text-gray-500 mb-1">节奏感</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full transition-all"
                                      style={{ width: `${evaluationResult.rhythm}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-semibold text-gray-700 w-10 text-right">
                                    {evaluationResult.rhythm}分
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* 整体评价 */}
                            <div className="bg-white rounded-lg p-3 border border-purple-100">
                              <div className="text-xs text-gray-500 mb-2">整体评价</div>
                              <div className="text-sm text-gray-700 font-medium">{evaluationResult.overall}</div>
                            </div>

                            {/* 改进建议 */}
                            <div className="bg-white rounded-lg p-3 border border-purple-100">
                              <div className="text-xs text-gray-500 mb-2">改进建议</div>
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
                      退出跟唱
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 右侧：歌词显示区 */}
            <div className={`${
              videoSize === 'small' ? 'col-span-8' : 
              videoSize === 'medium' ? 'col-span-6' : 
              'col-span-4'
            } bg-white rounded-xl shadow-sm border p-4 transition-all`}>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">歌词</h2>
              
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
                  标准模式
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLyricMode('vocab')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lyricMode === 'vocab'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    词汇训练
                  </button>
                  <button
                    onClick={() => setLyricMode('sentence')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lyricMode === 'sentence'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    句式训练
                  </button>
                  <button
                    onClick={() => setLyricMode('pronunciation')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      lyricMode === 'pronunciation'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    声音训练
                  </button>
                </div>
              </div>
              
              <div className="h-[400px] overflow-y-auto space-y-2">
                {subtitles.map((sub, idx) => {
                  const sentenceIndex = idx + 1;
                  const vocab = getVocabForSentence(sentenceIndex);
                  const tokens: Token[] = convertVocabToTokens(vocab);
                  // 提取行号和歌词内容（只提取一次）
                  const { lineNumber, lyricText } = extractLineNumberAndText(sub.text);
                  
                  return (
                    <div
                      key={idx}
                      id={`subtitle-${idx}`}
                      onClick={(e) => {
                        // 只有点击空白部分（不是词卡）才触发播放
                        const target = e.target as HTMLElement;
                        if (!target.closest('[data-word]') && !target.closest('[data-word-tooltip]')) {
                          handleSubtitleClick(sub);
                        }
                      }}
                      className={`p-3 rounded-lg cursor-pointer transition-all border-2 relative ${
                        currentSubtitleIndex === idx
                          ? 'bg-blue-50 border-blue-500 shadow-md'
                          : lyricMode === 'pronunciation' && currentSubtitleIndex !== idx
                          ? 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 opacity-60'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {/* 练一练气泡 - 只遮挡该句歌词内容，不影响视频 */}
                      {showPractice === sentenceIndex && vocab.length > 0 && (() => {
                        const questions = getPracticeForSentence(sentenceIndex);
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
                              <h3 className="text-sm font-semibold text-gray-800">本句重点词练习</h3>
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
                                  <span className="text-gray-700">进度：{answeredCount}/{totalQuestions}</span>
                                  <span className="text-gray-700">正确：{correctCount}/{answeredCount || 1}</span>
                                  <span className="font-semibold text-blue-700">得分：{score}分</span>
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
                          {lineNumber && (
                            <span className="text-gray-500 font-medium flex-shrink-0 w-8">{lineNumber}</span>
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
                                <SentenceView
                                  sentence={lyricText}
                                  tokens={tokens}
                                  globalActiveTokenId={lyricMode === 'vocab' ? null : globalActiveTokenId}
                                  onTokenActivate={lyricMode === 'vocab' ? undefined : (tokenId) => setGlobalActiveTokenId(tokenId)}
                                  tokenIdPrefix={`youtube-subtitle-${idx}`}
                                  disableWordCards={lyricMode === 'vocab'}
                                />
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
                      {(lyricMode === 'standard' || lyricMode === 'pronunciation' || lyricMode === 'vocab') && (
                        <div className="text-xs text-gray-500 mb-2 leading-relaxed pr-32 flex items-start gap-2">
                          {lineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getPinyinForSentence(lyricText)}</span>
                        </div>
                      )}
                      
                      {/* 韩语翻译 */}
                      {lyricMode === 'standard' && (
                        <div className="text-sm text-gray-600 leading-relaxed mb-1 flex items-start gap-2">
                          {lineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getKoreanTranslation(sentenceIndex) || ''}</span>
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
                          {lineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getKoreanTranslation(sentenceIndex) || ''}</span>
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
                          {lineNumber && (
                            <span className="flex-shrink-0 w-8"></span>
                          )}
                          <span className="flex-1">{getKoreanTranslation(sentenceIndex) || ''}</span>
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
                              <span>本句重点词</span>
                              <svg
                                className={`w-3 h-3 transition-transform ${expandedVocabSentences.has(sentenceIndex) ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {/* 练一练按钮 */}
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
                                练一练
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
                                          <div className="text-xs text-gray-500 mb-1">例句：</div>
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
                      {lyricMode === 'sentence' && (
                        <div className="mt-2 border-t border-gray-200 pt-2">
                          <div className="text-xs text-gray-600 mb-2">
                            <span className="font-semibold">本句结构：</span>
                            <span className="ml-1">主谓宾结构</span>
                          </div>
                          <div className="text-xs text-gray-500 mb-2">
                            这是一个简单的主谓宾句式，主语在前，谓语在中间，宾语在后。
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              // 改写练习按钮（暂时只是占位）
                              alert('改写练习功能开发中...');
                            }}
                            className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-medium transition-colors"
                          >
                            改写练习
                          </button>
                        </div>
                      )}
                      
                      {/* 声音训练模式：跟读按钮和评分区域 */}
                      {lyricMode === 'pronunciation' && (
                        <div className="mt-2 border-t border-gray-200 pt-2 space-y-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlaySentence(lyricText);
                            }}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                            跟读
                          </button>
                          <div className="text-xs text-gray-600">
                            <span className="font-semibold">评分：</span>
                            <span className="ml-1 text-green-600 font-semibold">85分</span>
                            <span className="ml-2 text-gray-500">（发音准确度：90分，节奏感：80分）</span>
                          </div>
                        </div>
                      )}
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>


          {/* 下方：歌词解析区（全宽） */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">歌词解析</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setVocabMode('current')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    vocabMode === 'current'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  当前句子
                </button>
                <button
                  onClick={() => setVocabMode('all')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    vocabMode === 'all'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  所有词汇
                </button>
              </div>
            </div>

            {/* 颜色说明 */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-green-300"></span>
                  基础词：淡绿色
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-blue-300"></span>
                  中级词：淡蓝色
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-purple-300"></span>
                  高级词：淡紫色
                </span>
              </div>
            </div>

            {/* 词汇列表 */}
            <div 
              ref={vocabScrollRef}
              className="h-[400px] overflow-y-auto space-y-3"
            >
              {displayedVocab.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  {vocabMode === 'current' 
                    ? '等待播放歌词...' 
                    : '暂无词汇数据'}
                </div>
              ) : (
                displayedVocab.map((word, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 ${getVocabColorClass(word.level)} transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-lg">{word.word}</div>
                      <span className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded">
                        {getLevelLabel(word.level)}
                      </span>
                    </div>
                    <div className="text-sm mb-1 text-gray-700">{word.pinyin}</div>
                    <div className="text-sm mb-1">{word.meaning}</div>
                    {word.meaningKr && (
                      <div className="text-xs text-gray-600 mb-1">{word.meaningKr}</div>
                    )}
                    {word.example && (
                      <div className="text-xs text-gray-500 mt-2 italic border-l-2 pl-2 border-gray-300">
                        {word.example}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
