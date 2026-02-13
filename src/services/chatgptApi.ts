import { SongPayload, OpalLine } from '../data/opalMock';
import { getTextAnalysisPrompt } from '../prompts/textAnalysisPrompt';
import { getAudioAnalysisPrompt } from '../prompts/audioAnalysisPrompt';
import { getLineByLineAnalysisPrompt } from '../prompts/lineByLineAnalysisPrompt';

/**
 * 将 Whisper 返回的语言代码统一映射为内部格式
 * @param lang Whisper 返回的语言代码（可能是 "korean", "chinese", "ko", "zh" 等）
 * @returns 统一格式：'ko' | 'zh' | null
 */
function normalizeWhisperLanguage(lang: string | null | undefined): 'ko' | 'zh' | null {
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
  
  // 未知语言，默认返回 null（由调用方决定默认值）
  return null;
}

// ChatGPT / OpenAI API 설정
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
const OPENAI_API_URL = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

export interface ChatGPTRequest {
  text?: string;
  audioFile?: File;
  audioUrl?: string;
  sourceLang?: 'ko' | 'zh';
  targetLang?: 'zh';
}

/**
 * ChatGPT API를 호출하여 텍스트/음성을 분석하고 학습 데이터를 생성합니다
 */
export async function callChatGPTApi(request: ChatGPTRequest): Promise<SongPayload> {
  try {
    // API 키 확인 (환경 변수에서 직접 가져오기)
    // Vite는 빌드 시점에 환경 변수를 주입하므로, 런타임에 직접 읽어야 함
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    console.log('🔑 API 키 확인:', apiKey ? `${apiKey.substring(0, 10)}...` : '없음');
    console.log('🔍 환경 변수 전체:', JSON.stringify({
      hasKey: !!import.meta.env.VITE_OPENAI_API_KEY,
      keyLength: import.meta.env.VITE_OPENAI_API_KEY?.length || 0,
      url: import.meta.env.VITE_OPENAI_API_URL || 'default'
    }));
    
    if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
      throw new Error('OpenAI API 키가 설정되지 않았습니다. Vercel Dashboard의 Environment Variables에서 VITE_OPENAI_API_KEY를 설정하고 프로젝트를 재배포해주세요.');
    }

    // 텍스트 분석 요청
    if (request.text) {
      return await analyzeTextWithChatGPT(request.text, request.sourceLang || 'ko');
    }

    // 오디오 파일 분석 (Whisper API 사용)
    if (request.audioFile) {
      return await analyzeAudioWithChatGPT(request.audioFile, request.sourceLang || 'ko');
    }

    // 오디오 URL 분석
    if (request.audioUrl) {
      return await analyzeAudioUrlWithChatGPT(request.audioUrl, request.sourceLang || 'ko');
    }

    throw new Error('분석할 텍스트 또는 오디오가 제공되지 않았습니다.');
  } catch (error) {
    console.error('ChatGPT API 호출 오류:', error);
    
    return {
      status: 'failed',
      message: error instanceof Error 
        ? error.message 
        : 'ChatGPT API 호출 중 오류가 발생했습니다.',
      songMeta: {
        sourceLang: request.sourceLang || 'ko',
        hasAudio: !!request.audioFile || !!request.audioUrl,
      },
      lines: [],
    };
  }
}

/**
 * 텍스트를 ChatGPT로 분석하여 학습 데이터 생성
 */
async function analyzeTextWithChatGPT(text: string, sourceLang: 'ko' | 'zh'): Promise<SongPayload> {
  const prompt = getTextAnalysisPrompt(text, sourceLang);

  // API 키와 URL을 환경 변수에서 직접 가져오기
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || OPENAI_API_URL;

  console.log('📤 ChatGPT API 요청 전송:', {
    url: `${apiUrl}/chat/completions`,
    model: 'gpt-4o',
    promptLength: prompt.length,
    apiKeyPrefix: apiKey ? `${apiKey.substring(0, 10)}...` : '없음',
  });

  const response = await fetch(`${apiUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o', // 또는 'gpt-3.5-turbo'
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
      max_tokens: 8000, // 긴 가사를 위해 토큰 수 증가
    }),
  });

  console.log('📥 ChatGPT API 응답 상태:', response.status, response.statusText);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    console.error('❌ ChatGPT API 오류:', errorData);
    throw new Error(errorData.error?.message || `API 호출 실패: ${response.status}`);
  }

  const data = await response.json();
  console.log('📦 ChatGPT API 응답 데이터:', data);
  let content = data.choices[0]?.message?.content;
  console.log('📝 원본 콘텐츠 (처음 500자):', content?.substring(0, 500));
  
  if (!content) {
    throw new Error('ChatGPT 응답이 비어있습니다.');
  }

  // 마크다운 코드 블록 제거 (```json ... ``` 또는 ``` ... ```)
  content = content.trim();
  if (content.startsWith('```')) {
    // 첫 번째 ``` 제거
    const firstIndex = content.indexOf('```');
    if (firstIndex !== -1) {
      content = content.substring(firstIndex + 3);
      // 언어 지정자 제거 (json, JSON 등)
      if (content.startsWith('json') || content.startsWith('JSON')) {
        content = content.substring(4).trim();
      }
      // 마지막 ``` 제거
      const lastIndex = content.lastIndexOf('```');
      if (lastIndex !== -1) {
        content = content.substring(0, lastIndex).trim();
      }
    }
  }

  // JSON 객체 추출 (중괄호로 시작하는 부분 찾기)
  const jsonStart = content.indexOf('{');
  const jsonEnd = content.lastIndexOf('}');
  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    content = content.substring(jsonStart, jsonEnd + 1);
  }

  console.log('📝 정제된 콘텐츠 (처음 500자):', content.substring(0, 500));

  try {
    const parsed = JSON.parse(content);
    console.log('✅ JSON 파싱 성공:', parsed);
    
    // ⭐ 调试日志：排查并发请求覆盖问题
    try {
      const firstLine = (parsed as any)?.lines?.[0];
      const t = firstLine?.tokensZh ?? [];
      console.log("🧾 [A] parsed summary", {
        requestId: "NO_REQUEST_ID_IN_SCOPE",
        lines: (parsed as any)?.lines?.length ?? 0,
        zhSentence: firstLine?.zhSentence,
        tokensZhLen: t.length,
        tokensZhHead: t.slice(0, 10).map((x: any) => x?.text),
      });
    } catch (e) {
      console.warn("🧾 [A] parsed summary failed", e);
    }
    
    return parsed as SongPayload;
  } catch (parseError) {
    console.error('❌ JSON 파싱 오류:', parseError);
    console.error('❌ 파싱 실패한 콘텐츠 전체:', content);
    throw new Error(`ChatGPT 응답을 JSON으로 파싱할 수 없습니다: ${parseError instanceof Error ? parseError.message : '알 수 없는 오류'}`);
  }
}

/**
 * 오디오 파일을 Whisper API로 전사하고 ChatGPT로 분석
 */
async function analyzeAudioWithChatGPT(audioFile: File, sourceLang: 'ko' | 'zh'): Promise<SongPayload> {
  // API 키와 URL을 환경 변수에서 직접 가져오기
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || OPENAI_API_URL;

  // 1단계: Whisper API로 음성 전사
  const formData = new FormData();
  formData.append('file', audioFile);
  formData.append('model', 'whisper-1');
  formData.append('language', sourceLang === 'ko' ? 'ko' : 'zh');
  formData.append('response_format', 'verbose_json'); // ⭐ 获取详细的时间戳信息

  const transcriptionResponse = await fetch(`${apiUrl}/audio/transcriptions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!transcriptionResponse.ok) {
    const errorData = await transcriptionResponse.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.error?.message || '음성 전사 실패');
  }

  const transcriptionData = await transcriptionResponse.json();
  
  // ⭐ 调试日志：打印 Whisper 返回对象的 keys 和时间相关字段（analyzeAudioWithChatGPT）
  console.log('🎤 [Whisper-analyzeAudio] 返回对象 keys:', Object.keys(transcriptionData));
  console.log('🎤 [Whisper-analyzeAudio] 返回对象示例:', {
    text: transcriptionData.text,
    language: transcriptionData.language,
    duration: transcriptionData.duration,
    segments: transcriptionData.segments ? `[${transcriptionData.segments.length} segments]` : '无',
    words: transcriptionData.words ? `[${transcriptionData.words.length} words]` : '无',
  });
  
  // ⭐ 如果有 segments，打印前三个 segments 的完整示例
  if (transcriptionData.segments && transcriptionData.segments.length > 0) {
    console.log('🎤 [Whisper-analyzeAudio] segments 总数:', transcriptionData.segments.length);
    const segmentsToShow = transcriptionData.segments.slice(0, 3);
    segmentsToShow.forEach((segment: any, index: number) => {
      console.log(`🎤 [Whisper-analyzeAudio] segments[${index}] keys:`, Object.keys(segment));
      console.log(`🎤 [Whisper-analyzeAudio] segments[${index}] 完整示例:`, segment);
    });
  }
  
  // ⭐ 如果有 words，打印第一个 word 的示例
  if (transcriptionData.words && transcriptionData.words.length > 0) {
    const firstWord = transcriptionData.words[0];
    console.log('🎤 [Whisper-analyzeAudio] words[0] keys:', Object.keys(firstWord));
    console.log('🎤 [Whisper-analyzeAudio] words[0] 示例:', firstWord);
  }
  
  const transcribedText = transcriptionData.text;

  console.log('🎤 Whisper 전사 결과:', transcribedText);

  if (!transcribedText) {
    throw new Error('전사된 텍스트가 없습니다.');
  }

  // ⭐ 从 Whisper segments 生成时间戳数组
  const segmentsForTiming: Array<{ startSec: number; endSec: number; displayLine: string }> = [];
  if (transcriptionData.segments && transcriptionData.segments.length > 0) {
    transcriptionData.segments.forEach((seg: any) => {
      segmentsForTiming.push({
        startSec: seg.start || 0,
        endSec: seg.end || 0,
        displayLine: seg.text?.trim() || '',
      });
    });
    console.log('🎤 [Whisper-analyzeAudio] segmentsForTiming 生成:', segmentsForTiming.length, '个 segments');
  } else {
    console.warn('⚠️ [Whisper-analyzeAudio] 没有 segments 数据，无法生成时间戳');
  }

  // ⭐ 越界时间过滤：在进入 timestamp override 逻辑之前
  const audioDuration = transcriptionData.duration || 0;
  const originalCount = segmentsForTiming.length;
  const filteredSegmentsForTiming = segmentsForTiming.filter((seg) => {
    const isValid = seg.startSec >= 0 && 
                    seg.endSec > seg.startSec && 
                    seg.endSec <= audioDuration;
    
    if (!isValid) {
      console.warn(
        `[Segment Filter] 删除越界 segment: start=${seg.startSec}, end=${seg.endSec}, duration=${audioDuration}`
      );
    }
    
    return isValid;
  });
  
  // 替换原数组（使用过滤后的结果）
  segmentsForTiming.length = 0;
  segmentsForTiming.push(...filteredSegmentsForTiming);
  
  console.log(
    `[Segment Filter] 过滤前=${originalCount} 过滤后=${segmentsForTiming.length}`
  );

  // 2단계: 전사된 텍스트를 ChatGPT로 분석 (음성 파일 분석용 프롬프트 사용)
  const result = await analyzeTranscribedAudioWithChatGPT(transcribedText, sourceLang, audioFile.name);
  
  // ⭐ 使用 Whisper segments 时间戳覆盖 GPT 的时间戳（合并 segments 以匹配 lines 数量）
  if (segmentsForTiming.length > 0 && result.lines && result.lines.length > 0) {
    const segmentsCount = segmentsForTiming.length;
    const linesCount = result.lines.length;
    
    if (segmentsCount !== linesCount) {
      console.warn(`⚠️ [Timestamp Override-analyzeAudio] lines.length (${linesCount}) !== segments.length (${segmentsCount})`);
      
      if (segmentsCount > linesCount) {
        // ⭐ 合并 segments 以匹配 lines 数量
        const base = Math.floor(segmentsCount / linesCount);
        const extra = segmentsCount % linesCount;
        
        console.log(`🎤 [Timestamp Override-analyzeAudio] 合并策略: base=${base}, extra=${extra}`);
        console.log(`🎤 [Timestamp Override-analyzeAudio] 前 ${extra} 行各拿 ${base + 1} 个 segment，其余行各拿 ${base} 个 segment`);
        
        let segmentIndex = 0;
        
        for (let i = 0; i < linesCount; i++) {
          // 计算当前行应该合并多少个 segment
          const segmentsPerLine = i < extra ? base + 1 : base;
          
          if (segmentIndex + segmentsPerLine > segmentsCount) {
            console.warn(`⚠️ [Timestamp Override-analyzeAudio] line[${i}] 超出 segments 范围，使用剩余所有 segments`);
            break;
          }
          
          // 获取当前行对应的 segments
          const segmentsForThisLine = segmentsForTiming.slice(segmentIndex, segmentIndex + segmentsPerLine);
          
          // 计算合并后的时间戳
          const startSec = segmentsForThisLine[0].startSec;
          const endSec = segmentsForThisLine[segmentsForThisLine.length - 1].endSec;
          
          // 覆盖时间戳
          result.lines[i].startSec = startSec;
          result.lines[i].endSec = endSec;
          
          // 打印合并日志
          const segmentIndices = segmentsForThisLine.map((_, idx) => segmentIndex + idx);
          console.log(`🎤 [Timestamp Override-analyzeAudio] line[${i}] (lineNo: ${result.lines[i].lineNo}) 合并 segments [${segmentIndices.join(', ')}]:`, {
            segments: segmentIndices,
            startSec,
            endSec,
            mergedSegmentsCount: segmentsPerLine,
          });
          
          segmentIndex += segmentsPerLine;
        }
      } else {
        // segments.length < lines.length：使用最后一个 segment 的时间戳填充剩余行
        console.warn(`⚠️ [Timestamp Override-analyzeAudio] segments 数量少于 lines，使用最后一个 segment 的时间戳填充剩余行`);
        const lastSegment = segmentsForTiming[segmentsForTiming.length - 1];
        
        for (let i = 0; i < linesCount; i++) {
          // ⭐ 覆盖前：打印原本的 startSec/endSec
          const beforeStartSec = result.lines[i].startSec || 0;
          const beforeEndSec = result.lines[i].endSec || 0;
          console.log(`[Override Debug-analyzeAudio] before line[${i}]: start=${beforeStartSec}, end=${beforeEndSec}`);
          
          if (i < segmentsCount) {
            // 前 segmentsCount 行使用对应的 segment
            // ⭐ 覆盖用的 segment：打印
            const seg = segmentsForTiming[i];
            const segText = seg.displayLine?.substring(0, 10) || '';
            console.log(`[Override Debug-analyzeAudio] seg[${i}]: start=${seg.startSec}, end=${seg.endSec}, text=${segText}`);
            
            result.lines[i].startSec = segmentsForTiming[i].startSec;
            result.lines[i].endSec = segmentsForTiming[i].endSec;
            
            // ⭐ 覆盖后：打印写入后的 startSec/endSec
            console.log(`[Override Debug-analyzeAudio] after line[${i}]: start=${result.lines[i].startSec}, end=${result.lines[i].endSec}`);
            
            console.log(`🎤 [Timestamp Override-analyzeAudio] line[${i}] (lineNo: ${result.lines[i].lineNo}) 使用 segment[${i}]:`, {
              startSec: segmentsForTiming[i].startSec,
              endSec: segmentsForTiming[i].endSec,
            });
          } else {
            // 剩余行使用最后一个 segment 的时间戳
            // ⭐ 覆盖用的 segment：打印最后一个 segment
            const segText = lastSegment.displayLine?.substring(0, 10) || '';
            console.log(`[Override Debug-analyzeAudio] seg[last]: start=${lastSegment.startSec}, end=${lastSegment.endSec}, text=${segText}`);
            
            result.lines[i].startSec = lastSegment.endSec;
            result.lines[i].endSec = lastSegment.endSec;
            
            // ⭐ 覆盖后：打印写入后的 startSec/endSec
            console.log(`[Override Debug-analyzeAudio] after line[${i}]: start=${result.lines[i].startSec}, end=${result.lines[i].endSec}`);
            
            console.log(`🎤 [Timestamp Override-analyzeAudio] line[${i}] (lineNo: ${result.lines[i].lineNo}) 使用最后一个 segment 的时间戳:`, {
              startSec: lastSegment.endSec,
              endSec: lastSegment.endSec,
            });
          }
        }
      }
    } else {
      // segments.length === lines.length：直接一一对应
      for (let i = 0; i < linesCount; i++) {
        // ⭐ 覆盖前：打印原本的 startSec/endSec
        const beforeStartSec = result.lines[i].startSec || 0;
        const beforeEndSec = result.lines[i].endSec || 0;
        console.log(`[Override Debug-analyzeAudio] before line[${i}]: start=${beforeStartSec}, end=${beforeEndSec}`);
        
        // ⭐ 覆盖用的 segment：打印
        const seg = segmentsForTiming[i];
        const segText = seg.displayLine?.substring(0, 10) || '';
        console.log(`[Override Debug-analyzeAudio] seg[${i}]: start=${seg.startSec}, end=${seg.endSec}, text=${segText}`);
        
        result.lines[i].startSec = segmentsForTiming[i].startSec;
        result.lines[i].endSec = segmentsForTiming[i].endSec;
        
        // ⭐ 覆盖后：打印写入后的 startSec/endSec
        console.log(`[Override Debug-analyzeAudio] after line[${i}]: start=${result.lines[i].startSec}, end=${result.lines[i].endSec}`);
        
        console.log(`🎤 [Timestamp Override-analyzeAudio] line[${i}] (lineNo: ${result.lines[i].lineNo}) 时间戳覆盖:`, {
          startSec: segmentsForTiming[i].startSec,
          endSec: segmentsForTiming[i].endSec,
        });
      }
    }
  } else {
    console.warn('⚠️ [Timestamp Override-analyzeAudio] 无法覆盖时间戳：segmentsForTiming 或 result.lines 为空');
  }
  
  // ⭐ 时间戳验证：在 override 之后立即检查（analyzeAudioWithChatGPT）
  // audioDuration 已在过滤逻辑中声明，直接使用
  console.log('🔍 [Timestamp Validation-analyzeAudio] 音频总时长 (duration):', audioDuration, '秒');
  console.log('🔍 [Timestamp Validation-analyzeAudio] 总行数:', result.lines?.length || 0);
  
  if (result.lines && result.lines.length > 0) {
    let hasStartSecExceeded = false;
    let hasEndSecExceeded = false;
    
    result.lines.forEach((line: any, index: number) => {
      const startSec = line.startSec || 0;
      const endSec = line.endSec || 0;
      
      console.log(`🔍 [Timestamp Validation-analyzeAudio] line[${index}] (lineNo: ${line.lineNo}):`, {
        startSec,
        endSec,
        displayLine: line.displayLine?.substring(0, 30) + '...',
      });
      
      if (startSec > audioDuration) {
        hasStartSecExceeded = true;
        console.error(`❌ [Timestamp Validation-analyzeAudio] line[${index}] startSec (${startSec}) > duration (${audioDuration})`);
      }
      
      if (endSec > audioDuration) {
        hasEndSecExceeded = true;
        console.error(`❌ [Timestamp Validation-analyzeAudio] line[${index}] endSec (${endSec}) > duration (${audioDuration})`);
      }
    });
    
    console.log('🔍 [Timestamp Validation-analyzeAudio] 检查结果:', {
      hasStartSecExceeded,
      hasEndSecExceeded,
      duration: audioDuration,
    });
  }
  
  return result;
}

/**
 * 按行列表逐行分析（不拆行，只补全）
 */
async function analyzeLinesWithChatGPT(
  displayLines: string[],
  sourceLang: 'ko' | 'zh',
  audioFileName?: string,
  requestId?: number
): Promise<SongPayload> {
  console.log(`🆔 [GPT Request] requestId: ${requestId}`);
  const prompt = getLineByLineAnalysisPrompt(displayLines, sourceLang, audioFileName);

  // API 키와 URL을 환경 변수에서 직접 가져오기
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || OPENAI_API_URL;

  console.log('📤 ChatGPT API 요청 전송 (逐行分析):', {
    url: `${apiUrl}/chat/completions`,
    model: 'gpt-4o',
    promptLength: prompt.length,
    linesCount: displayLines.length,
  });

  const response = await fetch(`${apiUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
      max_tokens: 8000,
    }),
  });

  console.log('📥 ChatGPT API 응답 상태:', response.status, response.statusText);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    console.error('❌ ChatGPT API 오류:', errorData);
    throw new Error(errorData.error?.message || `API 호출 실패: ${response.status}`);
  }

  const data = await response.json();
  console.log('📦 ChatGPT API 응답 데이터:', data);
  let content = data.choices[0]?.message?.content;
  console.log('📝 원본 콘텐츠 (처음 500자):', content?.substring(0, 500));
  
  if (!content) {
    throw new Error('ChatGPT 응답이 비어있습니다.');
  }

  // 마크다운 코드 블록 제거 (```json ... ``` 또는 ``` ... ```)
  content = content.trim();
  if (content.startsWith('```')) {
    const firstIndex = content.indexOf('```');
    if (firstIndex !== -1) {
      content = content.substring(firstIndex + 3);
      if (content.startsWith('json') || content.startsWith('JSON')) {
        content = content.substring(4).trim();
      }
      const lastIndex = content.lastIndexOf('```');
      if (lastIndex !== -1) {
        content = content.substring(0, lastIndex).trim();
      }
    }
  }

  // JSON 객체 추출
  const jsonStart = content.indexOf('{');
  const jsonEnd = content.lastIndexOf('}');
  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    content = content.substring(jsonStart, jsonEnd + 1);
  }

  console.log('📝 정제된 콘텐츠 (처음 500자):', content.substring(0, 500));

  try {
    const parsed = JSON.parse(content);
    console.log('✅ JSON 파싱 성공:', parsed);
    
    // ⭐ 调试日志：排查并发请求覆盖问题
    try {
      const firstLine = (parsed as any)?.lines?.[0];
      const t = firstLine?.tokensZh ?? [];
      console.log("🧾 [A] parsed summary", {
        requestId: requestId ?? "NO_REQUEST_ID_IN_SCOPE",
        lines: (parsed as any)?.lines?.length ?? 0,
        zhSentence: firstLine?.zhSentence,
        tokensZhLen: t.length,
        tokensZhHead: t.slice(0, 10).map((x: any) => x?.text),
      });
    } catch (e) {
      console.warn("🧾 [A] parsed summary failed", e);
    }
    
    // ⭐ 调试日志：打印 lines[0] 的信息
    if (parsed.lines && parsed.lines.length > 0) {
      const firstLine = parsed.lines[0];
      console.log('📋 [API] lines[0].displayLine:', firstLine.displayLine);
      console.log('📋 [API] lines[0].zhSentence:', firstLine.zhSentence);
      console.log('📋 [API] lines[0].startSec:', firstLine.startSec, 'endSec:', firstLine.endSec);
      console.log('📋 [API] 返回的 lines 数量:', parsed.lines.length, '期望数量:', displayLines.length);
    } else {
      console.log('📋 [API] lines[0]: (lines 为空)');
    }
    
    return parsed as SongPayload;
  } catch (parseError) {
    console.error('❌ JSON 파싱 오류:', parseError);
    console.error('❌ 파싱 실패한 콘텐츠 전체:', content);
    throw new Error(`ChatGPT 응답을 JSON으로 파싱할 수 없습니다: ${parseError instanceof Error ? parseError.message : '알 수 없는 오류'}`);
  }
}

/**
 * 음성 파일에서 전사된 텍스트를 ChatGPT로 분석 (음성 분석 전용 프롬프트)
 * ⚠️ 已废弃：使用 analyzeLinesWithChatGPT 代替
 */
async function analyzeTranscribedAudioWithChatGPT(
  transcribedText: string, 
  sourceLang: 'ko' | 'zh',
  audioFileName?: string
): Promise<SongPayload> {
  // ⭐ 调试日志：打印 audioFileName 的值
  console.log('📋 [API] audioFileName:', audioFileName);
  
  const prompt = getAudioAnalysisPrompt(transcribedText, sourceLang, audioFileName);
  
  // ⭐ 调试日志：从 prompt 里用正则抓 "audioUrl": "..." 并打印
  const audioUrlMatch = prompt.match(/"audioUrl":\s*"([^"]*)"/);
  if (audioUrlMatch) {
    console.log('📋 [API] prompt 中 audioUrl 的值:', audioUrlMatch[1]);
  } else {
    console.log('📋 [API] prompt 中 audioUrl 的值: (未找到)');
  }

  // API 키와 URL을 환경 변수에서 직접 가져오기
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || OPENAI_API_URL;

  console.log('📤 ChatGPT API 요청 전송 (음성 분석):', {
    url: `${apiUrl}/chat/completions`,
    model: 'gpt-4o',
    promptLength: prompt.length,
  });

  const response = await fetch(`${apiUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
      max_tokens: 8000, // 긴 가사를 위해 토큰 수 증가
    }),
  });

  console.log('📥 ChatGPT API 응답 상태:', response.status, response.statusText);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    console.error('❌ ChatGPT API 오류:', errorData);
    throw new Error(errorData.error?.message || `API 호출 실패: ${response.status}`);
  }

  const data = await response.json();
  console.log('📦 ChatGPT API 응답 데이터:', data);
  let content = data.choices[0]?.message?.content;
  console.log('📝 원본 콘텐츠 (처음 500자):', content?.substring(0, 500));
  
  if (!content) {
    throw new Error('ChatGPT 응답이 비어있습니다.');
  }

  // 마크다운 코드 블록 제거 (```json ... ``` 또는 ``` ... ```)
  content = content.trim();
  if (content.startsWith('```')) {
    // 첫 번째 ``` 제거
    const firstIndex = content.indexOf('```');
    if (firstIndex !== -1) {
      content = content.substring(firstIndex + 3);
      // 언어 지정자 제거 (json, JSON 등)
      if (content.startsWith('json') || content.startsWith('JSON')) {
        content = content.substring(4).trim();
      }
      // 마지막 ``` 제거
      const lastIndex = content.lastIndexOf('```');
      if (lastIndex !== -1) {
        content = content.substring(0, lastIndex).trim();
      }
    }
  }

  // JSON 객체 추출 (중괄호로 시작하는 부분 찾기)
  const jsonStart = content.indexOf('{');
  const jsonEnd = content.lastIndexOf('}');
  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    content = content.substring(jsonStart, jsonEnd + 1);
  }

  console.log('📝 정제된 콘텐츠 (처음 500자):', content.substring(0, 500));

  try {
    const parsed = JSON.parse(content);
    console.log('✅ JSON 파싱 성공:', parsed);
    
    // ⭐ 调试日志：排查并发请求覆盖问题
    try {
      const firstLine = (parsed as any)?.lines?.[0];
      const t = firstLine?.tokensZh ?? [];
      console.log("🧾 [A] parsed summary", {
        requestId: "NO_REQUEST_ID_IN_SCOPE",
        lines: (parsed as any)?.lines?.length ?? 0,
        zhSentence: firstLine?.zhSentence,
        tokensZhLen: t.length,
        tokensZhHead: t.slice(0, 10).map((x: any) => x?.text),
      });
    } catch (e) {
      console.warn("🧾 [A] parsed summary failed", e);
    }
    
    // ⭐ 调试日志：打印 lines[0] 的信息
    if (parsed.lines && parsed.lines.length > 0) {
      const firstLine = parsed.lines[0];
      console.log('📋 [API] lines[0].displayLine:', firstLine.displayLine);
      console.log('📋 [API] lines[0].zhSentence:', firstLine.zhSentence);
      console.log('📋 [API] lines[0].startSec:', firstLine.startSec, 'endSec:', firstLine.endSec);
    } else {
      console.log('📋 [API] lines[0]: (lines 为空)');
    }
    
    return parsed as SongPayload;
  } catch (parseError) {
    console.error('❌ JSON 파싱 오류:', parseError);
    console.error('❌ 파싱 실패한 콘텐츠 전체:', content);
    throw new Error(`ChatGPT 응답을 JSON으로 파싱할 수 없습니다: ${parseError instanceof Error ? parseError.message : '알 수 없는 오류'}`);
  }
}

/**
 * 오디오 URL을 다운로드하여 분석
 */
async function analyzeAudioUrlWithChatGPT(audioUrl: string, sourceLang: 'ko' | 'zh'): Promise<SongPayload> {
  // 오디오 URL에서 파일 다운로드
  const audioResponse = await fetch(audioUrl);
  if (!audioResponse.ok) {
    throw new Error('오디오 파일을 다운로드할 수 없습니다.');
  }

  const audioBlob = await audioResponse.blob();
  const audioFile = new File([audioBlob], 'audio.mp3', { type: audioBlob.type });

  return await analyzeAudioWithChatGPT(audioFile, sourceLang);
}

/**
 * 中文翻译成韩文
 */
export async function translateChineseToKorean(chineseText: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

  if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
    throw new Error('OpenAI API 키가 설정되지 않았습니다.');
  }

  const prompt = `请将以下中文歌词翻译成韩文。只返回翻译结果，不要添加任何解释或其他内容。

中文歌词：
${chineseText}

韩文翻译：`;

  const response = await fetch(`${apiUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.error?.message || `翻译失败: ${response.status}`);
  }

  const data = await response.json();
  const translatedText = data.choices[0]?.message?.content?.trim() || '';

  if (!translatedText) {
    throw new Error('翻译结果为空');
  }

  return translatedText;
}

/**
 * 텍스트만으로 ChatGPT API 호출
 */
export async function callChatGPTApiWithText(text: string, sourceLang: 'ko' | 'zh' = 'ko', requestId?: number): Promise<SongPayload> {
  console.log(`🆔 [Text Analysis Request] requestId: ${requestId}`);
  const result = await callChatGPTApi({
    text,
    sourceLang,
    targetLang: 'zh',
  });
  console.log(`🆔 [Text Analysis Response] requestId: ${requestId}`);
  return result;
}

/**
 * 오디오 파일로 ChatGPT API 호출（返回转写文本和分析结果，避免重复调用 Whisper API）
 */
export async function callChatGPTApiWithAudioAndTranscription(
  audioFile: File,
  languageMode: 'auto' | 'ko' | 'zh' = 'auto',
  requestId?: number
): Promise<{ result: SongPayload; transcribedText: string; detectedLang?: string }> {
  console.log(`🆔 [Whisper Request] requestId: ${requestId}`);
  // API 키와 URL을 환경 변수에서 직접 가져오기
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || OPENAI_API_URL;

  // 只调用一次 Whisper API
  const formData = new FormData();
  formData.append('file', audioFile);
  formData.append('model', 'whisper-1');
  // ⭐ 根据 languageMode 设置 language 参数
  if (languageMode === 'ko') {
    formData.append('language', 'ko');
  } else if (languageMode === 'zh') {
    formData.append('language', 'zh');
  }
  // languageMode === 'auto' 时不传 language 参数，让 Whisper 自动检测
  formData.append('response_format', 'verbose_json'); // ⭐ 获取详细的时间戳信息

  const transcriptionResponse = await fetch(`${apiUrl}/audio/transcriptions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!transcriptionResponse.ok) {
    const errorData = await transcriptionResponse.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.error?.message || '음성 전사 실패');
  }

  const transcriptionData = await transcriptionResponse.json();
  
  // ⭐ Whisper 返回
  console.log(`🆔 [Whisper Response] requestId: ${requestId}`);
  
  // ⭐ 调试日志：打印 Whisper 返回对象的 keys 和时间相关字段（callChatGPTApiWithAudioAndTranscription）
  console.log('🎤 [Whisper-callChatGPTApiWithAudioAndTranscription] 返回对象 keys:', Object.keys(transcriptionData));
  console.log('🎤 [Whisper-callChatGPTApiWithAudioAndTranscription] 返回对象示例:', {
    text: transcriptionData.text,
    language: transcriptionData.language,
    duration: transcriptionData.duration,
    segments: transcriptionData.segments ? `[${transcriptionData.segments.length} segments]` : '无',
    words: transcriptionData.words ? `[${transcriptionData.words.length} words]` : '无',
  });
  
  // ⭐ 如果有 segments，打印前三个 segments 的完整示例
  if (transcriptionData.segments && transcriptionData.segments.length > 0) {
    console.log('🎤 [Whisper-callChatGPTApiWithAudioAndTranscription] segments 总数:', transcriptionData.segments.length);
    const segmentsToShow = transcriptionData.segments.slice(0, 3);
    segmentsToShow.forEach((segment: any, index: number) => {
      console.log(`🎤 [Whisper-callChatGPTApiWithAudioAndTranscription] segments[${index}] keys:`, Object.keys(segment));
      console.log(`🎤 [Whisper-callChatGPTApiWithAudioAndTranscription] segments[${index}] 完整示例:`, segment);
    });
  }
  
  // ⭐ 如果有 words，打印第一个 word 的示例
  if (transcriptionData.words && transcriptionData.words.length > 0) {
    const firstWord = transcriptionData.words[0];
    console.log('🎤 [Whisper-callChatGPTApiWithAudioAndTranscription] words[0] keys:', Object.keys(firstWord));
    console.log('🎤 [Whisper-callChatGPTApiWithAudioAndTranscription] words[0] 示例:', firstWord);
  }
  
  const transcribedText = transcriptionData.text;

  console.log('🎤 Whisper 전사 결과:', transcribedText);

  if (!transcribedText) {
    throw new Error('전사된 텍스트가 없습니다.');
  }

  // ⭐ 从 Whisper 返回中读取检测到的语言，并使用映射函数统一格式
  const rawDetectedLang = transcriptionData.language || null;
  console.log('🎤 [Whisper] 检测到的语言（原始）:', rawDetectedLang);
  
  // ⭐ 如果强制指定了语言，基于转写文本内容来检测实际语言（更准确）
  let detectedLang: 'ko' | 'zh' | null = null;
  if (languageMode !== 'auto') {
    // 强制语言模式下，基于转写文本内容检测实际语言
    const hasChinese = /[\u4e00-\u9fff]/.test(transcribedText);
    const hasKorean = /[\uac00-\ud7a3]/.test(transcribedText);
    
    if (hasChinese && !hasKorean) {
      detectedLang = 'zh';
    } else if (hasKorean && !hasChinese) {
      detectedLang = 'ko';
    } else if (hasChinese && hasKorean) {
      // 如果同时包含中文和韩文，根据字符数量判断
      const chineseCount = (transcribedText.match(/[\u4e00-\u9fff]/g) || []).length;
      const koreanCount = (transcribedText.match(/[\uac00-\ud7a3]/g) || []).length;
      detectedLang = chineseCount >= koreanCount ? 'zh' : 'ko';
    } else {
      // 如果都不包含，使用 Whisper 返回的语言
      detectedLang = normalizeWhisperLanguage(rawDetectedLang);
    }
    
    console.log('🎤 [强制语言模式] 基于转写文本内容检测到的语言:', detectedLang);
  } else {
    // 自动模式下，使用 Whisper 返回的语言
    detectedLang = normalizeWhisperLanguage(rawDetectedLang) || 'zh';
  }
  
  console.log('🎤 [Whisper] 检测到的语言（统一格式）:', detectedLang);
  
  // ⭐ 确定 sourceLang：如果 languageMode 不是 'auto'，使用 languageMode；否则使用检测到的语言
  const sourceLang: 'ko' | 'zh' = languageMode !== 'auto' 
    ? (languageMode === 'ko' ? 'ko' : 'zh')
    : (detectedLang || 'zh'); // 默认中文如果检测不到

  // ⭐ A. 从 Whisper segments 生成 baseLines（source of truth）
  if (!transcriptionData.segments || transcriptionData.segments.length === 0) {
    throw new Error('Whisper 返回中没有 segments 数据');
  }

  // ⭐ 越界时间过滤：在生成 baseLines 之前
  const audioDuration = transcriptionData.duration || 0;
  const originalSegmentsCount = transcriptionData.segments.length;
  const filteredSegments = transcriptionData.segments.filter((seg: any) => {
    const startSec = seg.start || 0;
    const endSec = seg.end || 0;
    const isValid = startSec >= 0 && 
                    endSec > startSec && 
                    endSec <= audioDuration;
    
    if (!isValid) {
      console.warn(
        `[Segment Filter] 删除越界 segment: start=${startSec}, end=${endSec}, duration=${audioDuration}`
      );
    }
    
    return isValid;
  });
  
  console.log(
    `[Segment Filter] 过滤前=${originalSegmentsCount} 过滤后=${filteredSegments.length}`
  );

  const baseLines: OpalLine[] = filteredSegments.map((seg: any, i: number) => ({
    lineNo: i + 1,
    lineId: `seg_${i}`,
    displayLine: seg.text?.trim() || '',
    romanization: '',
    zhSentence: '',
    startSec: seg.start || 0,
    endSec: seg.end || 0,
    tokensZh: [],
    chunks: [],
    chunkSegments: [],
  }));

  console.log('🎤 [Segments-Driven] baseLines 生成:', baseLines.length, '个 lines');
  console.log('🎤 [Segments-Driven] baseLines 示例 (前3个):', baseLines.slice(0, 3).map((line, idx) => ({
    lineNo: line.lineNo,
    displayLine: line.displayLine.substring(0, 30) + '...',
    startSec: line.startSec,
    endSec: line.endSec,
  })));

  // ⭐ B. GPT 不再拆行，只做逐行补全
  const displayLinesList = baseLines.map(line => line.displayLine);
  console.log('🎤 [Segments-Driven] 发送给 GPT 的行列表 (前3个):', displayLinesList.slice(0, 3));

  // 调用新的逐行分析函数
  const gptResult = await analyzeLinesWithChatGPT(displayLinesList, sourceLang, audioFile.name, requestId);
  
  // ⭐ C. 合并：只填内容，不改时间戳
  if (gptResult.lines && gptResult.lines.length > 0) {
    const minLen = Math.min(baseLines.length, gptResult.lines.length);
    
    if (gptResult.lines.length !== baseLines.length) {
      console.warn(`⚠️ [Segments-Driven Merge] gptLines.length (${gptResult.lines.length}) !== baseLines.length (${baseLines.length})`);
      console.warn(`⚠️ [Segments-Driven Merge] 使用最小长度 ${minLen} 进行填充`);
    }
    
    // 遍历 baseLines，用 GPT 返回的 lines 填充内容
    for (let i = 0; i < minLen; i++) {
      const baseLine = baseLines[i];
      const gptLine = gptResult.lines[i];
      
      // ⭐ 只填内容，不改时间戳
      baseLine.zhSentence = gptLine?.zhSentence ?? '';
      baseLine.tokensZh = gptLine?.tokensZh ?? [];
      baseLine.chunks = gptLine?.chunks ?? [];
      baseLine.chunkSegments = gptLine?.chunkSegments ?? [];
      baseLine.romanization = gptLine?.romanization;
      
      console.log(`🎤 [Segments-Driven Merge] line[${i}] (lineNo: ${baseLine.lineNo}) 合并完成:`, {
        displayLine: baseLine.displayLine.substring(0, 20) + '...',
        zhSentence: baseLine.zhSentence.substring(0, 20) + '...',
        startSec: baseLine.startSec,
        endSec: baseLine.endSec,
      });
    }
    
    // 如果 baseLines 数量超过 GPT 返回的 lines，保留 baseLines 但内容为空
    if (baseLines.length > minLen) {
      console.warn(`⚠️ [Segments-Driven Merge] baseLines 数量 (${baseLines.length}) 超过 GPT 返回的 lines (${gptResult.lines.length})，剩余行保留为空`);
    }
  } else {
    console.warn('⚠️ [Segments-Driven Merge] GPT 返回的 lines 为空，baseLines 保留为空内容');
  }

  // ⭐ D. 检测重复句
  for (let i = 1; i < baseLines.length; i++) {
    const prevLine = baseLines[i - 1].displayLine.trim();
    const currentLine = baseLines[i].displayLine.trim();
    if (prevLine === currentLine && prevLine.length > 0) {
      // 标记为重复（在 line 对象上添加 isDuplicate 字段）
      (baseLines[i] as any).isDuplicate = true;
      console.log(`🔄 [Segments-Driven] line[${i}] (lineNo: ${baseLines[i].lineNo}) 标记为重复: "${currentLine.substring(0, 30)}..."`);
    }
  }

  // 构建最终结果
  const result: SongPayload = {
    status: 'ok',
    message: 'Analysis complete',
    songId: gptResult.songId || 'generated_unique_id',
    version: gptResult.version || '1.0',
    langDisplay: sourceLang,
    langTeach: 'zh',
    audioUrl: audioFile.name || '',
    lines: baseLines,
  };

  // ⭐ 时间戳验证
  // audioDuration 已在过滤逻辑中声明，直接使用
  console.log('🔍 [Timestamp Validation] 音频总时长 (duration):', audioDuration, '秒');
  console.log('🔍 [Timestamp Validation] 总行数:', result.lines?.length || 0);
  
  if (result.lines && result.lines.length > 0) {
    let hasStartSecExceeded = false;
    let hasEndSecExceeded = false;
    
    result.lines.forEach((line: any, index: number) => {
      const startSec = line.startSec || 0;
      const endSec = line.endSec || 0;
      
      console.log(`🔍 [Timestamp Validation] line[${index}] (lineNo: ${line.lineNo}):`, {
        startSec,
        endSec,
        displayLine: line.displayLine?.substring(0, 30) + '...',
      });
      
      if (startSec > audioDuration) {
        hasStartSecExceeded = true;
        console.error(`❌ [Timestamp Validation] line[${index}] startSec (${startSec}) > duration (${audioDuration})`);
      }
      
      if (endSec > audioDuration) {
        hasEndSecExceeded = true;
        console.error(`❌ [Timestamp Validation] line[${index}] endSec (${endSec}) > duration (${audioDuration})`);
      }
    });
    
    console.log('🔍 [Timestamp Validation] 检查结果:', {
      hasStartSecExceeded,
      hasEndSecExceeded,
      duration: audioDuration,
    });
  }
  
  return { result, transcribedText, detectedLang: detectedLang || undefined };
}

/**
 * 오디오 파일로 ChatGPT API 호출（保持向后兼容）
 */
export async function callChatGPTApiWithAudio(
  audioFile: File,
  sourceLang: 'ko' | 'zh' = 'ko'
): Promise<SongPayload> {
  return callChatGPTApi({
    audioFile,
    sourceLang,
    targetLang: 'zh',
  });
}

/**
 * 生成教学提示
 * @param sentence 中文句子
 * @param level 学习者水平：初级/中级/高级
 * @returns 教学提示文本
 */
export async function getTeachingTip(sentence: string, level: "初级" | "中级" | "高级"): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    const apiUrl = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

    if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
      throw new Error('OpenAI API 키가 설정되지 않았습니다.');
    }

    const prompt = `你是一名汉语二语习得专家。

任务：
根据学习者的水平（${level}），为下面这句话生成学习重点提示。

等级说明：

初级 = HSK1–2

中级 = HSK3–4

高级 = HSK5–6

规则：

${level === "初级" ? "初级：优先选择高于HSK2的词汇或句型" : level === "中级" ? "中级：优先选择高于HSK4的词汇或句型" : "高级：优先选择HSK6词汇或高级句型"}

如果句子没有更高等级内容，则选择同等级重点

词汇不超过3个

句型不超过2条

必须标明HSK等级

不解释原因

不给例句

不使用编号

只输出两部分：词汇 / 句型

输出格式：

词汇
• 词语（HSK等级）
• 词语（HSK等级）

句型
• 结构（HSK等级）
• 结构（HSK等级）

句子：${sentence}`;

    console.log('📤 教学提示API请求:', { sentence, level });

    const response = await fetch(`${apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.error?.message || `API 호출 실패: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    if (!content) {
      throw new Error('API 응답에 내용이 없습니다.');
    }

    console.log('✅ 教学提示生成成功');
    return content;
  } catch (error) {
    console.error('❌ 教学提示生成失败:', error);
    throw error;
  }
}

/**
 * 获取句型的详细信息（韩文解释、中韩文例句）
 * @param pattern 句型结构
 * @param sentence 原句（用于生成例句）
 * @returns 句型详细信息
 */
export async function getPatternInfo(pattern: string, sentence: string): Promise<{
  korean: string;
  chineseExample: string;
  koreanExample: string;
}> {
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    const apiUrl = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

    if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
      throw new Error('OpenAI API 키가 설정되지 않았습니다.');
    }

    const prompt = `请为以下中文句型提供详细信息：

句型：${pattern}
原句：${sentence}

要求：
1. 用韩语解释这个句型的含义和用法（韩文解释）
2. 用这个句型造一个中文例句（中文例句）
3. 将中文例句翻译成韩文（韩文例句）

请以JSON格式返回：
{
  "korean": "韩文解释（用韩语解释这个句型的含义和用法）",
  "chineseExample": "中文例句（使用这个句型造句）",
  "koreanExample": "韩文例句（中文例句的韩文翻译）"
}

只返回JSON，不要其他内容。`;

    const response = await fetch(`${apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.error?.message || `API 호출 실패: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    if (!content) {
      throw new Error('API 응답에 내용이 없습니다.');
    }

    let parsed;
    try {
      parsed = typeof content === 'string' ? JSON.parse(content) : content;
    } catch (parseError) {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('JSON 파싱 실패');
      }
    }

    return {
      korean: parsed.korean || '',
      chineseExample: parsed.chineseExample || '',
      koreanExample: parsed.koreanExample || '',
    };
  } catch (error) {
    console.error('❌ 获取句型信息失败:', error);
    throw error;
  }
}

/**
 * 生成跟读反馈
 */
export async function generateReadingFeedback(
  level: "初级" | "中级" | "高级",
  targetText: string,
  asrText: string,
  durationSec?: number
): Promise<{
  scores: {
    contentAccuracy: number;
    tonePerformance: number;
    speakingFluency: number;
  };
  overallComment: string;
  keyIssue: string;
  oneAction: string;
  contentCheck: {
    asrText: string;
    missing: string[];
    extra: string[];
    substitutions: Array<{ original: string; replaced: string }>;
  };
}> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

  if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
    throw new Error('OpenAI API 키가 설정되지 않았습니다.');
  }

  const systemPrompt = `你是一名汉语二语语音训练教练，服务对象为韩国母语学习者。

任务：
根据目标句子与学习者朗读转写结果，生成句子级跟读反馈，并对三个维度进行评分。评分必须结合学习者 level（初级 / 中级 / 高级）进行调整：

初级：反馈语言更简单，允许轻微错误，重点指出明显问题。
中级：适度指出发音与声调问题。
高级：要求更自然流畅，对细微不自然之处也可指出。

评分维度说明：

contentAccuracy（内容准确度）
根据目标句与转写文本的匹配情况判断，包括漏读、多读、替换等。
评分范围：50-100分（最低50分，从50分开始加起）。

tonePerformance（声调表现）
进行整体音高起伏与声调趋势判断，不进行逐字精确分析。
评分范围：50-100分（最低50分，从50分开始加起）。

speakingFluency（说话流畅度）
根据语速、停顿、是否断裂、是否字字分开读进行整体判断。
评分范围：50-100分（最低50分，从50分开始加起）。

约束规则：
- 只允许 1 条 keyIssue。
- 只允许 1 条 oneAction。
- 不使用"音素级""Hz"等专业术语。
- 不进行逐字声调精确判定。
- 必须根据 level 调整反馈严格程度与语言难度。
- 若无明显错误，也需给出轻微改进建议。

输出必须为严格 JSON，不得添加解释或多余文字。`;

  const userPrompt = `level: ${level}
targetText: ${targetText}
asrText: ${asrText}
${durationSec ? `durationSec: ${durationSec}` : ''}

请生成跟读反馈，JSON 格式：
{
  "scores": {
    "contentAccuracy": 0,
    "tonePerformance": 0,
    "speakingFluency": 0
  },
  "overallComment": "",
  "keyIssue": "",
  "oneAction": "",
  "contentCheck": {
    "asrText": "",
    "missing": [],
    "extra": [],
    "substitutions": [{"original": "原词", "replaced": "替换词"}]
  }
}

注意：
- substitutions 数组中的每个元素必须包含 "original" 和 "replaced" 两个字段
- missing、extra、substitutions 最多各显示3处问题`;

  const response = await fetch(`${apiUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.error?.message || `API 호출 실패: ${response.status}`);
  }

  const data = await response.json();
  let content = data.choices[0]?.message?.content;

  if (!content) {
    throw new Error('ChatGPT 응답이 비어있습니다.');
  }

  // 解析 JSON
  try {
    const parsed = JSON.parse(content);
    
    // 确保评分最低50分（从50分开始加起）
    if (parsed.scores) {
      parsed.scores.contentAccuracy = Math.max(50, parsed.scores.contentAccuracy || 50);
      parsed.scores.tonePerformance = Math.max(50, parsed.scores.tonePerformance || 50);
      parsed.scores.speakingFluency = Math.max(50, parsed.scores.speakingFluency || 50);
    }
    
    return parsed;
  } catch (parseError) {
    console.error('JSON 파싱 오류:', parseError);
    throw new Error('응답을 JSON으로 파싱할 수 없습니다.');
  }
}

/**
 * 转写录音音频（用于跟读反馈）
 */
export async function transcribeAudio(audioBlob: Blob): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

  if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
    throw new Error('OpenAI API 키가 설정되지 않았습니다.');
  }

  const formData = new FormData();
  formData.append('file', audioBlob, 'recording.wav');
  formData.append('model', 'whisper-1');
  formData.append('language', 'zh'); // 跟读是中文
  formData.append('response_format', 'verbose_json'); // ⭐ 获取详细的时间戳信息

  const response = await fetch(`${apiUrl}/audio/transcriptions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.error?.message || '음성 전사 실패');
  }

  const data = await response.json();
  
  // ⭐ 调试日志：打印 Whisper 返回对象的 keys 和时间相关字段（transcribeAudio）
  console.log('🎤 [Whisper-transcribeAudio] 返回对象 keys:', Object.keys(data));
  console.log('🎤 [Whisper-transcribeAudio] 返回对象示例:', {
    text: data.text,
    language: data.language,
    duration: data.duration,
    segments: data.segments ? `[${data.segments.length} segments]` : '无',
    words: data.words ? `[${data.words.length} words]` : '无',
  });
  
  // ⭐ 如果有 segments，打印前三个 segments 的完整示例
  if (data.segments && data.segments.length > 0) {
    console.log('🎤 [Whisper-transcribeAudio] segments 总数:', data.segments.length);
    const segmentsToShow = data.segments.slice(0, 3);
    segmentsToShow.forEach((segment: any, index: number) => {
      console.log(`🎤 [Whisper-transcribeAudio] segments[${index}] keys:`, Object.keys(segment));
      console.log(`🎤 [Whisper-transcribeAudio] segments[${index}] 完整示例:`, segment);
    });
  }
  
  // ⭐ 如果有 words，打印第一个 word 的示例
  if (data.words && data.words.length > 0) {
    const firstWord = data.words[0];
    console.log('🎤 [Whisper-transcribeAudio] words[0] keys:', Object.keys(firstWord));
    console.log('🎤 [Whisper-transcribeAudio] words[0] 示例:', firstWord);
  }
  
  return data.text || '';
}

/**
 * 评价学习者造的句子
 * @param sentence 学习者造的句子
 * @param level 学习者水平：初级/中级/高级
 * @param targetSentence 目标句子（原句）
 * @returns 评价反馈文本
 */
export async function evaluateSentence(
  sentence: string,
  level: "初级" | "中级" | "高级",
  targetSentence: string
): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
    const apiUrl = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

    if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
      throw new Error('OpenAI API 키가 설정되지 않았습니다.');
    }

    // 将中文等级转换为英文
    const levelMap: Record<string, string> = {
      '初级': 'beginner',
      '中级': 'intermediate',
      '高级': 'advanced'
    };
    const englishLevel = levelMap[level] || 'beginner';

    const prompt = `你是一名温和、有耐心的汉语老师。

任务：
对学习者刚刚造的句子进行反馈。
系统已经根据他的当前学习阶段进行分级，你需要按照该阶段给出匹配难度的建议。

要求：

输出必须是自然对话语气，不要使用栏目标题。

不要出现"阶段""初级""中级""高级"等字样。

开头先给一句温和、具体的小鼓励，可以带一个可爱表情（如 😊🌱✨）。

鼓励必须结合句子内容，不要空泛。

评价与修改建议合并成一段话。

语气委婉

不直接说"错误"

使用"如果改成……会更自然哦""可以试着说……"等表达

根据系统提供的学习阶段，自动调整反馈深度：

基础阶段：只指出一个关键问题，用简单语言说明

进阶阶段：可指出1–2个问题

高阶阶段：可以分析自然度或表达差异

如果句子明显偏离当前学习内容，可以轻轻引导回相关结构。

全文控制在4–6行以内，保持自然、像真人老师聊天。

学习者造的句子：${sentence}
目标句子：${targetSentence}
学习阶段：${englishLevel}`;

    const response = await fetch(`${apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.error?.message || `API 호출 실패: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';

    if (!content) {
      throw new Error('API 응답에 내용이 없습니다.');
    }

    return content.trim();
  } catch (error) {
    console.error('❌ 评价句子失败:', error);
    throw error;
  }
}

