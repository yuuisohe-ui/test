import { useEffect, useMemo, useState, useRef } from "react";
import { songPageTranslations, translate } from "../i18n/songPageTranslations";
import SongExample from "../components/SongExample";

/**
 * 将语言代码统一映射为内部格式（与 chatgptApi.ts 中的 normalizeWhisperLanguage 保持一致）
 * @param lang 语言代码（可能是 "korean", "chinese", "ko", "zh" 等）
 * @returns 统一格式：'ko' | 'zh' | null
 */
function normalizeLanguage(lang: string | null | undefined): 'ko' | 'zh' | null {
  if (!lang) return null;
  
  const langLower = lang.toLowerCase().trim();
  
  // 韩语映射
  if (langLower === 'korean' || langLower === 'ko' || langLower === 'kor') {
    return 'ko';
  }
  
  // 中文映射
  if (langLower === 'chinese' || langLower === 'zh' || langLower === 'zh-cn' || langLower === 'zh-tw' || langLower === 'cmn') {
    return 'zh';
  }
  
  // 未知语言，返回 null
  return null;
}
import { opalMockOk } from "../data/opalMock";
import { SentenceView } from "../components/SentenceView";
import { AnalysisTable } from "../components/AnalysisTable";
import { type ReadingFeedback, type SingAlongButtonHandle } from "../components/SingAlongButton";
import { SpeechRadarChart } from "../components/RadarChart";
import { TTSButton } from "../components/TTSButton";
import { AudioPlayer } from "../components/AudioPlayer";
import { audioManager } from "../utils/audioManager";
import { SentenceData } from "../types";
import { SongPayload } from "../data/opalMock";
import { callOpalApiWithAudio, callOpalApiWithText } from "../services/opalApi";
import { callChatGPTApiWithText, callChatGPTApiWithAudioAndTranscription, translateChineseToKorean, getTeachingTip, getPatternInfo, evaluateSentence } from "../services/chatgptApi";
import { createDialogue } from "../services/dialogueApi";
import { getWordCardInfo } from "../services/wordCardApi";

type StarMap = Record<number, true>;

function buildSongId(text: string, lineCount: number) {
  const head = text.trim().replace(/\s+/g, " ").slice(0, 50);
  return `${head}_${lineCount}`;
}

function safeParseJSON<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function makeFallbackSentenceData(line: string): SentenceData {
  const clean = line.trim();
  return {
    sentence: clean,
    tokens: [
      {
        text: clean,
        glossZh: "",
        glossKr: "",
        example: "",
      },
    ],
    chunks: [
      {
        text: clean,
        pinyin: "",
        tones: "",
      },
    ],
  };
}

/**
 * 一致性校验与修复：确保 tokensZh 与 zhSentence 一致
 * 如果 tokensZh 连接后（忽略空格/标点）与 zhSentence（忽略空格/标点）不一致，以 zhSentence 为准重建 tokensZh
 */
function ensureTokensZhConsistency(payload: SongPayload): void {
  if (payload.status !== 'ok' || !payload.lines || payload.lines.length === 0) {
    return;
  }
  
  const normalize = (s: string): string => {
    if (!s) return '';
    // 去空格 + 去常见标点（，。！？、；：,.!?;:）
    return s.replace(/\s+/g, '').replace(/[，。！？、；：,.!?;:]/g, '');
  };
  
  const segmentChineseWords = (text: string): string[] => {
    if (!text) return [];
    
    try {
      // 使用 Intl.Segmenter（如果支持）
      if ('Segmenter' in Intl) {
        const segmenter = new (Intl as any).Segmenter('zh', { granularity: 'word' });
        const segments = Array.from(segmenter.segment(text)) as Array<{ segment: string }>;
        const words = segments
          .map(seg => seg.segment)
          .filter(word => word.trim().length > 0);
        
        // 如果 Segmenter 返回的词太长（超过2个字符），进一步按字符分割
        const result: string[] = [];
        words.forEach(word => {
          if (word.length > 2) {
            // 按字符分割（避免把整个短语作为一个词）
            for (let i = 0; i < word.length; i++) {
              const char = word[i];
              if (/[\u4e00-\u9fff]/.test(char)) {
                result.push(char);
              } else if (char.trim()) {
                result.push(char);
              }
            }
          } else {
            result.push(word);
          }
        });
        return result.filter(w => w.trim().length > 0);
      }
    } catch (e) {
      console.warn('Intl.Segmenter not supported, using fallback');
    }
    
    // Fallback: 按字符分割（每个中文字符作为一个词）
    const words: string[] = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[\u4e00-\u9fff]/.test(char)) {
        words.push(char);
      } else if (char.trim()) {
        words.push(char);
      }
    }
    return words.filter(w => w.trim().length > 0);
  };
  
  payload.lines.forEach((line: any, index: number) => {
    const zhSentence = line.zhSentence || '';
    const tokensZh = line.tokensZh || [];
    
    if (!zhSentence) return; // 跳过没有中文句子的行
    
    // 计算 tokensZh 连接后的字符串（忽略空格/标点）
    const joinTokens = tokensZh.map((t: any) => t?.text || '').join('');
    const normalizedTokens = normalize(joinTokens);
    const normalizedSentence = normalize(zhSentence);
    
    // 如果不一致，以 zhSentence 为准重建 tokensZh
    if (normalizedTokens !== normalizedSentence) {
      console.warn(`⚠️ [Token Consistency] line[${index}] tokensZh 与 zhSentence 不一致，正在修复...`, {
        zhSentence: zhSentence.substring(0, 30),
        tokensZhJoin: joinTokens.substring(0, 30),
        normalizedSentence,
        normalizedTokens,
      });
      
      // 以 zhSentence 为准重建 tokensZh
      const segmentedWords = segmentChineseWords(zhSentence);
      line.tokensZh = segmentedWords.map((word: string) => {
        // 尝试从原有 tokensZh 中查找匹配的 token（保留原有信息）
        const existingToken = tokensZh.find((t: any) => t?.text === word);
        if (existingToken) {
          return existingToken;
        }
        // 创建新的 token
        return {
          text: word,
          glossZh: "",
          glossKr: "",
          example: "",
          pinyin: "",
        };
      });
      
      console.log(`✅ [Token Consistency] line[${index}] 修复完成，新 tokensZh 数量:`, line.tokensZh.length);
    }
  });
}

// OpalLine을 SentenceData로 변환
function opalLineToSentenceData(line: any): SentenceData {
  if (!line) {
    return makeFallbackSentenceData("");
  }

  // 优先使用 zhSentence（中文翻译），如果为空则使用 displayLine
  // 但需要确保 zhSentence 是中文，displayLine 是韩文
  let zhSentence = line.zhSentence || "";
  const isKorean = (text: string) => /[\uac00-\ud7a3]/.test(text);
  const isChinese = (text: string) => /[\u4e00-\u9fff]/.test(text) && !/[\uac00-\ud7a3]/.test(text);
  
  // 如果 zhSentence 是韩文，说明数据被调换了，使用 displayLine（如果 displayLine 是中文）
  if (!zhSentence || isKorean(zhSentence)) {
    if (isChinese(line.displayLine)) {
      zhSentence = line.displayLine;
    } else {
      // 如果都找不到中文，使用空字符串
      zhSentence = "";
    }
  }
  
  // tokensZh를 Token[]로 변환，并从chunks中提取拼音与 hskLevel
  let tokens = (line.tokensZh || []).map((token: any) => {
    let pinyin = '';
    let hskLevel: number | undefined = token.hskLevel;
    if (line.chunks) {
      const matchingChunk = line.chunks.find((chunk: any) => {
        const chunkZh = chunk.chunkZh || '';
        return chunkZh.includes(token.text);
      });
      pinyin = matchingChunk?.pinyin || '';
      if (hskLevel == null && matchingChunk?.hskLevel != null) hskLevel = matchingChunk.hskLevel;
    }
    return {
      text: token.text || "",
      glossZh: token.glossZh || "",
      glossKr: token.glossKr || "",
      example: token.example || "",
      pinyin: pinyin,
      ...(hskLevel != null && { hskLevel }),
    };
  });

  // ⭐ 如果 tokensZh 为空或只包含整句，对 zhSentence 进行分词
  if (tokens.length === 0 || (tokens.length === 1 && tokens[0].text === zhSentence)) {
    // 使用 Intl.Segmenter 或 fallback 方法对中文句子进行分词
    const segmentChineseWords = (text: string): string[] => {
      if (!text) return [];
      
      try {
        // 使用 Intl.Segmenter（如果支持）
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
      
      // Fallback: 按字符分割（每个中文字符作为一个词）
      const words: string[] = [];
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (/[\u4e00-\u9fff]/.test(char)) {
          words.push(char);
        } else if (char.trim()) {
          // 非中文字符但非空格，也作为一个词
          words.push(char);
        }
      }
      return words.filter(w => w.trim().length > 0);
    };
    
    const segmentedWords = segmentChineseWords(zhSentence);
    tokens = segmentedWords.map((word: string) => ({
      text: word,
      glossZh: "",
      glossKr: "",
      example: "",
      pinyin: "",
      hskLevel: 1,
    }));
  }

  // chunks를 Chunk[]로 변환 - 整句分析，只显示整句拼音、声调和HSK等级
  const chunks = (() => {
    if (!line.chunks || line.chunks.length === 0) {
      return [{
        text: zhSentence,
        pinyin: '',
        tones: '',
        hskLevel: 1, // 默认HSK 1级
      }];
    }
    
    // 合并所有chunk的拼音和声调
    // 确保提取所有有效的拼音和声调，包括空字符串的情况
    const allPinyin = line.chunks
      .map((c: any) => c.pinyin)
      .filter((p: any) => p && p.trim() !== '')
      .join(' ');
    
    const allTones = line.chunks
      .map((c: any) => c.tones)
      .filter((t: any) => t && t.trim() !== '')
      .join('-');
    
    // 如果合并后为空，尝试从第一个chunk获取
    const firstChunk = line.chunks[0];
    let finalPinyin = allPinyin || firstChunk?.pinyin || '';
    let finalTones = allTones || firstChunk?.tones || '';
    
    // 验证拼音和声调数量是否与整句字数对应
    // 计算整句中的中文字符数（排除标点符号和空格）
    const chineseChars = zhSentence.match(/[\u4e00-\u9fff]/g) || [];
    const charCount = chineseChars.length;
    
    // 计算拼音数量（按空格分割）
    const pinyinCount = finalPinyin ? finalPinyin.split(/\s+/).filter((p: string) => p.trim()).length : 0;
    
    // 计算声调数量（按"-"分割）
    const tonesCount = finalTones ? finalTones.split('-').filter((t: string) => t.trim()).length : 0;
    
    // 如果拼音或声调数量不匹配，尝试从tokens中补充
    if (charCount > 0 && (pinyinCount < charCount || tonesCount < charCount)) {
      // 尝试从tokens中获取拼音
      if (line.tokensZh && line.tokensZh.length > 0) {
        const tokensPinyin = line.tokensZh
          .map((token: any) => {
            // 从chunks中查找包含该词的chunk，提取拼音
            if (line.chunks) {
              const matchingChunk = line.chunks.find((chunk: any) => {
                const chunkZh = chunk.chunkZh || '';
                return chunkZh.includes(token.text);
              });
              return matchingChunk?.pinyin || '';
            }
            return '';
          })
          .filter((p: string) => p && p.trim() !== '')
          .join(' ');
        
        if (tokensPinyin && tokensPinyin.split(/\s+/).length >= pinyinCount) {
          finalPinyin = tokensPinyin;
        }
      }
    }
    
    // 计算HSK等级（可以根据句子长度、复杂度等判断，这里先使用默认值或从数据中获取）
    // 如果chunks中有hskLevel，使用它；否则根据句子长度估算
    const hskLevel = line.chunks.find((c: any) => c.hskLevel)?.hskLevel || 
                     (() => {
                       const length = zhSentence.length;
                       if (length <= 5) return 1;
                       if (length <= 10) return 2;
                       if (length <= 15) return 3;
                       if (length <= 20) return 4;
                       if (length <= 30) return 5;
                       return 6;
                     })();
    
    // 保留所有chunk的信息，用于按语义断句分段显示
    // 每个chunk包含：chunkZh, pinyin, tones
    // 确保chunkSegments中的chunkZh是zhSentence的一部分
    // 优先使用chunkSegments（如果API返回了），否则使用chunks
    let chunkSegments: Array<{ chunkZh: string; pinyin: string; tones: string }> = [];
    
    // 如果API返回了chunkSegments，优先使用
    if (line.chunkSegments && Array.isArray(line.chunkSegments) && line.chunkSegments.length > 0) {
      chunkSegments = line.chunkSegments
        .map((seg: any) => ({
          chunkZh: seg.chunkZh || '',
          pinyin: seg.pinyin || '',
          tones: seg.tones || '',
        }))
        .filter((seg: any) => seg.chunkZh && seg.pinyin && zhSentence.includes(seg.chunkZh));
    }
    
    // 如果没有chunkSegments，从chunks中提取
    if (chunkSegments.length === 0 && line.chunks && line.chunks.length > 0) {
      chunkSegments = line.chunks
        .map((c: any) => {
          const chunkZh = c.chunkZh || '';
          // 确保chunkZh是zhSentence的一部分
          if (chunkZh && zhSentence.includes(chunkZh)) {
            return {
              chunkZh: chunkZh,
              pinyin: c.pinyin || '',
              tones: c.tones || '',
            };
          }
          return null;
        })
        .filter((c: any) => c && c.chunkZh && c.pinyin) as Array<{ chunkZh: string; pinyin: string; tones: string }>;
    }
    
    // 如果chunkSegments仍然为空，但zhSentence有内容，创建一个包含整句的segment
    let finalChunkSegments = chunkSegments;
    if (chunkSegments.length === 0 && zhSentence && finalPinyin) {
      // 如果没有chunkSegments，创建一个包含整句的segment
      finalChunkSegments = [{
        chunkZh: zhSentence,
        pinyin: finalPinyin,
        tones: finalTones,
      }];
    }
    
    return [{
      text: zhSentence, // 整句（基于zhSentence）
      pinyin: finalPinyin, // 整句拼音（基于zhSentence的chunks）
      tones: finalTones, // 整句声调结构（基于zhSentence的chunks）
      hskLevel: hskLevel,
      chunkSegments: finalChunkSegments, // 添加chunk分段信息（基于zhSentence）
    }];
  })();

  return {
    sentence: zhSentence,
    tokens: tokens, // 使用分词后的 tokens（如果为空或只包含整句，已在上方进行分词处理）
    chunks: chunks.length > 0 ? chunks : [
      {
        text: zhSentence,
        pinyin: "",
        tones: "",
      },
    ],
  };
}

function downloadHtml(filename: string, html: string) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(s: string) {
  const str = String(s ?? "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function formatLineNo(n: number) {
  return String(n).padStart(2, "0");
}

interface SongPageProps {
  initialLyrics?: string;
  /** 是否正在显示歌曲页（从首页切到歌曲页时为 true，用于同步首页选择的等级） */
  isVisible?: boolean;
}

export default function SongPage({ initialLyrics, isVisible = true }: SongPageProps = {}) {
  // ⭐ 状态持久化：从 localStorage 恢复状态
  const STORAGE_KEY = 'songPage_state';
  
  // 输入区
  const [rawText, setRawText] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.rawText || initialLyrics || "";
      } catch {
        return initialLyrics || "";
      }
    }
    return initialLyrics || "";
  });
  const [audioHint, setAudioHint] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null); // 用于取消API请求
  const [languageMode, setLanguageMode] = useState<'ko' | 'zh' | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.languageMode || null;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [showLanguageTip, setShowLanguageTip] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);
  
  // initialLyrics가 변경되면 rawText 업데이트（但只在没有保存状态时）
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved && initialLyrics) {
      setRawText(initialLyrics);
    }
  }, [initialLyrics]);
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [opalPayload, setOpalPayload] = useState<SongPayload | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.opalPayload && parsed.opalPayload.status === 'ok') {
          // 验证 opalPayload 结构
          return parsed.opalPayload as SongPayload;
        }
        return null;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [testResult, setTestResult] = useState<string | null>(null);
  // 保存原始输入文本（用于中文输入时直接显示）
  const [originalText, setOriginalText] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.originalText || "";
      } catch {
        return "";
      }
    }
    return "";
  });
  // 保存原始转写文本（用于音频转文字时直接显示）
  const [transcribedText, setTranscribedText] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.transcribedText || "";
      } catch {
        return "";
      }
    }
    return "";
  });
  
  // ⭐ 状态持久化：保存关键状态到 localStorage（将在 userLevel 定义后重新定义）
  
  // 단어 선택 및 대화 생성
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [dialogueResult, setDialogueResult] = useState<{ word: string; dialogue: string; translation?: string } | null>(null);
  const [isGeneratingDialogue, setIsGeneratingDialogue] = useState(false);
  
  // 翻译缓存：存储已翻译的中文到韩文的映射
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});

  // 列表与模式
  const [search, setSearch] = useState("");
  const [reviewMode, setReviewMode] = useState<"sentence" | false>(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  
  // ⭐ 全局词卡状态管理：确保同一时间只有一个词卡显示
  const [globalActiveTokenId, setGlobalActiveTokenId] = useState<string | null>(null);


  // 解析输入 → 句子数组（只有 API 分析结果才显示，粘贴文本时不自动显示）
  const linesAll = useMemo(() => {
    // ✅ 只有 API 분석 결과가 있을 때만 표시
    if (opalPayload?.status === "ok" && Array.isArray(opalPayload.lines) && opalPayload.lines.length > 0) {
      // 直接使用原始数据，不再去重
      // ✅ 保持原始时间戳，不重新计算
      // API返回的时间戳已经对应了正确的文本内容（中文或韩文），保持原样即可
      
      // 确保每个line的displayLine都是韩文，zhSentence都是中文
      return opalPayload.lines.map((line: any, index: number) => {
        let displayLine = String(line?.displayLine ?? "");
        let zhSentence = String(line?.zhSentence ?? "");
        
        const isKorean = (text: string) => /[\uac00-\ud7a3]/.test(text);
        const isChinese = (text: string) => /[\u4e00-\u9fff]/.test(text) && !/[\uac00-\ud7a3]/.test(text);
        
        // 如果 displayLine 和 zhSentence 被调换了，先调换回来
        if (isChinese(displayLine) && isKorean(zhSentence)) {
          const temp = displayLine;
          displayLine = zhSentence;
          zhSentence = temp;
        }
        
        // 如果displayLine是中文或者是占位符文本，强制替换为韩文
        if (isChinese(displayLine) || displayLine.includes("한국어 가사 원문") || displayLine.includes("한국어")) {
          // 策略1: 从转写文本中查找韩文（音频输入）
          if (transcribedText && isKorean(transcribedText)) {
            const transcribedLines = transcribedText.split(/\r?\n/).map((s: string) => s.trim()).filter(Boolean);
            const koreanLines = transcribedLines.filter((l: string) => isKorean(l));
            const lineNo = Number(line?.lineNo ?? index + 1);
            if (koreanLines.length > 0) {
              if (lineNo > 0 && lineNo <= koreanLines.length) {
                displayLine = koreanLines[lineNo - 1];
              } else {
                displayLine = koreanLines[0];
              }
            }
          }
          // 策略2: 从rawText中查找韩文（文本输入）
          else if (rawText) {
            const rawLines = rawText.split(/\r?\n/).map((s: string) => s.trim()).filter(Boolean);
            const lineNo = Number(line?.lineNo ?? index + 1);
            
            // 优先匹配行号
            if (lineNo > 0 && rawLines[lineNo - 1] && isKorean(rawLines[lineNo - 1])) {
              displayLine = rawLines[lineNo - 1];
            } else {
              // 查找所有韩文行
              const koreanLines = rawLines.filter((l: string) => isKorean(l));
              if (koreanLines.length > 0) {
                if (lineNo > 0 && lineNo <= koreanLines.length) {
                  displayLine = koreanLines[lineNo - 1];
                } else {
                  displayLine = koreanLines[0];
                }
              }
            }
          }
          
          // 策略3: 如果还是中文，检查翻译缓存
          if ((isChinese(displayLine) || displayLine.includes("한국어")) && translationCache[displayLine]) {
            displayLine = translationCache[displayLine];
          }
          
          // 策略4: 如果displayLine仍然是中文或占位符，且zhSentence是中文，则zhSentence作为中文整句，displayLine需要翻译
          // 这种情况下，displayLine会在useEffect中异步翻译
        }
        
        // 确保 zhSentence 是中文（如果被错误地设置为韩文，需要修正）
        if (isKorean(zhSentence)) {
          // 如果 zhSentence 是韩文，说明数据被调换了，应该清空等待从其他地方获取
          zhSentence = "";
        }
        
        // 返回修正后的line（保持原始时间戳不变）
        return {
          ...line,
          displayLine: displayLine, // 强制确保是韩文
          zhSentence: zhSentence || line?.zhSentence || "",  // 确保是中文
        };
      });
    }

    // ✅ 粘贴文本时，不自动显示分析内容（返回空数组）
    return [];
  }, [opalPayload, rawText, transcribedText, translationCache]);

  // 异步翻译需要翻译的中文行
  useEffect(() => {
    if (opalPayload?.status === "ok" && Array.isArray(opalPayload.lines) && opalPayload.lines.length > 0) {
      // 直接使用原始数据，不再去重
      
      // 找出所有需要翻译的中文displayLine
      const needsTranslation: Array<{ chinese: string }> = [];
      
      opalPayload.lines.forEach((line: any) => {
        let displayLine = String(line?.displayLine ?? "");
        const isKorean = (text: string) => /[\uac00-\ud7a3]/.test(text);
        const isChinese = (text: string) => /[\u4e00-\u9fff]/.test(text) && !/[\uac00-\ud7a3]/.test(text);
        
        // 如果displayLine是中文或占位符文本，且不在缓存中，且rawText中也没有韩文
        const needsTranslationCheck = isChinese(displayLine) || 
                                      displayLine.includes("한국어 가사 원문") || 
                                      displayLine.includes("한국어");
        
        if (needsTranslationCheck && !translationCache[displayLine]) {
          // 检查rawText中是否有韩文
          let hasKoreanInRawText = false;
          if (rawText) {
            const rawLines = rawText.split(/\r?\n/).map((s: string) => s.trim()).filter(Boolean);
            hasKoreanInRawText = rawLines.some((l: string) => isKorean(l));
          }
          
          // 如果rawText中也没有韩文，且displayLine是中文（不是占位符），需要翻译
          // 如果displayLine是占位符，使用zhSentence进行翻译
          const textToTranslate = (displayLine.includes("한국어") || displayLine.includes("한국어 가사 원문")) 
            ? (line?.zhSentence || displayLine) 
            : displayLine;
          
          if (!hasKoreanInRawText && isChinese(textToTranslate) && !needsTranslation.find(t => t.chinese === textToTranslate)) {
            needsTranslation.push({ chinese: textToTranslate });
          }
        }
      });
      
      // 批量翻译
      if (needsTranslation.length > 0) {
        console.log(`🔄 需要翻译 ${needsTranslation.length} 行中文歌词为韩文...`);
        const translatePromises = needsTranslation.map(async ({ chinese }) => {
          try {
            const korean = await translateChineseToKorean(chinese);
            console.log(`✅ 翻译完成: ${chinese} -> ${korean}`);
            return { chinese, korean };
          } catch (error) {
            console.error(`❌ 翻译失败: ${chinese}`, error);
            return null;
          }
        });
        
        Promise.all(translatePromises).then((results) => {
          const newCache: Record<string, string> = { ...translationCache };
          results.forEach((result) => {
            if (result) {
              newCache[result.chinese] = result.korean;
            }
          });
          if (Object.keys(newCache).length > Object.keys(translationCache).length) {
            setTranslationCache(newCache);
          }
        });
      }
    }
  }, [opalPayload, rawText, translationCache]);

  const songId = useMemo(() => buildSongId(rawText, linesAll.length), [rawText, linesAll.length]);
  const storageKey = useMemo(() => `starred_${songId}`, [songId]);

  // 星标状态
  const [starMap, setStarMap] = useState<StarMap>({});
  const [userLevel, setUserLevel] = useState<"初级" | "中级" | "高级" | null>(() => {
    // 优先从首页等级选择读取
    const homeLevel = localStorage.getItem('nz_level');
    if (homeLevel) {
      const map: Record<string, "初级" | "中级" | "高级"> = {
        '초급': '初级',
        '중급': '中级',
        '고급': '高级',
      };
      if (map[homeLevel]) return map[homeLevel];
    }
    // fallback: 读取原有持久化状态
    try {
      const saved = localStorage.getItem('songPageState');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.userLevel || null;
      }
    } catch {}
    return null;
  });
  const [studyMode, setStudyMode] = useState<"整段学习" | "分句学习">("分句学习");
  const [showLevelWarning, setShowLevelWarning] = useState(false);
  // ⭐ 从首页进入歌曲页时同步 nz_level → userLevel（否则首页选的等级不会生效，分析按钮会无反应）
  useEffect(() => {
    if (!isVisible) return;
    const homeLevel = localStorage.getItem('nz_level');
    if (homeLevel) {
      const map: Record<string, "初级" | "中级" | "高级"> = {
        '초급': '初级',
        '중급': '中级',
        '고급': '高级',
      };
      if (map[homeLevel]) setUserLevel(map[homeLevel]);
    }
  }, [isVisible]);

  // ⭐ 状态持久化：保存关键状态到 localStorage（包括 userLevel）
  useEffect(() => {
    try {
      const stateToSave = {
        rawText,
        languageMode,
        originalText,
        transcribedText,
        userLevel,
        opalPayload: opalPayload ? {
          status: opalPayload.status,
          message: opalPayload.message,
          songId: opalPayload.songId,
          version: opalPayload.version,
          audioUrl: opalPayload.audioUrl || null,
          lines: opalPayload.lines || [],
        } : null,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (error) {
      console.error('保存状态失败:', error);
    }
  }, [rawText, languageMode, originalText, transcribedText, opalPayload, userLevel]);

  useEffect(() => {
    // songId变化时，读取对应星标
    const saved = safeParseJSON<StarMap>(localStorage.getItem(storageKey), {});
    setStarMap(saved);
    setPage(1);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(starMap));
  }, [storageKey, starMap]);

  // 过滤（搜索 + 复习模式）
  const filtered = useMemo(() => {
    const q = search.trim();
    const base = linesAll.map((it: any) => ({
      item: it,
      lineNo: Number(it?.lineNo ?? 0),
      starred: !!starMap[Number(it?.lineNo ?? 0)],
    }));

    // 根据复习模式类型进行过滤
    let afterReview = base;
    if (reviewMode === "sentence") {
      // 句子复习：只显示收藏的句子
      afterReview = base.filter((x: any) => x.starred);
    }

    const afterSearch = q
      ? afterReview.filter((x: any) => ((x.item?.displayLine ?? "").includes(q) || (x.item?.zhSentence ?? "").includes(q)))
      : afterReview;

    return afterSearch;
  }, [linesAll, search, reviewMode, starMap]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  // 导出 HTML（本页）
  function exportCurrentPage() {
    const items = pageItems;
    const title = songPageTranslations['ko'].exportTitle;
    const modeTitle = reviewMode === "sentence"
      ? songPageTranslations['ko'].exportModeReview
      : songPageTranslations['ko'].exportModeNormal;

    const blocks = items
      .map((it: any) => {
        const data = makeFallbackSentenceData(it.line);
        const tokensRows = (data.tokens ?? []).map((t) => `
          <tr>
            <td>${escapeHtml(t.text ?? "")}</td>
            <td>${escapeHtml(t.glossZh ?? "")}</td>
            <td>${escapeHtml(t.glossKr ?? "")}</td>
            <td>${escapeHtml(t.example ?? "")}</td>
          </tr>
        `).join("");

        const chunksRows = (data.chunks ?? []).map((c) => `
          <tr>
            <td>${escapeHtml(c.text ?? "")}</td>
            <td>${escapeHtml(c.pinyin ?? "")}</td>
            <td>${escapeHtml(c.tones ?? "")}</td>
          </tr>
        `).join("");

        return `
          <section style="margin:24px 0; padding:16px; border:1px solid #ddd; border-radius:12px;">
            <h2 style="margin:0 0 8px 0;">${formatLineNo(it.lineNo)}. ${escapeHtml(it.line)}</h2>

            <h3 style="margin:16px 0 8px 0;">${songPageTranslations['ko'].vocabTable}</h3>
            <table style="width:100%; border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">${songPageTranslations['ko'].word}</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">${songPageTranslations['ko'].chineseMeaning}</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">${songPageTranslations['ko'].koreanMeaning}</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">${songPageTranslations['ko'].example}</th>
                </tr>
              </thead>
              <tbody>
                ${tokensRows || `<tr><td colspan="4" style="padding:8px; color:#777;">${songPageTranslations['ko'].noData}</td></tr>`}
              </tbody>
            </table>

            <h3 style="margin:16px 0 8px 0;">${songPageTranslations['ko'].chunkTable}</h3>
            <table style="width:100%; border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">${songPageTranslations['ko'].chunk}</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">${songPageTranslations['ko'].pinyin}</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">${songPageTranslations['ko'].tonePattern}</th>
                </tr>
              </thead>
              <tbody>
                ${chunksRows || `<tr><td colspan="3" style="padding:8px; color:#777;">${songPageTranslations['ko'].noData}</td></tr>`}
              </tbody>
            </table>
          </section>
        `;
      })
      .join("");

    const html = `
      <!doctype html>
      <html lang="zh">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>${title}</title>
      </head>
      <body style="font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial; margin:24px; color:#111;">
        <h1 style="margin:0 0 8px 0;">${title}</h1>
        <p style="margin:0 0 24px 0; color:#555;">${modeTitle} · ${songPageTranslations['ko'].exportTime}${new Date().toLocaleString()}</p>
        ${blocks || `<p style="color:#777;">${songPageTranslations['ko'].noContent}</p>`}
      </body>
      </html>
    `;

    const filename = reviewMode === "sentence" 
      ? `review_sentence_page_${currentPage}.html` 
      : `page_${currentPage}.html`;
    downloadHtml(filename, html);
  }

  // 音频拖拽（仅 UI）
  function onAudioFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const f = files[0];
    if (!f.type.startsWith("audio/")) {
      setAudioHint(songPageTranslations['ko'].audioOnly);
      return;
    }
    setAudioFile(f);
    // 如果已经有分析结果，在提示中提醒
    if (opalPayload && opalPayload.status === 'ok' && opalPayload.lines && opalPayload.lines.length > 0) {
      setAudioHint(translate('fileSelectedReplace', { name: f.name }));
    } else {
      setAudioHint(translate('fileSelectedNew', { name: f.name }));
    }
    // ⭐ 上传音频文件后，如果未选择语言，显示提示
    if (!languageMode) {
      setShowLanguageTip(true);
    }
  }

  // 拖拽事件处理
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onAudioFiles(files);
    }
  };

  // ChatGPT API 테스트 함수
  async function testChatGPTAPI() {
    setIsLoading(true);
    setTestResult(null);
    setAudioHint(null);
    
    console.log('🧪 ChatGPT API 테스트 시작...');
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    console.log('API 키 확인:', apiKey ? `✅ 설정됨 (${apiKey.substring(0, 10)}...)` : '❌ 없음');
    console.log('API 키 전체:', apiKey || '(없음)');
    console.log('API URL:', import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1');
    
    try {
      const testText = "안녕하세요\n만나서 반갑습니다";
      console.log('📤 테스트 텍스트 전송:', testText);
      
      const startTime = Date.now();
      const result = await callChatGPTApiWithText(testText, 'ko');
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      console.log('📥 ChatGPT API 응답 받음:', result);
      console.log('⏱️ 응답 시간:', `${duration}ms`);
      console.log('📊 응답 상태:', result.status);
      console.log('📝 응답 라인 수:', result.lines?.length || 0);
      
      if (result.status === 'ok') {
        setTestResult(`✅ 성공! 응답 시간: ${duration}ms, 라인 수: ${result.lines?.length || 0}`);
        // ⭐ 调试日志：排查并发请求覆盖问题
        try {
          const firstLine = (result as any)?.lines?.[0];
          const t = firstLine?.tokensZh ?? [];
          console.log("🧾 [B] about to setOpalPayload", {
            requestId: "NO_REQUEST_ID_IN_SCOPE",
            zhSentence: firstLine?.zhSentence,
            tokensZhLen: t.length,
            tokensZhHead: t.slice(0, 10).map((x: any) => x?.text),
          });
        } catch (e) {
          console.warn("🧾 [B] log failed", e);
        }
        
        // ⭐ 一致性校验与修复：确保 tokensZh 与 zhSentence 一致
        ensureTokensZhConsistency(result);
        
        // ⭐ 如果是中文音频，调整时间戳
        if (result.status === 'ok' && result.lines && result.lines.length > 0 && languageMode === 'zh') {
          result.lines.forEach((line: any, index: number) => {
            // 每句结束时间戳提前0.5秒
            if (line.endSec !== undefined && line.endSec > 0) {
              line.endSec = Math.max(0, line.endSec - 0.5);
            }
            // 每句开始时间戳提前0.3秒（第一句如果是0则不变）
            if (index === 0 && line.startSec === 0) {
              // 第一句且开始时间是0，保持不变
              // 不需要做任何操作
            } else if (line.startSec !== undefined && line.startSec > 0) {
              line.startSec = Math.max(0, line.startSec - 0.3);
            }
          });
        }
        
        setOpalPayload(result);
        setAudioHint(`테스트 성공! ${result.lines?.length || 0}개 라인 분석 완료.`);
      } else {
        setTestResult(`❌ 실패: ${result.message || '알 수 없는 오류'}`);
        setAudioHint(result.message || 'ChatGPT API 테스트 실패');
      }
    } catch (error) {
      console.error('❌ 테스트 오류:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      setTestResult(`❌ 오류: ${errorMessage}`);
      setAudioHint(`테스트 실패: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }

  // 暂停分析
  function handleCancelAnalysis() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);
    setLoadingProgress(0);
    setLoadingMessage("분석이 취소됐어요");
    setTimeout(() => {
      setLoadingMessage("");
    }, 2000);
  }

  // API 호출 (ChatGPT 우선, Opal 대체, Mock 폴백)
  async function onClickTranscribe() {
    // 如果正在分析，则暂停
    if (isLoading) {
      handleCancelAnalysis();
      return;
    }
    
    // ⭐ 生成 requestId
    const requestId = Date.now();
    console.log(`🆔 [Request Start] requestId: ${requestId}`);
    
    // 检查是否选择了中文水平
    if (!userLevel) {
      setShowLevelWarning(true);
      // 3秒后自动隐藏提示
      setTimeout(() => setShowLevelWarning(false), 3000);
      return;
    }
    setShowLevelWarning(false);
    
    // 如果已经有分析结果，显示确认提示
    if (opalPayload && opalPayload.status === 'ok' && opalPayload.lines && opalPayload.lines.length > 0) {
      const confirmed = window.confirm(songPageTranslations['ko'].confirmReplace);
      if (!confirmed) {
        return; // 用户取消，不执行分析
      }
    }
    
    // 创建新的AbortController
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingMessage("");
    setAudioHint(null);
    setTestResult(null);
    
    // 清除之前的分析结果
    setOpalPayload(null);
    setOriginalText(""); // 清除原始文本
    setTranscribedText(""); // 清除转写文本
    setPage(1);
    
    try {
      let result: SongPayload;
      
      // ChatGPT API 키가 설정되어 있으면 ChatGPT 사용, 아니면 Opal 사용
      const useChatGPT = import.meta.env.VITE_OPENAI_API_KEY && 
                         import.meta.env.VITE_OPENAI_API_KEY !== 'your-openai-api-key-here';
      
      console.log('🔍 사용할 API:', useChatGPT ? 'ChatGPT' : 'Opal');
      
      // 오디오 파일이 있으면 오디오 API 호출 (오디오 우선)
      if (audioFile) {
        console.log('🎵 오디오 파일 분석 시작...');
        setLoadingMessage("음성 파일 전사 중... (0%)");
        setLoadingProgress(10);
        
        if (useChatGPT) {
          setLoadingMessage("Whisper API로 음성 전사 중... (20%)");
          setLoadingProgress(20);
          
          // 음성 전사 단계 (20-50%)
          setLoadingMessage("음성 파일을 텍스트로 변환 중... (30%)");
          setLoadingProgress(30);
          
          // 检查语言是否已选择
          if (!languageMode || (languageMode !== 'ko' && languageMode !== 'zh')) {
            alert(songPageTranslations['ko'].selectAudioLang);
            setIsLoading(false);
            setLoadingProgress(0);
            setLoadingMessage("");
            return;
          }
          
          // 检查是否已取消
          if (signal.aborted) {
            console.log('分析已取消');
            return;
          }
          
          // 使用优化后的函数，只调用一次 Whisper API，同时获取转写文本和分析结果
          const { result: apiResult, transcribedText: transcribed, detectedLang: whisperDetectedLang } = 
            await callChatGPTApiWithAudioAndTranscription(audioFile, languageMode, requestId, signal);
          
          // 保存检测到的语言（确保格式统一为 'ko' 或 'zh'）
          const normalizedDetectedLang = normalizeLanguage(whisperDetectedLang) || whisperDetectedLang;
          setDetectedLanguage(normalizedDetectedLang || null);
          
          // 保存转写文本（用于中文输入时直接显示）
          setTranscribedText(transcribed);
          
          result = apiResult;
          
          setLoadingMessage("가사 분석 중... (80%)");
          setLoadingProgress(80);
        } else {
          setLoadingMessage("음성 분석 중... (50%)");
          setLoadingProgress(50);
          result = await callOpalApiWithAudio(audioFile);
        }
      } 
      // 텍스트가 있으면 텍스트 API 호출 (텍스트만 입력한 경우)
      else if (rawText.trim()) {
        console.log('📝 텍스트 분석 시작...', rawText.substring(0, 50));
        setLoadingMessage("텍스트 분석 준비 중... (10%)");
        setLoadingProgress(10);
        
        // 保存原始文本（用于中文输入时直接显示）
        setOriginalText(rawText.trim());
        
        // 检测输入语言
        const isChineseInput = /[\u4e00-\u9fff]/.test(rawText.trim());
        const detectedLang = isChineseInput ? 'zh' : 'ko';
        
        if (useChatGPT) {
          setLoadingMessage("가사 분석 중... (30%)");
          setLoadingProgress(30);
          
          // 检查是否已取消
          if (signal.aborted) {
            console.log('분석이 취소 되었습니다');
            return;
          }
          
          // ChatGPT API로 텍스트 분석
          result = await callChatGPTApiWithText(rawText.trim(), detectedLang, requestId, signal);
          
          setLoadingMessage("분석 결과 처리 중... (80%)");
          setLoadingProgress(80);
        } else {
          setLoadingMessage("텍스트 분석 중... (50%)");
          setLoadingProgress(50);
          result = await callOpalApiWithText(rawText.trim());
        }
      }
      // 둘 다 없으면 Mock 데이터 사용 (개발용)
      else {
        console.log('📦 Mock 데이터 사용 (입력 없음)');
        setAudioHint('음성 파일을 업로드하거나 가사 텍스트를 입력해주세요.');
        result = opalMockOk;
      }
      
      setLoadingMessage("데이터 처리 중... (90%)");
      setLoadingProgress(90);
      
      console.log('✅ API 응답 받음:', result);
      console.log(`🆔 [setState Before] requestId: ${requestId}, 准备写入 setOpalPayload`);
      // ⭐ 调试日志：排查并发请求覆盖问题
      try {
        const firstLine = (result as any)?.lines?.[0];
        const t = firstLine?.tokensZh ?? [];
        console.log("🧾 [B] about to setOpalPayload", {
          requestId: requestId ?? "NO_REQUEST_ID_IN_SCOPE",
          zhSentence: firstLine?.zhSentence,
          tokensZhLen: t.length,
          tokensZhHead: t.slice(0, 10).map((x: any) => x?.text),
        });
      } catch (e) {
        console.warn("🧾 [B] log failed", e);
      }
      
      // ⭐ 一致性校验与修复：确保 tokensZh 与 zhSentence 一致
      if (result.status === 'ok' && result.lines && result.lines.length > 0) {
        const normalize = (s: string): string => {
          if (!s) return '';
          // 去空格 + 去常见标点
          return s.replace(/\s+/g, '').replace(/[，。！？、；：,.!?;:]/g, '');
        };
        
        const segmentChineseWords = (text: string): string[] => {
          if (!text) return [];
          
          try {
            // 使用 Intl.Segmenter（如果支持）
            if ('Segmenter' in Intl) {
              const segmenter = new (Intl as any).Segmenter('zh', { granularity: 'word' });
              const segments = Array.from(segmenter.segment(text)) as Array<{ segment: string }>;
              const words = segments
                .map(seg => seg.segment)
                .filter(word => word.trim().length > 0);
              
              // 如果 Segmenter 返回的词太长（超过2个字符），进一步按字符分割
              const result: string[] = [];
              words.forEach(word => {
                if (word.length > 2) {
                  // 按字符分割
                  for (let i = 0; i < word.length; i++) {
                    const char = word[i];
                    if (/[\u4e00-\u9fff]/.test(char)) {
                      result.push(char);
                    } else if (char.trim()) {
                      result.push(char);
                    }
                  }
                } else {
                  result.push(word);
                }
              });
              return result.filter(w => w.trim().length > 0);
            }
          } catch (e) {
            console.warn('Intl.Segmenter not supported, using fallback');
          }
          
          // Fallback: 按字符分割（每个中文字符作为一个词）
          const words: string[] = [];
          for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (/[\u4e00-\u9fff]/.test(char)) {
              words.push(char);
            } else if (char.trim()) {
              words.push(char);
            }
          }
          return words.filter(w => w.trim().length > 0);
        };
        
        result.lines.forEach((line: any, index: number) => {
          const zhSentence = line.zhSentence || '';
          const tokensZh = line.tokensZh || [];
          
          if (!zhSentence) return; // 跳过没有中文句子的行
          
          // 计算 tokensZh 连接后的字符串（忽略空格/标点）
          const joinTokens = tokensZh.map((t: any) => t?.text || '').join('');
          const normalizedTokens = normalize(joinTokens);
          const normalizedSentence = normalize(zhSentence);
          
          // 如果不一致，以 zhSentence 为准重建 tokensZh
          if (normalizedTokens !== normalizedSentence) {
            console.warn(`⚠️ [Token Consistency] line[${index}] tokensZh 与 zhSentence 不一致，正在修复...`, {
              zhSentence: zhSentence.substring(0, 30),
              tokensZhJoin: joinTokens.substring(0, 30),
              normalizedSentence,
              normalizedTokens,
            });
            
            // 以 zhSentence 为准重建 tokensZh
            const segmentedWords = segmentChineseWords(zhSentence);
            line.tokensZh = segmentedWords.map((word: string) => {
              // 尝试从原有 tokensZh 中查找匹配的 token（保留原有信息）
              const existingToken = tokensZh.find((t: any) => t?.text === word);
              if (existingToken) {
                return existingToken;
              }
              // 创建新的 token
              return {
                text: word,
                glossZh: "",
                glossKr: "",
                example: "",
                pinyin: "",
              };
            });
            
            console.log(`✅ [Token Consistency] line[${index}] 修复完成，新 tokensZh 数量:`, line.tokensZh.length);
          }
        });
      }
      
      // ⭐ 如果是中文音频，调整时间戳
      if (result.status === 'ok' && result.lines && result.lines.length > 0 && languageMode === 'zh') {
        result.lines.forEach((line: any, index: number) => {
          // 每句结束时间戳提前0.5秒
          if (line.endSec !== undefined && line.endSec > 0) {
            line.endSec = Math.max(0, line.endSec - 0.5);
          }
          // 每句开始时间戳提前0.3秒（第一句如果是0则不变）
          if (index === 0 && line.startSec === 0) {
            // 第一句且开始时间是0，保持不变
          } else if (line.startSec !== undefined && line.startSec > 0) {
            line.startSec = Math.max(0, line.startSec - 0.3);
          }
        });
        console.log('⏰ [中文音频] 已将所有句子的开始时间戳提前0.3秒（第一句为0时不变），结束时间戳提前0.5秒');
      }
      
      setOpalPayload(result);
      
      setLoadingMessage("완료! (100%)");
      setLoadingProgress(100);
      
      // 실패 시 힌트 표시
      if (result.status === 'failed') {
        setAudioHint(result.message || '분석에 실패했습니다.');
      } else {
        console.log(`✅ 분석 완료: ${result.lines?.length || 0}개 라인`);
        setLoadingMessage(`✅ 분석 완료: ${result.lines?.length || 0}개 라인`);
      }
      
      // 완료 후 잠시 표시
      setTimeout(() => {
        setLoadingMessage("");
      }, 2000);
    } catch (error: any) {
      // 如果是取消操作，不显示错误
      if (error?.name === 'AbortError' || signal?.aborted) {
        console.log('分析已取消');
        return;
      }
      
      console.error('❌ API 호출 오류:', error);
      setLoadingMessage("❌ 오류 발생");
      setLoadingProgress(0);
      setAudioHint('API 호출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      // 에러 발생 시 Mock 데이터로 폴백
      console.log(`🆔 [setState Before] requestId: ${requestId}, 准备写入 setOpalPayload (Mock 数据)`);
      // ⭐ 调试日志：排查并发请求覆盖问题
      try {
        const firstLine = (opalMockOk as any)?.lines?.[0];
        const t = firstLine?.tokensZh ?? [];
        console.log("🧾 [B] about to setOpalPayload", {
          requestId: requestId ?? "NO_REQUEST_ID_IN_SCOPE",
          zhSentence: firstLine?.zhSentence,
          tokensZhLen: t.length,
          tokensZhHead: t.slice(0, 10).map((x: any) => x?.text),
        });
      } catch (e) {
        console.warn("🧾 [B] log failed", e);
      }
      
      // ⭐ 一致性校验与修复：确保 tokensZh 与 zhSentence 一致（Mock 数据也需要修复）
      ensureTokensZhConsistency(opalMockOk);
      
      setOpalPayload(opalMockOk);
    } finally {
      // 只有在没有取消的情况下才清理
      if (!signal?.aborted) {
        setIsLoading(false);
        setTimeout(() => {
          setLoadingProgress(0);
          setLoadingMessage("");
        }, 2000);
      }
      abortControllerRef.current = null;
    }
  }

  // 대화 생성 함수
  async function handleCreateDialogue(word: string) {
    setIsGeneratingDialogue(true);
    setSelectedWord(word);
    setDialogueResult(null);
    
    try {
      const result = await createDialogue(word);
      setDialogueResult(result);
    } catch (error) {
      console.error('대화 생성 오류:', error);
      setAudioHint(error instanceof Error ? error.message : '대화 생성 중 오류가 발생했습니다.');
    } finally {
      setIsGeneratingDialogue(false);
    }
  }

  // 词汇项组件
  function VocabularyItem({ vocab }: { vocab: { word: string; hskLevel: string; pinyin?: string; korean?: string } }) {
    const [isStarred, setIsStarred] = useState(() => {
      const starredWords = JSON.parse(localStorage.getItem('starredWords') || '[]');
      return starredWords.includes(vocab.word);
    });
    
    const toggleStar = () => {
      const starredWords = JSON.parse(localStorage.getItem('starredWords') || '[]');
      let newStarredWords: string[];
      if (isStarred) {
        newStarredWords = starredWords.filter((w: string) => w !== vocab.word);
      } else {
        newStarredWords = [...starredWords, vocab.word];
      }
      localStorage.setItem('starredWords', JSON.stringify(newStarredWords));
      setIsStarred(!isStarred);
    };
    
    return (
      <div className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
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
        <button
          onClick={toggleStar}
          className={`px-2 py-1 rounded transition-colors ${
            isStarred 
              ? "text-pink-500" 
              : "text-gray-300 hover:text-pink-400"
          }`}
          title={isStarred ? "즐겨찾기 해제" : "즐겨찾기"}
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
      </div>
    );
  }
  
  // 句型项组件
  function PatternItem({ pattern }: { pattern: { pattern: string; hskLevel: string; korean?: string; chineseExample?: string; koreanExample?: string } }) {
    const [isStarred, setIsStarred] = useState(() => {
      const starredPatterns = JSON.parse(localStorage.getItem('starredPatterns') || '[]');
      return starredPatterns.includes(pattern.pattern);
    });
    
    const toggleStar = () => {
      const starredPatterns = JSON.parse(localStorage.getItem('starredPatterns') || '[]');
      let newStarredPatterns: string[];
      if (isStarred) {
        newStarredPatterns = starredPatterns.filter((p: string) => p !== pattern.pattern);
      } else {
        newStarredPatterns = [...starredPatterns, pattern.pattern];
      }
      localStorage.setItem('starredPatterns', JSON.stringify(newStarredPatterns));
      setIsStarred(!isStarred);
    };
    
    return (
      <div className="p-3 bg-white rounded border border-gray-200">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
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
              <div className="text-sm text-gray-700">
                {pattern.koreanExample}
              </div>
            )}
          </div>
          <button
            onClick={toggleStar}
            className={`px-2 py-1 rounded transition-colors ${
              isStarred 
                ? "text-pink-500" 
                : "text-gray-300 hover:text-pink-400"
            }`}
            title={isStarred ? "즐겨찾기 해제" : "즐겨찾기"}
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
        </div>
      </div>
    );
  }

  // 整段学习视图组件
  function WholeParagraphView({
    linesAll,
    audioFile,
    audioUrl,
    opalPayload,
    rawText,
    transcribedText,
    translationCache,
    originalText,
    userLevel,
  }: {
    linesAll: any[];
    audioFile: File | null;
    audioUrl?: string;
    opalPayload: SongPayload | null;
    rawText: string;
    transcribedText: string;
    translationCache: Record<string, string>;
    originalText: string;
    userLevel: "初级" | "中级" | "高级" | null;
  }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [currentPlayingLineNo, setCurrentPlayingLineNo] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioDuration, setAudioDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const blobUrlRef = useRef<string | null>(null);
    const lineRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [vocabSearch, setVocabSearch] = useState("");
    const [patternSearch, setPatternSearch] = useState("");
    const [showVocabSummary, setShowVocabSummary] = useState(true);
    const [showPatternSummary, setShowPatternSummary] = useState(true);
    // 词汇展开状态：控制每个组的展开/收起
    const [vocabGroupExpanded, setVocabGroupExpanded] = useState({
      current: true,    // 当前重点默认展开
      advanced: false,  // 提升词默认收起
      basic: false     // 基础词默认收起
    });

    // 时间格式化函数：将秒数转换为 "分:秒" 格式
    const formatTime = (seconds: number): string => {
      if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // 根据时间找到对应的歌词行
    const findLineByTime = (time: number): number | null => {
      const line = linesAll.find((line: any) => {
        const startSec = line?.startSec ?? 0;
        const endSec = line?.endSec ?? 0;
        return time >= startSec && time < endSec;
      });
      return line ? Number(line?.lineNo ?? 0) : null;
    };

    // 根据 HSK 等级返回难度背景色（初级绿、中级蓝、高级紫）
    const getHskBgClass = (hskLevel: number | undefined): string => {
      if (hskLevel == null) return '';
      if (hskLevel <= 2) return 'bg-green-100';
      if (hskLevel <= 4) return 'bg-blue-100';
      return 'bg-purple-100';
    };

    // 获取句子的拼音（从 tokens 或 chunks 中提取）
    const getPinyinForSentence = (line: any): string => {
      const data = opalLineToSentenceData(line);
      // 优先从 tokens 中提取拼音
      if (data.tokens && data.tokens.length > 0) {
        const pinyinArray = data.tokens
          .map((token: any) => token.pinyin || '')
          .filter((p: string) => p.trim().length > 0);
        if (pinyinArray.length > 0) {
          return pinyinArray.join(' ');
        }
      }
      // 如果 tokens 没有拼音，从 chunks 中提取
      if (data.chunks && data.chunks.length > 0) {
        const pinyinArray = data.chunks
          .map((chunk: any) => chunk.pinyin || '')
          .filter((p: string) => p.trim().length > 0);
        if (pinyinArray.length > 0) {
          return pinyinArray.join(' ');
        }
      }
      return '';
    };

    // 初始化音频
    useEffect(() => {
      if (!audioFile && !audioUrl) return;

      const audio = new Audio();
      let blobUrl: string | null = null;
      
      if (audioFile) {
        blobUrl = URL.createObjectURL(audioFile);
        audio.src = blobUrl;
        blobUrlRef.current = blobUrl;
      } else if (audioUrl) {
        audio.src = audioUrl;
      }

      audioRef.current = audio;

      // 播放状态同步
      const handlePlay = () => {
        setIsPlaying(true);
      };
      
      const handlePause = () => {
        setIsPlaying(false);
      };

      audio.addEventListener('loadedmetadata', () => {
        setAudioDuration(audio.duration);
      });

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);

      audio.addEventListener('timeupdate', () => {
        // 更新当前播放时间（只有在不拖动时才更新，避免拖动时闪烁）
        if (!isDragging) {
          setCurrentTime(audio.currentTime);
        }

        // 找到当前播放时间对应的句子
        const currentLine = linesAll.find((line: any) => {
          const startSec = line?.startSec ?? 0;
          const endSec = line?.endSec ?? 0;
          return audio.currentTime >= startSec && audio.currentTime < endSec;
        });

        if (currentLine) {
          const lineNo = Number(currentLine?.lineNo ?? 0);
          if (lineNo !== currentPlayingLineNo) {
            setCurrentPlayingLineNo(lineNo);
            // 自动滚动到当前句
            scrollToCurrentLine(lineNo);
          }
        } else {
          // 如果找不到匹配的行，可能是播放到最后了
          if (audio.currentTime >= audio.duration - 0.1) {
            setCurrentPlayingLineNo(null);
          }
        }
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentPlayingLineNo(null);
        setCurrentTime(0);
      });

      // 错误处理
      audio.addEventListener('error', (e) => {
        console.error('音频播放错误:', e);
        setIsPlaying(false);
      });

      return () => {
        audio.pause();
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.src = '';
        // 清理 blob URL
        if (blobUrlRef.current) {
          URL.revokeObjectURL(blobUrlRef.current);
          blobUrlRef.current = null;
        }
      };
    }, [audioFile, audioUrl, linesAll, isDragging]);

    // 自动滚动到当前句（相对于卡片容器，不是整个页面）
    const scrollToCurrentLine = (lineNo: number) => {
      const lineElement = lineRefs.current[lineNo];
      const container = scrollContainerRef.current;
      
      if (!lineElement || !container) return;
      
      const totalLines = linesAll.length;
      const isFirstLine = lineNo === 1;
      const isLastLine = lineNo === totalLines;
      
      // 第一句：滚动到顶部
      if (isFirstLine) {
        container.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      // 最后一句：滚动到底部
      if (isLastLine) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
        return;
      }
      
      // 其他句子：保持在卡片容器中间
      const containerRect = container.getBoundingClientRect();
      const lineRect = lineElement.getBoundingClientRect();
      
      // 计算目标滚动位置：让句子在容器中间
      const containerCenter = containerRect.height / 2;
      const lineOffset = lineRect.top - containerRect.top;
      const currentScroll = container.scrollTop;
      
      // 目标位置：当前滚动位置 + 句子相对于容器的偏移 - 容器中心 + 句子高度的一半
      const targetScroll = currentScroll + lineOffset - containerCenter + (lineRect.height / 2);
      
      container.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    };

    // 播放/暂停控制
    const togglePlay = async () => {
      if (!audioRef.current) return;
      
      try {
        if (isPlaying) {
          // 暂停当前音频
          audioManager.pauseCurrentAudio();
          setIsPlaying(false);
        } else {
          // 使用 audioManager 播放（会自动停止其他音频）
          audioManager.playAudio(audioRef.current);
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('播放失败:', error);
        setIsPlaying(false);
      }
    };

    // 监听 audioManager 的音频变化，同步播放状态
    useEffect(() => {
      const handleAudioChange = (currentAudio: HTMLAudioElement | null) => {
        if (currentAudio === audioRef.current) {
          // 当前音频正在播放
          if (audioRef.current) {
            setIsPlaying(!audioRef.current.paused);
          }
        } else {
          // 其他音频正在播放，停止当前音频
          if (audioRef.current && !audioRef.current.paused) {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }
      };

      audioManager.setOnAudioChange(handleAudioChange);

      return () => {
        audioManager.setOnAudioChange(() => {});
      };
    }, []);

    // 处理进度条拖动
    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!audioRef.current) return;
      
      const newTime = parseFloat(e.target.value);
      setCurrentTime(newTime);
      
      // 找到对应时间的歌词行
      const lineNo = findLineByTime(newTime);
      if (lineNo) {
        setCurrentPlayingLineNo(lineNo);
        scrollToCurrentLine(lineNo);
      }
    };

    // 开始拖动
    const handleProgressMouseDown = () => {
      setIsDragging(true);
    };

    // 结束拖动，跳转到新位置
    const handleProgressMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
      if (!audioRef.current) return;
      
      const newTime = parseFloat((e.target as HTMLInputElement).value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setIsDragging(false);
      
      // 找到对应时间的歌词行
      const lineNo = findLineByTime(newTime);
      if (lineNo) {
        setCurrentPlayingLineNo(lineNo);
        scrollToCurrentLine(lineNo);
      }
    };

    // 处理进度条点击（点击进度条任意位置跳转）
    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!audioRef.current || !audioDuration) return;
      
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = Math.max(0, Math.min(audioDuration, percentage * audioDuration));
      
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      
      // 找到对应时间的歌词行
      const lineNo = findLineByTime(newTime);
      if (lineNo) {
        setCurrentPlayingLineNo(lineNo);
        scrollToCurrentLine(lineNo);
      }
    };

    // 处理句子点击：跳转到该句子的起始位置并开始播放（只在点击空白处时触发）
    const handleLineClick = (e: React.MouseEvent<HTMLElement>, lineNo: number) => {
      // 检查点击的目标元素，如果是词卡相关元素或TTS按钮，则不触发音频跳转
      const target = e.target as HTMLElement;
      if (target && (
        target.closest('[data-word]') || // 词卡元素
        target.closest('[data-word-tooltip]') || // 词卡工具提示
        target.hasAttribute('data-word') || // 直接点击词卡
        target.closest('.word-tooltip') || // 词卡容器
        target.closest('button') && target.closest('button')?.querySelector('svg') // TTS按钮
      )) {
        // 点击的是词卡或按钮，不触发音频跳转
        return;
      }
      
      const line = linesAll.find((l: any) => Number(l?.lineNo ?? 0) === lineNo);
      if (!line) return;
      
      // 默认情况下，如果有原唱，播放原唱
      if (audioRef.current) {
        const startSec = line?.startSec ?? 0;
        if (startSec >= 0 && startSec < audioDuration) {
          audioRef.current.currentTime = startSec;
          setCurrentTime(startSec);
          setCurrentPlayingLineNo(lineNo);
          scrollToCurrentLine(lineNo);
          
          // 使用 audioManager 播放（会自动停止其他音频和TTS）
          audioManager.playAudio(audioRef.current);
          setIsPlaying(true);
        }
      }
    };

    // 汇总所有词汇（去重）
    const allVocabulary = useMemo(() => {
      const vocabMap = new Map<string, any>();
      
      linesAll.forEach((line: any) => {
        const data = opalLineToSentenceData(line);
        // 从 tokens 中提取词汇
        if (data.tokens && data.tokens.length > 0) {
          data.tokens.forEach((token: any) => {
            const word = token.text?.trim();
            if (word && !vocabMap.has(word)) {
              vocabMap.set(word, {
                word: word,
                pinyin: token.pinyin || "",
                korean: token.glossKr || "",
                example: token.example || "",
                hskLevel: token.hskLevel || 1,
              });
            }
          });
        }
        // 从 chunks 中提取词汇
        if (data.chunks && data.chunks.length > 0) {
          data.chunks.forEach((chunk: any) => {
            const word = chunk.text?.trim();
            if (word && !vocabMap.has(word)) {
              vocabMap.set(word, {
                word: word,
                pinyin: chunk.pinyin || "",
                korean: chunk.explanation || "",
                example: "",
                hskLevel: chunk.hskLevel || 1,
              });
            }
          });
        }
      });
      
      return Array.from(vocabMap.values());
    }, [linesAll]);

    // 按 HSK 级别分组词汇
    const vocabularyByHSK = useMemo(() => {
      const grouped: Record<number, any[]> = {};
      allVocabulary.forEach(vocab => {
        const level = vocab.hskLevel || 1;
        if (!grouped[level]) grouped[level] = [];
        grouped[level].push(vocab);
      });
      return grouped;
    }, [allVocabulary]);

    // 根据用户等级将词汇分为三组：当前重点、提升词、基础词
    const vocabularyGroups = useMemo(() => {
      if (!userLevel) {
        // 如果没有选择等级，所有词汇都归为"当前重点"
        return {
          current: allVocabulary,
          advanced: [],
          basic: []
        };
      }

      // 定义等级对应的HSK级别范围
      const levelRanges: Record<string, { current: number[], advanced: number[], basic: number[] }> = {
        "初级": {
          current: [1, 2],      // HSK 1-2
          advanced: [3, 4],     // HSK 3-4
          basic: []             // 无基础词
        },
        "中级": {
          current: [3, 4],      // HSK 3-4
          advanced: [5, 6],     // HSK 5-6
          basic: [1, 2]         // HSK 1-2
        },
        "高级": {
          current: [5, 6],      // HSK 5-6
          advanced: [],         // 无提升词
          basic: [1, 2, 3, 4]   // HSK 1-4
        }
      };

      const ranges = levelRanges[userLevel];
      if (!ranges) {
        return {
          current: allVocabulary,
          advanced: [],
          basic: []
        };
      }

      const currentVocab: any[] = [];
      const advancedVocab: any[] = [];
      const basicVocab: any[] = [];

      allVocabulary.forEach(vocab => {
        const hskLevel = vocab.hskLevel || 1;
        
        // 当前重点
        if (ranges.current.includes(hskLevel)) {
          currentVocab.push(vocab);
        }
        // 提升词
        else if (Array.isArray(ranges.advanced) && ranges.advanced.length > 0 && ranges.advanced.includes(hskLevel)) {
          advancedVocab.push(vocab);
        }
        // 基础词
        else if (Array.isArray(ranges.basic) && ranges.basic.length > 0) {
          if (ranges.basic.includes(hskLevel)) {
            basicVocab.push(vocab);
          }
        }
      });

      return {
        current: currentVocab,
        advanced: advancedVocab,
        basic: basicVocab
      };
    }, [allVocabulary, userLevel]);

    // 处理词汇组展开/收起按钮点击
    const handleVocabGroupToggle = (group: 'current' | 'advanced' | 'basic') => {
      setVocabGroupExpanded(prev => ({
        ...prev,
        [group]: !prev[group]
      }));
    };

    // 汇总所有句型（去重）
    const allPatterns = useMemo(() => {
      const patternMap = new Map<string, any>();
      
      linesAll.forEach((line: any) => {
        const data = opalLineToSentenceData(line);
        if (data.chunks && data.chunks.length > 0) {
          data.chunks.forEach((chunk: any) => {
            const pattern = chunk.text?.trim();
            if (pattern && !patternMap.has(pattern)) {
              patternMap.set(pattern, {
                pattern: pattern,
                korean: chunk.explanation || "",
                chineseExample: "",
                koreanExample: "",
                hskLevel: chunk.hskLevel || 1,
              });
            }
          });
        }
      });
      
      return Array.from(patternMap.values());
    }, [linesAll]);

    // 按 HSK 级别分组句型
    const patternsByHSK = useMemo(() => {
      const grouped: Record<number, any[]> = {};
      allPatterns.forEach(pattern => {
        const level = pattern.hskLevel || 1;
        if (!grouped[level]) grouped[level] = [];
        grouped[level].push(pattern);
      });
      return grouped;
    }, [allPatterns]);

    // 合并所有句子的拼音和声调
    const mergedPinyin = useMemo(() => {
      const allPinyin: string[] = [];
      linesAll.forEach((line: any) => {
        const data = opalLineToSentenceData(line);
        if (data.chunks && data.chunks.length > 0) {
          data.chunks.forEach((chunk: any) => {
            if (chunk.pinyin) {
              allPinyin.push(chunk.pinyin);
            }
          });
        }
      });
      return allPinyin.join(' ');
    }, [linesAll]);

    const mergedTones = useMemo(() => {
      const allTones: string[] = [];
      linesAll.forEach((line: any) => {
        const data = opalLineToSentenceData(line);
        if (data.chunks && data.chunks.length > 0) {
          data.chunks.forEach((chunk: any) => {
            if (chunk.tones) {
              allTones.push(chunk.tones);
            }
          });
        }
      });
      return allTones.join('-');
    }, [linesAll]);

    // 计算整体 HSK 级别（取最高）
    const overallHSKLevel = useMemo(() => {
      let maxLevel = 1;
      linesAll.forEach((line: any) => {
        const data = opalLineToSentenceData(line);
        if (data.chunks && data.chunks.length > 0) {
          data.chunks.forEach((chunk: any) => {
            if (chunk.hskLevel && chunk.hskLevel > maxLevel) {
              maxLevel = chunk.hskLevel;
            }
          });
        }
      });
      return maxLevel;
    }, [linesAll]);

    // 过滤词汇（根据搜索）
    const filteredVocabulary = useMemo(() => {
      if (!vocabSearch.trim()) return allVocabulary;
      const searchLower = vocabSearch.toLowerCase();
      return allVocabulary.filter(vocab => 
        vocab.word.toLowerCase().includes(searchLower) ||
        vocab.pinyin.toLowerCase().includes(searchLower) ||
        vocab.korean.toLowerCase().includes(searchLower)
      );
    }, [allVocabulary, vocabSearch]);

    // 过滤句型（根据搜索）
    const filteredPatterns = useMemo(() => {
      if (!patternSearch.trim()) return allPatterns;
      const searchLower = patternSearch.toLowerCase();
      return allPatterns.filter(pattern => 
        pattern.pattern.toLowerCase().includes(searchLower) ||
        pattern.korean.toLowerCase().includes(searchLower)
      );
    }, [allPatterns, patternSearch]);

    if (linesAll.length === 0) {
      return null;
    }

    return (
      <div className="space-y-6">
        {/* 颜色标记系统 - 爱心形状 */}
        <div className="flex justify-end">
          <div className="flex items-center gap-6">
            {/* 基础 - 淡绿色爱心 */}
            <div className="relative">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#86efac" stroke="#4ade80" strokeWidth="1.5"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-green-600">{songPageTranslations['ko'].basic}</span>
            </div>
            
            {/* 中级 - 淡蓝色爱心 */}
            <div className="relative">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#93c5fd" stroke="#60a5fa" strokeWidth="1.5"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-blue-600">{songPageTranslations['ko'].intermediate}</span>
            </div>
            
            {/* 高级 - 淡紫色爱心 */}
            <div className="relative">
              <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#c4b5fd" stroke="#a78bfa" strokeWidth="1.5"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-purple-600">{songPageTranslations['ko'].advanced}</span>
            </div>
          </div>
        </div>
        
        {/* 大卡片容器 */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
          {/* 头部 */}
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-2xl">📖</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{songPageTranslations['ko'].wholeParagraphLyrics}</h3>
                  <p className="text-sm text-blue-100">{translate('totalSentences', { count: linesAll.length })}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* 原唱按钮 */}
                {(audioFile || audioUrl) && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className={`
                        inline-flex items-center justify-center gap-1
                        px-2 py-1 rounded-lg
                        ${isPlaying
                          ? 'bg-indigo-200 hover:bg-indigo-300 text-indigo-800'
                          : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
                        }
                        transition-colors duration-200
                        text-sm font-medium
                      `}
                      title={isPlaying ? songPageTranslations['ko'].pauseOriginal : songPageTranslations['ko'].playOriginal}
                      aria-label={isPlaying ? songPageTranslations['ko'].pauseOriginal : songPageTranslations['ko'].playOriginal}
                    >
                      {isPlaying ? (
                        // 暂停图标
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        // 播放图标
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <span>{isPlaying ? songPageTranslations['ko'].pauseOriginal : songPageTranslations['ko'].playOriginal}</span>
                    </button>
                    
                    {/* 时间显示 */}
                    {audioDuration > 0 && (
                      <div className="text-sm font-mono text-white/90">
                        {formatTime(currentTime)} / {formatTime(audioDuration)}
                      </div>
                    )}
                  </>
                )}
                <svg 
                  className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {/* 进度条 */}
            {(audioFile || audioUrl) && audioDuration > 0 && (
              <div 
                className="mt-3 px-2 relative"
                onClick={(e) => {
                  e.stopPropagation(); // 阻止点击进度条时折叠卡片
                  handleProgressClick(e);
                }}
              >
                <input
                  type="range"
                  min="0"
                  max={audioDuration || 0}
                  step="0.1"
                  value={currentTime}
                  onChange={handleProgressChange}
                  onMouseDown={handleProgressMouseDown}
                  onMouseUp={handleProgressMouseUp}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer relative z-10"
                  style={{
                    background: `linear-gradient(to right, white 0%, white ${(currentTime / audioDuration) * 100}%, rgba(255,255,255,0.3) ${(currentTime / audioDuration) * 100}%, rgba(255,255,255,0.3) 100%)`
                  }}
                />
                <style>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  }
                  input[type="range"]::-moz-range-thumb {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  }
                `}</style>
              </div>
            )}
          </div>

          {/* 歌词滚动区域 */}
          {isExpanded && (
            <div 
              ref={scrollContainerRef}
              className="max-h-[600px] overflow-y-auto p-6 space-y-2"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#cbd5e0 #f7fafc',
              }}
            >
              {linesAll.map((line: any, index: number) => {
                const lineNo = Number(line?.lineNo ?? index + 1);
                const isCurrentLine = currentPlayingLineNo === lineNo;
                const data = opalLineToSentenceData(line);
                const displayLine = String(line?.displayLine ?? "");
                const zhSentence = String(line?.zhSentence ?? data.sentence ?? "");
                const pinyin = getPinyinForSentence(line);

                return (
                  <div
                    key={`whole-para-${lineNo}`}
                    ref={(el) => {
                      lineRefs.current[lineNo] = el;
                    }}
                    onClick={(e) => handleLineClick(e, lineNo)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      isCurrentLine
                        ? 'bg-blue-100 border-blue-400 scale-[1.02] shadow-md'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ cursor: 'default' }}
                  >
                    <div className="flex items-start gap-3">
                      <span 
                        className="text-sm font-semibold text-gray-500 min-w-[40px] flex-shrink-0 cursor-pointer hover:text-gray-700 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLineClick(e, lineNo);
                        }}
                      >
                        {formatLineNo(lineNo)}
                      </span>
                      <div className="flex-1 space-y-1">
                        {/* 韩文 */}
                        <div className="text-base text-gray-700 leading-relaxed">
                          {displayLine}
                        </div>
                        {/* 中文+拼音：按语义分段对齐 */}
                        <div className="flex items-start gap-2 leading-relaxed">
                          <div className="flex-1 flex flex-wrap items-end gap-x-1 gap-y-2">
                          {(() => {
                            // 优先使用 chunkSegments（语义分段）
                            const chunkSegments = data.chunks?.[0]?.chunkSegments || [];
                            
                            if (chunkSegments.length > 0) {
                              // 按语义分段显示
                              return chunkSegments.map((seg: any, segIdx: number) => {
                                const chunkZh = seg.chunkZh || '';
                                const segPinyin = seg.pinyin || '';
                                
                                // 将 chunkZh 按字符拆分（只保留中文字符）
                                const zhChars = chunkZh.split('').filter((c: string) => /[\u4e00-\u9fff]/.test(c));
                                // 将拼音按空格拆分
                                const pinyinWords = segPinyin.split(/\s+/).filter((p: string) => p.trim());
                                
                                const segBg = getHskBgClass(data.chunks?.[0]?.hskLevel);
                                // 如果字符数和拼音数一致，逐字对齐
                                if (zhChars.length === pinyinWords.length && zhChars.length > 0) {
                                  return (
                                    <div key={`seg-${lineNo}-${segIdx}`} className={`inline-flex flex-wrap items-end gap-x-1 rounded px-0.5 ${segBg}`}>
                                      {zhChars.map((char: string, charIdx: number) => (
                                        <div
                                          key={`char-${lineNo}-${segIdx}-${charIdx}`}
                                          className="inline-flex flex-col items-center justify-end"
                                        >
                                          {/* 拼音 */}
                                          {pinyinWords[charIdx] && (
                                            <span className="text-xs text-gray-500 leading-tight mb-0.5 whitespace-nowrap">
                                              {pinyinWords[charIdx]}
                                            </span>
                                          )}
                                          {/* 中文 */}
                                          <span className="text-xl font-medium text-gray-900">
                                            {char}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  );
                                } else {
                                  // 如果不一致，显示整个分段（拼音在上，汉字在下）
                                  return (
                                    <div key={`seg-${lineNo}-${segIdx}`} className={`inline-flex flex-col items-center justify-end mx-1 rounded px-0.5 ${segBg}`}>
                                      {/* 拼音 */}
                                      {segPinyin && (
                                        <span className="text-xs text-gray-500 leading-tight mb-0.5 whitespace-nowrap">
                                          {segPinyin}
                                        </span>
                                      )}
                                      {/* 中文 */}
                                      <span className="text-xl font-medium text-gray-900">
                                        {chunkZh}
                                      </span>
                                    </div>
                                  );
                                }
                              });
                            }
                            
                            // 如果没有 chunkSegments，回退到 tokens（按 token 难度背景色）
                            if (data.tokens && data.tokens.length > 0) {
                              return data.tokens.map((token: any, tokenIdx: number) => {
                                const tokenText = token.text || '';
                                const tokenPinyin = token.pinyin || '';
                                
                                if (!tokenText.trim()) return null;
                                
                                const tokenBg = getHskBgClass(token.hskLevel);
                                return (
                                  <div
                                    key={`token-${lineNo}-${tokenIdx}`}
                                    className="inline-flex flex-col items-center justify-end"
                                  >
                                    {tokenPinyin && (
                                      <span className="text-xs text-gray-500 leading-tight mb-0.5 whitespace-nowrap">
                                        {tokenPinyin}
                                      </span>
                                    )}
                                    <span className={`text-xl font-medium text-gray-900 rounded px-0.5 ${tokenBg}`}>
                                      {tokenText}
                                    </span>
                                  </div>
                                );
                              });
                            }
                            
                            // 最后回退到原来的显示方式
                            return (
                              <>
                                {pinyin && (
                                  <div className="text-sm text-gray-500 leading-relaxed w-full">
                                    {pinyin}
                                  </div>
                                )}
                                <div className="text-xl font-medium text-gray-900 leading-relaxed w-full">
                                  <SentenceView
                                    sentence={zhSentence}
                                    tokens={data.tokens}
                                    globalActiveTokenId={globalActiveTokenId}
                                    onTokenActivate={(tokenId: string) => setGlobalActiveTokenId(tokenId)}
                                    tokenIdPrefix={`whole-line-${lineNo}`}
                                  />
                                </div>
                              </>
                            );
                            })()}
                          </div>
                          {/* 每句朗读按钮 - 放在右边 */}
                          <div className="flex-shrink-0 mt-1">
                            <TTSButton 
                              text={zhSentence} 
                              lang="zh-CN"
                              className="w-5 h-5 text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-100 rounded-lg p-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 整段学习分析表 */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{songPageTranslations['ko'].wholeAnalysisTable}</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-32">{songPageTranslations['ko'].difficultyLevel}</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-[300px]">{songPageTranslations['ko'].sentencePinyin}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 w-48">{songPageTranslations['ko'].sentenceTonePattern}</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 w-32">{songPageTranslations['ko'].audio}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < overallHSKLevel ? 'bg-green-500' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">HSK {overallHSKLevel}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-700 min-w-[300px] text-center">
                    {mergedPinyin || '—'}
                  </td>
                  <td className="px-4 py-4">
                    {mergedTones ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                        {mergedTones}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {(audioFile || audioUrl) && (
                        <AudioPlayer
                          audioFile={audioFile || null}
                          audioUrl={audioUrl}
                          startSec={0}
                          endSec={audioDuration}
                        />
                      )}
                      <TTSButton text={linesAll.map((l: any) => l?.zhSentence || "").join(" ")} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 重点词汇汇总 */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 cursor-pointer"
            onClick={() => setShowVocabSummary(!showVocabSummary)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <h3 className="text-lg font-semibold">{songPageTranslations['ko'].keyVocabSummary}</h3>
                <span className="text-sm text-purple-100">({allVocabulary.length} 개)</span>
              </div>
              <svg 
                className={`w-6 h-6 transition-transform ${showVocabSummary ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {showVocabSummary && (
            <div className="p-6">
              <div className="mb-4">
                <input
                  type="text"
                  value={vocabSearch}
                  onChange={(e) => setVocabSearch(e.target.value)}
                  placeholder="어휘 검색..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="space-y-4">
                {/* 当前重点 */}
                {vocabularyGroups.current.length > 0 && (
                  <div className="border-l-4 border-purple-400 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-700">{songPageTranslations['ko'].currentFocus} ({vocabularyGroups.current.length})</h4>
                      <button
                        onClick={() => handleVocabGroupToggle('current')}
                        className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
                      >
                        {vocabGroupExpanded.current ? songPageTranslations['ko'].collapse : songPageTranslations['ko'].expand}
                      </button>
                    </div>
                    {vocabGroupExpanded.current && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {vocabularyGroups.current
                          .filter(v => !vocabSearch.trim() || 
                            v.word.toLowerCase().includes(vocabSearch.toLowerCase()) ||
                            v.pinyin.toLowerCase().includes(vocabSearch.toLowerCase()) ||
                            v.korean.toLowerCase().includes(vocabSearch.toLowerCase())
                          )
                          .map((vocab, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                              <div className="font-medium text-gray-800">{vocab.word}</div>
                              <div className="text-sm text-gray-600">{vocab.pinyin}</div>
                              <div className="text-sm text-gray-500">{vocab.korean}</div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 提升词 */}
                {vocabularyGroups.advanced.length > 0 && (
                  <div className="border-l-4 border-blue-400 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-700">{songPageTranslations['ko'].advancedWords} ({vocabularyGroups.advanced.length})</h4>
                      <button
                        onClick={() => handleVocabGroupToggle('advanced')}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        {vocabGroupExpanded.advanced ? songPageTranslations['ko'].collapse : songPageTranslations['ko'].expand}
                      </button>
                    </div>
                    {vocabGroupExpanded.advanced && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {vocabularyGroups.advanced
                          .filter(v => !vocabSearch.trim() || 
                            v.word.toLowerCase().includes(vocabSearch.toLowerCase()) ||
                            v.pinyin.toLowerCase().includes(vocabSearch.toLowerCase()) ||
                            v.korean.toLowerCase().includes(vocabSearch.toLowerCase())
                          )
                          .map((vocab, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                              <div className="font-medium text-gray-800">{vocab.word}</div>
                              <div className="text-sm text-gray-600">{vocab.pinyin}</div>
                              <div className="text-sm text-gray-500">{vocab.korean}</div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}

                {/* 基础词 */}
                {vocabularyGroups.basic.length > 0 && (
                  <div className="border-l-4 border-green-400 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-700">{songPageTranslations['ko'].basicWords} ({vocabularyGroups.basic.length})</h4>
                      <button
                        onClick={() => handleVocabGroupToggle('basic')}
                        className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                      >
                        {vocabGroupExpanded.basic ? songPageTranslations['ko'].collapse : songPageTranslations['ko'].expand}
                      </button>
                    </div>
                    {vocabGroupExpanded.basic && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {vocabularyGroups.basic
                          .filter(v => !vocabSearch.trim() || 
                            v.word.toLowerCase().includes(vocabSearch.toLowerCase()) ||
                            v.pinyin.toLowerCase().includes(vocabSearch.toLowerCase()) ||
                            v.korean.toLowerCase().includes(vocabSearch.toLowerCase())
                          )
                          .map((vocab, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                              <div className="font-medium text-gray-800">{vocab.word}</div>
                              <div className="text-sm text-gray-600">{vocab.pinyin}</div>
                              <div className="text-sm text-gray-500">{vocab.korean}</div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 重点句型汇总 */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 cursor-pointer"
            onClick={() => setShowPatternSummary(!showPatternSummary)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📝</span>
                <h3 className="text-lg font-semibold">{songPageTranslations['ko'].keyPatternSummary}</h3>
                <span className="text-sm text-green-100">({allPatterns.length}개)</span>
              </div>
              <svg 
                className={`w-6 h-6 transition-transform ${showPatternSummary ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {showPatternSummary && (
            <div className="p-6">
              <div className="mb-4">
                <input
                  type="text"
                  value={patternSearch}
                  onChange={(e) => setPatternSearch(e.target.value)}
                  placeholder={songPageTranslations['ko'].searchPatternPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-4">
                {Object.keys(patternsByHSK)
                  .sort((a, b) => Number(b) - Number(a))
                  .map((level) => {
                    const patternList = patternsByHSK[Number(level)].filter(p => 
                      filteredPatterns.includes(p)
                    );
                    if (patternList.length === 0) return null;
                    
                    return (
                      <div key={level} className="border-l-4 border-green-400 pl-4">
                        <h4 className="font-semibold text-gray-700 mb-2">HSK {level}</h4>
                        <div className="space-y-3">
                          {patternList.map((pattern, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                              <div className="font-medium text-gray-800 mb-1">{pattern.pattern}</div>
                              <div className="text-sm text-gray-600">{pattern.korean}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 每句卡片内部：复用现有组件
  function SentenceCard({ item, starred }: { item: any; starred: boolean }) {
    // ⭐ 检查是否为重复句
    const isDuplicate = (item as any).isDuplicate === true;
    // 每个句子卡片独立的教学提示状态
    const [isGeneratingTipForThis, setIsGeneratingTipForThis] = useState(false);
    const [teachingTipProgress, setTeachingTipProgress] = useState(0);
    const [teachingTipContent, setTeachingTipContent] = useState<{
      vocabulary: Array<{ word: string; hskLevel: string; pinyin?: string; korean?: string }>;
      patterns: Array<{ pattern: string; hskLevel: string; korean?: string; chineseExample?: string; koreanExample?: string }>;
    } | null>(null);
    const [showTeachingTip, setShowTeachingTip] = useState(false);
    const [showPracticeDialog, setShowPracticeDialog] = useState(false);
    const [practiceInput, setPracticeInput] = useState("");
    const [practiceFeedback, setPracticeFeedback] = useState<string | null>(null);
    const [isAnalyzingSentence, setIsAnalyzingSentence] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [practiceRecordingDuration, setPracticeRecordingDuration] = useState(0);
    const [hasPracticeRecording, setHasPracticeRecording] = useState(false);
    const [practiceAudioBlob, setPracticeAudioBlob] = useState<Blob | null>(null);
    const practiceStreamRef = useRef<MediaStream | null>(null);
    const practiceDurationIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const practiceStartTimeRef = useRef<number>(0);
    const [readAlongFeedback, setReadAlongFeedback] = useState<ReadingFeedback | null>(null);
    const [showReadAlongFeedback, setShowReadAlongFeedback] = useState(false);
    const [readAlongIsPlaying, setReadAlongIsPlaying] = useState(false);
    const singAlongRef = useRef<SingAlongButtonHandle | null>(null);

    // ✅ 添加清理逻辑：组件卸载时重置状态
    useEffect(() => {
      return () => {
        // 组件卸载时重置所有状态
        setIsGeneratingTipForThis(false);
        setShowTeachingTip(false);
        setShowPracticeDialog(false);
        setIsAnalyzingSentence(false);
        setIsRecording(false);
        setHasPracticeRecording(false);
        // 清理录音相关的资源
        if (practiceStreamRef.current) {
          practiceStreamRef.current.getTracks().forEach(track => track.stop());
        }
        if (practiceDurationIntervalRef.current) {
          clearInterval(practiceDurationIntervalRef.current);
        }
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          try {
            mediaRecorder.stop();
          } catch (e) {
            console.warn('停止录音失败:', e);
          }
        }
      };
    }, [mediaRecorder]);

    // ✅ 添加超时保护：如果状态卡住超过30秒，自动重置
    useEffect(() => {
      if (isGeneratingTipForThis) {
        const timeout = setTimeout(() => {
          console.warn('教学提示生成超时，自动重置状态');
          setIsGeneratingTipForThis(false);
        }, 30000); // 30秒超时
        
        return () => clearTimeout(timeout);
      }
    }, [isGeneratingTipForThis]);

    const lineNo = Number(item?.lineNo ?? 0);
    
    // displayLine已经在linesAll中处理过了，应该已经是韩文
    // 这里再次确保，作为双重保险
    let displayLine = String(item?.displayLine ?? "");
    let zhSentence = String(item?.zhSentence ?? "");
    
    // 最终检查：如果displayLine仍然是中文或占位符，强制从rawText获取韩文或使用翻译
    const checkKorean = (text: string) => /[\uac00-\ud7a3]/.test(text);
    const checkChinese = (text: string) => /[\u4e00-\u9fff]/.test(text) && !/[\uac00-\ud7a3]/.test(text);
    
    // 如果 displayLine 和 zhSentence 被调换了，需要修正
    if (checkChinese(displayLine) && checkKorean(zhSentence)) {
      // 调换回来
      const temp = displayLine;
      displayLine = zhSentence;
      zhSentence = temp;
    }
    
    // 如果 displayLine 仍然是中文或占位符，强制从 rawText 或转写文本获取韩文
    if (checkChinese(displayLine) || displayLine.includes("한국어 가사 원문") || displayLine.includes("한국어")) {
      // 策略1: 从转写文本中查找韩文（音频输入）
      if (transcribedText && checkKorean(transcribedText)) {
        const transcribedLines = transcribedText.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
        const koreanLines = transcribedLines.filter(l => checkKorean(l));
        if (koreanLines.length > 0) {
          if (lineNo > 0 && lineNo <= koreanLines.length) {
            displayLine = koreanLines[lineNo - 1];
          } else {
            displayLine = koreanLines[0];
          }
        }
      }
      // 策略2: 从 rawText 中查找韩文（文本输入）
      else if (rawText) {
        const rawLines = rawText.split(/\r?\n/).map((s: string) => s.trim()).filter(Boolean);
        const koreanLines = rawLines.filter((l: string) => checkKorean(l));
        if (koreanLines.length > 0) {
          if (lineNo > 0 && lineNo <= koreanLines.length) {
            displayLine = koreanLines[lineNo - 1];
          } else {
            displayLine = koreanLines[0];
          }
        }
      }
      
      // 策略3: 如果 rawText 和转写文本中都没有韩文，检查翻译缓存
      if ((checkChinese(displayLine) || displayLine.includes("한국어")) && translationCache[displayLine]) {
        displayLine = translationCache[displayLine];
      }
      
      // 策略4: 如果 displayLine 仍然是中文，且 zhSentence 是韩文，说明数据被调换了
      if (checkChinese(displayLine) && checkKorean(zhSentence)) {
        displayLine = zhSentence;
        // zhSentence 需要从其他地方获取中文，或者保持为空等待翻译
        zhSentence = "";
      }
    }
    
    // 确保 zhSentence 是中文（如果被错误地设置为韩文，需要修正）
    if (checkKorean(zhSentence)) {
      // 如果 zhSentence 是韩文，尝试从其他地方获取中文
      // 如果找不到，保持为空或使用 data.sentence
      zhSentence = "";
    }
    
    // OpalLine 데이터가 있으면 사용 (tokensZh 또는 chunks가 있으면 실제 데이터)
    // 注意：这里使用修正后的 zhSentence（确保是中文）
    const data = (item?.tokensZh || item?.chunks) 
      ? opalLineToSentenceData({ ...item, zhSentence: zhSentence || item?.zhSentence || "" })
      : makeFallbackSentenceData(zhSentence);

    // ⭐ 基于 languageMode 判断：如果是中文，使用原句；如果是韩文，使用翻译
    // 优先使用 opalPayload?.langDisplay，如果没有则使用 languageMode
    const currentLanguageMode = opalPayload?.langDisplay || languageMode;
    
    // 确保 zhSentence 是中文（如果被错误地设置为韩文，需要修正）
    // 优先使用修正后的 zhSentence，如果为空则使用 data.sentence
    let correctedZhSentence = zhSentence || data.sentence || "";
    const checkIsKorean2 = (text: string) => /[\uac00-\ud7a3]/.test(text);
    const checkIsChinese2 = (text: string) => /[\u4e00-\u9fff]/.test(text) && !/[\uac00-\ud7a3]/.test(text);
    
    // 如果 correctedZhSentence 是韩文，说明 API 返回的数据可能有问题，需要从原始数据中获取正确的中文
    if (checkIsKorean2(correctedZhSentence)) {
      // 如果 zhSentence 是韩文，尝试从 item 的原始数据中获取
      // 或者使用 displayLine（如果 displayLine 是中文）
      if (checkIsChinese2(displayLine)) {
        correctedZhSentence = displayLine;
      } else {
        // 如果都找不到中文，尝试从 item 的原始数据中获取
        const originalZhSentence = item?.zhSentence || "";
        if (checkIsChinese2(originalZhSentence)) {
          correctedZhSentence = originalZhSentence;
        } else {
          // 如果还是找不到，使用 data.sentence（从 opalLineToSentenceData 转换来的）
          correctedZhSentence = data.sentence || "";
        }
      }
    }
    
    // ⭐ 基于 languageMode 判断：如果是中文，使用原句；如果是韩文，使用翻译
    let finalZhSentence = correctedZhSentence;
    if (currentLanguageMode === 'zh') {
      // 中文输入：直接使用转写文本或原始文本（原句）
      if (transcribedText) {
        const transcribedLines = transcribedText.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
        if (lineNo > 0 && lineNo <= transcribedLines.length) {
          finalZhSentence = transcribedLines[lineNo - 1];
        } else if (transcribedLines.length > 0) {
          // 如果行号不匹配，尝试按顺序匹配
          const index = Math.min(lineNo - 1, transcribedLines.length - 1);
          if (index >= 0) {
            finalZhSentence = transcribedLines[index];
          }
        }
      } else if (originalText) {
        const originalLines = originalText.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
        if (lineNo > 0 && lineNo <= originalLines.length) {
          finalZhSentence = originalLines[lineNo - 1];
        } else if (originalLines.length > 0) {
          // 如果行号不匹配，尝试按顺序匹配
          const index = Math.min(lineNo - 1, originalLines.length - 1);
          if (index >= 0) {
            finalZhSentence = originalLines[index];
          }
        }
      }
      // 如果转写文本和原始文本都没有，优先使用 displayLine（来自 Whisper 转写）
      if (!finalZhSentence || finalZhSentence.trim() === "") {
        if (displayLine && checkIsChinese2(displayLine)) {
          finalZhSentence = displayLine;
        }
      }
    } else {
      // 韩文输入：使用 API 返回的 zhSentence（翻译结果）
      // finalZhSentence 已经是 correctedZhSentence，即 API 返回的中文翻译
    }
    // 最后的后备逻辑
    if (!finalZhSentence || finalZhSentence.trim() === "" || checkIsKorean2(finalZhSentence)) {
      finalZhSentence = data.sentence || "";
    }

    // 按照空格、标点分行显示文本的函数
    const formatTextWithLineBreaks = (text: string, maxLength: number = 50): JSX.Element => {
      if (!text) return <></>;
      
      // 如果文本很短，直接返回
      if (text.length <= maxLength) {
        return <>{text}</>;
      }
      
      // 如果文本包含换行符，按换行符分行
      if (text.includes('\n') || text.includes('\r')) {
        const lines = text.split(/\r?\n/).filter(l => l.trim());
        return (
          <>
            {lines.map((line, idx) => (
              <div key={idx} className={idx > 0 ? 'mt-1' : ''}>
                {line.trim()}
              </div>
            ))}
          </>
        );
      }
      
      // 如果没有换行符，按照空格、标点进行分行
      // 分行规则：在标点符号（，。！？、；：,.!?;:）后，或者在空格后（如果当前行长度超过maxLength）
      const parts: string[] = [];
      let currentLine = '';
      let currentLength = 0;
      
      // 标点符号正则
      const punctuationRegex = /[，。！？、；：,.!?;:]/;
      // 空格正则
      const spaceRegex = /\s/;
      
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        currentLine += char;
        currentLength++;
        
        // 如果遇到标点符号，且当前行长度超过阈值，分行
        if (punctuationRegex.test(char) && currentLength > maxLength * 0.6) {
          parts.push(currentLine.trim());
          currentLine = '';
          currentLength = 0;
        }
        // 如果遇到空格，且当前行长度超过阈值，分行
        else if (spaceRegex.test(char) && currentLength > maxLength) {
          parts.push(currentLine.trim());
          currentLine = '';
          currentLength = 0;
        }
        // 如果当前行长度超过最大长度，强制分行（在最近的空格或标点处）
        else if (currentLength > maxLength) {
          // 向前查找最近的标点或空格
          let breakPoint = currentLine.length;
          for (let j = currentLine.length - 1; j >= Math.max(0, currentLine.length - 20); j--) {
            if (punctuationRegex.test(currentLine[j]) || spaceRegex.test(currentLine[j])) {
              breakPoint = j + 1;
              break;
            }
          }
          
          if (breakPoint < currentLine.length) {
            parts.push(currentLine.substring(0, breakPoint).trim());
            currentLine = currentLine.substring(breakPoint);
            currentLength = currentLine.length;
          } else {
            // 如果找不到合适的断点，强制在当前位置分行
            parts.push(currentLine.trim());
            currentLine = '';
            currentLength = 0;
          }
        }
      }
      
      // 添加最后一行
      if (currentLine.trim()) {
        parts.push(currentLine.trim());
      }
      
      return (
        <>
          {parts.map((part, idx) => (
            <div key={idx} className={idx > 0 ? 'mt-1' : ''}>
              {part}
            </div>
          ))}
        </>
      );
    };

    return (
    <div className="bg-white rounded-2xl shadow-sm border p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="text-sm text-gray-500 w-10 flex-shrink-0">{formatLineNo(lineNo)}</div>
          <div className="font-medium flex-1">
            {formatTextWithLineBreaks(displayLine)}
            {isDuplicate && (
              <span className="ml-2 text-xs text-gray-400 italic">{songPageTranslations['ko'].duplicate}</span>
            )}
          </div>

          <button
            className={`text-xl leading-none px-2 py-1 rounded-lg ${
              starred ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() =>
              setStarMap((prev) => {
                const next = { ...prev };
                if (next[lineNo]) delete next[lineNo];
                else next[lineNo] = true;
                return next;
              })
            }
            aria-label={starred ? "즐겨찾기 해제" : "즐겨찾기"}
            title={starred ? "즐겨찾기 해제" : "즐겨찾기"}
          >
            ★
          </button>
        </div>

        <div className="mb-4">
          {/* 中文整句展示 */}
          <div className="mb-2">
            <div className="text-sm font-semibold text-gray-700 mb-2">{songPageTranslations['ko'].chineseSentenceDisplay}</div>
            {/* 使用与整段歌词相同的显示逻辑，字体放大并居中，支持词卡功能 */}
            <div className="flex flex-wrap items-end gap-x-1 gap-y-2 leading-relaxed justify-center">
            {(() => {
              // 优先使用 chunkSegments（语义分段）- 保持原有逻辑，不验证
              const chunkSegments = data.chunks?.[0]?.chunkSegments || [];
              
              if (chunkSegments.length > 0) {
                // 按语义分段显示 - 保持原有显示方式，但使用 SentenceView 支持词卡
                return chunkSegments.map((seg: any, segIdx: number) => {
                  const chunkZh = seg.chunkZh || '';
                  const segPinyin = seg.pinyin || '';
                  
                  // 为整个分段添加词卡支持
                  // 找到属于这个分段的 tokens
                  const segmentTokens = data.tokens?.filter((t: any) => {
                    if (!t.text) return false;
                    return chunkZh.includes(t.text);
                  }) || [];
                  
                  // 将 chunkZh 按字符拆分（只保留中文字符）
                  const zhChars = chunkZh.split('').filter((c: string) => /[\u4e00-\u9fff]/.test(c));
                  // 将拼音按空格拆分
                  const pinyinWords = segPinyin.split(/\s+/).filter((p: string) => p.trim());
                  
                  // 无论是否逐字对齐，都使用 SentenceView 支持词卡，按词分词
                  // 使用 SentenceView 渲染整个分段，但保持拼音在上的布局
                  return (
                    <div key={`seg-${lineNo}-${segIdx}`} className="inline-flex flex-col items-center justify-end mx-1">
                      {/* 拼音 */}
                      {segPinyin && (
                        <span className="text-sm text-gray-500 leading-tight mb-0.5 whitespace-nowrap">
                          {segPinyin}
                        </span>
                      )}
                      {/* 中文 - 使用 SentenceView 支持词卡，按词分词 */}
                      <div className="text-2xl font-medium text-gray-900">
                        <SentenceView
                          sentence={chunkZh}
                          tokens={segmentTokens}
                          selectedWord={selectedWord}
                          item={item}
                          globalActiveTokenId={globalActiveTokenId}
                          onTokenActivate={(tokenId: string) => setGlobalActiveTokenId(tokenId)}
                          tokenIdPrefix={`line-${lineNo}-seg-${segIdx}`}
                        />
                      </div>
                    </div>
                  );
                });
              }
              
              // 如果没有 chunkSegments，但有 tokens，使用 SentenceView 渲染整个句子
              if (data.tokens && data.tokens.length > 0) {
                // 获取整句拼音
                const pinyinArray = data.tokens
                  .map((token: any) => token.pinyin || '')
                  .filter((p: string) => p.trim().length > 0);
                const pinyin = pinyinArray.length > 0 ? pinyinArray.join(' ') : '';
                
                // 使用 SentenceView 渲染整个句子，但保持拼音在上的布局
                const currentSentence = data.sentence || zhSentence || "";
                
                return (
                  <>
                    {pinyin && (
                      <div className="text-base text-gray-500 leading-relaxed w-full text-center mb-2">
                        {pinyin}
                      </div>
                    )}
                    <div className="text-2xl font-medium text-gray-900 leading-relaxed w-full text-center">
                      <SentenceView
                        sentence={currentSentence}
                        tokens={data.tokens ?? []}
                        selectedWord={selectedWord}
                        item={item}
                        globalActiveTokenId={globalActiveTokenId}
                        onTokenActivate={(tokenId: string) => setGlobalActiveTokenId(tokenId)}
                        tokenIdPrefix={`line-${lineNo}`}
                      />
                    </div>
                  </>
                );
              }
              
              // 最后回退：使用 SentenceView 显示，支持词卡功能
              // 使用 data.sentence 而不是 finalZhSentence，确保是当前句子的内容
              const currentSentence = data.sentence || zhSentence || "";
              let pinyin = '';
              if (data.chunks && data.chunks.length > 0) {
                const pinyinArray = data.chunks
                  .map((chunk: any) => chunk.pinyin || '')
                  .filter((p: string) => p.trim().length > 0);
                if (pinyinArray.length > 0) {
                  pinyin = pinyinArray.join(' ');
                }
              }
              
              return (
                <>
                  {pinyin && (
                    <div className="text-base text-gray-500 leading-relaxed w-full text-center mb-2">
                      {pinyin}
                    </div>
                  )}
                  <div className="text-2xl font-medium text-gray-900 leading-relaxed w-full text-center">
                    <SentenceView
                      sentence={currentSentence}
                      tokens={data.tokens ?? []}
                      selectedWord={selectedWord}
                      item={item}
                      globalActiveTokenId={globalActiveTokenId}
                      onTokenActivate={(tokenId: string) => setGlobalActiveTokenId(tokenId)}
                      tokenIdPrefix={`line-${lineNo}`}
                    />
                  </div>
                </>
              );
            })()}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-700">{songPageTranslations['ko'].learningAnalysisTable}</div>
            <div className="relative">
            <button
              onClick={async () => {
                if (!userLevel) {
                  alert(songPageTranslations['ko'].alertSelectLevel);
                  return;
                }
                
                if (showTeachingTip && teachingTipContent) {
                  // 如果已经展开，则收起
                  setShowTeachingTip(false);
                  return;
                }
                
                setIsGeneratingTipForThis(true);
                setTeachingTipProgress(0);
                
                try {
                  setTeachingTipProgress(10);
                  const tip = await getTeachingTip(zhSentence || data.sentence || "", userLevel);
                  
                  setTeachingTipProgress(30);
                  // 解析教学提示内容
                  const parsed = parseTeachingTip(tip);
                  
                  setTeachingTipProgress(50);
                  // 为每个词汇获取详细信息（拼音、韩文）
                  const vocabularyWithDetails = await Promise.all(
                    parsed.vocabulary.map(async (vocab, index) => {
                      try {
                        const wordInfo = await getWordCardInfo(vocab.word);
                        setTeachingTipProgress(50 + (index + 1) * 10 / parsed.vocabulary.length);
                        return {
                          ...vocab,
                          pinyin: wordInfo.pinyin,
                          korean: wordInfo.korean,
                        };
                      } catch (error) {
                        console.error(`获取词汇信息失败: ${vocab.word}`, error);
                        return vocab;
                      }
                    })
                  );
                  
                  setTeachingTipProgress(70);
                  // 为句型获取详细信息
                  const patternsWithDetails = await Promise.all(
                    parsed.patterns.slice(0, 1).map(async (pattern) => {
                      try {
                        const patternInfo = await getPatternInfo(pattern.pattern, zhSentence || data.sentence || "");
                        setTeachingTipProgress(90);
                        return {
                          ...pattern,
                          korean: patternInfo.korean,
                          chineseExample: patternInfo.chineseExample,
                          koreanExample: patternInfo.koreanExample,
                        };
                      } catch (error) {
                        console.error(`获取句型信息失败: ${pattern.pattern}`, error);
                        // 如果API失败，使用默认值
                        return {
                          ...pattern,
                          korean: `이 문형은 ${pattern.hskLevel} 수준의 중요한 표현입니다.`,
                          chineseExample: zhSentence || data.sentence || "",
                          koreanExample: songPageTranslations['ko'].patternKoreanExample,
                        };
                      }
                    })
                  );
                  
                  setTeachingTipProgress(100);
                  setTeachingTipContent({
                    vocabulary: vocabularyWithDetails,
                    patterns: patternsWithDetails.slice(0, 1), // 只显示第一个句型
                  });
                  setShowTeachingTip(true);
                } catch (error) {
                  console.error('학습 가이드를 생성하지 못했어요:', error);
                  alert(songPageTranslations['ko'].alertTeachingTipFailed);
                } finally {
                  setIsGeneratingTipForThis(false);
                  setTeachingTipProgress(0);
                }
              }}
              disabled={isGeneratingTipForThis || !userLevel}
              className={`
                inline-flex items-center justify-center gap-1
                px-3 py-1.5 rounded-lg
                ${isGeneratingTipForThis 
                  ? 'bg-amber-200 text-amber-800 cursor-wait' 
                  : 'bg-amber-100 hover:bg-amber-200 active:bg-amber-300 text-amber-700 hover:text-amber-800'
                }
                transition-colors duration-200
                text-sm font-medium
                ${!userLevel ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              title={!userLevel ? songPageTranslations['ko'].pleaseSelectLanguageLevelFirst : isGeneratingTipForThis ? songPageTranslations['ko'].analyzing : showTeachingTip ? '학습 가이드 접기' : '학습 가이드 보기'}
            >
              {isGeneratingTipForThis ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  生成中... {teachingTipProgress > 0 && `${teachingTipProgress}%`}
                </>
              ) : showTeachingTip ? (
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
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  收起
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {songPageTranslations['ko'].teachingTip}
                </>
              )}
            </button>
            
            {/* 教学提示气泡 */}
            {showTeachingTip && teachingTipContent && (
              <div className="absolute top-full right-0 mt-2 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border-2 border-amber-300 p-4">
                {/* 气泡箭头 */}
                <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l-2 border-t-2 border-amber-300 transform rotate-45"></div>
              {/* 重点词汇 */}
              {teachingTipContent.vocabulary.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">{songPageTranslations['ko'].keyVocab}</h4>
                  <div className="space-y-2">
                    {teachingTipContent.vocabulary.map((vocab, index) => (
                      <VocabularyItem key={index} vocab={vocab} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* 重点句型 */}
              {teachingTipContent.patterns.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">{songPageTranslations['ko'].keyPattern}</h4>
                  {teachingTipContent.patterns.map((pattern, index) => (
                    <PatternItem key={index} pattern={pattern} />
                  ))}
                </div>
              )}
              
              {/* 练习按钮 */}
              <button
                onClick={() => {
                  setShowPracticeDialog(true);
                  setPracticeInput("");
                  setPracticeFeedback(null);
                }}
                className="w-full mt-4 px-4 py-2 text-white rounded-lg transition-colors flex items-center justify-center gap-2 bg-[#7a4f2d] hover:bg-[#a06c3e]"
              >
                {songPageTranslations['ko'].tryMakingSentence}
              </button>
              </div>
            )}
            
            {/* 练习对话框 - 出现在教学提示卡片的左边 */}
            {showPracticeDialog && (
              <div className="absolute top-0 right-full mr-2 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border-2 border-blue-300 p-4">
                {/* 气泡箭头 - 指向右边 */}
                <div className="absolute top-6 -right-2 w-4 h-4 bg-white border-r-2 border-t-2 border-blue-300 transform rotate-45"></div>
                
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-800">{songPageTranslations['ko'].makeSentence}</h4>
                  <button
                    onClick={() => {
                      setShowPracticeDialog(false);
                      setPracticeInput("");
                      setPracticeFeedback(null);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* 输入区域 */}
                <div className="mb-3">
                  <textarea
                    value={practiceInput}
                    onChange={(e) => setPracticeInput(e.target.value)}
                    placeholder={songPageTranslations['ko'].inputSentencePlaceholder}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm resize-none"
                    rows={3}
                    disabled={isAnalyzingSentence}
                  />
                  
                  {/* 发送语音按钮 */}
                  <div className="mt-2">
                    {!isRecording && !hasPracticeRecording && (
                      <button
                        onClick={async () => {
                          try {
                            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                            practiceStreamRef.current = stream;
                            const recorder = new MediaRecorder(stream);
                            const chunks: Blob[] = [];
                            
                            recorder.ondataavailable = (e) => {
                              if (e.data.size > 0) {
                                chunks.push(e.data);
                              }
                            };
                            
                            recorder.onstop = async () => {
                              const blob = new Blob(chunks, { type: 'audio/wav' });
                              setPracticeAudioBlob(blob);
                              setHasPracticeRecording(true);
                              if (practiceStreamRef.current) {
                                practiceStreamRef.current.getTracks().forEach(track => track.stop());
                              }
                              if (practiceDurationIntervalRef.current) {
                                clearInterval(practiceDurationIntervalRef.current);
                                practiceDurationIntervalRef.current = null;
                              }
                            };
                            
                            recorder.start();
                            setMediaRecorder(recorder);
                            setIsRecording(true);
                            setPracticeRecordingDuration(0);
                            practiceStartTimeRef.current = Date.now();
                            
                            // 开始计时
                            practiceDurationIntervalRef.current = setInterval(() => {
                              setPracticeRecordingDuration(Math.floor((Date.now() - practiceStartTimeRef.current) / 1000));
                            }, 100);
                          } catch (error) {
                            console.error('无法访问麦克风:', error);
                            alert(songPageTranslations['ko'].alertMicFailed);
                          }
                        }}
                        className="w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-green-500 text-white hover:bg-green-600 flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        发送语音
                      </button>
                    )}
                    
                    {isRecording && (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200">
                          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                          <span className="text-sm text-red-700 font-medium">
                            录音中 {Math.floor(practiceRecordingDuration / 60)}:{(practiceRecordingDuration % 60).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                              mediaRecorder.stop();
                            }
                            setIsRecording(false);
                            if (practiceStreamRef.current) {
                              practiceStreamRef.current.getTracks().forEach(track => track.stop());
                            }
                            if (practiceDurationIntervalRef.current) {
                              clearInterval(practiceDurationIntervalRef.current);
                              practiceDurationIntervalRef.current = null;
                            }
                          }}
                          className="px-3 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600"
                        >
                          结束录音
                        </button>
                        <button
                          onClick={() => {
                            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                              mediaRecorder.stop();
                            }
                            if (practiceStreamRef.current) {
                              practiceStreamRef.current.getTracks().forEach(track => track.stop());
                            }
                            if (practiceDurationIntervalRef.current) {
                              clearInterval(practiceDurationIntervalRef.current);
                              practiceDurationIntervalRef.current = null;
                            }
                            // 取消录音，不进行分析
                            setIsRecording(false);
                            setPracticeRecordingDuration(0);
                            setHasPracticeRecording(false);
                            setPracticeAudioBlob(null);
                          }}
                          className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-500 text-white hover:bg-gray-600"
                        >
                          取消
                        </button>
                      </div>
                    )}
                    
                    {hasPracticeRecording && !isRecording && (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 px-3 py-2 rounded-lg bg-green-50 border border-green-200 text-sm text-green-700">
                          录音完成 ({Math.floor(practiceRecordingDuration / 60)}:{(practiceRecordingDuration % 60).toString().padStart(2, '0')})
                        </div>
                        <button
                          onClick={() => {
                            setHasPracticeRecording(false);
                            setPracticeAudioBlob(null);
                            setPracticeRecordingDuration(0);
                          }}
                          className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-500 text-white hover:bg-gray-600"
                        >
                          重新录音
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* 提交按钮 */}
                <div className="flex gap-2 mt-3">
                  {practiceInput.trim() && (
                    <button
                      onClick={async () => {
                        if (!practiceInput.trim()) {
                          alert(songPageTranslations['ko'].alertInputSentence);
                          return;
                        }
                        
                        if (!userLevel) {
                          alert(songPageTranslations['ko'].alertSelectLevel);
                          return;
                        }
                        
                        setIsAnalyzingSentence(true);
                        setPracticeFeedback(null);
                        
                        try {
                          const feedback = await evaluateSentence(practiceInput, userLevel, zhSentence || data.sentence || "");
                          setPracticeFeedback(feedback);
                        } catch (error) {
                          console.error('评价失败:', error);
                          alert(songPageTranslations['ko'].alertEvalFailed);
                        } finally {
                          setIsAnalyzingSentence(false);
                        }
                      }}
                      disabled={isAnalyzingSentence || !practiceInput.trim()}
                      className="flex-1 px-4 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 bg-[#7a4f2d] hover:bg-[#a06c3e]"
                    >
                      {isAnalyzingSentence ? (
                        <>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {songPageTranslations['ko'].analyzing}
                        </>
                      ) : (
                        songPageTranslations['ko'].submitEvaluation
                      )}
                    </button>
                  )}
                  
                  {hasPracticeRecording && practiceAudioBlob && (
                    <button
                      onClick={async () => {
                        if (!userLevel) {
                          alert(songPageTranslations['ko'].alertSelectLevel);
                          return;
                        }
                        
                        setIsAnalyzingSentence(true);
                        setPracticeFeedback(null);
                        
                        try {
                          // 先转写音频
                          const { transcribeAudio } = await import('../services/chatgptApi');
                          const asrText = await transcribeAudio(practiceAudioBlob);
                          
                          // 使用跟读反馈API（和打字点评使用相同的提示词逻辑）
                          const { generateReadingFeedback } = await import('../services/chatgptApi');
                          const feedbackData = await generateReadingFeedback(
                            userLevel,
                            zhSentence || data.sentence || "",
                            asrText,
                            practiceRecordingDuration
                          );
                          
                          // 格式化反馈为文本（和打字点评格式一致）
                          const feedbackText = `${feedbackData.overallComment}\n\n主要问题：${feedbackData.keyIssue}\n\n下一步练习：${feedbackData.oneAction}`;
                          setPracticeFeedback(feedbackText);
                        } catch (error) {
                          console.error('评价失败:', error);
                          alert(songPageTranslations['ko'].alertEvalFailed);
                        } finally {
                          setIsAnalyzingSentence(false);
                        }
                      }}
                      disabled={isAnalyzingSentence}
                      className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isAnalyzingSentence ? (
                        <>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {songPageTranslations['ko'].analyzing}
                        </>
                      ) : (
                        songPageTranslations['ko'].sendVoiceEvaluation
                      )}
                    </button>
                  )}
                </div>
                
                {/* 反馈显示 - 在按钮上方 */}
                {practiceFeedback && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-800 whitespace-pre-wrap">{practiceFeedback}</div>
                  </div>
                )}
              </div>
            )}
            </div>
          </div>
          
          <div className="relative">
            <AnalysisTable
              ref={singAlongRef}
              chunks={data.chunks ?? []}
              sentence={data.sentence}
              audioFile={audioFile}
              audioUrl={opalPayload?.audioUrl}
              startSec={item?.startSec}
              endSec={item?.endSec}
              userLevel={userLevel}
              uiLanguage="ko"
              renderFeedbackExternally
              onReadAlongFeedbackReady={(feedback) => {
                setReadAlongFeedback(feedback);
                setShowReadAlongFeedback(true);
              }}
              onPlayingChange={setReadAlongIsPlaying}
            />
            {/* 跟读反馈面板 - 相对表格定位，出现在表格正上方 */}
            {showReadAlongFeedback && readAlongFeedback && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-96 max-w-[min(384px,calc(100vw-2rem))] bg-white rounded-lg shadow-xl border-2 border-purple-300 p-4 z-50 space-y-4">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-purple-300 transform rotate-45" />
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-sm font-semibold text-gray-800">{songPageTranslations['ko'].aiReadAlongFeedback}</h3>
                <button
                  onClick={() => setShowReadAlongFeedback(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-600 mb-2">一、本次发音表现</div>
                <SpeechRadarChart
                  data={[
                    { subject: '内容准确度', score: readAlongFeedback.scores.contentAccuracy, fullMark: 100 },
                    { subject: '声调表现', score: readAlongFeedback.scores.tonePerformance, fullMark: 100 },
                    { subject: '说话流畅度', score: readAlongFeedback.scores.speakingFluency, fullMark: 100 },
                  ]}
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-600 mb-1">二、整体评价</div>
                <div className="text-sm text-gray-800">{readAlongFeedback.overallComment}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-600 mb-1">三、本次主要问题</div>
                <div className="text-sm text-gray-800 bg-red-50 border-l-2 border-red-400 pl-2 py-1">
                  {readAlongFeedback.keyIssue}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-600 mb-1">四、下一步练习</div>
                <div className="text-sm text-gray-800 bg-blue-50 border-l-2 border-blue-400 pl-2 py-1">
                  {readAlongFeedback.oneAction}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t">
                <button
                  onClick={() => {
                    singAlongRef.current?.restartRecording();
                    setShowReadAlongFeedback(false);
                  }}
                  className="flex-1 px-3 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium transition-colors"
                >
                  再读一次
                </button>
                <button
                  onClick={() => singAlongRef.current?.playRecording()}
                  className="flex-1 px-3 py-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 text-sm font-medium transition-colors flex items-center justify-center gap-1"
                >
                  {readAlongIsPlaying ? (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                      暂停
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      播放我的录音
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }

  // 대화 생성 모달
  const DialogueModal = () => {
    if (!dialogueResult && !isGeneratingDialogue) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                💬 대화 만들기: {selectedWord}
              </h2>
              <button
                onClick={() => {
                  setDialogueResult(null);
                  setSelectedWord(null);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {isGeneratingDialogue ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-gray-600">대화를 생성하고 있습니다...</p>
              </div>
            ) : dialogueResult ? (
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-blue-900">중국어 대화</h3>
                    <TTSButton text={dialogueResult.dialogue} />
                  </div>
                  <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                    {dialogueResult.dialogue}
                  </div>
                </div>
                
                {dialogueResult.translation && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-gray-900">한국어 번역</h3>
                      <TTSButton text={dialogueResult.translation} lang="ko-KR" />
                    </div>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {dialogueResult.translation}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => {
                      setDialogueResult(null);
                      setSelectedWord(null);
                    }}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    닫기
                  </button>
                  <button
                    onClick={() => handleCreateDialogue(selectedWord!)}
                    className="flex-1 px-4 py-2 text-white rounded-lg transition-colors bg-[#7a4f2d] hover:bg-[#a06c3e]"
                  >
                    다시 생성
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  const showEmpty = linesAll.length === 0;
  const [showExample, setShowExample] = useState(true); // 默认显示示例

  return (
    <div className="min-h-screen flex" style={{ background: '#faf6f0' }}>
      {/* 主内容区 */}
      <div className="flex-1">
      {/* 顶部固定输入区 */}
      <div className=" z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 space-y-3">
          <div className="flex items-center justify-between">
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#1a2e1a', letterSpacing: '-0.5px', fontFamily: "'Noto Sans KR', sans-serif" }}>{songPageTranslations['ko'].title}</h1>
            <div className="flex items-center gap-2">
              <div style={{ display: 'none' }}>
                <button
                  className="px-3 py-1 rounded-lg border text-sm bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
                  onClick={testChatGPTAPI}
                  disabled={isLoading}
                  title="ChatGPT API 연결 테스트"
                >
                  🧪 {songPageTranslations['ko'].apiTest}
                </button>
              </div>
              {/* 学习模式：整段 / 分句 */}
              <div className="flex items-center gap-2">
                <button
                  className={`px-3 py-1 rounded-lg border text-sm ${
                    studyMode === "整段学习" ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setStudyMode("整段学习")}
                >
                  전체 학습
                </button>
                <button
                  className={`px-3 py-1 rounded-lg border text-sm ${
                    studyMode === "分句学习" ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setStudyMode("分句学习")}
                >
                  문장별 학습
                </button>
              </div>
              {/* 复习模式选择 */}
              <div className="flex items-center gap-2">
                <button
                  className={`px-3 py-1 rounded-lg border text-sm ${
                    reviewMode === "sentence" ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setReviewMode((v) => v === "sentence" ? false : "sentence")}
                >
                  {reviewMode === "sentence" ? songPageTranslations['ko'].exitSentenceReview : songPageTranslations['ko'].sentenceReview}
                </button>
              </div>
              <div style={{ display: 'none' }}>
                <button
                  className="px-3 py-1 rounded-lg border text-sm bg-white"
                  onClick={exportCurrentPage}
                  disabled={pageItems.length === 0}
                >
                  {songPageTranslations['ko'].exportHTML}
                </button>
              </div>
            </div>
          </div>
                    {/* ✅ 统一主入口模块（音频优先） */}
                    <div style={{
                      background: '#ffffff',
                      borderRadius: 20,
                      border: '1px solid #e8f4f0',
                      boxShadow: '0 2px 16px rgba(45,122,94,0.08)',
                      overflow: 'hidden',
                      marginBottom: 16,
                      minHeight: 280,
                      maxWidth: '900px',
                      width: '100%',
                    }}>
                      {/* 좌우 분할 */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', minHeight: 180 }}>
                        {/* 왼쪽: 파일 업로드 */}
                        <div
                          style={{
                            padding: '48px 40px',
                            borderRight: '1px solid #e8f4f0',
                            background: isDragging ? '#d0ede6' : '#e8f4f0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            transition: 'background 0.2s',
                          }}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                        >
                          <div style={{ fontSize: 36, marginBottom: 12 }}>📎</div>
                          <div style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 18, fontWeight: 600, color: '#2c1a0e', marginBottom: 8 }}>
                            파일 업로드
                          </div>
                          <div style={{ fontSize: 13, color: '#9c7b60', marginBottom: 20 }}>
                            드래그하거나 클릭하세요
                          </div>
                          <label style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '10px 22px', borderRadius: 8,
                            border: '1.5px solid #2d7a5e',
                            background: 'transparent', color: '#2d7a5e',
                            fontSize: 14, cursor: 'pointer',
                            width: 'fit-content',
                          }}>
                            {songPageTranslations['ko'].selectAudioFile}
                            <input
                              className="hidden"
                              type="file"
                              accept="audio/*"
                              onChange={(e) => onAudioFiles(e.target.files)}
                            />
                          </label>
                          {/* 언어 선택 - 숨김 처리, 기본값 ko 유지 */}
                          <div style={{ marginTop: 12, display: 'block' }}>
                            <select
                              value={languageMode || ''}
                              onChange={(e) => {
                                const newMode = e.target.value as 'ko' | 'zh' | '';
                                if (newMode === 'ko' || newMode === 'zh') {
                                  setLanguageMode(newMode);
                                  setShowLanguageTip(false);
                                } else {
                                  setLanguageMode(null);
                                  if (audioFile) setShowLanguageTip(true);
                                }
                              }}
                              style={{
                                padding: '10px 16px',
                                fontSize: 14,
                                border: '1.5px solid #2d7a5e',
                                borderRadius: 10,
                                color: '#2d7a5e',
                                background: 'white',
                                cursor: 'pointer',
                                outline: 'none',
                                fontFamily: "'Noto Sans KR', sans-serif",
                                width: '80%',
                              }}
                            >
                              <option value="">{songPageTranslations['ko'].pleaseSelectLanguage}</option>
                              <option value="zh">{songPageTranslations['ko'].chinese}</option>
                              <option value="ko">{songPageTranslations['ko'].korean}</option>
                            </select>
                            {showLanguageTip && (
                              <div style={{ marginTop: 8, padding: '8px 12px', background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: 8, fontSize: 13, color: '#92400e' }}>
                                {songPageTranslations['ko'].pleaseSelectMatchingLanguage}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 오른쪽: 텍스트 입력 */}
                        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column' }}>
                          <div style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 18, fontWeight: 600, color: '#2c1a0e', marginBottom: 12 }}>
                            가사 입력
                          </div>
                          <textarea
                            style={{
                              flex: 1,
                              minHeight: 200,
                              padding: '14px 16px',
                              border: '1.5px solid #e2cdb8',
                              borderRadius: 8,
                              fontSize: 14,
                              color: '#2c1a0e',
                              background: '#faf6f0',
                              resize: 'vertical',
                              fontFamily: "'Noto Sans KR', sans-serif",
                              outline: 'none',
                            }}
                            value={rawText}
                            onChange={(e) => setRawText(e.target.value)}
                            placeholder={songPageTranslations['ko'].pasteLyricsPlaceholder}
                          />
                        </div>
                      </div>

                      {/* 분석 시작 버튼 */}
                      <div style={{
                        padding: '20px 36px',
                        borderTop: '1px solid #e8f4f0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 12,
                      }}>
                        {showLevelWarning && (
                          <div style={{ padding: '8px 16px', background: '#fef2f2', border: '1px solid #ef4444', borderRadius: 8, fontSize: 13, color: '#b91c1c' }}>
                            {songPageTranslations['ko'].pleaseSelectLanguageLevelFirst}
                          </div>
                        )}
                        <button
                          onClick={onClickTranscribe}
                          disabled={isLoading}
                          style={{
                            padding: '14px 64px',
                            borderRadius: 32,
                            background: isLoading ? '#9c7b60' : '#2d7a5e',
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 600,
                            border: 'none',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            fontFamily: "'Noto Sans KR', sans-serif",
                            transition: 'background 0.2s',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 16px rgba(45,122,94,0.25)',
                          }}
                        >
                          {isLoading ? '분석 중...' : '분석 시작 →'}
                        </button>
                        {isLoading && (
                          <div style={{ width: '100%', maxWidth: 420, padding: '0 16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: '#555', marginBottom: 6 }}>
                              <span>{loadingMessage || songPageTranslations['ko'].analyzing}</span>
                              <span style={{ fontWeight: 600, color: '#2d7a5e' }}>{loadingProgress}%</span>
                            </div>
                            <div style={{ width: '100%', height: 8, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
                              <div
                                style={{
                                  width: `${loadingProgress}%`,
                                  height: '100%',
                                  background: '#2d7a5e',
                                  borderRadius: 4,
                                  transition: 'width 0.3s ease-out',
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                   {/* 输入行：文本 + 搜索 */}
                   <div className="hidden grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">{songPageTranslations['ko'].pasteLyricsLabel}</div>
              <textarea
                className="w-full h-24 p-3 rounded-xl border bg-white"
                placeholder={songPageTranslations['ko'].pasteLyricsPlaceholder}
                value={rawText}
                onChange={(e) => {
                  setRawText(e.target.value);
                  // 不立即清除分析结果，保留现有内容直到点击"开始转写"
                }}
              />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">{songPageTranslations['ko'].searchLabel}</div>
              <input
                className="w-full p-3 rounded-xl border bg-white"
                placeholder={songPageTranslations['ko'].searchPlaceholderFilter}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div 
                className={`mt-2 p-3 rounded-xl border transition-colors ${
                  isDragging 
                    ? 'bg-blue-100 border-blue-400 border-2' 
                    : 'bg-white'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className={`text-sm font-semibold mb-2 ${
                  isDragging ? 'text-blue-700' : 'text-gray-700'
                }`}>
                  {isDragging ? '마우스를 놓아 파일을 업로드하세요' : '오디오 파일을 드래그해 주세요'}
                </div>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => onAudioFiles(e.target.files)}
                />
                <button
                  className="ml-2 px-3 py-1 rounded-lg border text-sm bg-white flex items-center gap-2 disabled:opacity-50"
                  onClick={onClickTranscribe}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>분석 중...</span>
                    </>
                  ) : (
                    '분석 시작'
                  )}
                </button>
                
                {/* 로딩 진행률 표시 (텍스트 영역 아래) */}
                {isLoading && (
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{loadingMessage || "분석 중..."}</span>
                      <span className="font-semibold">{loadingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {audioHint && !isLoading && (
                  <div className={`mt-2 text-sm px-3 py-2 rounded-lg ${
                    audioHint.startsWith('✅') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'text-gray-600'
                  }`}>
                    {audioHint}
                  </div>
                )}
              </div>
            </div>
          </div>

          {showEmpty ? (
            <div className="text-sm text-gray-600">
              {rawText.trim() ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="font-semibold text-blue-900 mb-1">{songPageTranslations['ko'].lyricsPasted}</div>
                  <div className="text-blue-700 text-xs">
                  {songPageTranslations['ko'].pasteThenAnalyze}
                  </div>
                </div>
              ) : (
                <div>
                  {songPageTranslations['ko'].emptyStatePrompt}
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-gray-600 flex items-center justify-between">
              <div>
                {translate('totalLinesFormat', { n: filtered.length, m: linesAll.length })}
                {reviewMode === "sentence" ? ` ${songPageTranslations['ko'].reviewModeSuffix}` : ""}
              </div>
              <div>
                {translate('pageInfoFormat', { current: currentPage, total: totalPages, size: pageSize })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 内容区：根据学习模式显示 */}
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {showEmpty && showExample ? (
          // 显示示例
          <SongExample onClose={() => setShowExample(false)} />
        ) : showEmpty ? (
          // 空状态提示
          <div className="bg-white border rounded-2xl p-6 text-center">
            <div style={{ display: 'none' }}>
              <p className="text-gray-600 mb-4">{songPageTranslations['ko'].emptyStatePrompt}</p>
            </div>
            <button
              onClick={() => setShowExample(true)}
              className="px-4 py-2 text-white rounded-lg transition-colors bg-[#7a4f2d] hover:bg-[#a06c3e]"
            >
              {songPageTranslations['ko'].viewExample}
            </button>
          </div>
        ) : studyMode === "整段学习" ? (
          <WholeParagraphView
            linesAll={linesAll}
            audioFile={audioFile}
            audioUrl={opalPayload?.audioUrl}
            opalPayload={opalPayload}
            rawText={rawText}
            transcribedText={transcribedText}
            translationCache={translationCache}
            originalText={originalText}
            userLevel={userLevel}
          />
        ) : (
          <>
            {!showEmpty && pageItems.length === 0 ? (
              <div className="bg-white border rounded-2xl p-6 text-gray-600">
                {reviewMode === "sentence" ? songPageTranslations['ko'].noSearchResult : songPageTranslations['ko'].adjustSearch}
              </div>
            ) : null}

            {pageItems.map((it: any) => (
              <SentenceCard
                key={(it.lineNo + "-" + (((it.item && it.item.zhSentence) || "")))}
                item={it.item}
                starred={!!it.starred}
              />
            ))}

            {/* 分页 */}
            {!showEmpty && (
              <div className="flex items-center justify-between pt-4">
                <button
                  className="px-3 py-1 rounded-lg border text-sm bg-white disabled:opacity-50"
                  disabled={currentPage <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  {songPageTranslations['ko'].prevPage}
                </button>
                <div className="text-sm text-gray-600">
                  {translate('pageShortFormat', { current: currentPage, total: totalPages })}
                </div>
                <button
                  className="px-3 py-1 rounded-lg border text-sm bg-white disabled:opacity-50"
                  disabled={currentPage >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  {songPageTranslations['ko'].nextPage}
                </button>
              </div>
            )}

            {opalPayload?.status === 'ok' && pageItems.length > 0 && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 0' }}>
                <button
                  onClick={exportCurrentPage}
                  disabled={pageItems.length === 0}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 8,
                    border: '1.5px solid #e8f4f0',
                    background: '#e8f4f0',
                    color: '#2d7a5e',
                    fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: "'Noto Sans KR', sans-serif",
                  }}
                >
                  ↓ HTML 내보내기
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* 대화 생성 모달 */}
      <DialogueModal />
      </div>
    </div>
  );
}

// 解析教学提示内容
function parseTeachingTip(tipText: string): {
  vocabulary: Array<{ word: string; hskLevel: string }>;
  patterns: Array<{ pattern: string; hskLevel: string }>;
} {
  const vocabulary: Array<{ word: string; hskLevel: string }> = [];
  const patterns: Array<{ pattern: string; hskLevel: string }> = [];
  
  const lines = tipText.split('\n').map(l => l.trim()).filter(l => l);
  
  let currentSection = '';
  
  for (const line of lines) {
    // 检测章节标题
    if (line.includes('词汇') || line.includes('重点词汇')) {
      currentSection = 'vocabulary';
      continue;
    }
    if (line.includes('句型') || line.includes('重点句型')) {
      currentSection = 'patterns';
      continue;
    }
    
    // 解析词汇行：• 词语（HSK等级）
    if (currentSection === 'vocabulary' && line.startsWith('•')) {
      const match = line.match(/•\s*(.+?)\s*（(.+?)）|•\s*(.+?)\s*\((.+?)\)/);
      if (match) {
        const word = match[1] || match[3] || '';
        const hskLevel = match[2] || match[4] || '';
        if (word) {
          vocabulary.push({ word: word.trim(), hskLevel: hskLevel.trim() });
        }
      }
    }
    
    // 解析句型行：• 结构（HSK等级）
    if (currentSection === 'patterns' && line.startsWith('•')) {
      const match = line.match(/•\s*(.+?)\s*（(.+?)）|•\s*(.+?)\s*\((.+?)\)/);
      if (match) {
        const pattern = match[1] || match[3] || '';
        const hskLevel = match[2] || match[4] || '';
        if (pattern) {
          patterns.push({ pattern: pattern.trim(), hskLevel: hskLevel.trim() });
        }
      }
    }
  }
  
  return { vocabulary, patterns };
}

