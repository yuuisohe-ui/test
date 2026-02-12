/**
 * 词卡详细信息API
 * 从ChatGPT API获取词的详细信息：拼音、韩文、中文例句、韩文例句
 */

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
const OPENAI_API_URL = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1';

export interface WordCardInfo {
  word: string;
  pinyin: string;
  korean: string;
  chineseExample: string;
  koreanExample: string;
}

/**
 * 获取词的详细信息
 */
export async function getWordCardInfo(word: string): Promise<WordCardInfo> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY || OPENAI_API_KEY;
  const apiUrl = import.meta.env.VITE_OPENAI_API_URL || OPENAI_API_URL;

  if (!apiKey || apiKey === 'your-openai-api-key-here' || apiKey.trim() === '') {
    throw new Error('OpenAI API 키가 설정되지 않았습니다.');
  }

  const prompt = `请为中文词"${word}"提供以下信息，以JSON格式返回：
{
  "word": "${word}",
  "pinyin": "拼音（带声调）",
  "korean": "对应的韩文含义",
  "chineseExample": "包含该词的中文例句（在该词下加下划线）",
  "koreanExample": "中文例句对应的韩文翻译"
}

要求：
1. 拼音必须准确，带声调
2. 韩文含义要准确
3. 中文例句要自然，并在该词下加下划线（使用<u>标签）
4. 韩文例句是中文例句的翻译，不要包含任何HTML标签（如<u>标签），只返回纯文本

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
      temperature: 0.3,
      response_format: { type: 'json_object' },
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.error?.message || `获取词卡信息失败: ${response.status}`);
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content;

  if (!content) {
    throw new Error('API 응답이 비어있습니다.');
  }

  // 解析JSON
  let parsed;
  try {
    parsed = typeof content === 'string' ? JSON.parse(content) : content;
  } catch (parseError) {
    // 尝试提取JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      parsed = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('JSON 파싱 실패');
    }
  }

  // 清理韩文例句中的HTML标签（如<u>标签）
  let koreanExample = parsed.koreanExample || '';
  if (koreanExample) {
    // 移除所有HTML标签
    koreanExample = koreanExample.replace(/<[^>]*>/g, '');
    // 清理多余的空格
    koreanExample = koreanExample.replace(/\s+/g, ' ').trim();
  }

  return {
    word: parsed.word || word,
    pinyin: parsed.pinyin || '',
    korean: parsed.korean || '',
    chineseExample: parsed.chineseExample || '',
    koreanExample: koreanExample,
  };
}

