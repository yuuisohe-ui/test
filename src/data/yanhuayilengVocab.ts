// 烟花易冷歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析
export const yanhuayilengVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "烟花",
      pinyin: "yān huā",
      level: "intermediate",
      meaning: "燃放时发出各种颜色光焰的东西",
      meaningKr: "불꽃",
      example: "节日里的烟花非常漂亮。",
      exampleKr: "축제의 불꽃은 매우 아름답다."
    }
  ],
  2: [
    {
      word: "繁华",
      pinyin: "fán huá",
      level: "advanced",
      meaning: "城镇、街市等热闹美好",
      meaningKr: "번화하다",
      example: "这是一座非常繁华的现代化城市。",
      exampleKr: "이곳은 매우 번화한 현대화된 도시이다."
    },
    {
      word: "遁入空门",
      pinyin: "dùn rù kōng mén",
      level: "advanced",
      meaning: "指避开世俗，出家为僧尼",
      meaningKr: "불가에 입문하다",
      example: "他看破红尘，遁入空门。",
      exampleKr: "그는 속세를 떠나 불교에 입문했다."
    }
  ],
  3: [
    {
      word: "辗转",
      pinyin: "niǎn zhuǎn",
      level: "advanced",
      meaning: "翻来覆去，也指经过许多人的手或地方",
      meaningKr: "전전하다",
      example: "他辗转反侧，怎么也睡不着。",
      exampleKr: "그는 이리저리 뒤척이며 도저히 잠을 이루지 못했다."
    }
  ],
  4: [
    {
      word: "默认",
      pinyin: "mò rèn",
      level: "intermediate",
      meaning: "心里承认，但不表示出来",
      meaningKr: "묵인하다",
      example: "面对指责，他选择了默认。",
      exampleKr: "비난에 대해 그는 묵인하는 쪽을 택했다."
    },
    {
      word: "生死",
      pinyin: "shēng sǐ",
      level: "intermediate",
      meaning: "生存和死亡",
      meaningKr: "생사",
      example: "他经历过多次生死的考验。",
      exampleKr: "그는 여러 차례 생사의 고비를 겪었다."
    }
  ],
  5: [
    {
      word: "年轮",
      pinyin: "nián lún",
      level: "advanced",
      meaning: "木本植物茎干横切面上的同心环纹",
      meaningKr: "나이테",
      example: "我们可以根据年轮判断树木的年龄。",
      exampleKr: "우리는 나이테를 통해 나무의 수령을 판단할 수 있다."
    }
  ],
  6: [
    {
      word: "浮图",
      pinyin: "fú tú",
      level: "advanced",
      meaning: "指佛教的塔",
      meaningKr: "불탑",
      example: "古老的浮图屹立在山顶。",
      exampleKr: "오래된 불탑이 산꼭대기에 우뚝 솟아 있다."
    }
  ],
  7: [
    {
      word: "残灯",
      pinyin: "cán dēng",
      level: "advanced",
      meaning: "即将熄灭的灯",
      meaningKr: "잔등",
      example: "他伴着一盏残灯读到深夜。",
      exampleKr: "그는 가물거리는 잔등 아래에서 밤늦게까지 책을 읽었다."
    }
  ],
  8: [
    {
      word: "历史",
      pinyin: "lì shǐ",
      level: "intermediate",
      meaning: "过去的事实或事物发展的过程",
      meaningKr: "역사",
      example: "我们要从历史中吸取教训。",
      exampleKr: "우리는 역사에서 교훈을 얻어야 한다."
    },
    {
      word: "转身",
      pinyin: "zhuǎn shēn",
      level: "intermediate",
      meaning: "转动身体，面向后方",
      meaningKr: "몸을 돌리다",
      example: "他向大家挥挥手，然后转身离开了。",
      exampleKr: "그는 모두에게 손을 흔든 뒤 몸을 돌려 떠났다."
    }
  ],
  9: [
    {
      word: "古筝",
      pinyin: "gǔ zhēng",
      level: "advanced",
      meaning: "中国的一种传统弦乐器",
      meaningKr: "고쟁",
      example: "她弹奏古筝的声音非常动听。",
      exampleKr: "그녀가 연주하는 고쟁 소리는 매우 감미롭다."
    }
  ],
  10: [
    {
      word: "纷纷",
      pinyin: "fēn fēn",
      level: "intermediate",
      meaning: "多而杂乱，也指接二连三地",
      meaningKr: "분분하다",
      example: "落叶纷纷从树上飘落下来。",
      exampleKr: "낙엽이 나무에서 분분히 떨어져 내린다."
    },
    {
      word: "草木",
      pinyin: "cǎo mù",
      level: "intermediate",
      meaning: "花草和树木",
      meaningKr: "초목",
      example: "春天来了，草木都发芽了。",
      exampleKr: "봄이 오자 초목들이 모두 싹을 틔웠다."
    }
  ],
  11: [
    {
      word: "始终",
      pinyin: "shǐ zhōng",
      level: "intermediate",
      meaning: "从开始到最后，一直",
      meaningKr: "시종/일관",
      example: "他始终坚持自己的理想。",
      exampleKr: "그는 시종일관 자신의 이상을 고수했다."
    }
  ],
  12: [
    {
      word: "斑驳",
      pinyin: "bān bó",
      level: "advanced",
      meaning: "一种颜色中杂有别种颜色的斑点或花纹",
      meaningKr: "얼룩덜룩하다",
      example: "墙上的油漆已经斑驳脱落了。",
      exampleKr: "벽의 페인트가 이미 얼룩덜룩하게 벗겨졌다."
    },
    {
      word: "盘踞",
      pinyin: "pán jù",
      level: "advanced",
      meaning: "非法占据，也指树根等交结",
      meaningKr: "도사리다",
      example: "老树根盘踞在地面上。",
      exampleKr: "고목 나무 뿌리가 지면에 도사리고 있다."
    }
  ],
  13: [
    {
      word: "回荡",
      pinyin: "huí dàng",
      level: "advanced",
      meaning: "声音在室内或山谷间回响",
      meaningKr: "울려 퍼지다",
      example: "悠扬的歌声在山谷间回荡。",
      exampleKr: "은은한 노래성이 산골짜기에 울려 퍼진다."
    }
  ],
  14: [
    {
      word: "纷纷",
      pinyin: "fēn fēn",
      level: "intermediate",
      meaning: "多而杂乱",
      meaningKr: "분분하다",
      example: "雪花纷纷扬扬地飘落。",
      exampleKr: "눈송이가 분분히 흩날리며 떨어진다."
    }
  ],
  15: [
    {
      word: "孤城",
      pinyin: "gū chéng",
      level: "advanced",
      meaning: "孤立无援的城市",
      meaningKr: "외딴 성",
      example: "在漫天的黄沙中，只有一座孤城。",
      exampleKr: "하늘을 뒤덮은 황사 속에 오직 외딴 성 하나가 있다."
    }
  ],
  16: [
    {
      word: "城郊",
      pinyin: "chéng jiāo",
      level: "intermediate",
      meaning: "城市附近的郊外",
      meaningKr: "성 외곽",
      example: "他在城郊买了一套新房子。",
      exampleKr: "그는 성 외곽에 새 집을 한 채 샀다."
    },
    {
      word: "牧笛",
      pinyin: "mù dí",
      level: "advanced",
      meaning: "放牧人吹的笛子",
      meaningKr: "목적",
      example: "远处传来悠扬的牧笛声。",
      exampleKr: "멀리서 은은한 목적 소리가 들려온다."
    }
  ],
  17: [
    {
      word: "缘分",
      pinyin: "yuán fèn",
      level: "advanced",
      meaning: "人与人之间某种偶然的相遇关系",
      meaningKr: "인연",
      example: "能在这里遇到你，真是缘分。",
      exampleKr: "여기서 당신을 만난 것은 정말 인연이다."
    },
    {
      word: "落地生根",
      pinyin: "luò dì shēng gēn",
      level: "advanced",
      meaning: "指植物种子落下后生长，比喻在一个地方定居",
      meaningKr: "낙지생근",
      example: "他打算在这座城市落地生根。",
      exampleKr: "그는 이 도시에서 뿌리를 내리고 살 계획이다."
    }
  ],
  18: [
    {
      word: "青春",
      pinyin: "qīng chūn",
      level: "intermediate",
      meaning: "青年时期，也指美好的时光",
      meaningKr: "청춘",
      example: "我们要珍惜青春，努力学习。",
      exampleKr: "우리는 청춘을 소중히 여기고 열심히 공부해야 한다."
    },
    {
      word: "羡煞",
      pinyin: "xiàn shà",
      level: "advanced",
      meaning: "非常羡慕",
      meaningKr: "몹시 부러워하다",
      example: "他们的幸福生活羡煞旁人。",
      exampleKr: "그들의 행복한 생활은 다른 사람들을 몹시 부럽게 했다."
    }
  ],
  19: [
    {
      word: "史册",
      pinyin: "shǐ cè",
      level: "advanced",
      meaning: "历史书，也指历史记录",
      meaningKr: "역사책",
      example: "他的英雄事迹载入了史册。",
      exampleKr: "그의 영웅적인 사적은 역사책에 기록되었다."
    },
    {
      word: "温柔",
      pinyin: "wēn róu",
      level: "intermediate",
      meaning: "温和柔顺",
      meaningKr: "온유하다",
      example: "她说话的声音非常温柔。",
      exampleKr: "그녀의 목소리는 매우 온유하다."
    }
  ],
  20: [
    {
      word: "人事",
      pinyin: "rén shì",
      level: "intermediate",
      meaning: "人世间的事，也指人力所能做到的事",
      meaningKr: "인사",
      example: "人事沧桑，许多东西都变了。",
      exampleKr: "세상사는 변화무쌍하여 많은 것이 변했다."
    }
  ],
  21: [
    {
      word: "认真",
      pinyin: "rèn zhēn",
      level: "beginner",
      meaning: "严肃对待，不马虎",
      meaningKr: "진지하다",
      example: "他做作业非常认真。",
      exampleKr: "그는 숙제를 매우 진지하게 한다."
    }
  ],
  22: [
    {
      word: "千年",
      pinyin: "qiān nián",
      level: "beginner",
      meaning: "一千年的时间",
      meaningKr: "천년",
      example: "这棵古树已经生长了一千年。",
      exampleKr: "이 고목은 이미 천 년 동안 자랐다."
    },
    {
      word: "情深",
      pinyin: "qíng shēn",
      level: "advanced",
      meaning: "感情非常深厚",
      meaningKr: "정이 깊다",
      example: "他们两兄弟情深似海。",
      exampleKr: "그들 형제는 정이 바다처럼 깊다."
    }
  ],
  23: [
    {
      word: "青史",
      pinyin: "qīng shǐ",
      level: "advanced",
      meaning: "古时在青木简上记事，后指历史",
      meaningKr: "청사",
      example: "名垂青史是许多人的梦想。",
      exampleKr: "청사에 이름을 남기는 것은 많은 이들의 꿈이다."
    }
  ],
  24: [
    {
      word: "前世",
      pinyin: "qián shì",
      level: "advanced",
      meaning: "佛教指现世以前的一生",
      meaningKr: "전생",
      example: "这仿佛是前世注定的缘分。",
      exampleKr: "이것은 마치 전생에 정해진 인연 같다."
    }
  ],
  25: [
    {
      word: "红尘",
      pinyin: "hóng chén",
      level: "advanced",
      meaning: "指繁华的社会，世俗世界",
      meaningKr: "홍尘",
      example: "他厌倦了红尘的争斗。",
      exampleKr: "그는 속세의 다툼에 싫증을 느꼈다."
    },
    {
      word: "浪迹",
      pinyin: "làng jì",
      level: "advanced",
      meaning: "到处漫游，行踪不定",
      meaningKr: "유랑하다",
      example: "他年轻时曾浪迹天涯。",
      exampleKr: "그는 젊었을 때 천하를 유랑했다."
    }
  ],
  41: [
    {
      word: "永恒",
      pinyin: "yǒng héng",
      level: "advanced",
      meaning: "永远不变",
      meaningKr: "영원하다",
      example: "世界上没有什么是永恒不变的。",
      exampleKr: "세상에 영원히 변하지 않는 것은 없다."
    }
  ]
};

// 获取指定句子的词汇
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return yanhuayilengVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇
export function getAllVocab(): WordAnalysis[] {
  return Object.values(yanhuayilengVocabAnalysis).flat();
}


