// 给我一首歌的时间歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析
export const geiwoyishougedeshijianVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "雨",
      pinyin: "yǔ",
      level: "basic",
      meaning: "雨水",
      meaningKr: "비",
      example: "外面正在下雨。",
      exampleKr: ""
    },
    {
      word: "仔细",
      pinyin: "zǐ xì",
      level: "intermediate",
      meaning: "认真，小心",
      meaningKr: "자세하다, 조심스럽다",
      example: "请仔细检查作业。",
      exampleKr: ""
    }
  ],
  2: [
    {
      word: "明白",
      pinyin: "míng bai",
      level: "basic",
      meaning: "理解，懂",
      meaningKr: "알다, 이해하다",
      example: "我不明白你的意思。",
      exampleKr: ""
    },
    {
      word: "牵手",
      pinyin: "qiān shǒu",
      level: "intermediate",
      meaning: "手拉手",
      meaningKr: "손을 잡다",
      example: "他们牵手走在街上。",
      exampleKr: ""
    }
  ],
  3: [
    {
      word: "沉默",
      pinyin: "chén mò",
      level: "advanced",
      meaning: "不说话",
      meaningKr: "침묵하다",
      example: "他陷入了长时间的沉默。",
      exampleKr: ""
    },
    {
      word: "冲动",
      pinyin: "chōng dòng",
      level: "advanced",
      meaning: "情感爆发，不冷静",
      meaningKr: "충동적이다",
      example: "别冲动，先冷静一下。",
      exampleKr: ""
    }
  ],
  4: [
    {
      word: "害怕",
      pinyin: "hài pà",
      level: "basic",
      meaning: "感到恐惧",
      meaningKr: "두려워하다",
      example: "我害怕一个人走夜路。",
      exampleKr: ""
    },
    {
      word: "错过",
      pinyin: "cuò guò",
      level: "intermediate",
      meaning: "没赶上，失去机会",
      meaningKr: "놓치다",
      example: "我不想错过这场电影。",
      exampleKr: ""
    }
  ],
  5: [
    {
      word: "梦",
      pinyin: "mèng",
      level: "basic",
      meaning: "梦境，理想",
      meaningKr: "꿈",
      example: "我昨晚做了一个好梦。",
      exampleKr: ""
    },
    {
      word: "分开",
      pinyin: "fēn kāi",
      level: "intermediate",
      meaning: "离别，别离",
      meaningKr: "헤어지다, 분리하다",
      example: "他们最终还是分开了。",
      exampleKr: ""
    }
  ],
  6: [
    {
      word: "伤害",
      pinyin: "shāng hài",
      level: "intermediate",
      meaning: "使受损害",
      meaningKr: "상처를 주다, 해치다",
      example: "不要伤害别人的感情。",
      exampleKr: ""
    }
  ],
  7: [
    {
      word: "承担",
      pinyin: "chéng dān",
      level: "advanced",
      meaning: "担负责任、后果等",
      meaningKr: "담당하다, 책임지다",
      example: "我们要勇于承担后果。",
      exampleKr: ""
    },
    {
      word: "迷路",
      pinyin: "mí lù",
      level: "basic",
      meaning: "迷失方向",
      meaningKr: "길을 잃다",
      example: "他在森林里迷路了。",
      exampleKr: ""
    }
  ],
  8: [
    {
      word: "出口",
      pinyin: "chū kǒu",
      level: "intermediate",
      meaning: "出去的通道",
      meaningKr: "출구",
      example: "紧急出口在走廊尽头。",
      exampleKr: ""
    }
  ],
  9: [],
  10: [
    {
      word: "时间",
      pinyin: "shí jiān",
      level: "basic",
      meaning: "一段时刻",
      meaningKr: "시간",
      example: "你有时间帮我吗？",
      exampleKr: ""
    }
  ],
  11: [
    {
      word: "拥抱",
      pinyin: "yōng bào",
      level: "intermediate",
      meaning: "搂抱",
      meaningKr: "포옹하다",
      example: "他们久别重逢，紧紧拥抱。",
      exampleKr: ""
    },
    {
      word: "永远",
      pinyin: "yǒng yuǎn",
      level: "basic",
      meaning: "时间长久",
      meaningKr: "영원히",
      example: "我会永远支持你的。",
      exampleKr: ""
    }
  ],
  12: [
    {
      word: "失眠",
      pinyin: "shī mián",
      level: "advanced",
      meaning: "睡不着觉",
      meaningKr: "불면증, 잠을 못 자다",
      example: "她最近 because of pressure 而失眠。",
      exampleKr: ""
    }
  ],
  13: [
    {
      word: "忘记",
      pinyin: "wàng jì",
      level: "basic",
      meaning: "不记得",
      meaningKr: "잊다",
      example: "别忘记带雨伞。",
      exampleKr: ""
    },
    {
      word: "失忆",
      pinyin: "shī yì",
      level: "advanced",
      meaning: "丧失记忆",
      meaningKr: "기억 상실",
      example: "他在车祸后失忆了。",
      exampleKr: ""
    }
  ],
  14: [
    {
      word: "时间",
      pinyin: "shí jiān",
      level: "basic",
      meaning: "一段时刻",
      meaningKr: "시간",
      example: "时间过得真快。",
      exampleKr: ""
    }
  ],
  15: [
    {
      word: "故事",
      pinyin: "gù shi",
      level: "basic",
      meaning: "叙述的事情",
      meaningKr: "이야기",
      example: "奶奶给我讲了一个故事。",
      exampleKr: ""
    },
    {
      word: "结尾",
      pinyin: "jié wěi",
      level: "intermediate",
      meaning: "最后部分",
      meaningKr: "결말",
      example: "这个故事的结尾很感人。",
      exampleKr: ""
    }
  ],
  16: [
    {
      word: "眼泪",
      pinyin: "yǎn lèi",
      level: "intermediate",
      meaning: "泪水",
      meaningKr: "눈물",
      example: "她眼里含着眼泪。",
      exampleKr: ""
    }
  ],
  17: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为的精神",
      meaningKr: "용기",
      example: "我有勇气面对困难。",
      exampleKr: ""
    }
  ],
  18: [],
  19: [
    {
      word: "天空",
      pinyin: "tiān kōng",
      level: "basic",
      meaning: "地面以上的高空",
      meaningKr: "하늘",
      example: "蓝蓝的天空上没有云。",
      exampleKr: ""
    }
  ],
  20: [
    {
      word: "此刻",
      pinyin: "cǐ kè",
      level: "intermediate",
      meaning: "这个时候",
      meaningKr: "이 순간, 지금",
      example: "此刻我感到很幸福。",
      exampleKr: ""
    }
  ],
  21: [
    {
      word: "后悔",
      pinyin: "hòu huǐ",
      level: "intermediate",
      meaning: "事后懊悔",
      meaningKr: "후회하다",
      example: "我后悔没听你的建议。",
      exampleKr: ""
    }
  ],
  22: [
    {
      word: "错误",
      pinyin: "cuò wù",
      level: "intermediate",
      meaning: "不正确的行动或想法",
      meaningKr: "실수, 오류",
      example: "每个人都会犯错误。",
      exampleKr: ""
    }
  ],
  23: [
    {
      word: "痛",
      pinyin: "tòng",
      level: "basic",
      meaning: "肉体或精神的痛苦",
      meaningKr: "아프다, 통증",
      example: "我的头很痛。",
      exampleKr: ""
    }
  ],
  24: [
    {
      word: "完成",
      pinyin: "wán chéng",
      level: "basic",
      meaning: "做成某事",
      meaningKr: "완성하다, 다 하다",
      example: "我已经完成了任务。",
      exampleKr: ""
    }
  ],
  25: [
    {
      word: "后果",
      pinyin: "hòu guǒ",
      level: "intermediate",
      meaning: "最后的结果（多指坏的）",
      meaningKr: "결과, 후과",
      example: "你要为自己的行为承担后果。",
      exampleKr: ""
    }
  ],
  26: [
    {
      word: "爱",
      pinyin: "ài",
      level: "basic",
      meaning: "喜爱，亲爱",
      meaningKr: "사랑",
      example: "父母的爱是无私的。",
      exampleKr: ""
    }
  ],
  27: [
    {
      word: "一首歌",
      pinyin: "yì shǒu gē",
      level: "basic",
      meaning: "一首乐曲",
      meaningKr: "노래 한 곡",
      example: "他唱了一首歌。",
      exampleKr: ""
    }
  ],
  28: [
    {
      word: "紧紧",
      pinyin: "jǐn jǐn",
      level: "intermediate",
      meaning: "牢固地",
      meaningKr: "꼭, 단단히",
      example: "她紧紧握着我的手。",
      exampleKr: ""
    }
  ],
  29: [
    {
      word: "怀里",
      pinyin: "huái lǐ",
      level: "intermediate",
      meaning: "怀抱中",
      meaningKr: "품속",
      example: "孩子在母亲怀里睡着了。",
      exampleKr: ""
    }
  ],
  30: [
    {
      word: "失去",
      pinyin: "shī qù",
      level: "intermediate",
      meaning: "丢掉，不复拥有",
      meaningKr: "잃다",
      example: "他失去了这份工作。",
      exampleKr: ""
    }
  ],
  31: [
    {
      word: "给",
      pinyin: "gěi",
      level: "basic",
      meaning: "交付，让与",
      meaningKr: "주다",
      example: "请给我一杯水。",
      exampleKr: ""
    }
  ],
  32: [
    {
      word: "再见",
      pinyin: "zài jiàn",
      level: "basic",
      meaning: "道别",
      meaningKr: "안녕, 다시 만나다",
      example: "我和朋友说了再见。",
      exampleKr: ""
    }
  ],
  33: [
    {
      word: "送",
      pinyin: "sòng",
      level: "basic",
      meaning: "赠送，陪伴",
      meaningKr: "보내다, 선물하다",
      example: "他送我回家。",
      exampleKr: ""
    }
  ],
  34: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "敢作敢为的气魄",
      meaningKr: "용기",
      example: "生活需要勇气。",
      exampleKr: ""
    }
  ],
  35: [
    {
      word: "应该",
      pinyin: "yīng gāi",
      level: "basic",
      meaning: "理所当然",
      meaningKr: "해야 한다",
      example: "你应该早点睡觉。",
      exampleKr: ""
    }
  ],
  36: [
    {
      word: "爱",
      pinyin: "ài",
      level: "basic",
      meaning: "对人或事有深厚感情",
      meaningKr: "사랑하다",
      example: "我爱我的家乡。",
      exampleKr: ""
    }
  ],
  37: [
    {
      word: "证明",
      pinyin: "zhèng míng",
      level: "intermediate",
      meaning: "用事实说明",
      meaningKr: "증명하다",
      example: "事实证明他是对的。",
      exampleKr: ""
    },
    {
      word: "力量",
      pinyin: "lì liàng",
      level: "intermediate",
      meaning: "力气，能力",
      meaningKr: "힘",
      example: "知识就是力量。",
      exampleKr: ""
    }
  ],
  38: [
    {
      word: "放弃",
      pinyin: "fàng qì",
      level: "intermediate",
      meaning: "丢掉，不坚持",
      meaningKr: "포기하다",
      example: "别轻易放弃你的梦想。",
      exampleKr: ""
    }
  ],
  39: [],
  40: [
    {
      word: "记忆",
      pinyin: "jì yì",
      level: "intermediate",
      meaning: "记住的事情，回想",
      meaningKr: "기억",
      example: "童年的记忆很模糊。",
      exampleKr: ""
    }
  ],
  41: [],
  42: [
    {
      word: "时间",
      pinyin: "shí jiān",
      level: "basic",
      meaning: "时刻，光阴",
      meaningKr: "시간",
      example: "请珍惜每一秒时间。",
      exampleKr: ""
    }
  ],
  43: [
    {
      word: "拥抱",
      pinyin: "yōng bào",
      level: "intermediate",
      meaning: "抱着对方",
      meaningKr: "포옹",
      example: "一个拥抱胜过千言万语。",
      exampleKr: ""
    }
  ],
  44: [
    {
      word: "害怕",
      pinyin: "hài pà",
      level: "basic",
      meaning: "畏惧",
      meaningKr: "두렵다",
      example: "别害怕，我在这里。",
      exampleKr: ""
    }
  ],
  45: [
    {
      word: "忘记",
      pinyin: "wàng jì",
      level: "basic",
      meaning: "不记得",
      meaningKr: "잊어버리다",
      example: "我忘记了他的名字。",
      exampleKr: ""
    }
  ],
  46: [
    {
      word: "时间",
      pinyin: "shí jiān",
      level: "basic",
      meaning: "时长",
      meaningKr: "시간",
      example: "学习需要投入大量时间。",
      exampleKr: ""
    }
  ],
  47: [],
  48: [
    {
      word: "故事",
      pinyin: "gù shi",
      level: "basic",
      meaning: "文学作品的一种",
      meaningKr: "이야기",
      example: "这是一个真实的故事。",
      exampleKr: ""
    }
  ],
  49: [
    {
      word: "眼泪",
      pinyin: "yǎn lèi",
      level: "intermediate",
      meaning: "泪",
      meaningKr: "눈물",
      example: "他的眼里闪着眼泪。",
      exampleKr: ""
    }
  ],
  50: [
    {
      word: "勇气",
      pinyin: "yǒng qì",
      level: "intermediate",
      meaning: "气魄",
      meaningKr: "용기",
      example: "要有勇气面对失败。",
      exampleKr: ""
    }
  ],
  51: [
    {
      word: "说",
      pinyin: "shuō",
      level: "basic",
      meaning: "讲话",
      meaningKr: "말하다",
      example: "你想说什么？",
      exampleKr: ""
    }
  ],
  52: [
    {
      word: "这个时候",
      pinyin: "zhè ge shí hòu",
      level: "basic",
      meaning: "此刻",
      meaningKr: "이때, 지금",
      example: "这个时候他不应该在这儿。",
      exampleKr: ""
    }
  ],
  53: [
    {
      word: "证明",
      pinyin: "zhèng míng",
      level: "intermediate",
      meaning: "证实",
      meaningKr: "증명하다",
      example: "你能证明你没说谎吗？",
      exampleKr: ""
    }
  ],
  54: [
    {
      word: "放弃",
      pinyin: "fàng qì",
      level: "intermediate",
      meaning: "半途而废",
      meaningKr: "포기하다",
      example: "遇到困难不要随便放弃。",
      exampleKr: ""
    }
  ],
  55: [
    {
      word: "应该",
      pinyin: "yīng gāi",
      level: "basic",
      meaning: "应当",
      meaningKr: "~해야 한다",
      example: "你应该遵守规则。",
      exampleKr: ""
    }
  ],
  56: [
    {
      word: "爱",
      pinyin: "ài",
      level: "basic",
      meaning: "疼爱，喜欢",
      meaningKr: "사랑",
      example: "爱是相互的。",
      exampleKr: ""
    }
  ],
  57: [
    {
      word: "力量",
      pinyin: "lì liàng",
      level: "intermediate",
      meaning: "力气",
      meaningKr: "힘",
      example: "他已经没有力量站起来了。",
      exampleKr: ""
    }
  ],
  58: [
    {
      word: "记忆",
      pinyin: "jì yì",
      level: "intermediate",
      meaning: "往事的回忆",
      meaningKr: "기억",
      example: "这段记忆永远留在心底。",
      exampleKr: ""
    }
  ]
};

