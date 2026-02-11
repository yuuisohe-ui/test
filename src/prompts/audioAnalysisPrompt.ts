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
2. Estimate timing (startSec/endSec) based on line position - assume each line takes approximately 3-4 seconds
3. Extract key vocabulary and grammar patterns
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
5. **Ensure precise 'startSec' and 'endSec'** for audio synchronization:
   - Line 1: startSec: 0.0, endSec: ~3.5
   - Line 2: startSec: ~3.5, endSec: ~7.0
   - Continue incrementing by ~3.5 seconds per line
6. **Provide accurate 'pos'** (part of speech) for each chunk
7. **'romanization'** should use Revised Romanization of Korean
8. **'chunks'** should break sentences into meaningful grammatical units
9. **IMPORTANT: Include ALL lines from the transcribed text. If the transcription has 10 lines, the response must have 10 line entries. If it has 20 lines, return 20 entries.**

Transcribed lyrics from audio (process ALL lines):
${transcribedText}

Return ONLY valid JSON with ALL lines analyzed, no additional text or markdown formatting.`;
}

