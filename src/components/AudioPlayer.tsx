import { useState, useRef, useEffect } from 'react';
import { audioManager } from '../utils/audioManager';

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // 添加超时引用
  const hasPlayedRef = useRef<boolean>(false); // 添加播放标志

  useEffect(() => {
    // 检查是否有音频
    const hasAudioSource = audioFile || (audioUrl && audioUrl.trim() !== '');
    setHasAudio(!!hasAudioSource);
  }, [audioFile, audioUrl]);

  const playAudio = async () => {
    if (!hasAudio) return;

    try {
      // 清除之前的超时和标志
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      hasPlayedRef.current = false;

      let audio: HTMLAudioElement;

      if (audioFile) {
        // 使用上传的音频文件
        const url = URL.createObjectURL(audioFile);
        audio = new Audio(url);
        console.log('🎵 [AudioPlayer] source: audioFile');
        console.log('🎵 [AudioPlayer] audioFile.name:', audioFile.name);
      } else if (audioUrl) {
        // 使用URL
        audio = new Audio(audioUrl);
        console.log('🎵 [AudioPlayer] source: audioUrl');
      } else {
        return;
      }

      audioRef.current = audio;

      // ⭐ 调试日志：打印 audio.src 和传入的时间戳
      console.log('🎵 [AudioPlayer] audio.src:', audio.src);
      console.log('🎵 [AudioPlayer] startSec:', startSec, 'endSec:', endSec);

      // ⭐ 事件日志：loadedmetadata
      audio.addEventListener('loadedmetadata', () => {
        console.log('🎵 [AudioPlayer] loadedmetadata - duration:', audio.duration, 'currentTime:', audio.currentTime);
      });

      // ⭐ 事件日志：seeked
      audio.addEventListener('seeked', () => {
        console.log('🎵 [AudioPlayer] seeked - currentTime:', audio.currentTime);
      });

      // ⭐ 事件日志：play
      audio.addEventListener('play', () => {
        console.log('🎵 [AudioPlayer] play - currentTime:', audio.currentTime);
      });

      // 设置播放时间范围
      if (startSec !== undefined && startSec >= 0) {
        // ⭐ 重要：等 seeked 触发后再播放
        const playAfterSeek = () => {
          // 检查是否已经播放过
          if (hasPlayedRef.current) {
            console.log('🎵 [AudioPlayer] 已经播放过，跳过');
            return;
          }
          
          console.log('🎵 [AudioPlayer] seeked 事件触发，准备播放 - currentTime:', audio.currentTime);
          
          // 清除超时保护
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          
          // 标记为已播放
          hasPlayedRef.current = true;
          
          // 确保 currentTime 正确
          if (Math.abs(audio.currentTime - startSec) > 0.1) {
            audio.currentTime = startSec;
            // 如果 currentTime 不正确，等待再次 seeked
            audio.addEventListener('seeked', () => {
              audioManager.playAudio(audio);
            }, { once: true });
          } else {
            // 使用 audioManager 播放（会自动停止其他音频）
            audioManager.playAudio(audio);
          }
          
          audio.removeEventListener('seeked', playAfterSeek);
        };
        
        audio.addEventListener('seeked', playAfterSeek);
        console.log('🎵 [AudioPlayer] 设置 currentTime 前:', audio.currentTime);
        audio.currentTime = startSec;
        console.log('🎵 [AudioPlayer] 设置 currentTime 后:', audio.currentTime, '(目标:', startSec, ')');
        
        // ⭐ 如果 seeked 事件没有触发，添加超时保护
        timeoutRef.current = setTimeout(() => {
          // 检查是否已经播放过
          if (hasPlayedRef.current) {
            console.log('🎵 [AudioPlayer] 超时保护：已经播放过，跳过');
            return;
          }
          
          if (audio.readyState >= 2) { // HAVE_CURRENT_DATA
            console.log('🎵 [AudioPlayer] seeked 事件可能未触发，直接播放 - currentTime:', audio.currentTime);
            
            // 确保 currentTime 正确
            if (Math.abs(audio.currentTime - startSec) > 0.1) {
              audio.currentTime = startSec;
              // 等待 seeked 后再播放
              audio.addEventListener('seeked', () => {
                hasPlayedRef.current = true;
                audioManager.playAudio(audio);
              }, { once: true });
            } else {
              // 标记为已播放
              hasPlayedRef.current = true;
              // 使用 audioManager 播放（会自动停止其他音频）
              audioManager.playAudio(audio);
            }
          }
        }, 1000);
      } else {
        // 如果没有设置起始时间，使用 audioManager 播放
        hasPlayedRef.current = true;
        audioManager.playAudio(audio);
      }

      // 如果设置了结束时间，在到达时停止
      if (endSec !== undefined && endSec > 0) {
        const checkTime = setInterval(() => {
          if (audio.currentTime >= endSec) {
            audio.pause();
            setIsPlaying(false);
            clearInterval(checkTime);
            hasPlayedRef.current = false; // 重置标志
            if (audioFile) {
              URL.revokeObjectURL(audio.src);
            }
          }
        }, 50); // 更频繁地检查，提高精度

        audio.onended = () => {
          clearInterval(checkTime);
          setIsPlaying(false);
          hasPlayedRef.current = false; // 重置标志
          if (audioFile) {
            URL.revokeObjectURL(audio.src);
          }
        };
      } else {
        // 如果没有设置结束时间，正常播放到结束
        audio.onended = () => {
          setIsPlaying(false);
          hasPlayedRef.current = false; // 重置标志
          if (audioFile) {
            URL.revokeObjectURL(audio.src);
          }
        };
      }

      audio.onplay = () => setIsPlaying(true);
      audio.onpause = () => setIsPlaying(false);
      audio.onerror = () => {
        setIsPlaying(false);
        hasPlayedRef.current = false; // 重置标志
        if (audioFile) {
          URL.revokeObjectURL(audio.src);
        }
      };

      // 监听 audioManager 的音频变化，同步播放状态
      const handleAudioChange = (currentAudio: HTMLAudioElement | null) => {
        if (currentAudio === audio) {
          setIsPlaying(!audio.paused);
        } else {
          // 其他音频正在播放，停止当前音频
          if (!audio.paused) {
            audio.pause();
            setIsPlaying(false);
          }
        }
      };

      audioManager.setOnAudioChange(handleAudioChange);
    } catch (error) {
      console.error('音频播放错误:', error);
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      // 清除超时
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      hasPlayedRef.current = false; // 重置标志
      audioManager.stopCurrentAudio();
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
          <span className="text-sm">停止</span>
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
          <span className="text-sm">原唱</span>
        </>
      )}
    </button>
  );
};

