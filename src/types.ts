export interface Token {
  text: string;
  glossZh: string;
  glossKr?: string;
  example: string;
}

export interface Chunk {
  text: string;
  pinyin: string;
  tones: string;
}

export interface SentenceData {
  sentence: string;
  tokens: Token[];
  chunks: Chunk[];
}

