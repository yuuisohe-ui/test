// 你要的全拿走歌词词汇分析数据
// 根据每句歌词提供词汇难度分级

import { WordAnalysis } from './tianmimiVocab';

// 每句歌词对应的词汇分析（从md文件中提取，共101句）
export const niyaodequannazousVocabAnalysis: Record<number, WordAnalysis[]> = {
  1: [
    {
      word: "开头",
      pinyin: "kāi tóu",
      level: "basic",
      meaning: "beginning",
      meaningKr: "시작",
      example: "故事的开头非常吸引人。",
      exampleKr: "이야기의 시작은 매우 매력적이다."
    }
  ],
  2: [
    {
      word: "结果",
      pinyin: "jié guǒ",
      level: "basic",
      meaning: "result",
      meaningKr: "결과",
      example: "比赛的结果让人感到意外。",
      exampleKr: "경기 결과가 사람들을 놀라게 했다."
    }
  ],
  3: [
    {
      word: "分寸",
      pinyin: "fēn cùn",
      level: "advanced",
      meaning: "propriety; sense of measure",
      meaningKr: "분촌; 절도",
      example: "他说话做事很有分寸。",
      exampleKr: "그는 말하고 행동하는 데 절도가 있다."
    }
  ],
  4: [
    {
      word: "气氛",
      pinyin: "qì fēn",
      level: "intermediate",
      meaning: "atmosphere",
      meaningKr: "분위기",
      example: "晚会的气氛非常热烈。",
      exampleKr: "파티 분위기가 매우 뜨거웠다."
    }
  ],
  5: [
    {
      word: "库存",
      pinyin: "kù cún",
      level: "advanced",
      meaning: "stock; inventory",
      meaningKr: "재고",
      example: "这种商品的库存已经不多了。",
      exampleKr: "이 상품의 재고가 이미 얼마 남지 않았다."
    }
  ],
  6: [
    {
      word: "认真",
      pinyin: "rèn zhēn",
      level: "basic",
      meaning: "serious; conscientious",
      meaningKr: "진지하다; 성실하다",
      example: "他学习的态度很认真。",
      exampleKr: "그의 공부 태도는 매우 진지하다."
    }
  ],
  7: [
    {
      word: "敷衍",
      pinyin: "fū yan",
      level: "advanced",
      meaning: "to act perfunctorily",
      meaningKr: "건성으로 대하다",
      example: "不要总是敷衍你的工作。",
      exampleKr: "일을 항상 건성으로 하지 마라."
    }
  ],
  8: [
    {
      word: "套路",
      pinyin: "tào lù",
      level: "intermediate",
      meaning: "routine; trick; cliché",
      meaningKr: "상투적인 수단; 정석",
      example: "这都是常见的营销套路。",
      exampleKr: "이것들은 모두 흔한 마케팅 수단이다."
    }
  ],
  9: [
    {
      word: "苍白",
      pinyin: "cāng bái",
      level: "advanced",
      meaning: "pale; weak",
      meaningKr: "창백하다; 빈약하다",
      example: "他的解释在事实面前显得很苍白。",
      exampleKr: "그의 설명은 사실 앞에서 매우 빈약해 보였다."
    }
  ],
  10: [
    {
      word: "留恋",
      pinyin: "liú liàn",
      level: "intermediate",
      meaning: "to be reluctant to leave",
      meaningKr: "미련을 두다; 그리워하다",
      example: "他很留恋在上海生活的日子。",
      exampleKr: "그는 상하이에서 생활하던 날들을 매우 그리워한다."
    }
  ],
  11: [
    {
      word: "随便",
      pinyin: "suí biàn",
      level: "basic",
      meaning: "casual; as one pleases",
      meaningKr: "마음대로; 함부로",
      example: "这种事不能随便决定。",
      exampleKr: "이런 일은 함부로 결정해서는 안 된다."
    }
  ],
  12: [
    {
      word: "拿走",
      pinyin: "ná zǒu",
      level: "basic",
      meaning: "take away",
      meaningKr: "가져가다",
      example: "请把这些垃圾拿走。",
      exampleKr: "이 쓰레기들을 가져가 주세요."
    }
  ],
  13: [
    {
      word: "回忆",
      pinyin: "huí yì",
      level: "intermediate",
      meaning: "memory; to recall",
      meaningKr: "추억; 회상하다",
      example: "童年的回忆总是美好的。",
      exampleKr: "어린 시절의 추억은 언제나 아름답다."
    }
  ],
  14: [
    {
      word: "在乎",
      pinyin: "zài hu",
      level: "intermediate",
      meaning: "to care about",
      meaningKr: "신경 쓰다; 중시하다",
      example: "我不在乎别人怎么看我。",
      exampleKr: "나는 남들이 나를 어떻게 보는지 신경 쓰지 않는다."
    }
  ],
  15: [
    {
      word: "体面",
      pinyin: "tǐ miàn",
      level: "advanced",
      meaning: "decent; dignity; face",
      meaningKr: "체면; 점잖다",
      example: "人活着总要留点体面。",
      exampleKr: "사람이 살면서 어느 정도 체면은 차려야 한다."
    }
  ],
  16: [
    {
      word: "赠品",
      pinyin: "zèng pǐn",
      level: "intermediate",
      meaning: "free gift",
      meaningKr: "증정품; 사은품",
      example: "这个化妆品附送很多赠品。",
      exampleKr: "이 화장품은 많은 증정품을 함께 준다."
    }
  ],
  17: [
    {
      word: "迁就",
      pinyin: "qiān jiù",
      level: "advanced",
      meaning: "to yield; to accommodate",
      meaningKr: "비위를 맞추다; 양보하다",
      example: "一味迁就并不能解决矛盾。",
      exampleKr: "무조건 맞춰주는 것만으로는 갈등을 해결할 수 없다."
    }
  ],
  18: [
    {
      word: "借口",
      pinyin: "jiè kǒu",
      level: "intermediate",
      meaning: "excuse",
      meaningKr: "핑계",
      example: "迟到不需要任何借口。",
      exampleKr: "지각에는 어떤 핑계도 필요 없다."
    }
  ],
  19: [
    {
      word: "遍",
      pinyin: "biàn",
      level: "basic",
      meaning: "measure word for actions",
      meaningKr: "번; 회",
      example: "请再说一遍。",
      exampleKr: "다시 한 번 말씀해 주세요."
    }
  ],
  20: [
    {
      word: "百口莫辩",
      pinyin: "bǎi kǒu mò biàn",
      level: "advanced",
      meaning: "beyond explanation; cannot clear oneself",
      meaningKr: "백 가지 입이 있어도 변명할 길이 없다",
      example: "面对证据，他感到百口莫辩。",
      exampleKr: "증거 앞에서 그는 변명할 길이 없음을 느꼈다."
    }
  ],
  21: [
    {
      word: "兑现",
      pinyin: "duì xiàn",
      level: "advanced",
      meaning: "to fulfill (a promise); to cash",
      meaningKr: "약속을 이행하다; 현금으로 바꾸다",
      example: "既然答应了，就要兑现诺言。",
      exampleKr: "약속했다면 그 약속을 이행해야 한다."
    }
  ],
  22: [
    {
      word: "贪得无厌",
      pinyin: "tān dé wú yàn",
      level: "advanced",
      meaning: "insatiable greed",
      meaningKr: "탐욕이 끝이 없다",
      example: "这种贪得无厌的行为让人反感。",
      exampleKr: "이런 끝없는 탐욕은 반감을 불러일으킨다."
    }
  ],
  23: [
    {
      word: "尊严",
      pinyin: "zūn yán",
      level: "advanced",
      meaning: "dignity",
      meaningKr: "존엄; 위엄",
      example: "维护尊严比金钱更重要。",
      exampleKr: "존엄을 지키는 것이 돈보다 더 중요하다."
    }
  ],
  24: [
    {
      word: "干脆",
      pinyin: "gān cuì",
      level: "intermediate",
      meaning: "straightforward; simply",
      meaningKr: "명쾌하다; 차라리",
      example: "他回答得很干脆。",
      exampleKr: "그는 매우 명쾌하게 대답했다."
    }
  ],
  25: [
    {
      word: "拿走",
      pinyin: "ná zǒu",
      level: "basic",
      meaning: "take away",
      meaningKr: "가져가다",
      example: "把你的东西全都拿走。",
      exampleKr: "네 물건을 다 가져가라."
    }
  ],
  26: [
    {
      word: "承受",
      pinyin: "chéng shòu",
      level: "intermediate",
      meaning: "to bear; to endure",
      meaningKr: "감당하다; 견디다",
      example: "他承受了巨大的工作压力。",
      exampleKr: "그는 막대한 업무 압박을 견디고 있다."
    }
  ],
  27: [
    {
      word: "留下",
      pinyin: "liú xià",
      level: "basic",
      meaning: "to leave behind; to stay",
      meaningKr: "남기다; 머무르다",
      example: "他留下了联系方式。",
      exampleKr: "그는 연락처를 남겼다."
    }
  ],
  28: [
    {
      word: "别管",
      pinyin: "bié guǎn",
      level: "basic",
      meaning: "don't worry about; regardless",
      meaningKr: "~에 상관하지 마라",
      example: "你别管我，先去忙吧。",
      exampleKr: "나한테 상관하지 말고 먼저 가서 일 봐."
    }
  ],
  29: [
    {
      word: "宠",
      pinyin: "chǒng",
      level: "intermediate",
      meaning: "to spoil; to dote on",
      meaningKr: "귀여워하다; 총애하다",
      example: "父母非常宠爱这个小女儿。",
      exampleKr: "부모님은 이 막내딸을 아주 귀여워하신다."
    }
  ],
  30: [
    {
      word: "哪怕",
      pinyin: "nǎ pà",
      level: "intermediate",
      meaning: "even if",
      meaningKr: "설령 ~하더라도",
      example: "哪怕只有一点希望，我也要努力。",
      exampleKr: "설령 한 줄기 희망뿐일지라도 노력할 것이다."
    }
  ],
  31: [
    {
      word: "强求",
      pinyin: "qiáng qiú",
      level: "advanced",
      meaning: "to force; to insist on",
      meaningKr: "억지로 요구하다",
      example: "感情的事是不能强求的。",
      exampleKr: "감정의 문제는 억지로 요구할 수 없는 것이다."
    }
  ],
  32: [],
  33: [
    {
      word: "沉默寡言",
      pinyin: "chén mò guǎ yán",
      level: "advanced",
      meaning: "taciturn; of few words",
      meaningKr: "말수가 적고 침묵하다",
      example: "他性格内向，平时沉默寡言。",
      exampleKr: "그는 내성적인 성격이라 평소에 말수가 적다."
    }
  ],
  34: [
    {
      word: "好聚好散",
      pinyin: "hǎo jù hǎo sàn",
      level: "advanced",
      meaning: "to part on good terms",
      meaningKr: "좋게 만나고 좋게 헤어지다",
      example: "既然不爱了，我们就好聚好散吧。",
      exampleKr: "이제 사랑하지 않는다면 우리 좋게 헤어지자."
    }
  ],
  35: [
    {
      word: "消遣",
      pinyin: "xiāo qiǎn",
      level: "advanced",
      meaning: "pastime; to kill time",
      meaningKr: "심심풀이; 소일하다",
      example: "看电影是他最喜欢的消遣方式。",
      exampleKr: "영화 보기는 그가 가장 좋아하는 소일거리이다."
    }
  ],
  36: [
    {
      word: "特价",
      pinyin: "tè jià",
      level: "intermediate",
      meaning: "special price",
      meaningKr: "특가",
      example: "商场正在搞特价促销活动。",
      exampleKr: "쇼핑몰에서 특가 세일 행사를 하고 있다."
    }
  ],
  37: [
    {
      word: "接着",
      pinyin: "jiē zhe",
      level: "basic",
      meaning: "to follow; to continue",
      meaningKr: "이어서; 계속해서",
      example: "喝完水，他接着开始工作。",
      exampleKr: "물을 다 마신 후, 그는 계속해서 일을 시작했다."
    }
  ],
  38: [
    {
      word: "清点",
      pinyin: "qīng diǎn",
      level: "advanced",
      meaning: "to check; to make an inventory",
      meaningKr: "대조하여 하나하나 세다",
      example: "下班前需要清点一下货物。",
      exampleKr: "퇴근 전에 화물을 점검해야 한다."
    }
  ],
  39: [
    {
      word: "两不相欠",
      pinyin: "liǎng bù xiāng qiàn",
      level: "advanced",
      meaning: "to owe each other nothing",
      meaningKr: "서로 빚진 것이 없다",
      example: "从此以后，我们两不相欠。",
      exampleKr: "이제부터 우린 서로 빚진 게 없다."
    }
  ],
  40: [
    {
      word: "认真",
      pinyin: "rèn zhēn",
      level: "basic",
      meaning: "serious",
      meaningKr: "진지하다",
      example: "你看书的样子很认真。",
      exampleKr: "책을 보는 모습이 정말 진지하구나."
    }
  ],
  41: [
    {
      word: "敷衍",
      pinyin: "fū yan",
      level: "advanced",
      meaning: "perfunctory",
      meaningKr: "건성으로 대하다",
      example: "他总是用敷衍的态度对待生活。",
      exampleKr: "그는 항상 건성으로 삶을 대한다."
    }
  ],
  42: [
    {
      word: "情节",
      pinyin: "qíng jié",
      level: "intermediate",
      meaning: "plot; circumstances",
      meaningKr: "줄거리; 정황",
      example: "这部电影的情节非常感人。",
      exampleKr: "이 영화의 줄거리는 매우 감동적이다."
    }
  ],
  43: [
    {
      word: "台面",
      pinyin: "tái miàn",
      level: "advanced",
      meaning: "public; professional standards",
      meaningKr: "공석; 체면",
      example: "这种事不能摆上台面来说。",
      exampleKr: "이런 일은 공론화해서 말할 수 없다."
    }
  ],
  44: [
    {
      word: "留恋",
      pinyin: "liú liàn",
      level: "intermediate",
      meaning: "reluctant to part",
      meaningKr: "미련을 두다",
      example: "她对故乡充满了留恋。",
      exampleKr: "그녀는 고향에 대한 미련이 가득하다."
    }
  ],
  45: [
    {
      word: "随便",
      pinyin: "suí biàn",
      level: "basic",
      meaning: "casual",
      meaningKr: "함부로; 마음대로",
      example: "请坐，大家随便一点。",
      exampleKr: "앉으세요, 다들 편하게 계세요."
    }
  ],
  46: [
    {
      word: "拿走",
      pinyin: "ná zǒu",
      level: "basic",
      meaning: "take away",
      meaningKr: "가져가다",
      example: "把这些书拿走吧。",
      exampleKr: "이 책들을 가져가세요."
    }
  ],
  47: [
    {
      word: "回忆",
      pinyin: "huí yì",
      level: "intermediate",
      meaning: "memory",
      meaningKr: "추억",
      example: "这段回忆我永远不会忘记。",
      exampleKr: "이 추억을 나는 영원히 잊지 못할 것이다."
    }
  ],
  48: [
    {
      word: "在乎",
      pinyin: "zài hu",
      level: "intermediate",
      meaning: "to care about",
      meaningKr: "신경 쓰다",
      example: "他很在乎家人的看法。",
      exampleKr: "그는 가족의 시선을 매우 신경 쓴다."
    }
  ],
  49: [
    {
      word: "体面",
      pinyin: "tǐ miàn",
      level: "advanced",
      meaning: "decent; dignity",
      meaningKr: "체면",
      example: "穿上一身体面的衣服。",
      exampleKr: "단정한 옷을 차려입다."
    }
  ],
  50: [
    {
      word: "附送",
      pinyin: "fù sòng",
      level: "intermediate",
      meaning: "to give as a bonus",
      meaningKr: "증정하다",
      example: "买一送一，还附送精美礼品。",
      exampleKr: "1+1 행사에 사은품까지 증정합니다."
    }
  ],
  51: [
    {
      word: "迁就",
      pinyin: "qiān jiù",
      level: "advanced",
      meaning: "to yield to",
      meaningKr: "맞추다",
      example: "迁就别人有时会让自己很累。",
      exampleKr: "남에게만 맞추다 보면 가끔 자신이 피곤해진다."
    }
  ],
  52: [
    {
      word: "借口",
      pinyin: "jiè kǒu",
      level: "intermediate",
      meaning: "excuse",
      meaningKr: "핑계",
      example: "生病只是他不参加活动的借口。",
      exampleKr: "아픈 건 그가 활동에 참가하지 않으려는 핑계일 뿐이다."
    }
  ],
  53: [
    {
      word: "一遍",
      pinyin: "yí biàn",
      level: "basic",
      meaning: "once; one time",
      meaningKr: "한 번",
      example: "老师把规则讲了一遍。",
      exampleKr: "선생님이 규칙을 한 번 설명해 주셨다."
    }
  ],
  54: [
    {
      word: "百口莫辩",
      pinyin: "bǎi kǒu mò biàn",
      level: "advanced",
      meaning: "beyond explanation",
      meaningKr: "변명할 길이 없다",
      example: "他现在真是百口莫辩。",
      exampleKr: "그는 지금 정말로 변명할 길이 없다."
    }
  ],
  55: [
    {
      word: "兑现",
      pinyin: "duì xiàn",
      level: "advanced",
      meaning: "to fulfill",
      meaningKr: "이행하다",
      example: "诺言如果不兑现就没有意义。",
      exampleKr: "약속은 이행하지 않으면 의미가 없다."
    }
  ],
  56: [
    {
      word: "贪得无厌",
      pinyin: "tān dé wú yàn",
      level: "advanced",
      meaning: "insatiable greed",
      meaningKr: "탐욕스럽다",
      example: "贪得无厌的人很难获得真正的快乐。",
      exampleKr: "탐욕스러운 사람은 진정한 행복을 얻기 어렵다."
    }
  ],
  57: [
    {
      word: "尊严",
      pinyin: "zūn yán",
      level: "advanced",
      meaning: "dignity",
      meaningKr: "존엄",
      example: "每个人都应当拥有尊严。",
      exampleKr: "모든 사람은 존엄성을 가져야 한다."
    }
  ],
  58: [
    {
      word: "干脆",
      pinyin: "gān cuì",
      level: "intermediate",
      meaning: "straightforward",
      meaningKr: "차라리; 명쾌하다",
      example: "既然不想去，干脆就拒绝吧。",
      exampleKr: "가기 싫으면 차라리 거절해라."
    }
  ],
  59: [
    {
      word: "拿走",
      pinyin: "ná zǒu",
      level: "basic",
      meaning: "take away",
      meaningKr: "가져가다",
      example: "把这些拿走。",
      exampleKr: "이것들을 가져가."
    }
  ],
  60: [
    {
      word: "承受",
      pinyin: "chéng shòu",
      level: "intermediate",
      meaning: "to bear",
      meaningKr: "감당하다",
      example: "他已经无法承受更多压力了。",
      exampleKr: "그는 더 이상의 압박을 감당할 수 없다."
    }
  ],
  61: [
    {
      word: "留下",
      pinyin: "liú xià",
      level: "basic",
      meaning: "leave behind",
      meaningKr: "남기다",
      example: "在心里留下了一道伤痕。",
      exampleKr: "마음에 상처를 남겼다."
    }
  ],
  62: [
    {
      word: "别管",
      pinyin: "bié guǎn",
      level: "basic",
      meaning: "don't bother",
      meaningKr: "상관하지 마라",
      example: "别管那些闲言碎语。",
      exampleKr: "그런 쓸데없는 말들에 상관하지 마."
    }
  ],
  63: [
    {
      word: "宠",
      pinyin: "chǒng",
      level: "intermediate",
      meaning: "to spoil",
      meaningKr: "귀여워하다",
      example: "这个孩子被宠坏了。",
      exampleKr: "이 아이는 너무 오냐오냐해서 버릇이 없어졌다."
    }
  ],
  64: [
    {
      word: "痛",
      pinyin: "tòng",
      level: "basic",
      meaning: "pain",
      meaningKr: "아픔",
      example: "我的心真的很痛。",
      exampleKr: "내 마음이 정말 아프다."
    }
  ],
  65: [
    {
      word: "强求",
      pinyin: "qiáng qiú",
      level: "advanced",
      meaning: "to force",
      meaningKr: "억지로 구하다",
      example: "顺其自然，不要强求。",
      exampleKr: "순리에 맡기고 억지로 구하지 마라."
    }
  ],
  66: [],
  67: [
    {
      word: "沉默寡言",
      pinyin: "chén mò guǎ yán",
      level: "advanced",
      meaning: "taciturn",
      meaningKr: "말수가 적다",
      example: "他工作时总是沉默寡言。",
      exampleKr: "그는 일할 때 항상 과묵하다."
    }
  ],
  68: [
    {
      word: "楚楚可怜",
      pinyin: "chǔ chǔ kě lián",
      level: "advanced",
      meaning: "pitiful; delicate",
      meaningKr: "가련하고 예쁘다",
      example: "她那副楚楚可怜的样子让人心碎。",
      exampleKr: "그녀의 가련한 모습이 사람들의 마음을 아프게 한다."
    }
  ],
  69: [
    {
      word: "消遣",
      pinyin: "xiāo qiǎn",
      level: "advanced",
      meaning: "to kill time",
      meaningKr: "소일하다",
      example: "下棋是他的一种消遣。",
      exampleKr: "바둑 두기는 그의 소일거리 중 하나다."
    }
  ],
  70: [
    {
      word: "贵贱",
      pinyin: "guì jiàn",
      level: "advanced",
      meaning: "noble or lowly; expensive or cheap",
      meaningKr: "귀천; 비싸고 쌈",
      example: "职业不分贵贱。",
      exampleKr: "직업에는 귀천이 없다."
    }
  ],
  71: [
    {
      word: "接着",
      pinyin: "jiē zhe",
      level: "basic",
      meaning: "to follow",
      meaningKr: "이어서",
      example: "一个接着一个地走进教室。",
      exampleKr: "하나둘씩 교실로 들어갔다."
    }
  ],
  72: [
    {
      word: "消灭",
      pinyin: "xiāo miè",
      level: "intermediate",
      meaning: "to eliminate; to perish",
      meaningKr: "소멸시키다",
      example: "我们要努力消灭贫困。",
      exampleKr: "우리는 빈곤을 없애기 위해 노력해야 한다."
    }
  ],
  73: [
    {
      word: "不相欠",
      pinyin: "bù xiāng qiàn",
      level: "advanced",
      meaning: "not owe each other",
      meaningKr: "빚진 것이 없다",
      example: "算清了账，我们就两不相欠了。",
      exampleKr: "계산이 끝났으니 이제 우린 서로 빚진 게 없다."
    }
  ],
  74: [
    {
      word: "拿走",
      pinyin: "ná zǒu",
      level: "basic",
      meaning: "take away",
      meaningKr: "가져가다",
      example: "把你的东西拿走。",
      exampleKr: "네 물건 가져가."
    }
  ],
  75: [
    {
      word: "回忆",
      pinyin: "huí yì",
      level: "intermediate",
      meaning: "memory",
      meaningKr: "추억",
      example: "美好的回忆在心头浮现。",
      exampleKr: "아름다운 추억이 마음속에 떠오른다."
    }
  ],
  76: [
    {
      word: "在乎",
      pinyin: "zài hu",
      level: "intermediate",
      meaning: "to care about",
      meaningKr: "신경 쓰다",
      example: "谁会在乎这些小细节？",
      exampleKr: "누가 이런 사소한 것들에 신경을 쓰겠어?"
    }
  ],
  77: [
    {
      word: "体面",
      pinyin: "tǐ miàn",
      level: "advanced",
      meaning: "dignity",
      meaningKr: "체면",
      example: "保留最后的体面。",
      exampleKr: "마지막 체면을 지키다."
    }
  ],
  78: [
    {
      word: "赠品",
      pinyin: "zèng pǐn",
      level: "intermediate",
      meaning: "gift",
      meaningKr: "증정품",
      example: "赠品也很实用。",
      exampleKr: "증정품도 매우 실용적이다."
    }
  ],
  79: [
    {
      word: "迁就",
      pinyin: "qiān jiù",
      level: "advanced",
      meaning: "to accommodate",
      meaningKr: "맞추다",
      example: "他已经迁就她很久了。",
      exampleKr: "그는 이미 오랫동안 그녀에게 맞춰주었다."
    }
  ],
  80: [
    {
      word: "借口",
      pinyin: "jiè kǒu",
      level: "intermediate",
      meaning: "excuse",
      meaningKr: "핑계",
      example: "别找借口推卸责任。",
      exampleKr: "책임을 회피하기 위해 핑계 대지 마라."
    }
  ],
  81: [
    {
      word: "三遍",
      pinyin: "sān biàn",
      level: "basic",
      meaning: "three times",
      meaningKr: "세 번",
      example: "我读了三遍才懂。",
      exampleKr: "세 번 읽고서야 이해했다."
    }
  ],
  82: [
    {
      word: "百口莫辩",
      pinyin: "bǎi kǒu mò biàn",
      level: "advanced",
      meaning: "cannot explain",
      meaningKr: "백 가지 입이 있어도 변명할 길이 없다",
      example: "他陷入了百口莫辩的境地。",
      exampleKr: "그는 변명할 수 없는 상황에 처했다."
    }
  ],
  83: [
    {
      word: "兑现",
      pinyin: "duì xiàn",
      level: "advanced",
      meaning: "to fulfill",
      meaningKr: "이행하다",
      example: "他终于兑现了他的承诺。",
      exampleKr: "그는 마침내 자신의 약속을 이행했다."
    }
  ],
  84: [
    {
      word: "贪得无厌",
      pinyin: "tān dé wú yàn",
      level: "advanced",
      meaning: "insatiable greed",
      meaningKr: "탐욕스럽다",
      example: "贪得无厌是万恶之源。",
      exampleKr: "탐욕은 모든 악의 근원이다."
    }
  ],
  85: [
    {
      word: "尊严",
      pinyin: "zūn yán",
      level: "advanced",
      meaning: "dignity",
      meaningKr: "존엄",
      example: "人的尊严不容侵犯。",
      exampleKr: "인간의 존엄성은 침해될 수 없다."
    }
  ],
  86: [
    {
      word: "干脆",
      pinyin: "gān cuì",
      level: "intermediate",
      meaning: "simply; straightforward",
      meaningKr: "명쾌하다",
      example: "干脆我们就分头行动吧。",
      exampleKr: "그냥 우린 각자 움직이자."
    }
  ],
  87: [
    {
      word: "拿走",
      pinyin: "ná zǒu",
      level: "basic",
      meaning: "take away",
      meaningKr: "가져가다",
      example: "你要的全拿走。",
      exampleKr: "네가 원하는 건 다 가져가."
    }
  ],
  88: [
    {
      word: "承受",
      pinyin: "chéng shòu",
      level: "intermediate",
      meaning: "to bear",
      meaningKr: "감당하다",
      example: "所有的痛苦都由他一个人承受。",
      exampleKr: "모든 고통을 그 혼자서 감당하고 있다."
    }
  ],
  89: [
    {
      word: "留下",
      pinyin: "liú xià",
      level: "basic",
      meaning: "leave behind",
      meaningKr: "남기다",
      example: "留下了一些未完成的任务。",
      exampleKr: "완료하지 못한 임무들을 남겨두었다."
    }
  ],
  90: [
    {
      word: "有用",
      pinyin: "yǒu yòng",
      level: "basic",
      meaning: "useful",
      meaningKr: "유용하다",
      example: "这些知识很有用。",
      exampleKr: "이 지식들은 매우 유용하다."
    }
  ],
  91: [
    {
      word: "宠",
      pinyin: "chǒng",
      level: "intermediate",
      meaning: "to dote on",
      meaningKr: "총애하다",
      example: "他像宠小猫一样宠她。",
      exampleKr: "그는 고양이를 귀여워하듯 그녀를 총애한다."
    }
  ],
  92: [
    {
      word: "懂",
      pinyin: "dǒng",
      level: "basic",
      meaning: "to understand",
      meaningKr: "이해하다",
      example: "你不懂我的心。",
      exampleKr: "넌 내 마음을 몰라."
    }
  ],
  93: [
    {
      word: "强求",
      pinyin: "qiáng qiú",
      level: "advanced",
      meaning: "to force",
      meaningKr: "강요하다",
      example: "既然留不住，就不要强求。",
      exampleKr: "붙잡을 수 없다면 강요하지 마라."
    }
  ],
  94: [],
  95: [
    {
      word: "沉默寡言",
      pinyin: "chén mò guǎ yán",
      level: "advanced",
      meaning: "taciturn",
      meaningKr: "말수가 적다",
      example: "他的父亲是个沉默寡言的人。",
      exampleKr: "그의 아버지는 말수가 적으신 분이다."
    }
  ],
  96: [
    {
      word: "楚楚可怜",
      pinyin: "chǔ chǔ kě lián",
      level: "advanced",
      meaning: "pitiful",
      meaningKr: "가련하다",
      example: "她那楚楚可怜的眼神让人难过。",
      exampleKr: "그녀의 가련한 눈빛이 사람을 슬프게 한다."
    }
  ],
  97: [
    {
      word: "消遣",
      pinyin: "xiāo qiǎn",
      level: "advanced",
      meaning: "pastime",
      meaningKr: "심심풀이",
      example: "读书是他最大的消遣。",
      exampleKr: "독서는 그의 가장 큰 소일거리다."
    }
  ],
  98: [
    {
      word: "贵贱",
      pinyin: "guì jiàn",
      level: "advanced",
      meaning: "value; status",
      meaningKr: "귀천",
      example: "在法律面前，人无贵贱。",
      exampleKr: "법 앞에서 사람은 귀천이 없다."
    }
  ],
  99: [
    {
      word: "接着",
      pinyin: "jiē zhe",
      level: "basic",
      meaning: "one after another",
      meaningKr: "이어서",
      example: "一个接着一个地倒下了。",
      exampleKr: "하나둘씩 쓰러졌다."
    }
  ],
  100: [
    {
      word: "消灭",
      pinyin: "xiāo miè",
      level: "intermediate",
      meaning: "to destroy; to wipe out",
      meaningKr: "소멸시키다",
      example: "我们要彻底消灭蟑螂。",
      exampleKr: "바퀴벌레를 완전히 박멸해야 한다."
    }
  ],
  101: [
    {
      word: "不相欠",
      pinyin: "bù xiāng qiàn",
      level: "advanced",
      meaning: "owe nothing to each other",
      meaningKr: "서로 빚진 것이 없다",
      example: "钱已经还清了，我们两不相欠。",
      exampleKr: "돈을 다 갚았으니 우린 이제 서로 빚진 게 없다."
    }
  ]
};

// 获取指定句子的词汇分析
export function getVocabForSentence(sentenceIndex: number): WordAnalysis[] {
  return niyaodequannazousVocabAnalysis[sentenceIndex] || [];
}

// 获取所有词汇（去重）
export function getAllVocab(): WordAnalysis[] {
  const allWords = Object.values(niyaodequannazousVocabAnalysis).flat();
  const uniqueWords = new Map<string, WordAnalysis>();
  allWords.forEach(word => {
    if (!uniqueWords.has(word.word)) {
      uniqueWords.set(word.word, word);
    }
  });
  return Array.from(uniqueWords.values());
}
