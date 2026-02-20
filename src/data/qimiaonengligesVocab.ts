// 奇妙能力歌歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析
export const qimiaonengligesVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "沙漠",
      pinyin: "shā mò",
      level: "intermediate",
      meaning: "desert",
      meaningKr: "사막",
      example: "这片沙漠非常广阔。",
      exampleKr: "이 사막은 매우 광활하다."
    },
    {
      word: "暴雨",
      pinyin: "bào yǔ",
      level: "intermediate",
      meaning: "rainstorm",
      meaningKr: "폭우",
      example: "外面下起了大暴雨。",
      exampleKr: "밖에 폭우가 내리기 시작했다."
    }
  ],
  2: [
    {
      word: "大海",
      pinyin: "dà hǎi",
      level: "basic",
      meaning: "sea; ocean",
      meaningKr: "바다",
      example: "大海的颜色很蓝。",
      exampleKr: "바다의 색깔이 매우 푸르다."
    },
    {
      word: "亲吻",
      pinyin: "qīn wěn",
      level: "intermediate",
      meaning: "to kiss",
      meaningKr: "입맞춤하다",
      example: "母亲亲吻了孩子的脸。",
      exampleKr: "어머니가 아이의 얼굴에 입을 맞추었다."
    }
  ],
  3: [
    {
      word: "黄昏",
      pinyin: "huáng hūn",
      level: "intermediate",
      meaning: "dusk; twilight",
      meaningKr: "황혼",
      example: "黄昏时的景色很美。",
      exampleKr: "황혼 무렵의 경치가 매우 아름답다."
    },
    {
      word: "追逐",
      pinyin: "zhuī zhú",
      level: "advanced",
      meaning: "to pursue; to chase",
      meaningKr: "추격하다, 뒤쫓다",
      example: "孩子们在草地上追逐打闹。",
      exampleKr: "아이들이 풀밭에서 서로 쫓아다니며 장난친다."
    }
  ],
  4: [],
  5: [
    {
      word: "美丽",
      pinyin: "měi lì",
      level: "basic",
      meaning: "beautiful",
      meaningKr: "아름답다",
      example: "这里的风景非常美丽。",
      exampleKr: "이곳의 풍경은 매우 아름답다."
    }
  ],
  6: [
    {
      word: "生命",
      pinyin: "shēng mìng",
      level: "intermediate",
      meaning: "life",
      meaningKr: "생명",
      example: "我们要热爱自己的生命。",
      exampleKr: "우리는 자신의 생명을 사랑해야 한다."
    }
  ],
  7: [
    {
      word: "诗句",
      pinyin: "shī jù",
      level: "advanced",
      meaning: "verse; line of poetry",
      meaningKr: "시구",
      example: "这段诗句写得很有意境。",
      exampleKr: "이 시구는 분위기가 아주 잘 표현되었다."
    }
  ],
  8: [
    {
      word: "荒芜",
      pinyin: "huāng wú",
      level: "advanced",
      meaning: "desolate; overgrown with weeds",
      meaningKr: "황폐하다",
      example: "那座老房子已经荒芜多年。",
      exampleKr: "그 낡은 집은 이미 수년간 황폐해졌다."
    },
    {
      word: "热闹",
      pinyin: "rè nao",
      level: "basic",
      meaning: "lively; bustling",
      meaningKr: "번화하다, 시끌벅적하다",
      example: "大街上非常热闹。",
      exampleKr: "거리가 매우 번화하다."
    }
  ],
  9: [
    {
      word: "尘埃",
      pinyin: "chén āi",
      level: "advanced",
      meaning: "dust",
      meaningKr: "먼지",
      example: "空气中落满了尘埃。",
      exampleKr: "공기 중에 먼지가 가득 내려앉았다."
    },
    {
      word: "城堡",
      pinyin: "chéng bǎo",
      level: "intermediate",
      meaning: "castle",
      meaningKr: "성, 성곽",
      example: "他在沙滩上搭了一个城堡。",
      exampleKr: "그는 모래사장에 성을 하나 쌓았다."
    }
  ],
  10: [
    {
      word: "天空",
      pinyin: "tiān kōng",
      level: "basic",
      meaning: "sky",
      meaningKr: "하늘",
      example: "蓝蓝的天空没有一朵云。",
      exampleKr: "파란 하늘에 구름 한 점 없다."
    },
    {
      word: "拒绝",
      pinyin: "jù jué",
      level: "intermediate",
      meaning: "to refuse; to reject",
      meaningKr: "거절하다",
      example: "他拒绝了我的要求。",
      exampleKr: "그는 나의 요구를 거절했다."
    }
  ],
  11: [
    {
      word: "明白",
      pinyin: "míng bai",
      level: "basic",
      meaning: "to understand; clear",
      meaningKr: "이해하다, 알다",
      example: "我不明白这句话的意思。",
      exampleKr: "나는 이 말의 의미를 이해하지 못하겠다."
    },
    {
      word: "气泡",
      pinyin: "qì pào",
      level: "intermediate",
      meaning: "bubble",
      meaningKr: "기포, 거품",
      example: "水里冒出了很多气泡。",
      exampleKr: "물속에서 많은 거품이 솟아올랐다."
    }
  ],
  12: [
    {
      word: "苦口良药",
      pinyin: "kǔ kǒu liáng yào",
      level: "advanced",
      meaning: "bitter medicine that cures; good advice is hard to hear",
      meaningKr: "입에 쓴 약이 병에는 좋다",
      example: "批评虽然不好听，但往往是苦口良药。",
      exampleKr: "비판은 비록 듣기 싫지만 종종 몸에 좋은 약이 된다."
    }
  ],
  13: [
    {
      word: "骄傲",
      pinyin: "jiāo ào",
      level: "intermediate",
      meaning: "proud; arrogant",
      meaningKr: "자랑스럽다, 거만하다",
      example: "我为我的工作感到骄傲。",
      exampleKr: "나는 내 일을 자랑스럽게 생각한다."
    }
  ],
  14: [
    {
      word: "月亮",
      pinyin: "yuè liang",
      level: "basic",
      meaning: "moon",
      meaningKr: "달",
      example: "今晚的月亮特别圆。",
      exampleKr: "오늘 밤 달이 유난히 둥글다."
    }
  ],
  15: [
    {
      word: "未知",
      pinyin: "wèi zhī",
      level: "intermediate",
      meaning: "unknown",
      meaningKr: "미지의, 알 수 없는",
      example: "未来充满了未知。",
      exampleKr: "미래는 미지로 가득 차 있다."
    },
    {
      word: "疯狂",
      pinyin: "fēng kuáng",
      level: "intermediate",
      meaning: "crazy; frantic",
      meaningKr: "미치다, 열광적이다",
      example: "这是一个疯狂的想法。",
      exampleKr: "이것은 미친 생각이다."
    }
  ],
  16: [
    {
      word: "张扬",
      pinyin: "zhāng yáng",
      level: "advanced",
      meaning: "to make public; ostentatious",
      meaningKr: "떠벌리다, 과시하다",
      example: "他的个性非常张扬。",
      exampleKr: "그의 개성은 매우 과시적이다."
    }
  ],
  17: [
    {
      word: "荒凉",
      pinyin: "huāng liáng",
      level: "advanced",
      meaning: "desolate; wild",
      meaningKr: "황량하다",
      example: "这条小路看起来很荒凉。",
      exampleKr: "이 작은 길은 매우 황량해 보인다."
    },
    {
      word: "景象",
      pinyin: "jǐng xiàng",
      level: "advanced",
      meaning: "scene; sight",
      meaningKr: "광경, 정경",
      example: "窗外是一派繁荣的景象。",
      exampleKr: "창밖은 번영하는 광경이다."
    }
  ],
  18: [
    {
      word: "无所谓",
      pinyin: "wú suǒ wèi",
      level: "intermediate",
      meaning: "to not matter; indifferent",
      meaningKr: "상관없다",
      example: "谁赢谁输我真的无所谓。",
      exampleKr: "누가 이기고 지든 난 정말 상관없다."
    }
  ],
  19: [
    {
      word: "透明",
      pinyin: "tòu míng",
      level: "intermediate",
      meaning: "transparent",
      meaningKr: "투명하다",
      example: "这种包装盒是透明的。",
      exampleKr: "이 포장 상자는 투명하다."
    }
  ],
  20: [
    {
      word: "回音",
      pinyin: "huí yīn",
      level: "intermediate",
      meaning: "echo; reply",
      meaningKr: "메아리, 회신",
      example: "空旷的山谷里传来回音。",
      exampleKr: "텅 빈 산골짜기에 메아리가 울려 퍼진다."
    }
  ],
  21: [
    {
      word: "山岭",
      pinyin: "shān lǐng",
      level: "advanced",
      meaning: "mountain ridge; mountain range",
      meaningKr: "산맥, 고개",
      example: "远处是连绵不断的山岭。",
      exampleKr: "먼 곳에 산맥이 끊임없이 이어져 있다."
    }
  ],
  22: [
    {
      word: "秘密",
      pinyin: "mì mì",
      level: "intermediate",
      meaning: "secret",
      meaningKr: "비밀",
      example: "这是一个不可以说的秘密。",
      exampleKr: "이것은 말하면 안 되는 비밀이다."
    }
  ],
  23: [
    {
      word: "欲望",
      pinyin: "yù wàng",
      level: "advanced",
      meaning: "desire; lust",
      meaningKr: "욕망",
      example: "人的欲望是无穷无尽的。",
      exampleKr: "사람의 욕망은 끝이 없다."
    }
  ],
  24: [
    {
      word: "馥郁",
      pinyin: "fù yù",
      level: "advanced",
      meaning: "strongly fragrant",
      meaningKr: "향기가 짙다",
      example: "花园里充满了馥郁的花香。",
      exampleKr: "정원 안에 그윽한 꽃향기가 가득하다."
    },
    {
      word: "紧张",
      pinyin: "jǐn zhāng",
      level: "basic",
      meaning: "nervous; tense",
      meaningKr: "긴장하다",
      example: "考试前我感到很紧张。",
      exampleKr: "시험 전에 나는 매우 긴장된다."
    }
  ],
  25: [
    {
      word: "假象",
      pinyin: "jiǎ xiàng",
      level: "advanced",
      meaning: "false appearance; illusion",
      meaningKr: "가상, 허상",
      example: "不要被事物的假象所迷惑。",
      exampleKr: "사물의 허상에 현혹되지 마라."
    }
  ],
  26: [
    {
      word: "包容",
      pinyin: "bāo róng",
      level: "advanced",
      meaning: "to tolerate; inclusive",
      meaningKr: "포용하다",
      example: "我们要学会包容不同的文化。",
      exampleKr: "우리는 서로 다른 문화를 포용하는 법을 배워야 한다."
    },
    {
      word: "清泉",
      pinyin: "qīng quán",
      level: "advanced",
      meaning: "clear spring",
      meaningKr: "맑은 샘",
      example: "清泉从山上流了下来。",
      exampleKr: "맑은 샘물이 산에서 흘러내려 왔다."
    }
  ],
  27: [],
  28: [
    {
      word: "迟疑",
      pinyin: "chí yí",
      level: "advanced",
      meaning: "to hesitate",
      meaningKr: "주저하다, 망설이다",
      example: "他迟疑了一下才开口说话。",
      exampleKr: "그는 잠시 망설이다가 말을 꺼냈다."
    }
  ],
  29: [
    {
      word: "孤岛",
      pinyin: "gū dǎo",
      level: "advanced",
      meaning: "isolated island",
      meaningKr: "외딴섬",
      example: "他在大海中发现了一个孤岛。",
      exampleKr: "그는 바다 한가운데서 외딴섬 하나를 발견했다."
    }
  ],
  30: [
    {
      word: "眼泪",
      pinyin: "yǎn lèi",
      level: "intermediate",
      meaning: "tears",
      meaningKr: "눈물",
      example: "眼泪止不住地流了下来。",
      exampleKr: "눈물이 멈추지 않고 흘러내렸다."
    },
    {
      word: "失效",
      pinyin: "shī xiào",
      level: "advanced",
      meaning: "to lose efficacy; invalid",
      meaningKr: "효력을 잃다",
      example: "这瓶药水已经失效了。",
      exampleKr: "이 약병의 약은 이미 효능을 잃었다."
    }
  ],
  31: [
    {
      word: "口号",
      pinyin: "kǒu hào",
      level: "intermediate",
      meaning: "slogan",
      meaningKr: "구호",
      example: "大家一起高喊比赛口号。",
      exampleKr: "모두 함께 경기 구호를 외쳤다."
    }
  ],
  32: [
    {
      word: "月亮",
      pinyin: "yuè liang",
      level: "basic",
      meaning: "moon",
      meaningKr: "달",
      example: "今晚的月亮很明亮。",
      exampleKr: "오늘 밤 달이 매우 밝다."
    }
  ],
  33: [
    {
      word: "疯狂",
      pinyin: "fēng kuáng",
      level: "intermediate",
      meaning: "crazy; frantic",
      meaningKr: "미치다, 열광적이다",
      example: "他疯狂地爱上了运动。",
      exampleKr: "그는 운동에 미친 듯이 빠졌다."
    }
  ],
  34: [
    {
      word: "张扬",
      pinyin: "zhāng yáng",
      level: "advanced",
      meaning: "to make public; ostentatious",
      meaningKr: "떠벌리다, 과시하다",
      example: "做人要低调，不要太张扬。",
      exampleKr: "사람은 겸손해야지 너무 잘난 척해서는 안 된다."
    }
  ]
};

