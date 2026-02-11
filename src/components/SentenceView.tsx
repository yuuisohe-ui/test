import { useState, useRef, useEffect } from 'react';
import { Token } from '../types';
import { WordTooltip } from './WordTooltip';

interface SentenceViewProps {
  sentence: string;
  tokens: Token[];
  onWordSelect?: (word: string) => void;
  selectedWord?: string | null;
}

export const SentenceView = ({ sentence, tokens, onWordSelect, selectedWord }: SentenceViewProps) => {
  const [activeToken, setActiveToken] = useState<Token | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tokenRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});

  // tokens가 없을 때 자동으로 단어 분리 (중국어는 Intl.Segmenter 사용, 없으면 1-2자씩)
  const segmentWords = (text: string): string[] => {
    if (!text) return [];
    
    try {
      // Intl.Segmenter 사용 (중국어 단어 분리)
      if ('Segmenter' in Intl) {
        const segmenter = new Intl.Segmenter('zh', { granularity: 'word' });
        const segments = Array.from(segmenter.segment(text));
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

  // 将句子按照tokens分割并高亮显示 (tokens가 없으면 자동 분리)
  const renderSentence = () => {
    const elements: JSX.Element[] = [];
    
    // tokens가 있으면 기존 로직 사용
    if (tokens && tokens.length > 0 && tokens[0].text !== sentence) {
      let currentIndex = 0;
      let tokenIndex = 0;

      // 按照tokens顺序匹配句子
      while (currentIndex < sentence.length && tokenIndex < tokens.length) {
        const token = tokens[tokenIndex];
        const tokenStartIndex = sentence.indexOf(token.text, currentIndex);
        
        // 如果找不到token，跳过
        if (tokenStartIndex === -1) {
          tokenIndex++;
          continue;
        }

        // 添加token之前的文本
        if (tokenStartIndex > currentIndex) {
          const beforeText = sentence.slice(currentIndex, tokenStartIndex);
          const words = segmentWords(beforeText);
          words.forEach((word, idx) => {
            elements.push(
              <span
                key={`word-${currentIndex}-${idx}`}
                className={`
                  inline-block px-1 mx-0.5
                  cursor-pointer
                  hover:bg-blue-100 hover:text-blue-700
                  ${selectedWord === word ? 'bg-blue-200 text-blue-800' : ''}
                  rounded transition-colors duration-150
                `}
                onClick={(e) => handleWordClick(e, word)}
              >
                {word}
              </span>
            );
          });
        }

        // 添加token
        elements.push(
          <span
            key={`token-${tokenIndex}`}
            ref={(el) => {
              tokenRefs.current[token.text] = el;
            }}
            className={`
              inline-block px-1 mx-0.5
              cursor-pointer
              hover:bg-blue-100 hover:text-blue-700
              active:bg-blue-200
              ${selectedWord === token.text ? 'bg-blue-200 text-blue-800' : ''}
              rounded transition-colors duration-150
              relative
            `}
            onClick={(e) => handleTokenClick(e, token)}
            onMouseEnter={(e) => handleTokenHover(e, token)}
            onMouseLeave={() => {
              // 移动端不自动关闭，PC端hover离开时关闭
              if (window.innerWidth > 768) {
                setActiveToken(null);
              }
            }}
          >
            {token.text}
          </span>
        );

        currentIndex = tokenStartIndex + token.text.length;
        tokenIndex++;
      }

      // 添加剩余的文本
      if (currentIndex < sentence.length) {
        const remainingText = sentence.slice(currentIndex);
        const words = segmentWords(remainingText);
        words.forEach((word, idx) => {
          elements.push(
            <span
              key={`word-end-${idx}`}
              className={`
                inline-block px-1 mx-0.5
                cursor-pointer
                hover:bg-blue-100 hover:text-blue-700
                ${selectedWord === word ? 'bg-blue-200 text-blue-800' : ''}
                rounded transition-colors duration-150
              `}
              onClick={(e) => handleWordClick(e, word)}
            >
              {word}
            </span>
          );
        });
      }
    } else {
      // tokens가 없으면 전체 문장을 단어별로 분리
      const words = segmentWords(sentence);
      words.forEach((word, idx) => {
        elements.push(
          <span
            key={`word-${idx}`}
            className={`
              inline-block px-1 mx-0.5
              cursor-pointer
              hover:bg-blue-100 hover:text-blue-700
              ${selectedWord === word ? 'bg-blue-200 text-blue-800' : ''}
              rounded transition-colors duration-150
            `}
            onClick={(e) => handleWordClick(e, word)}
          >
            {word}
          </span>
        );
      });
    }

    return elements;
  };

  const handleWordClick = (e: React.MouseEvent<HTMLSpanElement>, word: string) => {
    e.stopPropagation();
    if (onWordSelect) {
      onWordSelect(word);
    }
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
      const rect = e.currentTarget.getBoundingClientRect();
      setActiveToken(token);
      calculateTooltipPosition(rect);
    }
  };

  const calculateTooltipPosition = (rect: DOMRect) => {
    const tooltipWidth = 320; // 预估tooltip宽度
    const tooltipHeight = 200; // 预估tooltip高度
    const padding = 10;

    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    let top = rect.bottom + padding;

    // 如果tooltip会超出右边界，调整位置
    if (left + tooltipWidth > window.innerWidth) {
      left = window.innerWidth - tooltipWidth - padding;
    }

    // 如果tooltip会超出左边界，调整位置
    if (left < padding) {
      left = padding;
    }

    // 如果tooltip会超出下边界，显示在上方
    if (top + tooltipHeight > window.innerHeight) {
      top = rect.top - tooltipHeight - padding;
    }

    setTooltipPosition({ top, left });
  };

  // 点击外部关闭tooltip
  useEffect(() => {
    const handleClickOutside = (_e: MouseEvent) => {
      if (activeToken && window.innerWidth <= 768) {
        setActiveToken(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeToken]);

  return (
    <div className="relative">
      <div className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed text-center py-6 px-4">
        {renderSentence()}
      </div>
      
      {activeToken && (
        <WordTooltip
          token={activeToken}
          position={tooltipPosition}
          onClose={() => setActiveToken(null)}
          onCreateDialogue={onWordSelect ? () => onWordSelect(activeToken.text) : undefined}
        />
      )}
    </div>
  );
};

