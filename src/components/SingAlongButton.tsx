import { useState, useRef, useEffect } from 'react';
import { generateReadingFeedback, transcribeAudio } from '../services/chatgptApi';
import { SpeechRadarChart } from './RadarChart';

interface SingAlongButtonProps {
  text: string; // 要跟读的目标文本
  userLevel: "初级" | "中级" | "高级" | null; // 用户水平
  className?: string;
  onStartRecording?: () => void; // 开始录音时的回调
}

interface ReadingFeedback {
  scores: {
    contentAccuracy: number;
    tonePerformance: number;
    speakingFluency: number;
  };
  overallComment: string;
  keyIssue: string;
  oneAction: string;
  contentCheck: {
    asrText: string;
    missing: string[];
    extra: string[];
    substitutions: Array<{ original: string; replaced: string }>;
  };
}

export const SingAlongButton = ({ text, userLevel, className = '', onStartRecording }: SingAlongButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [feedback, setFeedback] = useState<ReadingFeedback | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // 清理函数
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
      }
    };
  }, []);

  // 开始录音
  const startRecording = async () => {
    if (!userLevel) {
      alert('请先选择您的语言等级');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (audioRef.current) {
          URL.revokeObjectURL(audioRef.current.src);
        }
        
        audioRef.current = new Audio(audioUrl);
        audioRef.current.onended = () => setIsPlaying(false);
        audioRef.current.onplay = () => setIsPlaying(true);
        audioRef.current.onpause = () => setIsPlaying(false);
        
        setHasRecording(true);
        setFeedback(null);
        setShowFeedback(false);

        // 自动开始分析和转写
        await analyzeRecording(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingDuration(0);
      startTimeRef.current = Date.now();
      
      // 触发回调
      if (onStartRecording) {
        onStartRecording();
      }
      
      // 开始计时
      durationIntervalRef.current = setInterval(() => {
        setRecordingDuration(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 100);
    } catch (error) {
      console.error('录音失败:', error);
      alert('无法访问麦克风，请检查浏览器权限设置');
    }
  };

  // 停止录音
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
        durationIntervalRef.current = null;
      }
      setIsRecording(false);
    }
  };

  // 重新录音
  const restartRecording = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      URL.revokeObjectURL(audioRef.current.src);
      audioRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current);
      durationIntervalRef.current = null;
    }
    setHasRecording(false);
    setFeedback(null);
    setShowFeedback(false);
    setRecordingDuration(0);
    setIsRecording(false);
    setIsPlaying(false);
    setIsAnalyzing(false);
    setAnalysisProgress(0);
    // 延迟一下再开始录音，确保状态已重置
    setTimeout(() => {
      startRecording();
    }, 100);
  };

  // 播放录音
  const playRecording = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  // 分析录音
  const analyzeRecording = async (audioBlob: Blob) => {
    if (!userLevel || !text) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setFeedback(null);
    setShowFeedback(false);

    try {
      // 模拟进度更新
      const progressInterval = setInterval(() => {
        setAnalysisProgress((prev) => {
          // 在转写阶段，进度到40%
          if (prev < 40) {
            return Math.min(prev + 2, 40);
          }
          // 在分析阶段，进度到90%
          if (prev < 90) {
            return Math.min(prev + 1, 90);
          }
          return prev;
        });
      }, 200);

      // 1. 转写音频
      setAnalysisProgress(10);
      const asrText = await transcribeAudio(audioBlob);
      console.log('🎤 转写结果:', asrText);
      setAnalysisProgress(40);

      // 2. 计算音频时长
      const durationSec = recordingDuration;

      // 3. 生成反馈
      setAnalysisProgress(50);
      const feedbackData = await generateReadingFeedback(
        userLevel,
        text,
        asrText,
        durationSec
      );
      setAnalysisProgress(90);

      // 清除进度更新定时器
      clearInterval(progressInterval);
      setAnalysisProgress(100);

      // 确保 substitutions 格式正确，并确保评分最低50分
      const normalizedFeedback = {
        ...feedbackData,
        scores: {
          contentAccuracy: Math.max(50, feedbackData.scores.contentAccuracy),
          tonePerformance: Math.max(50, feedbackData.scores.tonePerformance),
          speakingFluency: Math.max(50, feedbackData.scores.speakingFluency),
        },
        contentCheck: {
          ...feedbackData.contentCheck,
          substitutions: feedbackData.contentCheck.substitutions.map((sub: any) => {
            if (typeof sub === 'string') {
              // 如果 API 返回的是字符串，尝试解析
              return { original: sub, replaced: '' };
            }
            return {
              original: sub.original || sub[0] || '',
              replaced: sub.replaced || sub[1] || '',
            };
          }),
        },
      };

      setFeedback(normalizedFeedback);
      setShowFeedback(true);
      
      // 短暂延迟后重置进度，为下次分析做准备
      setTimeout(() => {
        setAnalysisProgress(0);
      }, 500);
    } catch (error) {
      console.error('分析失败:', error);
      alert('分析失败，请稍后重试');
      setAnalysisProgress(0);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // 格式化时长显示
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* 跟读按钮 - 一直显示 */}
      {!isRecording && (
        <button
          onClick={hasRecording ? restartRecording : startRecording}
          disabled={!userLevel}
          className="
            inline-flex items-center justify-center gap-1
            px-3 py-1.5 rounded-lg
            bg-purple-100 hover:bg-purple-200 active:bg-purple-300
            text-purple-700 hover:text-purple-800
            transition-colors duration-200
            text-sm font-medium
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          title={!userLevel ? "请先选择语言等级" : hasRecording ? "重新跟读" : "开始跟读录音"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
          {hasRecording ? '再读一次' : '跟读'}
        </button>
      )}

      {/* 录音中 */}
      {isRecording && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm text-red-700 font-medium">
              正在录音，录音目前为 {formatDuration(recordingDuration)}
            </span>
          </div>
          <button
            onClick={stopRecording}
            className="
              inline-flex items-center justify-center
              px-3 py-1.5 rounded-lg
              bg-red-100 hover:bg-red-200
              text-red-700 text-sm font-medium
              transition-colors
            "
          >
            结束录音
          </button>
          <button
            onClick={() => {
              // 取消录音
              if (mediaRecorderRef.current && isRecording) {
                mediaRecorderRef.current.stop();
              }
              if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
              }
              if (durationIntervalRef.current) {
                clearInterval(durationIntervalRef.current);
                durationIntervalRef.current = null;
              }
              setIsRecording(false);
              setRecordingDuration(0);
              setHasRecording(false);
              setFeedback(null);
              setShowFeedback(false);
              setAnalysisProgress(0);
              setIsAnalyzing(false);
              
              // 清理录音资源
              if (audioRef.current) {
                audioRef.current.pause();
                URL.revokeObjectURL(audioRef.current.src);
                audioRef.current = null;
              }
            }}
            className="
              inline-flex items-center justify-center
              px-3 py-1.5 rounded-lg
              bg-gray-100 hover:bg-gray-200
              text-gray-700 text-sm font-medium
              transition-colors
            "
          >
            取消
          </button>
        </div>
      )}

      {/* 分析中 */}
      {hasRecording && isAnalyzing && (
        <div className="flex flex-col gap-2 min-w-[200px]">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>分析中... {analysisProgress}%</span>
          </div>
          {/* 进度条 */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-purple-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${analysisProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* AI跟读点评面板 - 使用绝对定位，出现在按钮下方，确保右边不超出页面 */}
      {showFeedback && feedback && (
        <div className="absolute top-full right-0 mt-2 w-96 max-w-[min(384px,calc(100vw-2rem))] bg-white rounded-lg shadow-xl border-2 border-purple-300 p-4 z-[100] space-y-4" style={{ right: 0 }}>
          {/* 气泡箭头 */}
          <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l-2 border-t-2 border-purple-300 transform rotate-45"></div>
          
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-sm font-semibold text-gray-800">AI跟读点评</h3>
            <button
              onClick={() => setShowFeedback(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 一、本次发音表现（雷达图）- 放到第一位 */}
          <div>
            <div className="text-xs font-semibold text-gray-600 mb-2">一、本次发音表现</div>
            <SpeechRadarChart 
              data={[
                { subject: '内容准确度', score: feedback.scores.contentAccuracy, fullMark: 100 },
                { subject: '声调表现', score: feedback.scores.tonePerformance, fullMark: 100 },
                { subject: '说话流畅度', score: feedback.scores.speakingFluency, fullMark: 100 },
              ]}
            />
          </div>

          {/* 二、整体评价 */}
          <div>
            <div className="text-xs font-semibold text-gray-600 mb-1">二、整体评价</div>
            <div className="text-sm text-gray-800">{feedback.overallComment}</div>
          </div>

          {/* 三、本次主要问题 */}
          <div>
            <div className="text-xs font-semibold text-gray-600 mb-1">三、本次主要问题</div>
            <div className="text-sm text-gray-800 bg-red-50 border-l-2 border-red-400 pl-2 py-1">
              {feedback.keyIssue}
            </div>
          </div>

          {/* 四、下一步练习 */}
          <div>
            <div className="text-xs font-semibold text-gray-600 mb-1">四、下一步练习</div>
            <div className="text-sm text-gray-800 bg-blue-50 border-l-2 border-blue-400 pl-2 py-1">
              {feedback.oneAction}
            </div>
          </div>

          {/* 底部操作按钮 */}
          <div className="flex items-center gap-2 pt-2 border-t">
            <button
              onClick={restartRecording}
              className="
                flex-1 px-3 py-2 rounded-lg
                bg-purple-100 hover:bg-purple-200
                text-purple-700 text-sm font-medium
                transition-colors
              "
            >
              再读一次
            </button>
            <button
              onClick={playRecording}
              className="
                flex-1 px-3 py-2 rounded-lg
                bg-green-100 hover:bg-green-200
                text-green-700 text-sm font-medium
                transition-colors
                flex items-center justify-center gap-1
              "
            >
              {isPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                  暂停
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  播放我的录音
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
