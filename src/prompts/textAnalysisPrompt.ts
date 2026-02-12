/**
 * 텍스트 분석용 ChatGPT 프롬프트
 * 한국어 가사 텍스트를 입력받아 중국어 학습 데이터를 생성합니다.
 */

export function getTextAnalysisPrompt(text: string, sourceLang: 'ko' | 'zh'): string {
  return `You are analyzing Korean song lyrics for a Chinese language learning app. Please generate a JSON response following this exact structure:

{
  "status": "ok",
  "message": "Analysis complete",
  "songId": "generated_unique_id",
  "version": "1.0",
  "langDisplay": "${sourceLang}",
  "langTeach": "zh",
  "audioUrl": "",
  "lines": [
    {
      "lineNo": 1,
      "lineId": "line_1",
      "displayLine": "한국어 가사 원문",
      "zhSentence": "중국어 번역",
      "romanization": "hangugeo gasa wonmun",
      "startSec": 0.0,
      "endSec": 3.5,
      "tokensZh": [
        {
          "text": "중국어 단어",
          "glossZh": "중국어 설명",
          "glossKr": "한국어 설명",
          "example": "예문"
        }
      ],
      "chunks": [
        {
          "pattern": "한국어 원문 어구",
          "originForm": "사전형 (활용된 동사/형용사의 원형)",
          "pos": "품사 (예: 동사, 형용사, 명사)",
          "pinyin": "zhōng guó yǔ",
          "chunkZh": "중국어 의미",
          "explanation": "문법/의미 설명",
          "tones": "1-2-3"
        }
      ],
      "chunkSegments": [
        {
          "chunkZh": "语义分段1",
          "pinyin": "duì yìng pīn yīn",
          "tones": "4-4-1-1"
        },
        {
          "chunkZh": "语义分段2",
          "pinyin": "duì yìng pīn yīn",
          "tones": "4-4-1-1"
        }
      ]
    }
  ]
}

CRITICAL REQUIREMENTS:
1. **Analyze ALL lines** of the lyrics - do not skip any lines. Process every single line from the input text.
2. Split the input text by line breaks (\\n) or natural sentence boundaries to create separate line entries.
3. Extract key vocabulary and grammar patterns from EACH line
4. For Korean verbs/adjectives, provide the 'originForm' (dictionary form) - e.g., "사랑해" → "사랑하다", "예뻐" → "예쁘다"
5. Provide accurate 'pos' (part of speech) for each chunk
6. Ensure 'startSec' and 'endSec' are estimated based on line position (each line approximately 3-4 seconds)
7. 'romanization' should be Korean text in romanized form (Revised Romanization of Korean)
8. Focus on teaching Chinese (zhSentence) that helps Korean learners understand the meaning
9. 'chunks' should break down the sentence into meaningful grammatical units
10. **IMPORTANT: Include ALL lines from the input. If the input has 10 lines, the response must have 10 line entries. If it has 20 lines, return 20 entries.**
11. **SEMANTIC SEGMENTATION (chunkSegments):**
    - You are a Chinese language processing assistant.
    - Task: Segment the Chinese sentence (zhSentence) into 2-3 semantic segments based on natural speech boundaries.
    - Requirements:
      * Divide the sentence into 2-3 semantic segments (natural speech units)
      * For each segment, provide:
        1. chunkZh: The Chinese text of that segment
        2. pinyin: Complete pinyin with tone marks for ALL characters in that segment (do not miss any character)
        3. tones: Tone number structure (e.g., "3-4-4") for ALL characters in that segment (do not miss any character)
    - CRITICAL: The pinyin and tones in each segment must completely correspond to each other and cover ALL characters in the segment. Do not miss any character's pinyin or tone.
    - Example: For "就像是你多变的表情", you might segment as:
      * Segment 1: chunkZh: "就像是你", pinyin: "jiù xiàng shì nǐ", tones: "4-4-4-3"
      * Segment 2: chunkZh: "多变的表情", pinyin: "duō biàn de biǎo qíng", tones: "1-4-0-3-2"

Korean lyrics to analyze (process ALL lines):
${text}

Return ONLY valid JSON with ALL lines analyzed, no additional text.`;
}

