import { useState, useEffect, useRef } from "react";
import { parseSRT, SubtitleItem } from "../utils/srtParser";
import { yuaiSRT } from "../data/yuaiSRT";
import { getKoreanTranslation } from "../data/yuaiKorean";
import { yuaiVocabAnalysis } from "../data/yuaiVocab";
import { getGradedTokensForLine } from "../data/yuaiGradedTokens";
import { SentenceView } from "./SentenceView";
import { AnalysisTable } from "./AnalysisTable";
import { TTSButton } from "./TTSButton";
import { SingAlongButton, type ReadingFeedback, type SingAlongButtonHandle } from "./SingAlongButton";
import { SpeechRadarChart } from "./RadarChart";
import { pinyin } from "pinyin-pro";
import { SentenceData } from "../types";
import { getTeachingTipForSentence, TeachingTipContent } from "../data/yuaiTeachingTips";
import { songPageTranslations } from "../i18n/songPageTranslations";

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

const t = songPageTranslations.ko;

/** 使用预分级数据 yuaiGradedTokens，与 SongPage 分析后的词语等级一致 */
function createSentenceData(zhSentence: string, lineNo: number, _subtitle: SubtitleItem): SentenceData {
  const graded = getGradedTokensForLine(lineNo, zhSentence, (char, opts) => pinyin(char, { toneType: (opts?.toneType as "none") || "none" }));
  const tokens = graded.map((g) => ({
    text: g.text,
    glossZh: "",
    glossKr: "",
    example: "",
    pinyin: g.pinyin,
    hskLevel: g.hskLevel,
  }));

  const fullPinyin = tokens.map((t) => t.pinyin).filter(Boolean).join(" ");
  const tones = zhSentence.split('').map(char => {
    if (!/[\u4e00-\u9fff]/.test(char)) return '';
    const pinyinWithTone = pinyin(char, { toneType: 'num' }) || '';
    return pinyinWithTone.match(/\d/)?.[0] || '';
  }).filter(tone => tone).join('-');

  const chunkSegments = [{ chunkZh: zhSentence, pinyin: fullPinyin, tones }];
  const chunkLevel = tokens.length > 0 ? Math.max(...tokens.map((t) => t.hskLevel)) : 2;

  return {
    sentence: zhSentence,
    tokens,
    chunks: [{
      text: zhSentence,
      pinyin: fullPinyin,
      tones,
      hskLevel: chunkLevel,
      chunkSegments,
    }],
  };
}

// 整段用：按行取拼音（与 createSentenceData 一致）
function getPinyinForLine(zhSentence: string): string {
  return pinyin(zhSentence, { toneType: 'none', separator: ' ' }) || "";
}

export default function SongExample({ onClose }: SongExampleProps) {
  const [subtitles, setSubtitles] = useState<SubtitleItem[]>([]);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState<number | null>(null);
  const [, setPlayerReady] = useState(false);
  const [studyMode, setStudyMode] = useState<"整段学习" | "分句学习">("分句学习");
  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number | null>(null);
  const [showTeachingTip, setShowTeachingTip] = useState<Record<number, boolean>>({});
  const [teachingTipContent, setTeachingTipContent] = useState<Record<number, TeachingTipContent>>({});
  const [showVocabSummary, setShowVocabSummary] = useState(true);
  const [showFullLyrics, setShowFullLyrics] = useState(true);
  const [isReadAlongMode, setIsReadAlongMode] = useState(false);
  const [readAlongFeedback, setReadAlongFeedback] = useState<ReadingFeedback | null>(null);
  const [showReadAlongFeedback, setShowReadAlongFeedback] = useState(false);
  const fullReadAlongRef = useRef<SingAlongButtonHandle | null>(null);
  const singAlongRef0 = useRef<SingAlongButtonHandle | null>(null);
  const singAlongRef1 = useRef<SingAlongButtonHandle | null>(null);
  const singAlongRef2 = useRef<SingAlongButtonHandle | null>(null);
  const [readAlongCardIndex, setReadAlongCardIndex] = useState<number | null>(null);
  const playerRef = useRef<any>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);

  const exampleUserLevel: "初级" | "中级" | "高级" = "中级";
  const getSingAlongRef = (i: number) => [singAlongRef0, singAlongRef1, singAlongRef2][i] ?? singAlongRef0;

  const videoId = "fa0naBdR_q0";
  const exampleLines = subtitles.slice(0, 8);
  const exampleSentences = subtitles.slice(0, 3);

  useEffect(() => {
    const parsed = parseSRT(yuaiSRT);
    setSubtitles(parsed);
  }, []);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = () => initializePlayer();
    return () => {
      if (playerRef.current) playerRef.current.destroy();
    };
  }, []);

  const initializePlayer = () => {
    if (!playerDivRef.current) return;
    playerRef.current = new window.YT.Player(playerDivRef.current, {
      videoId,
      playerVars: { autoplay: 0, controls: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady: () => setPlayerReady(true),
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.PLAYING) startTimeTracking();
          else stopTimeTracking();
        },
      },
    });
  };

  const startTimeTracking = () => {
    const interval = setInterval(() => {
      if (playerRef.current?.getCurrentTime != null) {
        updateCurrentSubtitle(playerRef.current.getCurrentTime());
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
    const index = subtitles.findIndex(s => currentTime >= s.startTime && currentTime <= s.endTime);
    if (index !== -1 && index !== currentSubtitleIndex) setCurrentSubtitleIndex(index);
  };

  const seekToTime = (seconds: number) => {
    if (playerRef.current?.seekTo) {
      playerRef.current.seekTo(seconds, true);
      playerRef.current.playVideo();
    }
  };

  const playSentence = (subtitleIndex: number) => {
    const sub = subtitles[subtitleIndex];
    if (sub) {
      seekToTime(sub.startTime);
      setSelectedSentenceIndex(subtitleIndex);
    }
  };

  const getSentenceText = (text: string) => text.replace(/^\d+\s+/, "").trim();
  const formatLineNo = (lineNo: number) => String(lineNo).padStart(2, '0');

  // 示例用：从 yuaiVocab 取前若干词作为「핵심 어휘 모아보기」
  const sampleVocabList = (() => {
    const list: { word: string; pinyin: string; korean: string }[] = [];
    [1, 2, 3, 4, 5].forEach(i => {
      const arr = yuaiVocabAnalysis[i];
      if (arr?.length) {
        const w = arr[0];
        list.push({
          word: w.word,
          pinyin: w.pinyin || "",
          korean: w.meaningKr || "",
        });
      }
    });
    return list;
  })();

  return (
    <div className="bg-white rounded-2xl border shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">예시:우애(雨爱)가사</h2>
          <p className="text-sm text-gray-600 mt-1">이것은 학습 예시로, 텍스트 변환 후 표시되는 학습 내용 형식을 보여줍니다.</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* 学习模式切换 - 与 SongPage 一致 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setStudyMode("分句学习")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            studyMode === "分句学习" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t.sentenceBySentenceStudy}
        </button>
        <button
          onClick={() => setStudyMode("整段学习")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            studyMode === "整段学习" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t.wholeParagraphStudy}
        </button>
      </div>

      {studyMode === "分句学习" ? (
        <div className="space-y-4">
          {exampleSentences.map((subtitle, index) => {
            const lineNo = index + 1;
            const sentenceText = getSentenceText(subtitle.text);
            const koreanTranslation = getKoreanTranslation(lineNo);
            const data = createSentenceData(sentenceText, lineNo, subtitle);

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-sm border p-4 transition-all ${
                  selectedSentenceIndex === index ? "border-blue-500 bg-blue-50" : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-sm text-gray-500 w-10 flex-shrink-0">{formatLineNo(lineNo)}</div>
                  <div className="font-medium flex-1">{koreanTranslation || "한국어 가사"}</div>
                  <button className="text-xl leading-none px-2 py-1 rounded-lg text-gray-300 hover:text-yellow-500" aria-label="즐겨찾기" title="즐겨찾기">★</button>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">{t.chineseSentenceDisplay}</div>
                  <div className="flex flex-wrap items-end gap-x-1 gap-y-2 leading-relaxed justify-center">
                    {data.chunks?.[0]?.chunkSegments?.map((seg: any, segIdx: number) => (
                      <div key={`seg-${lineNo}-${segIdx}`} className="inline-flex flex-col items-center justify-end mx-1">
                        {seg.pinyin && (
                          <span className="text-sm text-gray-500 leading-tight mb-0.5 whitespace-nowrap">{seg.pinyin}</span>
                        )}
                        <div className="text-2xl font-medium text-gray-900">
                          <SentenceView sentence={seg.chunkZh || ''} tokens={data.tokens} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-gray-700">{t.learningAnalysisTable}</div>
                    <div className="relative">
                      <button
                        onClick={() => {
                          const sentenceIndex = index + 1;
                          if (showTeachingTip[sentenceIndex]) {
                            setShowTeachingTip({ ...showTeachingTip, [sentenceIndex]: false });
                          } else {
                            const tip = getTeachingTipForSentence(sentenceIndex);
                            if (tip) {
                              setTeachingTipContent({ ...teachingTipContent, [sentenceIndex]: tip });
                              setShowTeachingTip({ ...showTeachingTip, [sentenceIndex]: true });
                            }
                          }
                        }}
                        className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 active:bg-amber-300 text-amber-700 text-sm font-medium"
                      >
                        {showTeachingTip[index + 1] ? "접기" : "학습 가이드"}
                      </button>
                      {showTeachingTip[index + 1] && teachingTipContent[index + 1] && (
                        <div className="absolute top-full right-0 mt-2 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border-2 border-amber-300 p-4">
                          <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l-2 border-t-2 border-amber-300 transform rotate-45" />
                          {teachingTipContent[index + 1].vocabulary.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-800 mb-3">{t.keyVocab}</h4>
                              <div className="space-y-2">
                                {teachingTipContent[index + 1].vocabulary.map((vocab, vi) => (
                                  <div key={vi} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="font-medium text-gray-900">{vocab.word}</span>
                                        {vocab.pinyin && <><span className="text-gray-600 text-sm">({vocab.pinyin})</span><TTSButton text={vocab.word} lang="zh-CN" className="w-5 h-5" /></>}
                                      </div>
                                      {vocab.korean && <div className="text-xs text-gray-600 mt-1">{vocab.korean}</div>}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {teachingTipContent[index + 1].patterns.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-gray-800 mb-3">{t.keyPattern}</h4>
                              {teachingTipContent[index + 1].patterns.map((pattern, pi) => (
                                <div key={pi} className="p-3 bg-white rounded border border-gray-200">
                                  <div className="font-medium text-gray-900 mb-1">{pattern.pattern}</div>
                                  {pattern.korean && <div className="text-sm text-gray-700 mb-2">{pattern.korean}</div>}
                                  {pattern.chineseExample && <div className="text-sm text-gray-800 mb-1 flex items-center gap-2"><span>{pattern.chineseExample}</span><TTSButton text={pattern.chineseExample} lang="zh-CN" className="w-5 h-5" /></div>}
                                  {pattern.koreanExample && <div className="text-sm text-gray-700">{pattern.koreanExample}</div>}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 与 SongPage 一致：relative 只包表格+反馈，反馈出现在表格正上方 */}
                <div className="relative">
                  <AnalysisTable
                    ref={getSingAlongRef(index)}
                    chunks={data.chunks ?? []}
                    sentence={data.sentence}
                    startSec={subtitle.startTime}
                    endSec={subtitle.endTime}
                    userLevel={exampleUserLevel}
                    uiLanguage="ko"
                    renderFeedbackExternally
                    onReadAlongFeedbackReady={(fb) => {
                      setReadAlongCardIndex(index);
                      setReadAlongFeedback(fb);
                      setShowReadAlongFeedback(true);
                    }}
                  />
                  {readAlongCardIndex === index && showReadAlongFeedback && readAlongFeedback && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[576px] max-w-[min(576px,calc(100vw-2rem))] bg-white rounded-lg shadow-xl border-2 border-purple-300 p-4 z-50 space-y-4">
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-purple-300 transform rotate-45" />
                      <div className="flex items-center justify-between border-b pb-2">
                        <h3 className="text-sm font-semibold text-gray-800">{t.aiReadAlongFeedback}</h3>
                        <button onClick={() => setShowReadAlongFeedback(false)} className="text-gray-400 hover:text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-[42%]">
                          <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection1}</div>
                          <div className="-mb-2">
                            <SpeechRadarChart
                              data={[
                                { subject: t.scoreContentAccuracy, score: readAlongFeedback.scores.contentAccuracy, fullMark: 100 },
                                { subject: t.scoreTonePerformance, score: readAlongFeedback.scores.tonePerformance, fullMark: 100 },
                                { subject: t.scoreSpeakingFluency, score: readAlongFeedback.scores.speakingFluency, fullMark: 100 },
                              ]}
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div>
                            <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection2}</div>
                            <div className="text-sm text-gray-800">{readAlongFeedback.overallComment}</div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection3}</div>
                            <div className="text-sm text-gray-800 bg-red-50 border-l-2 border-red-400 pl-2 py-1">{readAlongFeedback.keyIssue}</div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection4}</div>
                            <div className="text-sm text-gray-800 bg-blue-50 border-l-2 border-blue-400 pl-2 py-1">{readAlongFeedback.oneAction}</div>
                          </div>
                          <div className="flex items-center gap-2 pt-2 border-t">
                            <button onClick={() => { getSingAlongRef(readAlongCardIndex ?? 0).current?.restartRecording(); setShowReadAlongFeedback(false); }} className="flex-1 px-3 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium">
                              {t.readAgain}
                            </button>
                            <button onClick={() => getSingAlongRef(readAlongCardIndex ?? 0).current?.playRecording()} className="flex-1 px-3 py-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 text-sm font-medium">
                              {t.playMyRecording}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* 整段学习 - 与 SongPage 结构一致：전체 가사 / 핵심 어휘 모아보기 / 전체 가사 보기 */
        <div className="space-y-4">
          {/* 1. 전체 가사 大卡片（与 SongPage 一致：含 따라 읽기 与反馈卡） */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl">📖</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{t.wholeParagraphLyrics}</h3>
                    <p className="text-sm text-blue-100">총 {exampleLines.length}문장</p>
                  </div>
                  {!isReadAlongMode && (
                    <button
                      type="button"
                      onClick={() => setIsReadAlongMode(true)}
                      className="px-3 py-1.5 text-sm bg-white/20 hover:bg-white/30 text-white rounded-lg border border-white/40 flex items-center gap-1.5"
                      title={t.readAlongFull}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <span className="text-xs">{t.readAlongFull}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 space-y-2 max-h-[400px] overflow-y-auto">
              {isReadAlongMode && (
                <div className="sticky top-0 z-10 bg-gray-50 rounded-lg p-4 space-y-3 mb-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{t.readAlongFull}</span>
                    <button
                      onClick={() => { setIsReadAlongMode(false); setShowReadAlongFeedback(false); }}
                      className="px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
                    >
                      {t.exitReadAlong}
                    </button>
                  </div>
                  <div className="flex justify-center relative">
                    <SingAlongButton
                      ref={fullReadAlongRef}
                      text={exampleLines.map((sub) => getSentenceText(sub.text)).filter(Boolean).join("\n")}
                      userLevel={exampleUserLevel}
                      uiLanguage="ko"
                      renderFeedbackExternally
                      onFeedbackReady={(fb) => { setReadAlongFeedback(fb); setShowReadAlongFeedback(true); }}
                    />
                    {showReadAlongFeedback && readAlongFeedback && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[576px] max-w-[min(576px,calc(100vw-2rem))] bg-white rounded-lg shadow-xl border-2 border-purple-300 p-4 z-50 space-y-4">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-purple-300 transform rotate-45" />
                        <div className="flex items-center justify-between border-b pb-2">
                          <h3 className="text-sm font-semibold text-gray-800">{t.aiReadAlongFeedback}</h3>
                          <button onClick={() => setShowReadAlongFeedback(false)} className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </div>
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-[42%]">
                            <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection1}</div>
                            <div className="-mb-2">
                              <SpeechRadarChart
                                data={[
                                  { subject: t.scoreContentAccuracy, score: readAlongFeedback.scores.contentAccuracy, fullMark: 100 },
                                  { subject: t.scoreTonePerformance, score: readAlongFeedback.scores.tonePerformance, fullMark: 100 },
                                  { subject: t.scoreSpeakingFluency, score: readAlongFeedback.scores.speakingFluency, fullMark: 100 },
                                ]}
                              />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0 space-y-2">
                            <div>
                              <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection2}</div>
                              <div className="text-sm text-gray-800">{readAlongFeedback.overallComment}</div>
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection3}</div>
                              <div className="text-sm text-gray-800 bg-red-50 border-l-2 border-red-400 pl-2 py-1">{readAlongFeedback.keyIssue}</div>
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-gray-600 mb-1">{t.feedbackSection4}</div>
                              <div className="text-sm text-gray-800 bg-blue-50 border-l-2 border-blue-400 pl-2 py-1">{readAlongFeedback.oneAction}</div>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t">
                              <button onClick={() => { fullReadAlongRef.current?.restartRecording(); setShowReadAlongFeedback(false); }} className="flex-1 px-3 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium">
                                {t.readAgain}
                              </button>
                              <button onClick={() => fullReadAlongRef.current?.playRecording()} className="flex-1 px-3 py-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 text-sm font-medium">
                                {t.playMyRecording}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {exampleLines.map((subtitle, index) => {
                const lineNo = index + 1;
                const sentenceText = getSentenceText(subtitle.text);
                const kr = getKoreanTranslation(lineNo);
                const data = createSentenceData(sentenceText, lineNo, subtitle);
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                      currentSubtitleIndex === index ? "bg-blue-100 border-blue-400" : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => playSentence(index)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-semibold text-gray-500 min-w-[40px] flex-shrink-0">{formatLineNo(lineNo)}</span>
                      <div className="flex-1 space-y-1">
                        <div className="text-base text-gray-700">{kr || "한국어 가사"}</div>
                        <div className="flex flex-wrap items-end gap-x-1 gap-y-2">
                          {data.tokens.map((token: any, tokenIdx: number) => (
                            <div key={tokenIdx} className="inline-flex flex-col items-center justify-end">
                              {token.pinyin && <span className="text-xs text-gray-500 mb-0.5 whitespace-nowrap">{token.pinyin}</span>}
                              <span className="text-xl font-medium text-gray-900">{token.text}</span>
                            </div>
                          ))}
                          <TTSButton text={sentenceText} lang="zh-CN" className="w-5 h-5 text-gray-600 hover:text-blue-600 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. 핵심 어휘 모아보기 */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 cursor-pointer"
              onClick={() => setShowVocabSummary(!showVocabSummary)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <h3 className="text-lg font-semibold">{t.keyVocabSummary}</h3>
                  <span className="text-sm text-purple-100">({sampleVocabList.length}개)</span>
                </div>
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => {
                      const escapeHtml = (s: string) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                      const parts: string[] = [];
                      parts.push("<h1 style=\"font-size:1.25rem;margin-bottom:1rem;\">" + escapeHtml(t.keyVocabSummary) + "</h1>");
                      parts.push("<h2 style=\"font-size:1rem;margin:0.75rem 0 0.25rem;color:#7c3aed;\">" + escapeHtml(t.currentFocus) + "</h2><ol style=\"margin:0 0 1rem 1.25rem;\">");
                      sampleVocabList.forEach((v) => {
                        parts.push("<li style=\"margin:0.25rem 0;\">" + escapeHtml(v.word) + (v.pinyin ? " <span style=\"color:#4b5563;\">" + escapeHtml(v.pinyin) + "</span>" : "") + (v.korean ? " — " + escapeHtml(v.korean) : "") + "</li>");
                      });
                      parts.push("</ol>");
                      const html = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>" + escapeHtml(t.keyVocabSummary) + "</title></head><body style=\"font-family:sans-serif;padding:1.5rem;max-width:720px;\">" + parts.join("") + "</body></html>";
                      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "vocab-summary-yuai.html";
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                    className="px-2 py-1 rounded text-xs font-medium bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {t.downloadAsHTML}
                  </button>
                  <svg className={`w-6 h-6 transition-transform ${showVocabSummary ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            {showVocabSummary && (
              <div className="p-6">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-700 mb-2">{t.currentFocus}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {sampleVocabList.map((v, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 flex items-center gap-2">
                        <span className="font-medium text-gray-800">{v.word}</span>
                        <TTSButton text={v.word} lang="zh-CN" className="w-5 h-5 flex-shrink-0" />
                        {v.pinyin && <div className="text-sm text-gray-600">{v.pinyin}</div>}
                        {v.korean && <div className="text-sm text-gray-500">{v.korean}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. 전체 가사 보기 */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 cursor-pointer"
              onClick={() => setShowFullLyrics(!showFullLyrics)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📖</span>
                  <h3 className="text-lg font-semibold">{t.fullLyricsView}</h3>
                  <span className="text-sm text-green-100">({exampleLines.length}문장)</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const parts: string[] = ['<h1>전체 가사 보기</h1><ol>'];
                    exampleLines.forEach((sub, i) => {
                      const zh = getSentenceText(sub.text);
                      const py = getPinyinForLine(zh);
                      const kr = getKoreanTranslation(i + 1);
                      parts.push(`<li>${zh} ${py} — ${kr}</li>`);
                    });
                    parts.push('</ol>');
                    const html = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;padding:1.5rem;">' + parts.join('') + '</body></html>';
                    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'full-lyrics-yuai.html';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  }}
                  className="px-2 py-1 rounded text-xs font-medium bg-white/20 hover:bg-white/30"
                >
                  {t.downloadAsHTML}
                </button>
                <svg className={`w-6 h-6 transition-transform ${showFullLyrics ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {showFullLyrics && (
              <div className="p-6 space-y-3">
                {exampleLines.map((subtitle, index) => {
                  const zhSentence = getSentenceText(subtitle.text);
                  const pinyinStr = getPinyinForLine(zhSentence);
                  const displayLine = getKoreanTranslation(index + 1);
                  const lineNo = index + 1;
                  return (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-gray-500 font-medium flex-shrink-0">{lineNo}.</span>
                          <span className="font-medium text-gray-900">{zhSentence}</span>
                          <TTSButton text={zhSentence} lang="zh-CN" className="w-5 h-5 flex-shrink-0 text-gray-600 hover:text-green-600" />
                        </div>
                        {pinyinStr && <div className="text-sm text-gray-600">{pinyinStr}</div>}
                        {displayLine && <div className="text-sm text-gray-500">{displayLine}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <div ref={playerDivRef} className="absolute top-0 left-0 w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}
