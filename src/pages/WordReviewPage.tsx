import { useState, useEffect, useMemo } from 'react';
import { Word, themeWords, generateMatchingGame, generateFillBlankGame, generateWordBuilderGame, generateWordChainGame } from '../data/wordReviewData';

type TabType = 'collection' | 'theme' | 'game';
type GameType = 'matching' | 'fillBlank' | 'listen' | 'builder' | 'chain' | null;

export default function WordReviewPage() {
  const [activeTab, setActiveTab] = useState<TabType>('collection');
  const [selectedTheme, setSelectedTheme] = useState<string>('伤感音乐');
  const [gameType, setGameType] = useState<GameType>(null);
  const [gameStarted, setGameStarted] = useState(false);
  
  // 合并收藏：主题词汇（starredWords）+ 从歌词页收藏的单词（starredWordsCustom）
  const loadMergedStarredWords = (): Word[] => {
    const allTheme = Object.values(themeWords).flat();
    const themeIds: string[] = (() => {
      try {
        const saved = localStorage.getItem('starredWords');
        return saved ? JSON.parse(saved) : [];
      } catch { return []; }
    })();
    const custom: { word: string; pinyin: string; korean: string }[] = (() => {
      try {
        const saved = localStorage.getItem('starredWordsCustom');
        return saved ? JSON.parse(saved) : [];
      } catch { return []; }
    })();
    const themeWordsList = themeIds.map((id: string) => allTheme.find(w => w.id === id)).filter(Boolean) as Word[];
    // starredWords에 있지만 테마에 없는 id = 다른 페이지에서 저장한 단어(문자열)
    const rawWordIds = themeIds.filter((id: string) => !allTheme.some(w => w.id === id));
    const rawAsWord: Word[] = rawWordIds.map((id: string, i: number) => ({
      id: 'raw-' + id + '-' + i,
      word: id,
      pinyin: '',
      korean: '',
      chinese: id,
      hskLevel: '',
      frequency: 0,
      examples: [],
    }));
    const customAsWord: Word[] = custom.map((w, i) => ({
      id: 'custom-' + w.word + '-' + i,
      word: w.word,
      pinyin: w.pinyin || '',
      korean: w.korean || '',
      chinese: w.word,
      hskLevel: '',
      frequency: 0,
      examples: [],
    }));
    return [...themeWordsList, ...rawAsWord, ...customAsWord];
  };

  const [starredWords, setStarredWords] = useState<Word[]>(loadMergedStarredWords);
  const [collectionSubTab, setCollectionSubTab] = useState<'vocab' | 'pattern'>('vocab');

  useEffect(() => {
    const handleStorageChange = () => setStarredWords(loadMergedStarredWords());
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 500);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // 收藏单词（主题词更新 starredWords，歌词收藏词更新 starredWordsCustom）
  const toggleStar = (word: Word) => {
    if (word.id.startsWith('custom-')) {
      const list: { word: string; pinyin: string; korean: string }[] = (() => {
        try {
          const saved = localStorage.getItem('starredWordsCustom');
          return saved ? JSON.parse(saved) : [];
        } catch { return []; }
      })();
      const next = list.filter((x: { word: string }) => x.word !== word.word);
      localStorage.setItem('starredWordsCustom', JSON.stringify(next));
    } else if (word.id.startsWith('raw-')) {
      const saved = localStorage.getItem('starredWords') || '[]';
      const wordIds: string[] = JSON.parse(saved);
      const next = wordIds.filter((id: string) => id !== word.word);
      localStorage.setItem('starredWords', JSON.stringify(next));
    } else {
      const saved = localStorage.getItem('starredWords') || '[]';
      const wordIds: string[] = JSON.parse(saved);
      const index = wordIds.indexOf(word.id);
      if (index > -1) wordIds.splice(index, 1);
      else wordIds.push(word.id);
      localStorage.setItem('starredWords', JSON.stringify(wordIds));
    }
    setStarredWords(loadMergedStarredWords());
  };

  const isStarred = (wordId: string) => {
    return starredWords.some(w => w.id === wordId);
  };

  // 문형 저장: 전 페이지에서 저장한 문형 (localStorage starredStructures)
  const loadStarredStructures = (): string[] => {
    try {
      const saved = localStorage.getItem('starredStructures');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  };
  const [starredStructures, setStarredStructures] = useState<string[]>(loadStarredStructures);

  useEffect(() => {
    const handleStorageChange = () => setStarredStructures(loadStarredStructures());
    const interval = setInterval(handleStorageChange, 500);
    return () => clearInterval(interval);
  }, []);

  const toggleStructure = (pattern: string) => {
    const list = loadStarredStructures();
    const next = list.filter(p => p !== pattern);
    localStorage.setItem('starredStructures', JSON.stringify(next));
    setStarredStructures(next);
  };

  return (
    <div className="min-h-screen py-8 px-4" style={{ background: '#faf6f0' }}>
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#2c1a0e', fontFamily: "'Noto Serif KR', serif" }}>
            어휘 트레이닝
          </h1>
          <p style={{ color: '#9c7b60' }}>
            노래에서 만난 단어, 다양한 방법으로 복습해요
          </p>
        </div>

        {/* Tab导航 */}
        <div className="flex gap-2 mb-6 border-b">
          <button
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'collection'
                ? ''
                : 'hover:text-[#7a4f2d]'
            }`}
            style={activeTab === 'collection' ? { color: '#7a4f2d', borderColor: '#7a4f2d' } : { color: '#9c7b60' }}
            onClick={() => {
              setActiveTab('collection');
              setGameType(null);
              setGameStarted(false);
            }}
          >
            나의 저장
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'theme'
                ? ''
                : 'hover:text-[#7a4f2d]'
            }`}
            style={activeTab === 'theme' ? { color: '#7a4f2d', borderColor: '#7a4f2d' } : { color: '#9c7b60' }}
            onClick={() => {
              setActiveTab('theme');
              setGameType(null);
              setGameStarted(false);
            }}
          >
            主题词汇
          </button>
          <button
            className={`px-6 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'game'
                ? ''
                : 'hover:text-[#7a4f2d]'
            }`}
            style={activeTab === 'game' ? { color: '#7a4f2d', borderColor: '#7a4f2d' } : { color: '#9c7b60' }}
            onClick={() => {
              setActiveTab('game');
              setGameType(null);
              setGameStarted(false);
            }}
          >
            游戏练习
          </button>
        </div>

        {/* 内容区域 */}
        {activeTab === 'collection' && (
          <CollectionTab
            subTab={collectionSubTab}
            setSubTab={setCollectionSubTab}
            starredWords={starredWords}
            isStarred={isStarred}
            toggleStar={toggleStar}
            starredStructures={starredStructures}
            toggleStructure={toggleStructure}
          />
        )}

        {activeTab === 'theme' && (
          <ThemeTab 
            selectedTheme={selectedTheme} 
            setSelectedTheme={setSelectedTheme}
            isStarred={isStarred}
            toggleStar={toggleStar}
          />
        )}

        {activeTab === 'game' && (
          <GameTab 
            gameType={gameType}
            setGameType={setGameType}
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            starredWords={starredWords}
          />
        )}
      </div>
    </div>
  );
}

// 나의 저장 Tab：어휘 저장 + 문형 저장
function CollectionTab({
  subTab,
  setSubTab,
  starredWords,
  isStarred,
  toggleStar,
  starredStructures,
  toggleStructure,
}: {
  subTab: 'vocab' | 'pattern';
  setSubTab: (t: 'vocab' | 'pattern') => void;
  starredWords: Word[];
  isStarred: (id: string) => boolean;
  toggleStar: (word: Word) => void;
  starredStructures: string[];
  toggleStructure: (pattern: string) => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setSubTab('vocab')}
          className={`px-4 py-2 font-medium transition-colors border-b-2 -mb-px ${
            subTab === 'vocab' ? 'text-[#7a4f2d] border-[#7a4f2d]' : 'text-gray-500 border-transparent hover:text-[#7a4f2d]'
          }`}
        >
          어휘 저장 ({starredWords.length})
        </button>
        <button
          type="button"
          onClick={() => setSubTab('pattern')}
          className={`px-4 py-2 font-medium transition-colors border-b-2 -mb-px ${
            subTab === 'pattern' ? 'text-[#7a4f2d] border-[#7a4f2d]' : 'text-gray-500 border-transparent hover:text-[#7a4f2d]'
          }`}
        >
          문형 저장 ({starredStructures.length})
        </button>
      </div>

      {subTab === 'vocab' && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">모든 페이지에서 저장한 단어</h2>
            <span className="text-sm text-gray-600">총 {starredWords.length}개</span>
          </div>
          {starredWords.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-5xl mb-4">📚</div>
              <div className="text-gray-500 text-base mb-2">저장한 단어가 없어요</div>
              <div className="text-gray-400 text-sm">가사 페이지·유튜브·테마 어휘에서 하트를 누르면 여기에 모여요</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {starredWords.map((word) => (
                <WordCard key={word.id} word={word} isStarred={true} toggleStar={() => toggleStar(word)} />
              ))}
            </div>
          )}
        </>
      )}

      {subTab === 'pattern' && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">모든 페이지에서 저장한 문형</h2>
            <span className="text-sm text-gray-600">총 {starredStructures.length}개</span>
          </div>
          {starredStructures.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-5xl mb-4">📝</div>
              <div className="text-gray-500 text-base mb-2">저장한 문형이 없어요</div>
              <div className="text-gray-400 text-sm">가사 페이지·유튜브에서 문형 하트를 누르면 여기에 모여요</div>
            </div>
          ) : (
            <div className="space-y-3">
              {starredStructures.map((pattern, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800 break-all flex-1">{pattern}</span>
                  <button
                    type="button"
                    onClick={() => toggleStructure(pattern)}
                    className="flex-shrink-0 p-1.5 rounded transition-colors text-red-500 hover:bg-red-50"
                    title="저장 해제"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// 主题词汇Tab
function ThemeTab({
  selectedTheme,
  setSelectedTheme,
  isStarred,
  toggleStar
}: {
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
  isStarred: (id: string) => boolean;
  toggleStar: (word: Word) => void;
}) {
  const themes = Object.keys(themeWords);
  const currentWords = themeWords[selectedTheme] || [];

  const themeColors: Record<string, string> = {
    '伤感音乐': 'bg-blue-100 text-blue-800 border-blue-300',
    '快乐音乐': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Rap音乐': 'bg-red-100 text-red-800 border-red-300',
    '摇滚音乐': 'bg-gray-100 text-gray-800 border-gray-300',
    '民谣音乐': 'bg-green-100 text-green-800 border-green-300'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">选择音乐类型</h2>
        <div className="flex flex-wrap gap-3">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                selectedTheme === theme
                  ? themeColors[theme] || 'bg-gray-100 text-gray-800 border-gray-300'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {selectedTheme} 相关词汇
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentWords.map((word) => (
            <WordCard 
              key={word.id} 
              word={word} 
              isStarred={isStarred(word.id)} 
              toggleStar={() => toggleStar(word)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 游戏Tab
function GameTab({
  gameType,
  setGameType,
  gameStarted,
  setGameStarted,
  starredWords
}: {
  gameType: GameType;
  setGameType: (type: GameType) => void;
  gameStarted: boolean;
  setGameStarted: (started: boolean) => void;
  starredWords: Word[];
}) {
  const [hoveredGameId, setHoveredGameId] = useState<string | null>(null);
  const games = [
    { id: 'matching', name: '单词配对', icon: '🔗', desc: '将中文单词与韩语释义配对' },
    { id: 'fillBlank', name: '填空挑战', icon: '✏️', desc: '选择正确的单词填空' },
    { id: 'listen', name: '听音选词', icon: '🎧', desc: '听发音选择正确的中文' },
    { id: 'builder', name: '拼词游戏', icon: '🧩', desc: '根据拼音和释义拼出单词' },
    { id: 'chain', name: '词汇连连看', icon: '🔗', desc: '找到相关联的词汇' }
  ];

  if (!gameType) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">选择游戏类型</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setGameType(game.id as GameType)}
              onMouseEnter={() => setHoveredGameId(game.id)}
              onMouseLeave={() => setHoveredGameId(null)}
              className="p-6 rounded-lg border-2 transition-all text-left group"
              style={{ background: '#f5ede3', borderColor: hoveredGameId === game.id ? '#7a4f2d' : '#e2cdb8' }}
            >
              <div className="text-4xl mb-3">{game.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{game.name}</h3>
              <p className="text-sm text-gray-600">{game.desc}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => {
            setGameType(null);
            setGameStarted(false);
          }}
          className="px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          ← 返回游戏选择
        </button>
        <h2 className="text-xl font-semibold text-gray-800">
          {games.find(g => g.id === gameType)?.name}
        </h2>
        <div></div>
      </div>

      {gameType === 'matching' && (
        <MatchingGame words={starredWords.length > 0 ? starredWords : Object.values(themeWords).flat()} />
      )}
      {gameType === 'fillBlank' && (
        <FillBlankGame words={starredWords.length > 0 ? starredWords : Object.values(themeWords).flat()} />
      )}
      {gameType === 'listen' && (
        <ListenGame words={starredWords.length > 0 ? starredWords : Object.values(themeWords).flat()} />
      )}
      {gameType === 'builder' && (
        <WordBuilderGame words={starredWords.length > 0 ? starredWords : Object.values(themeWords).flat()} />
      )}
      {gameType === 'chain' && (
        <WordChainGame words={starredWords.length > 0 ? starredWords : Object.values(themeWords).flat()} />
      )}
    </div>
  );
}

// 单词卡片组件
function WordCard({ word, isStarred, toggleStar }: { word: Word; isStarred: boolean; toggleStar: () => void }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-gray-900">{word.word}</h3>
            <span className="text-sm text-gray-500">{word.pinyin}</span>
            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">{word.hskLevel}</span>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            <div>🇰🇷 {word.korean}</div>
            <div>🇨🇳 {word.chinese}</div>
          </div>
          {word.examples.length > 0 && (
            <div className="text-xs text-gray-500 italic">
              例句: {word.examples[0]}
            </div>
          )}
        </div>
        <button
          onClick={toggleStar}
          className={`text-2xl transition-transform hover:scale-110 ${
            isStarred ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </button>
      </div>
      <div className="flex items-center gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-xs ${i < word.frequency ? 'text-yellow-400' : 'text-gray-300'}`}>
            ⭐
          </span>
        ))}
      </div>
    </div>
  );
}

// 游戏1: 单词配对
function MatchingGame({ words }: { words: Word[] }) {
  const [pairs, setPairs] = useState<Array<{ word: Word; korean: string }>>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedKorean, setSelectedKorean] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const gamePairs = generateMatchingGame(words, 6);
    setPairs(gamePairs);
  }, []);

  const handleWordClick = (wordId: string) => {
    if (matchedPairs.has(wordId)) return;
    
    if (selectedWord === wordId) {
      setSelectedWord(null);
    } else if (selectedWord) {
      // 检查是否匹配
      const pair = pairs.find(p => p.word.id === wordId);
      const selectedPair = pairs.find(p => p.word.id === selectedWord);
      
      if (pair && selectedPair && pair.korean === selectedKorean) {
        setMatchedPairs(new Set([...matchedPairs, wordId, selectedWord]));
        setScore(score + 10);
        setSelectedWord(null);
        setSelectedKorean(null);
        
        if (matchedPairs.size + 2 >= pairs.length * 2) {
          setTimeout(() => setGameOver(true), 500);
        }
      } else {
        setSelectedWord(wordId);
        setSelectedKorean(pair?.korean || null);
      }
    } else {
      const pair = pairs.find(p => p.word.id === wordId);
      setSelectedWord(wordId);
      setSelectedKorean(pair?.korean || null);
    }
  };

  const handleKoreanClick = (korean: string) => {
    if (selectedWord && selectedKorean === korean) {
      const pair = pairs.find(p => p.word.id === selectedWord);
      if (pair && pair.korean === korean) {
        setMatchedPairs(new Set([...matchedPairs, selectedWord]));
        setScore(score + 10);
        setSelectedWord(null);
        setSelectedKorean(null);
        
        if (matchedPairs.size + 2 >= pairs.length * 2) {
          setTimeout(() => setGameOver(true), 500);
        }
      } else {
        setSelectedWord(null);
        setSelectedKorean(null);
      }
    } else {
      setSelectedKorean(korean);
    }
  };

  const koreanList = [...new Set(pairs.map(p => p.korean))];

  if (gameOver) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">游戏完成！</h3>
        <p className="text-lg text-gray-600 mb-6">得分: {score} 分</p>
        <button
          onClick={() => {
            const gamePairs = generateMatchingGame(words, 6);
            setPairs(gamePairs);
            setMatchedPairs(new Set());
            setScore(0);
            setGameOver(false);
            setSelectedWord(null);
            setSelectedKorean(null);
          }}
          className="px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
        >
          再来一局
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-lg font-semibold">得分: {score}</div>
        <div className="text-sm text-gray-600">已匹配: {matchedPairs.size / 2} / {pairs.length}</div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">中文单词</h3>
          <div className="space-y-2">
            {pairs.map((pair) => (
              <button
                key={pair.word.id}
                onClick={() => handleWordClick(pair.word.id)}
                disabled={matchedPairs.has(pair.word.id)}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  matchedPairs.has(pair.word.id)
                    ? 'bg-green-100 border-green-300 text-green-800'
                    : selectedWord === pair.word.id
                    ? 'bg-blue-100 border-blue-500 text-blue-800'
                    : 'bg-white border-gray-200 hover:border-gray-400'
                }`}
              >
                {pair.word.word} ({pair.word.pinyin})
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">韩语释义</h3>
          <div className="space-y-2">
            {koreanList.map((korean, idx) => (
              <button
                key={idx}
                onClick={() => handleKoreanClick(korean)}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  selectedKorean === korean
                    ? 'bg-blue-100 border-blue-500 text-blue-800'
                    : 'bg-white border-gray-200 hover:border-gray-400'
                }`}
              >
                {korean}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 游戏2: 填空挑战
function FillBlankGame({ words }: { words: Word[] }) {
  const [questions, setQuestions] = useState<Array<{
    sentence: string;
    word: Word;
    options: string[];
  }>>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const qs = generateFillBlankGame(words);
    setQuestions(qs);
  }, []);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === questions[currentQuestion].word.word) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver || questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">游戏完成！</h3>
        <p className="text-lg text-gray-600 mb-6">得分: {score} / {questions.length * 10} 分</p>
        <button
          onClick={() => {
            const qs = generateFillBlankGame(words);
            setQuestions(qs);
            setCurrentQuestion(0);
            setScore(0);
            setGameOver(false);
            setSelectedAnswer(null);
            setShowResult(false);
          }}
          className="px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
        >
          再来一局
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-lg font-semibold">得分: {score}</div>
        <div className="text-sm text-gray-600">题目: {currentQuestion + 1} / {questions.length}</div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="text-xl mb-4">
          {question.sentence}
        </div>
        <div className="text-sm text-gray-600 mb-2">
          提示: {question.word.pinyin} - {question.word.korean}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !showResult && handleAnswer(option)}
            disabled={showResult}
            className={`p-4 rounded-lg border-2 transition-all ${
              showResult
                ? option === question.word.word
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : selectedAnswer === option
                  ? 'bg-red-100 border-red-500 text-red-800'
                  : 'bg-gray-50 border-gray-200'
                : 'bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showResult && (
        <div className="mt-6">
          <div className={`p-4 rounded-lg mb-4 ${
            selectedAnswer === question.word.word ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {selectedAnswer === question.word.word ? '✓ 答对了！' : `✗ 答错了，正确答案是: ${question.word.word}`}
          </div>
          <button
            onClick={handleNext}
            className="w-full px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
          >
            {currentQuestion < questions.length - 1 ? '下一题' : '查看结果'}
          </button>
        </div>
      )}
    </div>
  );
}

// 游戏3: 听音选词
function ListenGame({ words }: { words: Word[] }) {
  const [questions, setQuestions] = useState<Word[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
  }, []);

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      setIsPlaying(true);
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.7; // 默认慢速
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (wordId: string) => {
    setSelectedAnswer(wordId);
    setShowResult(true);
    
    if (wordId === questions[currentQuestion].id) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver || questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">游戏完成！</h3>
        <p className="text-lg text-gray-600 mb-6">得分: {score} / {questions.length * 10} 分</p>
        <button
          onClick={() => {
            const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, 5);
            setQuestions(shuffled);
            setCurrentQuestion(0);
            setScore(0);
            setGameOver(false);
            setSelectedAnswer(null);
            setShowResult(false);
          }}
          className="px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
        >
          再来一局
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const options = [
    question,
    ...words.filter(w => w.id !== question.id).sort(() => Math.random() - 0.5).slice(0, 3)
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-lg font-semibold">得分: {score}</div>
        <div className="text-sm text-gray-600">题目: {currentQuestion + 1} / {questions.length}</div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
        <button
          onClick={() => speakWord(question.word)}
          disabled={isPlaying}
          className="px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e] disabled:opacity-50 mb-4"
        >
          {isPlaying ? '播放中...' : '🔊 播放发音'}
        </button>
        <p className="text-sm text-gray-600">请听发音，选择正确的中文单词</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((word) => (
          <button
            key={word.id}
            onClick={() => !showResult && handleAnswer(word.id)}
            disabled={showResult}
            className={`p-4 rounded-lg border-2 transition-all ${
              showResult
                ? word.id === question.id
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : selectedAnswer === word.id
                  ? 'bg-red-100 border-red-500 text-red-800'
                  : 'bg-gray-50 border-gray-200'
                : 'bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            <div className="font-semibold">{word.word}</div>
            <div className="text-sm text-gray-600">{word.pinyin}</div>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="mt-6">
          <div className={`p-4 rounded-lg mb-4 ${
            selectedAnswer === question.id ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {selectedAnswer === question.id ? '✓ 答对了！' : `✗ 答错了，正确答案是: ${question.word}`}
          </div>
          <button
            onClick={handleNext}
            className="w-full px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
          >
            {currentQuestion < questions.length - 1 ? '下一题' : '查看结果'}
          </button>
        </div>
      )}
    </div>
  );
}

// 游戏4: 拼词游戏
function WordBuilderGame({ words }: { words: Word[] }) {
  const [questions, setQuestions] = useState<Array<{
    word: Word;
    characters: string[];
    shuffled: string[];
  }>>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChars, setSelectedChars] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const qs = generateWordBuilderGame(words);
    setQuestions(qs);
  }, []);

  const handleCharClick = (char: string, index: number) => {
    if (showResult) return;
    
    const newSelected = [...selectedChars, char];
    setSelectedChars(newSelected);
    
    const question = questions[currentQuestion];
    if (newSelected.join('') === question.word.word) {
      setShowResult(true);
      setScore(score + 10);
    }
  };

  const handleReset = () => {
    setSelectedChars([]);
    setShowResult(false);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedChars([]);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver || questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">游戏完成！</h3>
        <p className="text-lg text-gray-600 mb-6">得分: {score} / {questions.length * 10} 分</p>
        <button
          onClick={() => {
            const qs = generateWordBuilderGame(words);
            setQuestions(qs);
            setCurrentQuestion(0);
            setScore(0);
            setGameOver(false);
            setSelectedChars([]);
            setShowResult(false);
          }}
          className="px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
        >
          再来一局
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const remainingChars = question.shuffled.filter((char, idx) => {
    const countInSelected = selectedChars.filter(c => c === char).length;
    const countInShuffled = question.shuffled.filter(c => c === char).length;
    return countInSelected < countInShuffled;
  });

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-lg font-semibold">得分: {score}</div>
        <div className="text-sm text-gray-600">题目: {currentQuestion + 1} / {questions.length}</div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="text-lg mb-2">
          <span className="font-semibold">拼音:</span> {question.word.pinyin}
        </div>
        <div className="text-lg mb-2">
          <span className="font-semibold">释义:</span> {question.word.korean} - {question.word.chinese}
        </div>
        <div className="text-xl font-bold mt-4 mb-2">你拼出的单词:</div>
        <div className="flex gap-2 min-h-[60px] items-center flex-wrap border-2 border-dashed border-gray-300 rounded-lg p-4">
          {selectedChars.map((char, idx) => (
            <span key={idx} className="text-2xl font-bold text-blue-600">{char}</span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">点击字符拼出单词:</div>
        <div className="flex flex-wrap gap-2">
          {remainingChars.map((char, idx) => (
            <button
              key={idx}
              onClick={() => handleCharClick(char, idx)}
              disabled={showResult}
              className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 text-xl font-semibold disabled:opacity-50"
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="mt-6">
          <div className="p-4 rounded-lg mb-4 bg-green-50 text-green-800">
            ✓ 拼对了！正确答案: {question.word.word}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              重新拼写
            </button>
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
            >
              {currentQuestion < questions.length - 1 ? '下一题' : '查看结果'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 游戏5: 词汇连连看
function WordChainGame({ words }: { words: Word[] }) {
  const [questions, setQuestions] = useState<Array<{
    mainWord: Word;
    relatedWords: Word[];
    correctRelation: string;
  }>>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const qs = generateWordChainGame(words);
    setQuestions(qs);
  }, []);

  const handleWordClick = (wordId: string) => {
    if (showResult) return;
    
    const newSelected = new Set(selectedWords);
    if (newSelected.has(wordId)) {
      newSelected.delete(wordId);
    } else {
      newSelected.add(wordId);
    }
    setSelectedWords(newSelected);
  };

  const handleSubmit = () => {
    setShowResult(true);
    const question = questions[currentQuestion];
    const correctIds = new Set(question.relatedWords.map(w => w.id));
    const isCorrect = selectedWords.size === correctIds.size && 
                     [...selectedWords].every(id => correctIds.has(id));
    
    if (isCorrect) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedWords(new Set());
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver || questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">游戏完成！</h3>
        <p className="text-lg text-gray-600 mb-6">得分: {score} / {questions.length * 10} 分</p>
        <button
          onClick={() => {
            const qs = generateWordChainGame(words);
            setQuestions(qs);
            setCurrentQuestion(0);
            setScore(0);
            setGameOver(false);
            setSelectedWords(new Set());
            setShowResult(false);
          }}
          className="px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
        >
          再来一局
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const allOptions = [question.mainWord, ...words.filter(w => 
    w.id !== question.mainWord.id && 
    !question.relatedWords.some(rw => rw.id === w.id)
  ).slice(0, 5 - question.relatedWords.length - 1), ...question.relatedWords].sort(() => Math.random() - 0.5);
  
  const correctIds = new Set(question.relatedWords.map(w => w.id));
  const isCorrect = selectedWords.size === correctIds.size && 
                   [...selectedWords].every(id => correctIds.has(id));

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-lg font-semibold">得分: {score}</div>
        <div className="text-sm text-gray-600">题目: {currentQuestion + 1} / {questions.length}</div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="text-lg mb-4">
          <span className="font-semibold">中心词:</span>
          <span className="text-2xl font-bold text-blue-600 ml-2">{question.mainWord.word}</span>
          <span className="text-sm text-gray-600 ml-2">({question.mainWord.pinyin})</span>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          请选择与中心词相关的词汇（{question.relatedWords.length}个）
        </div>
        <div className="text-xs text-gray-500">
          提示: {question.correctRelation}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {allOptions.map((word) => (
          <button
            key={word.id}
            onClick={() => handleWordClick(word.id)}
            disabled={showResult}
            className={`p-4 rounded-lg border-2 transition-all ${
              showResult
                ? correctIds.has(word.id)
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : selectedWords.has(word.id) && !correctIds.has(word.id)
                  ? 'bg-red-100 border-red-500 text-red-800'
                  : 'bg-gray-50 border-gray-200'
                : selectedWords.has(word.id)
                ? 'bg-blue-100 border-blue-500 text-blue-800'
                : 'bg-white border-gray-200 hover:border-gray-400'
            }`}
          >
            <div className="font-semibold">{word.word}</div>
            <div className="text-sm text-gray-600">{word.pinyin}</div>
          </button>
        ))}
      </div>

      {!showResult && (
        <button
          onClick={handleSubmit}
          disabled={selectedWords.size === 0}
          className="w-full px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e] disabled:opacity-50"
        >
          提交答案
        </button>
      )}

      {showResult && (
        <div className="mt-6">
          <div className={`p-4 rounded-lg mb-4 ${
            isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {isCorrect ? '✓ 答对了！' : '✗ 答错了，请查看正确答案'}
          </div>
          <button
            onClick={handleNext}
            className="w-full px-6 py-3 text-white rounded-lg bg-[#7a4f2d] hover:bg-[#a06c3e]"
          >
            {currentQuestion < questions.length - 1 ? '下一题' : '查看结果'}
          </button>
        </div>
      )}
    </div>
  );
}
