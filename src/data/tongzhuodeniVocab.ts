// 同桌的你歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析（跳过标题信息，从实际歌词开始）
// 原md文件中第3句对应SRT第1句，以此类推
export const tongzhuodeniVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "想起",
      pinyin: "xiǎng qǐ",
      level: "intermediate",
      meaning: "回忆起",
      meaningKr: "생각나다",
      example: "我想起了以前的事。",
      exampleKr: "나는 이전의 일이 생각났다."
    }
  ],
  2: [
    {
      word: "日记",
      pinyin: "rì jì",
      level: "intermediate",
      meaning: "每天记录生活的一种文体",
      meaningKr: "일기",
      example: "他有写日记的习惯。",
      exampleKr: "그는 일기를 쓰는 습관이 있다."
    }
  ],
  3: [
    {
      word: "惦记",
      pinyin: "diàn jì",
      level: "advanced",
      meaning: "心里老想着，放不下",
      meaningKr: "그리워하다/마음에 두다",
      example: "家里人一直惦记着你的身体。",
      exampleKr: "가족들이 줄곧 너의 건강을 걱정하고 계셔."
    }
  ],
  4: [
    {
      word: "曾经",
      pinyin: "céng jīng",
      level: "intermediate",
      meaning: "表示从前有过某动作或情况",
      meaningKr: "이미/이전에",
      example: "我曾经去过那个城市。",
      exampleKr: "나는 이전에 그 도시에 가본 적이 있다."
    }
  ],
  5: [],
  6: [
    {
      word: "猜",
      pinyin: "cāi",
      level: "intermediate",
      meaning: "根据不明显的线索推测",
      meaningKr: "맞히다/추측하다",
      example: "你猜猜这个盒子里是什么？",
      exampleKr: "이 상자 안에 무엇이 있는지 맞춰봐."
    }
  ],
  7: [
    {
      word: "偶然",
      pinyin: "ǒu rán",
      level: "advanced",
      meaning: "意想不到地，间或",
      meaningKr: "우연히",
      example: "我在街上偶然遇到了老同学。",
      exampleKr: "나는 거리에서 우연히 옛 동창을 만났다."
    },
    {
      word: "翻",
      pinyin: "fān",
      level: "intermediate",
      meaning: "翻动，查找",
      meaningKr: "뒤적이다/들추다",
      example: "他在翻看旧照片。",
      exampleKr: "그는 옛 사진을 들춰보고 있다."
    },
    {
      word: "相片",
      pinyin: "xiàng piàn",
      level: "intermediate",
      meaning: "照片",
      meaningKr: "사진",
      example: "这张相片已经泛黄了。",
      exampleKr: "이 사진은 이미 누렇게 변했다."
    }
  ],
  8: [
    {
      word: "想起",
      pinyin: "xiǎng qǐ",
      level: "intermediate",
      meaning: "回忆起",
      meaningKr: "생각나다",
      example: "这时我才想起他的名字。",
      exampleKr: "그제야 나는 그의 이름이 생각났다."
    }
  ],
  9: [
    {
      word: "娶",
      pinyin: "qǔ",
      level: "advanced",
      meaning: "男方把女方接过来成亲",
      meaningKr: "장가들다",
      example: "他终于娶到了心爱的姑娘。",
      exampleKr: "그는 마침내 사랑하는 아가씨와 결혼했다."
    },
    {
      word: "多愁善感",
      pinyin: "duō chóu shàn gǎn",
      level: "advanced",
      meaning: "感情脆弱，容易发愁或感伤",
      meaningKr: "다정다감하다/감수성이 예민하다",
      example: "她是个多愁善感的文学青年。",
      exampleKr: "그녀는 감수성이 예민한 문학 청년이다."
    }
  ],
  10: [
    {
      word: "日记",
      pinyin: "rì jì",
      level: "intermediate",
      meaning: "每天记录生活的一种文体",
      meaningKr: "일기",
      example: "不要随便看别人的日记。",
      exampleKr: "함부로 다른 사람의 일기를 보지 마라."
    }
  ],
  11: [
    {
      word: "盘起",
      pinyin: "pán qǐ",
      level: "advanced",
      meaning: "把长发绕在一起固定住",
      meaningKr: "머리를 틀어 올리다",
      example: "她把长发盘起，显得很干练。",
      exampleKr: "그녀는 긴 머리를 틀어 올려서 매우 유능해 보였다."
    }
  ],
  12: [
    {
      word: "嫁衣",
      pinyin: "jià yī",
      level: "advanced",
      meaning: "女子出嫁时穿的衣服",
      meaningKr: "혼례복",
      example: "她亲手缝制了自己的嫁衣。",
      exampleKr: "그녀는 자신의 혼례복을 직접 만들었다."
    }
  ],
  13: [
    {
      word: "从前",
      pinyin: "cóng qián",
      level: "intermediate",
      meaning: "过去的时候",
      meaningKr: "예전/옛날",
      example: "从前这里是一片草地。",
      exampleKr: "예전에 이곳은 풀밭이었다."
    },
    {
      word: "小心",
      pinyin: "xiǎo xīn",
      level: "basic",
      meaning: "注意，谨慎",
      meaningKr: "조심하다",
      example: "过马路要小心。",
      exampleKr: "길을 건널 때는 조심해야 한다."
    }
  ],
  14: [
    {
      word: "借",
      pinyin: "jiè",
      level: "intermediate",
      meaning: "暂时使用别人的东西",
      meaningKr: "빌리다",
      example: "我向他借了一本书。",
      exampleKr: "나는 그에게 책 한 권을 빌렸다."
    },
    {
      word: "橡皮",
      pinyin: "xiàng pí",
      level: "intermediate",
      meaning: "擦掉铅笔迹的文具",
      meaningKr: "지우개",
      example: "我的橡皮掉在地上了。",
      exampleKr: "내 지우개가 바닥에 떨어졌다."
    }
  ],
  15: [
    {
      word: "无意",
      pinyin: "wú yì",
      level: "advanced",
      meaning: "不是故意的；偶然",
      meaningKr: "무심코/뜻하지 않게",
      example: "他无意中说出了那个秘密。",
      exampleKr: "그는 무심코 그 비밀을 말해버렸다."
    }
  ],
  16: [],
  17: [],
  18: [
    {
      word: "日子",
      pinyin: "rì zi",
      level: "intermediate",
      meaning: "时光；生活",
      meaningKr: "나날/생활",
      example: "那段日子我们过得很开心。",
      exampleKr: "그 시절 우리는 매우 즐겁게 지냈다."
    }
  ],
  19: [
    {
      word: "毕业",
      pinyin: "bì yè",
      level: "intermediate",
      meaning: "完成学习阶段",
      meaningKr: "졸업하다",
      example: "大学毕业后你想做什么？",
      exampleKr: "대학교 졸업 후에 무엇을 하고 싶니?"
    },
    {
      word: "遥遥无期",
      pinyin: "yáo yáo wú qī",
      level: "advanced",
      meaning: "形容时间还很远，没有确定的期限",
      meaningKr: "아득히 멀어 기약이 없다",
      example: "工程完工似乎遥遥无期。",
      exampleKr: "공사 완공이 아득히 멀어 보인다."
    }
  ],
  20: [
    {
      word: "转眼",
      pinyin: "zhuǎn yǎn",
      level: "advanced",
      meaning: "极短的时间",
      meaningKr: "눈 깜짝할 사이에",
      example: "转眼间，假期就结束了。",
      exampleKr: "눈 깜짝할 사이에 방학이 끝났다."
    },
    {
      word: "各奔东西",
      pinyin: "gè bèn dōng xī",
      level: "advanced",
      meaning: "各自奔向不同的方向，指分手",
      meaningKr: "각자 제 갈 길을 가다",
      example: "毕业后，同学们各奔东西。",
      exampleKr: "졸업 후에 동창들은 각자 제 갈 길을 갔다."
    }
  ],
  21: [
    {
      word: "遇到",
      pinyin: "yù dào",
      level: "intermediate",
      meaning: "碰见",
      meaningKr: "만나다/부닥치다",
      example: "我们在路上遇到了大雨。",
      exampleKr: "우리는 길에서 폭우를 만났다."
    }
  ],
  22: [
    {
      word: "安慰",
      pinyin: "ān wèi",
      level: "advanced",
      meaning: "使人心情安适",
      meaningKr: "위로하다",
      example: "他耐心地安慰受伤的孩子。",
      exampleKr: "그는 인내심 있게 다친 아이를 위로했다."
    }
  ],
  23: [
    {
      word: "信",
      pinyin: "xìn",
      level: "intermediate",
      meaning: "书信",
      meaningKr: "편지",
      example: "我写了一封信寄给父母。",
      exampleKr: "나는 부모님께 드릴 편지 한 통을 썼다."
    }
  ],
  24: [
    {
      word: "丢",
      pinyin: "diū",
      level: "intermediate",
      meaning: "遗失；扔下",
      meaningKr: "잃어버리다/버리다",
      example: "别把垃圾到处乱丢。",
      exampleKr: "쓰레기를 아무 데나 버리지 마세요."
    }
  ],
  25: [
    {
      word: "远去",
      pinyin: "yuǎn qù",
      level: "intermediate",
      meaning: "向远方离去",
      meaningKr: "멀리 떠나가다",
      example: "看着他远去的背影，我很难过。",
      exampleKr: "그의 멀어져 가는 뒷모습을 보니 매우 슬펐다."
    }
  ],
  26: [
    {
      word: "妻",
      pinyin: "qī",
      level: "intermediate",
      meaning: "妻子",
      meaningKr: "아내",
      example: "他带着妻儿去旅游了。",
      exampleKr: "그는 처자식을 데리고 여행을 떠났다."
    }
  ],
  27: [
    {
      word: "相片",
      pinyin: "xiàng piàn",
      level: "intermediate",
      meaning: "照片",
      meaningKr: "사진",
      example: "这张相片记录了美好的瞬间。",
      exampleKr: "이 사진은 아름다운 순간을 기록하고 있다."
    }
  ],
  28: [],
  29: [
    {
      word: "娶",
      pinyin: "qǔ",
      level: "advanced",
      meaning: "男方把女方接过来成亲",
      meaningKr: "장가들다",
      example: "谁娶了那个可爱的姑娘？",
      exampleKr: "누가 그 귀여운 아가씨와 결혼했을까?"
    }
  ],
  30: [
    {
      word: "安慰",
      pinyin: "ān wèi",
      level: "advanced",
      meaning: "使人心情安适",
      meaningKr: "위로하다",
      example: "朋友的安慰让我感觉好多了。",
      exampleKr: "친구의 위로가 나를 훨씬 나아지게 했다."
    }
  ],
  31: [
    {
      word: "盘起",
      pinyin: "pán qǐ",
      level: "advanced",
      meaning: "把长发绕在一起固定住",
      meaningKr: "머리를 틀어 올리다",
      example: "她喜欢把头发盘起来。",
      exampleKr: "그녀는 머리를 틀어 올리는 것을 좋아한다."
    }
  ],
  32: [
    {
      word: "嫁衣",
      pinyin: "jià yī",
      level: "advanced",
      meaning: "女子出嫁时穿的衣服",
      meaningKr: "혼례복",
      example: "这件嫁衣非常华丽。",
      exampleKr: "이 혼례복은 매우 화려하다."
    }
  ],
  33: []
};

// 获取指定句子的词汇分析
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return tongzhuodeniVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(tongzhuodeniVocabAnalysis).flat();
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}

