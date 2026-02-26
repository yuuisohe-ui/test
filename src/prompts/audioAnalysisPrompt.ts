/**
 * 음성 분석용 ChatGPT 프롬프트
 * Whisper API로 전사된 텍스트를 입력받아 중국어 학습 데이터를 생성합니다.
 */

export function getAudioAnalysisPrompt(
  transcribedText: string, 
  sourceLang: 'ko' | 'zh',
  audioFileName?: string
): string {
  return `You are analyzing Korean song lyrics extracted from an audio file for a Chinese language learning app. 

The lyrics were transcribed from audio, so please:
1. Parse the transcribed text into lines (split by natural pauses or line breaks)
2. Extract key vocabulary and grammar patterns
4. Provide detailed analysis for Korean learners studying Chinese

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
      "startSec": 0.0,
      "endSec": 3.5,
      "NOTE: startSec and endSec will be filled by Whisper segments timestamps - you can set them to 0 or any placeholder value",
      "tokensZh": [
        {
          "text": "중국어 단어",
          "glossZh": "중국어 설명",
          "glossKr": "한국어 설명",
          "example": "예문",
          "hskLevel": 1
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
          "tones": "1-2-3",
          "hskLevel": 1
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
1. **Analyze ALL lines** of the transcribed lyrics - do not skip any lines. Process every single line from the transcribed text.
2. Split the transcribed text by line breaks (\\n) or natural sentence boundaries to create separate line entries.
3. **Extract key vocabulary and grammar patterns** from EACH line
4. **Provide 'originForm'** for conjugated Korean verbs/adjectives:
   - "사랑해" → "사랑하다"
   - "예뻐" → "예쁘다"  
   - "먹었어" → "먹다"
   - "갔어" → "가다"
5. **IMPORTANT: Timestamps (startSec/endSec) will be automatically filled by Whisper segments** - you do NOT need to calculate or estimate them. You can set them to 0 or any placeholder value, they will be overridden by the system.
6. **Provide accurate 'pos'** (part of speech) for each chunk
7. **'romanization'** should use Revised Romanization of Korean
8. **'chunks'** should break sentences into meaningful grammatical units
9. **HSK LEVEL (hskLevel):** For each item in tokensZh and chunks, include "hskLevel" (integer 1-6): 1-2 = elementary, 3-4 = intermediate, 5-6 = advanced. Use word-level segmentation (typical 1-4 characters per token).
11. **IMPORTANT: Include ALL lines from the transcribed text. If the transcription has 10 lines, the response must have 10 line entries. If it has 20 lines, return 20 entries.**
12. **SEMANTIC SEGMENTATION (chunkSegments):**
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

Transcribed lyrics from audio (process ALL lines):
${transcribedText}

Return ONLY valid JSON with ALL lines analyzed, no additional text or markdown formatting.`;
}

