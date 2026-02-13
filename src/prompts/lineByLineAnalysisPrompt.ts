/**
 * 逐行分析用 ChatGPT 提示词
 * 接收已分行的文本列表，逐行补全分析内容（不拆行）
 */

export function getLineByLineAnalysisPrompt(
  displayLines: string[],
  sourceLang: 'ko' | 'zh',
  audioFileName?: string
): string {
  const linesList = displayLines.map((line, index) => `${index + 1}. ${line}`).join('\n');
  
  return `You are analyzing song lyrics for a Chinese language learning app. 

The lyrics have already been split into lines (by Whisper segments). Your task is to analyze EACH line and provide detailed learning content.

CRITICAL: You must return EXACTLY ${displayLines.length} line entries, one for each input line, in the same order.

Please generate a JSON response following this exact structure:

{
  "status": "ok",
  "message": "Analysis complete",
  "songId": "generated_unique_id",
  "version": "1.0",
  "langDisplay": "${sourceLang}",
  "langTeach": "zh",
  "audioUrl": "${audioFileName || ''}",
  "lines": [
    {
      "lineNo": 1,
      "lineId": "line_1",
      "displayLine": "한국어 가사 원문",
      "zhSentence": "중국어 번역",
      "romanization": "hangugeo gasa wonmun",
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
          "originForm": "사전형 (활용된 동사/형용사의 원형, 예: 사랑해 → 사랑하다)",
          "pos": "품사 (예: 동사, 형용사, 명사, 조사)",
          "pinyin": "zhōng guó yǔ",
          "chunkZh": "중국어 의미",
          "explanation": "문법/의미 상세 설명",
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
1. **Return EXACTLY ${displayLines.length} line entries** - one for each input line, in the same order.
2. **Do NOT split or merge lines** - analyze each line as provided.
3. **Extract key vocabulary and grammar patterns** from EACH line.
4. **Provide 'originForm'** for conjugated Korean verbs/adjectives:
   - "사랑해" → "사랑하다"
   - "예뻐" → "예쁘다"  
   - "먹었어" → "먹다"
   - "갔어" → "가다"
5. **Provide accurate 'pos'** (part of speech) for each chunk.
6. **'romanization'** should use Revised Romanization of Korean.
7. **'chunks'** should break sentences into meaningful grammatical units.
8. **SEMANTIC SEGMENTATION (chunkSegments):**
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

Input lines (analyze each line in order):
${linesList}

Return ONLY valid JSON with exactly ${displayLines.length} line entries, no additional text or markdown formatting.`;
}
