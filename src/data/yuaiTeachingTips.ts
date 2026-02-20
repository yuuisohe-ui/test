// 雨爱教学提示数据（预生成，不调用API）
// 这些数据是预先通过API生成并固定的，避免每次加载都调用API

export interface TeachingTipVocabulary {
  word: string;
  hskLevel: string;
  pinyin?: string;
  korean?: string;
}

export interface TeachingTipPattern {
  pattern: string;
  hskLevel: string;
  korean?: string;
  chineseExample?: string;
  koreanExample?: string;
}

export interface TeachingTipContent {
  vocabulary: TeachingTipVocabulary[];
  patterns: TeachingTipPattern[];
}

// 每个句子的教学提示（按句子索引）
export const yuaiTeachingTips: Record<number, TeachingTipContent> = {
  1: {
    vocabulary: [
      {
        word: "天气",
        hskLevel: "HSK 1",
        pinyin: "tiān qì",
        korean: "날씨"
      }
    ],
    patterns: []
  },
  2: {
    vocabulary: [
      {
        word: "表情",
        hskLevel: "HSK 3",
        pinyin: "biǎo qíng",
        korean: "표정"
      }
    ],
    patterns: [
      {
        pattern: "就像……",
        hskLevel: "HSK 3",
        korean: "마치 ~와 같다는 의미로, 비유를 나타낼 때 사용합니다.",
        chineseExample: "他就像我的亲哥哥一样。",
        koreanExample: "그는 마치 나의 친오빠 같아요."
      }
    ]
  },
  3: {
    vocabulary: [
      {
        word: "哭泣",
        hskLevel: "HSK 4",
        pinyin: "kū qì",
        korean: "울다"
      }
    ],
    patterns: []
  },
  4: {
    vocabulary: [
      {
        word: "看不清",
        hskLevel: "HSK 3",
        pinyin: "kàn bù qīng",
        korean: "잘 보이지 않다"
      }
    ],
    patterns: [
      {
        pattern: "V + 不 + C",
        hskLevel: "HSK 3",
        korean: "동사 뒤에 '不'와 보어(결과/방향)를 결합하여 동작의 결과를 실현할 수 없음을 나타내는 가능보어의 부정형입니다.",
        chineseExample: "字太小了，我看不清。",
        koreanExample: "글자가 너무 작아서 잘 보이지 않아요."
      }
    ]
  },
  9: {
    vocabulary: [
      {
        word: "呼吸",
        hskLevel: "HSK 4",
        pinyin: "hū xī",
        korean: "숨쉬다"
      },
      {
        word: "渗入",
        hskLevel: "HSK 5",
        pinyin: "shèn rù",
        korean: "스며들다"
      }
    ],
    patterns: [
      {
        pattern: "像……",
        hskLevel: "HSK 2",
        korean: "상태나 성질이 비슷함을 나타내는 비교 구문입니다.",
        chineseExample: "她的脸像红苹果。",
        koreanExample: "그녀의 얼굴은 빨간 사과 같아요."
      }
    ]
  },
  12: {
    vocabulary: [
      {
        word: "想念",
        hskLevel: "HSK 4",
        pinyin: "xiǎng niàn",
        korean: "그리워하다"
      },
      {
        word: "透明",
        hskLevel: "HSK 4",
        pinyin: "tòu míng",
        korean: "투명한"
      }
    ],
    patterns: [
      {
        pattern: "让……",
        hskLevel: "HSK 3",
        korean: "사역동사로, '~로 하여금 ~하게 하다'라는 의미를 가집니다.",
        chineseExample: "请让我再想一想。",
        koreanExample: "제가 다시 한번 생각하게 해주세요."
      }
    ]
  },
};

// 获取指定句子的教学提示
export function getTeachingTipForSentence(sentenceIndex: number): TeachingTipContent | null {
  return yuaiTeachingTips[sentenceIndex] || null;
}

