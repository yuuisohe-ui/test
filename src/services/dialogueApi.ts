/**
 * 대화 생성 API
 * 선택한 단어를 사용하여 ChatGPT로 간단한 대화를 생성합니다.
 */

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
const OPENAI_API_URL = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

export interface DialogueResponse {
  word: string;
  dialogue: string;
  translation?: string;
}

/**
 * 선택한 단어로 간단한 대화 생성
 */
export async function createDialogue(word: string): Promise<DialogueResponse> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || OPENAI_API_URL;

  if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
    throw new Error('OpenAI API 키가 설정되지 않았습니다.');
  }

  const prompt = `다음 중국어 단어를 사용하여 한국어 학습자를 위한 간단한 대화를 만들어주세요.

단어: ${word}

요구사항:
1. 자연스러운 일상 대화 형식 (2-3턴)
2. 선택한 단어가 대화에 포함되어야 함
3. 각 발화에 한국어 번역 제공
4. 간단하고 이해하기 쉬운 내용

응답 형식 (JSON):
{
  "dialogue": "A: [중국어 발화 1]\\nB: [중국어 발화 2]\\nA: [중국어 발화 3]",
  "translation": "A: [한국어 번역 1]\\nB: [한국어 번역 2]\\nA: [한국어 번역 3]"
}

JSON 형식으로만 응답하세요.`;

  try {
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

    // 마크다운 코드 블록 제거
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

    const parsed = JSON.parse(content);
    return {
      word,
      dialogue: parsed.dialogue || '',
      translation: parsed.translation || '',
    };
  } catch (error) {
    console.error('대화 생성 오류:', error);
    throw error;
  }
}

