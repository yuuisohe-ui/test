// 示例单词数据

export interface Word {
  id: string;
  word: string;
  pinyin: string;
  korean: string;
  chinese: string;
  hskLevel: string;
  theme?: string;
  frequency: number; // 1-5星
  examples: string[];
}

// 主题词汇数据
export const themeWords: Record<string, Word[]> = {
  '伤感音乐': [
    {
      id: 'sad-1',
      word: '思念',
      pinyin: 'sī niàn',
      korean: '그리워하다',
      chinese: '想念，怀念',
      hskLevel: 'HSK3',
      theme: '伤感音乐',
      frequency: 5,
      examples: ['我思念你', '思念故乡', '深深的思念']
    },
    {
      id: 'sad-2',
      word: '眼泪',
      pinyin: 'yǎn lèi',
      korean: '눈물',
      chinese: '眼泪',
      hskLevel: 'HSK2',
      theme: '伤感音乐',
      frequency: 4,
      examples: ['流眼泪', '眼泪掉下来', '忍住眼泪']
    },
    {
      id: 'sad-3',
      word: '离别',
      pinyin: 'lí bié',
      korean: '이별',
      chinese: '分别，离开',
      hskLevel: 'HSK4',
      theme: '伤感音乐',
      frequency: 4,
      examples: ['痛苦的离别', '离别的时候', '不忍离别']
    },
    {
      id: 'sad-4',
      word: '心痛',
      pinyin: 'xīn tòng',
      korean: '가슴 아픔',
      chinese: '心里痛苦',
      hskLevel: 'HSK4',
      theme: '伤感音乐',
      frequency: 3,
      examples: ['感到心痛', '心痛的感觉', '让人心痛']
    },
    {
      id: 'sad-5',
      word: '回忆',
      pinyin: 'huí yì',
      korean: '추억',
      chinese: '回想过去',
      hskLevel: 'HSK3',
      theme: '伤感音乐',
      frequency: 5,
      examples: ['美好的回忆', '回忆过去', '勾起回忆']
    }
  ],
  '快乐音乐': [
    {
      id: 'happy-1',
      word: '开心',
      pinyin: 'kāi xīn',
      korean: '기쁘다',
      chinese: '高兴，快乐',
      hskLevel: 'HSK2',
      theme: '快乐音乐',
      frequency: 5,
      examples: ['很开心', '开心地笑', '祝你开心']
    },
    {
      id: 'happy-2',
      word: '庆祝',
      pinyin: 'qìng zhù',
      korean: '축하하다',
      chinese: '庆祝',
      hskLevel: 'HSK3',
      theme: '快乐音乐',
      frequency: 4,
      examples: ['庆祝生日', '庆祝胜利', '一起庆祝']
    },
    {
      id: 'happy-3',
      word: '活力',
      pinyin: 'huó lì',
      korean: '활력',
      chinese: '旺盛的生命力',
      hskLevel: 'HSK4',
      theme: '快乐音乐',
      frequency: 3,
      examples: ['充满活力', '青春的活力', '活力四射']
    },
    {
      id: 'happy-4',
      word: '笑容',
      pinyin: 'xiào róng',
      korean: '미소',
      chinese: '笑的表情',
      hskLevel: 'HSK3',
      theme: '快乐音乐',
      frequency: 4,
      examples: ['灿烂的笑容', '露出笑容', '温暖的笑容']
    },
    {
      id: 'happy-5',
      word: '幸福',
      pinyin: 'xìng fú',
      korean: '행복',
      chinese: '幸福',
      hskLevel: 'HSK2',
      theme: '快乐音乐',
      frequency: 5,
      examples: ['很幸福', '幸福的生活', '追求幸福']
    }
  ],
  'Rap音乐': [
    {
      id: 'rap-1',
      word: '节奏',
      pinyin: 'jié zòu',
      korean: '리듬',
      chinese: '节奏',
      hskLevel: 'HSK4',
      theme: 'Rap音乐',
      frequency: 5,
      examples: ['跟着节奏', '节奏感', '强烈的节奏']
    },
    {
      id: 'rap-2',
      word: '态度',
      pinyin: 'tài dù',
      korean: '태도',
      chinese: '态度',
      hskLevel: 'HSK3',
      theme: 'Rap音乐',
      frequency: 4,
      examples: ['认真的态度', '生活态度', '改变态度']
    },
    {
      id: 'rap-3',
      word: '自由',
      pinyin: 'zì yóu',
      korean: '자유',
      chinese: '自由',
      hskLevel: 'HSK2',
      theme: 'Rap音乐',
      frequency: 5,
      examples: ['追求自由', '自由自在', '向往自由']
    },
    {
      id: 'rap-4',
      word: '梦想',
      pinyin: 'mèng xiǎng',
      korean: '꿈',
      chinese: '梦想',
      hskLevel: 'HSK3',
      theme: 'Rap音乐',
      frequency: 5,
      examples: ['实现梦想', '追逐梦想', '伟大的梦想']
    },
    {
      id: 'rap-5',
      word: '坚持',
      pinyin: 'jiān chí',
      korean: '견디다',
      chinese: '坚持',
      hskLevel: 'HSK3',
      theme: 'Rap音乐',
      frequency: 4,
      examples: ['坚持到底', '坚持下去', '坚持梦想']
    }
  ],
  '摇滚音乐': [
    {
      id: 'rock-1',
      word: '力量',
      pinyin: 'lì liàng',
      korean: '힘',
      chinese: '力量',
      hskLevel: 'HSK2',
      theme: '摇滚音乐',
      frequency: 5,
      examples: ['强大的力量', '充满力量', '力量源泉']
    },
    {
      id: 'rock-2',
      word: '激情',
      pinyin: 'jī qíng',
      korean: '열정',
      chinese: '强烈的感情',
      hskLevel: 'HSK4',
      theme: '摇滚音乐',
      frequency: 4,
      examples: ['充满激情', '燃烧的激情', '激情四射']
    },
    {
      id: 'rock-3',
      word: '释放',
      pinyin: 'shì fàng',
      korean: '방출하다',
      chinese: '释放',
      hskLevel: 'HSK4',
      theme: '摇滚音乐',
      frequency: 3,
      examples: ['释放压力', '释放能量', '释放情感']
    },
    {
      id: 'rock-4',
      word: '呐喊',
      pinyin: 'nà hǎn',
      korean: '외치다',
      chinese: '大声喊叫',
      hskLevel: 'HSK5',
      theme: '摇滚音乐',
      frequency: 3,
      examples: ['大声呐喊', '内心的呐喊', '呐喊声']
    },
    {
      id: 'rock-5',
      word: '突破',
      pinyin: 'tū pò',
      korean: '돌파하다',
      chinese: '突破',
      hskLevel: 'HSK4',
      theme: '摇滚音乐',
      frequency: 4,
      examples: ['突破极限', '突破自我', '突破困难']
    }
  ],
  '民谣音乐': [
    {
      id: 'folk-1',
      word: '温暖',
      pinyin: 'wēn nuǎn',
      korean: '따뜻하다',
      chinese: '温暖',
      hskLevel: 'HSK2',
      theme: '民谣音乐',
      frequency: 5,
      examples: ['温暖的阳光', '温暖的家', '感到温暖']
    },
    {
      id: 'folk-2',
      word: '故事',
      pinyin: 'gù shi',
      korean: '이야기',
      chinese: '故事',
      hskLevel: 'HSK2',
      theme: '民谣音乐',
      frequency: 5,
      examples: ['听故事', '讲故事', '美好的故事']
    },
    {
      id: 'folk-3',
      word: '故乡',
      pinyin: 'gù xiāng',
      korean: '고향',
      chinese: '故乡',
      hskLevel: 'HSK4',
      theme: '民谣音乐',
      frequency: 4,
      examples: ['回到故乡', '思念故乡', '故乡的云']
    },
    {
      id: 'folk-4',
      word: '简单',
      pinyin: 'jiǎn dān',
      korean: '간단하다',
      chinese: '简单',
      hskLevel: 'HSK2',
      theme: '民谣音乐',
      frequency: 4,
      examples: ['很简单', '简单的生活', '简单快乐']
    },
    {
      id: 'folk-5',
      word: '安静',
      pinyin: 'ān jìng',
      korean: '조용하다',
      chinese: '安静',
      hskLevel: 'HSK2',
      theme: '民谣音乐',
      frequency: 4,
      examples: ['很安静', '安静的地方', '保持安静']
    }
  ]
};

// 游戏题目生成函数
export function generateMatchingGame(words: Word[], count: number = 4): Array<{ word: Word; korean: string }> {
  const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, count);
  return shuffled.map(w => ({ word: w, korean: w.korean }));
}

export function generateFillBlankGame(words: Word[]): Array<{
  sentence: string;
  word: Word;
  options: string[];
}> {
  const questions = words.slice(0, 5).map(word => {
    const example = word.examples[0];
    const blank = example.replace(word.word, '____');
    const options = [
      word.word,
      ...words.filter(w => w.id !== word.id).slice(0, 3).map(w => w.word)
    ].sort(() => Math.random() - 0.5);
    
    return {
      sentence: blank,
      word,
      options
    };
  });
  
  return questions;
}

export function generateWordBuilderGame(words: Word[]): Array<{
  word: Word;
  characters: string[];
  shuffled: string[];
}> {
  return words.slice(0, 5).map(word => {
    const characters = word.word.split('');
    const shuffled = [...characters].sort(() => Math.random() - 0.5);
    return {
      word,
      characters,
      shuffled
    };
  });
}

export function generateWordChainGame(words: Word[]): Array<{
  mainWord: Word;
  relatedWords: Word[];
  correctRelation: string;
}> {
  // 简单的关联：同主题词汇
  return words.slice(0, 5).map(word => {
    const related = words.filter(w => 
      w.id !== word.id && 
      (w.theme === word.theme || w.hskLevel === word.hskLevel)
    ).slice(0, 3);
    
    return {
      mainWord: word,
      relatedWords: related,
      correctRelation: '同主题'
    };
  });
}

