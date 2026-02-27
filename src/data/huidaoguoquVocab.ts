// 回到过去歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析（跳过特殊标记的句子）
export const huidaoguoquVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "盏",
      pinyin: "zhǎn",
      level: "advanced",
      meaning: "量词，用于灯",
      meaningKr: "개 (등을 세는 단위)",
      example: "桌上放着一盏旧灯。",
      exampleKr: "책상 위에 낡은 등불 하나가 놓여 있다."
    }
  ],
  2: [
    {
      word: "闷不吭声",
      pinyin: "mèn bù kēng shēng",
      level: "advanced",
      meaning: "不说话，沉默不语",
      meaningKr: "아무 말 없이 입을 다물다",
      example: "他整晚都闷不吭声，不知道在想什么。",
      exampleKr: "그는 밤새 아무 말 없이 입을 다물고 있었고, 무엇을 생각하는지 알 수 없었다."
    }
  ],
  3: [
    {
      word: "寂寞",
      pinyin: "jì mò",
      level: "intermediate",
      meaning: "孤单冷清",
      meaningKr: "외롭다",
      example: "一个人在家的时候感到很寂寞。",
      exampleKr: "혼자 집에 있을 때 매우 외로움을 느꼈다."
    },
    {
      word: "分寸",
      pinyin: "fēn cùn",
      level: "advanced",
      meaning: "说话或做事的适当限度",
      meaningKr: "분촌, 일 처리를 하는 데 있어서의 적절한 한도",
      example: "他说话很有分寸。",
      exampleKr: "그는 말을 매우 분별 있게 한다."
    }
  ],
  4: [
    {
      word: "轻重",
      pinyin: "qīng zhòng",
      level: "intermediate",
      meaning: "重量；事情的主次或程度",
      meaningKr: "경중, 가벼움과 무거움",
      example: "这孩子说话没轻没重的。",
      exampleKr: "이 아이는 말을 분별 없이 한다."
    }
  ],
  5: [
    {
      word: "沉默",
      pinyin: "chén mò",
      level: "intermediate",
      meaning: "不说话",
      meaningKr: "침묵하다",
      example: "面对问题，他选择了沉默。",
      exampleKr: "문제에 직면하여 그는 침묵을 선택했다."
    },
    {
      word: "陌生",
      pinyin: "mò shēng",
      level: "intermediate",
      meaning: "不熟悉的",
      meaningKr: "낯설다",
      example: "他在这个陌生的城市迷路了。",
      exampleKr: "그는 이 낯선 도시에서 길을 잃었다."
    }
  ],
  6: [
    {
      word: "凌晨",
      pinyin: "líng chén",
      level: "advanced",
      meaning: "天快亮的时候",
      meaningKr: "새벽",
      example: "他经常工作到凌晨。",
      exampleKr: "그는 자주 새벽까지 일한다."
    },
    {
      word: "黄昏",
      pinyin: "huáng hūn",
      level: "advanced",
      meaning: "日落以后到天黑以前",
      meaningKr: "황혼, 저녁 무렵",
      example: "我们在黄昏的海滩散步。",
      exampleKr: "우리는 황혼의 해변을 산책했다."
    }
  ],
  7: [
    {
      word: "身影",
      pinyin: "shēn yǐng",
      level: "advanced",
      meaning: "身体的影子或轮廓",
      meaningKr: "모습, 뒷모습",
      example: "远处出现了他熟悉的身影。",
      exampleKr: "멀리서 그가 익숙한 모습이 나타났다."
    }
  ],
  8: [
    {
      word: "平衡",
      pinyin: "píng héng",
      level: "advanced",
      meaning: "均衡",
      meaningKr: "균형",
      example: "骑自行车需要保持平衡。",
      exampleKr: "자전거를 타려면 균형을 유지해야 한다."
    },
    {
      word: "下沉",
      pinyin: "xià chén",
      level: "intermediate",
      meaning: "向水下沉没",
      meaningKr: "가라앉다",
      example: "船慢慢向海底下沉。",
      exampleKr: "배가 천천히 바다 밑으로 가라앉는다."
    }
  ],
  9: [
    {
      word: "黑暗",
      pinyin: "hēi àn",
      level: "intermediate",
      meaning: "没有光亮",
      meaningKr: "어둠, 캄캄하다",
      example: "黑暗中我什么也看不见。",
      exampleKr: "어둠 속에서 나는 아무것도 보이지 않았다."
    },
    {
      word: "盘旋",
      pinyin: "pán xuán",
      level: "advanced",
      meaning: "环绕着飞或走",
      meaningKr: "선회하다, 맴돌다",
      example: "雄鹰在空中盘旋。",
      exampleKr: "독수리가 공중에서 선회한다."
    }
  ],
  10: [
    {
      word: "看不见",
      pinyin: "kàn bu jiàn",
      level: "beginner",
      meaning: "无法看见",
      meaningKr: "보이지 않다",
      example: "雾太大，看不见前面的路。",
      exampleKr: "안개가 너무 커서 앞길이 보이지 않는다."
    }
  ],
  11: [
    {
      word: "也许",
      pinyin: "yě xǔ",
      level: "intermediate",
      meaning: "可能，大概",
      meaningKr: "아마도",
      example: "他也许已经回家了。",
      exampleKr: "그는 아마도 이미 집에 돌아갔을 것이다."
    }
  ],
  12: [
    {
      word: "无法",
      pinyin: "wú fǎ",
      level: "intermediate",
      meaning: "没法，没有办法",
      meaningKr: "방법이 없다",
      example: "我无法回答这个问题。",
      exampleKr: "나는 이 문제에 답할 수 없다."
    },
    {
      word: "空间",
      pinyin: "kōng jiān",
      level: "intermediate",
      meaning: "物质存在的一种形式",
      meaningKr: "공간",
      example: "这个房间的空间很大。",
      exampleKr: "이 방의 공간은 매우 크다."
    }
  ],
  13: [
    {
      word: "过去",
      pinyin: "guò qù",
      level: "intermediate",
      meaning: "从前，以往",
      meaningKr: "과거",
      example: "过去的事情就让它过去吧。",
      exampleKr: "과거의 일은 그냥 지나가게 두자."
    }
  ],
  14: [
    {
      word: "试着",
      pinyin: "shì zhe",
      level: "beginner",
      meaning: "尝试",
      meaningKr: "해 보다",
      example: "你可以试着自己做一下。",
      exampleKr: "당신은 직접 해 볼 수 있다."
    },
    {
      word: "怀里",
      pinyin: "huái lǐ",
      level: "beginner",
      meaning: "胸口里面",
      meaningKr: "품속",
      example: "孩子在母亲的怀里睡着了。",
      exampleKr: "아이가 어머니의 품속에서 잠들었다."
    }
  ],
  15: [
    {
      word: "羞怯",
      pinyin: "xiū qiè",
      level: "advanced",
      meaning: "羞涩胆怯",
      meaningKr: "수줍다, 부끄러워하다",
      example: "她露出了羞怯的微笑。",
      exampleKr: "그녀는 수줍은 미소를 지었다."
    },
    {
      word: "稚气",
      pinyin: "zhì qì",
      level: "advanced",
      meaning: "孩子气",
      meaningKr: "어린 티, 유치하다",
      example: "他的脸上还带着几分稚气。",
      exampleKr: "그의 얼굴에는 아직 어린 티가 남아 있다."
    }
  ],
  16: [
    {
      word: "世界",
      pinyin: "shì jiè",
      level: "intermediate",
      meaning: "地球上所有地方",
      meaningKr: "세계",
      example: "我想去环游世界。",
      exampleKr: "나는 세계 일주를 하고 싶다."
    }
  ],
  17: [
    {
      word: "画面",
      pinyin: "huà miàn",
      level: "advanced",
      meaning: "画幅、银幕或屏幕上呈现的形象",
      meaningKr: "화면, 장면",
      example: "电影的画面非常精美。",
      exampleKr: "영화의 화면은 매우 아름답다."
    }
  ],
  18: [
    {
      word: "甜蜜",
      pinyin: "tián mì",
      level: "intermediate",
      meaning: "幸福愉快",
      meaningKr: "달콤하다, 행복하다",
      example: "他们过着甜蜜的生活。",
      exampleKr: "그들은 달콤한 생활을 하고 있다."
    }
  ],
  19: [
    {
      word: "过去",
      pinyin: "guò qù",
      level: "intermediate",
      meaning: "从前",
      meaningKr: "과거",
      example: "过去的事情就让它过去吧。",
      exampleKr: "과거의 일은 그냥 지나가게 두자."
    }
  ],
  20: [
    {
      word: "继续",
      pinyin: "jì xù",
      level: "intermediate",
      meaning: "延续下去",
      meaningKr: "계속하다",
      example: "请继续你的表演。",
      exampleKr: "계속해서 공연해 주세요."
    }
  ],
  21: [
    {
      word: "至少",
      pinyin: "zhì shǎo",
      level: "intermediate",
      meaning: "表示最小的限度",
      meaningKr: "적어도",
      example: "至少你应该跟我打个招呼。",
      exampleKr: "적어도 당신은 나에게 인사를 해야 한다."
    }
  ],
  22: [
    {
      word: "分散",
      pinyin: "fēn sàn",
      level: "intermediate",
      meaning: "散开，不集中",
      meaningKr: "분산시키다",
      example: "别分散我的注意力。",
      exampleKr: "내 주의를 분산시키지 마라."
    }
  ],
  23: [
    {
      word: "这次",
      pinyin: "zhè cì",
      level: "beginner",
      meaning: "这一回",
      meaningKr: "이번",
      example: "这次考试比较简单。",
      exampleKr: "이번 시험은 비교적 간단하다."
    }
  ],
  24: [
    {
      word: "挽留",
      pinyin: "wǎn liú",
      level: "advanced",
      meaning: "留住要离去的人",
      meaningKr: "만류하다, 붙잡다",
      example: "大家极力挽留他再住几天。",
      exampleKr: "모두가 그를 만류하여 며칠 더 머물게 했다."
    },
    {
      word: "来得及",
      pinyin: "lái de jí",
      level: "intermediate",
      meaning: "还有时间",
      meaningKr: "시간이 충분하다, 늦지 않다",
      example: "现在出发还来得及。",
      exampleKr: "지금 출발해도 늦지 않다."
    }
  ],
  25: [
    {
      word: "过去",
      pinyin: "guò qù",
      level: "intermediate",
      meaning: "从前",
      meaningKr: "과거",
      example: "过去的事情就让它过去吧。",
      exampleKr: "과거의 일은 그냥 지나가게 두자."
    }
  ],
  26: [
    {
      word: "思绪",
      pinyin: "sī xù",
      level: "advanced",
      meaning: "思想的条理或情绪",
      meaningKr: "생각의 가닥, 감정",
      example: "他的思绪陷入了混乱。",
      exampleKr: "그의 생각은 혼란에 빠졌다."
    },
    {
      word: "阻挡",
      pinyin: "zǔ dǎng",
      level: "advanced",
      meaning: "拦住，使不能前进",
      meaningKr: "가로막다, 저지하다",
      example: "没有什么能阻挡我们前进的步伐。",
      exampleKr: "우리의 전진을 막을 수 있는 것은 아무것도 없다."
    }
  ],
  27: [
    {
      word: "盲目",
      pinyin: "máng mù",
      level: "advanced",
      meaning: "没有目标、没有主见",
      meaningKr: "맹목적이다",
      example: "我们不能盲目地跟从别人。",
      exampleKr: "우리는 맹목적으로 다른 사람을 따를 수 없다."
    },
    {
      word: "空空荡荡",
      pinyin: "kōng kōng dàng dàng",
      level: "advanced",
      meaning: "空旷，什么都没有",
      meaningKr: "텅 비어 있다",
      example: "屋子里空空荡荡的。",
      exampleKr: "방 안은 텅 비어 있다."
    }
  ],
  28: [
    {
      word: "灰蒙蒙",
      pinyin: "huī mēng mēng",
      level: "advanced",
      meaning: "暗淡，模糊不清",
      meaningKr: "뿌옇다",
      example: "灰蒙蒙的天空好像要下雨了。",
      exampleKr: "뿌연 하늘이 비가 올 것 같다."
    }
  ],
  29: [
    {
      word: "孤单",
      pinyin: "gū dān",
      level: "intermediate",
      meaning: "单身无靠，伶仃",
      meaningKr: "외롭다, 고독하다",
      example: "他一个人生活感到很孤单。",
      exampleKr: "그는 혼자 살아가며 매우 외로움을 느꼈다."
    }
  ],
  30: [
    {
      word: "过去",
      pinyin: "guò qù",
      level: "intermediate",
      meaning: "从前",
      meaningKr: "과거",
      example: "过去的事情就让它过去吧。",
      exampleKr: "과거의 일은 그냥 지나가게 두자."
    }
  ],
  31: [
    {
      word: "怀里",
      pinyin: "huái lǐ",
      level: "beginner",
      meaning: "胸口里面",
      meaningKr: "품속",
      example: "孩子在母亲的怀里睡着了。",
      exampleKr: "아이가 어머니의 품속에서 잠들었다."
    }
  ],
  32: [
    {
      word: "羞怯",
      pinyin: "xiū qiè",
      level: "advanced",
      meaning: "羞涩胆怯",
      meaningKr: "수줍다",
      example: "她露出了羞怯的微笑。",
      exampleKr: "그녀는 수줍은 미소를 지었다."
    }
  ],
  33: [
    {
      word: "世界",
      pinyin: "shì jiè",
      level: "intermediate",
      meaning: "地球上所有地方",
      meaningKr: "세계",
      example: "我想去环游世界。",
      exampleKr: "나는 세계 일주를 하고 싶다."
    }
  ],
  34: [
    {
      word: "画面",
      pinyin: "huà miàn",
      level: "advanced",
      meaning: "画幅上的形象",
      meaningKr: "화면",
      example: "这幅画的画面色彩鲜艳。",
      exampleKr: "이 그림의 화면은 색채가 선명하다."
    }
  ],
  35: [
    {
      word: "甜蜜",
      pinyin: "tián mì",
      level: "intermediate",
      meaning: "幸福愉快",
      meaningKr: "달콤하다",
      example: "他们过着甜蜜的生活。",
      exampleKr: "그들은 달콤한 생활을 하고 있다."
    }
  ],
  36: [
    {
      word: "过去",
      pinyin: "guò qù",
      level: "intermediate",
      meaning: "从前",
      meaningKr: "과거",
      example: "过去的事情就让它过去吧。",
      exampleKr: "과거의 일은 그냥 지나가게 두자."
    }
  ],
  37: [
    {
      word: "继续",
      pinyin: "jì xù",
      level: "intermediate",
      meaning: "延续下去",
      meaningKr: "계속하다",
      example: "请继续你的表演。",
      exampleKr: "계속해서 공연해 주세요."
    }
  ],
  38: [
    {
      word: "至少",
      pinyin: "zhì shǎo",
      level: "intermediate",
      meaning: "表示最小的限度",
      meaningKr: "적어도",
      example: "至少你应该跟我打个招呼。",
      exampleKr: "적어도 당신은 나에게 인사를 해야 한다."
    }
  ],
  39: [
    {
      word: "分散",
      pinyin: "fēn sàn",
      level: "intermediate",
      meaning: "分散，不集中",
      meaningKr: "분산시키다",
      example: "别分散我的注意力。",
      exampleKr: "내 주의를 분산시키지 마라."
    }
  ],
  40: [
    {
      word: "紧",
      pinyin: "jǐn",
      level: "beginner",
      meaning: "靠得近，程度高",
      meaningKr: "단단히, 꽉",
      example: "他把衣服裹得很紧。",
      exampleKr: "그는 옷을 꽉 감쌌다."
    }
  ],
  41: [
    {
      word: "挽留",
      pinyin: "wǎn liú",
      level: "advanced",
      meaning: "留住要离去的人",
      meaningKr: "붙잡다",
      example: "他试图挽留那位客人。",
      exampleKr: "그는 그 손님을 붙잡으려 했다."
    }
  ],
  42: [
    {
      word: "过去",
      pinyin: "guò qù",
      level: "intermediate",
      meaning: "从前",
      meaningKr: "과거",
      example: "过去的事情就让它过去吧。",
      exampleKr: "과거의 일은 그냥 지나가게 두자."
    }
  ],
  43: [
    {
      word: "支撑",
      pinyin: "zhī chēng",
      level: "advanced",
      meaning: "顶住压力，使不倒塌",
      meaningKr: "지탱하다",
      example: "他靠意志力支撑着身体。",
      exampleKr: "그는 의지력으로 몸을 지탱했다."
    }
  ],
  44: [
    {
      word: "凌晨",
      pinyin: "líng chén",
      level: "advanced",
      meaning: "天亮前",
      meaningKr: "새벽",
      example: "凌晨三点，城市依然很安静。",
      exampleKr: "새벽 3시, 도시는 여전히 매우 조용하다."
    }
  ],
  45: [
    {
      word: "身影",
      pinyin: "shēn yǐng",
      level: "advanced",
      meaning: "身体轮廓",
      meaningKr: "모습",
      example: "路灯下拉长了她的身影。",
      exampleKr: "가로등 아래에서 그녀의 모습이 길게 늘어졌다."
    }
  ],
  46: [
    {
      word: "失去",
      pinyin: "shī qù",
      level: "intermediate",
      meaning: "丢掉",
      meaningKr: "잃다",
      example: "他不想失去这次机会。",
      exampleKr: "그는 이번 기회를 잃고 싶지 않다."
    }
  ],
  47: [
    {
      word: "下沉",
      pinyin: "xià chén",
      level: "intermediate",
      meaning: "沉下去",
      meaningKr: "가라앉다",
      example: "夕阳慢慢向海平面下沉。",
      exampleKr: "석양이 천천히 해수면으로 가라앉는다."
    }
  ],
  48: [
    {
      word: "回到",
      pinyin: "huí dào",
      level: "beginner",
      meaning: "回到原地",
      meaningKr: "돌아가다",
      example: "我想回到家乡。",
      exampleKr: "나는 고향으로 돌아가고 싶다."
    }
  ]
};

// 获取指定句子的词汇分析
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return huidaoguoquVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(huidaoguoquVocabAnalysis).flat();
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}

