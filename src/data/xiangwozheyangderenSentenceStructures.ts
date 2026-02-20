// 像我这样的人句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析（跳过订阅提示的句子）
export const xiangwozheyangderenSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "像我这样优秀的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'이라는 의미로, 대상을 비유하거나 예시를 들 때 사용합니다.",
    level: "beginner",
    example: "像他这样努力的人很少。",
    exampleKr: "그처럼 노력하는 사람은 드뭅니다.",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "本该灿烂过一生",
    structure: "本该……",
    explanation: "'본래 ~했어야 한다'라는 의미로, 마땅히 그래야 했지만 실제로는 그렇지 못한 상황에 대한 아쉬움을 나타냅니다.",
    level: "intermediate",
    example: "我本该早点告诉你的。",
    exampleKr: "본래 너에게 좀 더 일찍 말했어야 했어.",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "怎么二十多年到头来  还在人海里浮沉",
    structure: "到头来……",
    explanation: "'결국', '끝내'라는 의미로, 오랜 과정 끝에 (주로 부정적인) 결과에 도달했음을 나타냅니다.",
    level: "intermediate",
    example: "他忙了半天，到头来却一场空。",
    exampleKr: "그는 한참을 바쁘게 움직였지만, 결국 아무것도 얻지 못했다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "像我这样聪明的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'이라는 의미로 쓰이는 패턴입니다.",
    level: "beginner",
    example: "像你这样聪明的人一定能明白。",
    exampleKr: "당신같이 똑똑한 사람이라면 분명 이해할 수 있을 거예요.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "早就告别了单纯",
    structure: "早就……了",
    explanation: "'진작에 ~했다', '이미 오래전에 ~했다'라는 의미로 어떤 동작이나 상태가 일찍 완료되었음을 강조합니다.",
    level: "beginner",
    example: "我早就知道了。",
    exampleKr: "나는 이미 진작부터 알고 있었다.",
    expanded: "",
    translationKr: ""
  },
  6: {
    sentenceIndex: 6,
    sentence: "怎么还是用了一段情  去换一身伤痕",
    structure: "用……去换……",
    explanation: "A를 사용하여 B로 바꾸다, 즉 'A를 대가로 B를 얻다'라는 의미를 나타냅니다.",
    level: "intermediate",
    example: "不要用健康去换取金钱。",
    exampleKr: "건강을 대가로 돈을 바꾸지 마세요.",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "像我这样迷茫的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'이라는 의미의 반복 사용입니다.",
    level: "beginner",
    example: "像这样的小事不用担心。",
    exampleKr: "이런 작은 일은 걱정할 필요 없어요.",
    expanded: "",
    translationKr: ""
  },
  8: {
    sentenceIndex: 8,
    sentence: "像我这样寻找的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'이라는 의미의 패턴입니다.",
    level: "beginner",
    example: "像这样的话，以后别说了。",
    exampleKr: "이런 말은 앞으로 하지 마세요.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "像我这样碌碌无为的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'이라는 의미의 패턴입니다.",
    level: "beginner",
    example: "像这样的机会以后可能不多了。",
    exampleKr: "이런 기회는 앞으로 많지 않을 수도 있어요.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "你还见过多少人",
    structure: "多少……",
    explanation: "'얼마나 많은'이라는 의미로 수량을 묻거나 감탄할 때 사용합니다.",
    level: "beginner",
    example: "这里的学生有多少人？",
    exampleKr: "여기 학생은 몇 명입니까?",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "像我这样庸俗的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 반복 표현입니다.",
    level: "beginner",
    example: "像他这样的人值得信任。",
    exampleKr: "그와 같은 사람은 신뢰할 만합니다.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "从不喜欢装深沉",
    structure: "从不……",
    explanation: "'한 번도 ~한 적 없다', '절대로 ~하지 않다'는 강한 부정을 의미합니다.",
    level: "intermediate",
    example: "他从不迟到。",
    exampleKr: "그는 결코 지각하는 법이 없다.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "怎么偶尔听到老歌时  忽然也晃了神",
    structure: "……时",
    explanation: "'~할 때'라는 의미로 특정 시간이나 상황을 나타냅니다.",
    level: "beginner",
    example: "吃饭时不要说话。",
    exampleKr: "밥 먹을 때 말하지 마세요.",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "像我这样懦弱的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像这种天气最好待在家里。",
    exampleKr: "이런 날씨에는 집에 있는 것이 가장 좋습니다.",
    expanded: "",
    translationKr: ""
  },
  16: {
    sentenceIndex: 16,
    sentence: "凡事都要留几分",
    structure: "凡事……都……",
    explanation: "'모든 일에 있어서 ~하다', '무슨 일이든 다 ~하다'라는 의미입니다.",
    level: "intermediate",
    example: "凡事都要有个度。",
    exampleKr: "모든 일에는 정도가 있어야 한다.",
    expanded: "",
    translationKr: ""
  },
  17: {
    sentenceIndex: 17,
    sentence: "怎么曾经也会为了谁  想过奋不顾身",
    structure: "为了……",
    explanation: "'~를 위하여', '~를 목적으로'라는 의미로 대상이나 목적을 나타냅니다.",
    level: "beginner",
    example: "为了理想，他决定出国留学。",
    exampleKr: "이상을 위해 그는 유학을 가기로 결정했다.",
    expanded: "",
    translationKr: ""
  },
  18: {
    sentenceIndex: 18,
    sentence: "像我这样迷茫的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像这样的人才很难得。",
    exampleKr: "이런 인재는 얻기 힘듭니다.",
    expanded: "",
    translationKr: ""
  },
  19: {
    sentenceIndex: 19,
    sentence: "像我这样寻找的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像这种事经常发生。",
    exampleKr: "이런 일은 자주 일어납니다.",
    expanded: "",
    translationKr: ""
  },
  20: {
    sentenceIndex: 20,
    sentence: "像我这样碌碌无为的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像这样的问题很难回答。",
    exampleKr: "이런 질문은 대답하기 어렵습니다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "你还见过多少人",
    structure: "多少……",
    explanation: "수량을 묻는 '얼마나 많은'의 의미입니다.",
    level: "beginner",
    example: "你每天睡多少个小时？",
    exampleKr: "당신은 매일 몇 시간이나 자나요?",
    expanded: "",
    translationKr: ""
  },
  22: {
    sentenceIndex: 22,
    sentence: "像我这样孤单的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像你这样大方的人不多了。",
    exampleKr: "너처럼 마음이 넓은 사람은 많지 않아.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "像我这样傻的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像我这样想也没错吧？",
    exampleKr: "나처럼 생각하는 것도 틀린 건 아니지?",
    expanded: "",
    translationKr: ""
  },
  24: {
    sentenceIndex: 24,
    sentence: "像我这样不甘平凡的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像他这样坚持到底的人最终会成功。",
    exampleKr: "그처럼 끝까지 버티는 사람은 결국 성공할 것입니다.",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "世界上有多少人",
    structure: "有……多少……",
    explanation: "어떤 장소나 범위 안에 수량이 얼마나 있는지 묻거나 나타낼 때 사용합니다.",
    level: "beginner",
    example: "这个班有多少学生？",
    exampleKr: "이 반에 학생이 몇 명 있습니까?",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "像我这样莫名其妙的人",
    structure: "像……这样……",
    explanation: "'~와 같은 이런 ~한 (사람/것)'의 패턴입니다.",
    level: "beginner",
    example: "像你这样说，我也没办法。",
    exampleKr: "네가 그렇게 말하면 나도 어쩔 수 없어.",
    expanded: "",
    translationKr: ""
  },
  27: {
    sentenceIndex: 27,
    sentence: "会不会有人心疼",
    structure: "会不会……",
    explanation: "'~할까 안 할까?', '~일까 아닐까?' 하는 추측이나 의문을 나타냅니다.",
    level: "beginner",
    example: "明天会不会下雨？",
    exampleKr: "내일 비가 올까요?",
    expanded: "",
    translationKr: ""
  }
};

