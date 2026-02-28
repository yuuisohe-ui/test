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
  ],
  // 词汇训练题：句子25-45（你要的全拿走重点词）
  25: [
    { type: "multipleChoice", question: "'拿走'의 올바른 병음은 무엇입니까?", options: ["ná zǒu", "nà zǒu", "ná zòu", "názou"], correctAnswer: "ná zǒu", explanation: "'拿走'는 'ná zǒu'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'의 성조 조합은 무엇입니까?", options: ["2-3", "4-3", "2-4", "3-3"], correctAnswer: "2-3", explanation: "ná(2) + zǒu(3) → 2-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "'拿走'는 '가져가다'의 동작을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["拿走吧。", "把这些书", "。"], correctAnswer: "把这些书拿走吧。", explanation: "원문 어순을 그대로 복원합니다.", difficulty: "medium" }
  ],
  26: [
    { type: "multipleChoice", question: "'承受'의 올바른 병음은 무엇입니까?", options: ["chéng shòu", "chěng shòu", "chéng shǒu", "chéngshòu"], correctAnswer: "chéng shòu", explanation: "'承受'는 'chéng shòu'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'承受'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-3", "4-4"], correctAnswer: "2-4", explanation: "chéng(2) + shòu(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'承受'는 위 문장에서 어떤 역할을 합니까?", options: ["경험 표현", "수량 표현", "장소 표현", "시간 표현"], correctAnswer: "경험 표현", explanation: "압력/부담을 '겪어 내다'라는 경험을 말합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["。", "承受了很大的压力", "他"], correctAnswer: "他承受了很大的压力。", explanation: "주어 + 동사 + 목적어 구조입니다.", difficulty: "medium" }
  ],
  27: [
    { type: "multipleChoice", question: "'留下'의 올바른 병음은 무엇입니까?", options: ["liú xià", "liǔ xià", "liú xiá", "liúxià"], correctAnswer: "liú xià", explanation: "'留下'는 'liú xià'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'留下'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "liú(2) + xià(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'留下'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'머물다/남다'의 행동을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["吃饭。", "留下来", "你可以"], correctAnswer: "你可以留下来吃饭。", explanation: "'可以' 뒤에 동작을 이어 붙입니다.", difficulty: "medium" }
  ],
  28: [
    { type: "multipleChoice", question: "'别管'의 올바른 병음은 무엇입니까?", options: ["bié guǎn", "biě guǎn", "bié guàn", "biéguǎn"], correctAnswer: "bié guǎn", explanation: "'别管'는 'bié guǎn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'别管'의 성조 조합은 무엇입니까?", options: ["2-3", "3-3", "2-4", "4-3"], correctAnswer: "2-3", explanation: "bié(2) + guǎn(3) → 2-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'别管'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "'간섭하지 마'라는 행동(금지)을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你别管。", "这件事"], correctAnswer: "这件事你别管。", explanation: "주제(这件事) + 주어(你) + 금지 표현입니다.", difficulty: "medium" }
  ],
  29: [
    { type: "multipleChoice", question: "'宠'의 올바른 병음은 무엇입니까?", options: ["chǒng", "chòng", "chōng", "chǒng "], correctAnswer: "chǒng", explanation: "'宠'은 'chǒng'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'宠'의 성조 조합은 무엇입니까?", options: ["3", "4", "1", "2"], correctAnswer: "3", explanation: "chǒng(3) → 3", difficulty: "medium" },
    { type: "multipleChoice", question: "'宠'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'아이를 너무 응석받이로 키우다'의 행위입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["父母", "不要太宠孩子。", " "], correctAnswer: "父母不要太宠孩子。", explanation: "부정 명령(不要) + 동사(宠) 구조입니다.", difficulty: "medium" }
  ],
  30: [
    { type: "multipleChoice", question: "'哪怕'의 올바른 병음은 무엇입니까?", options: ["nǎ pà", "ná pà", "nǎ pá", "nǎpà"], correctAnswer: "nǎ pà", explanation: "'哪怕'는 'nǎ pà'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'哪怕'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "nǎ(3) + pà(4) → 3-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'哪怕'는 위 문장에서 어떤 역할을 합니까?", options: ["양보 표현", "장소 표현", "수량 표현", "대상 표현"], correctAnswer: "양보 표현", explanation: "'~하더라도'의 양보/가정 의미입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我也要去。", "哪怕下雨，"], correctAnswer: "哪怕下雨，我也要去。", explanation: "앞절(조건/양보) + 뒷절(결심) 구조입니다.", difficulty: "medium" }
  ],
  31: [
    { type: "multipleChoice", question: "'强求'의 올바른 병음은 무엇입니까?", options: ["qiáng qiú", "qiǎng qiú", "qiáng qiǔ", "qiángqiú"], correctAnswer: "qiáng qiú", explanation: "'强求'는 'qiáng qiú'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'强求'의 성조 조합은 무엇입니까?", options: ["2-2", "3-2", "2-3", "4-2"], correctAnswer: "2-2", explanation: "qiáng(2) + qiú(2) → 2-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'强求'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'억지로 요구하다/강요하다'의 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["不要强求", "别人同意。"], correctAnswer: "不要强求别人同意。", explanation: "不要 + 동사 + 목적어 구조입니다.", difficulty: "medium" }
  ],
  33: [
    { type: "multipleChoice", question: "'沉默寡言'의 올바른 병음은 무엇입니까?", options: ["chén mò guǎ yán", "chén mò guà yán", "chěn mò guǎ yán", "chénmò guǎyán"], correctAnswer: "chén mò guǎ yán", explanation: "4음절 성어는 보통 음절을 띄어 씁니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'沉默寡言'의 성조 조합은 무엇입니까?", options: ["2-4-3-2", "2-2-3-2", "3-4-3-2", "2-4-2-2"], correctAnswer: "2-4-3-2", explanation: "chén(2) mò(4) guǎ(3) yán(2)", difficulty: "medium" },
    { type: "multipleChoice", question: "'沉默寡言'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "사람의 성격/상태를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他性格", "沉默寡言。"], correctAnswer: "他性格沉默寡言。", explanation: "'性格' 뒤에 성어로 성격을 설명합니다.", difficulty: "medium" }
  ],
  34: [
    { type: "multipleChoice", question: "'好聚好散'의 올바른 병음은 무엇입니까?", options: ["hǎo jù hǎo sàn", "háo jù hǎo sàn", "hǎo jǔ hǎo sàn", "hǎo jù hǎo sǎn"], correctAnswer: "hǎo jù hǎo sàn", explanation: "각 음절 성조를 정확히 구분하세요.", difficulty: "medium" },
    { type: "multipleChoice", question: "'好聚好散'의 성조 조합은 무엇입니까?", options: ["3-4-3-4", "2-4-3-4", "3-3-3-4", "3-4-2-4"], correctAnswer: "3-4-3-4", explanation: "hǎo(3) jù(4) hǎo(3) sàn(4)", difficulty: "medium" },
    { type: "multipleChoice", question: "'好聚好散'는 위 문장에서 어떤 역할을 합니까?", options: ["태도/관계 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "태도/관계 표현", explanation: "관계를 '좋게 정리하자'는 태도를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们", "好聚好散吧。"], correctAnswer: "我们好聚好散吧。", explanation: "주어 + 성어 + 어기조사(吧)입니다.", difficulty: "medium" }
  ],
  35: [
    { type: "multipleChoice", question: "'消遣'의 올바른 병음은 무엇입니까?", options: ["xiāo qiǎn", "xiáo qiǎn", "xiāo qiàn", "xiāoqiǎn"], correctAnswer: "xiāo qiǎn", explanation: "'消遣'는 'xiāo qiǎn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'消遣'의 성조 조합은 무엇입니까?", options: ["1-3", "2-3", "1-4", "3-3"], correctAnswer: "1-3", explanation: "xiāo(1) + qiǎn(3) → 1-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'消遣'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'시간을 보내다'라는 행위입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["下班后", "我", "看电影消遣。"], correctAnswer: "我下班后看电影消遣。", explanation: "주어 + 시간 + 행동 순서입니다.", difficulty: "medium" }
  ],
  36: [
    { type: "multipleChoice", question: "'特价'의 올바른 병음은 무엇입니까?", options: ["tè jià", "tē jià", "tè jiá", "tèjià"], correctAnswer: "tè jià", explanation: "'特价'는 'tè jià'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'特价'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "1-4", "2-4"], correctAnswer: "4-4", explanation: "tè(4) + jià(4) → 4-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'特价'는 위 문장에서 어떤 역할을 합니까?", options: ["가격 표현", "장소 표현", "시간 표현", "대상 표현"], correctAnswer: "가격 표현", explanation: "특별 할인 가격을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个包", "今天", "特价。"], correctAnswer: "这个包今天特价。", explanation: "주어 + 시간 + 상태(특가)입니다.", difficulty: "medium" }
  ],
  37: [
    { type: "multipleChoice", question: "'接着'의 올바른 병음은 무엇입니까?", options: ["jiē zhe", "jié zhe", "jiē zhè", "jiēzhe"], correctAnswer: "jiē zhe", explanation: "'接着'는 'jiē zhe'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'接着'의 성조 조합은 무엇입니까?", options: ["1-5", "2-5", "1-4", "3-5"], correctAnswer: "1-5", explanation: "jiē(1) + zhe(중성) → 1-5", difficulty: "medium" },
    { type: "multipleChoice", question: "'接着'는 위 문장에서 어떤 역할을 합니까?", options: ["순서/연속 표현", "장소 표현", "수량 표현", "대상 표현"], correctAnswer: "순서/연속 표현", explanation: "앞 동작 다음에 '계속' 이어짐을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["接着说。", "你先说，", "我"], correctAnswer: "你先说，我接着说。", explanation: "전반(你先说) + 후반(我接着说) 구성입니다.", difficulty: "medium" }
  ],
  38: [
    { type: "multipleChoice", question: "'清点'의 올바른 병음은 무엇입니까?", options: ["qīng diǎn", "qíng diǎn", "qīng diàn", "qīngdiǎn"], correctAnswer: "qīng diǎn", explanation: "'清点'는 'qīng diǎn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'清点'의 성조 조합은 무엇입니까?", options: ["1-3", "2-3", "1-4", "3-3"], correctAnswer: "1-3", explanation: "qīng(1) + diǎn(3) → 1-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'清点'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "수량을 '세다/확인하다'의 동작입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["一下", "现金。", "请清点"], correctAnswer: "请清点一下现金。", explanation: "공손 표현(请) + 동사(清点) 구조입니다.", difficulty: "medium" }
  ],
  39: [
    { type: "multipleChoice", question: "'两不相欠'의 올바른 병음은 무엇입니까?", options: ["liǎng bù xiāng qiàn", "liáng bù xiāng qiàn", "liǎng bú xiāng qiàn", "liǎng bù xiǎng qiàn"], correctAnswer: "liǎng bù xiāng qiàn", explanation: "4음절 표현은 음절을 분리해 읽습니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'两不相欠'의 성조 조합은 무엇입니까?", options: ["3-4-1-4", "2-4-1-4", "3-2-1-4", "3-4-2-4"], correctAnswer: "3-4-1-4", explanation: "liǎng(3) bù(4) xiāng(1) qiàn(4)", difficulty: "medium" },
    { type: "multipleChoice", question: "'两不相欠'는 위 문장에서 어떤 역할을 합니까?", options: ["관계/상태 표현", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "관계/상태 표현", explanation: "서로 빚/감정이 '없다'는 상태를 말합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["两不相欠。", "从此", "我们"], correctAnswer: "从此我们两不相欠。", explanation: "'从此'가 문두에 오는 고정 어순입니다.", difficulty: "medium" }
  ],
  40: [
    { type: "multipleChoice", question: "'认真'의 올바른 병음은 무엇입니까?", options: ["rèn zhēn", "rén zhēn", "rèn zhěn", "rènzhēn"], correctAnswer: "rèn zhēn", explanation: "'认真'는 'rèn zhēn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'认真'의 성조 조합은 무엇입니까?", options: ["4-1", "2-1", "4-3", "4-4"], correctAnswer: "4-1", explanation: "rèn(4) + zhēn(1) → 4-1", difficulty: "medium" },
    { type: "multipleChoice", question: "'认真'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "일하는 태도/상태를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["做事", "很认真。", "他"], correctAnswer: "他做事很认真。", explanation: "주어 + 동작(做事) + 정도(很) + 형용사입니다.", difficulty: "medium" }
  ],
  41: [
    { type: "multipleChoice", question: "'敷衍'의 올바른 병음은 무엇입니까?", options: ["fū yǎn", "fú yǎn", "fū yàn", "fūyǎn"], correctAnswer: "fū yǎn", explanation: "'敷衍'는 'fū yǎn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'敷衍'의 성조 조합은 무엇입니까?", options: ["1-3", "2-3", "1-4", "3-3"], correctAnswer: "1-3", explanation: "fū(1) + yǎn(3) → 1-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'敷衍'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "태도 표현", explanation: "진지하지 않고 대충 하는 태도입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我。", "别敷衍"], correctAnswer: "别敷衍我。", explanation: "금지(别) + 동사 + 목적어입니다.", difficulty: "medium" }
  ],
  42: [
    { type: "multipleChoice", question: "'情节'의 올바른 병음은 무엇입니까?", options: ["qíng jié", "qǐng jié", "qíng jiě", "qíngjié"], correctAnswer: "qíng jié", explanation: "'情节'는 'qíng jié'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'情节'의 성조 조합은 무엇입니까?", options: ["2-2", "2-3", "3-2", "4-2"], correctAnswer: "2-2", explanation: "qíng(2) + jié(2) → 2-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'情节'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "드라마/이야기의 '줄거리'를 가리키는 대상입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["很紧凑。", "这部剧的情节"], correctAnswer: "这部剧的情节很紧凑。", explanation: "'的'로 수식한 명사구 + 서술입니다.", difficulty: "medium" }
  ],
  43: [
    { type: "multipleChoice", question: "'台面'의 올바른 병음은 무엇입니까?", options: ["tái miàn", "tāi miàn", "tái mián", "táimiàn"], correctAnswer: "tái miàn", explanation: "'台面'는 'tái miàn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'台面'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "tái(2) + miàn(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'台面'는 위 문장에서 어떤 역할을 합니까?", options: ["상황/공개성 표현", "수량 표현", "동작 표현", "시간 표현"], correctAnswer: "상황/공개성 표현", explanation: "'공식적으로/공개적으로'라는 맥락을 암시합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["别", "摆到台面上说。", "这话"], correctAnswer: "这话别摆到台面上说。", explanation: "주제 + 금지 + 동작구 순서입니다.", difficulty: "medium" }
  ],
  44: [
    { type: "multipleChoice", question: "'留恋'의 올바른 병음은 무엇입니까?", options: ["liú liàn", "liǔ liàn", "liú lián", "liúliàn"], correctAnswer: "liú liàn", explanation: "'留恋'는 'liú liàn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'留恋'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "liú(2) + liàn(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'留恋'는 위 문장에서 어떤 역할을 합니까?", options: ["감정/상태 묘사", "시간 표현", "수량 표현", "장소 표현"], correctAnswer: "감정/상태 묘사", explanation: "'그리워하며 떠나기 아쉬워함'의 감정 상태입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["很留恋。", "她对家乡"], correctAnswer: "她对家乡很留恋。", explanation: "对 + 대상 + 정도 + 감정/상태입니다.", difficulty: "medium" }
  ],
  45: [
    { type: "multipleChoice", question: "'随便'의 올바른 병음은 무엇입니까?", options: ["suí biàn", "suì biàn", "suí biān", "suíbiàn"], correctAnswer: "suí biàn", explanation: "'随便'는 'suí biàn'입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'随便'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "suí(2) + biàn(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'随便'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "시간 표현", "수량 표현", "장소 표현"], correctAnswer: "태도 표현", explanation: "'아무거나/편하게'라는 태도를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["随便", "坐。", "你"], correctAnswer: "你随便坐。", explanation: "주어 + 부사(随便) + 동사(坐)입니다.", difficulty: "medium" }
  ],
  46: [
    { type: "multipleChoice", question: "'拿走'의 올바른 병음은 무엇입니까?", options: ["ná zǒu", "nà zǒu", "ná zòu", "názǒu"], correctAnswer: "ná zǒu", explanation: "'拿走'의 표준 병음은 ná zǒu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'의 성조 조합은 무엇입니까?", options: ["2-3", "2-4", "4-3", "3-3"], correctAnswer: "2-3", explanation: "ná(2) + zǒu(3) → 2-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "'拿走'는 '가져가다'라는 행동을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["把这个", "拿走"], correctAnswer: "把这个拿走。", explanation: "把 + 목적어 + 동사 순서입니다.", difficulty: "medium" }
  ],
  47: [
    { type: "multipleChoice", question: "'回忆'의 올바른 병음은 무엇입니까?", options: ["huí yì", "huǐ yì", "huí yí", "huíyì"], correctAnswer: "huí yì", explanation: "'回忆'의 표준 병음은 huí yì 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'回忆'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-2", "4-4"], correctAnswer: "2-4", explanation: "huí(2) + yì(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'回忆'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'回忆'는 '기억을 떠올리다'라는 행위입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我常常", "回忆", "那段日子"], correctAnswer: "我常常回忆那段日子。", explanation: "부사(常常) + 동사(回忆) + 목적어 순서입니다.", difficulty: "medium" }
  ],
  48: [
    { type: "multipleChoice", question: "'在乎'의 올바른 병음은 무엇입니까?", options: ["zài hu", "zǎi hu", "zài hú", "zàihu"], correctAnswer: "zài hu", explanation: "'在乎'의 표준 병음은 zài hu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'在乎'의 성조 조합은 무엇입니까?", options: ["4-5", "4-2", "3-5", "4-4"], correctAnswer: "4-5", explanation: "zài(4) + hu(중성) → 4-5", difficulty: "medium" },
    { type: "multipleChoice", question: "'在乎'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "태도 표현", explanation: "'신경 쓰다/중요하게 여기다'라는 태도를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我不太", "在乎", "别人怎么说"], correctAnswer: "我不太在乎别人怎么说。", explanation: "정도(不太) + 동사(在乎) + 내용절 순서입니다.", difficulty: "medium" }
  ],
  49: [
    { type: "multipleChoice", question: "'体面'의 올바른 병음은 무엇입니까?", options: ["tǐ miàn", "tí miàn", "tǐ mián", "tǐmiàn"], correctAnswer: "tǐ miàn", explanation: "'体面'의 표준 병음은 tǐ miàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'体面'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "tǐ(3) + miàn(4) → 3-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'体面'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "시간 표현", "수량 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'품위 있게/체면 있게'라는 상태·방식을 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "体面地", "结束这段关系"], correctAnswer: "我们要体面地结束这段关系。", explanation: "조동사(要) + 부사구(体面地) + 동사구 순서입니다.", difficulty: "medium" }
  ],
  50: [
    { type: "multipleChoice", question: "'附送'의 올바른 병음은 무엇입니까?", options: ["fù sòng", "fú sòng", "fù sǒng", "fùsòng"], correctAnswer: "fù sòng", explanation: "'附送'의 표준 병음은 fù sòng 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'附送'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "2-4", "3-4"], correctAnswer: "4-4", explanation: "fù(4) + sòng(4) → 4-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'附送'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "가격 표현", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'덤으로 주다/함께 주다'의 행위를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["买一送一", "附送小礼物"], correctAnswer: "买一送一，附送小礼物。", explanation: "앞절(프로모션) + 뒷절(추가 제공) 순서입니다.", difficulty: "medium" }
  ],
  51: [
    { type: "multipleChoice", question: "'迁就'의 올바른 병음은 무엇입니까?", options: ["qiān jiù", "qiǎn jiù", "qiān jiǔ", "qiānjiù"], correctAnswer: "qiān jiù", explanation: "'迁就'의 표준 병음은 qiān jiù 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'迁就'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "qiān(1) + jiù(4) → 1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'迁就'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "태도 표현", explanation: "상대에게 '맞춰 주다'라는 태도/방식을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我不想", "总是", "迁就你"], correctAnswer: "我不想总是迁就你。", explanation: "부정 의사(不想) + 빈도(总是) + 동사구 순서입니다.", difficulty: "medium" }
  ],
  52: [
    { type: "multipleChoice", question: "'借口'의 올바른 병음은 무엇입니까?", options: ["jiè kǒu", "jiě kǒu", "jiè kòu", "jièkǒu"], correctAnswer: "jiè kǒu", explanation: "'借口'의 표준 병음은 jiè kǒu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'借口'의 성조 조합은 무엇입니까?", options: ["4-3", "3-3", "4-4", "2-3"], correctAnswer: "4-3", explanation: "jiè(4) + kǒu(3) → 4-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'借口'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "대상 표현", explanation: "'핑계'라는 명사(대상)를 가리킵니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["别再", "找借口了"], correctAnswer: "别再找借口了。", explanation: "금지(别) + 반복(再) + 동사구 순서입니다.", difficulty: "medium" }
  ],
  53: [
    { type: "multipleChoice", question: "'一遍'의 올바른 병음은 무엇입니까?", options: ["yí biàn", "yì biàn", "yí bián", "yíbìan"], correctAnswer: "yí biàn", explanation: "'一'는 4성 앞에서 yí(2)로 변합니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'一遍'의 성조 조합은 무엇입니까?", options: ["2-4", "1-4", "4-4", "2-3"], correctAnswer: "2-4", explanation: "yí(2) + biàn(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'一遍'는 위 문장에서 어떤 역할을 합니까?", options: ["수량 표현", "시간 표현", "장소 표현", "상태 묘사"], correctAnswer: "수량 표현", explanation: "'한 번'이라는 횟수(수량)를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["请", "再说", "一遍"], correctAnswer: "请再说一遍。", explanation: "공손(请) + 반복(再) + 동사 + 횟수입니다.", difficulty: "medium" }
  ],
  54: [
    { type: "multipleChoice", question: "'百口莫辩'의 올바른 병음은 무엇입니까?", options: ["bǎi kǒu mò biàn", "bái kǒu mò biàn", "bǎi kǒu mó biàn", "bǎi kǒu mò bián"], correctAnswer: "bǎi kǒu mò biàn", explanation: "성어는 음절 단위로 정확히 읽습니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'百口莫辩'의 성조 조합은 무엇입니까?", options: ["3-3-4-4", "2-3-4-4", "3-2-4-4", "3-3-2-4"], correctAnswer: "3-3-4-4", explanation: "bǎi(3) kǒu(3) mò(4) biàn(4)", difficulty: "medium" },
    { type: "multipleChoice", question: "'百口莫辩'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "수량 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'아무리 변명해도 소용없다'라는 처지를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这事", "我", "百口莫辩"], correctAnswer: "这事我百口莫辩。", explanation: "주제 + 주어 + 성어 서술 순서입니다.", difficulty: "medium" }
  ],
  55: [
    { type: "multipleChoice", question: "'兑现'의 올바른 병음은 무엇입니까?", options: ["duì xiàn", "duǐ xiàn", "duì xiān", "duìxiàn"], correctAnswer: "duì xiàn", explanation: "'兑现'의 표준 병음은 duì xiàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'兑现'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "2-4", "3-4"], correctAnswer: "4-4", explanation: "duì(4) + xiàn(4) → 4-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'兑现'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "수량 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "약속/약정을 '지키다·실행하다'의 동작입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他说到做到", "一定会", "兑现承诺"], correctAnswer: "他说到做到，一定会兑现承诺。", explanation: "전반(평가) + 후반(실행) 어순입니다.", difficulty: "medium" }
  ],
  56: [
    { type: "multipleChoice", question: "'贪得无厌'의 올바른 병음은 무엇입니까?", options: ["tān dé wú yàn", "tán dé wú yàn", "tān dě wú yàn", "tān dé wǔ yàn"], correctAnswer: "tān dé wú yàn", explanation: "성어의 각 음절 성조를 정확히 구분하세요.", difficulty: "medium" },
    { type: "multipleChoice", question: "'贪得无厌'의 성조 조합은 무엇입니까?", options: ["1-2-2-4", "2-2-2-4", "1-3-2-4", "1-2-3-4"], correctAnswer: "1-2-2-4", explanation: "tān(1) dé(2) wú(2) yàn(4)", difficulty: "medium" },
    { type: "multipleChoice", question: "'贪得无厌'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'만족할 줄 모르는 탐욕'이라는 성향/상태를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他对利益", "贪得无厌"], correctAnswer: "他对利益贪得无厌。", explanation: "对 + 대상 + 성어 서술 구조입니다.", difficulty: "medium" }
  ],
  57: [
    { type: "multipleChoice", question: "'尊严'의 올바른 병음은 무엇입니까?", options: ["zūn yán", "zún yán", "zūn yǎn", "zūnyán"], correctAnswer: "zūn yán", explanation: "'尊严'의 표준 병음은 zūn yán 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'尊严'의 성조 조합은 무엇입니까?", options: ["1-2", "2-2", "1-3", "4-2"], correctAnswer: "1-2", explanation: "zūn(1) + yán(2) → 1-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'尊严'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'존엄/체면'이라는 명사 대상입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["不会妥协。", "他为了尊严", ""], correctAnswer: "他为了尊严不会妥协。", explanation: "원문 어순을 그대로 복원하세요.", difficulty: "medium" }
  ],
  58: [
    { type: "multipleChoice", question: "'干脆'의 올바른 병음은 무엇입니까?", options: ["gān cuì", "gǎn cuì", "gān cuī", "gāncùi"], correctAnswer: "gān cuì", explanation: "'干脆'의 표준 병음은 gān cuì 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'干脆'의 성조 조합은 무엇입니까?", options: ["1-4", "3-4", "1-1", "2-4"], correctAnswer: "1-4", explanation: "gān(1) + cuì(4) → 1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'干脆'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "대상 표현", "장소 표현", "수량 표현"], correctAnswer: "태도 표현", explanation: "'아예/단호하게'라는 태도·방식을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["直接说吧。", "你干脆", ""], correctAnswer: "你干脆直接说吧。", explanation: "주어 + 부사(干脆) + 동사구 순서입니다.", difficulty: "medium" }
  ],
  59: [
    { type: "multipleChoice", question: "'拿走'의 올바른 병음은 무엇입니까?", options: ["ná zǒu", "nà zǒu", "ná zòu", "názoǔ"], correctAnswer: "ná zǒu", explanation: "'拿走'의 표준 병음은 ná zǒu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'의 성조 조합은 무엇입니까?", options: ["2-3", "2-4", "4-3", "3-3"], correctAnswer: "2-3", explanation: "ná(2) + zǒu(3) → 2-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "'가져가다'라는 행동을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["请把包", "拿走。", ""], correctAnswer: "请把包拿走。", explanation: "把 + 목적어 + 동사 순서입니다.", difficulty: "medium" }
  ],
  60: [
    { type: "multipleChoice", question: "'承受'의 올바른 병음은 무엇입니까?", options: ["chéng shòu", "chěng shòu", "chéng shǒu", "chéngshòu"], correctAnswer: "chéng shòu", explanation: "'承受'의 표준 병음은 chéng shòu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'承受'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "3-4", "4-4"], correctAnswer: "2-4", explanation: "chéng(2) + shòu(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'承受'는 위 문장에서 어떤 역할을 합니까?", options: ["경험 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "경험 표현", explanation: "충격/부담을 '겪어 내다'는 의미입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["承受不了", "这样的打击。", "她"], correctAnswer: "她承受不了这样的打击。", explanation: "주어 + 동사구 + 목적어 순서입니다.", difficulty: "medium" }
  ],
  61: [
    { type: "multipleChoice", question: "'留下'의 올바른 병음은 무엇입니까?", options: ["liú xià", "liǔ xià", "liú xiá", "liúxià"], correctAnswer: "liú xià", explanation: "'留下'의 표준 병음은 liú xià 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'留下'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "liú(2) + xià(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'留下'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'남기다'라는 행동을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["留下。", "把你的名字", ""], correctAnswer: "把你的名字留下。", explanation: "把 + 목적어 + 동사 순서입니다.", difficulty: "medium" }
  ],
  62: [
    { type: "multipleChoice", question: "'别管'의 올바른 병음은 무엇입니까?", options: ["bié guǎn", "biě guǎn", "bié guàn", "biéguǎn"], correctAnswer: "bié guǎn", explanation: "'别管'의 표준 병음은 bié guǎn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'别管'의 성조 조합은 무엇입니까?", options: ["2-3", "2-4", "4-3", "3-3"], correctAnswer: "2-3", explanation: "bié(2) + guǎn(3) → 2-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'别管'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "수량 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'간섭하지 마'라는 금지/행동 표현입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你别管", "我怎么做。", ""], correctAnswer: "你别管我怎么做。", explanation: "금지 표현 + 내용절 순서입니다.", difficulty: "medium" }
  ],
  63: [
    { type: "multipleChoice", question: "'宠'의 올바른 병음은 무엇입니까?", options: ["chǒng", "chòng", "chōng", "chǒnɡ"], correctAnswer: "chǒng", explanation: "'宠'은 chǒng 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'宠'의 성조 조합은 무엇입니까?", options: ["3", "4", "1", "2"], correctAnswer: "3", explanation: "chǒng(3) → 3", difficulty: "medium" },
    { type: "multipleChoice", question: "'宠'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'응석받이로 하다/지나치게 귀여워하다'의 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["别太", "宠他了。", ""], correctAnswer: "别太宠他了。", explanation: "금지(别) + 정도(太) + 동사 순서입니다.", difficulty: "medium" }
  ],
  64: [
    { type: "multipleChoice", question: "'痛'의 올바른 병음은 무엇입니까?", options: ["tòng", "tǒng", "tōng", "tòng "], correctAnswer: "tòng", explanation: "'痛'은 tòng 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'痛'의 성조 조합은 무엇입니까?", options: ["4", "3", "2", "1"], correctAnswer: "4", explanation: "tòng(4) → 4", difficulty: "medium" },
    { type: "multipleChoice", question: "'痛'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'아프다'라는 상태(감정/신체)를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我心里", "很痛。", ""], correctAnswer: "我心里很痛。", explanation: "장소/부위 + 정도 + 상태 순서입니다.", difficulty: "medium" }
  ],
  65: [
    { type: "multipleChoice", question: "'强求'의 올바른 병음은 무엇입니까?", options: ["qiáng qiú", "qiǎng qiú", "qiáng qiǔ", "qiángqiú"], correctAnswer: "qiáng qiú", explanation: "'强求'의 표준 병음은 qiáng qiú 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'强求'의 성조 조합은 무엇입니까?", options: ["2-2", "3-2", "2-3", "4-2"], correctAnswer: "2-2", explanation: "qiáng(2) + qiú(2) → 2-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'强求'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "수량 표현", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'억지로 요구하다/강요하다'의 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["别强求", "结果马上出现。", ""], correctAnswer: "别强求结果马上出现。", explanation: "금지 + 목적어/내용절 순서입니다.", difficulty: "medium" }
  ],
  67: [
    { type: "multipleChoice", question: "'沉默寡言'의 올바른 병음은 무엇입니까?", options: ["chén mò guǎ yán", "chěn mò guǎ yán", "chén mò guà yán", "chénmò guǎyán"], correctAnswer: "chén mò guǎ yán", explanation: "성어는 음절 단위로 정확히 띄어 씁니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'沉默寡言'의 성조 조합은 무엇입니까?", options: ["2-4-3-2", "2-4-2-2", "3-4-3-2", "2-2-3-2"], correctAnswer: "2-4-3-2", explanation: "chén(2) mò(4) guǎ(3) yán(2) → 2-4-3-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'沉默寡言'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "말수가 적은 성격/상태를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他一直", "沉默寡言"], correctAnswer: "他一直沉默寡言。", explanation: "주어 + 부사(一直) + 상태 서술 순서입니다.", difficulty: "medium" }
  ],
  68: [
    { type: "multipleChoice", question: "'楚楚可怜'의 올바른 병음은 무엇입니까?", options: ["chǔ chǔ kě lián", "chú chǔ kě lián", "chǔ chǔ kè lián", "chǔchǔ kělián"], correctAnswer: "chǔ chǔ kě lián", explanation: "성어는 음절을 분리해 읽습니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'楚楚可怜'의 성조 조합은 무엇입니까?", options: ["3-3-3-2", "2-3-3-2", "3-3-4-2", "3-2-3-2"], correctAnswer: "3-3-3-2", explanation: "chǔ(3) chǔ(3) kě(3) lián(2) → 3-3-3-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'楚楚可怜'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "불쌍해 보이는 상태/인상을 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她看起来", "楚楚可怜"], correctAnswer: "她看起来楚楚可怜。", explanation: "'看起来' 뒤에 상태 묘사가 옵니다.", difficulty: "medium" }
  ],
  69: [
    { type: "multipleChoice", question: "'消遣'의 올바른 병음은 무엇입니까?", options: ["xiāo qiǎn", "xiáo qiǎn", "xiāo qiàn", "xiāoqiǎn"], correctAnswer: "xiāo qiǎn", explanation: "'消遣'의 표준 병음은 xiāo qiǎn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'消遣'의 성조 조합은 무엇입니까?", options: ["1-3", "2-3", "1-4", "3-3"], correctAnswer: "1-3", explanation: "xiāo(1) + qiǎn(3) → 1-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'消遣'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'시간을 보내다'의 행위를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["周末", "我喜欢", "听歌消遣"], correctAnswer: "周末我喜欢听歌消遣。", explanation: "시간 + 주어 + 선호 + 행동 순서입니다.", difficulty: "medium" }
  ],
  70: [
    { type: "multipleChoice", question: "'贵贱'의 올바른 병음은 무엇입니까?", options: ["guì jiàn", "guǐ jiàn", "guì jiān", "guìjiàn"], correctAnswer: "guì jiàn", explanation: "'贵贱'의 표준 병음은 guì jiàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'贵贱'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "4-1", "2-4"], correctAnswer: "4-4", explanation: "guì(4) + jiàn(4) → 4-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'贵贱'는 위 문장에서 어떤 역할을 합니까?", options: ["상태/속성 표현", "장소 표현", "시간 표현", "동작 표현"], correctAnswer: "상태/속성 표현", explanation: "가격의 높고 낮음(속성)을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["东西不分贵贱", "都要", "珍惜"], correctAnswer: "东西不分贵贱，都要珍惜。", explanation: "앞절(구분하지 않음) + 뒷절(태도) 구조입니다.", difficulty: "medium" }
  ],
  71: [
    { type: "multipleChoice", question: "'接着'의 올바른 병음은 무엇입니까?", options: ["jiē zhe", "jié zhe", "jiē zhè", "jiēzhe"], correctAnswer: "jiē zhe", explanation: "'接着'의 표준 병음은 jiē zhe 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'接着'의 성조 조합은 무엇입니까?", options: ["1-5", "1-4", "2-5", "3-5"], correctAnswer: "1-5", explanation: "jiē(1) + zhe(중성) → 1-5", difficulty: "medium" },
    { type: "multipleChoice", question: "'接着'는 위 문장에서 어떤 역할을 합니까?", options: ["순서/연속 표현", "시간 표현", "장소 표현", "대상 표현"], correctAnswer: "순서/연속 표현", explanation: "앞 행동 다음에 '이어' 한다는 뜻입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你先写", "我接着写"], correctAnswer: "你先写，我接着写。", explanation: "전반+후반의 대조 구조를 유지합니다.", difficulty: "medium" }
  ],
  72: [
    { type: "multipleChoice", question: "'消灭'의 올바른 병음은 무엇입니까?", options: ["xiāo miè", "xiáo miè", "xiāo miě", "xiāomiè"], correctAnswer: "xiāo miè", explanation: "'消灭'의 표준 병음은 xiāo miè 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'消灭'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "xiāo(1) + miè(4) → 1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'消灭'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "수량 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'없애다/근절하다'라는 행동을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "消灭", "浪费"], correctAnswer: "我们要消灭浪费。", explanation: "조동사(要) + 동사 + 목적어 순서입니다.", difficulty: "medium" }
  ],
  73: [
    { type: "multipleChoice", question: "'不相欠'의 올바른 병음은 무엇입니까?", options: ["bù xiāng qiàn", "bú xiāng qiàn", "bù xiǎng qiàn", "bù xiāng qián"], correctAnswer: "bù xiāng qiàn", explanation: "'不相欠'의 표준 병음은 bù xiāng qiàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'不相欠'의 성조 조합은 무엇입니까?", options: ["4-1-4", "2-1-4", "4-2-4", "4-1-2"], correctAnswer: "4-1-4", explanation: "bù(4) xiāng(1) qiàn(4) → 4-1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'不相欠'는 위 문장에서 어떤 역할을 합니까?", options: ["관계/상태 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "관계/상태 표현", explanation: "서로 빚이나 의무가 없다는 상태를 말합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你帮我一次", "我们就", "不相欠了"], correctAnswer: "你帮我一次，我们就不相欠了。", explanation: "조건/사실 + 결과 구조를 유지합니다.", difficulty: "medium" }
  ],
  74: [
    { type: "multipleChoice", question: "'拿走'의 올바른 병음은 무엇입니까?", options: ["ná zǒu", "nà zǒu", "ná zòu", "názou"], correctAnswer: "ná zǒu", explanation: "'拿走'는 ná zǒu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'의 성조 조합은 무엇입니까?", options: ["2-3", "2-4", "4-3", "3-3"], correctAnswer: "2-3", explanation: "ná(2) + zǒu(3) → 2-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "'拿走'는 '가져가다'라는 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["把这些文件", "拿走。", "请你"], correctAnswer: "请你把这些文件拿走。", explanation: "공손 표현 + 把구문 + 동사 순서입니다.", difficulty: "medium" }
  ],
  75: [
    { type: "multipleChoice", question: "'回忆'의 올바른 병음은 무엇입니까?", options: ["huí yì", "huǐ yì", "huí yí", "huíyì"], correctAnswer: "huí yì", explanation: "'回忆'는 huí yì 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'回忆'의 성조 조합은 무엇입니까?", options: ["2-4", "3-4", "2-2", "4-4"], correctAnswer: "2-4", explanation: "huí(2) + yì(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'回忆'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'회상하다'라는 행위를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["听到这首歌，", "我会", "回忆起过去。"], correctAnswer: "听到这首歌，我会回忆起过去。", explanation: "앞절(상황) + 뒷절(행동) 구조입니다.", difficulty: "medium" }
  ],
  76: [
    { type: "multipleChoice", question: "'在乎'의 올바른 병음은 무엇입니까?", options: ["zài hu", "zǎi hu", "zài hú", "zàihu"], correctAnswer: "zài hu", explanation: "'在乎'는 zài hu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'在乎'의 성조 조합은 무엇입니까?", options: ["4-5", "4-2", "3-5", "4-4"], correctAnswer: "4-5", explanation: "zài(4) + hu(중성) → 4-5", difficulty: "medium" },
    { type: "multipleChoice", question: "'在乎'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "태도 표현", explanation: "'중요하게 여기다/신경 쓰다'의 태도입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我只", "在乎", "你的感受。"], correctAnswer: "我只在乎你的感受。", explanation: "제한(只) + 동사 + 목적어 순서입니다.", difficulty: "medium" }
  ],
  77: [
    { type: "multipleChoice", question: "'体面'의 올바른 병음은 무엇입니까?", options: ["tǐ miàn", "tí miàn", "tǐ mián", "tǐmiàn"], correctAnswer: "tǐ miàn", explanation: "'体面'는 tǐ miàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'体面'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-2", "4-4"], correctAnswer: "3-4", explanation: "tǐ(3) + miàn(4) → 3-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'体面'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "'품위 있게'라는 방식/상태를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他想", "体面地", "道别。"], correctAnswer: "他想体面地道别。", explanation: "동사(想) 뒤에 방식(体面地)이 옵니다.", difficulty: "medium" }
  ],
  78: [
    { type: "multipleChoice", question: "'赠品'의 올바른 병음은 무엇입니까?", options: ["zèng pǐn", "zèng pín", "zěng pǐn", "zèngpǐn"], correctAnswer: "zèng pǐn", explanation: "'赠品'는 zèng pǐn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'赠品'의 성조 조합은 무엇입니까?", options: ["4-3", "4-2", "3-3", "4-4"], correctAnswer: "4-3", explanation: "zèng(4) + pǐn(3) → 4-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'赠品'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "가격 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'赠品'은 '사은품'이라는 명사 대상입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个杯子", "是", "赠品。"], correctAnswer: "这个杯子是赠品。", explanation: "A + 是 + B 기본 문장입니다.", difficulty: "medium" }
  ],
  79: [
    { type: "multipleChoice", question: "'迁就'의 올바른 병음은 무엇입니까?", options: ["qiān jiù", "qiǎn jiù", "qiān jiǔ", "qiānjiù"], correctAnswer: "qiān jiù", explanation: "'迁就'는 qiān jiù 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'迁就'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "qiān(1) + jiù(4) → 1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'迁就'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "동작 표현", "장소 표현", "수량 표현"], correctAnswer: "태도 표현", explanation: "상대에게 '맞춰 주는' 태도/방식입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他总是", "迁就", "别人。"], correctAnswer: "他总是迁就别人。", explanation: "빈도 부사(总是) + 동사 + 목적어입니다.", difficulty: "medium" }
  ],
  80: [
    { type: "multipleChoice", question: "'借口'의 올바른 병음은 무엇입니까?", options: ["jiè kǒu", "jiě kǒu", "jiè kòu", "jièkǒu"], correctAnswer: "jiè kǒu", explanation: "'借口'는 jiè kǒu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'借口'의 성조 조합은 무엇입니까?", options: ["4-3", "3-3", "4-4", "2-3"], correctAnswer: "4-3", explanation: "jiè(4) + kǒu(3) → 4-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'借口'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "대상 표현", explanation: "'핑계'라는 명사 대상입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他用工作", "当", "借口。"], correctAnswer: "他用工作当借口。", explanation: "用 A 当 B 구조입니다.", difficulty: "medium" }
  ],
  81: [
    { type: "multipleChoice", question: "'三遍'의 올바른 병음은 무엇입니까?", options: ["sān biàn", "sǎn biàn", "sān bián", "sānbiàn"], correctAnswer: "sān biàn", explanation: "'三遍'는 sān biàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'三遍'의 성조 조합은 무엇입니까?", options: ["1-4", "1-2", "3-4", "1-3"], correctAnswer: "1-4", explanation: "sān(1) + biàn(4) → 1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'三遍'는 위 문장에서 어떤 역할을 합니까?", options: ["수량 표현", "시간 표현", "장소 표현", "상태 묘사"], correctAnswer: "수량 표현", explanation: "'세 번'이라는 횟수를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这句话", "我读了", "三遍。"], correctAnswer: "这句话我读了三遍。", explanation: "주제 + 주어/동사 + 횟수 순서입니다.", difficulty: "medium" }
  ],
  82: [
    { type: "multipleChoice", question: "'百口莫辩'의 올바른 병음은 무엇입니까?", options: ["bǎi kǒu mò biàn", "bái kǒu mò biàn", "bǎi kǒu mó biàn", "bǎi kǒu mò bián"], correctAnswer: "bǎi kǒu mò biàn", explanation: "성어는 음절 단위로 정확히 읽습니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'百口莫辩'의 성조 조합은 무엇입니까?", options: ["3-3-4-4", "2-3-4-4", "3-2-4-4", "3-3-2-4"], correctAnswer: "3-3-4-4", explanation: "bǎi(3) kǒu(3) mò(4) biàn(4) → 3-3-4-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'百口莫辩'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "수량 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'아무리 말해도 변명할 수 없는 처지'를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["出了这种事，", "我真是", "百口莫辩。"], correctAnswer: "出了这种事，我真是百口莫辩。", explanation: "상황 제시 후 결론을 말합니다.", difficulty: "medium" }
  ],
  83: [
    { type: "multipleChoice", question: "'兑现'의 올바른 병음은 무엇입니까?", options: ["duì xiàn", "duǐ xiàn", "duì xiān", "duìxiàn"], correctAnswer: "duì xiàn", explanation: "'兑现'는 duì xiàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'兑现'의 성조 조합은 무엇입니까?", options: ["4-4", "4-2", "2-4", "3-4"], correctAnswer: "4-4", explanation: "duì(4) + xiàn(4) → 4-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'兑现'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "장소 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "약속을 '지키다/실행하다'라는 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["请按时", "兑现", "你的承诺。"], correctAnswer: "请按时兑现你的承诺。", explanation: "부사(按时) + 동사 + 목적어 순서입니다.", difficulty: "medium" }
  ],
  84: [
    { type: "multipleChoice", question: "'贪得无厌'의 올바른 병음은 무엇입니까?", options: ["tān dé wú yàn", "tán dé wú yàn", "tān dě wú yàn", "tān dé wǔ yàn"], correctAnswer: "tān dé wú yàn", explanation: "성어의 성조를 정확히 구분하세요.", difficulty: "medium" },
    { type: "multipleChoice", question: "'贪得无厌'의 성조 조합은 무엇입니까?", options: ["1-2-2-4", "2-2-2-4", "1-3-2-4", "1-2-3-4"], correctAnswer: "1-2-2-4", explanation: "tān(1) dé(2) wú(2) yàn(4) → 1-2-2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'贪得无厌'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "만족할 줄 모르는 성향/상태를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他对金钱", "贪得无厌。", ""], correctAnswer: "他对金钱贪得无厌。", explanation: "对 + 대상 + 성어 서술 구조입니다.", difficulty: "medium" }
  ],
  85: [
    { type: "multipleChoice", question: "'尊严'의 올바른 병음은 무엇입니까?", options: ["zūn yán", "zún yán", "zūn yǎn", "zūnyán"], correctAnswer: "zūn yán", explanation: "'尊严'는 zūn yán 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'尊严'의 성조 조합은 무엇입니까?", options: ["1-2", "2-2", "1-3", "4-2"], correctAnswer: "1-2", explanation: "zūn(1) + yán(2) → 1-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'尊严'는 위 문장에서 어떤 역할을 합니까?", options: ["대상 표현", "동작 표현", "장소 표현", "시간 표현"], correctAnswer: "대상 표현", explanation: "비교 대상이 되는 명사입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["尊严", "比面子", "更重要。"], correctAnswer: "尊严比面子更重要。", explanation: "A 比 B + 더(更) + 형용사 구조입니다.", difficulty: "medium" }
  ],
  86: [
    { type: "multipleChoice", question: "'干脆'의 올바른 병음은 무엇입니까?", options: ["gān cuì", "gǎn cuì", "gān cuī", "gāncùi"], correctAnswer: "gān cuì", explanation: "'干脆'는 gān cuì 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'干脆'의 성조 조합은 무엇입니까?", options: ["1-4", "3-4", "2-4", "1-1"], correctAnswer: "1-4", explanation: "gān(1) + cuì(4) → 1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'干脆'는 위 문장에서 어떤 역할을 합니까?", options: ["태도 표현", "시간 표현", "장소 표현", "수량 표현"], correctAnswer: "태도 표현", explanation: "'아예/단호하게' 결정을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["太麻烦了，", "干脆", "不去了。"], correctAnswer: "太麻烦了，干脆不去了。", explanation: "이유 제시 후 결정을 말합니다.", difficulty: "medium" }
  ],
  87: [
    { type: "multipleChoice", question: "'拿走'의 올바른 병음은 무엇입니까?", options: ["ná zǒu", "nà zǒu", "ná zòu", "názǒu"], correctAnswer: "ná zǒu", explanation: "'拿走'는 ná zǒu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'의 성조 조합은 무엇입니까?", options: ["2-3", "2-4", "4-3", "3-3"], correctAnswer: "2-3", explanation: "ná(2) + zǒu(3) → 2-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'拿走'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "대상 표현", "시간 표현", "상태 묘사"], correctAnswer: "동작 표현", explanation: "'拿走'는 '가져가다' 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这些不用了，", "你", "拿走吧。"], correctAnswer: "这些不用了，你拿走吧。", explanation: "앞절(상황) + 뒷절(요청) 구조입니다.", difficulty: "medium" }
  ],
  88: [
    { type: "multipleChoice", question: "'承受'의 올바른 병음은 무엇입니까?", options: ["chéng shòu", "chěng shòu", "chéng shǒu", "chéngshòu"], correctAnswer: "chéng shòu", explanation: "'承受'는 chéng shòu 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'承受'의 성조 조합은 무엇입니까?", options: ["2-4", "2-3", "3-4", "4-4"], correctAnswer: "2-4", explanation: "chéng(2) + shòu(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'承受'는 위 문장에서 어떤 역할을 합니까?", options: ["경험 표현", "수량 표현", "장소 표현", "시간 표현"], correctAnswer: "경험 표현", explanation: "실패를 '감당하다'라는 의미입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他", "承受得起", "失败。"], correctAnswer: "他承受得起失败。", explanation: "주어 + 가능 보어(得起) 포함 동사구입니다.", difficulty: "medium" }
  ],
  89: [
    { type: "multipleChoice", question: "'留下'의 올바른 병음은 무엇입니까?", options: ["liú xià", "liǔ xià", "liú xiá", "liúxià"], correctAnswer: "liú xià", explanation: "'留下'는 liú xià 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'留下'의 성조 조합은 무엇입니까?", options: ["2-4", "2-2", "3-4", "4-4"], correctAnswer: "2-4", explanation: "liú(2) + xià(4) → 2-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'留下'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "연락처를 '남기다'라는 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["你可以", "留下", "联系方式。"], correctAnswer: "你可以留下联系方式。", explanation: "가능(可以) + 동사 + 목적어입니다.", difficulty: "medium" }
  ],
  90: [
    { type: "multipleChoice", question: "'有用'의 올바른 병음은 무엇입니까?", options: ["yǒu yòng", "yóu yòng", "yǒu yǒng", "yǒuyòng"], correctAnswer: "yǒu yòng", explanation: "'有用'는 yǒu yòng 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'有用'의 성조 조합은 무엇입니까?", options: ["3-4", "2-4", "3-3", "4-4"], correctAnswer: "3-4", explanation: "yǒu(3) + yòng(4) → 3-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'有用'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "'유용하다'라는 상태/평가를 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这个建议", "很", "有用。"], correctAnswer: "这个建议很有用。", explanation: "주어 + 정도(很) + 형용사입니다.", difficulty: "medium" }
  ],
  91: [
    { type: "multipleChoice", question: "'宠'의 올바른 병음은 무엇입니까?", options: ["chǒng", "chòng", "chōng", "chǒnɡ"], correctAnswer: "chǒng", explanation: "'宠'은 chǒng 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'宠'의 성조 조합은 무엇입니까?", options: ["3", "4", "1", "2"], correctAnswer: "3", explanation: "chǒng(3) → 3", difficulty: "medium" },
    { type: "multipleChoice", question: "'宠'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "장소 표현", "수량 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'귀여워하다/응석받이로 하다'의 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["爷爷", "最", "宠我。"], correctAnswer: "爷爷最宠我。", explanation: "최상(最) + 동사(宠) 구조입니다.", difficulty: "medium" }
  ],
  92: [
    { type: "multipleChoice", question: "'懂'의 올바른 병음은 무엇입니까?", options: ["dǒng", "dòng", "dōng", "dǒng "], correctAnswer: "dǒng", explanation: "'懂'은 dǒng 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'懂'의 성조 조합은 무엇입니까?", options: ["3", "4", "1", "2"], correctAnswer: "3", explanation: "dǒng(3) → 3", difficulty: "medium" },
    { type: "multipleChoice", question: "'懂'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'이해하다'라는 행동(인지)을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我", "懂", "你的意思。"], correctAnswer: "我懂你的意思。", explanation: "주어 + 동사 + 목적어입니다.", difficulty: "medium" }
  ],
  93: [
    { type: "multipleChoice", question: "'强求'의 올바른 병음은 무엇입니까?", options: ["qiáng qiú", "qiǎng qiú", "qiáng qiǔ", "qiángqiú"], correctAnswer: "qiáng qiú", explanation: "'强求'는 qiáng qiú 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'强求'의 성조 조합은 무엇입니까?", options: ["2-2", "3-2", "2-3", "4-2"], correctAnswer: "2-2", explanation: "qiáng(2) + qiú(2) → 2-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'强求'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "수량 표현", "장소 표현", "시간 표현"], correctAnswer: "동작 표현", explanation: "'억지로 요구하다'라는 행동을 말합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["感情", "不能", "强求。"], correctAnswer: "感情不能强求。", explanation: "주제 + 가능/금지(不能) + 동사입니다.", difficulty: "medium" }
  ],
  95: [
    { type: "multipleChoice", question: "'沉默寡言'의 올바른 병음은 무엇입니까?", options: ["chén mò guǎ yán", "chěn mò guǎ yán", "chén mò guà yán", "chénmò guǎyán"], correctAnswer: "chén mò guǎ yán", explanation: "성어는 음절 단위로 띄어 씁니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'沉默寡言'의 성조 조합은 무엇입니까?", options: ["2-4-3-2", "2-4-2-2", "3-4-3-2", "2-2-3-2"], correctAnswer: "2-4-3-2", explanation: "chén(2) mò(4) guǎ(3) yán(2) → 2-4-3-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'沉默寡言'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "수량 표현"], correctAnswer: "상태 묘사", explanation: "말수가 적은 상태를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["他在会议上", "也", "沉默寡言。"], correctAnswer: "他在会议上也沉默寡言。", explanation: "장소 + 부사(也) + 상태 서술입니다.", difficulty: "medium" }
  ],
  96: [
    { type: "multipleChoice", question: "'楚楚可怜'의 올바른 병음은 무엇입니까?", options: ["chǔ chǔ kě lián", "chú chǔ kě lián", "chǔ chǔ kè lián", "chǔchǔ kělián"], correctAnswer: "chǔ chǔ kě lián", explanation: "성어는 음절 단위로 읽습니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'楚楚可怜'의 성조 조합은 무엇입니까?", options: ["3-3-3-2", "2-3-3-2", "3-3-4-2", "3-2-3-2"], correctAnswer: "3-3-3-2", explanation: "chǔ(3) chǔ(3) kě(3) lián(2) → 3-3-3-2", difficulty: "medium" },
    { type: "multipleChoice", question: "'楚楚可怜'는 위 문장에서 어떤 역할을 합니까?", options: ["상태 묘사", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태 묘사", explanation: "불쌍해 보이는 인상/상태를 묘사합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["她一哭就", "显得", "楚楚可怜。"], correctAnswer: "她一哭就显得楚楚可怜。", explanation: "조건(一…就…) + 결과(显得…)입니다.", difficulty: "medium" }
  ],
  97: [
    { type: "multipleChoice", question: "'消遣'의 올바른 병음은 무엇입니까?", options: ["xiāo qiǎn", "xiáo qiǎn", "xiāo qiàn", "xiāoqiǎn"], correctAnswer: "xiāo qiǎn", explanation: "'消遣'는 xiāo qiǎn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'消遣'의 성조 조합은 무엇입니까?", options: ["1-3", "2-3", "1-4", "3-3"], correctAnswer: "1-3", explanation: "xiāo(1) + qiǎn(3) → 1-3", difficulty: "medium" },
    { type: "multipleChoice", question: "'消遣'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "시간 표현", "대상 표현", "장소 표현"], correctAnswer: "동작 표현", explanation: "'시간을 보내다'라는 행위입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我用散步", "来", "消遣时间。"], correctAnswer: "我用散步来消遣时间。", explanation: "用 A 来 + 동사 + 목적어 구조입니다.", difficulty: "medium" }
  ],
  98: [
    { type: "multipleChoice", question: "'贵贱'의 올바른 병음은 무엇입니까?", options: ["guì jiàn", "guǐ jiàn", "guì jiān", "guìjiàn"], correctAnswer: "guì jiàn", explanation: "'贵贱'는 guì jiàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'贵贱'의 성조 조합은 무엇입니까?", options: ["4-4", "3-4", "4-1", "2-4"], correctAnswer: "4-4", explanation: "guì(4) + jiàn(4) → 4-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'贵贱'는 위 문장에서 어떤 역할을 합니까?", options: ["상태/속성 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "상태/속성 표현", explanation: "신분/가치의 높고 낮음(속성)을 뜻합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["朋友不分贵贱，", "真心", "最重要。"], correctAnswer: "朋友不分贵贱，真心最重要。", explanation: "앞절 주장 + 뒷절 결론 구조입니다.", difficulty: "medium" }
  ],
  99: [
    { type: "multipleChoice", question: "'接着'의 올바른 병음은 무엇입니까?", options: ["jiē zhe", "jié zhe", "jiē zhè", "jiēzhe"], correctAnswer: "jiē zhe", explanation: "'接着'는 jiē zhe 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'接着'의 성조 조합은 무엇입니까?", options: ["1-5", "1-4", "2-5", "3-5"], correctAnswer: "1-5", explanation: "jiē(1) + zhe(중성) → 1-5", difficulty: "medium" },
    { type: "multipleChoice", question: "'接着'는 위 문장에서 어떤 역할을 합니까?", options: ["순서/연속 표현", "장소 표현", "수량 표현", "대상 표현"], correctAnswer: "순서/연속 표현", explanation: "앞 행동 뒤에 '계속' 이어짐을 나타냅니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["先休息一下，", "接着", "再做。"], correctAnswer: "先休息一下，接着再做。", explanation: "첫 행동 후 이어서 다음 행동을 합니다.", difficulty: "medium" }
  ],
  100: [
    { type: "multipleChoice", question: "'消灭'의 올바른 병음은 무엇입니까?", options: ["xiāo miè", "xiáo miè", "xiāo miě", "xiāomiè"], correctAnswer: "xiāo miè", explanation: "'消灭'는 xiāo miè 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'消灭'의 성조 조합은 무엇입니까?", options: ["1-4", "2-4", "1-3", "4-4"], correctAnswer: "1-4", explanation: "xiāo(1) + miè(4) → 1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'消灭'는 위 문장에서 어떤 역할을 합니까?", options: ["동작 표현", "상태 묘사", "시간 표현", "수량 표현"], correctAnswer: "동작 표현", explanation: "'없애다/근절하다'라는 행동입니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["我们要", "消灭", "谣言。"], correctAnswer: "我们要消灭谣言。", explanation: "조동사(要) + 동사 + 목적어입니다.", difficulty: "medium" }
  ],
  101: [
    { type: "multipleChoice", question: "'不相欠'의 올바른 병음은 무엇입니까?", options: ["bù xiāng qiàn", "bú xiāng qiàn", "bù xiǎng qiàn", "bù xiāng qián"], correctAnswer: "bù xiāng qiàn", explanation: "'不相欠'는 bù xiāng qiàn 입니다.", difficulty: "medium" },
    { type: "multipleChoice", question: "'不相欠'의 성조 조합은 무엇입니까?", options: ["4-1-4", "2-1-4", "4-2-4", "4-1-2"], correctAnswer: "4-1-4", explanation: "bù(4) xiāng(1) qiàn(4) → 4-1-4", difficulty: "medium" },
    { type: "multipleChoice", question: "'不相欠'는 위 문장에서 어떤 역할을 합니까?", options: ["관계/상태 표현", "동작 표현", "시간 표현", "장소 표현"], correctAnswer: "관계/상태 표현", explanation: "서로 빚/의무가 없다는 상태를 뜻합니다.", difficulty: "medium" },
    { type: "sentenceOrder", question: "다음 문장을 올바른 순서로 배열하세요.", options: ["这次我请客，", "我们就", "不相欠了。"], correctAnswer: "这次我请客，我们就不相欠了。", explanation: "앞절(행동) + 결과(관계 정리) 구조입니다.", difficulty: "medium" }
  ]
};

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  return niyaodequannazousPractice[sentenceIndex] || [];
}
