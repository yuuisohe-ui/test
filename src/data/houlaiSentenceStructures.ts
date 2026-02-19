// 后来歌词句式训练数据
import { SentenceStructure } from './tianmimiSentenceStructures';

export const houlaiSentenceStructures: Record<number, SentenceStructure> = {
  4: {
    sentenceIndex: 4,
    sentence: "我总算学会了 如何去爱",
    structure: "总算",
    explanation: "마침내, 겨우 (바라던 일이 어렵게 실현되었음을 나타냄)",
    level: "intermediate",
    example: "花了三个小时，我总算把作业做完了。",
    exampleKr: "세 시간이나 걸려서 나는 마침내 숙제를 다 끝냈다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "早已远去 消失在人海",
    structure: "早已",
    explanation: "이미 오래전에, 벌써",
    level: "intermediate",
    example: "他早已把这件事情忘了。",
    exampleKr: "그는 이미 오래전에 이 일을 잊어버렸다.",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "终于在眼泪中明白",
    structure: "终于",
    explanation: "마침내, 결국 (긴 과정 끝에 도달한 결과)",
    level: "beginner",
    example: "经过努力，他终于考上了大学。",
    exampleKr: "노력 끝에 그는 마침내 대학에 합격했다.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "一旦错过就不再",
    structure: "一旦……就……",
    explanation: "일단 ~하기만 하면 (곧) ~하다",
    level: "intermediate",
    example: "这种机会一旦错过，就很难再有了。",
    exampleKr: "이런 기회는 일단 놓치면 다시 얻기 매우 어렵다.",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "我低下头闻见一阵芬芳",
    structure: "V + 见",
    explanation: "지각 동사 뒤에 붙어 감각을 통해 결과를 얻었음을 나타내는 결과보어",
    level: "beginner",
    example: "你看见我的手机了吗？",
    exampleKr: "내 핸드폰 보았니?",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "总想起 当天的星光",
    structure: "每当……总……",
    explanation: "~할 때마다 늘 ~하다",
    level: "intermediate",
    example: "每当想起故乡，他总会流下眼泪。",
    exampleKr: "고향을 생각할 때마다 그는 항상 눈물을 흘린다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "为什么就能那样简单",
    structure: "为什么",
    explanation: "왜, 어째서 (원인을 묻는 의문사)",
    level: "beginner",
    example: "你为什么不给他打电话？",
    exampleKr: "너 왜 그에게 전화 안 하니?",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "一定要让深爱的人受伤",
    structure: "让",
    explanation: "~로 하여금 ~하게 하다 (사역문)",
    level: "beginner",
    example: "老师让学生们在教室里等。",
    exampleKr: "선생님은 학생들에게 교실에서 기다리라고 하셨다.",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "你是否一样 也在静静追悔感伤",
    structure: "是否",
    explanation: "~인지 아닌지 (부정의문문 '是不是'의 서면어)",
    level: "intermediate",
    example: "我不知道他是否愿意参加晚会。",
    exampleKr: "그가 파티에 참석하고 싶어 하는지 아닌지 모르겠다.",
    expanded: "",
    translationKr: ""
  },
  29: {
    sentenceIndex: 29,
    sentence: "如果当时我们能",
    structure: "如果",
    explanation: "만약 ~라면 (가정)",
    level: "beginner",
    example: "如果明天天气好，我们就去爬山。",
    exampleKr: "만약 내일 날씨가 좋으면 우리 등산 가자.",
    expanded: "",
    translationKr: ""
  },
  33: {
    sentenceIndex: 33,
    sentence: "带着笑或是很沉默",
    structure: "……或是……",
    explanation: "~이거나 혹은 ~ (선택 관계)",
    level: "intermediate",
    example: "你可以发邮件或是打微信给我。",
    exampleKr: "너는 나에게 메일을 보내거나 위챗을 해도 돼.",
    expanded: "",
    translationKr: ""
  },
  34: {
    sentenceIndex: 34,
    sentence: "这些年来 有没有人能让你不寂寞",
    structure: "有没有",
    explanation: "~가 있는지 없는지 (정반의문문)",
    level: "beginner",
    example: "你家附近有没有书店？",
    exampleKr: "너희 집 근처에 서점이 있니?",
    expanded: "",
    translationKr: ""
  },
  62: {
    sentenceIndex: 62,
    sentence: "永远不会再重来",
    structure: "再",
    explanation: "다시, 또 (미래에 발생할 동작의 반복)",
    level: "beginner",
    example: "请再说一遍。",
    exampleKr: "다시 한번 말씀해 주세요.",
    expanded: "",
    translationKr: ""
  },
  64: {
    sentenceIndex: 64,
    sentence: "爱着那个女孩",
    structure: "V + 着",
    explanation: "동작이나 상태의 지속을 나타내는 동태조사",
    level: "beginner",
    example: "墙上挂着一张地图。",
    exampleKr: "벽에 지도 한 장이 걸려 있다.",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return houlaiSentenceStructures[sentenceIndex];
}

