import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  audioFile: File | null;
  audioUrl?: string;
  startSec?: number;
  endSec?: number;
  className?: string;
}

export const AudioPlayer = ({ 
  audioFile, 
  audioUrl, 
  startSec, 
  endSec,
  className = '' 
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 检查是否有音频
    const hasAudioSource = audioFile || (audioUrl && audioUrl.trim() !== '');
    setHasAudio(!!hasAudioSource);
  }, [audioFile, audioUrl]);

  const playAudio = async () => {
    if (!hasAudio) return;

    try {
      let audio: HTMLAudioElement;

      if (audioFile) {
        // 使用上传的音频文件
        const url = URL.createObjectURL(audioFile);
        audio = new Audio(url);
      } else if (audioUrl) {
        // 使用URL
        audio = new Audio(audioUrl);
      } else {
        return;
      }

      audioRef.current = audio;

      // 设置播放时间范围
      if (startSec !== undefined && startSec >= 0) {
        audio.currentTime = startSec;
      }

      // 如果设置了结束时间，在到达时停止
      if (endSec !== undefined && endSec > 0) {
        const checkTime = setInterval(() => {
          if (audio.currentTime >= endSec) {
            audio.pause();
            setIsPlaying(false);
            clearInterval(checkTime);
            if (audioFile) {
              URL.revokeObjectURL(audio.src);
            }
          }
        }, 50); // 更频繁地检查，提高精度

        audio.onended = () => {
          clearInterval(checkTime);
          setIsPlaying(false);
          if (audioFile) {
            URL.revokeObjectURL(audio.src);
          }
        };
      } else {
        // 如果没有设置结束时间，正常播放到结束
        audio.onended = () => {
          setIsPlaying(false);
          if (audioFile) {
            URL.revokeObjectURL(audio.src);
          }
        };
      }

      audio.onplay = () => setIsPlaying(true);
      audio.onerror = () => {
        setIsPlaying(false);
        if (audioFile) {
          URL.revokeObjectURL(audio.src);
        }
      };

      await audio.play();
    } catch (error) {
      console.error('音频播放错误:', error);
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  if (!hasAudio) {
    return (
      <div className={`text-xs text-gray-400 ${className}`}>
        请上传音频文件
      </div>
    );
  }

  return (
    <button
      onClick={isPlaying ? stopAudio : playAudio}
      className={`
        inline-flex items-center justify-center gap-1
        px-2 py-1 rounded-lg
        ${isPlaying 
          ? 'bg-orange-100 hover:bg-orange-200 text-orange-700' 
          : 'bg-green-100 hover:bg-green-200 text-green-700'
        }
        transition-colors duration-200
        text-sm font-medium
        ${className}
      `}
      title={isPlaying ? "停止播放原唱" : "听原唱"}
      aria-label={isPlaying ? "停止播放原唱" : "听原唱"}
    >
      {isPlaying ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
          <span className="text-xs">停止</span>
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
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
          <span className="text-xs">原唱</span>
        </>
      )}
    </button>
  );
};

