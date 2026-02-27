// 回到过去句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析（跳过特殊标记的句子）
export const huidaoguoquSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "一盏黄黄旧旧的灯",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "一盏泛黄且陈旧的灯",
    translationKr: "노랗고 낡은 등불 하나"
  },
  2: {
    sentenceIndex: 2,
    sentence: "时间在旁闷不吭声",
    structure: "在……",
    explanation: "동작이 일어나는 장소나 상태를 나타내는 개사",
    level: "beginner",
    example: "他在书店看书。",
    exampleKr: "그는 서점에서 책을 본다.",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "寂寞下手毫无分寸",
    structure: "毫无",
    explanation: "조금의 ~도 없다 (강한 부정)",
    level: "intermediate",
    example: "他对此事毫无经验。",
    exampleKr: "그는 이 일에 대해 전혀 경험이 없다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "不懂得轻重之分",
    structure: "……之分",
    explanation: "~의 구분, ~의 차이",
    level: "intermediate",
    example: "这两者之间有本质之分。",
    exampleKr: "이 둘 사이에는 본질적인 차이가 있다.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "沉默支撑跃过陌生",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "沉默在支撑着并跃过了陌生",
    translationKr: "침묵이 지탱하며 낯섦을 뛰어넘는다"
  },
  6: {
    sentenceIndex: 6,
    sentence: "静静看着凌晨黄昏",
    structure: "V + 着",
    explanation: "동작의 지속이나 상태를 나타냄",
    level: "beginner",
    example: "他穿着一件红色的衬衫。",
    exampleKr: "그는 빨간색 셔츠를 입고 있다.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "你的身影",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "那是你的身影",
    translationKr: "너의 그 뒷모습"
  },
  8: {
    sentenceIndex: 8,
    sentence: "失去平衡慢慢下沉",
    structure: "慢慢",
    explanation: "어떤 동작을 천천히 함을 나타내는 부사",
    level: "beginner",
    example: "请慢慢喝，小心烫。",
    exampleKr: "천천히 마셔요, 뜨거우니 조심하세요.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "黑暗已在空中盘旋",
    structure: "已",
    explanation: "동작이나 상태가 이미 완료되었거나 시작되었음을 나타냄 (已经의 단축형)",
    level: "intermediate",
    example: "天色已晚，我们回去吧。",
    exampleKr: "날이 이미 저물었으니, 돌아가자.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "该往哪我看不见",
    structure: "V + 不见",
    explanation: "결과보어의 부정형으로, 감각을 통해 대상을 인식할 수 없음을 나타냄",
    level: "beginner",
    example: "我听不见你在说什么。",
    exampleKr: "네가 무슨 말을 하는지 들리지 않아.",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "也许爱在梦的另一端",
    structure: "也许",
    explanation: "추측이나 불확실한 가능성을 나타냄 (아마도, 어쩌면)",
    level: "beginner",
    example: "他也许不知道这件事。",
    exampleKr: "그는 어쩌면 이 일을 모를지도 모른다.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "无法存活在真实的空间",
    structure: "无法",
    explanation: "~할 방법이 없다, ~할 수 없다",
    level: "intermediate",
    example: "我无法接受这个事实。",
    exampleKr: "나는 이 사실을 받아들일 수 없다.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "想回到过去",
    structure: "想",
    explanation: "~하고 싶다 (희망, 의향)",
    level: "beginner",
    example: "我想去北京旅游。",
    exampleKr: "나는 북경으로 여행 가고 싶다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "试着抱你在怀里",
    structure: "试着",
    explanation: "시험 삼아 ~해 보다",
    level: "beginner",
    example: "你试着写一下这个汉字。",
    exampleKr: "이 한자를 한번 써 보세요.",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "羞怯的脸带有一点稚气",
    structure: "有一点",
    explanation: "정도가 약간임을 나타내며, 보통 형용사나 심리동사 앞에 쓰임",
    level: "beginner",
    example: "今天我有一点累。",
    exampleKr: "오늘 나는 좀 피곤하다.",
    expanded: "",
    translationKr: ""
  },
  16: {
    sentenceIndex: 16,
    sentence: "想看你看的世界",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我想看一看你所看到的世界",
    translationKr: "네가 보는 세상을 보고 싶어"
  },
  17: {
    sentenceIndex: 17,
    sentence: "想在你梦的画面",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我想待在你梦中的那个画面里",
    translationKr: "네 꿈속의 장면에 있고 싶어"
  },
  18: {
    sentenceIndex: 18,
    sentence: "只要靠在一起就能感觉甜蜜",
    structure: "只要……就……",
    explanation: "충분조건: ~하기만 하면 바로 ~하다",
    level: "intermediate",
    example: "只要努力，就一定能成功。",
    exampleKr: "노력하기만 하면 반드시 성공할 수 있다.",
    expanded: "",
    translationKr: ""
  },
  19: {
    sentenceIndex: 19,
    sentence: "想回到过去",
    structure: "想",
    explanation: "~하고 싶다 (희망, 의향)",
    level: "beginner",
    example: "你想喝点儿什么？",
    exampleKr: "당신은 무엇을 좀 마시고 싶나요?",
    expanded: "",
    translationKr: ""
  },
  20: {
    sentenceIndex: 20,
    sentence: "试着让故事继续",
    structure: "让",
    explanation: "사역 동사: ~로 하여금 ~하게 하다",
    level: "beginner",
    example: "老师让我读课文。",
    exampleKr: "선생님이 나에게 본문을 읽으라고 하셨다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "至少不再让你离我而去",
    structure: "离",
    explanation: "두 지점 사이의 거리나 떨어짐을 나타내는 개사",
    level: "beginner",
    example: "我家离学校很近。",
    exampleKr: "우리 집은 학교에서 매우 가깝다.",
    expanded: "",
    translationKr: ""
  },
  22: {
    sentenceIndex: 22,
    sentence: "分散时间的注意",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "分散掉时间的注意力",
    translationKr: "시간의 주의력을 분산시킨다"
  },
  23: {
    sentenceIndex: 23,
    sentence: "这次会抱得更紧",
    structure: "V + 得 + Adj",
    explanation: "정도보어: 동작의 정도가 어떠함을 나타냄",
    level: "beginner",
    example: "他跑得非常快。",
    exampleKr: "그는 매우 빨리 달린다.",
    expanded: "",
    translationKr: ""
  },
  24: {
    sentenceIndex: 24,
    sentence: "这样挽留不知还来不来得及",
    structure: "来得及",
    explanation: "시간이 충분하다, 늦지 않다",
    level: "intermediate",
    example: "快点走，还来得及买票。",
    exampleKr: "빨리 가자, 아직 표를 살 수 있어.",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "想回到过去",
    structure: "想",
    explanation: "~하고 싶다 (희망, 의향)",
    level: "beginner",
    example: "我真想见见他。",
    exampleKr: "나는 정말 그를 보고 싶다.",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "思绪不断阻挡着回忆播放",
    structure: "不断",
    explanation: "끊임없이, 계속해서",
    level: "intermediate",
    example: "生活水平不断提高。",
    exampleKr: "생활 수준이 끊임없이 높아지고 있다.",
    expanded: "",
    translationKr: ""
  },
  27: {
    sentenceIndex: 27,
    sentence: "盲目的追寻仍然空空荡荡",
    structure: "仍然",
    explanation: "여전히, 변함없이",
    level: "intermediate",
    example: "虽然失败了，他仍然没有放弃。",
    exampleKr: "비록 실패했지만, 그는 여전히 포기하지 않았다.",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "灰蒙蒙的夜晚睡意又不知躲到哪去",
    structure: "又",
    explanation: "다시, 또 (이미 발생한 동작의 중복)",
    level: "beginner",
    example: "他昨天没来，今天又没来。",
    exampleKr: "그는 어제 안 왔는데, 오늘 또 안 왔다.",
    expanded: "",
    translationKr: ""
  },
  29: {
    sentenceIndex: 29,
    sentence: "一转身孤单已躺在身旁",
    structure: "一……",
    explanation: "~하자마자 바로 ~하다",
    level: "beginner",
    example: "我一回家就睡觉了。",
    exampleKr: "나는 집에 가자마자 바로 잠을 잤다.",
    expanded: "",
    translationKr: ""
  },
  30: {
    sentenceIndex: 30,
    sentence: "想回到过去",
    structure: "想",
    explanation: "~하고 싶다 (희망, 의향)",
    level: "beginner",
    example: "你不想去吗？",
    exampleKr: "너는 가기 싫으니?",
    expanded: "",
    translationKr: ""
  },
  31: {
    sentenceIndex: 31,
    sentence: "试着抱你在怀里",
    structure: "试着",
    explanation: "시험 삼아 ~해 보다",
    level: "beginner",
    example: "我试着给他打个电话。",
    exampleKr: "내가 그에게 전화를 한번 걸어볼게.",
    expanded: "",
    translationKr: ""
  },
  32: {
    sentenceIndex: 32,
    sentence: "羞怯的脸带有一点稚气",
    structure: "有一点",
    explanation: "정도가 약간임을 나타냄",
    level: "beginner",
    example: "这件衣服有一点贵。",
    exampleKr: "이 옷은 좀 비싸다.",
    expanded: "",
    translationKr: ""
  },
  33: {
    sentenceIndex: 33,
    sentence: "想看你看的世界",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我想看一看你眼中的世界",
    translationKr: "네가 보는 세상을 보고 싶어"
  },
  34: {
    sentenceIndex: 34,
    sentence: "想在你梦的画面",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我想留在你梦境的画面中",
    translationKr: "네 꿈속의 장면에 있고 싶어"
  },
  35: {
    sentenceIndex: 35,
    sentence: "只要靠在一起就能感觉甜蜜",
    structure: "只要……就……",
    explanation: "충분조건: ~하기만 하면 바로 ~하다",
    level: "intermediate",
    example: "只要天气好，我们就出发。",
    exampleKr: "날씨가 좋기만 하면, 우리는 바로 출발한다.",
    expanded: "",
    translationKr: ""
  },
  36: {
    sentenceIndex: 36,
    sentence: "想回到过去",
    structure: "想",
    explanation: "~하고 싶다 (희망, 의향)",
    level: "beginner",
    example: "我想请你帮个忙。",
    exampleKr: "당신에게 부탁 하나를 하고 싶습니다.",
    expanded: "",
    translationKr: ""
  },
  37: {
    sentenceIndex: 37,
    sentence: "试着让故事继续",
    structure: "让",
    explanation: "사역 동사: ~하게 하다",
    level: "beginner",
    example: "别让他等太久。",
    exampleKr: "그를 너무 오래 기다리게 하지 마세요.",
    expanded: "",
    translationKr: ""
  },
  38: {
    sentenceIndex: 38,
    sentence: "至少不再让你离我而去",
    structure: "离",
    explanation: "거리나 이별을 나타내는 개사",
    level: "beginner",
    example: "离开家已经三年了。",
    exampleKr: "집을 떠나온 지 벌써 3년이 되었다.",
    expanded: "",
    translationKr: ""
  },
  39: {
    sentenceIndex: 39,
    sentence: "分散时间的注意",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "试图分散时间的注意",
    translationKr: "시간의 주의를 분산시킨다"
  },
  40: {
    sentenceIndex: 40,
    sentence: "这次会抱得更紧",
    structure: "V + 得 + Adj",
    explanation: "정도보어: 동작의 정도를 설명함",
    level: "beginner",
    example: "你的汉语说得很好。",
    exampleKr: "당신은 중국어를 아주 잘하시네요.",
    expanded: "",
    translationKr: ""
  },
  41: {
    sentenceIndex: 41,
    sentence: "这样挽留不知还来不来得及",
    structure: "来得及",
    explanation: "시간 안에 할 수 있다, 늦지 않다",
    level: "intermediate",
    example: "快点走，还来得及买票。",
    exampleKr: "빨리 가자, 아직 표를 살 수 있어.",
    expanded: "",
    translationKr: ""
  },
  42: {
    sentenceIndex: 42,
    sentence: "想回到过去",
    structure: "想",
    explanation: "~하고 싶다 (희망, 의향)",
    level: "beginner",
    example: "我想去洗手间。",
    exampleKr: "화장실에 가고 싶어요.",
    expanded: "",
    translationKr: ""
  },
  43: {
    sentenceIndex: 43,
    sentence: "沉默支撑跃过陌生",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "用沉默支撑着跃过了那些陌生",
    translationKr: "침묵으로 지탱하며 낯섦을 뛰어넘는다"
  },
  44: {
    sentenceIndex: 44,
    sentence: "静静看着凌晨黄昏",
    structure: "V + 着",
    explanation: "동작의 지속",
    level: "beginner",
    example: "门开着呢。",
    exampleKr: "문이 열려 있어요.",
    expanded: "",
    translationKr: ""
  },
  45: {
    sentenceIndex: 45,
    sentence: "你的身影",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我看见了你的身影",
    translationKr: "너의 그 모습"
  },
  46: {
    sentenceIndex: 46,
    sentence: "失去平衡",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我慢慢地失去平衡",
    translationKr: "균형을 잃고"
  },
  47: {
    sentenceIndex: 47,
    sentence: "慢慢下沉",
    structure: "慢慢",
    explanation: "천천히",
    level: "beginner",
    example: "雨慢慢停了。",
    exampleKr: "비가 천천히 그쳤다.",
    expanded: "",
    translationKr: ""
  },
  48: {
    sentenceIndex: 48,
    sentence: "想回到过去",
    structure: "想",
    explanation: "~하고 싶다",
    level: "beginner",
    example: "我也想去。",
    exampleKr: "나도 가고 싶어.",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return huidaoguoquSentenceStructures[sentenceIndex] ?? undefined;
}

