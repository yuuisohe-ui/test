// 平凡之路歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析
export const pingfanVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "徘徊",
      pinyin: "pái huái",
      level: "intermediate",
      meaning: "来回走动，犹豫不前",
      meaningKr: "서성거리다, 망설이다",
      example: "他在门口徘徊了很久。",
      exampleKr: ""
    },
    {
      word: "在路上",
      pinyin: "zài lù shàng",
      level: "basic",
      meaning: "正在路途中；比喻处于前进的过程",
      meaningKr: "길 위에 있다, 여정 중이다",
      example: "我现在在路上，马上到。",
      exampleKr: ""
    }
  ],
  2: [
    {
      word: "要",
      pinyin: "yào",
      level: "basic",
      meaning: "表示意愿、将要或需要",
      meaningKr: "~하려고 하다, ~할 것이다, 필요하다",
      example: "你要去哪里？",
      exampleKr: ""
    }
  ],
  3: [
    {
      word: "易碎",
      pinyin: "yì suì",
      level: "intermediate",
      meaning: "容易破碎",
      meaningKr: "깨지기 쉬운",
      example: "这个杯子很易碎，小心拿。",
      exampleKr: ""
    },
    {
      word: "骄傲",
      pinyin: "jiāo ào",
      level: "basic",
      meaning: "自豪或自以为是",
      meaningKr: "자랑스럽다/교만하다",
      example: "他为自己的努力感到骄傲。",
      exampleKr: ""
    }
  ],
  4: [
    {
      word: "曾",
      pinyin: "céng",
      level: "basic",
      meaning: "表示过去发生过",
      meaningKr: "~한 적이 있다",
      example: "我曾去过北京。",
      exampleKr: ""
    },
    {
      word: "模样",
      pinyin: "mú yàng",
      level: "intermediate",
      meaning: "样子，外貌或状态",
      meaningKr: "모습, 모양",
      example: "他还是以前的模样。",
      exampleKr: ""
    }
  ],
  5: [
    {
      word: "沸腾",
      pinyin: "fèi téng",
      level: "intermediate",
      meaning: "液体翻滚；比喻情绪、气氛非常激动热烈",
      meaningKr: "끓어오르다; (비유) 들끓다",
      example: "听到消息后，人群沸腾了。",
      exampleKr: ""
    },
    {
      word: "不安",
      pinyin: "bù ān",
      level: "intermediate",
      meaning: "心里不踏实，担心",
      meaningKr: "불안하다",
      example: "他一直感到不安。",
      exampleKr: ""
    }
  ],
  6: [
    {
      word: "去哪",
      pinyin: "qù nǎ",
      level: "basic",
      meaning: "去哪里（口语省略）",
      meaningKr: "어디 가(요)?",
      example: "你今天去哪？",
      exampleKr: ""
    }
  ],
  7: [
    {
      word: "谜一样的",
      pinyin: "mí yí yàng de",
      level: "advanced",
      meaning: "像谜一样，难以理解、难以看透",
      meaningKr: "수수께끼 같은, 알 수 없는",
      example: "他总带着谜一样的微笑。",
      exampleKr: ""
    },
    {
      word: "沉默",
      pinyin: "chén mò",
      level: "intermediate",
      meaning: "不说话；保持安静",
      meaningKr: "침묵하다",
      example: "他沉默了很久才开口。",
      exampleKr: ""
    }
  ],
  8: [
    {
      word: "故事",
      pinyin: "gù shì",
      level: "basic",
      meaning: "事情的经过或叙述",
      meaningKr: "이야기",
      example: "我想听你的故事。",
      exampleKr: ""
    },
    {
      word: "真的",
      pinyin: "zhēn de",
      level: "basic",
      meaning: "确实，确实如此（加强语气）",
      meaningKr: "정말",
      example: "你真的听懂了吗？",
      exampleKr: ""
    }
  ],
  9: [
    {
      word: "曾经",
      pinyin: "céng jīng",
      level: "basic",
      meaning: "以前，过去某个时候",
      meaningKr: "한때, 예전에",
      example: "我曾经也这样想过。",
      exampleKr: ""
    },
    {
      word: "跨过",
      pinyin: "kuà guò",
      level: "intermediate",
      meaning: "跨越并通过",
      meaningKr: "넘어서다, 건너다",
      example: "我们跨过这条河就到了。",
      exampleKr: ""
    },
    {
      word: "山和大海",
      pinyin: "shān hé dà hǎi",
      level: "basic",
      meaning: "山与海；常用来比喻漫长旅程与艰难经历",
      meaningKr: "산과 바다; (비유) 긴 여정과 고난",
      example: "为了梦想，他走过山和大海。",
      exampleKr: ""
    }
  ],
  10: [
    {
      word: "穿过",
      pinyin: "chuān guò",
      level: "basic",
      meaning: "从中间通过",
      meaningKr: "가로지르다, 통과하다",
      example: "我们穿过人群往前走。",
      exampleKr: ""
    },
    {
      word: "人山人海",
      pinyin: "rén shān rén hǎi",
      level: "advanced",
      meaning: "人非常多，像山像海一样",
      meaningKr: "인산인해(사람이 매우 많다)",
      example: "节日的广场上人山人海。",
      exampleKr: ""
    }
  ],
  11: [
    {
      word: "拥有",
      pinyin: "yōng yǒu",
      level: "basic",
      meaning: "具有、占有",
      meaningKr: "가지다, 소유하다",
      example: "他拥有很多朋友。",
      exampleKr: ""
    },
    {
      word: "一切",
      pinyin: "yí qiè",
      level: "basic",
      meaning: "所有的事物",
      meaningKr: "모든 것",
      example: "这改变了一切。",
      exampleKr: ""
    }
  ],
  12: [
    {
      word: "转眼",
      pinyin: "zhuǎn yǎn",
      level: "intermediate",
      meaning: "形容时间很短，很快",
      meaningKr: "눈 깜짝할 사이에",
      example: "转眼一年就过去了。",
      exampleKr: ""
    },
    {
      word: "飘散",
      pinyin: "piāo sàn",
      level: "intermediate",
      meaning: "随风飘动并散开",
      meaningKr: "흩날리다, 흩어지다",
      example: "花香在空气中飘散。",
      exampleKr: ""
    },
    {
      word: "如烟",
      pinyin: "rú yān",
      level: "advanced",
      meaning: "像烟一样；比喻虚无、消散很快",
      meaningKr: "연기처럼; (비유) 덧없다",
      example: "往事如烟，不必再提。",
      exampleKr: ""
    }
  ],
  13: [
    {
      word: "失落",
      pinyin: "shī luò",
      level: "intermediate",
      meaning: "因失去或不如意而难过",
      meaningKr: "상실감, 허탈하다",
      example: "没通过考试，他很失落。",
      exampleKr: ""
    },
    {
      word: "失望",
      pinyin: "shī wàng",
      level: "basic",
      meaning: "希望落空，不满意",
      meaningKr: "실망하다",
      example: "我对结果很失望。",
      exampleKr: ""
    },
    {
      word: "失掉",
      pinyin: "shī diào",
      level: "intermediate",
      meaning: "失去（强调丢失）",
      meaningKr: "잃어버리다",
      example: "他失掉了信心。",
      exampleKr: ""
    },
    {
      word: "方向",
      pinyin: "fāng xiàng",
      level: "basic",
      meaning: "前进的目标或方位",
      meaningKr: "방향",
      example: "我找不到前进的方向。",
      exampleKr: ""
    }
  ],
  14: [
    {
      word: "平凡",
      pinyin: "píng fán",
      level: "intermediate",
      meaning: "普通，不特别",
      meaningKr: "평범하다",
      example: "平凡的生活也很珍贵。",
      exampleKr: ""
    },
    {
      word: "唯一",
      pinyin: "wéi yī",
      level: "intermediate",
      meaning: "只有一个，独一无二",
      meaningKr: "유일한",
      example: "这是唯一的办法。",
      exampleKr: ""
    },
    {
      word: "答案",
      pinyin: "dá àn",
      level: "basic",
      meaning: "问题的结果或回应",
      meaningKr: "답",
      example: "你找到答案了吗？",
      exampleKr: ""
    }
  ],
  15: [
    {
      word: "仍然",
      pinyin: "réng rán",
      level: "intermediate",
      meaning: "还是，依旧",
      meaningKr: "여전히",
      example: "他仍然坚持自己的想法。",
      exampleKr: ""
    },
    {
      word: "幻想",
      pinyin: "huàn xiǎng",
      level: "intermediate",
      meaning: "不切实际的想象",
      meaningKr: "환상, 공상",
      example: "不要活在幻想里。",
      exampleKr: ""
    }
  ],
  16: [
    {
      word: "明天",
      pinyin: "míng tiān",
      level: "basic",
      meaning: "未来的一天；也可指未来",
      meaningKr: "내일; (비유) 미래",
      example: "明天会更好。",
      exampleKr: ""
    }
  ],
  17: [
    {
      word: "更烂",
      pinyin: "gèng làn",
      level: "intermediate",
      meaning: "更糟糕（口语，带强烈情绪）",
      meaningKr: "더 엉망이다, 더 최악이다",
      example: "情况可能会更烂。",
      exampleKr: ""
    }
  ],
  18: [
    {
      word: "对我而言",
      pinyin: "duì wǒ ér yán",
      level: "intermediate",
      meaning: "对我来说",
      meaningKr: "나에게는, 내 입장에서는",
      example: "对我而言，这很重要。",
      exampleKr: ""
    },
    {
      word: "另一天",
      pinyin: "lìng yì tiān",
      level: "basic",
      meaning: "另外的一天；另一日",
      meaningKr: "또 다른 하루",
      example: "明天又是另一天。",
      exampleKr: ""
    }
  ],
  19: [
    {
      word: "毁了",
      pinyin: "huǐ le",
      level: "intermediate",
      meaning: "毁坏；使彻底变糟",
      meaningKr: "망치다, 파괴하다",
      example: "他一时冲动毁了自己的前途。",
      exampleKr: ""
    }
  ],
  20: [
    {
      word: "永远",
      pinyin: "yǒng yuǎn",
      level: "basic",
      meaning: "一直到将来，没有终止",
      meaningKr: "영원히",
      example: "我会永远记得你。",
      exampleKr: ""
    },
    {
      word: "离开",
      pinyin: "lí kāi",
      level: "basic",
      meaning: "从某地走开；离别",
      meaningKr: "떠나다",
      example: "他决定离开这座城市。",
      exampleKr: ""
    }
  ],
  21: [
    {
      word: "堕入",
      pinyin: "duò rù",
      level: "advanced",
      meaning: "跌落到（多指不好的境地）",
      meaningKr: "빠져들다, (나쁜 상태로) 떨어지다",
      example: "他一度堕入绝望。",
      exampleKr: ""
    },
    {
      word: "无边",
      pinyin: "wú biān",
      level: "advanced",
      meaning: "没有边际，极其广阔（多为文学表达）",
      meaningKr: "끝이 없는, 무한한",
      example: "眼前是一片无边的海。",
      exampleKr: ""
    },
    {
      word: "黑暗",
      pinyin: "hēi àn",
      level: "basic",
      meaning: "没有光；也比喻痛苦、绝望的状态",
      meaningKr: "어둠; (비유) 암흑",
      example: "黑暗中他看不清路。",
      exampleKr: ""
    }
  ],
  22: [
    {
      word: "挣扎",
      pinyin: "zhēng zhá",
      level: "intermediate",
      meaning: "用力摆脱困难；努力支撑",
      meaningKr: "버둥거리다, 발버둥치다",
      example: "他在困境中挣扎。",
      exampleKr: ""
    },
    {
      word: "无法自拔",
      pinyin: "wú fǎ zì bá",
      level: "advanced",
      meaning: "自己无法摆脱（多指陷入某种状态或情绪）",
      meaningKr: "스스로 빠져나올 수 없다",
      example: "他陷入悔恨，无法自拔。",
      exampleKr: ""
    }
  ],
  23: [
    {
      word: "像",
      pinyin: "xiàng",
      level: "basic",
      meaning: "相似；像……一样",
      meaningKr: "~처럼, 닮다",
      example: "他像父亲一样坚强。",
      exampleKr: ""
    },
    {
      word: "野草野花",
      pinyin: "yě cǎo yě huā",
      level: "intermediate",
      meaning: "野生的草和花；比喻普通、顽强的生命",
      meaningKr: "들풀과 들꽃; (비유) 평범하지만 강인함",
      example: "路边的野草野花也很美。",
      exampleKr: ""
    }
  ],
  24: [
    {
      word: "绝望",
      pinyin: "jué wàng",
      level: "intermediate",
      meaning: "完全没有希望",
      meaningKr: "절망하다",
      example: "他对未来感到绝望。",
      exampleKr: ""
    },
    {
      word: "渴望",
      pinyin: "kě wàng",
      level: "intermediate",
      meaning: "非常希望得到",
      meaningKr: "갈망하다",
      example: "我渴望改变。",
      exampleKr: ""
    }
  ],
  25: [
    {
      word: "平凡",
      pinyin: "píng fán",
      level: "intermediate",
      meaning: "普通，不特别",
      meaningKr: "평범하다",
      example: "平凡并不等于平庸。",
      exampleKr: ""
    }
  ],
  26: [
    {
      word: "向前走",
      pinyin: "xiàng qián zǒu",
      level: "basic",
      meaning: "往前走；继续前进",
      meaningKr: "앞으로 가다",
      example: "别停下，向前走。",
      exampleKr: ""
    },
    {
      word: "就这么",
      pinyin: "jiù zhè me",
      level: "basic",
      meaning: "就这样；就按这种方式",
      meaningKr: "그냥 이렇게, 이대로",
      example: "就这么决定吧。",
      exampleKr: ""
    }
  ],
  27: [
    {
      word: "就算",
      pinyin: "jiù suàn",
      level: "intermediate",
      meaning: "即使，就算是",
      meaningKr: "설령 ~라도",
      example: "就算下雨，我也要去。",
      exampleKr: ""
    },
    {
      word: "被",
      pinyin: "bèi",
      level: "intermediate",
      meaning: "表示被动（受事者）",
      meaningKr: "피동을 나타내는 '被'",
      example: "他被老师批评了。",
      exampleKr: ""
    }
  ],
  28: [
    {
      word: "向前走",
      pinyin: "xiàng qián zǒu",
      level: "basic",
      meaning: "往前走；继续前进",
      meaningKr: "앞으로 가다",
      example: "我们向前走，不回头。",
      exampleKr: ""
    }
  ],
  29: [
    {
      word: "夺走",
      pinyin: "duó zǒu",
      level: "intermediate",
      meaning: "强行拿走；使失去",
      meaningKr: "빼앗아 가다",
      example: "战争夺走了他的家人。",
      exampleKr: ""
    }
  ],
  30: [
    {
      word: "向前走",
      pinyin: "xiàng qián zǒu",
      level: "basic",
      meaning: "往前走；继续前进",
      meaningKr: "앞으로 가다",
      example: "不管怎样，都要向前走。",
      exampleKr: ""
    }
  ],
  31: [
    {
      word: "错过",
      pinyin: "cuò guò",
      level: "basic",
      meaning: "因时间等原因没赶上；失去机会",
      meaningKr: "놓치다",
      example: "我错过了最后一班车。",
      exampleKr: ""
    }
  ],
  32: [
    {
      word: "向前走",
      pinyin: "xiàng qián zǒu",
      level: "basic",
      meaning: "往前走；继续前进",
      meaningKr: "앞으로 가다",
      example: "累了也要向前走。",
      exampleKr: ""
    }
  ],
  33: [],
  34: [
    {
      word: "跨过",
      pinyin: "kuà guò",
      level: "intermediate",
      meaning: "跨越并通过",
      meaningKr: "넘어서다, 건너다",
      example: "跨过难关，才能成长。",
      exampleKr: ""
    },
    {
      word: "山和大海",
      pinyin: "shān hé dà hǎi",
      level: "basic",
      meaning: "山与海；常用来比喻漫长旅程与艰难经历",
      meaningKr: "산과 바다; (비유) 긴 여정과 고난",
      example: "他走过山和大海来到这里。",
      exampleKr: ""
    }
  ],
  35: [
    {
      word: "穿过",
      pinyin: "chuān guò",
      level: "basic",
      meaning: "从中间通过",
      meaningKr: "가로지르다, 통과하다",
      example: "穿过这条街就是地铁站。",
      exampleKr: ""
    },
    {
      word: "人山人海",
      pinyin: "rén shān rén hǎi",
      level: "advanced",
      meaning: "人非常多，像山像海一样",
      meaningKr: "인산인해(사람이 매우 많다)",
      example: "现场人山人海，挤不进去。",
      exampleKr: ""
    }
  ],
  36: [
    {
      word: "拥有",
      pinyin: "yōng yǒu",
      level: "basic",
      meaning: "具有、占有",
      meaningKr: "가지다, 소유하다",
      example: "每个人都想拥有幸福。",
      exampleKr: ""
    },
    {
      word: "一切",
      pinyin: "yí qiè",
      level: "basic",
      meaning: "所有的事物",
      meaningKr: "모든 것",
      example: "他愿意为此付出一切。",
      exampleKr: ""
    }
  ],
  37: [
    {
      word: "转眼",
      pinyin: "zhuǎn yǎn",
      level: "intermediate",
      meaning: "形容时间很短，很快",
      meaningKr: "눈 깜짝할 사이에",
      example: "转眼我们就毕业了。",
      exampleKr: ""
    },
    {
      word: "飘散如烟",
      pinyin: "piāo sàn rú yān",
      level: "advanced",
      meaning: "像烟一样飘散消失；比喻转瞬即逝",
      meaningKr: "연기처럼 흩어져 사라지다; 덧없다",
      example: "往事飘散如烟，只剩回忆。",
      exampleKr: ""
    }
  ],
  38: [
    {
      word: "失落",
      pinyin: "shī luò",
      level: "intermediate",
      meaning: "因失去或不如意而难过",
      meaningKr: "상실감, 허탈하다",
      example: "他心里很失落。",
      exampleKr: ""
    },
    {
      word: "失望",
      pinyin: "shī wàng",
      level: "basic",
      meaning: "希望落空，不满意",
      meaningKr: "실망하다",
      example: "别对自己失望。",
      exampleKr: ""
    },
    {
      word: "失掉",
      pinyin: "shī diào",
      level: "intermediate",
      meaning: "失去（强调丢失）",
      meaningKr: "잃어버리다",
      example: "他失掉了方向感。",
      exampleKr: ""
    },
    {
      word: "方向",
      pinyin: "fāng xiàng",
      level: "basic",
      meaning: "前进的目标或方位",
      meaningKr: "방향",
      example: "给我一个方向。",
      exampleKr: ""
    }
  ],
  39: [
    {
      word: "平凡",
      pinyin: "píng fán",
      level: "intermediate",
      meaning: "普通，不特别",
      meaningKr: "평범하다",
      example: "平凡的人也能有伟大的一天。",
      exampleKr: ""
    },
    {
      word: "唯一的答案",
      pinyin: "wéi yī de dá àn",
      level: "intermediate",
      meaning: "唯一正确或唯一可行的回应",
      meaningKr: "유일한 답",
      example: "努力也许是唯一的答案。",
      exampleKr: ""
    }
  ],
  40: [
    {
      word: "毁了",
      pinyin: "huǐ le",
      level: "intermediate",
      meaning: "毁坏；使彻底变糟",
      meaningKr: "망치다, 파괴하다",
      example: "别让情绪毁了你的一天。",
      exampleKr: ""
    }
  ],
  41: [
    {
      word: "永远",
      pinyin: "yǒng yuǎn",
      level: "basic",
      meaning: "一直到将来，没有终止",
      meaningKr: "영원히",
      example: "我们永远是朋友。",
      exampleKr: ""
    },
    {
      word: "离开",
      pinyin: "lí kāi",
      level: "basic",
      meaning: "从某地走开；离别",
      meaningKr: "떠나다",
      example: "他离开后我很想他。",
      exampleKr: ""
    }
  ],
  42: [
    {
      word: "堕入",
      pinyin: "duò rù",
      level: "advanced",
      meaning: "跌落到（多指不好的境地）",
      meaningKr: "빠져들다, (나쁜 상태로) 떨어지다",
      example: "他差点堕入深渊。",
      exampleKr: ""
    },
    {
      word: "无边黑暗",
      pinyin: "wú biān hēi àn",
      level: "advanced",
      meaning: "没有尽头的黑暗；比喻极度痛苦或绝望",
      meaningKr: "끝없는 어둠; (비유) 극심한 절망",
      example: "他感觉自己走进了无边黑暗。",
      exampleKr: ""
    }
  ],
  43: [
    {
      word: "挣扎",
      pinyin: "zhēng zhá",
      level: "intermediate",
      meaning: "用力摆脱困难；努力支撑",
      meaningKr: "버둥거리다, 발버둥치다",
      example: "她一直在挣扎着坚持。",
      exampleKr: ""
    },
    {
      word: "无法自拔",
      pinyin: "wú fǎ zì bá",
      level: "advanced",
      meaning: "自己无法摆脱（多指陷入某种状态或情绪）",
      meaningKr: "스스로 빠져나올 수 없다",
      example: "他沉迷其中，无法自拔。",
      exampleKr: ""
    }
  ],
  44: [
    {
      word: "野草野花",
      pinyin: "yě cǎo yě huā",
      level: "intermediate",
      meaning: "野生的草和花；比喻普通、顽强的生命",
      meaningKr: "들풀과 들꽃; (비유) 평범하지만 강인함",
      example: "他像野草野花一样坚韧。",
      exampleKr: ""
    }
  ],
  45: [
    {
      word: "绝望",
      pinyin: "jué wàng",
      level: "intermediate",
      meaning: "完全没有希望",
      meaningKr: "절망하다",
      example: "不要在绝望中放弃。",
      exampleKr: ""
    },
    {
      word: "渴望",
      pinyin: "kě wàng",
      level: "intermediate",
      meaning: "非常希望得到",
      meaningKr: "갈망하다",
      example: "他渴望被理解。",
      exampleKr: ""
    }
  ],
  46: [
    {
      word: "也哭也笑",
      pinyin: "yě kū yě xiào",
      level: "basic",
      meaning: "又哭又笑；形容情绪复杂",
      meaningKr: "울기도 하고 웃기도 하다",
      example: "她听完故事后也哭也笑。",
      exampleKr: ""
    },
    {
      word: "平凡",
      pinyin: "píng fán",
      level: "intermediate",
      meaning: "普通，不特别",
      meaningKr: "평범하다",
      example: "平凡的日子也值得珍惜。",
      exampleKr: ""
    }
  ],
  47: [
    {
      word: "跨过",
      pinyin: "kuà guò",
      level: "intermediate",
      meaning: "跨越并通过",
      meaningKr: "넘어서다, 건너다",
      example: "跨过这段低谷就好了。",
      exampleKr: ""
    }
  ],
  48: [
    {
      word: "穿过",
      pinyin: "chuān guò",
      level: "basic",
      meaning: "从中间通过",
      meaningKr: "가로지르다, 통과하다",
      example: "穿过隧道就能看见海。",
      exampleKr: ""
    }
  ],
  49: [
    {
      word: "问遍",
      pinyin: "wèn biàn",
      level: "advanced",
      meaning: "到处询问；把能问的人都问过",
      meaningKr: "두루 물어보다, 다 물어보다",
      example: "我问遍了朋友，还是没人知道。",
      exampleKr: ""
    },
    {
      word: "整个世界",
      pinyin: "zhěng gè shì jiè",
      level: "basic",
      meaning: "全世界；比喻范围极大",
      meaningKr: "전 세계",
      example: "他想去看看整个世界。",
      exampleKr: ""
    }
  ],
  50: [
    {
      word: "从来",
      pinyin: "cóng lái",
      level: "intermediate",
      meaning: "一向；常与\"不/没\"搭配",
      meaningKr: "여태껏, 한 번도",
      example: "我从来没这样想过。",
      exampleKr: ""
    },
    {
      word: "得到",
      pinyin: "dé dào",
      level: "basic",
      meaning: "获得",
      meaningKr: "얻다",
      example: "他得到了大家的支持。",
      exampleKr: ""
    },
    {
      word: "答案",
      pinyin: "dá àn",
      level: "basic",
      meaning: "问题的结果或回应",
      meaningKr: "답",
      example: "这个问题没有标准答案。",
      exampleKr: ""
    }
  ],
  51: [
    {
      word: "不过",
      pinyin: "bú guò",
      level: "basic",
      meaning: "只是；不过如此（转折或限制）",
      meaningKr: "그저, 다만",
      example: "我不过是说说而已。",
      exampleKr: ""
    },
    {
      word: "冥冥中",
      pinyin: "míng míng zhōng",
      level: "advanced",
      meaning: "暗中、似乎有某种力量安排（文学表达）",
      meaningKr: "알 수 없는 힘에 의해, 운명처럼",
      example: "冥冥中，他觉得一切早有安排。",
      exampleKr: ""
    },
    {
      word: "唯一要走的路",
      pinyin: "wéi yī yào zǒu de lù",
      level: "intermediate",
      meaning: "必须走、只能选择的道路（比喻人生选择）",
      meaningKr: "유일하게 가야 하는 길",
      example: "这条路也许是我唯一要走的路。",
      exampleKr: ""
    }
  ],
  52: [
    {
      word: "无言",
      pinyin: "wú yán",
      level: "advanced",
      meaning: "不说话；也指无法用语言表达（文学）",
      meaningKr: "말이 없다, 무언",
      example: "时间无言，却带走了很多。",
      exampleKr: ""
    }
  ],
  53: [
    {
      word: "如此这般",
      pinyin: "rú cǐ zhè bān",
      level: "advanced",
      meaning: "就这样；这样那样（偏书面/文学）",
      meaningKr: "이러저러하게, 그렇게",
      example: "如此这般，事情就结束了。",
      exampleKr: ""
    }
  ],
  54: [
    {
      word: "已在眼前",
      pinyin: "yǐ zài yǎn qián",
      level: "intermediate",
      meaning: "已经来到面前，指很快就会发生",
      meaningKr: "눈앞에 와 있다, 코앞이다",
      example: "机会已在眼前，别错过。",
      exampleKr: ""
    }
  ],
  55: [
    {
      word: "依然",
      pinyin: "yī rán",
      level: "intermediate",
      meaning: "仍旧，还是",
      meaningKr: "여전히",
      example: "多年过去，风景依然很美。",
      exampleKr: ""
    }
  ],
  56: [
    {
      word: "讲到",
      pinyin: "jiǎng dào",
      level: "basic",
      meaning: "说到；讲述到某个部分",
      meaningKr: "~까지 말하다/이르다",
      example: "你的故事讲到哪了？",
      exampleKr: ""
    }
  ]
};

// 获取指定句子的词汇
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return pingfanVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(pingfanVocabAnalysis).flat();
  // 去重（按word）
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}

