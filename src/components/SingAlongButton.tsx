import { useState, useRef, useEffect } from 'react';

interface SingAlongButtonProps {
  text: string; // 要跟唱的文本
  className?: string;
}

export const SingAlongButton = ({ text, className = '' }: SingAlongButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [isScoring, setIsScoring] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysisData, setAnalysisData] = useState<{
    pronunciation: { accuracy: number; issues: string[] };
    rhythm: { accuracy: number; issues: string[] };
    emotion: { accuracy: number; issues: string[] };
    fluency: number;
  } | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

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
    };
  }, []);

  // 开始录音
  const startRecording = async () => {
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

      mediaRecorder.onstop = () => {
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
        setScore(null); // 重置评分
      };

      mediaRecorder.start();
      setIsRecording(true);
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
      setIsRecording(false);
    }
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

  // 评分（模拟评分，后续可以集成真实的语音识别API）
  const evaluateRecording = async () => {
    if (!hasRecording) return;
    
    setIsScoring(true);
    setScore(null);
    setAnalysisData(null);
    
    // 模拟评分过程（实际应该调用语音识别和评分API）
    setTimeout(() => {
      // 这里可以集成真实的评分API，比如：
      // const result = await callSpeechEvaluationAPI(audioBlob, text);
      // setScore(result.score);
      
      // 暂时使用随机分数作为演示
      const mockScore = Math.floor(Math.random() * 30) + 70; // 70-100分
      setScore(mockScore);
      
      // 生成详细分析数据（假数据）
      const mockAnalysis = {
        pronunciation: {
          accuracy: Math.floor(Math.random() * 20) + 75, // 75-95%
          issues: [
            "第三声调需要更明显",
            "注意'的'字的轻声发音",
            "'了'字的音调可以更自然",
          ].slice(0, Math.floor(Math.random() * 3) + 1),
        },
        rhythm: {
          accuracy: Math.floor(Math.random() * 20) + 70, // 70-90%
          issues: [
            "节奏稍快，建议放慢",
            "注意停顿的位置",
            "整体节奏感良好",
          ].slice(0, Math.floor(Math.random() * 2) + 1),
        },
        emotion: {
          accuracy: Math.floor(Math.random() * 25) + 70, // 70-95%
          issues: [
            "可以增加更多情感表达",
            "语调变化可以更丰富",
            "整体表达自然流畅",
          ].slice(0, Math.floor(Math.random() * 2) + 1),
        },
        fluency: Math.floor(Math.random() * 20) + 75, // 75-95%
      };
      
      setAnalysisData(mockAnalysis);
      setIsScoring(false);
    }, 2000);
  };

  // 删除录音
  const deleteRecording = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      URL.revokeObjectURL(audioRef.current.src);
      audioRef.current = null;
    }
    setHasRecording(false);
    setScore(null);
    setIsPlaying(false);
  };

  return (
    <div className={`relative inline-flex items-center gap-2 flex-wrap ${className}`}>
      {/* 录音按钮 */}
      {!hasRecording && !isRecording && (
        <button
          onClick={startRecording}
          className="
            inline-flex items-center justify-center gap-1
            px-3 py-1.5 rounded-lg
            bg-purple-100 hover:bg-purple-200 active:bg-purple-300
            text-purple-700 hover:text-purple-800
            transition-colors duration-200
            text-sm font-medium
          "
          title="开始跟唱录音"
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
          跟读
        </button>
      )}

      {/* 录音中 */}
      {isRecording && (
        <button
          onClick={stopRecording}
          className="
            inline-flex items-center justify-center gap-1
            px-3 py-1.5 rounded-lg
            bg-red-100 hover:bg-red-200 active:bg-red-300
            text-red-700 hover:text-red-800
            transition-colors duration-200
            text-sm font-medium
            animate-pulse
          "
          title="停止录音"
        >
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          录音中...
        </button>
      )}

      {/* 录音完成后的操作按钮 */}
      {hasRecording && !isRecording && (
        <>
          {/* 播放/暂停按钮 */}
          <button
            onClick={playRecording}
            className="
              inline-flex items-center justify-center
              w-8 h-8 rounded-full
              bg-green-100 hover:bg-green-200 active:bg-green-300
              text-green-700 hover:text-green-800
              transition-colors duration-200
            "
            title={isPlaying ? "暂停播放" : "播放录音"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>

          {/* 评分按钮 */}
          <button
            onClick={evaluateRecording}
            disabled={isScoring}
            className="
              inline-flex items-center justify-center gap-1
              px-3 py-1.5 rounded-lg
              bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300
              text-yellow-700 hover:text-yellow-800
              transition-colors duration-200
              text-sm font-medium
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            title="获取评分"
          >
            {isScoring ? (
              <>
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
                评分中...
              </>
            ) : (
              <>
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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                评分
              </>
            )}
          </button>

          {/* 删除按钮 */}
          <button
            onClick={deleteRecording}
            className="
              inline-flex items-center justify-center
              w-8 h-8 rounded-full
              bg-gray-100 hover:bg-gray-200 active:bg-gray-300
              text-gray-600 hover:text-gray-700
              transition-colors duration-200
            "
            title="删除录音"
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </>
      )}

      {/* 评分结果显示 */}
      {score !== null && (
        <div className="flex items-center gap-2 flex-wrap">
          <div className="
            inline-flex items-center gap-1
            px-2 py-1 rounded
            bg-gradient-to-r from-yellow-50 to-orange-50
            border border-yellow-200
            text-sm font-semibold
          ">
            <span className="text-yellow-700">得分:</span>
            <span className={`
              ${score >= 90 ? 'text-green-600' : score >= 80 ? 'text-blue-600' : score >= 70 ? 'text-yellow-600' : 'text-red-600'}
            `}>
              {score}分
            </span>
            {score >= 90 && <span className="text-yellow-500">⭐</span>}
          </div>
          
          {/* 详细分析按钮 */}
          {analysisData && (
            <button
              onClick={() => setShowAnalysis(!showAnalysis)}
              className="
                inline-flex items-center gap-1
                px-2 py-1 rounded
                bg-blue-50 hover:bg-blue-100
                border border-blue-200
                text-blue-700 text-xs font-medium
                transition-colors
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              {showAnalysis ? '隐藏分析' : '详细分析'}
            </button>
          )}
        </div>
      )}
      
      {/* 详细分析面板 */}
      {showAnalysis && analysisData && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
          <div className="space-y-4">
            {/* 发音分析 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">发音准确度</span>
                <span className="text-sm font-bold text-blue-600">{analysisData.pronunciation.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${analysisData.pronunciation.accuracy}%` }}
                ></div>
              </div>
              {analysisData.pronunciation.issues.length > 0 && (
                <ul className="mt-2 text-xs text-gray-600 space-y-1">
                  {analysisData.pronunciation.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-red-500">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* 节奏分析 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">节奏准确度</span>
                <span className="text-sm font-bold text-green-600">{analysisData.rhythm.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${analysisData.rhythm.accuracy}%` }}
                ></div>
              </div>
              {analysisData.rhythm.issues.length > 0 && (
                <ul className="mt-2 text-xs text-gray-600 space-y-1">
                  {analysisData.rhythm.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-orange-500">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* 情感表达 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">情感表达</span>
                <span className="text-sm font-bold text-purple-600">{analysisData.emotion.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${analysisData.emotion.accuracy}%` }}
                ></div>
              </div>
              {analysisData.emotion.issues.length > 0 && (
                <ul className="mt-2 text-xs text-gray-600 space-y-1">
                  {analysisData.emotion.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-purple-500">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* 流畅度 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">整体流畅度</span>
                <span className="text-sm font-bold text-indigo-600">{analysisData.fluency}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full transition-all"
                  style={{ width: `${analysisData.fluency}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

