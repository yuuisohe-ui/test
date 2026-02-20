// 海上花歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析（跳过标题信息，从实际歌词开始）
export const haishanghuaVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "柔情",
      pinyin: "róu qíng",
      level: "advanced",
      meaning: "温柔深厚的情感",
      meaningKr: "부드러운 정",
      example: "他的眼神里充满了柔情。",
      exampleKr: "그의 눈빛은 부드러운 정으로 가득 차 있었다."
    }
  ],
  2: [
    {
      word: "梦想",
      pinyin: "mèng xiǎng",
      level: "intermediate",
      meaning: "理想；愿望",
      meaningKr: "꿈, 이상",
      example: "我的梦想是环游世界。",
      exampleKr: "내 꿈은 세계 일주를 하는 것이다."
    }
  ],
  3: [
    {
      word: "徜徉",
      pinyin: "cháng yáng",
      level: "advanced",
      meaning: "闲游；安闲自在地行走",
      meaningKr: "한가로이 거닐다",
      example: "我们徜徉在美丽的西湖畔。",
      exampleKr: "우리는 아름다운 서호 주변을 한가로이 거닐었다."
    },
    {
      word: "荡漾",
      pinyin: "dàng yàng",
      level: "advanced",
      meaning: "水面等起伏波动",
      meaningKr: "출렁이다, 감돌다",
      example: "湖面上荡漾着微波。",
      exampleKr: "호수 위로 잔물결이 출렁인다."
    }
  ],
  4: [
    {
      word: "臂弯",
      pinyin: "bì wān",
      level: "advanced",
      meaning: "胳膊弯曲的部分，常喻指怀抱",
      meaningKr: "팔의 굽은 안쪽 (품)",
      example: "孩子在母亲的臂弯里睡着了。",
      exampleKr: "아이가 어머니의 품 안에서 잠들었다."
    }
  ],
  5: [
    {
      word: "深情",
      pinyin: "shēn qíng",
      level: "advanced",
      meaning: "深厚的感情",
      meaningKr: "깊은 정",
      example: "他深情地望着自己的家乡。",
      exampleKr: "그는 깊은 정을 담아 고향을 바라보았다."
    }
  ],
  6: [
    {
      word: "摇晃",
      pinyin: "yáo huàng",
      level: "intermediate",
      meaning: "摇摆，晃动",
      meaningKr: "흔들거리다",
      example: "小船在水面上轻轻地摇晃。",
      exampleKr: "작은 배가 수면 위에서 가볍게 흔들거린다."
    }
  ],
  7: [
    {
      word: "缠绵",
      pinyin: "chán mián",
      level: "advanced",
      meaning: "形容感情深厚且难舍难分",
      meaningKr: "(정이) 깊어 떨어지기 어렵다",
      example: "两人告别时的场面十分缠绵。",
      exampleKr: "두 사람이 작별할 때의 장면은 매우 애틋했다."
    },
    {
      word: "浪花",
      pinyin: "làng huā",
      level: "intermediate",
      meaning: "波浪激起的泡沫",
      meaningKr: "물보라, 파도꽃",
      example: "洁白的浪花拍打着海岸。",
      exampleKr: "하얀 물보라가 해안을 때린다."
    }
  ],
  8: [
    {
      word: "身上",
      pinyin: "shēn shang",
      level: "beginner",
      meaning: "身体上；指随身携带",
      meaningKr: "몸 위, 신체",
      example: "他身上穿着一件红色的外套。",
      exampleKr: "그는 빨간색 외투를 입고 있다."
    }
  ],
  9: [
    {
      word: "成真",
      pinyin: "chéng zhēn",
      level: "intermediate",
      meaning: "变成现实",
      meaningKr: "이루어지다, 실현되다",
      example: "祝你梦想成真。",
      exampleKr: "네 꿈이 이루어지길 바라."
    }
  ],
  10: [
    {
      word: "汹涌",
      pinyin: "xiōng yǒng",
      level: "advanced",
      meaning: "水势很大，翻腾上涌",
      meaningKr: "세차게 솟구치다, 거세다",
      example: "大海波涛汹涌。",
      exampleKr: "대해의 파도가 거세다."
    },
    {
      word: "红尘",
      pinyin: "hóng chén",
      level: "advanced",
      meaning: "旧指繁华的人世间",
      meaningKr: "속세",
      example: "他决定远离红尘，隐居山林。",
      exampleKr: "그는 속세를 떠나 산림에 은거하기로 결정했다."
    }
  ],
  11: [
    {
      word: "残留",
      pinyin: "cán liú",
      level: "advanced",
      meaning: "剩余；留下",
      meaningKr: "잔류하다, 남다",
      example: "雪地上残留着动物的足迹。",
      exampleKr: "눈 위에 동물의 발자국이 남아 있다."
    },
    {
      word: "遗恨",
      pinyin: "yí hèn",
      level: "advanced",
      meaning: "留下的恨事或遗憾",
      meaningKr: "남겨진 원한, 유한",
      example: "这成了他终生的遗恨。",
      exampleKr: "이것은 그의 평생의 한이 되었다."
    }
  ],
  12: [
    {
      word: "他生",
      pinyin: "tā shēng",
      level: "advanced",
      meaning: "来生；下一辈子",
      meaningKr: "다음 생, 환생",
      example: "愿只愿他生能再相遇。",
      exampleKr: "부디 다음 생에 다시 만날 수 있기를."
    }
  ],
  13: [
    {
      word: "身影",
      pinyin: "shēn yǐng",
      level: "intermediate",
      meaning: "人的身体影子 or 姿态",
      meaningKr: "모습, 자취",
      example: "他的身影渐渐消失在远方。",
      exampleKr: "그의 모습이 점점 멀리 사라졌다."
    },
    {
      word: "相随",
      pinyin: "xiāng suí",
      level: "advanced",
      meaning: "跟随；伴随",
      meaningKr: "서로 따르다, 뒤따르다",
      example: "无论你去哪，我都会与你相随。",
      exampleKr: "네가 어디를 가든 내가 너와 함께할게."
    }
  ],
  14: [
    {
      word: "永生永世",
      pinyin: "yǒng shēng yǒng shì",
      level: "advanced",
      meaning: "世世代代，永远",
      meaningKr: "영생영세, 영원토록",
      example: "我永生永世都会记住这份恩情。",
      exampleKr: "나는 영원토록 이 은혜를 기억할 것이다."
    }
  ],
  15: [
    {
      word: "奇情",
      pinyin: "qí qíng",
      level: "advanced",
      meaning: "奇特、不寻常的情感",
      meaningKr: "기이한 감정",
      example: "这本小说描写了一段旷世奇情。",
      exampleKr: "이 소설은 보기 드문 기이한 사랑 이야기를 묘사하고 있다."
    }
  ],
  16: [
    {
      word: "粉碎",
      pinyin: "fěn suì",
      level: "intermediate",
      meaning: "破碎；彻底失败",
      meaningKr: "가루로 만들다, 분쇄하다",
      example: "敌人的阴谋被粉碎了。",
      exampleKr: "적의 음모가 분쇄되었다."
    }
  ],
  17: [
    {
      word: "仿佛",
      pinyin: "fǎng fú",
      level: "intermediate",
      meaning: "好像；似乎",
      meaningKr: "마치 ~인 듯하다",
      example: "他仿佛在哪儿见过这个人。",
      exampleKr: "그는 마치 어디선가 이 사람을 본 것 같았다."
    },
    {
      word: "短暂",
      pinyin: "duǎn zàn",
      level: "intermediate",
      meaning: "时间极短",
      meaningKr: "짧다, 일시적이다",
      example: "相聚的时间虽然短暂，却很难忘。",
      exampleKr: "함께한 시간은 짧았지만 잊기 힘들다."
    }
  ],
  18: [
    {
      word: "一生",
      pinyin: "yì shēng",
      level: "intermediate",
      meaning: "一辈子",
      meaningKr: "평생, 일생",
      example: "他把一生都献给了教育事业。",
      exampleKr: "그는 평생을 교육 사업에 바쳤다."
    }
  ],
  19: [
    {
      word: "成真",
      pinyin: "chéng zhēn",
      level: "intermediate",
      meaning: "变成现实",
      meaningKr: "이루어지다",
      example: "美梦成真。",
      exampleKr: "꿈이 이루어지다."
    }
  ],
  20: [
    {
      word: "汹涌",
      pinyin: "xiōng yǒng",
      level: "advanced",
      meaning: "水势很大",
      meaningKr: "세차게 솟구치다",
      example: "江水汹涌。",
      exampleKr: "강물이 거세다."
    }
  ],
  21: [
    {
      word: "遗恨",
      pinyin: "yí hèn",
      level: "advanced",
      meaning: "留下的遗憾",
      meaningKr: "유한",
      example: "空留遗恨。",
      exampleKr: "부질없이 한만 남다."
    }
  ],
  22: [
    {
      word: "他生",
      pinyin: "tā shēng",
      level: "advanced",
      meaning: "来生；下一辈子",
      meaningKr: "다음 생, 환생",
      example: "愿只愿他生能再相遇。",
      exampleKr: "부디 다음 생에 다시 만날 수 있기를."
    }
  ],
  23: [
    {
      word: "相随",
      pinyin: "xiāng suí",
      level: "advanced",
      meaning: "跟随",
      meaningKr: "뒤따르다",
      example: "形影相随。",
      exampleKr: "그림자처럼 따라다니다."
    }
  ],
  24: [
    {
      word: "永生永世",
      pinyin: "yǒng shēng yǒng shì",
      level: "advanced",
      meaning: "永远",
      meaningKr: "영생영세",
      example: "他们发誓永生永世在一起。",
      exampleKr: "그들은 영원토록 함께할 것을 맹세했다."
    }
  ],
  25: [
    {
      word: "奇情",
      pinyin: "qí qíng",
      level: "advanced",
      meaning: "奇特的情感",
      meaningKr: "기이한 정",
      example: "这般奇情令人难忘。",
      exampleKr: "이런 기이한 정은 잊기 힘들다."
    }
  ],
  26: [
    {
      word: "粉碎",
      pinyin: "fěn suì",
      level: "intermediate",
      meaning: "彻底击碎",
      meaningKr: "분쇄하다",
      example: "梦想被粉碎了。",
      exampleKr: "꿈이 산산조각 났다."
    }
  ],
  27: [
    {
      word: "泡沫",
      pinyin: "pào mò",
      level: "intermediate",
      meaning: "聚在一起的许多小泡",
      meaningKr: "거품",
      example: "肥皂水起了很多泡沫。",
      exampleKr: "비눗물이 거품을 많이 냈다."
    }
  ],
  28: [
    {
      word: "一生",
      pinyin: "yì shēng",
      level: "intermediate",
      meaning: "全部的人生",
      meaningKr: "평생",
      example: "这是我的一生。",
      exampleKr: "이것은 나의 일생이다."
    }
  ]
};

// 获取指定句子的词汇分析
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return haishanghuaVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(haishanghuaVocabAnalysis).flat();
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}

