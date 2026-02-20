// 你要的全拿走练习数据

import { PracticeQuestion } from './tianmimiPractice';

// 每句歌词对应的练习题目（从md文件中提取，共101句，但只有前24句有练习题）
export const niyaodequannazousPractice: Record<number, PracticeQuestion[]> = {
  1: [
    {
      type: "multipleChoice",
      question: "'开头'의 올바른 병음은 무엇입니까?",
      options: ["kāi tóu", "kǎi tóu", "kāi tǒu", "kài tóu"],
      correctAnswer: "kāi tóu",
      explanation: "开头의 올바른 병음은 kāi tóu(1성-2성)입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'开头'의 성조 조합은 무엇입니까?",
      options: ["1-2", "1-3", "2-2", "1-4"],
      correctAnswer: "1-2",
      explanation: "kāi는 1성, tóu는 2성으로 1-2 조합입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'开头'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "시간 표현", "수량 표현"],
      correctAnswer: "대상 표현",
      explanation: "문장의 주어 부분에서 이야기의 시작점(대상)을 나타냅니다.",
      difficulty: "easy"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["故事的", "开头", "非常", "吸引人。"],
      correctAnswer: "故事的开头非常吸引人。",
      explanation: "주어(故事的开头) + 부사(非常) + 술어(吸引人)의 구조입니다.",
      difficulty: "easy"
    }
  ],
  2: [
    {
      type: "multipleChoice",
      question: "'结果'의 올바른 병음은 무엇입니까?",
      options: ["jié guǒ", "jié guò", "jiě guǒ", "jiē guǒ"],
      correctAnswer: "jié guǒ",
      explanation: "结果의 올바른 병음은 jié guǒ(2성-3성)입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'结果'의 성조 조합은 무엇입니까?",
      options: ["2-3", "2-4", "3-3", "1-3"],
      correctAnswer: "2-3",
      explanation: "jié는 2성, guǒ는 3성으로 2-3 조합입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'结果'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "상태 묘사", "장소 표현"],
      correctAnswer: "대상 표현",
      explanation: "경기(比赛)의 결과라는 핵심 대상을 나타냅니다.",
      difficulty: "easy"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["比赛的", "结果", "让人", "感到意外。"],
      correctAnswer: "比赛的结果让人感到意外。",
      explanation: "주어 + 겸어동사(让) + 목적어 + 보어 형식의 문장입니다.",
      difficulty: "easy"
    }
  ],
  3: [
    {
      type: "multipleChoice",
      question: "'分寸'의 올바른 병음은 무엇입니까?",
      options: ["fēn cùn", "fén cùn", "fēn cūn", "fèn cùn"],
      correctAnswer: "fēn cùn",
      explanation: "分寸의 올바른 병음은 fēn cùn(1성-4성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'分寸'의 성조 조합은 무엇입니까?",
      options: ["1-4", "1-3", "4-4", "1-1"],
      correctAnswer: "1-4",
      explanation: "fēn은 1성, cùn은 4성으로 1-4 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'分寸'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "상태 묘사", "동작 표현", "경험 표현"],
      correctAnswer: "대상 표현",
      explanation: "동사 '有'의 목적어로 쓰여 '정도'나 '절도'를 의미합니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["他", "说话做事", "很有", "分寸。"],
      correctAnswer: "他说话做事很有分寸。",
      explanation: "주어 + 상황어 + 술어 + 목적어의 순서입니다.",
      difficulty: "hard"
    }
  ],
  4: [
    {
      type: "multipleChoice",
      question: "'气氛'의 올바른 병음은 무엇입니까?",
      options: ["qì fēn", "qì fèn", "qī fēn", "qí fēn"],
      correctAnswer: "qì fēn",
      explanation: "气氛의 올바른 병음은 qì fēn(4성-1성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'气氛'의 성조 조합은 무엇입니까?",
      options: ["4-1", "4-4", "1-1", "4-0"],
      correctAnswer: "4-1",
      explanation: "qì는 4성, fēn은 1성으로 4-1 조합입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'气氛'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "상태 묘사", "동작 표현", "시간 표현"],
      correctAnswer: "대상 표현",
      explanation: "문장의 주어로 쓰여 파티의 분위기를 나타냅니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["晚会的", "气氛", "非常", "热烈。"],
      correctAnswer: "晚会的气氛非常热烈。",
      explanation: "주어(晚会的气氛) + 정도부사(非常) + 형용사 술어(热烈) 구조입니다.",
      difficulty: "medium"
    }
  ],
  5: [
    {
      type: "multipleChoice",
      question: "'库存'의 올바른 병음은 무엇입니까?",
      options: ["kù cún", "kǔ cún", "kù chún", "kù cùn"],
      correctAnswer: "kù cún",
      explanation: "库存의 올바른 병음은 kù cún(4성-2성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'库存'의 성조 조합은 무엇입니까?",
      options: ["4-2", "4-3", "3-2", "4-4"],
      correctAnswer: "4-2",
      explanation: "kù는 4성, cún은 2성으로 4-2 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'库存'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "수량 표현", "장소 표현"],
      correctAnswer: "대상 표현",
      explanation: "상품의 재고라는 대상을 나타내는 주어 역할을 합니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["这种商品的", "库存", "已经", "不多了。"],
      correctAnswer: "这种商品的库存已经不多了。",
      explanation: "주어(库存) + 부사(已经) + 형용사 술어(不多了)의 순서입니다.",
      difficulty: "hard"
    }
  ],
  6: [
    {
      type: "multipleChoice",
      question: "'认真'의 올바른 병음은 무엇입니까?",
      options: ["rèn zhēn", "rén zhēn", "rèn zhèn", "rèn zhen"],
      correctAnswer: "rèn zhēn",
      explanation: "认真의 올바른 병음은 rèn zhēn(4성-1성)입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'认真'의 성조 조합은 무엇입니까?",
      options: ["4-1", "4-4", "2-1", "4-0"],
      correctAnswer: "4-1",
      explanation: "rèn은 4성, zhēn은 1성으로 4-1 조합입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'认真'는 위 문장에서 어떤 역할을 합니까?",
      options: ["상태 묘사", "동작 표현", "대상 표현", "시간 표현"],
      correctAnswer: "상태 묘사",
      explanation: "태도가 어떠한지 설명하는 형용사 술어 역할을 합니다.",
      difficulty: "easy"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["他", "学习的态度", "很", "认真。"],
      correctAnswer: "他学习的态度很认真。",
      explanation: "주어(态度) + 정도부사(很) + 형용사 술어(认真) 구조입니다.",
      difficulty: "easy"
    }
  ],
  7: [
    {
      type: "multipleChoice",
      question: "'敷衍'의 올바른 병음은 무엇입니까?",
      options: ["fū yan", "fú yan", "fū yán", "fù yán"],
      correctAnswer: "fū yan",
      explanation: "敷衍의 올바른 병음은 fū yan(1성-경성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'敷衍'의 성조 조합은 무엇입니까?",
      options: ["1-0", "1-3", "1-2", "2-0"],
      correctAnswer: "1-0",
      explanation: "fū는 1성, yan은 경성으로 처리됩니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'敷衍'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "대상 표현", "상태 묘사", "장소 표현"],
      correctAnswer: "동작 표현",
      explanation: "일을 건성으로 처리한다는 구체적인 동작(동사)을 나타냅니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["不要", "总是", "敷衍", "你的工作。"],
      correctAnswer: "不要总是敷衍你的工作。",
      explanation: "부정어(不要) + 부사(总是) + 동사(敷衍) + 목적어 순서입니다.",
      difficulty: "hard"
    }
  ],
  8: [
    {
      type: "multipleChoice",
      question: "'套路'의 올바른 병음은 무엇입니까?",
      options: ["tào lù", "tǎo lù", "tào lǔ", "tiào lù"],
      correctAnswer: "tào lù",
      explanation: "套路의 올바른 병음은 tào lù(4성-4성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'套路'의 성조 조합은 무엇입니까?",
      options: ["4-4", "4-3", "3-4", "2-4"],
      correctAnswer: "4-4",
      explanation: "tào와 lù 모두 4성으로 4-4 조합입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'套路'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "상태 묘사", "수량 표현"],
      correctAnswer: "대상 표현",
      explanation: "마케팅 수단이라는 명사적 대상을 나타냅니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["这都是", "常见的", "营销", "套路。"],
      correctAnswer: "这都是常见的营销套路。",
      explanation: "지시대명사 + 술어 + 관형어 + 명사 목적어 순서입니다.",
      difficulty: "medium"
    }
  ],
  9: [
    {
      type: "multipleChoice",
      question: "'苍白'의 올바른 병음은 무엇입니까?",
      options: ["cāng bái", "chāng bái", "cāng bǎi", "cǎng bái"],
      correctAnswer: "cāng bái",
      explanation: "苍白의 올바른 병음은 cāng bái(1성-2성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'苍白'의 성조 조합은 무엇입니까?",
      options: ["1-2", "1-1", "1-3", "2-2"],
      correctAnswer: "1-2",
      explanation: "cāng은 1성, bái는 2성으로 1-2 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'苍白'는 위 문장에서 어떤 역할을 합니까?",
      options: ["상태 묘사", "동작 표현", "대상 표현", "장소 표현"],
      correctAnswer: "상태 묘사",
      explanation: "설명이 무력하고 빈약하다는 상태를 묘사합니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["他的解释", "在事实面前", "显得", "很苍白。"],
      correctAnswer: "他的解释在事实面前显得很苍白。",
      explanation: "주어 + 전치사구(상황어) + 술어 + 보어 형태입니다.",
      difficulty: "hard"
    }
  ],
  10: [
    {
      type: "multipleChoice",
      question: "'留恋'의 올바른 병음은 무엇입니까?",
      options: ["liú liàn", "liú lián", "liū liàn", "liǔ liàn"],
      correctAnswer: "liú liàn",
      explanation: "留恋의 올바른 병음은 liú liàn(2성-4성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'留恋'의 성조 조합은 무엇입니까?",
      options: ["2-4", "2-2", "1-4", "3-4"],
      correctAnswer: "2-4",
      explanation: "liú는 2성, liàn은 4성으로 2-4 조합입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'留恋'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "대상 표현", "상태 묘사", "경험 표현"],
      correctAnswer: "동작 표현",
      explanation: "심리적으로 그리워하고 미련을 두는 동작(동사)을 의미합니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["他", "很留恋", "在上海生活的", "日子。"],
      correctAnswer: "他很留恋在上海生活的日子。",
      explanation: "주어 + 정도부사/동사 + 관형어 + 목적어 순서입니다.",
      difficulty: "medium"
    }
  ],
  11: [
    {
      type: "multipleChoice",
      question: "'随便'의 올바른 병음은 무엇입니까?",
      options: ["suí biàn", "suǐ biàn", "suí biān", "suī biàn"],
      correctAnswer: "suí biàn",
      explanation: "随便의 올바른 병음은 suí biàn(2성-4성)입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'随便'의 성조 조합은 무엇입니까?",
      options: ["2-4", "2-1", "3-4", "4-4"],
      correctAnswer: "2-4",
      explanation: "suí는 2성, biàn은 4성으로 2-4 조합입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'随便'는 위 문장에서 어떤 역할을 합니까?",
      options: ["상태 묘사", "동작 표현", "대상 표현", "시간 표현"],
      correctAnswer: "상태 묘사",
      explanation: "함부로 결정해서는 안 된다는 방식이나 상태를 묘사합니다.",
      difficulty: "easy"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["这种事", "不能", "随便", "决定。"],
      correctAnswer: "这种事不能随便决定。",
      explanation: "주어 + 조동사 + 부사 + 술어 순서입니다.",
      difficulty: "easy"
    }
  ],
  12: [
    {
      type: "multipleChoice",
      question: "'拿走'의 올바른 병음은 무엇입니까?",
      options: ["ná zǒu", "nǎ zǒu", "nà zǒu", "ná zhǒu"],
      correctAnswer: "ná zǒu",
      explanation: "拿走의 올바른 병음은 ná zǒu(2성-3성)입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'拿走'의 성조 조합은 무엇입니까?",
      options: ["2-3", "2-2", "3-3", "2-4"],
      correctAnswer: "2-3",
      explanation: "ná는 2성, zǒu는 3성으로 2-3 조합입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'拿走'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "대상 표현", "장소 표현", "상태 묘사"],
      correctAnswer: "동작 표현",
      explanation: "물건을 가져가는 구체적인 행위(동사)를 나타냅니다.",
      difficulty: "easy"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["请把", "这些垃圾", "拿走。"],
      correctAnswer: "请把这些垃圾拿走。",
      explanation: "청유형 '请' + 把자문 구조(把+목적어+동사)입니다.",
      difficulty: "easy"
    }
  ],
  13: [
    {
      type: "multipleChoice",
      question: "'回忆'의 올바른 병음은 무엇입니까?",
      options: ["huí yì", "huǐ yì", "huí yi", "huí yí"],
      correctAnswer: "huí yì",
      explanation: "回忆의 올바른 병음은 huí yì(2성-4성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'回忆'의 성조 조합은 무엇입니까?",
      options: ["2-4", "2-1", "2-0", "3-4"],
      correctAnswer: "2-4",
      explanation: "huí는 2성, yì는 4성으로 2-4 조합입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'回忆'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "시간 표현", "상태 묘사"],
      correctAnswer: "대상 표현",
      explanation: "문장에서 주어 역할을 하는 명사(추억)로 쓰였습니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["童年的", "回忆", "总是", "美好的。"],
      correctAnswer: "童年的回忆总是美好的。",
      explanation: "주어(童年的回忆) + 부사(总是) + 형용사 술어(美好的) 구조입니다.",
      difficulty: "medium"
    }
  ],
  14: [
    {
      type: "multipleChoice",
      question: "'在乎'의 올바른 병음은 무엇입니까?",
      options: ["zài hu", "zài hū", "zǎi hu", "zài hǔ"],
      correctAnswer: "zài hu",
      explanation: "在乎의 올바른 병음은 zài hu(4성-경성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'在乎'의 성조 조합은 무엇입니까?",
      options: ["4-0", "4-1", "4-4", "3-0"],
      correctAnswer: "4-0",
      explanation: "zài는 4성, hu는 경성으로 처리됩니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'在乎'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "상태 묘사", "대상 표현", "시간 표현"],
      correctAnswer: "동작 표현",
      explanation: "마음속으로 신경을 쓰거나 중시하는 심리 동사입니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["我不在乎", "别人", "怎么", "看我。"],
      correctAnswer: "我不在乎别人怎么看我。",
      explanation: "주어+동사(不在乎) + 목적어절(别人怎么看我) 구조입니다.",
      difficulty: "medium"
    }
  ],
  15: [
    {
      type: "multipleChoice",
      question: "'体面'의 올바른 병음은 무엇입니까?",
      options: ["tǐ miàn", "tǐ mián", "tī miàn", "tǐ mian"],
      correctAnswer: "tǐ miàn",
      explanation: "体面의 올바른 병음은 tǐ miàn(3성-4성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'体面'의 성조 조합은 무엇입니까?",
      options: ["3-4", "3-0", "2-4", "3-1"],
      correctAnswer: "3-4",
      explanation: "tǐ는 3성, miàn은 4성으로 3-4 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'体面'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "상태 묘사", "동작 표현", "장소 표현"],
      correctAnswer: "대상 표현",
      explanation: "명사로서 '체면'이나 '품위'라는 대상을 의미합니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["人活着", "总要", "留点", "体面。"],
      correctAnswer: "人活着总要留点体面。",
      explanation: "주어절 + 부사/조동사 + 술어(동사) + 목적어 순서입니다.",
      difficulty: "hard"
    }
  ],
  16: [
    {
      type: "multipleChoice",
      question: "'赠品'의 올바른 병음은 무엇입니까?",
      options: ["zèng pǐn", "zèng píng", "zēng pǐn", "zhèng pǐn"],
      correctAnswer: "zèng pǐn",
      explanation: "赠品의 올바른 병음은 zèng pǐn(4성-3성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'赠品'의 성조 조합은 무엇입니까?",
      options: ["4-3", "4-2", "1-3", "4-4"],
      correctAnswer: "4-3",
      explanation: "zèng은 4성, pǐn은 3성으로 4-3 조합입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'赠品'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "수량 표현", "장소 표현"],
      correctAnswer: "대상 표현",
      explanation: "증정되는 물건(사은품)이라는 명사 목적어입니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["这个化妆品", "附送", "很多", "赠品。"],
      correctAnswer: "这个化妆品附送很多赠品。",
      explanation: "주어 + 술어(동사) + 관형어 + 목적어 순서입니다.",
      difficulty: "medium"
    }
  ],
  17: [
    {
      type: "multipleChoice",
      question: "'迁就'의 올바른 병음은 무엇입니까?",
      options: ["qiān jiù", "qián jiù", "qiān jiǔ", "qiǎn jiù"],
      correctAnswer: "qiān jiù",
      explanation: "迁就의 올바른 병음은 qiān jiù(1성-4성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'迁就'의 성조 조합은 무엇입니까?",
      options: ["1-4", "1-1", "2-4", "4-4"],
      correctAnswer: "1-4",
      explanation: "qiān은 1성, jiù는 4성으로 1-4 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'迁就'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "대상 표현", "상태 묘사", "경험 표현"],
      correctAnswer: "동작 표현",
      explanation: "양보하여 맞추어 준다는 행위(동사)를 나타냅니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["一味迁就", "并不能", "解决", "矛盾。"],
      correctAnswer: "一味迁就并不能解决矛盾。",
      explanation: "주어(일방적 양보) + 부정어 + 술어(동사) + 목적어 순서입니다.",
      difficulty: "hard"
    }
  ],
  18: [
    {
      type: "multipleChoice",
      question: "'借口'의 올바른 병음은 무엇입니까?",
      options: ["jiè kǒu", "jié kǒu", "jiè kōu", "jiě kǒu"],
      correctAnswer: "jiè kǒu",
      explanation: "借口의 올바른 병음은 jiè kǒu(4성-3성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'借口'의 성조 조합은 무엇입니까?",
      options: ["4-3", "4-2", "2-3", "4-4"],
      correctAnswer: "4-3",
      explanation: "jiè는 4성, kǒu는 3성으로 4-3 조합입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'借口'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "상태 묘사", "时间 표현"],
      correctAnswer: "대상 표현",
      explanation: "핑계라는 의미의 명사 목적어로 쓰였습니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["迟到", "不需要", "任何", "借口。"],
      correctAnswer: "迟到不需要任何借口。",
      explanation: "주어(지각) + 술어(부정형) + 관형어 + 목적어 순서입니다.",
      difficulty: "medium"
    }
  ],
  19: [
    {
      type: "multipleChoice",
      question: "'遍'의 올바른 병음은 무엇입니까?",
      options: ["biàn", "biān", "bián", "piàn"],
      correctAnswer: "biàn",
      explanation: "遍의 올바른 병음은 biàn(4성)입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'遍'의 성조 조합은 무엇입니까?",
      options: ["4", "1", "2", "3"],
      correctAnswer: "4",
      explanation: "biàn은 4성 하나로 이루어진 단어입니다.",
      difficulty: "easy"
    },
    {
      type: "multipleChoice",
      question: "'遍'는 위 문장에서 어떤 역할을 합니까?",
      options: ["수량 표현", "장소 표현", "동작 표현", "대상 표현"],
      correctAnswer: "수량 표현",
      explanation: "동작의 횟수를 나타내는 양사(번, 회) 역할을 합니다.",
      difficulty: "easy"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["请", "再说", "一遍。"],
      correctAnswer: "请再说一遍。",
      explanation: "청유어(请) + 동사 + 수량보어(一遍) 구조입니다.",
      difficulty: "easy"
    }
  ],
  20: [
    {
      type: "multipleChoice",
      question: "'百口莫辩'의 올바른 병음은 무엇입니까?",
      options: ["bǎi kǒu mò biàn", "bái kǒu mò biàn", "bǎi kǒu mó biàn", "bǎi kōu mò biàn"],
      correctAnswer: "bǎi kǒu mò biàn",
      explanation: "百口莫辩의 올바른 병음은 bǎi kǒu mò biàn입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'百口莫辩'의 성조 조합은 무엇입니까?",
      options: ["3-3-4-4", "2-3-4-4", "3-2-4-4", "3-3-2-4"],
      correctAnswer: "3-3-4-4",
      explanation: "bǎi(3), kǒu(3), mò(4), biàn(4) 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'百口莫辩'는 위 문장에서 어떤 역할을 합니까?",
      options: ["상태 묘사", "동작 표현", "장소 표현", "경험 표현"],
      correctAnswer: "상태 묘사",
      explanation: "변명할 수 없는 난처한 상황을 묘사하는 보어/술어 역할입니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["面对证据，", "他感到", "百口莫辩。"],
      correctAnswer: "面对证据，他感到百口莫辩。",
      explanation: "상황 제시 + 주어/감정동사 + 상태묘사 성어 순서입니다.",
      difficulty: "hard"
    }
  ],
  21: [
    {
      type: "multipleChoice",
      question: "'兑现'의 올바른 병음은 무엇입니까?",
      options: ["duì xiàn", "duí xiàn", "duì xiān", "tuì xiàn"],
      correctAnswer: "duì xiàn",
      explanation: "兑现의 올바른 병음은 duì xiàn(4성-4성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'兑现'의 성조 조합은 무엇입니까?",
      options: ["4-4", "4-1", "2-4", "1-4"],
      correctAnswer: "4-4",
      explanation: "duì와 xiàn 모두 4성으로 4-4 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'兑现'는 위 문장에서 어떤 역할을 합니까?",
      options: ["동작 표현", "대상 표현", "시간 표현", "수량 표현"],
      correctAnswer: "동작 표현",
      explanation: "약속을 실제로 이행한다는 동작을 의미하는 동사입니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["既然答应了，", "就要", "兑现", "诺言。"],
      correctAnswer: "既然答应了，就要兑现诺言。",
      explanation: "접속사절(既然) + 부사 + 동사(兑现) + 목적어 순서입니다.",
      difficulty: "hard"
    }
  ],
  22: [
    {
      type: "multipleChoice",
      question: "'贪得无厌'의 올바른 병음은 무엇입니까?",
      options: ["tān dé wú yàn", "tán dé wú yàn", "tān de wú yán", "tān dé wǔ yàn"],
      correctAnswer: "tān dé wú yàn",
      explanation: "贪得无厌의 올바른 병음은 tān dé wú yàn입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'贪得无厌'의 성조 조합은 무엇입니까?",
      options: ["1-2-2-4", "1-0-2-4", "1-2-4-4", "2-2-2-4"],
      correctAnswer: "1-2-2-4",
      explanation: "tān(1), dé(2), wú(2), yàn(4) 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'贪得无厌'는 위 문장에서 어떤 역할을 합니까?",
      options: ["상태 묘사", "대상 표현", "동작 표현", "경험 표현"],
      correctAnswer: "상태 묘사",
      explanation: "행위의 성질(탐욕스러움)을 꾸며주는 형용사적 관형어입니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["这种", "贪得无厌的", "行为", "让人反感。"],
      correctAnswer: "这种贪得无厌的行为让人反感。",
      explanation: "지시어 + 관형어(성어) + 주어 + 겸어문 술어 순서입니다.",
      difficulty: "hard"
    }
  ],
  23: [
    {
      type: "multipleChoice",
      question: "'尊严'의 올바른 병음은 무엇입니까?",
      options: ["zūn yán", "zhūn yán", "zūn yàn", "zǔn yán"],
      correctAnswer: "zūn yán",
      explanation: "尊严의 올바른 병음은 zūn yán(1성-2성)입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'尊严'의 성조 조합은 무엇입니까?",
      options: ["1-2", "1-4", "3-2", "1-1"],
      correctAnswer: "1-2",
      explanation: "zūn은 1성, yán은 2성으로 1-2 조합입니다.",
      difficulty: "hard"
    },
    {
      type: "multipleChoice",
      question: "'尊严'는 위 문장에서 어떤 역할을 합니까?",
      options: ["대상 표현", "동작 표현", "장소 표현", "상태 묘사"],
      correctAnswer: "대상 표현",
      explanation: "동사 '维护'의 목적어로 쓰여 '존엄'이라는 대상을 의미합니다.",
      difficulty: "hard"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["维护尊严", "比", "金钱", "更重要。"],
      correctAnswer: "维护尊严比金钱更重要。",
      explanation: "주어 + 비교문(比) + 비교대상 + 비교술어 구조입니다.",
      difficulty: "hard"
    }
  ],
  24: [
    {
      type: "multipleChoice",
      question: "'干脆'의 올바른 병음은 무엇입니까?",
      options: ["gān cuì", "gǎn cuì", "gān cuī", "gān chuì"],
      correctAnswer: "gān cuì",
      explanation: "干脆의 올바른 병음은 gān cuì(1성-4성)입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'干脆'의 성조 조합은 무엇입니까?",
      options: ["1-4", "1-1", "3-4", "4-4"],
      correctAnswer: "1-4",
      explanation: "gān은 1성, cuì는 4성으로 1-4 조합입니다.",
      difficulty: "medium"
    },
    {
      type: "multipleChoice",
      question: "'干脆'는 위 문장에서 어떤 역할을 합니까?",
      options: ["상태 묘사", "동작 표현", "대상 표현", "시간 표현"],
      correctAnswer: "상태 묘사",
      explanation: "대답하는 태도가 명쾌하다는 것을 설명하는 보어 역할을 합니다.",
      difficulty: "medium"
    },
    {
      type: "sentenceOrder",
      question: "다음 문장을 올바른 순서로 배열하세요.",
      options: ["他", "回答得", "很", "干脆。"],
      correctAnswer: "他回答得很干脆。",
      explanation: "주어 + 동사/정도보조사(得) + 부사 + 정도보어 구조입니다.",
      difficulty: "medium"
    }
  ]
  // 句子25-101没有练习题（根据MD文件，practice部分只有前24句有题目）
};

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  return niyaodequannazousPractice[sentenceIndex] || [];
}
