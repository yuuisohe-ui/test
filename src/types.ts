export interface Token {
  text: string;
  glossZh: string;
  glossKr?: string;
  example: string;
  /** HSK 1-6，用于难度背景色：1-2 初级绿、3-4 中级蓝、5-6 高级紫 */
  hskLevel?: number;
  /** 词汇训练用：basic | intermediate | advanced，与 hskLevel 二选一 */
  level?: 'basic' | 'intermediate' | 'advanced';
}

export interface ChunkSegment {
  chunkZh: string;
  pinyin: string;
  tones: string;
}

export interface Chunk {
  text: string;
  pinyin: string;
  tones: string;
  hskLevel?: number;
  chunkSegments?: ChunkSegment[];
}

export interface SentenceData {
  sentence: string;
  tokens: Token[];
  chunks: Chunk[];
}

