import { useState, useEffect, useRef } from "react";
import { parseSRT, SubtitleItem } from "../utils/srtParser";
import { yuaiSRT } from "../data/yuaiSRT";
import { getKoreanTranslation } from "../data/yuaiKorean";
import { yuaiVocabAnalysis } from "../data/yuaiVocab";
import { yuaiSentenceStructures } from "../data/yuaiSentenceStructures";
import { SentenceView } from "./SentenceView";
import { AnalysisTable } from "./AnalysisTable";
import { TTSButton } from "./TTSButton";
import { pinyin } from "pinyin-pro";
import { SentenceData } from "../types";
import { getTeachingTipForSentence, TeachingTipContent } from "../data/yuaiTeachingTips";

// YouTube IFrame Player API 类型声明
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface SongExampleProps {
  onClose?: () => void;
}

// 模拟 opalLineToSentenceData 函数（简化版）
function createSentenceData(zhSentence: string, subtitle: SubtitleItem): SentenceData {
  // 对句子进行分词（简单按字符分割）
  const tokens = zhSentence.split('').filter(c => /[\u4e00-\u9fff]/.test(c)).map((char, idx) => ({
    text: char,
    glossZh: "",
    glossKr: "",
    example: "",
    pinyin: pinyin(char, { toneType: 'none' }) || "",
  }));

  // 创建 chunks（整句分析）
  const fullPinyin = pinyin(zhSentence, { toneType: 'none', separator: ' ' }) || "";
  const tones = zhSentence.split('').map(char => {
    if (!/[\u4e00-\u9fff]/.test(char)) return '';
    const pinyinWithTone = pinyin(char, { toneType: 'num' }) || '';
    const tone = pinyinWithTone.match(/\d/)?.[0] || '';
    return tone;
  }).filter(t => t).join('-');

  // 创建 chunkSegments（语义分段）
  const chunkSegments = [
    {
      chunkZh: zhSentence,
      pinyin: fullPinyin,
      tones: tones,
    }
  ];

  return {
    sentence: zhSentence,
    tokens: tokens,
    chunks: [{
      text: zhSentence,
      pinyin: fullPinyin,
      tones: tones,
      hskLevel: 4,
      chunkSegments: chunkSegments,
    }],
  };
}

export default function SongExample({ onClose }: SongExampleProps) {
  const [subtitles, setSubtitles] = useState<SubtitleItem[]>([]);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState<number | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [studyMode, setStudyMode] = useState<"分句学习" | "整段学习">("分句学习");
  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number | null>(null);
  const [showTeachingTip, setShowTeachingTip] = useState<Record<number, boolean>>({});
  const [teachingTipContent, setTeachingTipContent] = useState<Record<number, TeachingTipContent>>({});
  const playerRef = useRef<any>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);

  const videoId = "fa0naBdR_q0"; // 雨爱的 YouTube videoId

  // 解析 SRT 字幕
  useEffect(() => {
    const parsed = parseSRT(yuaiSRT);
    setSubtitles(parsed);
  }, []);

  // 加载 YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const initializePlayer = () => {
    if (!playerDivRef.current) return;

    playerRef.current = new window.YT.Player(playerDivRef.current, {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: () => {
          setPlayerReady(true);
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
  };

  const startTimeTracking = () => {
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const currentTime = playerRef.current.getCurrentTime();
        updateCurrentSubtitle(currentTime);
      }
    }, 100);

    (playerRef.current as any).__timeTrackingInterval = interval;
  };

  const stopTimeTracking = () => {
    if ((playerRef.current as any).__timeTrackingInterval) {
      clearInterval((playerRef.current as any).__timeTrackingInterval);
      (playerRef.current as any).__timeTrackingInterval = null;
    }
  };

  const updateCurrentSubtitle = (currentTime: number) => {
    const index = subtitles.findIndex(
      (sub) => currentTime >= sub.startTime && currentTime <= sub.endTime
    );
    if (index !== -1 && index !== currentSubtitleIndex) {
      setCurrentSubtitleIndex(index);
    }
  };

  // 跳转到指定时间戳
  const seekToTime = (seconds: number) => {
    if (playerRef.current && playerRef.current.seekTo) {
      playerRef.current.seekTo(seconds, true);
      playerRef.current.playVideo();
    }
  };

  // 播放指定句子
  const playSentence = (subtitleIndex: number) => {
    const subtitle = subtitles[subtitleIndex];
    if (subtitle) {
      seekToTime(subtitle.startTime);
      setSelectedSentenceIndex(subtitleIndex);
    }
  };

  // 提取句子文本（去除序号）
  const getSentenceText = (text: string): string => {
    return text.replace(/^\d+\s+/, "").trim();
  };

  // 格式化行号
  const formatLineNo = (lineNo: number): string => {
    return String(lineNo).padStart(2, '0');
  };

  return (
    <div className="bg-white rounded-2xl border shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">예시: 우애 (雨爱)</h2>
          <p className="text-sm text-gray-600 mt-1">이것은 학습 예시로, 텍스트 변환 후 표시되는 학습 내용 형식을 보여줍니다.</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* 学习模式切换 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setStudyMode("分句学习")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            studyMode === "分句学习"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          문장별 학습
        </button>
        <button
          onClick={() => setStudyMode("整段学习")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            studyMode === "整段学习"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          전체 학습
        </button>
      </div>

      {studyMode === "分句学习" ? (
        // 分句学习模式 - 使用 SentenceCard 格式
        <div className="space-y-4">
          {subtitles.slice(0, 3).map((subtitle, index) => {
            const sentenceText = getSentenceText(subtitle.text);
            const koreanTranslation = getKoreanTranslation(index + 1);
            const data = createSentenceData(sentenceText, subtitle);
            const lineNo = index + 1;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border p-4 transition-all ${
                  selectedSentenceIndex === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                {/* 行号和韩文歌词 */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-sm text-gray-500 w-10 flex-shrink-0">{formatLineNo(lineNo)}</div>
                  <div className="font-medium flex-1">
                    {koreanTranslation || "한국어 가사"}
                  </div>
                  <button
                    className="text-xl leading-none px-2 py-1 rounded-lg text-gray-300 hover:text-yellow-500"
                    aria-label="즐겨찾기"
                    title="즐겨찾기"
                  >
                    ★
                  </button>
                </div>

                {/* 中文句子展示 - 使用与 SongPage 相同的格式 */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">중국어 문장</div>
                  <div className="flex flex-wrap items-end gap-x-1 gap-y-2 leading-relaxed justify-center">
                    {data.chunks?.[0]?.chunkSegments?.map((seg: any, segIdx: number) => {
                      const chunkZh = seg.chunkZh || '';
                      const segPinyin = seg.pinyin || '';
                      
                      return (
                        <div key={`seg-${lineNo}-${segIdx}`} className="inline-flex flex-col items-center justify-end mx-1">
                          {/* 拼音 */}
                          {segPinyin && (
                            <span className="text-sm text-gray-500 leading-tight mb-0.5 whitespace-nowrap">
                              {segPinyin}
                            </span>
                          )}
                          {/* 中文 - 使用 SentenceView 支持词卡 */}
                          <div className="text-2xl font-medium text-gray-900">
                            <SentenceView
                              sentence={chunkZh}
                              tokens={data.tokens}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 教学提示按钮 */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-gray-700">학습 분석표</div>
                    <div className="relative">
                      <button
                        onClick={() => {
                          const sentenceIndex = index + 1;
                          if (showTeachingTip[sentenceIndex]) {
                            setShowTeachingTip({ ...showTeachingTip, [sentenceIndex]: false });
                          } else {
                            // 从固定数据中获取教学提示
                            const tip = getTeachingTipForSentence(sentenceIndex);
                            if (tip) {
                              setTeachingTipContent({ ...teachingTipContent, [sentenceIndex]: tip });
                              setShowTeachingTip({ ...showTeachingTip, [sentenceIndex]: true });
                            }
                          }
                        }}
                        className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 active:bg-amber-300 text-amber-700 hover:text-amber-800 transition-colors duration-200 text-sm font-medium"
                      >
                        {showTeachingTip[index + 1] ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            접기
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            학습 가이드
                          </>
                        )}
                      </button>

                      {/* 教学提示气泡 */}
                      {showTeachingTip[index + 1] && teachingTipContent[index + 1] && (
                        <div className="absolute top-full right-0 mt-2 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border-2 border-amber-300 p-4">
                          <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l-2 border-t-2 border-amber-300 transform rotate-45"></div>
                          
                          {/* 重点词汇 */}
                          {teachingTipContent[index + 1].vocabulary.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-800 mb-3">핵심 어휘</h4>
                              <div className="space-y-2">
                                {teachingTipContent[index + 1].vocabulary.map((vocab, vocabIndex) => (
                                  <div key={vocabIndex} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="font-medium text-gray-900">{vocab.word}</span>
                                        {vocab.pinyin && (
                                          <>
                                            <span className="text-gray-600 text-sm">({vocab.pinyin})</span>
                                            <TTSButton text={vocab.word} lang="zh-CN" className="w-5 h-5" />
                                          </>
                                        )}
                                      </div>
                                      {vocab.korean && (
                                        <div className="text-xs text-gray-600 mt-1">{vocab.korean}</div>
                                      )}
                                      <div className="text-xs text-amber-600 mt-1">{vocab.hskLevel}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* 重点句型 */}
                          {teachingTipContent[index + 1].patterns.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-800 mb-3">핵심 문형</h4>
                              {teachingTipContent[index + 1].patterns.map((pattern, patternIndex) => (
                                <div key={patternIndex} className="p-3 bg-white rounded border border-gray-200">
                                  <div className="font-medium text-gray-900 mb-1">{pattern.pattern}</div>
                                  <div className="text-xs text-amber-600 mb-2">{pattern.hskLevel}</div>
                                  {pattern.korean && (
                                    <div className="text-sm text-gray-700 mb-2">{pattern.korean}</div>
                                  )}
                                  {pattern.chineseExample && (
                                    <div className="text-sm text-gray-800 mb-1 flex items-center gap-2">
                                      <span>{pattern.chineseExample}</span>
                                      <TTSButton text={pattern.chineseExample} lang="zh-CN" className="w-5 h-5" />
                                    </div>
                                  )}
                                  {pattern.koreanExample && (
                                    <div className="text-sm text-gray-700">{pattern.koreanExample}</div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* AnalysisTable - 使用与 SongPage 相同的组件 */}
                <AnalysisTable 
                  chunks={data.chunks ?? []} 
                  sentence={data.sentence}
                  startSec={subtitle.startTime}
                  endSec={subtitle.endTime}
                  userLevel="中级"
                  uiLanguage="ko"
                />
              </div>
            );
          })}
        </div>
      ) : (
        // 整段学习模式
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">전체 가사</h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {subtitles.slice(0, 8).map((subtitle, index) => {
                const sentenceText = getSentenceText(subtitle.text);
                const koreanTranslation = getKoreanTranslation(index + 1);
                const lineNo = index + 1;

                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-2 rounded transition-colors cursor-pointer ${
                      currentSubtitleIndex === index
                        ? "bg-blue-100"
                        : "hover:bg-white"
                    }`}
                    onClick={() => playSentence(index)}
                  >
                    <div className="text-sm text-gray-500 w-10 flex-shrink-0">{formatLineNo(lineNo)}</div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">{koreanTranslation || "한국어 가사"}</div>
                      <div className="text-base text-gray-700">{sentenceText}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {subtitle.startTime.toFixed(1)}s - {subtitle.endTime.toFixed(1)}s
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        seekToTime(subtitle.startTime);
                      }}
                      className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                    >
                      ▶
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* YouTube 视频播放器 */}
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <div
              ref={playerDivRef}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
