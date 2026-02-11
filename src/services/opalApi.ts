import { SongPayload } from '../data/opalMock';

// Opal API 설정
// Opal 에이전트: https://opal.google/edit/103glL7IJrgZfss4rSdNPYrkOYgyx11Oc
// 
// Opal API 엔드포인트와 키 확인 방법:
// 1. Opal 대시보드(https://opal.google)에서 에이전트 설정 확인
// 2. API 섹션에서 엔드포인트 URL과 API 키 복사
// 3. 아래 환경 변수에 설정하거나 직접 입력

// Opal API 엔드포인트 (예시 형식)
// 일반적으로: https://api.opal.dev/v1/agents/{agent-id}/run
// 또는: https://opal.google/api/v1/agents/{agent-id}/invoke
const OPAL_API_BASE_URL = import.meta.env.VITE_OPAL_API_URL || '';
const OPAL_API_KEY = import.meta.env.VITE_OPAL_API_KEY || '';
const OPAL_AGENT_ID = import.meta.env.VITE_OPAL_AGENT_ID || '103glL7IJrgZfss4rSdNPYrkOYgyx11Oc';

export interface OpalApiRequest {
  audioFile?: File;
  audioUrl?: string;
  text?: string;
  sourceLang?: 'ko' | 'zh';
  targetLang?: 'zh';
}

/**
 * Opal API를 호출하여 음성/텍스트를 분석하고 학습 데이터를 받아옵니다
 * 
 * Opal 에이전트 호출 형식:
 * - 일반적으로 POST 요청으로 에이전트에 메시지 전송
 * - 응답은 JSON 형식으로 반환
 */
export async function callOpalApi(request: OpalApiRequest): Promise<SongPayload> {
  try {
    // Opal API 엔드포인트가 설정되지 않았으면 Mock 데이터 반환
    if (!OPAL_API_BASE_URL) {
      console.warn('Opal API 엔드포인트가 설정되지 않았습니다. Mock 데이터를 사용합니다.');
      throw new Error('Opal API 엔드포인트를 설정해주세요.');
    }

    // Opal API 요청 본문 구성
    // Opal 에이전트는 일반적으로 messages 배열 형식을 사용
    const requestBody: any = {
      messages: [],
      // 에이전트별 추가 파라미터
      parameters: {
        sourceLang: request.sourceLang || 'ko',
        targetLang: request.targetLang || 'zh',
      },
    };

    // 텍스트 입력이 있는 경우
    if (request.text) {
      requestBody.messages.push({
        role: 'user',
        content: request.text,
      });
    }

    // 오디오 파일이 있는 경우 (Base64 또는 URL)
    if (request.audioFile) {
      // 파일을 Base64로 변환하거나 URL로 업로드
      // Opal API가 파일 업로드를 지원하는 경우 FormData 사용
      const formData = new FormData();
      formData.append('audio', request.audioFile);
      formData.append('messages', JSON.stringify(requestBody.messages));
      formData.append('parameters', JSON.stringify(requestBody.parameters));

      const response = await fetch(`${OPAL_API_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPAL_API_KEY}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(errorData.message || `API 호출 실패: ${response.status}`);
      }

      const data: SongPayload = await response.json();
      return data;
    }

    // 오디오 URL이 있는 경우
    if (request.audioUrl) {
      requestBody.parameters.audioUrl = request.audioUrl;
    }

    // 텍스트만 있는 경우 JSON 요청
    const response = await fetch(`${OPAL_API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `API 호출 실패: ${response.status}`);
    }

    // Opal 응답을 SongPayload 형식으로 변환
    const opalResponse = await response.json();
    
    // Opal 응답 형식에 따라 변환 로직 필요
    // 예시: opalResponse.content 또는 opalResponse.result를 파싱
    const data: SongPayload = transformOpalResponse(opalResponse);
    return data;
  } catch (error) {
    console.error('Opal API 호출 오류:', error);
    
    // 에러 발생 시 실패 응답 반환
    return {
      status: 'failed',
      message: error instanceof Error 
        ? error.message 
        : 'Opal API 호출 중 오류가 발생했습니다. 네트워크 연결을 확인하거나 잠시 후 다시 시도해주세요.',
      songMeta: {
        sourceLang: request.sourceLang || 'ko',
        hasAudio: !!request.audioFile || !!request.audioUrl,
      },
      lines: [],
    };
  }
}

/**
 * Opal API 응답을 SongPayload 형식으로 변환
 * Opal 응답 형식에 맞게 수정 필요
 */
function transformOpalResponse(opalResponse: any): SongPayload {
  // Opal 응답 구조에 따라 변환 로직 구현
  // 예시: opalResponse가 이미 SongPayload 형식인 경우
  if (opalResponse.status && opalResponse.lines) {
    return opalResponse as SongPayload;
  }

  // Opal 응답이 다른 형식인 경우 변환
  // 예시: opalResponse.content 또는 opalResponse.result를 파싱
  try {
    const content = opalResponse.content || opalResponse.result || opalResponse.data;
    if (typeof content === 'string') {
      // JSON 문자열인 경우 파싱
      const parsed = JSON.parse(content);
      return parsed as SongPayload;
    }
    
    // 이미 객체인 경우
    return content as SongPayload;
  } catch {
    // 파싱 실패 시 기본 구조 반환
    return {
      status: 'ok',
      songMeta: {
        sourceLang: 'ko',
        hasAudio: false,
      },
      lines: [],
    };
  }
}

/**
 * 텍스트만으로 Opal API 호출 (음성 없이)
 */
export async function callOpalApiWithText(text: string, sourceLang: 'ko' | 'zh' = 'ko'): Promise<SongPayload> {
  return callOpalApi({
    text,
    sourceLang,
    targetLang: 'zh',
  });
}

/**
 * 오디오 파일로 Opal API 호출
 */
export async function callOpalApiWithAudio(
  audioFile: File,
  sourceLang: 'ko' | 'zh' = 'ko'
): Promise<SongPayload> {
  return callOpalApi({
    audioFile,
    sourceLang,
    targetLang: 'zh',
  });
}

/**
 * 오디오 URL로 Opal API 호출
 */
export async function callOpalApiWithAudioUrl(
  audioUrl: string,
  sourceLang: 'ko' | 'zh' = 'ko'
): Promise<SongPayload> {
  return callOpalApi({
    audioUrl,
    sourceLang,
    targetLang: 'zh',
  });
}

