export interface Token {
  text: string;
  glossZh: string;
  glossKr?: string;
  example: string;
  pinyin?: string; // 拼音
  level?: 'basic' | 'intermediate' | 'advanced'; // 难度等级（用于词汇训练模式的颜色标记）
}

export interface Chunk {
  text: string;
  pinyin: string;
  tones: string;
  explanation?: string; // 偏误提示
  hskLevel?: number; // HSK等级 (1-6)
  chunkSegments?: Array<{ // 按语义断句的分段信息
    chunkZh: string;
    pinyin: string;
    tones: string;
  }>;
}

export interface SentenceData {
  sentence: string;
  tokens: Token[];
  chunks: Chunk[];
}

