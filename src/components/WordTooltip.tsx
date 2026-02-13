import { useState, useEffect, useRef } from 'react';
import { Token } from '../types';
import { TTSButton } from './TTSButton';
import { getWordCardInfo, WordCardInfo } from '../services/wordCardApi';

interface WordTooltipProps {
  token: Token;
  position: { top: number; left: number };
  onClose: () => void;
  item?: any; // 原始行数据，用于获取拼音等信息
}

export const WordTooltip = ({ token, position, onClose, item }: WordTooltipProps) => {
  const [isStarred, setIsStarred] = useState(false);
  const [wordInfo, setWordInfo] = useState<WordCardInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 清除关闭定时器
  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // 延迟关闭词卡
  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 300); // 300ms延迟，给用户时间移动到词卡上
  };

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  // 从API获取词卡详细信息
  useEffect(() => {
    const fetchWordInfo = async () => {
      setIsLoading(true);
      try {
        const info = await getWordCardInfo(token.text);
        setWordInfo(info);
      } catch (error) {
        console.error('获取词卡信息失败:', error);
        // 如果API失败，使用本地数据作为fallback
        setWordInfo({
          word: token.text,
          pinyin: getPinyin(),
          korean: getKorean(),
          chineseExample: token.example || '',
          koreanExample: token.glossKr || '',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchWordInfo();
  }, [token.text]);

  // 从token或item中获取拼音（作为fallback）
  const getPinyin = (): string => {
    // 优先从token中获取
    if (token.pinyin) {
      return token.pinyin;
    }
    
    // 从item的chunks中查找
    if (item && item.chunks) {
      const matchingChunk = item.chunks.find((chunk: any) => {
        const chunkZh = chunk.chunkZh || '';
        return chunkZh.includes(token.text);
      });
      return matchingChunk?.pinyin || '';
    }
    
    return '';
  };

  // 获取对应韩语（从chunks中查找，作为fallback）
  const getKorean = (): string => {
    // 优先从token中获取
    if (token.glossKr) {
      return token.glossKr;
    }
    
    if (!item || !item.chunks) return '';
    
    const matchingChunk = item.chunks.find((chunk: any) => {
      const chunkZh = chunk.chunkZh || '';
      return chunkZh.includes(token.text);
    });
    
    return matchingChunk?.pattern || '';
  };

  // 从localStorage加载收藏状态
  useEffect(() => {
    const starredWords = JSON.parse(localStorage.getItem('starredWords') || '[]');
    setIsStarred(starredWords.includes(token.text));
  }, [token.text]);

  // 切换收藏状态
  const toggleStar = () => {
    const starredWords = JSON.parse(localStorage.getItem('starredWords') || '[]');
    let newStarredWords: string[];
    
    if (isStarred) {
      newStarredWords = starredWords.filter((word: string) => word !== token.text);
    } else {
      newStarredWords = [...starredWords, token.text];
    }
    
    localStorage.setItem('starredWords', JSON.stringify(newStarredWords));
    setIsStarred(!isStarred);
  };

  // 使用API数据，如果没有则使用fallback
  const displayInfo = wordInfo || {
    word: token.text,
    pinyin: getPinyin(),
    korean: getKorean(),
    chineseExample: token.example || '',
    koreanExample: token.glossKr || '',
  };

  return (
    <div
      data-word-tooltip="true"
      className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs md:max-w-sm"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        maxWidth: 'calc(100vw - 2rem)',
      }}
      onClick={(e) => {
        e.stopPropagation();
        // 点击词卡内部任何地方都不关闭
        clearCloseTimeout();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        // 鼠标按下时也不关闭
        clearCloseTimeout();
      }}
      onMouseEnter={(e) => {
        e.stopPropagation();
        setIsHovering(true);
        clearCloseTimeout(); // 鼠标进入词卡时立即清除关闭定时器
      }}
      onMouseLeave={(e) => {
        setIsHovering(false);
        // 不自动关闭词卡
        // 只有当鼠标悬停到另一个词上时，才会通过父组件关闭当前词卡
        // 或者点击外部时关闭
        // scheduleClose(); // 已删除，不再自动关闭
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{token.text}</h3>
        <div className="flex items-center gap-2">
          {/* 收藏单词按钮 - 空心爱心，点击后变粉色 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleStar();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            className={`px-1 py-1 rounded transition-colors ${
              isStarred 
                ? "text-pink-500" 
                : "text-gray-300 hover:text-pink-400"
            }`}
            aria-label={isStarred ? "取消收藏单词" : "收藏单词"}
            title={isStarred ? "取消收藏单词" : "收藏单词"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill={isStarred ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          {/* 关闭按钮 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="关闭"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="text-sm text-gray-500 py-2">加载中...</div>
      ) : (
        <div className="space-y-2 text-sm">
          {/* 拼音 + 朗读按钮 */}
          {displayInfo.pinyin && (
            <div className="flex items-center gap-2">
              <span className="text-gray-700">{displayInfo.pinyin}</span>
              <TTSButton text={token.text} lang="zh-CN" className="w-5 h-5" />
            </div>
          )}
          
          {/* 韩文 */}
          {displayInfo.korean && (
            <div className="text-gray-700">
              <span className="text-gray-500 text-xs">韩文：</span>
              {displayInfo.korean}
            </div>
          )}
          
          {/* 中文例句 */}
          {displayInfo.chineseExample && (
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <div className="text-gray-500 text-xs">中文例句：</div>
                <TTSButton 
                  text={displayInfo.chineseExample.replace(/<[^>]*>/g, '')} 
                  lang="zh-CN" 
                  className="w-5 h-5" 
                />
              </div>
              <div 
                className="text-gray-800"
                dangerouslySetInnerHTML={{ __html: displayInfo.chineseExample }}
              />
            </div>
          )}
          
          {/* 韩文例句 */}
          {displayInfo.koreanExample && (
            <div>
              <div className="text-gray-500 text-xs mb-1">韩文例句：</div>
              <div className="text-gray-700">{displayInfo.koreanExample}</div>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

