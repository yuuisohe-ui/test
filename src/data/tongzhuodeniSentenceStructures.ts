// 同桌的你句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析（跳过标题信息，从实际歌词开始）
// 原md文件中第3句对应SRT第1句，以此类推
export const tongzhuodeniSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "明天你是否会想起",
    structure: "是否",
    explanation: "'~인지 아닌지'라는 뜻으로, 문장 안에서 의문을 나타낼 때 사용합니다.",
    level: "intermediate",
    example: "你是否已经收到了我的信？",
    exampleKr: "너 이미 내 편지 받았니?",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "昨天你写的日记",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "昨天你写的日记",
    translationKr: "어제 네가 썼던 일기"
  },
  3: {
    sentenceIndex: 3,
    sentence: "明天你是否还惦记",
    structure: "是否",
    explanation: "'~인지 아닌지'를 묻는 형식으로 정반의문문의 서면어 표현입니다.",
    level: "intermediate",
    example: "他是否会来参加会议？",
    exampleKr: "그가 회의에 참석할지 안 할지 모르겠어.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "曾经最爱哭的你",
    structure: "曾经",
    explanation: "'일찍이', '이전에'라는 뜻으로 과거의 경험이나 상태를 나타냅니다.",
    level: "intermediate",
    example: "我曾经去过北京。",
    exampleKr: "나는 이전에 베이징에 가본 적이 있다.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "老师们都已想不起",
    structure: "V + 不起",
    explanation: "가능보어의 부정형으로, (능력이나 조건이 안 되어) ~할 수 없음을 나타냅니다.",
    level: "intermediate",
    example: "那个地方太贵，我住不起。",
    exampleKr: "그곳은 너무 비싸서 나는 살 수가 없다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "猜不出问题的你",
    structure: "V + 不出",
    explanation: "동사 뒤에 쓰여 (식별하거나 결과물을) 해낼 수 없음을 나타내는 가능보어입니다.",
    level: "intermediate",
    example: "我想不出他的名字了。",
    exampleKr: "그의 이름이 생각나지 않아요.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "我也是偶然翻相片",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "我也是偶然翻相片",
    translationKr: "나도 우연히 사진첩을 넘기다가"
  },
  8: {
    sentenceIndex: 8,
    sentence: "才想起同桌的你",
    structure: "才",
    explanation: "앞선 동작이나 상황이 있고 나서야 비로소 뒤의 일이 일어났음을 강조합니다.",
    level: "beginner",
    example: "天黑了他才回家。",
    exampleKr: "날이 어두워져서야 그는 비로소 집에 돌아왔다.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "谁娶了多愁善感的你",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "谁娶了多愁善感的你",
    translationKr: "누가 감수성 예민했던 너와 결혼했을까"
  },
  10: {
    sentenceIndex: 10,
    sentence: "谁看了你的日记",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "谁看了你的日记",
    translationKr: "누가 네 일기를 읽었을까"
  },
  11: {
    sentenceIndex: 11,
    sentence: "谁把你的长发盘起",
    structure: "把",
    explanation: "목적어를 동사 앞으로 끌어내어 그 대상에 가해진 처치나 변화를 나타냅니다.",
    level: "beginner",
    example: "请把书放在桌子上。",
    exampleKr: "책을 책상 위에 올려두세요.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "谁给你做的嫁衣",
    structure: "给……做……",
    explanation: "'~를 위해 ~를 해주다'라는 의미로 대상에게 동작의 혜택이 돌아감을 나타냅니다.",
    level: "beginner",
    example: "妈妈给我做了一件衣服。",
    exampleKr: "어머니께서 나에게 옷 한 벌을 만들어 주셨다.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "你从前总是很小心",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "你从前总是很小心",
    translationKr: "너는 예전에 늘 매우 조심스러웠지"
  },
  14: {
    sentenceIndex: 14,
    sentence: "问我借半块橡皮",
    structure: "问……借",
    explanation: "특정 대상에게 빌려달라고 요청하는 구조입니다.",
    level: "beginner",
    example: "他问我借了一百块钱。",
    exampleKr: "그는 나에게 백 위안을 빌려달라고 했다.",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "你也曾无意中说起",
    structure: "也曾",
    explanation: "'또한 예전에 ~한 적이 있다'는 의미로 과거의 경험을 보태어 말할 때 사용합니다.",
    level: "intermediate",
    example: "我也曾想过出国留学。",
    exampleKr: "나도 한때는 외국 유학을 생각한 적이 있었다.",
    expanded: "",
    translationKr: ""
  },
  16: {
    sentenceIndex: 16,
    sentence: "喜欢跟我在一起",
    structure: "跟……在一起",
    explanation: "'~와 함께 있다/지내다'라는 의미의 상용구입니다.",
    level: "beginner",
    example: "我想永远跟你在一起。",
    exampleKr: "난 영원히 너와 함께 있고 싶어.",
    expanded: "",
    translationKr: ""
  },
  17: {
    sentenceIndex: 17,
    sentence: "那时候天总是很蓝",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "那时候天总是很蓝",
    translationKr: "그때는 하늘이 늘 참 푸르렀고"
  },
  18: {
    sentenceIndex: 18,
    sentence: "日子总过得太慢",
    structure: "V + 得",
    explanation: "동사 뒤에 정도보어를 사용하여 동작이 진행되는 상태나 정도를 묘사합니다.",
    level: "beginner",
    example: "他跑得非常快。",
    exampleKr: "그는 매우 빠르게 달린다.",
    expanded: "",
    translationKr: ""
  },
  19: {
    sentenceIndex: 19,
    sentence: "你总说毕业遥遥无期",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "你总说毕业遥遥无期",
    translationKr: "너는 늘 졸업이 까마득하다고 말했지"
  },
  20: {
    sentenceIndex: 20,
    sentence: "转眼就各奔东西",
    structure: "转眼就……",
    explanation: "'눈 깜짝할 사이에 ~하다'라는 뜻으로 시간이 매우 빠르게 흘렀음을 나타냅니다.",
    level: "intermediate",
    example: "转眼就到了冬天。",
    exampleKr: "눈 깜짝할 사이에 겨울이 되었다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "谁遇到多愁善感的你",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "谁遇到多愁善感的你",
    translationKr: "누가 감수성 예민했던 너를 만났을까"
  },
  22: {
    sentenceIndex: 22,
    sentence: "谁安慰爱哭的你",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "谁安慰爱哭的你",
    translationKr: "누가 울보였던 너를 위로해줄까"
  },
  23: {
    sentenceIndex: 23,
    sentence: "谁看了我给你写的信",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "谁看了我给你写的信",
    translationKr: "누가 내가 너에게 쓴 편지를 봤을까"
  },
  24: {
    sentenceIndex: 24,
    sentence: "谁把它丢在风里",
    structure: "把……丢在……",
    explanation: "처치문을 사용하여 대상을 특정 장소에 버리거나 놓아두는 결과가 발생했음을 나타냅니다.",
    level: "intermediate",
    example: "别把垃圾丢在路边。",
    exampleKr: "쓰레기를 길가에 버리지 마세요.",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "从前的日子都远去",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "从前的日子都远去",
    translationKr: "예전의 나날은 모두 멀리 가버리고"
  },
  26: {
    sentenceIndex: 26,
    sentence: "我也将有我的妻",
    structure: "将",
    explanation: "미래의 일이나 곧 발생할 상황을 나타내는 부사로 '장차 ~할 것이다'라는 의미입니다.",
    level: "intermediate",
    example: "比赛将下周举行。",
    exampleKr: "경기는 다음 주에 열릴 것입니다.",
    expanded: "",
    translationKr: ""
  },
  27: {
    sentenceIndex: 27,
    sentence: "我也会给她看相片",
    structure: "会",
    explanation: "어떤 상황이 발생할 가능성이 있음을 추측하거나 나타냅니다.",
    level: "beginner",
    example: "明天会下雨吗？",
    exampleKr: "내일 비가 올까요?",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "给她讲同桌的你",
    structure: "给……讲",
    explanation: "전치사 '给'를 사용하여 동작이 미치는 대상에게 이야기를 들려줌을 나타냅니다.",
    level: "beginner",
    example: "爷爷给我讲了很多故事。",
    exampleKr: "할아버지께서 나에게 많은 이야기를 해주셨다.",
    expanded: "",
    translationKr: ""
  },
  29: {
    sentenceIndex: 29,
    sentence: "谁娶了多愁善感的你",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "谁娶了多愁善感的你",
    translationKr: "누가 감수성 예민했던 너와 결혼했을까"
  },
  30: {
    sentenceIndex: 30,
    sentence: "谁安慰爱哭的你",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "谁安慰爱哭的你",
    translationKr: "누가 울보였던 너를 위로해줄까"
  },
  31: {
    sentenceIndex: 31,
    sentence: "谁把你的长发盘起",
    structure: "把",
    explanation: "대상에 대한 구체적인 조치나 변화(머리를 올림)를 강조하는 문장 구조입니다.",
    level: "beginner",
    example: "我把照片洗出来了。",
    exampleKr: "나는 사진을 인화했다.",
    expanded: "",
    translationKr: ""
  },
  32: {
    sentenceIndex: 32,
    sentence: "谁给你做的嫁衣",
    structure: "给",
    explanation: "대상을 나타내는 전치사로, 다른 사람을 위해 어떠한 일을 함을 나타냅니다.",
    level: "beginner",
    example: "我给朋友买了一份礼物。",
    exampleKr: "나는 친구에게 줄 선물을 하나 샀다.",
    expanded: "",
    translationKr: ""
  },
  33: {
    sentenceIndex: 33,
    sentence: "啦啦啦",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "啦啦啦",
    translationKr: "라라라"
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return tongzhuodeniSentenceStructures[sentenceIndex] ?? undefined;
}

