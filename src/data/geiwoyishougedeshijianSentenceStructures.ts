// 给我一首歌的时间句式结构分析数据

import { SentenceStructure } from './tianmimiSentenceStructures';

// 每句歌词对应的句式结构分析
export const geiwoyishougedeshijianSentenceStructures: Record<number, SentenceStructure> = {
  1: {
    sentenceIndex: 1,
    sentence: "雨打湿了天空 晕开得很小心",
    structure: "……得……",
    explanation: "동사 뒤에 쓰여 동작의 상태나 정도를 묘사하는 정도보어 구조입니다.",
    level: "beginner",
    example: "他字写得很漂亮。",
    exampleKr: "그는 글씨를 아주 예쁘게 쓴다.",
    expanded: "",
    translationKr: ""
  },
  2: {
    sentenceIndex: 2,
    sentence: "你说你不懂 为何在这时牵手",
    structure: "为何",
    explanation: "'왜, 어째서'라는 뜻으로 '为什么'의 서면어 표현입니다.",
    level: "intermediate",
    example: "你为何如此伤心？",
    exampleKr: "너는 어찌하여 이토록 슬퍼하니?",
    expanded: "",
    translationKr: ""
  },
  3: {
    sentenceIndex: 3,
    sentence: "我晒干了沉默 悔得很冲动",
    structure: "……得……",
    explanation: "형용사 뒤에 쓰여 그 상태의 정도를 보충 설명합니다.",
    level: "beginner",
    example: "天黑得看不见路。",
    exampleKr: "날이 길을 볼 수 없을 정도로 어두워졌다.",
    expanded: "",
    translationKr: ""
  },
  4: {
    sentenceIndex: 4,
    sentence: "就算这是个错 也只怕错过",
    structure: "就算……也……",
    explanation: "'설령 ~할지라도 (역시) ~하다'라는 뜻의 양보 가정 접속사입니다.",
    level: "intermediate",
    example: "就算你不说，我也知道。",
    exampleKr: "설령 네가 말하지 않아도 나는 알고 있다.",
    expanded: "",
    translationKr: ""
  },
  5: {
    sentenceIndex: 5,
    sentence: "在一起叫梦 分开了叫痛",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "在一起的时候被称作梦，分开的时候被称作痛。",
    translationKr: "함께 있는 것은 꿈이라 부르고, 헤어지는 것은 아픔이라 불러요。"
  },
  6: {
    sentenceIndex: 6,
    sentence: "是不是你说 没有做完的梦最痛",
    structure: "是不是",
    explanation: "'~인가 아닌가' 혹은 '~이지?'라고 확인을 요청할 때 사용하는 정반의문문 형식입니다.",
    level: "beginner",
    example: "你是不是想回家了？",
    exampleKr: "너 집에 가고 싶은 거 아니니?",
    expanded: "",
    translationKr: ""
  },
  7: {
    sentenceIndex: 7,
    sentence: "迷路后的后果我能承受",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "迷路之后的后果，我全都能承受。",
    translationKr: "길을 잃은 뒤의 결과는 내가 감당할 수 있어요。"
  },
  8: {
    sentenceIndex: 8,
    sentence: "这最后的一个出口 在爱过了才有",
    structure: "……才……",
    explanation: "어떠한 조건이 충족된 후에야 비로소 결과가 발생함을 나타냅니다.",
    level: "beginner",
    example: "只有努力学习才能成功。",
    exampleKr: "오직 열심히 공부해야만 성공할 수 있다.",
    expanded: "",
    translationKr: ""
  },
  9: {
    sentenceIndex: 9,
    sentence: "呼",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "（语气词，表示呼气声）",
    translationKr: "후 (호흡하는 소리를 나타내는 감탄사)"
  },
  10: {
    sentenceIndex: 10,
    sentence: "能不能给我一首歌的时间",
    structure: "能不能……",
    explanation: "'~할 수 있는지 없는지'를 묻는 가능성 타진의 정반의문문입니다.",
    level: "beginner",
    example: "你能不能帮我一个忙？",
    exampleKr: "나를 좀 도와줄 수 있니?",
    expanded: "",
    translationKr: ""
  },
  11: {
    sentenceIndex: 11,
    sentence: "把那拥抱紧紧弄作永远",
    structure: "把……",
    explanation: "대상을 어떻게 처치하거나 변화시켰는지를 강조하는 '把'자 구문입니다.",
    level: "beginner",
    example: "我把作业做完了。",
    exampleKr: "나는 숙제를 다 끝냈다.",
    expanded: "",
    translationKr: ""
  },
  12: {
    sentenceIndex: 12,
    sentence: "在我怀里 你不用害怕失眠",
    structure: "不用……",
    explanation: "'~할 필요가 없다'라는 뜻으로 금지나 불필요를 나타냅니다.",
    level: "beginner",
    example: "你不必担心，不用谢我。",
    exampleKr: "걱정할 것 없어, 고마워할 필요도 없고.",
    expanded: "",
    translationKr: ""
  },
  13: {
    sentenceIndex: 13,
    sentence: "如果你想忘记 我也可以失忆",
    structure: "如果……也……",
    explanation: "'만약 ~라면 (역시) ~하겠다'는 가정 구문입니다.",
    level: "beginner",
    example: "如果你去，我也去。",
    exampleKr: "만약 네가 간다면 나도 갈게.",
    expanded: "",
    translationKr: ""
  },
  14: {
    sentenceIndex: 14,
    sentence: "能不能给我一首歌的时间",
    structure: "能不能……",
    explanation: "동사 앞에 사용되어 허가나 능력을 묻는 정반의문문입니다.",
    level: "beginner",
    example: "能不能让我进去看一看？",
    exampleKr: "내가 들어가서 한 번 봐도 될까?",
    expanded: "",
    translationKr: ""
  },
  15: {
    sentenceIndex: 15,
    sentence: "说声再见 在故事完结之前",
    structure: "在……之前",
    explanation: "'~하기 전에'라는 시간적 순서를 나타내는 구문입니다.",
    level: "beginner",
    example: "在吃饭之前要洗手。",
    exampleKr: "밥 먹기 전에 손을 씻어야 한다.",
    expanded: "",
    translationKr: ""
  },
  16: {
    sentenceIndex: 16,
    sentence: "送我的眼泪 让它留在雨间",
    structure: "让……",
    explanation: "'~로 하여금 ~하게 하다'라는 뜻의 사동문입니다.",
    level: "beginner",
    example: "老师让我回答问题。",
    exampleKr: "선생님께서 나에게 질문에 답하게 하셨다.",
    expanded: "",
    translationKr: ""
  },
  17: {
    sentenceIndex: 17,
    sentence: "越过你划的线 我定了勇气的终点",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "我越过你所划下的界线，决定了勇气的终点。",
    translationKr: "당신이 그어놓은 선을 넘어, 나는 용기의 종점을 정했어요。"
  },
  18: {
    sentenceIndex: 18,
    sentence: "呼",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "（语气词）",
    translationKr: "후"
  },
  19: {
    sentenceIndex: 19,
    sentence: "雨打湿了天空 晕开得很小心",
    structure: "……得……",
    explanation: "동사 뒤에서 상태를 구체적으로 묘사하는 정도보어입니다.",
    level: "beginner",
    example: "这顿饭做得非常好吃。",
    exampleKr: "이 밥은 아주 맛있게 지어졌다.",
    expanded: "",
    translationKr: ""
  },
  20: {
    sentenceIndex: 20,
    sentence: "你说你不懂 为何在这时牵手",
    structure: "为何",
    explanation: "이유를 묻는 의문사 '为什么'의 서면어입니다.",
    level: "intermediate",
    example: "你为何不接受我的建议？",
    exampleKr: "너는 어째서 내 제안을 받아들이지 않니?",
    expanded: "",
    translationKr: ""
  },
  21: {
    sentenceIndex: 21,
    sentence: "我晒干了沉默 悔得很冲动",
    structure: "……得……",
    explanation: "형용사 뒤에 정도를 보충하는 보어 구조입니다.",
    level: "beginner",
    example: "他高兴得跳了起来。",
    exampleKr: "그는 너무 기뻐서 껑충 뛰어올랐다.",
    expanded: "",
    translationKr: ""
  },
  22: {
    sentenceIndex: 22,
    sentence: "就算这是个错 也只怕错过",
    structure: "就算……也……",
    explanation: "극단적인 상황을 가정할 때 사용하는 접속사입니다.",
    level: "intermediate",
    example: "就算工作再忙，也要注意身体。",
    exampleKr: "설령 업무가 아무리 바빠도 건강에 주의해야 한다.",
    expanded: "",
    translationKr: ""
  },
  23: {
    sentenceIndex: 23,
    sentence: "在一起叫梦 分开了叫痛",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "在一起被称作一场梦，分开的时候被称作一种痛。",
    translationKr: "함께 있음은 꿈이라 불리고, 헤어짐은 아픔이라 불러요。"
  },
  24: {
    sentenceIndex: 24,
    sentence: "是不是你说 没有做完的梦最痛",
    structure: "是不是",
    explanation: "상대방의 동의를 구하거나 확인을 할 때 사용하는 의문 형식입니다.",
    level: "beginner",
    example: "是不是你把灯关了？",
    exampleKr: "네가 불을 끈 거니?",
    expanded: "",
    translationKr: ""
  },
  25: {
    sentenceIndex: 25,
    sentence: "迷路后的后果我能承受",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "迷失方向之后的后果，我能够自己承受。",
    translationKr: "길을 잃은 뒤의 결과는 내가 감당할 수 있어요。"
  },
  26: {
    sentenceIndex: 26,
    sentence: "这最后的一个出口 在爱过了才有",
    structure: "……才……",
    explanation: "조건이 충족된 뒤의 결과를 나타내는 부사입니다.",
    level: "beginner",
    example: "他下午三点才来公司。",
    exampleKr: "그는 오후 3시가 되어서야 비로소 회사에 왔다.",
    expanded: "",
    translationKr: ""
  },
  27: {
    sentenceIndex: 27,
    sentence: "能不能给我一首歌的时间",
    structure: "能不能……",
    explanation: "정반의문문을 사용하여 정중하게 부탁하거나 가능성을 묻습니다.",
    level: "beginner",
    example: "能不能借我一支笔用用？",
    exampleKr: "나한테 펜 하나만 빌려줄 수 있니?",
    expanded: "",
    translationKr: ""
  },
  28: {
    sentenceIndex: 28,
    sentence: "把那拥抱紧紧弄作永远",
    structure: "把……",
    explanation: "목적어를 동사 앞으로 끌어내어 처치를 강조합니다.",
    level: "beginner",
    example: "请把门关上。",
    exampleKr: "문을 닫아 주세요.",
    expanded: "",
    translationKr: ""
  },
  29: {
    sentenceIndex: 29,
    sentence: "在我怀里 你不用害怕失眠",
    structure: "不用……",
    explanation: "불필요한 상황을 나타내는 조동사적 표현입니다.",
    level: "beginner",
    example: "你不用天天都来这里。",
    exampleKr: "너는 매일 여기에 올 필요 없어.",
    expanded: "",
    translationKr: ""
  },
  30: {
    sentenceIndex: 30,
    sentence: "如果你想忘记 我也可以失忆",
    structure: "如果……也……",
    explanation: "가정 상황에 따른 결과를 나타내는 구문입니다.",
    level: "beginner",
    example: "如果天气好，我也想出去散步。",
    exampleKr: "만약 날씨가 좋다면 나도 산책하러 나가고 싶어.",
    expanded: "",
    translationKr: ""
  },
  31: {
    sentenceIndex: 31,
    sentence: "能不能给我一首歌的时间",
    structure: "能不能……",
    explanation: "상대의 의향을 묻는 정중한 질문 형식입니다.",
    level: "beginner",
    example: "能不能请你跳支舞？",
    exampleKr: "춤 한 번 같이 추실 수 있을까요?",
    expanded: "",
    translationKr: ""
  },
  32: {
    sentenceIndex: 32,
    sentence: "说声再见 在故事完结之前",
    structure: "在……之前",
    explanation: "특정 사건이나 시점 앞을 나타냅니다.",
    level: "beginner",
    example: "在离开之前，请检查一下随身物品。",
    exampleKr: "떠나기 전에 소지품을 확인해 주세요.",
    expanded: "",
    translationKr: ""
  },
  33: {
    sentenceIndex: 33,
    sentence: "送我的眼泪 让它留在雨间",
    structure: "让……",
    explanation: "피동의 의미가 섞인 사동문으로, 어떤 상태를 유지하게 함을 나타냅니다.",
    level: "beginner",
    example: "先让他冷静一下。",
    exampleKr: "먼저 그가 진정하게 해라.",
    expanded: "",
    translationKr: ""
  },
  34: {
    sentenceIndex: 34,
    sentence: "越过你划的线 我定了勇气的终点",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "越过你所划出的分界线，我确定了这份勇气的最后终点。",
    translationKr: "당신이 그은 선을 넘어, 나는 용기의 종점을 정했습니다。"
  },
  35: {
    sentenceIndex: 35,
    sentence: "你说我不该不该",
    structure: "不该",
    explanation: "'~해서는 안 된다'라는 뜻의 조동사 '不应该'의 줄임말입니다.",
    level: "beginner",
    example: "你不该对他撒谎。",
    exampleKr: "너는 그에게 거짓말을 해서는 안 된다.",
    expanded: "",
    translationKr: ""
  },
  36: {
    sentenceIndex: 36,
    sentence: "不该在这时说了我爱你",
    structure: "不该……",
    explanation: "후회나 부적절함을 나타내는 금지 표현입니다.",
    level: "beginner",
    example: "我不该买这么多东西。",
    exampleKr: "나는 이렇게 많은 물건을 사지 말았어야 했다.",
    expanded: "",
    translationKr: ""
  },
  37: {
    sentenceIndex: 37,
    sentence: "要怎么证明我没有力气撒谎",
    structure: "怎么……",
    explanation: "방법이나 방식을 묻는 의문사입니다.",
    level: "beginner",
    example: "这个字怎么写？",
    exampleKr: "이 글자는 어떻게 쓰나요?",
    expanded: "",
    translationKr: ""
  },
  38: {
    sentenceIndex: 38,
    sentence: "请告诉我 暂停算不算放弃",
    structure: "算不算",
    explanation: "'~라고 할 수 있는가'를 묻는 정반의문门 형식입니다.",
    level: "intermediate",
    example: "这算不算违约？",
    exampleKr: "이것은 계약 위반이라고 할 수 있습니까?",
    expanded: "",
    translationKr: ""
  },
  39: {
    sentenceIndex: 39,
    sentence: "呼",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "（语气助词）",
    translationKr: "후"
  },
  40: {
    sentenceIndex: 40,
    sentence: "我只有一天的回忆",
    structure: "只有……",
    explanation: "'오직 ~만 있다'라는 뜻으로 범위를 한정할 때 사용합니다.",
    level: "beginner",
    example: "我只有这一个朋友。",
    exampleKr: "나는 오직 이 친구 한 명뿐이다.",
    expanded: "",
    translationKr: ""
  },
  41: {
    sentenceIndex: 41,
    sentence: "噢",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "（感叹词）",
    translationKr: "오"
  },
  42: {
    sentenceIndex: 42,
    sentence: "能不能给我一首歌的时间",
    structure: "能不能……",
    explanation: "상대방에게 정중하게 부탁을 할 때 사용하는 틀입니다.",
    level: "beginner",
    example: "能不能快一点儿？",
    exampleKr: "좀 더 빨리 해줄 수 있니?",
    expanded: "",
    translationKr: ""
  },
  43: {
    sentenceIndex: 43,
    sentence: "把那拥抱紧紧弄作永远",
    structure: "把……",
    explanation: "사물을 어떻게 처리하여 결과에 이르게 했는지 표현합니다.",
    level: "beginner",
    example: "请把书还给我。",
    exampleKr: "책을 나에게 돌려주세요.",
    expanded: "",
    translationKr: ""
  },
  44: {
    sentenceIndex: 44,
    sentence: "在我怀里 你不用害怕失眠",
    structure: "不用……",
    explanation: "강한 필요가 없음을 나타낼 때 사용합니다.",
    level: "beginner",
    example: "不用找钱了。",
    exampleKr: "거스름돈은 안 주셔도 돼요.",
    expanded: "",
    translationKr: ""
  },
  45: {
    sentenceIndex: 45,
    sentence: "如果你想忘记 我也可以失忆",
    structure: "如果……也……",
    explanation: "조건적 가정을 나타내는 접속사 호응 구조입니다.",
    level: "beginner",
    example: "如果你有空，我们也一起去吃饭吧。",
    exampleKr: "만약 시간이 있다면 우리 같이 밥 먹으러 가요.",
    expanded: "",
    translationKr: ""
  },
  46: {
    sentenceIndex: 46,
    sentence: "能不能给我一首歌的时间",
    structure: "能不能……",
    explanation: "능력이나 상황적 가능성을 묻습니다.",
    level: "beginner",
    example: "明天你能不能来参加聚会？",
    exampleKr: "내일 너 모임에 올 수 있니?",
    expanded: "",
    translationKr: ""
  },
  47: {
    sentenceIndex: 47,
    sentence: "噢",
    structure: "",
    explanation: "",
    level: "beginner",
    example: "",
    exampleKr: "",
    expanded: "（感叹词）",
    translationKr: "오"
  },
  48: {
    sentenceIndex: 48,
    sentence: "说声再见 在故事完结之前",
    structure: "在……之前",
    explanation: "시간의 앞뒤 관계를 나타낼 때 필수적인 표현입니다.",
    level: "beginner",
    example: "在开会之前，请先把资料发给大家。",
    exampleKr: "회의 시작 전에 먼저 자료를 모두에게 발송해 주세요.",
    expanded: "",
    translationKr: ""
  },
  49: {
    sentenceIndex: 49,
    sentence: "送我的眼泪 让它留在雨间",
    structure: "让……",
    explanation: "다른 대상이 어떤 상태에 있게 하거나 행동하게 할 때 씁니다.",
    level: "beginner",
    example: "别让孩子在外面玩得太久。",
    exampleKr: "아이가 밖에서 너무 오래 놀게 하지 마라.",
    expanded: "",
    translationKr: ""
  },
  50: {
    sentenceIndex: 50,
    sentence: "越过你划的线 我定了勇气的终点",
    structure: "",
    explanation: "",
    level: "intermediate",
    example: "",
    exampleKr: "",
    expanded: "越过你所划出的分界线，我确定了这份勇气的最后终点。",
    translationKr: "당신이 그은 선을 넘어, 나는 용기의 종점을 정했습니다。"
  },
  51: {
    sentenceIndex: 51,
    sentence: "你说我不该",
    structure: "不该",
    explanation: "'불응해(不应该)'의 단축형으로 당위성의 부정을 나타냅니다.",
    level: "beginner",
    example: "我不该这么晚才回来。",
    exampleKr: "나는 이렇게 늦게 돌아오지 말았어야 했다.",
    expanded: "",
    translationKr: ""
  },
  52: {
    sentenceIndex: 52,
    sentence: "不该在这时说了我爱你",
    structure: "不该……",
    explanation: "어떤 행동을 한 것에 대한 후회나 잘못임을 나타냅니다.",
    level: "beginner",
    example: "他不该在公共场合抽烟。",
    exampleKr: "그는 공공장소에서 담배를 피워서는 안 됐다.",
    expanded: "",
    translationKr: ""
  },
  53: {
    sentenceIndex: 53,
    sentence: "要怎么证明我没有力气",
    structure: "怎么……",
    explanation: "방식이나 도리를 물을 때 사용합니다.",
    level: "beginner",
    example: "你怎么没去上学？",
    exampleKr: "너 왜 학교에 안 갔니? (어찌된 일이니?)",
    expanded: "",
    translationKr: ""
  },
  54: {
    sentenceIndex: 54,
    sentence: "告诉我 暂停算不算放弃",
    structure: "算不算",
    explanation: "판단의 기준이나 정의를 묻는 의문 형식입니다.",
    level: "intermediate",
    example: "这算不算是一个奇迹？",
    exampleKr: "이것을 기적이라고 할 수 있을까요?",
    expanded: "",
    translationKr: ""
  },
  55: {
    sentenceIndex: 55,
    sentence: "我说我不该不该",
    structure: "不该",
    explanation: "스스로의 행동에 대한 반성이나 부정적 당위를 나타냅니다.",
    level: "beginner",
    example: "我们不该浪费时间。",
    exampleKr: "우리는 시간을 낭비해서는 안 된다.",
    expanded: "",
    translationKr: ""
  },
  56: {
    sentenceIndex: 56,
    sentence: "不该在这时说了我爱你",
    structure: "不该……",
    explanation: "특정 시점의 행동이 적절하지 않았음을 나타냅니다.",
    level: "beginner",
    example: "你不该在大家面前哭。",
    exampleKr: "너는 사람들 앞에서 울어서는 안 됐다.",
    expanded: "",
    translationKr: ""
  },
  57: {
    sentenceIndex: 57,
    sentence: "要怎么证明我没有力气",
    structure: "怎么……",
    explanation: "해결 방법이나 상황의 연유를 묻습니다.",
    level: "beginner",
    example: "我要怎么才能找到他？",
    exampleKr: "내가 어떻게 해야 그를 찾을 수 있을까?",
    expanded: "",
    translationKr: ""
  },
  58: {
    sentenceIndex: 58,
    sentence: "我只有一天的回忆",
    structure: "只有……",
    explanation: "수량이나 범위가 매우 적음을 한정하여 강조합니다.",
    level: "beginner",
    example: "车上只有两三个人。",
    exampleKr: "차 안에는 겨우 두세 사람뿐이다.",
    expanded: "",
    translationKr: ""
  }
};

// 获取指定句子的句式结构
export function getSentenceStructure(sentenceIndex: number): SentenceStructure | undefined {
  return geiwoyishougedeshijianSentenceStructures[sentenceIndex] ?? undefined;
}

