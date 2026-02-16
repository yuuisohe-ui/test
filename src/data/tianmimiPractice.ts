// 甜蜜蜜词汇训练题海战术数据

export interface PracticeQuestion {
  type: 'multipleChoice' | 'translation' | 'fillBlank' | 'sentenceOrder';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface SentencePractice {
  sentenceIndex: number;
  questions: PracticeQuestion[];
}

export const practiceData: SentencePractice[] = [
  {
    sentenceIndex: 1,
    questions: [
      {
        type: 'multipleChoice',
        question: "‘甜蜜蜜’의 올바른 병음은 무엇입니까?",
        options: ['tián mì mì', 'tián mǐ mì', 'tian mì mì', 'tián mìmi'
        ],
        correctAnswer: 'tián mì mì',
        explanation: '성조와 분절이 모두 맞는 병음을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘甜蜜蜜’의 성조 조합은 무엇입니까?",
        options: ['2-4-4', '2-3-4', '4-4-4', '2-4-2'
        ],
        correctAnswer: '2-4-4',
        explanation: '각 음절의 성조를 숫자로 확인하세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘甜蜜蜜’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '장소 표현', '동작 표현', '시간 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '문장 속에서 성질/상태를 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['甜蜜蜜的', '。', '她的笑容'
        ],
        correctAnswer: '她的笑容甜蜜蜜的。',
        explanation: '원문 어순과 문장부호까지 맞추세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 2,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘好像’의 올바른 병음은 무엇입니까?",
        options: ['hǎo xiàng', 'háo xiàng', 'hǎo xiāng', 'hào xiàng'
        ],
        correctAnswer: 'hǎo xiàng',
        explanation: '성조가 정확한 병음을 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘好像’의 성조 조합은 무엇입니까?",
        options: ['3-4', '2-4', '3-1', '4-4'
        ],
        correctAnswer: '3-4',
        explanation: '숫자 성조 조합을 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘好像’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '동작 표현', '장소 표현', '수량 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '추측/느낌으로 상태를 말합니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['很累', '。', '他好像'
        ],
        correctAnswer: '他好像很累。',
        explanation: '원문 순서대로 배열하세요.',
        difficulty: 'easy'
      },
      
      {
        type: 'multipleChoice',
        question: "‘春风’의 올바른 병음은 무엇입니까?",
        options: ['chūn fēng', 'chún fēng', 'chūn fěng', 'chūnfēng'
        ],
        correctAnswer: 'chūn fēng',
        explanation: '성조/띄어쓰기가 맞는 병음을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘春风’의 성조 조합은 무엇입니까?",
        options: ['1-1', '1-2', '2-1', '4-4'
        ],
        correctAnswer: '1-1',
        explanation: '두 음절 모두 1성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘春风’는 위 문장에서 어떤 역할을 합니까?",
        options: ['대상 표현', '시간 표현', '상태 묘사', '수량 표현'
        ],
        correctAnswer: '대상 표현',
        explanation: '문장의 주체/대상을 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['吹过', '田野。', '春风'
        ],
        correctAnswer: '春风吹过田野。',
        explanation: '자연스러운 어순으로 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 3,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘春风’의 올바른 병음은 무엇입니까?",
        options: ['chūn fēng', 'chún fēng', 'chūn fěng', 'chūnfēng'
        ],
        correctAnswer: 'chūn fēng',
        explanation: '정확한 성조의 병음을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘春风’의 성조 조합은 무엇입니까?",
        options: ['1-1', '1-4', '2-1', '3-3'
        ],
        correctAnswer: '1-1',
        explanation: '성조 숫자 조합을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘春风’는 위 문장에서 어떤 역할을 합니까?",
        options: ['대상 표현', '동작 표현', '장소 표현', '경험 표현'
        ],
        correctAnswer: '대상 표현',
        explanation: '문장의 주어 역할입니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['春风', '吹过', '田野。'
        ],
        correctAnswer: '春风吹过田野。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 4,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘见过’의 올바른 병음은 무엇입니까?",
        options: ['jiàn guò', 'jiàn guo', 'jiān guò', 'jiàn guǒ'
        ],
        correctAnswer: 'jiàn guò',
        explanation: '성조가 표시된 병음을 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’의 성조 조합은 무엇입니까?",
        options: ['4-4', '4-2', '2-4', '3-3'
        ],
        correctAnswer: '4-4',
        explanation: '두 음절 모두 4성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '장소 표현', '상태 묘사', '시간 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘본 적이 있다’의 동작/경험을 말합니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['。', '他一次', '我见过'
        ],
        correctAnswer: '我见过他一次。',
        explanation: '문장부호까지 정확히 맞추세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 5,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘笑容’의 올바른 병음은 무엇입니까?",
        options: ['xiào róng', 'xiáo róng', 'xiào ròng', 'xiao róng'
        ],
        correctAnswer: 'xiào róng',
        explanation: '성조가 맞는 병음을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’의 성조 조합은 무엇입니까?",
        options: ['4-2', '2-2', '4-4', '3-2'
        ],
        correctAnswer: '4-2',
        explanation: '첫 음절 4성, 둘째 2성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’는 위 문장에서 어떤 역할을 합니까?",
        options: ['대상 표현', '동작 표현', '시간 표현', '수량 표현'
        ],
        correctAnswer: '대상 표현',
        explanation: '사람의 ‘미소’라는 대상을 말합니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['很温暖', '。', '她的笑容'
        ],
        correctAnswer: '她的笑容很温暖。',
        explanation: '원문 어순대로 배열하세요.',
        difficulty: 'medium'
      },
      
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 올바른 병음은 무엇입니까?",
        options: ['shú xī', 'shǔ xī', 'shú xí', 'shúxī'
        ],
        correctAnswer: 'shú xī',
        explanation: '띄어쓰기와 성조를 확인하세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 성조 조합은 무엇입니까?",
        options: ['2-1', '3-1', '2-2', '1-1'
        ],
        correctAnswer: '2-1',
        explanation: '2성-1성 조합입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '동작 표현', '장소 표현', '시간 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '‘익숙하다’라는 상태를 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['很熟悉', '我对这个地方', '。'
        ],
        correctAnswer: '我对这个地方很熟悉。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 6,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘想不起’의 올바른 병음은 무엇입니까?",
        options: ['xiǎng bu qǐ', 'xiǎng bù qǐ', 'xiāng bu qǐ', 'xiǎng bu qì'
        ],
        correctAnswer: 'xiǎng bu qǐ',
        explanation: '가벼운 음절(bu)은 보통 무성조로 표기합니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’의 성조 조합은 무엇입니까?",
        options: ['3-0-3', '3-4-3', '2-0-3', '3-0-2'
        ],
        correctAnswer: '3-0-3',
        explanation: 'bu는 0(경성)으로 처리합니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '상태 묘사', '장소 표현', '시간 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘떠올리지 못하다’의 동작을 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['他的名字', '。', '我想不起'
        ],
        correctAnswer: '我想不起他的名字。',
        explanation: '원문 어순을 그대로 맞추세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 7,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦里’의 올바른 병음은 무엇입니까?",
        options: ['mèng lǐ', 'méng lǐ', 'mèng lī', 'mèngli'
        ],
        correctAnswer: 'mèng lǐ',
        explanation: '성조와 분절(띄어쓰기)을 확인하세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’의 성조 조합은 무엇입니까?",
        options: ['4-3', '2-3', '4-1', '4-4'
        ],
        correctAnswer: '4-3',
        explanation: '4성-3성 조합입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’는 위 문장에서 어떤 역할을 합니까?",
        options: ['장소 표현', '동작 표현', '상태 묘사', '수량 표현'
        ],
        correctAnswer: '장소 표현',
        explanation: '‘어디에서’에 해당하는 장소/범위를 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['见过你', '我在梦里', '。'
        ],
        correctAnswer: '我在梦里见过你。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 8,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦里’의 올바른 병음은 무엇입니까?",
        options: ['mèng lǐ', 'méng lǐ', 'mèng lī', 'mèngli'
        ],
        correctAnswer: 'mèng lǐ',
        explanation: '정확한 병음을 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’의 성조 조합은 무엇입니까?",
        options: ['4-3', '4-2', '2-3', '3-3'
        ],
        correctAnswer: '4-3',
        explanation: '성조 숫자를 확인하세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’는 위 문장에서 어떤 역할을 합니까?",
        options: ['장소 표현', '동작 표현', '시간 표현', '상태 묘사'
        ],
        correctAnswer: '장소 표현',
        explanation: '장소/범위를 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['。', '我在梦里', '见过你'
        ],
        correctAnswer: '我在梦里见过你。',
        explanation: '올바른 어순으로 배열하세요.',
        difficulty: 'easy'
      },
      
      {
        type: 'multipleChoice',
        question: "‘见过’의 올바른 병음은 무엇입니까?",
        options: ['jiàn guò', 'jiàn guo', 'jiān guò', 'jiàn guǒ'
        ],
        correctAnswer: 'jiàn guò',
        explanation: '성조까지 정확히 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’의 성조 조합은 무엇입니까?",
        options: ['4-4', '4-2', '2-4', '1-1'
        ],
        correctAnswer: '4-4',
        explanation: '4성-4성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '대상 표현', '장소 표현', '수량 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘보다/만나다’의 동작을 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['见过你', '。', '我在梦里'
        ],
        correctAnswer: '我在梦里见过你。',
        explanation: '원문 문장과 같게 배열하세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 9,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘甜蜜’의 올바른 병음은 무엇입니까?",
        options: ['tián mì', 'tián mǐ', 'tiàn mì', 'tian mì'
        ],
        correctAnswer: 'tián mì',
        explanation: '성조가 정확한 병음을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘甜蜜’의 성조 조합은 무엇입니까?",
        options: ['2-4', '2-3', '4-4', '1-4'
        ],
        correctAnswer: '2-4',
        explanation: '2성-4성 조합입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘甜蜜’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '동작 표현', '장소 표현', '시간 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '생활의 상태/분위기를 묘사합니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['他们过着', '甜蜜的生活', '。'
        ],
        correctAnswer: '他们过着甜蜜的生活。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 10,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦见’의 올바른 병음은 무엇입니까?",
        options: ['mèng jiàn', 'méng jiàn', 'mèng jiān', 'mèngjian'
        ],
        correctAnswer: 'mèng jiàn',
        explanation: '성조/띄어쓰기를 확인하세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘梦见’의 성조 조합은 무엇입니까?",
        options: ['4-4', '2-4', '4-1', '4-3'
        ],
        correctAnswer: '4-4',
        explanation: '두 음절 모두 4성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘梦见’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '장소 표현', '상태 묘사', '수량 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘꿈에서 보다’의 동작을 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['梦见了你', '。', '我昨晚'
        ],
        correctAnswer: '我昨晚梦见了你。',
        explanation: '어순과 문장부호를 맞추세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 11,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘见过’의 올바른 병음은 무엇입니까?",
        options: ['jiàn guò', 'jiān guò', 'jiàn guǒ', 'jian guò'
        ],
        correctAnswer: 'jiàn guò',
        explanation: '정확한 성조 표기를 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’의 성조 조합은 무엇입니까?",
        options: ['4-4', '2-4', '4-3', '3-3'
        ],
        correctAnswer: '4-4',
        explanation: '4성-4성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '시간 표현', '장소 표현', '상태 묘사'
        ],
        correctAnswer: '동작 표현',
        explanation: '경험/동작을 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['我见过', '。', '他一次'
        ],
        correctAnswer: '我见过他一次。',
        explanation: '원문과 같은 순서로 배열하세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 12,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘笑容’의 올바른 병음은 무엇입니까?",
        options: ['xiào róng', 'xiào ròng', 'xiáo róng', 'xiao rong'
        ],
        correctAnswer: 'xiào róng',
        explanation: '성조를 포함한 병음을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’의 성조 조합은 무엇입니까?",
        options: ['4-2', '4-4', '2-2', '3-2'
        ],
        correctAnswer: '4-2',
        explanation: '4성-2성 조합입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’는 위 문장에서 어떤 역할을 합니까?",
        options: ['대상 표현', '동작 표현', '시간 표현', '장소 표현'
        ],
        correctAnswer: '대상 표현',
        explanation: '명사로서 대상(미소)을 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['她的笑容', '。', '很温暖'
        ],
        correctAnswer: '她的笑容很温暖。',
        explanation: '원문 어순을 맞추세요.',
        difficulty: 'medium'
      },
      
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 올바른 병음은 무엇입니까?",
        options: ['shú xī', 'shú xí', 'shǔ xī', 'shu xī'
        ],
        correctAnswer: 'shú xī',
        explanation: '정확한 성조를 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 성조 조합은 무엇입니까?",
        options: ['2-1', '2-2', '3-1', '1-1'
        ],
        correctAnswer: '2-1',
        explanation: '2성-1성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '동작 표현', '시간 표현', '수량 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '‘익숙한 상태’를 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['。', '很熟悉', '我对这个地方'
        ],
        correctAnswer: '我对这个地方很熟悉。',
        explanation: '원문 순서를 맞추세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 13,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘想不起’의 올바른 병음은 무엇입니까?",
        options: ['xiǎng bu qǐ', 'xiǎng bù qǐ', 'xiáng bu qǐ', 'xiǎng bu qì'
        ],
        correctAnswer: 'xiǎng bu qǐ',
        explanation: '기본 표기(경성 bu)를 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’의 성조 조합은 무엇입니까?",
        options: ['3-0-3', '3-4-3', '2-0-3', '3-0-2'
        ],
        correctAnswer: '3-0-3',
        explanation: 'bu는 0으로 처리합니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '상태 묘사', '장소 표현', '수량 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘기억해내지 못하다’의 동작입니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['我想不起', '他的名字', '。'
        ],
        correctAnswer: '我想不起他的名字。',
        explanation: '원문과 같게 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 14,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦里’의 올바른 병음은 무엇입니까?",
        options: ['mèng lǐ', 'mèng lì', 'méng lǐ', 'meng lǐ'
        ],
        correctAnswer: 'mèng lǐ',
        explanation: '둘째 음절은 3성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’의 성조 조합은 무엇입니까?",
        options: ['4-3', '4-4', '2-3', '4-2'
        ],
        correctAnswer: '4-3',
        explanation: '4성-3성 조합입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’는 위 문장에서 어떤 역할을 합니까?",
        options: ['장소 표현', '동작 표현', '시간 표현', '대상 표현'
        ],
        correctAnswer: '장소 표현',
        explanation: '장소/범위를 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['见过你', '。', '我在梦里'
        ],
        correctAnswer: '我在梦里见过你。',
        explanation: '원문 어순을 맞추세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 15,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘见过’의 올바른 병음은 무엇입니까?",
        options: ['jiàn guò', 'jiàn guo', 'jiān guò', 'jiàn guǒ'
        ],
        correctAnswer: 'jiàn guò',
        explanation: '정확한 성조 표기를 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’의 성조 조합은 무엇입니까?",
        options: ['4-4', '4-1', '2-4', '3-3'
        ],
        correctAnswer: '4-4',
        explanation: '두 음절 모두 4성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '장소 표현', '상태 묘사', '수량 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '경험 동작을 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['他一次', '我见过', '。'
        ],
        correctAnswer: '我见过他一次。',
        explanation: '원문과 같게 배열하세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 16,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘笑容’의 올바른 병음은 무엇입니까?",
        options: ['xiào róng', 'xiáo róng', 'xiào ròng', 'xiao róng'
        ],
        correctAnswer: 'xiào róng',
        explanation: '정확한 성조를 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’의 성조 조합은 무엇입니까?",
        options: ['4-2', '2-2', '4-4', '1-2'
        ],
        correctAnswer: '4-2',
        explanation: '4성-2성 조합입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’는 위 문장에서 어떤 역할을 합니까?",
        options: ['대상 표현', '동작 표현', '장소 표현', '시간 표현'
        ],
        correctAnswer: '대상 표현',
        explanation: '명사로서 대상(미소)을 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['。', '她的笑容', '很温暖'
        ],
        correctAnswer: '她的笑容很温暖。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'medium'
      },
      
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 올바른 병음은 무엇입니까?",
        options: ['shú xī', 'shǔ xī', 'shú xí', 'shúxī'
        ],
        correctAnswer: 'shú xī',
        explanation: '성조와 띄어쓰기를 확인하세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 성조 조합은 무엇입니까?",
        options: ['2-1', '3-1', '2-2', '4-1'
        ],
        correctAnswer: '2-1',
        explanation: '2성-1성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '동작 표현', '시간 표현', '수량 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '‘익숙한 상태’를 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['我对这个地方', '。', '很熟悉'
        ],
        correctAnswer: '我对这个地方很熟悉。',
        explanation: '원문 순서를 맞추세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 17,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘想不起’의 올바른 병음은 무엇입니까?",
        options: ['xiǎng bu qǐ', 'xiǎng bù qǐ', 'xiāng bu qǐ', 'xiǎng bu qì'
        ],
        correctAnswer: 'xiǎng bu qǐ',
        explanation: '정확한 분절과 성조를 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’의 성조 조합은 무엇입니까?",
        options: ['3-0-3', '3-4-3', '2-0-3', '3-0-2'
        ],
        correctAnswer: '3-0-3',
        explanation: 'bu는 0(경성)입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '상태 묘사', '장소 표현', '시간 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘떠올리다’의 부정 동작입니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['。', '我想不起', '他的名字'
        ],
        correctAnswer: '我想不起他的名字。',
        explanation: '원문 그대로 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 18,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦里’의 올바른 병음은 무엇입니까?",
        options: ['mèng lǐ', 'méng lǐ', 'mèng lì', 'mèngli'
        ],
        correctAnswer: 'mèng lǐ',
        explanation: '둘째 음절은 3성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’의 성조 조합은 무엇입니까?",
        options: ['4-3', '2-3', '4-4', '4-2'
        ],
        correctAnswer: '4-3',
        explanation: '숫자 성조를 확인하세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’는 위 문장에서 어떤 역할을 합니까?",
        options: ['장소 표현', '동작 표현', '대상 표현', '수량 표현'
        ],
        correctAnswer: '장소 표현',
        explanation: '‘꿈속에서’라는 장소/상황입니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['我在梦里', '。', '见过你'
        ],
        correctAnswer: '我在梦里见过你。',
        explanation: '어순을 맞추세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 19,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦里’의 올바른 병음은 무엇입니까?",
        options: ['mèng lǐ', 'mèng lì', 'méng lǐ', 'meng lǐ'
        ],
        correctAnswer: 'mèng lǐ',
        explanation: '정확한 병음을 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’의 성조 조합은 무엇입니까?",
        options: ['4-3', '4-1', '2-3', '3-3'
        ],
        correctAnswer: '4-3',
        explanation: '4성-3성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’는 위 문장에서 어떤 역할을 합니까?",
        options: ['장소 표현', '동작 표현', '시간 표현', '상태 묘사'
        ],
        correctAnswer: '장소 표현',
        explanation: '장소/상황을 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['见过你', '。', '我在梦里'
        ],
        correctAnswer: '我在梦里见过你。',
        explanation: '원문과 같게 배열하세요.',
        difficulty: 'easy'
      },
      
      {
        type: 'multipleChoice',
        question: "‘见过’의 올바른 병음은 무엇입니까?",
        options: ['jiàn guò', 'jiān guò', 'jiàn guǒ', 'jian guò'
        ],
        correctAnswer: 'jiàn guò',
        explanation: '성조를 포함해 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’의 성조 조합은 무엇입니까?",
        options: ['4-4', '4-2', '2-4', '1-4'
        ],
        correctAnswer: '4-4',
        explanation: '4성-4성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '대상 표현', '장소 표현', '수량 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘본 적이 있다’의 동작/경험입니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['。', '我见过', '他一次'
        ],
        correctAnswer: '我见过他一次。',
        explanation: '원문 순서대로 배열하세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 20,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘甜蜜’의 올바른 병음은 무엇입니까?",
        options: ['tián mì', 'tián mǐ', 'tiàn mì', 'tian mì'
        ],
        correctAnswer: 'tián mì',
        explanation: '성조가 정확한 병음을 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘甜蜜’의 성조 조합은 무엇입니까?",
        options: ['2-4', '2-2', '4-4', '1-4'
        ],
        correctAnswer: '2-4',
        explanation: '2성-4성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘甜蜜’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '동작 표현', '장소 표현', '시간 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '‘행복한 느낌/상태’를 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['他们过着', '。', '甜蜜的生活'
        ],
        correctAnswer: '他们过着甜蜜的生活。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 21,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦见’의 올바른 병음은 무엇입니까?",
        options: ['mèng jiàn', 'méng jiàn', 'mèng jiān', 'mèngjian'
        ],
        correctAnswer: 'mèng jiàn',
        explanation: '정확한 성조를 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘梦见’의 성조 조합은 무엇입니까?",
        options: ['4-4', '4-3', '2-4', '4-1'
        ],
        correctAnswer: '4-4',
        explanation: '4성-4성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘梦见’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '장소 표현', '상태 묘사', '수량 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '‘꿈에서 보다’의 동작입니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['我昨晚', '。', '梦见了你'
        ],
        correctAnswer: '我昨晚梦见了你。',
        explanation: '원문 어순대로 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 22,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘见过’의 올바른 병음은 무엇입니까?",
        options: ['jiàn guò', 'jiàn guo', 'jiān guò', 'jiàn guǒ'
        ],
        correctAnswer: 'jiàn guò',
        explanation: '성조를 정확히 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’의 성조 조합은 무엇입니까?",
        options: ['4-4', '4-2', '2-4', '3-3'
        ],
        correctAnswer: '4-4',
        explanation: '두 음절 모두 4성입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘见过’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '시간 표현', '장소 표현', '상태 묘사'
        ],
        correctAnswer: '동작 표현',
        explanation: '경험을 나타내는 동작입니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['他一次', '。', '我见过'
        ],
        correctAnswer: '我见过他一次。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'easy'
      }
    ]
  },
  {
    sentenceIndex: 23,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘笑容’의 올바른 병음은 무엇입니까?",
        options: ['xiào róng', 'xiáo róng', 'xiào ròng', 'xiao róng'
        ],
        correctAnswer: 'xiào róng',
        explanation: '정확한 병음을 선택하세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’의 성조 조합은 무엇입니까?",
        options: ['4-2', '2-2', '4-4', '3-2'
        ],
        correctAnswer: '4-2',
        explanation: '4성-2성 조합입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘笑容’는 위 문장에서 어떤 역할을 합니까?",
        options: ['대상 표현', '동작 표현', '장소 표현', '시간 표현'
        ],
        correctAnswer: '대상 표현',
        explanation: '명사로서 대상(미소)을 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['很温暖', '她的笑容', '。'
        ],
        correctAnswer: '她的笑容很温暖。',
        explanation: '원문 순서를 맞추세요.',
        difficulty: 'medium'
      },
      
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 올바른 병음은 무엇입니까?",
        options: ['shú xī', 'shǔ xī', 'shú xí', 'shúxī'
        ],
        correctAnswer: 'shú xī',
        explanation: '성조와 분절을 확인하세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’의 성조 조합은 무엇입니까?",
        options: ['2-1', '2-2', '3-1', '4-1'
        ],
        correctAnswer: '2-1',
        explanation: '2성-1성입니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘熟悉’는 위 문장에서 어떤 역할을 합니까?",
        options: ['상태 묘사', '동작 표현', '시간 표현', '장소 표현'
        ],
        correctAnswer: '상태 묘사',
        explanation: '‘익숙하다’라는 상태를 나타냅니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['很熟悉', '。', '我对这个地方'
        ],
        correctAnswer: '我对这个地方很熟悉。',
        explanation: '원문과 같게 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘想不起’의 올바른 병음은 무엇입니까?",
        options: ['xiǎng bu qǐ', 'xiǎng bù qǐ', 'xiāng bu qǐ', 'xiǎng bu qì'
        ],
        correctAnswer: 'xiǎng bu qǐ',
        explanation: '정확한 표기를 고르세요.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’의 성조 조합은 무엇입니까?",
        options: ['3-0-3', '3-4-3', '2-0-3', '3-0-2'
        ],
        correctAnswer: '3-0-3',
        explanation: 'bu는 0으로 봅니다.',
        difficulty: 'medium'
      },
      {
        type: 'multipleChoice',
        question: "‘想不起’는 위 문장에서 어떤 역할을 합니까?",
        options: ['동작 표현', '상태 묘사', '장소 표현', '시간 표현'
        ],
        correctAnswer: '동작 표현',
        explanation: '기억해내지 못하는 동작입니다.',
        difficulty: 'medium'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['他的名字', '我想不起', '。'
        ],
        correctAnswer: '我想不起他的名字。',
        explanation: '원문과 동일하게 배열하세요.',
        difficulty: 'medium'
      }
    ]
  },
  {
    sentenceIndex: 25,
    questions: [
      
      {
        type: 'multipleChoice',
        question: "‘梦里’의 올바른 병음은 무엇입니까?",
        options: ['mèng lǐ', 'méng lǐ', 'mèng lì', 'mèngli'
        ],
        correctAnswer: 'mèng lǐ',
        explanation: '정확한 성조를 고르세요.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’의 성조 조합은 무엇입니까?",
        options: ['4-3', '2-3', '4-1', '4-4'
        ],
        correctAnswer: '4-3',
        explanation: '4성-3성 조합입니다.',
        difficulty: 'easy'
      },
      {
        type: 'multipleChoice',
        question: "‘梦里’는 위 문장에서 어떤 역할을 합니까?",
        options: ['장소 표현', '동작 표현', '상태 묘사', '수량 표현'
        ],
        correctAnswer: '장소 표현',
        explanation: '‘꿈속에서’라는 장소/상황을 나타냅니다.',
        difficulty: 'easy'
      },
      {
        type: 'sentenceOrder',
        question: "\"다음 문장을 올바른 순서로 배열하세요.\"",
        options: ['我在梦里', '见过你', '。'
        ],
        correctAnswer: '我在梦里见过你。',
        explanation: '원문 어순을 맞추세요.',
        difficulty: 'easy'
      }
    ]
  }
];
;

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const practice = practiceData.find(p => p.sentenceIndex === sentenceIndex);
  return practice?.questions || [];
}
