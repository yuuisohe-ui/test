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
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | null {
  return yanhuayilengSentenceStructures[sentenceIndex] || null;
}


