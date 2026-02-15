import { useState, useRef, useEffect, useMemo } from 'react';
import { Token } from '../types';
import { WordTooltip } from './WordTooltip';

interface SentenceViewProps {
  sentence: string;
  tokens: Token[];
  onWordSelect?: (word: string) => void;
  selectedWord?: string | null;
  item?: any; // 原始行数据，用于获取更多信息
  globalActiveTokenId?: string | null; // 全局激活的词卡ID
  onTokenActivate?: (tokenId: string) => void; // 激活词卡的回调
  tokenIdPrefix?: string; // 用于生成唯一ID的前缀
}

export const SentenceView = ({ 
  sentence, 
  tokens, 
  onWordSelect, 
  selectedWord, 
  item,
  globalActiveTokenId,
  onTokenActivate,
  tokenIdPrefix = 'default'
}: SentenceViewProps) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tokenRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // 计算当前应该显示的 token（基于全局状态）
  const activeToken = useMemo(() => {
    if (!globalActiveTokenId || !tokenIdPrefix) return null;
    // 检查 globalActiveTokenId 是否属于当前 SentenceView
    if (globalActiveTokenId.startsWith(tokenIdPrefix)) {
      // 从 ID 中提取 word
      const word = globalActiveTokenId.replace(`${tokenIdPrefix}-`, '');
      // 查找对应的 token
      const token = tokens.find(t => t.text === word);
      if (token) return token;
      // 如果找不到，创建一个临时 token
      return createTempToken(word);
    }
    return null;
  }, [globalActiveTokenId, tokenIdPrefix, tokens]);

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
      setActiveToken(null);
    }, 800); // 800ms延迟，给用户足够时间移动到词卡上并点击按钮
  };

  // tokens가 없을 때 자동으로 단어 분리 (중국어는 Intl.Segmenter 사용, 없으면 1-2자씩)
  const segmentWords = (text: string): string[] => {
    if (!text) return [];
    
    try {
      // Intl.Segmenter 사용 (중국어 단어 분리)
      if ('Segmenter' in Intl) {
        const segmenter = new (Intl as any).Segmenter('zh', { granularity: 'word' });
        const segments = Array.from(segmenter.segment(text)) as Array<{ segment: string }>;
        return segments
          .map(seg => seg.segment)
          .filter(word => word.trim().length > 0);
      }
    } catch (e) {
      console.warn('Intl.Segmenter not supported, using fallback');
    }
    
    // Fallback: 1-2자씩 분리 (중국어 기본 단위)
    const words: string[] = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char.trim()) {
        // 공백이 아닌 문자는 단어로 간주
        if (i + 1 < text.length && !text[i + 1].trim()) {
          // 다음이 공백이면 1자만
          words.push(char);
        } else if (i + 1 < text.length && text[i + 1].trim()) {
          // 다음도 문자면 2자로 묶기
          words.push(char + text[i + 1]);
          i++; // 다음 문자 건너뛰기
        } else {
          words.push(char);
        }
      } else {
        words.push(char);
      }
    }
    return words.filter(w => w.trim().length > 0);
  };

  // 创建一个临时Token对象的辅助函数
  const createTempToken = (word: string): Token => ({
    text: word,
    glossZh: '',
    glossKr: '',
    example: '',
  });

  // 渲染单词的辅助函数（统一处理词卡功能）
  const renderWord = (word: string, key: string, isToken: boolean = false, token?: Token) => {
    const wordToken = isToken && token ? token : createTempToken(word);
    const tokenId = `${tokenIdPrefix}-${word}`;
    const isActive = globalActiveTokenId === tokenId;
    
    return (
      <span
        key={key}
        ref={(el) => {
          tokenRefs.current[word] = el;
        }}
        className={`
          inline-block
          cursor-pointer
          hover:bg-blue-100 hover:text-blue-700
          active:bg-blue-200
          ${selectedWord === word ? 'bg-blue-200 text-blue-800' : ''}
          rounded transition-colors duration-150
          relative
        `}
        data-word="true"
        onClick={(e) => {
          clearCloseTimeout();
          const rect = e.currentTarget.getBoundingClientRect();
          // 使用全局状态
          if (onTokenActivate) {
            onTokenActivate(tokenId);
          }
          calculateTooltipPosition(rect);
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth > 768) {
            clearCloseTimeout();
            const rect = e.currentTarget.getBoundingClientRect();
            // 使用全局状态
            if (onTokenActivate) {
              onTokenActivate(tokenId);
            }
            calculateTooltipPosition(rect);
          }
        }}
        onMouseLeave={(e) => {
          // 不自动关闭词卡，由全局状态管理
        }}
      >
        {word}
      </span>
    );
  };

  // 将句子按照tokens分割并高亮显示 (tokens가 없으면 자동 분리)
  const renderSentence = () => {
    const elements: JSX.Element[] = [];
    
    // 将整个句子分词，但保留原始空格（作为 fallback）
    const allWords = segmentWordsWithSpaces(sentence);
    
    // ⭐ 优先使用 tokens 作为词卡渲染源
    const hasTokens = Array.isArray(tokens) && tokens.length > 0;
    const renderWords = hasTokens
      ? tokens.map(t => t.text)
      : allWords;

    console.log("🧩 [SentenceView] word source", {
      tokensLen: tokens?.length ?? 0,
      allWordsLen: allWords?.length ?? 0,
      renderWordsLen: renderWords?.length ?? 0,
      using: hasTokens ? "tokens" : "segments",
    });
    
    // 如果使用 tokens，直接渲染 tokens
    if (hasTokens) {
      // 创建一个Map来快速查找token
      const tokenMap = new Map<string, Token>();
      tokens.forEach(token => {
        tokenMap.set(token.text, token);
      });
      
      // 直接使用 tokens 渲染，不保留空格（tokens 中已包含所有字符）
      renderWords.forEach((word, idx) => {
        const token = tokenMap.get(word);
        if (token) {
          elements.push(renderWord(word, `token-${idx}`, true, token));
        } else {
          elements.push(renderWord(word, `word-${idx}`));
        }
      });
    } else {
      // tokens가 없으면使用 segmentWordsWithSpaces 分词结果，保留空格
      renderWords.forEach((word, idx) => {
        // 如果是空格，直接渲染为空格
        if (word.trim() === '') {
          elements.push(<span key={`space-${idx}`}>{word}</span>);
        } else {
          elements.push(renderWord(word, `word-${idx}`));
        }
      });
    }

    return elements;
  };

  // 分词但保留原始空格
  const segmentWordsWithSpaces = (text: string): string[] => {
    if (!text) return [];
    
    const result: string[] = [];
    let currentWord = '';
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      if (char.trim() === '') {
        // 遇到空格，先保存当前词（如果有）
        if (currentWord) {
          result.push(currentWord);
          currentWord = '';
        }
        // 保存空格（保留所有空格字符）
        result.push(char);
      } else {
        // 非空格字符，添加到当前词
        currentWord += char;
        
        // 检查下一个字符
        if (i + 1 < text.length) {
          const nextChar = text[i + 1];
          // 如果下一个字符是空格或标点，保存当前词
          if (nextChar.trim() === '' || /[，。！？、；：]/.test(nextChar)) {
            if (currentWord) {
              result.push(currentWord);
              currentWord = '';
            }
          }
        }
      }
    }
    
    // 保存最后一个词
    if (currentWord) {
      result.push(currentWord);
    }
    
    return result;
  };

  const handleWordClick = (e: React.MouseEvent<HTMLSpanElement>, word: string) => {
    e.stopPropagation();
  };

  const handleTokenClick = (e: React.MouseEvent<HTMLSpanElement>, token: Token) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    
    // 如果是移动端，点击切换显示/隐藏
    if (window.innerWidth <= 768) {
      if (activeToken?.text === token.text) {
        setActiveToken(null);
        return;
      }
    }
    
    setActiveToken(token);
    calculateTooltipPosition(rect);
  };

  const handleTokenHover = (e: React.MouseEvent<HTMLSpanElement>, token: Token) => {
    // PC端hover显示
    if (window.innerWidth > 768) {
      clearCloseTimeout();
      const rect = e.currentTarget.getBoundingClientRect();
      setActiveToken(token);
      calculateTooltipPosition(rect);
    }
  };

  const calculateTooltipPosition = (rect: DOMRect) => {
    const tooltipWidth = 320; // 预估tooltip宽度
    const tooltipHeight = 250; // 预估tooltip高度（增加以容纳更多内容）
    const padding = 10;
    const gap = -4; // 让词卡稍微重叠在词上，消除间隙

    // 固定显示在词的下方
    let top = rect.bottom + gap;
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;

    // 如果tooltip会超出右边界，调整位置（但保持在下方）
    if (left + tooltipWidth > window.innerWidth - padding) {
      left = window.innerWidth - tooltipWidth - padding;
    }

    // 如果tooltip会超出左边界，调整位置（但保持在下方）
    if (left < padding) {
      left = padding;
    }

    // 如果tooltip会超出下边界，仍然显示在下方，但调整垂直位置
    if (top + tooltipHeight > window.innerHeight - padding) {
      // 如果下方空间不够，尝试显示在上方（但这是最后的选择）
      const spaceBelow = window.innerHeight - rect.bottom - padding;
      const spaceAbove = rect.top - padding;
      
      if (spaceAbove > spaceBelow && spaceAbove > tooltipHeight) {
        // 上方空间更大，显示在上方
        top = rect.top - tooltipHeight - gap;
      } else {
        // 仍然显示在下方，但调整位置避免超出
        top = Math.max(padding, window.innerHeight - tooltipHeight - padding);
      }
    }

    setTooltipPosition({ top, left });
  };

  // 点击外部关闭tooltip（PC端和移动端都生效）
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (activeToken && globalActiveTokenId) {
        const target = e.target as HTMLElement;
        // 如果点击的不是词或词卡内的元素，则关闭词卡
        if (target && !target.closest('[data-word-tooltip]') && !target.closest('[data-word]')) {
          if (onTokenActivate) {
            onTokenActivate(''); // 清空全局状态
          }
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeToken, globalActiveTokenId, onTokenActivate]);

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  return (
    <div className="relative">
      <div className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed text-center py-6 px-4">
        {renderSentence()}
      </div>
      
      {activeToken && (
        <WordTooltip
          token={activeToken}
          position={tooltipPosition}
          onClose={() => {
            if (onTokenActivate) {
              onTokenActivate(''); // 清空全局状态
            }
          }}
          item={item}
        />
      )}
    </div>
  );
};

