export type OpalToken = {
  text: string;
  glossZh?: string;
  glossKr?: string;
  example?: string;
  /** HSK 等级 1-6，用于难度背景色：1-2 初级绿、3-4 中级蓝、5-6 高级紫 */
  hskLevel?: number;
};

export type OpalChunk = {
  pattern: string;           // 원본 텍스트 (한국어)
  originForm?: string;        // 사전형 (활용된 동사/형용사의 원형)
  pos?: string;              // 품사 (part of speech)
  pinyin?: string;           // 병음
  chunkZh?: string;          // 중국어 의미
  explanation?: string;      // 설명
  tones?: string;            // 성조 구조
  startSec?: number;
  endSec?: number;
  /** HSK 等级 1-6，用于难度背景色 */
  hskLevel?: number;
};

export type OpalLine = {
  lineNo: number;
  lineId?: string;           // 줄 고유 ID
  displayLine: string;       // 한국어 가사
  zhSentence: string;        // 중국어 번역
  romanization?: string;     // 한국어 로마자 표기
  startSec?: number;
  endSec?: number;
  tokensZh?: OpalToken[];
  chunks?: OpalChunk[];
};

export type SongPayload = {
  status: "ok" | "failed";
  message?: string;
  songId?: string;
  version?: string;          // 버전 정보
  langDisplay?: "ko" | "zh";
  langTeach?: "zh";
  songMeta?: { sourceLang: "ko" | "zh"; hasAudio: boolean };
  audioUrl?: string;
  lines: OpalLine[];
};

export const opalMockOk: SongPayload = {
  status: "ok",
  songId: "mock_song_001",
  langDisplay: "ko",
  langTeach: "zh",
  songMeta: { sourceLang: "ko", hasAudio: true },
  audioUrl: "",
  lines: [
    {
      lineNo: 1,
      displayLine: "너를 사랑해",
      zhSentence: "我爱你",
    startSec: 10.2,      endSec: 12.0,
      tokensZh: [
        { text: "我", glossZh: "第一人称", hskLevel: 1 },
        { text: "爱", glossZh: "喜欢、深爱", hskLevel: 1 },
        { text: "你", glossZh: "第二人称", hskLevel: 1 }
      ],
      chunks: [
        { pattern: "主语 + 动词 + 宾语", chunkZh: "我爱你", pinyin: "wǒ ài nǐ", tones: "3-4-3", hskLevel: 1 }
      ]
    }
  ]
};

export const opalMockFailed: SongPayload = {
  status: "failed",
  message: "该音频吐字或节奏较复杂，当前无法稳定转写。请使用文本模式。",
  songMeta: { sourceLang: "ko", hasAudio: true },
  audioUrl: "",
  lines: []
};
