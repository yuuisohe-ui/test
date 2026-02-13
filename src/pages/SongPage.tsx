import { useEffect, useMemo, useState } from "react";

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
import { TTSButton } from "../components/TTSButton";
import { SingAlongButton } from "../components/SingAlongButton";
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
  
  // tokensZh를 Token[]로 변환，并从chunks中提取拼音
  let tokens = (line.tokensZh || []).map((token: any) => {
    // 从chunks中查找包含该词的chunk，提取拼音
    let pinyin = '';
    if (line.chunks) {
      const matchingChunk = line.chunks.find((chunk: any) => {
        const chunkZh = chunk.chunkZh || '';
        return chunkZh.includes(token.text);
      });
      pinyin = matchingChunk?.pinyin || '';
    }
    
    return {
      text: token.text || "",
      glossZh: token.glossZh || "",
      glossKr: token.glossKr || "",
      example: token.example || "",
      pinyin: pinyin,
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
}

export default function SongPage({ initialLyrics }: SongPageProps = {}) {
  // 输入区
  const [rawText, setRawText] = useState(initialLyrics || "");
  const [audioHint, setAudioHint] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [languageMode, setLanguageMode] = useState<'auto' | 'ko' | 'zh'>('auto');
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);
  
  // initialLyrics가 변경되면 rawText 업데이트
  useEffect(() => {
    if (initialLyrics) {
      setRawText(initialLyrics);
    }
  }, [initialLyrics]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [opalPayload, setOpalPayload] = useState<SongPayload | null>(null);
  const [testResult, setTestResult] = useState<string | null>(null);
  // 保存原始输入文本（用于中文输入时直接显示）
  const [originalText, setOriginalText] = useState<string>("");
  // 保存原始转写文本（用于音频转文字时直接显示）
  const [transcribedText, setTranscribedText] = useState<string>("");
  
  // 단어 선택 및 대화 생성
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [dialogueResult, setDialogueResult] = useState<{ word: string; dialogue: string; translation?: string } | null>(null);
  const [isGeneratingDialogue, setIsGeneratingDialogue] = useState(false);
  
  // 翻译缓存：存储已翻译的中文到韩文的映射
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});

  // 列表与模式
  const [search, setSearch] = useState("");
  const [reviewMode, setReviewMode] = useState<"word" | "sentence" | false>(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;


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
            const transcribedLines = transcribedText.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
            const koreanLines = transcribedLines.filter(l => isKorean(l));
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
            const rawLines = rawText.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
            const lineNo = Number(line?.lineNo ?? index + 1);
            
            // 优先匹配行号
            if (lineNo > 0 && rawLines[lineNo - 1] && isKorean(rawLines[lineNo - 1])) {
              displayLine = rawLines[lineNo - 1];
            } else {
              // 查找所有韩文行
              const koreanLines = rawLines.filter(l => isKorean(l));
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
            const rawLines = rawText.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
            hasKoreanInRawText = rawLines.some(l => isKorean(l));
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
  const [userLevel, setUserLevel] = useState<"初级" | "中级" | "高级" | null>(null);
  const [studyMode, setStudyMode] = useState<"整段学习" | "分段学习" | "分句学习">("分句学习");
  const [showLevelWarning, setShowLevelWarning] = useState(false);

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
    } else if (reviewMode === "word") {
      // 单词复习：暂时空着，显示所有句子（后续可以过滤包含收藏单词的句子）
      afterReview = base;
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
    const title = "中文歌词学习笔记";
    const modeTitle = reviewMode === "sentence" 
      ? "（句子复习模式：本页星标句子）" 
      : reviewMode === "word"
      ? "（单词复习模式：本页句子）"
      : "（普通模式：本页句子）";

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

            <h3 style="margin:16px 0 8px 0;">词汇表</h3>
            <table style="width:100%; border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">词</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">中文释义</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">韩语释义</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">例句</th>
                </tr>
              </thead>
              <tbody>
                ${tokensRows || `<tr><td colspan="4" style="padding:8px; color:#777;">（暂无）</td></tr>`}
              </tbody>
            </table>

            <h3 style="margin:16px 0 8px 0;">语块表</h3>
            <table style="width:100%; border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">语块</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">拼音</th>
                  <th style="text-align:left; border-bottom:1px solid #eee; padding:8px;">声调结构</th>
                </tr>
              </thead>
              <tbody>
                ${chunksRows || `<tr><td colspan="3" style="padding:8px; color:#777;">（暂无）</td></tr>`}
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
        <p style="margin:0 0 24px 0; color:#555;">${modeTitle} · 导出时间：${new Date().toLocaleString()}</p>
        ${blocks || `<p style="color:#777;">（当前页无内容）</p>`}
      </body>
      </html>
    `;

    const filename = reviewMode === "sentence" 
      ? `review_sentence_page_${currentPage}.html` 
      : reviewMode === "word"
      ? `review_word_page_${currentPage}.html`
      : `page_${currentPage}.html`;
    downloadHtml(filename, html);
  }

  // 音频拖拽（仅 UI）
  function onAudioFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const f = files[0];
    if (!f.type.startsWith("audio/")) {
      setAudioHint("仅支持音频文件（mp3 / m4a / wav）。");
      return;
    }
    setAudioFile(f);
    // 如果已经有分析结果，在提示中提醒
    if (opalPayload && opalPayload.status === 'ok' && opalPayload.lines && opalPayload.lines.length > 0) {
      setAudioHint(`✅ 文件 "${f.name}" 已选择！点击"开始转写 / 分析"将替换当前内容。`);
    } else {
      setAudioHint(`✅ 文件 "${f.name}" 已成功选择！请点击"开始转写 / 分析"按钮开始今天的学习吧！`);
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
        
        setOpalPayload(result);
        setAudioHint(`ChatGPT API 테스트 성공! ${result.lines?.length || 0}개 라인 분석 완료.`);
      } else {
        setTestResult(`❌ 실패: ${result.message || '알 수 없는 오류'}`);
        setAudioHint(result.message || 'ChatGPT API 테스트 실패');
      }
    } catch (error) {
      console.error('❌ ChatGPT API 테스트 오류:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      setTestResult(`❌ 오류: ${errorMessage}`);
      setAudioHint(`테스트 실패: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }

  // API 호출 (ChatGPT 우선, Opal 대체, Mock 폴백)
  async function onClickTranscribe() {
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
      const confirmed = window.confirm('⚠️ 已有学习资料，开始新分析将替换当前内容。是否继续？');
      if (!confirmed) {
        return; // 用户取消，不执行分析
      }
    }
    
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
          
          // 使用优化后的函数，只调用一次 Whisper API，同时获取转写文本和分析结果
          const { result: apiResult, transcribedText: transcribed, detectedLang: whisperDetectedLang } = 
            await callChatGPTApiWithAudioAndTranscription(audioFile, languageMode, requestId);
          
          // 保存检测到的语言（确保格式统一为 'ko' 或 'zh'）
          const normalizedDetectedLang = normalizeLanguage(whisperDetectedLang) || whisperDetectedLang;
          setDetectedLanguage(normalizedDetectedLang || null);
          
          // 保存转写文本（用于中文输入时直接显示）
          setTranscribedText(transcribed);
          
          result = apiResult;
          
          setLoadingMessage("ChatGPT로 가사 분석 중... (80%)");
          setLoadingProgress(80);
        } else {
          setLoadingMessage("Opal API로 음성 분석 중... (50%)");
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
          setLoadingMessage("ChatGPT로 가사 분석 중... (30%)");
          setLoadingProgress(30);
          
          // ChatGPT API로 텍스트 분석
          result = await callChatGPTApiWithText(rawText.trim(), detectedLang, requestId);
          
          setLoadingMessage("분석 결과 처리 중... (80%)");
          setLoadingProgress(80);
        } else {
          setLoadingMessage("Opal API로 텍스트 분석 중... (50%)");
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
    } catch (error) {
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
      setIsLoading(false);
      setTimeout(() => {
        setLoadingProgress(0);
        setLoadingMessage("");
      }, 2000);
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
          title={isStarred ? "取消收藏" : "收藏词汇"}
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
            title={isStarred ? "取消收藏" : "收藏句型"}
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
        const rawLines = rawText.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
        const koreanLines = rawLines.filter(l => checkKorean(l));
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

    // 判断输入语言（通过langDisplay或检查原始文本）
    const isChineseInput = opalPayload?.langDisplay === 'zh' || 
                          (originalText && /[\u4e00-\u9fff]/.test(originalText)) ||
                          (transcribedText && /[\u4e00-\u9fff]/.test(transcribedText));
    
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
    
    // 对于中文输入，优先使用原始文本或转写文本
    let finalZhSentence = correctedZhSentence;
    if (isChineseInput) {
      // 优先使用转写文本（音频输入）
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
      }
      // 如果没有转写文本，使用原始文本（文本输入）
      else if (originalText) {
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
    }
    // 对于韩文输入（音频或文本），直接使用 API 返回的 zhSentence（中文翻译）
    // 不要使用转写文本（韩文）作为中文整句展示
    // finalZhSentence 已经是 correctedZhSentence，即 API 返回的正确的中文翻译
    // 如果 correctedZhSentence 为空，使用 data.sentence 作为后备
    if (!finalZhSentence || finalZhSentence.trim() === "" || checkIsKorean2(finalZhSentence)) {
      finalZhSentence = data.sentence || "";
    }

    return (
    <div className="bg-white rounded-2xl shadow-sm border p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-sm text-gray-500 w-10">{formatLineNo(lineNo)}</div>
          <div className="font-medium flex-1 truncate">
            {displayLine}
            {isDuplicate && (
              <span className="ml-2 text-xs text-gray-400 italic">(重复)</span>
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
            aria-label={starred ? "取消星标" : "星标"}
            title={starred ? "取消星标" : "星标"}
          >
            ★
          </button>
        </div>

        <div className="mb-4">
          {/* 中文整句展示 + 跟唱 */}
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-700">中文整句展示</div>
            <SingAlongButton 
              text={finalZhSentence}
              userLevel={userLevel}
            />
          </div>
          <SentenceView 
            sentence={finalZhSentence} 
            tokens={data.tokens ?? []} 
            selectedWord={selectedWord}
            item={item}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-700">学习分析表</div>
            <div className="relative">
            <button
              onClick={async () => {
                if (!userLevel) {
                  alert('请先选择您的语言等级');
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
                          koreanExample: "这是句型的韩文例句翻译",
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
                  console.error('生成教学提示失败:', error);
                  alert('生成教学提示失败，请稍后重试');
                } finally {
                  setIsGeneratingTipForThis(false);
                  setTeachingTipProgress(0);
                }
              }}
              disabled={isGeneratingTipForThis || !userLevel}
              className={`
                inline-flex items-center justify-center gap-1
                px-2 py-1 rounded-lg
                ${isGeneratingTipForThis 
                  ? 'bg-amber-200 text-amber-800 cursor-wait' 
                  : 'bg-amber-100 hover:bg-amber-200 active:bg-amber-300 text-amber-700 hover:text-amber-800'
                }
                transition-colors duration-200
                text-xs font-medium
                ${!userLevel ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              title={!userLevel ? "请先选择语言等级" : isGeneratingTipForThis ? "生成中..." : showTeachingTip ? "收起教学提示" : "查看本句教学提示"}
            >
              {isGeneratingTipForThis ? (
                <>
                  <svg className="animate-spin h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  生成中... {teachingTipProgress > 0 && `${teachingTipProgress}%`}
                </>
              ) : showTeachingTip ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
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
                    className="h-3 w-3"
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
                  教学提示
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
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">重点词汇</h4>
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
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">重点句型</h4>
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
                className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                试着造个句子，我来点评
              </button>
              </div>
            )}
            
            {/* 练习对话框 */}
            {showPracticeDialog && (
              <div className="absolute top-full left-0 mt-2 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border-2 border-blue-300 p-4">
                {/* 气泡箭头 */}
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l-2 border-t-2 border-blue-300 transform rotate-45"></div>
                
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-800">造句练习</h4>
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
                    placeholder="在这里输入你造的句子..."
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm resize-none"
                    rows={3}
                    disabled={isAnalyzingSentence}
                  />
                  
                  {/* 语音输入按钮 */}
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={async () => {
                        if (isRecording) {
                          // 停止录音
                          if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                            mediaRecorder.stop();
                          }
                          setIsRecording(false);
                        } else {
                          // 开始录音
                          try {
                            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                            const recorder = new MediaRecorder(stream);
                            const chunks: Blob[] = [];
                            
                            recorder.ondataavailable = (e) => {
                              if (e.data.size > 0) {
                                chunks.push(e.data);
                              }
                            };
                            
                            recorder.onstop = async () => {
                              const blob = new Blob(chunks, { type: 'audio/wav' });
                              // 使用 Whisper API 转写
                              try {
                                const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
                                const apiUrl = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';
                                
                                const formData = new FormData();
                                formData.append('file', blob, 'recording.wav');
                                formData.append('model', 'whisper-1');
                                formData.append('language', 'zh');
                                
                                const response = await fetch(`${apiUrl}/audio/transcriptions`, {
                                  method: 'POST',
                                  headers: {
                                    'Authorization': `Bearer ${apiKey}`,
                                  },
                                  body: formData,
                                });
                                
                                if (response.ok) {
                                  const data = await response.json();
                                  setPracticeInput(data.text || '');
                                }
                              } catch (error) {
                                console.error('语音转写失败:', error);
                              }
                              
                              stream.getTracks().forEach(track => track.stop());
                            };
                            
                            recorder.start();
                            setMediaRecorder(recorder);
                            setIsRecording(true);
                          } catch (error) {
                            console.error('无法访问麦克风:', error);
                            alert('无法访问麦克风，请检查权限设置');
                          }
                        }
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isRecording
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {isRecording ? '停止录音' : '语音输入'}
                    </button>
                  </div>
                </div>
                
                {/* 提交按钮 */}
                <button
                  onClick={async () => {
                    if (!practiceInput.trim()) {
                      alert('请输入你造的句子');
                      return;
                    }
                    
                    if (!userLevel) {
                      alert('请先选择语言等级');
                      return;
                    }
                    
                    setIsAnalyzingSentence(true);
                    setPracticeFeedback(null);
                    
                    try {
                      const feedback = await evaluateSentence(practiceInput, userLevel, zhSentence || data.sentence || "");
                      setPracticeFeedback(feedback);
                    } catch (error) {
                      console.error('评价失败:', error);
                      alert('评价失败，请稍后重试');
                    } finally {
                      setIsAnalyzingSentence(false);
                    }
                  }}
                  disabled={isAnalyzingSentence || !practiceInput.trim()}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAnalyzingSentence ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      分析中...
                    </>
                  ) : (
                    '提交评价'
                  )}
                </button>
                
                {/* 反馈显示 */}
                {practiceFeedback && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-800 whitespace-pre-wrap">{practiceFeedback}</div>
                  </div>
                )}
              </div>
            )}
            </div>
          </div>
          
          <AnalysisTable 
            chunks={data.chunks ?? []} 
            sentence={data.sentence}
            audioFile={audioFile}
            audioUrl={opalPayload?.audioUrl}
            startSec={item?.startSec}
            endSec={item?.endSec}
          />
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
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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

  // 猫咪助手状态
  const [showCatHelper, setShowCatHelper] = useState(false);
  const [showCatDialog, setShowCatDialog] = useState(false);
  const [catDialogInput, setCatDialogInput] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 猫咪助手 - 左侧浮动 */}
      <div className="fixed left-4 bottom-4 z-40">
        {!showCatDialog ? (
          <div className="relative">
            <button
              onClick={() => setShowCatDialog(true)}
              onMouseEnter={() => setShowCatHelper(true)}
              onMouseLeave={() => setShowCatHelper(false)}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-3xl hover:scale-110"
              aria-label="帮助助手"
            >
              🐱
            </button>
            {showCatHelper && (
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-200 whitespace-nowrap">
                <div className="text-sm text-gray-700">卡住了吗？我来帮你🌱</div>
                {/* 小箭头 */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-80 bg-white rounded-lg shadow-xl border-2 border-orange-300 p-4">
            {/* 对话框头部 */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐱</span>
                <h4 className="text-sm font-semibold text-gray-800">学习助手</h4>
              </div>
              <button
                onClick={() => {
                  setShowCatDialog(false);
                  setCatDialogInput("");
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 对话框内容 */}
            <div className="mb-3 max-h-64 overflow-y-auto space-y-2">
              <div className="bg-gray-50 rounded-lg p-2 text-sm text-gray-700">
                你好！我是你的学习助手，有什么问题可以问我哦 😊
              </div>
            </div>
            
            {/* 输入区域 */}
            <div className="flex gap-2">
              <input
                type="text"
                value={catDialogInput}
                onChange={(e) => setCatDialogInput(e.target.value)}
                placeholder="输入你的问题..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && catDialogInput.trim()) {
                    // 暂时不处理，后续接入AI
                    setCatDialogInput("");
                  }
                }}
              />
              <button
                onClick={() => {
                  if (catDialogInput.trim()) {
                    // 暂时不处理，后续接入AI
                    setCatDialogInput("");
                  }
                }}
                disabled={!catDialogInput.trim()}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                发送
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 点击外部关闭对话框 */}
      {showCatDialog && (
        <div
          className="fixed inset-0 z-30"
          onClick={(e) => {
            // 如果点击的是对话框外部，关闭对话框
            if (e.target === e.currentTarget) {
              setShowCatDialog(false);
              setCatDialogInput("");
            }
          }}
        />
      )}

      {/* 主内容区 */}
      <div className="flex-1">
      {/* 顶部固定输入区 */}
      <div className=" z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">中文歌词学习分析</h1>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 rounded-lg border text-sm bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
                onClick={testChatGPTAPI}
                disabled={isLoading}
                title="ChatGPT API 연결 테스트"
              >
                🧪 API 테스트
              </button>
              {/* 复习模式选择 */}
              <div className="flex items-center gap-2">
                <button
                  className={`px-3 py-1 rounded-lg border text-sm ${
                    reviewMode === "sentence" ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setReviewMode((v) => v === "sentence" ? false : "sentence")}
                >
                  {reviewMode === "sentence" ? "退出句子复习" : "句子复习"}
                </button>
                <button
                  className={`px-3 py-1 rounded-lg border text-sm ${
                    reviewMode === "word" ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => setReviewMode((v) => v === "word" ? false : "word")}
                >
                  {reviewMode === "word" ? "退出单词复习" : "单词复习"}
                </button>
              </div>
              <button
                className="px-3 py-1 rounded-lg border text-sm bg-white"
                onClick={exportCurrentPage}
                disabled={pageItems.length === 0}
              >
                导出本页 HTML
              </button>
            </div>
          </div>
                    {/* ✅ 统一主入口模块（音频优先） */}
                    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            {/* 上半：大音频拖拽区 */}
            <div
              className={`p-8 md:p-12 border-b border-dashed transition-colors ${
                isDragging 
                  ? 'bg-blue-100 border-blue-400 border-2' 
                  : 'border-gray-300 bg-sky-50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="text-lg md:text-xl font-semibold">
                上传音频可获得更完整的学习资料
              </div>
              <div className="text-xs text-gray-500 mt-1">
                建议吐字清晰、节奏稳定（当前仅 UI 占位，不接 Opal）
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer hover:bg-gray-50 text-sm">
                  选择音频文件
                  <input
                    className="hidden"
                    type="file"
                    accept="audio/*"
                    onChange={(e) => onAudioFiles(e.target.files)}
                  />
                </label>

                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-700">语言：</label>
                  <select
                    value={languageMode}
                    onChange={(e) => setLanguageMode(e.target.value as 'auto' | 'ko' | 'zh')}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="auto">自动</option>
                    <option value="ko">韩文</option>
                    <option value="zh">中文</option>
                  </select>
                </div>

                {/* 显示检测结果和冲突提示 */}
                {detectedLanguage && (() => {
                  // ⭐ 使用映射函数确保格式统一（双重保险，即使 API 返回格式不一致也能正确处理）
                  const normalizedDetectedLang = normalizeLanguage(detectedLanguage) || detectedLanguage;
                  
                  return (
                    <div className="text-xs text-gray-600">
                      {languageMode === 'auto' ? (
                        // 自动模式：只显示检测语言
                        <span>检测语言：{normalizedDetectedLang === 'ko' ? '韩文' : '中文'}</span>
                      ) : (
                        // 手动选择模式：显示检测语言，如果不一致则显示冲突提示
                        <>
                          <span>检测语言：{normalizedDetectedLang === 'ko' ? '韩文' : '中文'}</span>
                          {normalizedDetectedLang !== languageMode && (
                            <span className="ml-2 text-orange-600">
                              （检测为 {normalizedDetectedLang === 'ko' ? '韩文' : '中文'}，仍按你选择的 {languageMode === 'ko' ? '韩文' : '中文'} 处理）
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  );
                })()}

                <div className="flex flex-col items-center gap-3">
                  <button
                    className="px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    onClick={onClickTranscribe}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>分析中...</span>
                      </>
                    ) : (
                      "开始转写 / 分析"
                    )}
                  </button>
                  
                  {/* 中文水平选择器 */}
                  <div className="relative">
                    <div className="text-xs text-gray-500 mb-1 text-center">请选择您的语言等级</div>
                    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => {
                          setUserLevel("初级");
                          setShowLevelWarning(false);
                        }}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          userLevel === "初级"
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        初级
                      </button>
                      <button
                        onClick={() => {
                          setUserLevel("中级");
                          setShowLevelWarning(false);
                        }}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          userLevel === "中级"
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        中级
                      </button>
                      <button
                        onClick={() => {
                          setUserLevel("高级");
                          setShowLevelWarning(false);
                        }}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          userLevel === "高级"
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        高级
                      </button>
                    </div>
                    
                    {/* 提示气泡 */}
                    {showLevelWarning && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 animate-bounce">
                        <div className="bg-red-500 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap relative">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>请先选择您的语言等级</span>
                          </div>
                          {/* 气泡箭头 */}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`text-xs transition-colors ${
                  isDragging ? 'text-blue-600 font-semibold' : 'text-gray-400'
                }`}>
                  {isDragging ? '松开鼠标以放置文件' : '或直接拖拽音频到此区域'}
                </div>
              </div>

              {/* 로딩 진행률 표시 */}
              {isLoading && (
                <div className="mt-4 space-y-2">
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
                <div className={`mt-3 text-xs px-3 py-2 rounded-lg ${
                  audioHint.startsWith('✅') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'text-gray-600'
                }`}>
                  {audioHint}
                </div>
              )}
              {testResult && (
                <div className={`mt-3 p-3 rounded-lg text-sm ${
                  testResult.startsWith('✅') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="font-semibold mb-1">테스트 결과:</div>
                  <div>{testResult}</div>
                  <div className="mt-2 text-xs opacity-75">
                    브라우저 콘솔(F12)에서 상세 로그를 확인하세요.
                  </div>
                </div>
              )}
            </div>

            {/* 下半：文本粘贴（次级） */}
            <div className="p-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                或直接粘贴歌词文本（支持中文 / 韩文）
              </div>
              <textarea
                className="w-full h-28 p-3 rounded-xl border bg-white"
                placeholder="在这里粘贴歌词，每行一句…（粘贴后请点击上方「开始转写/分析」按钮）"
                value={rawText}
                onChange={(e) => {
                  setRawText(e.target.value);
                  // 不立即清除分析结果，保留现有内容直到点击"开始转写"
                }}
              />
              
              {/* 学习模式选择 */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-700 mb-3">学习模式</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setStudyMode("整段学习")}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      studyMode === "整段学习"
                        ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    📖 整段学习
                  </button>
                  <button
                    onClick={() => setStudyMode("分段学习")}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      studyMode === "分段学习"
                        ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    📑 分段学习
                  </button>
                  <button
                    onClick={() => setStudyMode("分句学习")}
                    className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                      studyMode === "分句学习"
                        ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    📝 分句学习
                  </button>
                </div>
              </div>
            </div>
          </div>

                   {/* 输入行：文本 + 搜索 */}
                   <div className="hidden grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">粘贴歌词文本（按换行分句）</div>
              <textarea
                className="w-full h-24 p-3 rounded-xl border bg-white"
                placeholder="在这里粘贴歌词，每行一句…"
                value={rawText}
                onChange={(e) => {
                  setRawText(e.target.value);
                  // 不立即清除分析结果，保留现有内容直到点击"开始转写"
                }}
              />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">搜索（按中文包含匹配）</div>
              <input
                className="w-full p-3 rounded-xl border bg-white"
                placeholder="输入中文词或片段进行过滤…"
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
                  {isDragging ? '松开鼠标以放置文件' : '拖拽音频文件（占位）'}
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
                    '开始转写 / 分析'
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
                  <div className="font-semibold text-blue-900 mb-1">📝 歌词已粘贴</div>
                  <div className="text-blue-700 text-xs">
                    请点击上方的 <strong>"开始转写 / 分析"</strong> 按钮开始分析歌词。
                  </div>
                </div>
              ) : (
                <div>
                  请粘贴歌词或拖拽音频文件，然后点击 <strong>"开始转写 / 分析"</strong> 按钮。
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-gray-600 flex items-center justify-between">
              <div>
                共 {filtered.length} 句（原始 {linesAll.length} 句）
                {reviewMode === "sentence" ? " · 句子复习模式（仅星标句子）" : reviewMode === "word" ? " · 单词复习模式" : ""}
              </div>
              <div>
                第 {currentPage} / {totalPages} 页（每页 {pageSize} 句）
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 内容区：本页 10 句全部展开 */}
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {!showEmpty && pageItems.length === 0 ? (
          <div className="bg-white border rounded-2xl p-6 text-gray-600">
            没有匹配结果。{reviewMode === "sentence" ? "请调整搜索词或取消句子复习模式。" : reviewMode === "word" ? "请调整搜索词或取消单词复习模式。" : "请调整搜索词。"}
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
              上一页
            </button>
            <div className="text-sm text-gray-600">
              第 {currentPage} / {totalPages} 页
            </div>
            <button
              className="px-3 py-1 rounded-lg border text-sm bg-white disabled:opacity-50"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              下一页
            </button>
          </div>
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

