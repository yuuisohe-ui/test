import { useState } from 'react';

interface TTSButtonProps {
  text: string;
  lang?: string;
  className?: string;
}

export const TTSButton = ({ text, lang = 'zh-CN', className = '' }: TTSButtonProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if ('speechSynthesis' in window) {
      // 停止当前正在播放的语音
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8; // 稍微慢一点，便于学习
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert('您的浏览器不支持语音合成功能');
    }
  };

  return (
    <button
      onClick={speak}
      disabled={isSpeaking}
      className={`
        inline-flex items-center justify-center
        w-8 h-8 rounded-full
        bg-blue-100 hover:bg-blue-200 active:bg-blue-300
        text-blue-600 hover:text-blue-700
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      title="朗读"
      aria-label="朗读"
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
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </button>
  );
};

