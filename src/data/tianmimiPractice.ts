// 甜蜜蜜词汇训练题海战术数据

export interface PracticeQuestion {
  id?: string;
  word?: string;
  type: 'multipleChoice' | 'translation' | 'fillBlank' | 'sentenceOrder';
  question: string;
  options: string[];
  correctAnswer: string | string[];
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
      { type: 'multipleChoice', question: "'何苦'의 올바른 병음은 무엇입니까?", options: ['hé kǔ', 'hē kǔ', 'hé kù', 'he kǔ'], correctAnswer: 'hé kǔ', explanation: "'hé kǔ'가 표준 병음입니다.", difficulty: 'hard' },
      { type: 'multipleChoice', question: "'何苦'의 성조 조합은 무엇입니까?", options: ['2-3', '1-3', '2-4', '3-3'], correctAnswer: '2-3', explanation: 'hé(2) + kǔ(3)입니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'何苦'는 위 문장에서 어떤 역할을 합니까?", options: ['이유를 묻는 반문 표현', '장소 표현', '수량 표현', '시간 표현'], correctAnswer: '이유를 묻는 반문 표현', explanation: "'何苦'는 '굳이 왜…'라는 반문 기능입니다.", difficulty: 'hard' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['生气呢？', '为这点小事', '你何苦', '？', '为这点小事生气呢？'], correctAnswer: '你何苦为这点小事生气呢？', explanation: '원문 어순을 그대로 맞추세요.', difficulty: 'hard' }
    ]
  },
  {
    sentenceIndex: 24,
    questions: [
      { type: 'multipleChoice', question: "'认真'의 올바른 병음은 무엇입니까?", options: ['rèn zhēn', 'rén zhēn', 'rèn zhèn', 'ren zhēn'], correctAnswer: 'rèn zhēn', explanation: "'rèn zhēn'이 정답입니다.", difficulty: 'easy' },
      { type: 'multipleChoice', question: "'认真'의 성조 조합은 무엇입니까?", options: ['4-1', '2-1', '4-2', '3-1'], correctAnswer: '4-1', explanation: 'rèn(4) + zhēn(1)입니다.', difficulty: 'easy' },
      { type: 'multipleChoice', question: "'认真'는 위 문장에서 어떤 역할을 합니까?", options: ['상태 묘사', '장소 표현', '수량 표현', '대상 표현'], correctAnswer: '상태 묘사', explanation: '공부하는 태도(상태)를 나타냅니다.', difficulty: 'easy' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['不能马虎。', '学习要认真，', '学习要认真', '，不能马虎。'], correctAnswer: '学习要认真，不能马虎。', explanation: '쉼표 뒤 문장까지 포함해 원문대로 배열하세요.', difficulty: 'easy' }
    ]
  },
  {
    sentenceIndex: 25,
    questions: [
      { type: 'multipleChoice', question: "'年轮'의 올바른 병음은 무엇입니까?", options: ['nián lún', 'niǎn lún', 'nián lǔn', 'nian lún'], correctAnswer: 'nián lún', explanation: "'nián lún'이 표준 병음입니다.", difficulty: 'hard' },
      { type: 'multipleChoice', question: "'年轮'의 성조 조합은 무엇입니까?", options: ['2-2', '3-2', '2-3', '1-2'], correctAnswer: '2-2', explanation: 'nián(2) + lún(2)입니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'年轮'는 위 문장에서 어떤 역할을 합니까?", options: ['대상 표현', '동작 표현', '시간 표현', '수량 표현'], correctAnswer: '대상 표현', explanation: "문장 주어로서 '무엇이'에 해당합니다.", difficulty: 'hard' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['树木的年龄。', '年轮', '记录了', '年轮记录了', '树木的'], correctAnswer: '年轮记录了树木的年龄。', explanation: '주어-동사-목적어 구조를 맞추세요.', difficulty: 'hard' }
    ]
  },
  {
    sentenceIndex: 26,
    questions: [
      { type: 'multipleChoice', question: "'催促'의 올바른 병음은 무엇입니까?", options: ['cuī cù', 'cuí cù', 'cuī cū', 'cui cù'], correctAnswer: 'cuī cù', explanation: "'cuī cù'가 정답입니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'催促'의 성조 조합은 무엇입니까?", options: ['1-4', '2-4', '1-2', '4-4'], correctAnswer: '1-4', explanation: 'cuī(1) + cù(4)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'催促'는 위 문장에서 어떤 역할을 합니까?", options: ['동작 표현', '장소 표현', '상태 묘사', '시간 표현'], correctAnswer: '동작 표현', explanation: "'재촉하다'라는 행동을 나타냅니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['快点', '妈妈', '去上学。', '催促我', '我'], correctAnswer: '妈妈催促我快点去上学。', explanation: "'妈妈'가 주어, '催促'가 핵심 동사입니다.", difficulty: 'medium' }
    ]
  },
  {
    sentenceIndex: 27,
    questions: [
      { type: 'multipleChoice', question: "'沉沦'의 올바른 병음은 무엇입니까?", options: ['chén lún', 'chēn lún', 'chén lǔn', 'chen lún'], correctAnswer: 'chén lún', explanation: "'chén lún'이 맞습니다.", difficulty: 'hard' },
      { type: 'multipleChoice', question: "'沉沦'의 성조 조합은 무엇입니까?", options: ['2-2', '2-3', '1-2', '3-2'], correctAnswer: '2-2', explanation: 'chén(2) + lún(2)입니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'沉沦'는 위 문장에서 어떤 역할을 합니까?", options: ['동작 표현', '장소 표현', '시간 표현', '수량 표현'], correctAnswer: '동작 표현', explanation: "'침륜하다/빠지다'라는 행동(상태 변화)을 말합니다.", difficulty: 'hard' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['沉沦。', '他拒绝', '在悲伤中', '让自己', '自己在悲伤中'], correctAnswer: '他拒绝让自己在悲伤中沉沦。', explanation: "'拒绝让…' 구조를 먼저 잡으세요.", difficulty: 'hard' },
      { type: 'multipleChoice', question: "'印证'의 올바른 병음은 무엇입니까?", options: ['yìn zhèng', 'yín zhèng', 'yìn zhēng', 'yin zhèng'], correctAnswer: 'yìn zhèng', explanation: "'yìn zhèng'이 정답입니다.", difficulty: 'hard' },
      { type: 'multipleChoice', question: "'印证'의 성조 조합은 무엇입니까?", options: ['4-4', '2-4', '4-1', '3-4'], correctAnswer: '4-4', explanation: 'yìn(4) + zhèng(4)입니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'印证'는 위 문장에서 어떤 역할을 합니까?", options: ['동작 표현', '상태 묘사', '장소 표현', '시간 표현'], correctAnswer: '동작 표현', explanation: "'입증하다'라는 행위를 나타냅니다.", difficulty: 'hard' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['他的预感。', '实验结果', '印证了', '预感。', '实验结果印证了'], correctAnswer: '实验结果印证了他的预感。', explanation: '주어(实验结果) + 동사(印证了) + 목적어 구조입니다.', difficulty: 'hard' }
    ]
  },
  {
    sentenceIndex: 28,
    questions: [
      { type: 'multipleChoice', question: "'旋转'의 올바른 병음은 무엇입니까?", options: ['xuán zhuǎn', 'xuǎn zhuǎn', 'xuán zhuàn', 'xuan zhuǎn'], correctAnswer: 'xuán zhuǎn', explanation: "'xuán zhuǎn'이 맞습니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'旋转'의 성조 조합은 무엇입니까?", options: ['2-3', '2-4', '3-3', '1-3'], correctAnswer: '2-3', explanation: 'xuán(2) + zhuǎn(3)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'旋转'는 위 문장에서 어떤 역할을 합니까?", options: ['동작 표현', '상태 묘사', '장소 표현', '수량 표현'], correctAnswer: '동작 표현', explanation: "팽이가 '회전하는' 동작을 말합니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['陀螺', '快速地', '旋转。', '快速地旋转。'], correctAnswer: '陀螺快速地旋转。', explanation: '부사(快速地)가 동사(旋转) 앞에 옵니다.', difficulty: 'medium' }
    ]
  },
  {
    sentenceIndex: 29,
    questions: [
      { type: 'multipleChoice', question: "'变成'의 올바른 병음은 무엇입니까?", options: ['biàn chéng', 'biǎn chéng', 'biàn chěng', 'bian chéng'], correctAnswer: 'biàn chéng', explanation: "'biàn chéng'이 정답입니다.", difficulty: 'easy' },
      { type: 'multipleChoice', question: "'变成'의 성조 조합은 무엇입니까?", options: ['4-2', '3-2', '4-3', '2-2'], correctAnswer: '4-2', explanation: 'biàn(4) + chéng(2)입니다.', difficulty: 'easy' },
      { type: 'multipleChoice', question: "'变成'는 위 문장에서 어떤 역할을 합니까?", options: ['상태 변화 표현', '장소 표현', '수량 표현', '대상 표현'], correctAnswer: '상태 변화 표현', explanation: "'A가 B로 변하다'의 변화 의미를 나타냅니다.", difficulty: 'easy' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['水', '在低温下', '会', '变成冰。', '冰。'], correctAnswer: '水在低温下会变成冰。', explanation: '상황(在低温下) + 조동사(会) + 변화(变成) 순서입니다.', difficulty: 'easy' }
    ]
  },
  {
    sentenceIndex: 30,
    questions: [
      { type: 'multipleChoice', question: "'指纹'의 올바른 병음은 무엇입니까?", options: ['zhǐ wén', 'zhì wén', 'zhǐ wèn', 'zhi wén'], correctAnswer: 'zhǐ wén', explanation: "'zhǐ wén'이 맞습니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'指纹'의 성조 조합은 무엇입니까?", options: ['3-2', '4-2', '3-4', '2-2'], correctAnswer: '3-2', explanation: 'zhǐ(3) + wén(2)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'指纹'는 위 문장에서 어떤 역할을 합니까?", options: ['대상 표현', '동작 표현', '시간 표현', '장소 표현'], correctAnswer: '대상 표현', explanation: "'무엇이 유일한가'의 대상(指纹)입니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['每个人的', '指纹', '都是', '独一无二的。', '每个人的指纹'], correctAnswer: '每个人的指纹都是独一无二的。', explanation: '소유(每个人的) + 명사(指纹) + 판단(都是…)입니다.', difficulty: 'medium' }
    ]
  },
  { sentenceIndex: 31, questions: [] },
  {
    sentenceIndex: 32,
    questions: [
      { type: 'multipleChoice', question: "'心房'의 올바른 병음은 무엇입니까?", options: ['xīn fáng', 'xín fáng', 'xīn fǎng', 'xin fáng'], correctAnswer: 'xīn fáng', explanation: "'xīn fáng'이 정답입니다.", difficulty: 'hard' },
      { type: 'multipleChoice', question: "'心房'의 성조 조합은 무엇입니까?", options: ['1-2', '2-2', '1-3', '4-2'], correctAnswer: '1-2', explanation: 'xīn(1) + fáng(2)입니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'心房'는 위 문장에서 어떤 역할을 합니까?", options: ['대상 표현', '장소 표현', '시간 표현', '수량 표현'], correctAnswer: '대상 표현', explanation: "'敲开'의 목적어(그녀의 마음)입니다.", difficulty: 'hard' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['爱意', '悄悄', '敲开了', '她的心房。', '悄悄敲开了'], correctAnswer: '爱意悄悄敲开了她的心房。', explanation: '부사(悄悄)가 동사구 앞에 옵니다.', difficulty: 'hard' }
    ]
  },
  { sentenceIndex: 33, questions: [] },
  {
    sentenceIndex: 34,
    questions: [
      { type: 'multipleChoice', question: "'仔细'의 올바른 병음은 무엇입니까?", options: ['zǐ xì', 'zì xì', 'zǐ xí', 'zi xì'], correctAnswer: 'zǐ xì', explanation: "'zǐ xì'가 정답입니다.", difficulty: 'easy' },
      { type: 'multipleChoice', question: "'仔细'의 성조 조합은 무엇입니까?", options: ['3-4', '4-4', '3-2', '2-4'], correctAnswer: '3-4', explanation: 'zǐ(3) + xì(4)입니다.', difficulty: 'easy' },
      { type: 'multipleChoice', question: "'仔细'는 위 문장에서 어떤 역할을 합니까?", options: ['상태 묘사', '시간 표현', '장소 표현', '수량 표현'], correctAnswer: '상태 묘사', explanation: '행동의 태도(꼼꼼히)를 나타냅니다.', difficulty: 'easy' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['仔细一点，', '别再', '出错了。', '再出错了。'], correctAnswer: '仔细一点，别再出错了。', explanation: "앞 문장(요구) 뒤에 '别再…' 경고가 옵니다.", difficulty: 'easy' }
    ]
  },
  {
    sentenceIndex: 35,
    questions: [
      { type: 'multipleChoice', question: "'青春'의 올바른 병음은 무엇입니까?", options: ['qīng chūn', 'qíng chūn', 'qīng chǔn', 'qing chūn'], correctAnswer: 'qīng chūn', explanation: "'qīng chūn'이 맞습니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'青春'의 성조 조합은 무엇입니까?", options: ['1-1', '2-1', '1-3', '1-4'], correctAnswer: '1-1', explanation: 'qīng(1) + chūn(1)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'青春'는 위 문장에서 어떤 역할을 합니까?", options: ['대상 표현', '동작 표현', '장소 표현', '수량 표현'], correctAnswer: '대상 표현', explanation: "문장 주어로서 '무엇은…'에 해당합니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['青春', '是', '奋斗的', '最好时光。', '奋斗的最好'], correctAnswer: '青春是奋斗的最好时光。', explanation: "판단문 'A是B' 구조입니다.", difficulty: 'medium' }
    ]
  },
  {
    sentenceIndex: 36,
    questions: [
      { type: 'multipleChoice', question: "'奋不顾身'의 올바른 병음은 무엇입니까?", options: ['fèn bù gù shēn', 'fén bù gù shēn', 'fèn bú gù shēn', 'fèn bù gū shēn'], correctAnswer: 'fèn bù gù shēn', explanation: '네 음절 모두 성조를 포함해 맞춰야 합니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'奋不顾身'의 성조 조합은 무엇입니까?", options: ['4-4-4-1', '4-2-4-1', '3-4-4-1', '4-4-2-1'], correctAnswer: '4-4-4-1', explanation: 'fèn(4)-bù(4)-gù(4)-shēn(1)입니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'奋不顾身'는 위 문장에서 어떤 역할을 합니까?", options: ['상태 묘사', '대상 표현', '시간 표현', '장소 표현'], correctAnswer: '상태 묘사', explanation: "'어떤 방식으로 보호했는지'(태도/상황)를 나타냅니다.", difficulty: 'hard' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['他', '奋不顾身地', '保护了', '弱小。', '保护了弱小。'], correctAnswer: '他奋不顾身地保护了弱小。', explanation: '부사구(…地)가 동사(保护) 앞에 옵니다.', difficulty: 'hard' }
    ]
  },
  {
    sentenceIndex: 37,
    questions: [
      { type: 'multipleChoice', question: "'旋转'의 올바른 병음은 무엇입니까?", options: ['xuán zhuǎn', 'xuǎn zhuǎn', 'xuán zhuàn', 'xuan zhuǎn'], correctAnswer: 'xuán zhuǎn', explanation: "'xuán zhuǎn'이 정답입니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'旋转'의 성조 조합은 무엇입니까?", options: ['2-3', '2-4', '3-3', '1-3'], correctAnswer: '2-3', explanation: 'xuán(2) + zhuǎn(3)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'旋转'는 위 문장에서 어떤 역할을 합니까?", options: ['동작 표현', '장소 표현', '시간 표현', '수량 표현'], correctAnswer: '동작 표현', explanation: "풍차가 '회전하는' 동작을 나타냅니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['旋转。', '风车', 'in the wind', '风车 in the wind'], correctAnswer: '风车 in the wind 旋转。', explanation: '원문에 있는 영문 구절 위치까지 그대로 맞추세요.', difficulty: 'medium' }
    ]
  },
  {
    sentenceIndex: 38,
    questions: [
      { type: 'multipleChoice', question: "'变成'의 올바른 병음은 무엇입니까?", options: ['biàn chéng', 'biǎn chéng', 'biàn chěng', 'bian chéng'], correctAnswer: 'biàn chéng', explanation: "'biàn chéng'이 맞습니다.", difficulty: 'easy' },
      { type: 'multipleChoice', question: "'变成'의 성조 조합은 무엇입니까?", options: ['4-2', '4-3', '3-2', '2-2'], correctAnswer: '4-2', explanation: 'biàn(4) + chéng(2)입니다.', difficulty: 'easy' },
      { type: 'multipleChoice', question: "'变成'는 위 문장에서 어떤 역할을 합니까?", options: ['상태 변화 표현', '장소 표현', '수량 표현', '시간 표현'], correctAnswer: '상태 변화 표현', explanation: "번데기가 나비로 '변화'하는 의미입니다.", difficulty: 'easy' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['蛹', '会', '变成', '美丽的蝴蝶。', '蝴蝶。'], correctAnswer: '蛹会变成美丽的蝴蝶。', explanation: '주어 + 조동사 + 변화동사 + 결과의 순서입니다.', difficulty: 'easy' }
    ]
  },
  {
    sentenceIndex: 39,
    questions: [
      { type: 'multipleChoice', question: "'深刻'의 올바른 병음은 무엇입니까?", options: ['shēn kè', 'shén kè', 'shēn kē', 'shen kè'], correctAnswer: 'shēn kè', explanation: "'shēn kè'가 정답입니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'深刻'의 성조 조합은 무엇입니까?", options: ['1-4', '2-4', '1-1', '3-4'], correctAnswer: '1-4', explanation: 'shēn(1) + kè(4)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'深刻'는 위 문장에서 어떤 역할을 합니까?", options: ['상태 묘사', '동작 표현', '장소 표현', '수량 표현'], correctAnswer: '상태 묘사', explanation: "'教训'의 정도(깊은)를 수식합니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['这一课', '给我', '留下了', '深刻的教训。', '给我留下了'], correctAnswer: '这一课给我留下了深刻的教训。', explanation: "'给我留下了'가 핵심 동사구입니다.", difficulty: 'medium' }
    ]
  },
  { sentenceIndex: 40, questions: [] },
  {
    sentenceIndex: 41,
    questions: [
      { type: 'multipleChoice', question: "'加温'의 올바른 병음은 무엇입니까?", options: ['jiā wēn', 'jiá wēn', 'jiā wěn', 'jia wēn'], correctAnswer: 'jiā wēn', explanation: "'jiā wēn'이 맞습니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'加温'의 성조 조합은 무엇입니까?", options: ['1-1', '2-1', '1-2', '1-4'], correctAnswer: '1-1', explanation: 'jiā(1) + wēn(1)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'加温'는 위 문장에서 어떤 역할을 합니까?", options: ['동작 표현', '상태 묘사', '시간 표현', '장소 표현'], correctAnswer: '동작 표현', explanation: "관계를 '따뜻하게 만들다'라는 행동을 말합니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['这段关系', '需要', '加温。', '关系需要'], correctAnswer: '这段关系需要加温。', explanation: '주어 + 필요(需要) + 동작(加温) 순서입니다.', difficulty: 'medium' }
    ]
  },
  { sentenceIndex: 42, questions: [] },
  {
    sentenceIndex: 43,
    questions: [
      { type: 'multipleChoice', question: "'仔细'의 올바른 병음은 무엇입니까?", options: ['zǐ xì', 'zì xì', 'zǐ xí', 'zi xì'], correctAnswer: 'zǐ xì', explanation: "'zǐ xì'가 정답입니다.", difficulty: 'easy' },
      { type: 'multipleChoice', question: "'仔细'의 성조 조합은 무엇입니까?", options: ['3-4', '4-4', '3-2', '2-4'], correctAnswer: '3-4', explanation: 'zǐ(3) + xì(4)입니다.', difficulty: 'easy' },
      { type: 'multipleChoice', question: "'仔细'는 위 문장에서 어떤 역할을 합니까?", options: ['상태 묘사', '대상 표현', '장소 표현', '시간 표현'], correctAnswer: '상태 묘사', explanation: "'읽다(阅读)'의 방식/태도를 나타냅니다.", difficulty: 'easy' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['请', '仔细', '阅读', '说明书。', '请仔细阅读'], correctAnswer: '请仔细阅读说明书。', explanation: '요청(请) + 부사(仔细) + 동사(阅读) 구조입니다.', difficulty: 'easy' }
    ]
  },
  {
    sentenceIndex: 44,
    questions: [
      { type: 'multipleChoice', question: "'青春'의 올바른 병음은 무엇입니까?", options: ['qīng chūn', 'qíng chūn', 'qīng chǔn', 'qing chūn'], correctAnswer: 'qīng chūn', explanation: "'qīng chūn'이 정답입니다.", difficulty: 'medium' },
      { type: 'multipleChoice', question: "'青春'의 성조 조합은 무엇입니까?", options: ['1-1', '2-1', '1-3', '1-4'], correctAnswer: '1-1', explanation: 'qīng(1) + chūn(1)입니다.', difficulty: 'medium' },
      { type: 'multipleChoice', question: "'青春'는 위 문장에서 어떤 역할을 합니까?", options: ['대상 표현', '동작 표현', '시간 표현', '수량 표현'], correctAnswer: '대상 표현', explanation: "문장 주어로서 '청춘' 자체를 말합니다.", difficulty: 'medium' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['青春', '一去', '不复返。', '一去不复返。'], correctAnswer: '青春一去不复返。', explanation: "고정 표현 '一去不复返'의 결합을 유지하세요.", difficulty: 'medium' }
    ]
  },
  {
    sentenceIndex: 45,
    questions: [
      { type: 'multipleChoice', question: "'憎恨'의 올바른 병음은 무엇입니까?", options: ['zēng hèn', 'zéng hèn', 'zēng hěn', 'zeng hèn'], correctAnswer: 'zēng hèn', explanation: "'zēng hèn'이 맞습니다.", difficulty: 'hard' },
      { type: 'multipleChoice', question: "'憎恨'의 성조 조합은 무엇입니까?", options: ['1-4', '2-4', '1-3', '4-4'], correctAnswer: '1-4', explanation: 'zēng(1) + hèn(4)입니다.', difficulty: 'hard' },
      { type: 'multipleChoice', question: "'憎恨'는 위 문장에서 어떤 역할을 합니까?", options: ['장소 표현', '동작 표현', '시간 표현', '수량 표현'], correctAnswer: '장소 표현', explanation: "'在…中' 구조로 '~속에서'(비유적 장소)를 나타냅니다.", difficulty: 'hard' },
      { type: 'sentenceOrder', question: '다음 문장을 올바른 순서로 배열하세요.', options: ['我们', '不能', '在憎恨中', '生活。', '在憎恨中生活。'], correctAnswer: '我们不能在憎恨中生活。', explanation: '부정(不能) + 상황(在…中) + 동사(生活) 순서입니다.', difficulty: 'hard' }
    ]
  }
];

// 获取指定句子的练习题
export function getPracticeForSentence(sentenceIndex: number): PracticeQuestion[] {
  const practice = practiceData.find(p => p.sentenceIndex === sentenceIndex);
  return practice?.questions || [];
}
