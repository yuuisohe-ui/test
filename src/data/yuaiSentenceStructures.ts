// 雨爱歌词句式训练数据
import { SentenceStructure } from './tianmimiSentenceStructures';

export const yuaiSentenceStructures: Record<number, SentenceStructure> = {
  2: {
    sentenceIndex: 2,
    sentence: "就像是 你多变的表情",
    structure: "就像……",
    explanation: "마치 ~와 같다는 의미로, 비유를 나타낼 때 사용합니다.",
    level: "beginner",
    example: "他就像我的亲哥哥一样。",
    exampleKr: "그는 마치 나의 친오빠 같아요.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "看不清 我也不想看清",
    structure: "V + 不 + C",
    explanation: "동사 뒤에 '不'와 보어(결과/방향)를 결합하여 동작의 결과를 실현할 수 없음을 나타내는 가능보어의 부정형입니다.",
    level: "intermediate",
    example: "字太小了，我看不清。",
    exampleKr: "글자가 너무 작아서 잘 보이지 않아요.",
    expanded: "",
    translationKr: ""
  },
  10: {
    sentenceIndex: 10,
    sentence: "你的呼吸像雨滴渗入我的爱里",
    structure: "像……",
    explanation: "상태나 성질이 비슷함을 나타내는 비교 구문입니다.",
    level: "beginner",
    example: "她的脸像红苹果。",
    exampleKr: "그녀의 얼굴은 빨간 사과 같아요.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "让想念继续 让爱变透明",
    structure: "让……",
    explanation: "사역동사로, '~로 하여금 ~하게 하다'라는 의미를 가집니다.",
    level: "intermediate",
    example: "请让我再想一想。",
    exampleKr: "제가 다시 한번 생각하게 해주세요.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "我爱上给我勇气的 Rainie love",
    structure: "V + 上",
    explanation: "동사 뒤에 '上'이 붙어 동작의 시작이나 상태의 고착, 또는 목적 달성을 나타내는 결과보어입니다.",
    level: "intermediate",
    example: "我爱上了这首歌曲。",
    exampleKr: "나는 이 노래를 사랑하게 되었어요.",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "屋内的湿气像储存爱你的记忆",
    structure: "像……",
    explanation: "A가 B와 같음을 비유할 때 사용합니다.",
    level: "beginner",
    example: "这朵云像一只小狗。",
    exampleKr: "이 구름은 강아지 한 마리 같아요.",
    expanded: "",
    translationKr: ""
  },
  18: {
    sentenceIndex: 18,
    sentence: "我相信我将会看到",
    structure: "将会……",
    explanation: "가까운 미래에 어떤 일이 발생할 것임을 나타낼 때 사용합니다.",
    level: "intermediate",
    example: "这种机会以后将会更多。",
    exampleKr: "이런 기회는 앞으로 더 많아질 것입니다.",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "你的呼吸像雨滴渗入我的爱里",
    structure: "像……",
    explanation: "두 사물의 유사성을 나타내는 비교문입니다.",
    level: "beginner",
    example: "他的长相很像他爸爸。",
    exampleKr: "그는 생김새가 아빠를 아주 많이 닮았어요.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "让想念继续 让爱变透明",
    structure: "让……",
    explanation: "대상에게 특정한 상태나 행동을 유발하게 할 때 쓰는 사역 구문입니다.",
    level: "intermediate",
    example: "这件事让我很伤心。",
    exampleKr: "이 일은 나를 매우 슬프게 합니다.",
    expanded: "",
    translationKr: ""
  },
  24: {
    sentenceIndex: 24,
    sentence: "我爱上给我勇气的 Rainie love",
    structure: "V + 上",
    explanation: "동작이 어떤 결과에 도달하여 정착됨을 나타냅니다.",
    level: "intermediate",
    example: "那个男孩爱上了摄影。",
    exampleKr: "그 소년은 사진 찍는 것에 빠졌습니다.",
    expanded: "",
    translationKr: ""
  },
  26: {
    sentenceIndex: 26,
    sentence: "屋内的湿气像储存爱你的记忆",
    structure: "像……",
    explanation: "특정 대상을 다른 대상에 빗대어 설명하는 표현입니다.",
    level: "beginner",
    example: "这个城市的夜晚像梦一样漂亮。",
    exampleKr: "이 도시의 밤은 꿈처럼 아름다워요.",
    expanded: "",
    translationKr: ""
  },
  29: {
    sentenceIndex: 29,
    sentence: "我相信我将会看到",
    structure: "将会……",
    explanation: "앞으로 일어날 상황에 대한 확신이나 추측을 나타냅니다.",
    level: "intermediate",
    example: "这一天将会到来。",
    exampleKr: "이날은 결국 오고야 말 것입니다.",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return yuaiSentenceStructures[sentenceIndex];
}


