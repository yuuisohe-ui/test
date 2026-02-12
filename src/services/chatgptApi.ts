import { SongPayload } from '../data/opalMock';
import { getTextAnalysisPrompt } from '../prompts/textAnalysisPrompt';
import { getAudioAnalysisPrompt } from '../prompts/audioAnalysisPrompt';

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
  const transcribedText = transcriptionData.text;

  console.log('🎤 Whisper 전사 결과:', transcribedText);

  if (!transcribedText) {
    throw new Error('전사된 텍스트가 없습니다.');
  }

  // 2단계: 전사된 텍스트를 ChatGPT로 분석 (음성 파일 분석용 프롬프트 사용)
  return await analyzeTranscribedAudioWithChatGPT(transcribedText, sourceLang, audioFile.name);
}

/**
 * 음성 파일에서 전사된 텍스트를 ChatGPT로 분석 (음성 분석 전용 프롬프트)
 */
async function analyzeTranscribedAudioWithChatGPT(
  transcribedText: string, 
  sourceLang: 'ko' | 'zh',
  audioFileName?: string
): Promise<SongPayload> {
  const prompt = getAudioAnalysisPrompt(transcribedText, sourceLang, audioFileName);

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
export async function callChatGPTApiWithText(text: string, sourceLang: 'ko' | 'zh' = 'ko'): Promise<SongPayload> {
  return callChatGPTApi({
    text,
    sourceLang,
    targetLang: 'zh',
  });
}

/**
 * 오디오 파일로 ChatGPT API 호출
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

