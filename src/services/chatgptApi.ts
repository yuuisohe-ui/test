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
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
    console.log('🔑 API 키 확인:', apiKey ? `${apiKey.substring(0, 10)}...` : '없음');
    
    if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
      throw new Error('OpenAI API 키가 설정되지 않았습니다. .env 파일에 VITE_OPENAI_API_KEY를 설정하고 개발 서버를 재시작해주세요.');
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

