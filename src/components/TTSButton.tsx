import { useState, useEffect, useRef } from 'react';
import { audioManager } from '../utils/audioManager';
import { songPageTranslations } from '../i18n/songPageTranslations';

interface TTSButtonProps {
  text: string;
  lang?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  label?: string; // 可选：按钮上显示的文字标签
  uiLanguage?: 'ko'; // UI 固定韩文
  rate?: number; // 语速，默认 0.7，如 0.6 为更慢
}

export const TTSButton = ({ text, lang = 'zh-CN', className = '', onClick, label, uiLanguage = 'ko', rate = 0.7 }: TTSButtonProps) => {
  const t = songPageTranslations.ko;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // 获取可用的中文声音（更自然的声音）
  useEffect(() => {
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        // 优先选择更自然的中文声音
        // 常见的中文声音名称（不同浏览器可能不同）
        const preferredVoices = [
          'Microsoft Xiaoxiao - Chinese (Simplified, PRC)', // Windows Edge/Chrome
          'Microsoft Yaoyao - Chinese (Simplified, PRC)', // Windows Edge/Chrome
          'Ting-Ting', // macOS
          'Sin-Ji', // macOS
          'Google 普通话（中国大陆）', // Chrome
          'Microsoft Kangkang - Chinese (Simplified, PRC)', // Windows
        ];
        
        // 先尝试匹配首选声音
        for (const preferredName of preferredVoices) {
          const voice = voices.find(v => v.name.includes(preferredName.split(' ')[0]) && v.lang.startsWith('zh'));
          if (voice) {
            voiceRef.current = voice;
            return;
          }
        }
        
        // 如果没有找到首选声音，选择第一个中文声音
        const chineseVoice = voices.find(v => v.lang.startsWith('zh-CN') || v.lang.startsWith('zh'));
        if (chineseVoice) {
          voiceRef.current = chineseVoice;
        }
      }
    };

    // 立即加载一次
    loadVoices();
    
    // 某些浏览器需要等待voices加载完成
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  useEffect(() => {
    // 监听TTS状态变化
    const checkTTSStatus = setInterval(() => {
      const speaking = audioManager.isTTSSpeaking();
      const paused = audioManager.isTTSPaused();
      setIsSpeaking(speaking);
      setIsPaused(paused);
    }, 100);

    return () => clearInterval(checkTTSStatus);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }

    if (isPaused) {
      // 继续播放
      audioManager.resumeTTS();
      setIsPaused(false);
    } else if (isSpeaking) {
      // 如果正在播放，点击暂停
      audioManager.pauseTTS();
      setIsPaused(true);
    } else {
      // 开始播放（固定0.7倍速）
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = rate;
        
        // 设置声音
        if (voiceRef.current) {
          utterance.voice = voiceRef.current;
        }
        
        utterance.onstart = () => {
          setIsSpeaking(true);
          setIsPaused(false);
        };
        
        utterance.onend = () => {
          setIsSpeaking(false);
          setIsPaused(false);
          utteranceRef.current = null;
        };
        
        utterance.onerror = () => {
          setIsSpeaking(false);
          setIsPaused(false);
          utteranceRef.current = null;
        };

        utteranceRef.current = utterance;
        audioManager.playTTS(utterance);
      } else {
        alert('您的浏览器不支持语音合成功能');
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      className={`
        inline-flex items-center justify-center gap-1
        px-2 py-1 rounded-lg
        ${isSpeaking && !isPaused
          ? 'bg-indigo-200 hover:bg-indigo-300 text-indigo-800'
          : isPaused
          ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'
          : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
        }
        transition-colors duration-200
        text-sm font-medium
        ${className}
      `}
      title={isPaused ? t.ttsTitleResume : isSpeaking ? t.ttsTitlePause : t.ttsTitlePlay}
      aria-label={isPaused ? t.ttsTitleResume : isSpeaking ? t.ttsTitlePause : t.ttsTitlePlay}
    >
      {isPaused ? (
        // 继续图标
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      ) : isSpeaking ? (
        // 暂停图标
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
        </svg>
      ) : (
        // 播放图标
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      )}
      {label && <span>{label}</span>}
    </button>
  );
};

