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
  disableWordCards?: boolean; // 是否禁用词卡功能（仅显示颜色标记）
}

export const SentenceView = ({ 
  sentence, 
  tokens, 
  onWordSelect, 
  selectedWord, 
  item,
  globalActiveTokenId,
  onTokenActivate,
  tokenIdPrefix = 'default',
  disableWordCards = false
}: SentenceViewProps) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tokenRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // 创建一个临时Token对象的辅助函数（必须在 useMemo 之前定义）
  const createTempToken = (word: string): Token => ({
    text: word,
    glossZh: '',
    glossKr: '',
    example: '',
  });
  
  // 计算当前应该显示的 token（基于全局状态）
  const activeToken = useMemo(() => {
    if (!globalActiveTokenId || !tokenIdPrefix) return null;
    // 检查 globalActiveTokenId 是否属于当前 SentenceView
    if (globalActiveTokenId.startsWith(tokenIdPrefix)) {
      // 从 ID 中提取 word（格式：prefix-word-index）
      // 先移除前缀，然后提取 word（去掉最后的 -index 部分）
      const idWithoutPrefix = globalActiveTokenId.replace(`${tokenIdPrefix}-`, '');
      // 提取 word（去掉最后的 -数字部分）
      const match = idWithoutPrefix.match(/^(.+?)(-\d+)?$/);
      const word = match ? match[1] : idWithoutPrefix;
      // 查找对应的 token
      const token = tokens.find(t => t.text === word);
      if (token) return token;
      // 如果找不到，创建一个临时 token
      return createTempToken(word);
    }
    return null;
  }, [globalActiveTokenId, tokenIdPrefix, tokens]);

  // 当 activeToken 变化时，重新计算词卡位置
  useEffect(() => {
    if (activeToken && globalActiveTokenId) {
      // 找到对应的 DOM 元素
      const word = activeToken.text;
      const element = tokenRefs.current[word];
      if (element) {
        const rect = element.getBoundingClientRect();
        calculateTooltipPosition(rect);
      }
    }
  }, [activeToken, globalActiveTokenId]);

  // 清除关闭定时器
  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // 延迟关闭词卡（使用全局状态）
  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      if (onTokenActivate) {
        onTokenActivate(''); // 清空激活的词卡
      }
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


  // 根据 token 的 level 或 hskLevel 得到难度背景色（初级绿、中级蓝、高级紫）
  const getDifficultyBg = (t?: Token): string => {
    let level: 'basic' | 'intermediate' | 'advanced' | undefined = t?.level;
    if (level == null && t?.hskLevel != null) {
      const n = Number(t.hskLevel);
      if (n >= 1 && n <= 2) level = 'basic';
      else if (n >= 3 && n <= 4) level = 'intermediate';
      else if (n >= 5 && n <= 6) level = 'advanced';
    }
    if (level === 'basic') return 'bg-green-100';
    if (level === 'intermediate') return 'bg-blue-100';
    if (level === 'advanced') return 'bg-purple-100';
    return '';
  };

  // 渲染单词的辅助函数（统一处理词卡功能）
  const renderWord = (word: string, key: string, isToken: boolean = false, token?: Token, index?: number) => {
    const wordToken = isToken && token ? token : createTempToken(word);
    const tokenId = key;
    const isActive = globalActiveTokenId === tokenId;
    
    let level: 'basic' | 'intermediate' | 'advanced' | undefined = token?.level;
    if (level == null && token?.hskLevel != null) {
      const n = Number(token.hskLevel);
      if (n >= 1 && n <= 2) level = 'basic';
      else if (n >= 3 && n <= 4) level = 'intermediate';
      else if (n >= 5 && n <= 6) level = 'advanced';
    }
    
    let bgColorClass = 'hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200';
    let selectedBgClass = 'bg-blue-200 text-blue-800';
    if (level === 'basic') {
      bgColorClass = 'hover:bg-green-100 hover:text-green-700 active:bg-green-200';
      selectedBgClass = 'bg-green-200 text-green-800';
    } else if (level === 'intermediate') {
      bgColorClass = 'hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200';
      selectedBgClass = 'bg-blue-200 text-blue-800';
    } else if (level === 'advanced') {
      bgColorClass = 'hover:bg-purple-100 hover:text-purple-700 active:bg-purple-200';
      selectedBgClass = 'bg-purple-200 text-purple-800';
    }
    
    // 难度背景色：有 level 或 hskLevel 时始终显示（初级绿、中级蓝、高级紫）
    const levelBgClass = getDifficultyBg(token);
    
    return (
      <span
        key={key}
        ref={(el) => {
          tokenRefs.current[word] = el;
        }}
        className={`
          inline-block
          ${disableWordCards ? 'cursor-default' : 'cursor-pointer'}
          ${disableWordCards ? '' : bgColorClass}
          ${selectedWord === word ? selectedBgClass : levelBgClass}
          rounded transition-colors duration-150
          relative
        `}
        data-word={disableWordCards ? undefined : "true"}
        onClick={disableWordCards ? undefined : (e) => {
          clearCloseTimeout();
          const rect = e.currentTarget.getBoundingClientRect();
          // 使用全局状态
          if (onTokenActivate) {
            onTokenActivate(tokenId);
          }
          calculateTooltipPosition(rect);
        }}
        onMouseEnter={disableWordCards ? undefined : (e) => {
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
        onMouseLeave={disableWordCards ? undefined : (e) => {
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
    
    // 词汇训练模式：使用智能匹配逻辑，匹配句子中所有出现的重点词（包括重复的）
    if (disableWordCards && tokens.length > 0) {
      // 按词汇长度排序，优先匹配长词
      const sortedTokens = [...tokens].sort((a, b) => (b.text?.length || 0) - (a.text?.length || 0));
      
      // 创建匹配数组
      interface Match {
        index: number;
        length: number;
        token: Token;
      }
      
      const matches: Match[] = [];
      const matchedIndices = new Set<number>();
      
      // 找到所有匹配的词汇（包括重复的）
      sortedTokens.forEach((token) => {
        const word = token.text;
        if (!word) return;
        
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedWord, 'g');
        let match;
        
        while ((match = regex.exec(sentence)) !== null) {
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
              token: token,
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
      let lastIndex = 0;
      matches.forEach((match, matchIdx) => {
        // 添加匹配前的文本
        if (match.index > lastIndex) {
          elements.push(
            <span key={`text-${lastIndex}-${matchIdx}`}>
              {sentence.substring(lastIndex, match.index)}
            </span>
          );
        }
        
        // 添加带颜色的重点词
        elements.push(renderWord(
          sentence.substring(match.index, match.index + match.length),
          `word-${match.index}-${matchIdx}`,
          true,
          match.token
        ));
        
        lastIndex = match.index + match.length;
      });
      
      // 添加剩余文本
      if (lastIndex < sentence.length) {
        elements.push(
          <span key={`text-${lastIndex}-end`}>
            {sentence.substring(lastIndex)}
          </span>
        );
      }
      
      return elements;
    }
    
    // 非词汇训练模式：使用原有逻辑
    // 将整个句子分词，但保留原始空格（作为 fallback）
    const allWords = segmentWordsWithSpaces(sentence);
    
    // ⭐ 在标准模式下，始终使用 segmentWordsWithSpaces 分词，确保每个词都有独立的词卡
    // tokens 只用于提供词卡信息（如果有的话）
    const hasTokens = Array.isArray(tokens) && tokens.length > 0;
    const tokenMap = new Map<string, Token>();
    if (hasTokens) {
      tokens.forEach(token => {
        tokenMap.set(token.text, token);
      });
    }

    console.log("🧩 [SentenceView] word source", {
      tokensLen: tokens?.length ?? 0,
      allWordsLen: allWords?.length ?? 0,
      using: "segmentWordsWithSpaces",
    });
    
    // 始终使用 allWords 分词结果，确保每个词都有独立的词卡
    // 同时按照标点、回车、空格进行分行
    // 首先检查句子是否包含换行符
    if (sentence.includes('\n') || sentence.includes('\r')) {
      // 如果包含换行符，按换行符分行
      const lines = sentence.split(/\r?\n/).filter(l => l.trim());
      lines.forEach((line, lineIdx) => {
        const lineWords = segmentWordsWithSpaces(line);
        
        lineWords.forEach((word, wordIdx) => {
          if (word.trim() === '') {
            elements.push(<span key={`space-${lineIdx}-${wordIdx}`}>{word}</span>);
          } else {
            const token = tokenMap.get(word);
            const uniqueKey = `${tokenIdPrefix}-${word}-${lineIdx}-${wordIdx}`;
            if (token) {
              elements.push(renderWord(word, uniqueKey, true, token, wordIdx));
            } else {
              elements.push(renderWord(word, uniqueKey, false, undefined, wordIdx));
            }
          }
        });
        
        // 在每行末尾添加换行（除了最后一行）
        if (lineIdx < lines.length - 1) {
          elements.push(<br key={`br-line-${lineIdx}`} />);
        }
      });
      
      return elements;
    }
    
    // 如果没有换行符，按照标点、空格进行分行
    let currentLineLength = 0;
    const maxLineLength = 50; // 每行最大长度（字符数）
    const preferredLineLength = 30; // 理想行长度（字符数）
    const punctuationRegex = /[，。！？、；：,.!?;:]/;
    const spaceRegex = /\s/;
    
    allWords.forEach((word, idx) => {
      // 如果是空格，直接渲染为空格（不创建词卡）
      if (word.trim() === '') {
        elements.push(<span key={`space-${idx}`}>{word}</span>);
        currentLineLength += word.length;
      } else {
        // 计算当前词的长度（中文字符按1计算）
        const wordLength = word.length;
        
        // 检查是否需要换行
        // 1. 如果遇到标点符号，且当前行长度超过阈值（preferredLineLength），在标点后换行
        const shouldBreakAfter = punctuationRegex.test(word) && currentLineLength >= preferredLineLength;
        // 2. 如果当前行长度超过最大长度，在空格处换行
        const shouldBreakBefore = currentLineLength >= maxLineLength && spaceRegex.test(word);
        // 3. 如果当前行长度超过最大长度，强制换行（即使没有标点或空格）
        const shouldForceBreak = currentLineLength + wordLength > maxLineLength && currentLineLength >= preferredLineLength;
        
        // 检查是否有对应的 token（用于显示词卡信息）
        const token = tokenMap.get(word);
        // 使用索引确保每个字符都有唯一的 tokenId
        const uniqueKey = `${tokenIdPrefix}-${word}-${idx}`;
        
        // 如果需要换行，在词前或词后添加换行
        if (shouldBreakAfter) {
          // 在标点后换行
          if (token) {
            elements.push(renderWord(word, uniqueKey, true, token, idx));
          } else {
            elements.push(renderWord(word, uniqueKey, false, undefined, idx));
          }
          elements.push(<br key={`br-after-${idx}`} />);
          currentLineLength = 0;
        } else if (shouldBreakBefore) {
          // 在空格前换行
          elements.push(<br key={`br-before-${idx}`} />);
          currentLineLength = 0;
          if (token) {
            elements.push(renderWord(word, uniqueKey, true, token, idx));
          } else {
            elements.push(renderWord(word, uniqueKey, false, undefined, idx));
          }
          currentLineLength += wordLength;
        } else if (shouldForceBreak) {
          // 强制换行（没有标点或空格，但超过最大长度）
          elements.push(<br key={`br-force-${idx}`} />);
          currentLineLength = 0;
          if (token) {
            elements.push(renderWord(word, uniqueKey, true, token, idx));
          } else {
            elements.push(renderWord(word, uniqueKey, false, undefined, idx));
          }
          currentLineLength += wordLength;
        } else {
          // 不需要换行，正常添加
          if (token) {
            elements.push(renderWord(word, uniqueKey, true, token, idx));
          } else {
            elements.push(renderWord(word, uniqueKey, false, undefined, idx));
          }
          currentLineLength += wordLength;
        }
      }
    });

    return elements;
  };

  // 分词但保留原始空格，使用 Intl.Segmenter 按词分割
  const segmentWordsWithSpaces = (text: string): string[] => {
    if (!text) return [];
    
    const result: string[] = [];
    
    try {
      // 优先使用 Intl.Segmenter 进行中文分词（按词分割）
      if ('Segmenter' in Intl) {
        const segmenter = new (Intl as any).Segmenter('zh', { granularity: 'word' });
        const segments = Array.from(segmenter.segment(text)) as Array<{ 
          segment: string; 
          index: number; 
          isWordLike: boolean 
        }>;
        
        let lastIndex = 0;
        segments.forEach((seg) => {
          // 如果当前段之前有空格或其他字符，先添加它们
          if (seg.index > lastIndex) {
            const gap = text.substring(lastIndex, seg.index);
            // 将空格单独添加
            for (let i = 0; i < gap.length; i++) {
              if (gap[i].trim() === '') {
                result.push(gap[i]);
              } else {
                // 非空格字符，按字符添加（标点符号等）
                result.push(gap[i]);
              }
            }
          }
          
          // 添加分词结果（词）
          if (seg.segment.trim()) {
            result.push(seg.segment);
          }
          
          lastIndex = seg.index + seg.segment.length;
        });
        
        // 添加剩余部分
        if (lastIndex < text.length) {
          const remaining = text.substring(lastIndex);
          for (let i = 0; i < remaining.length; i++) {
            result.push(remaining[i]);
          }
        }
        
        return result.filter(item => item.length > 0);
      }
    } catch (e) {
      console.warn('Intl.Segmenter not supported, using fallback');
    }
    
    // Fallback: 使用简单的分词逻辑（按标点和空格分割）
    const fallbackResult: string[] = [];
    let currentWord = '';
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      if (char.trim() === '') {
        // 遇到空格，先保存当前词（如果有）
        if (currentWord) {
          fallbackResult.push(currentWord);
          currentWord = '';
        }
        // 保存空格
        fallbackResult.push(char);
      } else if (/[，。！？、；：]/.test(char)) {
        // 遇到标点，先保存当前词（如果有）
        if (currentWord) {
          fallbackResult.push(currentWord);
          currentWord = '';
        }
        // 标点单独作为一个元素
        fallbackResult.push(char);
      } else {
        // 中文字符，添加到当前词
        currentWord += char;
        
        // 检查下一个字符，如果是空格或标点，保存当前词
        if (i + 1 < text.length) {
          const nextChar = text[i + 1];
          if (nextChar.trim() === '' || /[，。！？、；：]/.test(nextChar)) {
            if (currentWord) {
              fallbackResult.push(currentWord);
              currentWord = '';
            }
          }
        }
      }
    }
    
    // 保存最后一个词
    if (currentWord) {
      fallbackResult.push(currentWord);
    }
    
    return fallbackResult;
  };

  const handleWordClick = (e: React.MouseEvent<HTMLSpanElement>, word: string) => {
    e.stopPropagation();
  };

  const handleTokenClick = (e: React.MouseEvent<HTMLSpanElement>, token: Token) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const tokenId = `${tokenIdPrefix}-${token.text}`;
    
    // 如果是移动端，点击切换显示/隐藏
    if (window.innerWidth <= 768) {
      if (globalActiveTokenId === tokenId) {
        if (onTokenActivate) {
          onTokenActivate(''); // 清空激活的词卡
        }
        return;
      }
    }
    
    // 使用全局状态管理
    if (onTokenActivate) {
      onTokenActivate(tokenId);
    }
    calculateTooltipPosition(rect);
  };

  const handleTokenHover = (e: React.MouseEvent<HTMLSpanElement>, token: Token) => {
    // PC端hover显示
    if (window.innerWidth > 768) {
      clearCloseTimeout();
      const rect = e.currentTarget.getBoundingClientRect();
      const tokenId = `${tokenIdPrefix}-${token.text}`;
      // 使用全局状态管理
      if (onTokenActivate) {
        onTokenActivate(tokenId);
      }
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
      <div className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed text-left py-6 px-4 break-words whitespace-normal">
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

