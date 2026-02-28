// 烟花易冷句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析
export const yanhuayilengSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "烟花易冷",
    structure: "……易……",
    explanation: "어떤 상태나 변화가 발생하기 쉬움을 나타내는 '하기 쉽다'는 의미의 패턴입니다.",
    level: "intermediate",
    example: "这种材料易燃，请小心。",
    exampleKr: "이 재료는 불이 붙기 쉬우니 조심하세요.",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "繁华声 遁入空门 折煞了世人",
    structure: "……煞了……",
    explanation: "동사나 형용사 뒤에 쓰여 그 정도가 매우 심함을 강조하는 보어적 표현입니다.",
    level: "advanced",
    example: "他那滑稽的样子笑煞了众人。",
    exampleKr: "그의 익살스러운 모습은 사람들을 웃겨 죽게 만들었다.",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "梦偏冷 辗转一生 情债又几本",
    structure: "偏",
    explanation: "예상이나 일반적인 상황과는 반대로 '유독', '하필'이라는 의미를 나타냅니다.",
    level: "intermediate",
    example: "大家都在看电影，他偏要看书。",
    exampleKr: "모두가 영화를 보고 있는데, 그는 하필 책을 보겠다고 한다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "如你默认 生死枯等",
    structure: "如……",
    explanation: "'만약 ~한다면'의 뜻으로 가정을 나타내는 접속사입니다.",
    level: "intermediate",
    example: "如不及时处理，后果会很严重。",
    exampleKr: "만약 제때 처리하지 않으면 결과가 심각해질 것입니다.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "枯等一圈 又一圈的年轮",
    structure: "一[量词]又一[量词]",
    explanation: "같은 양사를 중첩하여 동일한 동작이나 상태가 반복됨을 강조합니다.",
    level: "intermediate",
    example: "他克服了一个又一个的困难。",
    exampleKr: "그는 하나 또 하나의 어려움을 극복해냈다.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "痛直奔 一盏残灯 倾塌的山门",
    structure: "直奔",
    explanation: "중간에 멈추지 않고 목적지를 향해 '곧장 가다'라는 의미입니다.",
    level: "intermediate",
    example: "他下了飞机就直奔医院。",
    exampleKr: "그는 비행기에서 내리자마자 병원으로 곧장 달려갔다.",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "容我在等 历史转身",
    structure: "容……",
    explanation: "'~로 하여금 ~하게 하다' 또는 '~을 허락하다'라는 사동의 의미를 갖습니다.",
    level: "advanced",
    example: "请容我再考虑一下。",
    exampleKr: "제가 조금 더 고려해 볼 수 있게 해주세요.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "雨纷纷 旧故里草木深",
    structure: "AA/AABB (叠词)",
    explanation: "상태를 묘사하는 형용사를 중첩하여 그 느낌을 더욱 생생하게 표현합니다.",
    level: "beginner",
    example: "雪花纷纷落下。",
    exampleKr: "눈송이가 분분히 흩날리며 떨어진다.",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "我听闻 你始终一个人",
    structure: "始终",
    explanation: "시작부터 끝까지 변함없이 '줄곧', '내내'라는 의미입니다.",
    level: "intermediate",
    example: "她始终没有放弃自己的梦想。",
    exampleKr: "그녀는 시종일관 자신의 꿈을 포기하지 않았다.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "斑驳的城门 盘踞着老树根",
    structure: "V + 着",
    explanation: "동작의 진행이 아닌, 그 동작으로 인한 '상태의 지속'을 나타냅니다.",
    level: "beginner",
    example: "门上贴着一张告示。",
    exampleKr: "문 위에 공고문 한 장이 붙어 있다.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "石板上回荡的是 再等",
    structure: "……的是……",
    explanation: "문장에서 특정 부분(주로 뒤의 내용)을 강조하기 위해 사용하는 구조입니다.",
    level: "intermediate",
    example: "最让我感动的是他的诚实。",
    exampleKr: "나를 가장 감동시킨 것은 그의 정직함이다.",
    expanded: "",
    translationKr: ""
  },
  18: {
    sentenceIndex: 18,
    sentence: "听青春迎来笑声 羡煞许多人",
    structure: "羡煞",
    explanation: "'몹시 부러워하다'라는 뜻으로, 동사 뒤에 '煞'를 붙여 정도의 극심함을 나타냅니다.",
    level: "advanced",
    example: "他们那幸福的样子羡煞了旁人。",
    exampleKr: "그들의 행복한 모습은 주변 사람들을 몹시 부럽게 만들었다.",
    expanded: "",
    translationKr: ""
  },
  19: {
    sentenceIndex: 19,
    sentence: "那史册温柔不肯 下笔都太狠",
    structure: "不肯",
    explanation: "~하려 하지 않다, ~하기를 거부하다라는 주관적인 의지를 부정합니다.",
    level: "intermediate",
    example: "无论我怎么劝，他都不肯休息。",
    exampleKr: "내가 아무리 권해도 그는 쉬려 하지 않는다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "而你在问 我是否还认真",
    structure: "是否",
    explanation: "'~인지 아닌지'의 뜻으로 문장 안에서 의문을 포함한 목적어 절을 이끕니다.",
    level: "intermediate",
    example: "目前还不清楚他是否会参加会议。",
    exampleKr: "그가 회의에 참석할지 여부는 현재로서는 아직 불분명하다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "而青史岂能不真 魏书洛阳城",
    structure: "岂能……",
    explanation: "'어찌 ~할 수 있겠는가'라는 반어법으로 강한 긍정이나 부정의 의사를 표현합니다.",
    level: "advanced",
    example: "这种错误岂能一犯再犯？",
    exampleKr: "이런 실수를 어찌 계속해서 반복할 수 있겠는가?",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "跟着红尘 跟随我 浪迹一生",
    structure: "跟随",
    explanation: "뒤를 따르거나 동행함을 의미하는 격식 있는 표현입니다.",
    level: "intermediate",
    example: "他跟随导师做研究已经三年了。",
    exampleKr: "그는 지도교수를 따라 연구를 한 지 벌써 3년이 되었다.",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "雨纷纷 旧故里草木深",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "雨纷纷落下，旧故里的草木长得很茂盛。",
    translationKr: "비는 분분히 내리고, 옛 고향의 풀과 나무는 무성하구나。"
  },
  27: {
    sentenceIndex: 27,
    sentence: "我听闻 妳始终一个人",
    structure: "始终",
    explanation: "'처음부터 끝까지', '줄곧', '내내'라는 의미로 어떤 상태가 변함없이 지속됨을 나타냅니다.",
    level: "intermediate",
    example: "他始终没有放弃自己的梦想。",
    exampleKr: "그는 끝내 자신의 꿈을 포기하지 않았다.",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "斑驳的城门 盘踞着老树根",
    structure: "V + 着",
    explanation: "동사 뒤에 쓰여 동작의 지속이나 상태의 유지를 나타냅니다.",
    level: "beginner",
    example: "大门上关着锁。",
    exampleKr: "대문에는 자물쇠가 채워져 있다.",
    expanded: "",
    translationKr: ""
  },
  29: {
    sentenceIndex: 29,
    sentence: "石板上回荡的是 再等",
    structure: "……的是……",
    explanation: "특정 부분을 강조하기 위한 구조로, '~한 것은 ~이다'라는 뜻으로 해석됩니다.",
    level: "intermediate",
    example: "我最想要的是一个安静的环境。",
    exampleKr: "내가 가장 원하는 것은 조용한 환경이다.",
    expanded: "",
    translationKr: ""
  },
  30: {
    sentenceIndex: 30,
    sentence: "雨纷纷 旧故里草木深",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "雨纷纷地落下，在那旧故里草木已长得深茂。",
    translationKr: "비는 분분히 내리고 옛 고향 땅엔 풀과 나무가 우거졌네。"
  },
  31: {
    sentenceIndex: 31,
    sentence: "我听闻 你仍守着孤城",
    structure: "仍",
    explanation: "'여전히', '아직도'라는 의미로 이전의 상황이 계속되고 있음을 나타냅니다.",
    level: "intermediate",
    example: "尽管过了很多年，他仍居住在这里。",
    exampleKr: "비록 많은 해가 지났지만, 그는 여전히 이곳에 거주하고 있다.",
    expanded: "",
    translationKr: ""
  },
  32: {
    sentenceIndex: 32,
    sentence: "城郊牧笛声 落在那座野村",
    structure: "V + 落在……",
    explanation: "동작의 결과나 주체가 특정 장소에 가 닿음을 나타내는 결과 보어 구조입니다.",
    level: "intermediate",
    example: "雪花落在了他的肩膀上。",
    exampleKr: "눈송이가 그의 어깨 위에 내려앉았다.",
    expanded: "",
    translationKr: ""
  },
  33: {
    sentenceIndex: 33,
    sentence: "缘份落地生根是我们",
    structure: "……是……",
    explanation: "판단이나 정의를 나타내는 가장 기본적인 술어 구조입니다.",
    level: "beginner",
    example: "这本字典是我的。",
    exampleKr: "이 사전은 내 것이다.",
    expanded: "",
    translationKr: ""
  },
  34: {
    sentenceIndex: 34,
    sentence: "雨纷纷 旧故里草木深 我听闻 妳始终一个人",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "雨纷纷地下，旧故里的草木繁茂，我听说妳直到现在还是一个人生活。",
    translationKr: "비가 내리고 옛 고향의 풀과 나무는 무성한데, 듣자하니 당신은 줄곧 혼자라더군요。"
  },
  35: {
    sentenceIndex: 35,
    sentence: "斑驳的城门 盘踞着老树根 石板上回荡的是 再等",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "斑驳的城门上盘踞着老树的根，而在石板上不断回荡着的话语是\"再等\"。",
    translationKr: "얼룩진 성문엔 고목의 뿌리가 뒤엉켜 있고, 석판 위에 메아리치는 것은 다시 기다리겠다는 말뿐이네。"
  },
  36: {
    sentenceIndex: 36,
    sentence: "雨纷纷 雨纷纷 旧故里草木深",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "雨不停地纷纷落下，旧故里的草木已经长得很深了。",
    translationKr: "비는 내리고 또 내리는데, 옛 고향의 풀과 나무만 무성해졌구나。"
  },
  37: {
    sentenceIndex: 37,
    sentence: "我听闻 我听闻 妳仍守着孤城",
    structure: "仍",
    explanation: "변함없는 상태를 강조하며 '여전히'라는 뜻으로 사용됩니다.",
    level: "intermediate",
    example: "虽然失败了，他仍不丧气。",
    exampleKr: "비록 실패했지만, 그는 여전히 낙담하지 않는다.",
    expanded: "",
    translationKr: ""
  },
  38: {
    sentenceIndex: 38,
    sentence: "城郊牧笛声 落在那座野村",
    structure: "V + 落在……",
    explanation: "동작의 작용점이 특정 위치에 도달함을 강조합니다.",
    level: "intermediate",
    example: "目光落在了那张旧照片上。",
    exampleKr: "시선이 그 낡은 사진 위에 머물렀다.",
    expanded: "",
    translationKr: ""
  },
  39: {
    sentenceIndex: 39,
    sentence: "缘份落地生根是我们",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "缘份在地上扎根生长的结果就是我们。",
    translationKr: "인연이 땅에 내려 뿌리 내린 것은 바로 우리라네。"
  },
  40: {
    sentenceIndex: 40,
    sentence: "缘份落地生根是我们",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "那落地生根的缘分，指的就是我们的故事。",
    translationKr: "땅에 뿌리 내린 그 인연은 바로 우리의 모습이라네。"
  },
  41: {
    sentenceIndex: 41,
    sentence: "伽蓝寺听雨声盼永恒",
    structure: "",
    explanation: "",
    level: "advanced",
    example: "",
    exampleKr: "",
    expanded: "在伽蓝寺里听着雨声，期盼着能够拥有永恒。",
    translationKr: "가람사에서 빗소리를 들으며 영원함을 바라네。"
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | null {
  return yanhuayilengSentenceStructures[sentenceIndex] || null;
}


