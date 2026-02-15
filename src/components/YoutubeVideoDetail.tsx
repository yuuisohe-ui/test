import { useState, useEffect, useRef, useMemo } from "react";
import { parseSRT, SubtitleItem } from "../utils/srtParser";
import { getVocabForSentence, getAllVocab, WordAnalysis } from "../data/tianmimiVocab";
import { getKoreanTranslation } from "../data/tianmimiKorean";
import { pinyin } from "pinyin-pro";
import { SentenceView } from "./SentenceView";
import { Token } from "../types";

// YouTube IFrame Player API 类型声明
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YoutubeVideoDetailProps {
  videoId: string;
  title: string;
  titleKr: string;
  srtContent: string;
  onBack: () => void;
}

export default function YoutubeVideoDetail({
  videoId,
  title,
  titleKr,
  srtContent,
  onBack,
}: YoutubeVideoDetailProps) {
  const [subtitles, setSubtitles] = useState<SubtitleItem[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState<number | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [vocabMode, setVocabMode] = useState<'current' | 'all'>('current');
  const [videoSize, setVideoSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [globalActiveTokenId, setGlobalActiveTokenId] = useState<string | null>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const vocabScrollRef = useRef<HTMLDivElement>(null);

  // 解析SRT内容
  useEffect(() => {
    if (srtContent) {
      // 提前1秒：传入 -1 作为时间偏移
      const parsed = parseSRT(srtContent, -1);
      setSubtitles(parsed);
      console.log('解析SRT成功，共', parsed.length, '条字幕，时间轴已提前1秒');
    }
  }, [srtContent]);

  // 加载YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setPlayerReady(true);
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setPlayerReady(true);
    };
  }, []);

  // 初始化播放器
  useEffect(() => {
    if (playerReady && window.YT && window.YT.Player && !playerRef.current) {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            console.log('YouTube播放器就绪');
            startTimeTracking();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              startTimeTracking();
            } else {
              stopTimeTracking();
            }
          },
        },
      });
    }

    return () => {
      stopTimeTracking();
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.warn('销毁播放器失败:', e);
        }
        playerRef.current = null;
      }
    };
  }, [playerReady, videoId]);

  // 开始追踪播放时间
  const startTimeTracking = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      if (playerRef.current && subtitles.length > 0) {
        try {
          const time = playerRef.current.getCurrentTime();
          setCurrentTime(time);
          
          const currentIndex = subtitles.findIndex(
            (sub) => time >= sub.startTime && time <= sub.endTime
          );
          
          if (currentIndex !== -1 && currentIndex !== currentSubtitleIndex) {
            setCurrentSubtitleIndex(currentIndex);
            scrollToSubtitle(currentIndex);
            // 如果是在"当前句子"模式，滚动解析区
            if (vocabMode === 'current' && vocabScrollRef.current) {
              vocabScrollRef.current.scrollTop = 0;
            }
          } else if (currentIndex === -1) {
            setCurrentSubtitleIndex(null);
          }
        } catch (error) {
          console.warn('获取播放时间失败:', error);
        }
      }
    }, 100);
  };

  // 停止追踪播放时间
  const stopTimeTracking = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 滚动到指定字幕（只在视野外时才滚动，不强制居中）
  const scrollToSubtitle = (index: number) => {
    const element = document.getElementById(`subtitle-${index}`);
    if (element) {
      const container = element.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        
        // 只在元素不在视野内时才滚动
        const isVisible = 
          elementRect.top >= containerRect.top &&
          elementRect.bottom <= containerRect.bottom;
        
        if (!isVisible) {
          // 使用 nearest，让它滚动到最近的位置，不强制居中
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }
  };

  // 点击歌词跳转到视频时间
  const handleSubtitleClick = (subtitle: SubtitleItem) => {
    if (playerRef.current) {
      playerRef.current.seekTo(subtitle.startTime, true);
      playerRef.current.playVideo();
    }
  };

  // 格式化时间显示
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 获取句子的拼音
  const getPinyinForSentence = (text: string): string => {
    try {
      // pinyin-pro: toneType: 'tone' 表示带声调符号（ā á ǎ à）
      return pinyin(text, {
        toneType: 'tone',  // 带声调符号
      });
    } catch (error) {
      console.warn('拼音转换失败:', error);
      return '';
    }
  };

  // 播放句子的发音
  const handlePlaySentence = (text: string) => {
    if ('speechSynthesis' in window) {
      // 停止当前正在播放的语音
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8; // 稍微慢一点，便于学习
      
      utterance.onerror = (error) => {
        console.warn('语音播放失败:', error);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert('您的浏览器不支持语音合成功能');
    }
  };

  // 将词汇分析数据转换为 Token 格式
  const convertVocabToTokens = (vocab: WordAnalysis[]): Token[] => {
    return vocab.map(item => ({
      text: item.word,
      glossZh: item.meaning,
      glossKr: item.meaningKr || '',
      example: item.example || '',
      pinyin: item.pinyin,
    }));
  };

  // 获取当前显示的词汇
  const displayedVocab = useMemo(() => {
    if (vocabMode === 'current' && currentSubtitleIndex !== null) {
      // 模式1：只显示当前句子的词汇
      const sentenceIndex = currentSubtitleIndex + 1; // SRT索引从1开始
      return getVocabForSentence(sentenceIndex);
    } else {
      // 模式2：显示所有词汇（去重）
      return getAllVocab();
    }
  }, [vocabMode, currentSubtitleIndex]);

  // 渲染歌词（带颜色标记）
  const renderLyricWithColors = (text: string, sentenceIndex: number) => {
    const vocab = getVocabForSentence(sentenceIndex);
    if (vocab.length === 0) {
      return <span>{text}</span>;
    }

    // 按词汇长度排序，优先匹配长词
    const sortedVocab = [...vocab].sort((a, b) => b.word.length - a.word.length);
    
    // 创建匹配数组
    interface Match {
      index: number;
      length: number;
      word: WordAnalysis;
    }
    
    const matches: Match[] = [];
    const matchedIndices = new Set<number>();
    
    // 找到所有匹配的词汇
    sortedVocab.forEach((wordItem) => {
      const word = wordItem.word;
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedWord, 'g');
      let match;
      
      while ((match = regex.exec(text)) !== null) {
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
            word: wordItem,
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
    const result: JSX.Element[] = [];
    let lastIndex = 0;
    
    matches.forEach((match, matchIdx) => {
      // 添加匹配前的文本
      if (match.index > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}-${matchIdx}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      
        // 添加带背景颜色的词汇
        const bgClass = getLyricWordBgClass(match.word.level);
      
      result.push(
        <span key={`word-${match.index}-${matchIdx}`} className={`${bgClass} px-1 rounded font-semibold`}>
          {text.substring(match.index, match.index + match.length)}
        </span>
      );
      
      lastIndex = match.index + match.length;
    });
    
    // 添加剩余文本
    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}-end`}>
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return result.length > 0 ? <>{result}</> : <span>{text}</span>;
  };

  // 获取词汇颜色样式（淡色系）
  const getVocabColorClass = (level: 'basic' | 'intermediate' | 'advanced') => {
    switch (level) {
      case 'basic':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'intermediate':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'advanced':
        return 'bg-purple-50 border-purple-200 text-purple-700';
    }
  };

  // 获取歌词中词汇的背景颜色
  const getLyricWordBgClass = (level: 'basic' | 'intermediate' | 'advanced') => {
    switch (level) {
      case 'basic':
        return 'bg-green-100';
      case 'intermediate':
        return 'bg-blue-100';
      case 'advanced':
        return 'bg-purple-100';
    }
  };

  const getLevelLabel = (level: 'basic' | 'intermediate' | 'advanced') => {
    switch (level) {
      case 'basic':
        return '基础词';
      case 'intermediate':
        return '中级词';
      case 'advanced':
        return '高级词';
    }
  };

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 返回按钮和标题 */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回歌曲库
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {title} - {titleKr}
          </h1>
        </div>

        {/* 主要内容区域：视频（左上）+ 歌词（右上）+ 解析（下方） */}
        <div className="space-y-4">
          {/* 视频和歌词并排 */}
          <div className="grid grid-cols-12 gap-4">
            {/* 左侧：视频 */}
            <div className={`${
              videoSize === 'small' ? 'col-span-4' : 
              videoSize === 'medium' ? 'col-span-6' : 
              'col-span-8'
            } bg-white rounded-xl shadow-sm border p-4 transition-all`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-700">音乐视频</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (videoSize === 'small') setVideoSize('medium');
                      else if (videoSize === 'medium') setVideoSize('large');
                      else setVideoSize('small');
                    }}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                    title="切换视频大小"
                  >
                    {videoSize === 'small' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        放大
                      </>
                    ) : videoSize === 'medium' ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        放大
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        缩小
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black relative">
                {!playerReady ? (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p>加载播放器...</p>
                    </div>
                  </div>
                ) : (
                  <div id="youtube-player" className="w-full h-full"></div>
                )}
              </div>
            </div>

            {/* 右侧：歌词显示区 */}
            <div className={`${
              videoSize === 'small' ? 'col-span-8' : 
              videoSize === 'medium' ? 'col-span-6' : 
              'col-span-4'
            } bg-white rounded-xl shadow-sm border p-4 transition-all`}>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">歌词</h2>
              <div className="h-[400px] overflow-y-auto space-y-2">
                {subtitles.map((sub, idx) => {
                  const sentenceIndex = idx + 1;
                  const vocab = getVocabForSentence(sentenceIndex);
                  const tokens: Token[] = convertVocabToTokens(vocab);
                  
                  return (
                    <div
                      key={idx}
                      id={`subtitle-${idx}`}
                      onClick={(e) => {
                        // 只有点击空白部分（不是词卡）才触发播放
                        const target = e.target as HTMLElement;
                        if (!target.closest('[data-word]') && !target.closest('[data-word-tooltip]')) {
                          handleSubtitleClick(sub);
                        }
                      }}
                      className={`p-3 rounded-lg cursor-pointer transition-all border-2 relative ${
                        currentSubtitleIndex === idx
                          ? 'bg-blue-50 border-blue-500 shadow-md'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {/* 时间戳 - 右上角 */}
                      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                        {currentSubtitleIndex === idx && (
                          <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded">
                            正在播放
                          </span>
                        )}
                        <div className="text-xs text-gray-500">
                          {formatTime(sub.startTime)} - {formatTime(sub.endTime)}
                        </div>
                      </div>
                      
                      {/* 中文歌词 - 使用 SentenceView 组件 */}
                      <div className="mb-1 pr-24 relative">
                        <div className="text-base leading-relaxed [&_.text-2xl]:text-base [&_.text-3xl]:text-base [&_.py-6]:py-0 [&_.px-4]:px-0 [&_.text-center]:text-left">
                          <SentenceView
                            sentence={sub.text}
                            tokens={tokens}
                            globalActiveTokenId={globalActiveTokenId}
                            onTokenActivate={(tokenId) => setGlobalActiveTokenId(tokenId)}
                            tokenIdPrefix={`youtube-subtitle-${idx}`}
                          />
                        </div>
                        {/* 播放按钮 - 放在歌词右侧 */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlaySentence(sub.text);
                          }}
                          className="absolute top-0 right-0 p-1.5 rounded-full hover:bg-gray-200 transition-colors z-10"
                          title="播放发音"
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* 拼音显示 */}
                      <div className="text-xs text-gray-500 mb-2 leading-relaxed pr-24">
                        {getPinyinForSentence(sub.text)}
                      </div>
                      
                      {/* 韩语翻译 */}
                      <div className="text-sm text-gray-600 leading-relaxed pr-24">
                        {getKoreanTranslation(sentenceIndex) || ''}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 下方：歌词解析区（全宽） */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">歌词解析</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setVocabMode('current')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    vocabMode === 'current'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  当前句子
                </button>
                <button
                  onClick={() => setVocabMode('all')}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    vocabMode === 'all'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  所有词汇
                </button>
              </div>
            </div>

            {/* 颜色说明 */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-green-300"></span>
                  基础词：淡绿色
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-blue-300"></span>
                  中级词：淡蓝色
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-purple-300"></span>
                  高级词：淡紫色
                </span>
              </div>
            </div>

            {/* 词汇列表 */}
            <div 
              ref={vocabScrollRef}
              className="h-[400px] overflow-y-auto space-y-3"
            >
              {displayedVocab.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  {vocabMode === 'current' 
                    ? '等待播放歌词...' 
                    : '暂无词汇数据'}
                </div>
              ) : (
                displayedVocab.map((word, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-2 ${getVocabColorClass(word.level)} transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-lg">{word.word}</div>
                      <span className="text-xs px-2 py-1 bg-white bg-opacity-50 rounded">
                        {getLevelLabel(word.level)}
                      </span>
                    </div>
                    <div className="text-sm mb-1 text-gray-700">{word.pinyin}</div>
                    <div className="text-sm mb-1">{word.meaning}</div>
                    {word.meaningKr && (
                      <div className="text-xs text-gray-600 mb-1">{word.meaningKr}</div>
                    )}
                    {word.example && (
                      <div className="text-xs text-gray-500 mt-2 italic border-l-2 pl-2 border-gray-300">
                        {word.example}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
