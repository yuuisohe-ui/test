import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Word, themeWords } from '../data/wordReviewData';
import { getAllYoutubeSongs, type YoutubeSong } from '../data/youtubeSongs';
import { getAllVocab } from '../utils/vocabLoader';
import { WordAnalysis } from '../data/tianmimiVocab';
import { getLevelLabelKo, getStyleLabelKo } from '../i18n/youtubePageTranslations';
import { TTSButton } from '../components/TTSButton';
import { pinyin } from 'pinyin-pro';
import { parseSRT, type SubtitleItem } from '../utils/srtParser';
import { getKoreanTranslation } from '../utils/koreanTranslationLoader';

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type TabType = 'collection' | 'theme' | 'game';

// YouTube 重点词 id 格式: yt:videoId:word
function getYoutubeWordById(id: string): Word | null {
  if (!id.startsWith('yt:')) return null;
  const parts = id.split(':');
  if (parts.length < 3) return null;
  const videoId = parts[1];
  const wordStr = parts.slice(2).join(':');
  const vocab = getAllVocab(videoId);
  const item = vocab.find((v: WordAnalysis) => v.word === wordStr);
  if (!item) return null;
  return wordAnalysisToWord(item, videoId);
}

function wordAnalysisToWord(item: WordAnalysis, videoId: string): Word {
  return {
    id: `yt:${videoId}:${item.word}`,
    word: item.word,
    pinyin: item.pinyin,
    korean: item.meaningKr ?? '',
    chinese: item.meaning ?? '',
    hskLevel: item.level === 'basic' ? 'HSK2' : item.level === 'intermediate' ? 'HSK3' : 'HSK4',
    frequency: 0,
    examples: item.example ? [item.example] : [],
    exampleKr: item.exampleKr,
    examplePinyin: item.example ? (pinyin(item.example, { toneType: 'tone', separator: ' ' }) || '') : undefined,
  };
}

/** 从所有 YouTube 词汇数据中查找该中文词，若有则返回完整 Word（用于补齐） */
function getWordFromVocabPool(wordStr: string): Word | null {
  if (!wordStr || typeof wordStr !== 'string') return null;
  const songs = getAllYoutubeSongs();
  for (const song of songs) {
    if (!song.videoId) continue;
    const vocab = getAllVocab(song.videoId);
    const item = vocab.find((v: WordAnalysis) => v.word === wordStr);
    if (item) return wordAnalysisToWord(item, song.videoId);
  }
  return null;
}

/** 为缺少例句等信息的收藏词补齐：先查词汇库，否则至少补齐拼音 */
function enrichWordForDisplay(w: Word): Word {
  const fromPool = getWordFromVocabPool(w.word);
  if (fromPool) {
    return { ...fromPool, id: w.id };
  }
  let pinyinVal = w.pinyin;
  if (!pinyinVal?.trim() && w.word?.trim()) {
    try {
      pinyinVal = (pinyin(w.word, { toneType: 'tone', separator: ' ' }) as string) || '';
    } catch {
      pinyinVal = '';
    }
  }
  return { ...w, pinyin: pinyinVal || w.pinyin };
}

type GameType = 'lyricsDictation' | 'cardMatch' | 'wordDetective' | null;

export default function WordReviewPage() {
  const [activeTab, setActiveTab] = useState<TabType>('collection');
  const [selectedTheme, setSelectedTheme] = useState<string>('欢快');
  const [gameType, setGameType] = useState<GameType>(null);
  const [gameStarted, setGameStarted] = useState(false);
  
  // 合并收藏：主题词汇（starredWords）+ YouTube 重点词（yt:videoId:word）+ 从歌词页收藏的单词（starredWordsCustom）
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
    const ytWordsList = themeIds
      .filter((id: string) => id.startsWith('yt:'))
      .map((id: string) => getYoutubeWordById(id))
      .filter((w): w is Word => w != null);
    const restIds = themeIds.filter((id: string) => !allTheme.some(w => w.id === id) && !id.startsWith('yt:'));
    const rawAsWord: Word[] = restIds.map((id: string, i: number) =>
      enrichWordForDisplay({
        id: 'raw-' + id + '-' + i,
        word: id,
        pinyin: '',
        korean: '',
        chinese: id,
        hskLevel: '',
        frequency: 0,
        examples: [],
      })
    );
    const customAsWord: Word[] = custom.map((w, i) =>
      enrichWordForDisplay({
        id: 'custom-' + w.word + '-' + i,
        word: w.word,
        pinyin: w.pinyin || '',
        korean: w.korean || '',
        chinese: w.word,
        hskLevel: '',
        frequency: 0,
        examples: [],
      })
    );
    return [...themeWordsList, ...ytWordsList, ...rawAsWord, ...customAsWord];
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

        {/* Tab导航：游戏进行 중(노래 받아쓰기)일 때는 탭 대신 '게임 선택' 버튼만 표시 */}
        {activeTab === 'game' && (gameType === 'lyricsDictation' || gameType === 'wordDetective') ? (
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            <button
              type="button"
              onClick={() => { setGameType(null); setGameStarted(false); }}
              className="px-4 py-3 font-medium text-[#7a4f2d] hover:underline"
            >
              ← 게임 선택
            </button>
          </div>
        ) : (
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
              테마 어휘
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
              게임 연습
            </button>
          </div>
        )}

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

// 主题词汇 Tab：영상 학습실 스타일(신나는/애절한/서정적인) → 곡별 핵심 어휘, 전부 한글 표기
const STYLES: Array<'欢快' | '悲伤' | '抒情'> = ['欢快', '悲伤', '抒情'];

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
  const [expandedSongId, setExpandedSongId] = useState<string | null>(null);

  const songsWithVocab = useMemo(() => {
    return getAllYoutubeSongs().filter((s) => s.videoId && getAllVocab(s.videoId).length > 0);
  }, []);

  const songsByStyle = useMemo(() => {
    const m: Record<string, YoutubeSong[]> = { '欢快': [], '悲伤': [], '抒情': [] };
    songsWithVocab.forEach((s) => {
      if (m[s.style]) m[s.style].push(s);
    });
    return m;
  }, [songsWithVocab]);

  const currentSongs = (songsByStyle[selectedTheme] ?? []) as YoutubeSong[];
  const styleColors: Record<string, string> = {
    '欢快': 'bg-green-100 text-green-800 border-green-300',
    '悲伤': 'bg-pink-100 text-pink-800 border-pink-300',
    '抒情': 'bg-blue-100 text-blue-800 border-blue-300',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">스타일 선택</h2>
        <div className="flex flex-wrap gap-3">
          {STYLES.map((style) => (
            <button
              key={style}
              onClick={() => {
                setSelectedTheme(style);
                setExpandedSongId(null);
              }}
              className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                selectedTheme === style
                  ? styleColors[style] ?? 'bg-gray-100 text-gray-800 border-gray-300'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {getStyleLabelKo(style)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {getStyleLabelKo(selectedTheme)} 곡 목록
        </h3>
        {currentSongs.length === 0 ? (
          <p className="text-gray-500">이 스타일에 해당하는 곡이 없습니다.</p>
        ) : (
          <div className="space-y-3">
            {currentSongs.map((song) => {
              const vocab = song.videoId ? getAllVocab(song.videoId) : [];
              const words = vocab.map((item) => wordAnalysisToWord(item, song.videoId!));
              const isExpanded = expandedSongId === song.id;
              return (
                <div
                  key={song.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedSongId(isExpanded ? null : song.id)}
                    className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-800">{song.nameKr}</span>
                    <span className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded ${song.level === '初级' ? 'bg-green-100 text-green-800' : song.level === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {getLevelLabelKo(song.level)}
                      </span>
                      <span className="text-sm text-gray-500">핵심 어휘 {words.length}개</span>
                      <span className="text-gray-400">{isExpanded ? '▼' : '▶'}</span>
                    </span>
                  </button>
                  {isExpanded && (
                    <div className="p-4 border-t border-gray-200 bg-white">
                      <h4 className="text-sm font-medium text-gray-600 mb-3">핵심 어휘</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {words.map((word) => (
                          <WordCard
                            key={word.id}
                            word={word}
                            isStarred={isStarred(word.id)}
                            toggleStar={() => toggleStar(word)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
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
    { id: 'cardMatch', name: '짝 맞추기', icon: '🎴', desc: '중국어 단어와 한국어 뜻을 연결해요. 뒤집어서 짝을 찾아보세요!' },
    { id: 'lyricsDictation', name: '노래 받아쓰기', icon: '🎵', desc: '노래를 듣고 가사를 받아써요' },
    { id: 'wordDetective', name: '단어 탐정', icon: '🕵️‍♀️', desc: '가사 속 단어의 뜻과 역할을 맞춰요' }
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
          {/* 占位卡片：역사 탐험대 (준비 중) */}
          <div
            className="p-6 rounded-lg border-2 transition-all text-left relative"
            style={{ background: '#f5ede3', borderColor: '#e2cdb8', opacity: 0.5, cursor: 'not-allowed' }}
          >
            <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded bg-gray-300 text-gray-600">
              준비 중
            </span>
            <div className="text-4xl mb-3">🏯</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">역사 탐험대</h3>
            <p className="text-sm text-gray-600">중국 역사 속 시대를 노래로 탐험해보세요</p>
          </div>
        </div>
      </div>
    );
  }

  if (gameType === 'lyricsDictation') {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-5rem)] flex flex-col">
        <LyricsDictationFlow
          onBackToGameList={() => {
            setGameType(null);
            setGameStarted(false);
          }}
        />
      </div>
    );
  }

  if (gameType === 'cardMatch') {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-5rem)] flex flex-col">
        <CardMatchFlow
          onBackToGameList={() => {
            setGameType(null);
            setGameStarted(false);
          }}
        />
      </div>
    );
  }

  if (gameType === 'wordDetective') {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-5rem)] flex flex-col">
        <WordDetectiveFlow
          onBackToGameList={() => {
            setGameType(null);
            setGameStarted(false);
          }}
        />
      </div>
    );
  }

  return null;
}

// ——— 짝 맞추기 (카드 매칭) ——— 固定三关：第1关6张(3对)、第2关8张(4对)、第3关12张(6对)
const CARD_MATCH_ROUND_PAIRS = [3, 4, 6]; // 每关对数 → 6 / 8 / 12 张卡片
const CARD_MATCH_TOTAL_ROUNDS = 3;
const CARD_MATCH_WORDS_NEEDED = 13; // 3+4+6 共需 13 个词

/** 取满 need 个词用于卡片游戏；若词汇不足则循环重复再打乱，保证能玩三关 */
function takeWordsForCardMatch(words: Array<{ zh: string; ko: string }>, need: number): Array<{ zh: string; ko: string }> {
  if (words.length === 0) return [];
  const shuffled = shuffle([...words]);
  if (shuffled.length >= need) return shuffled.slice(0, need);
  const repeated: Array<{ zh: string; ko: string }> = [];
  for (let i = 0; i < need; i++) repeated.push(shuffled[i % shuffled.length]);
  return shuffle(repeated);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function CardMatchFlow({ onBackToGameList }: { onBackToGameList: () => void }) {
  const [screen, setScreen] = useState<'entry' | 'songList' | 'game' | 'result'>('entry');
  const [currentSong, setCurrentSong] = useState<YoutubeSong | null>(null);
  const [currentWords, setCurrentWords] = useState<Array<{ zh: string; ko: string }>>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [totalRounds, setTotalRounds] = useState(0);
  const [allFlips, setAllFlips] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [resultTime, setResultTime] = useState(0);

  const songsWithVocab = useMemo(() => {
    return getAllYoutubeSongs().filter((s) => s.videoId && getAllVocab(s.videoId).length > 0);
  }, []);

  const startRandom = useCallback(() => {
    if (songsWithVocab.length === 0) return;
    const song = songsWithVocab[Math.floor(Math.random() * songsWithVocab.length)];
    const vocab = getAllVocab(song.videoId!);
    const words = vocab
      .filter((v) => v.word && (v.meaningKr ?? '').trim())
      .map((v) => ({ zh: v.word, ko: v.meaningKr ?? '' }));
    if (words.length === 0) return;
    setCurrentSong(song);
    const taken = takeWordsForCardMatch(words, CARD_MATCH_WORDS_NEEDED);
    setCurrentWords(taken);
    setCurrentRound(0);
    setTotalRounds(CARD_MATCH_TOTAL_ROUNDS);
    setAllFlips(0);
    setStartTime(Date.now());
    setScreen('game');
  }, [songsWithVocab]);

  const startWithSong = useCallback((song: YoutubeSong) => {
    const vocab = getAllVocab(song.videoId!);
    const words = vocab
      .filter((v) => v.word && (v.meaningKr ?? '').trim())
      .map((v) => ({ zh: v.word, ko: v.meaningKr ?? '' }));
    if (words.length === 0) return;
    setCurrentSong(song);
    const taken = takeWordsForCardMatch(words, CARD_MATCH_WORDS_NEEDED);
    setCurrentWords(taken);
    setCurrentRound(0);
    setTotalRounds(CARD_MATCH_TOTAL_ROUNDS);
    setAllFlips(0);
    setStartTime(Date.now());
    setScreen('game');
  }, []);

  const goToEntry = useCallback(() => {
    setScreen('entry');
    setCurrentSong(null);
    setCurrentWords([]);
  }, []);

  const showResult = useCallback((elapsedSec: number) => {
    setResultTime(elapsedSec);
    setScreen('result');
  }, []);

  return (
    <div className="min-h-[60vh]" style={{ background: '#f5f0e8', color: '#3a3028' }}>
      {screen === 'entry' && (
        <CardMatchEntryScreen
          onRandom={startRandom}
          onChooseSong={() => setScreen('songList')}
          onBack={onBackToGameList}
          canStart={songsWithVocab.length > 0}
        />
      )}
      {screen === 'songList' && (
        <CardMatchSongListScreen
          songs={songsWithVocab}
          onSelect={startWithSong}
          onBack={goToEntry}
        />
      )}
      {screen === 'game' && currentSong && currentWords.length > 0 && (
        <CardMatchGameScreen
          song={currentSong}
          words={currentWords}
          totalRounds={totalRounds}
          allFlips={allFlips}
          setAllFlips={setAllFlips}
          startTime={startTime ?? Date.now()}
          onRoundComplete={(nextRound) => {
            if (nextRound >= totalRounds) {
              const elapsed = Math.floor((Date.now() - (startTime ?? Date.now())) / 1000);
              showResult(elapsed);
            } else {
              setCurrentRound(nextRound);
            }
          }}
          onBack={onBackToGameList}
        />
      )}
      {screen === 'result' && currentSong && (
        <CardMatchResultScreen
          song={currentSong}
          totalFlips={allFlips}
          elapsedSec={resultTime}
          onRandomAgain={startRandom}
          onChooseSong={() => setScreen('songList')}
          onHome={goToEntry}
        />
      )}
    </div>
  );
}

function CardMatchEntryScreen({
  onRandom,
  onChooseSong,
  onBack,
  canStart,
}: {
  onRandom: () => void;
  onChooseSong: () => void;
  onBack: () => void;
  canStart: boolean;
}) {
  return (
    <div className="max-w-[480px] mx-auto py-12 px-6 text-center">
      <div className="flex items-center justify-between mb-6">
        <button type="button" onClick={onBack} className="text-sm text-[#7a6e64] hover:text-[#3a3028] flex items-center gap-1.5">
          ← 게임 선택
        </button>
        <span className="text-lg font-bold text-[#3a3028]">🎴 카드 매칭</span>
        <div className="w-16" />
      </div>
      <div className="text-5xl mb-4">🎴</div>
      <h1 className="text-2xl font-extrabold mb-2">카드 매칭 게임</h1>
      <p className="text-sm text-[#9a8e84] mb-12 leading-relaxed">
        중국어 단어와 한국어 뜻을 연결해요<br />뒤집어서 짝을 찾아보세요!
      </p>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onRandom}
          disabled={!canStart}
          className="py-5 px-6 rounded-2xl border-none cursor-pointer text-base font-bold flex items-center gap-3 transition-all text-left disabled:opacity-50"
          style={{ background: '#5b8a5f', color: '#fff' }}
        >
          <span className="text-2xl">🎲</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold">랜덤 매칭</span>
            <span className="text-xs opacity-75">등급에 맞는 노래를 자동으로 골라드려요</span>
          </div>
        </button>
        <button
          type="button"
          onClick={onChooseSong}
          className="py-5 px-6 rounded-2xl border-2 cursor-pointer text-base font-bold flex items-center gap-3 transition-all text-left"
          style={{ background: '#fff', color: '#3a3028', borderColor: '#e0d8cc' }}
        >
          <span className="text-2xl">🎵</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold">노래 선택</span>
            <span className="text-xs opacity-75">연습하고 싶은 노래를 직접 골라요</span>
          </div>
        </button>
      </div>
    </div>
  );
}

function CardMatchSongListScreen({
  songs,
  onSelect,
  onBack,
}: {
  songs: YoutubeSong[];
  onSelect: (song: YoutubeSong) => void;
  onBack: () => void;
}) {
  return (
    <div className="max-w-[640px] mx-auto p-6">
      <div className="flex items-center gap-4 mb-4">
        <button type="button" onClick={onBack} className="text-sm text-[#7a6e64] hover:text-[#3a3028] flex items-center gap-1.5">
          ← 처음으로
        </button>
      </div>
      <h2 className="text-base font-bold mb-4 text-[#5b4e44]">노래를 선택하세요</h2>
      <div className="space-y-2">
        {songs.map((song) => {
          const vocab = song.videoId ? getAllVocab(song.videoId) : [];
          const count = vocab.filter((v) => v.word && (v.meaningKr ?? '').trim()).length;
          return (
            <button
              key={song.id}
              type="button"
              onClick={() => onSelect(song)}
              className="w-full bg-white rounded-xl py-4 px-5 flex items-center justify-between border-2 border-transparent transition-all hover:border-[#5b8a5f] hover:shadow-md text-left"
            >
              <span className="font-semibold text-[15px]">{song.nameKr}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    song.level === '中级' ? 'bg-[#fff3e0] text-[#d07a20]' : 'bg-[#e8f4e8] text-[#4a7a4e]'
                  }`}
                >
                  {getLevelLabelKo(song.level)}
                </span>
                <span className="text-[13px] text-[#9a8e84]">핵심 어휘 {count}개</span>
                <span>▶</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

type CardMatchGameScreenProps = {
  song: YoutubeSong;
  words: Array<{ zh: string; ko: string }>;
  totalRounds: number;
  allFlips: number;
  setAllFlips: (n: number | ((prev: number) => number)) => void;
  startTime: number;
  onRoundComplete: (nextRound: number) => void;
  onBack: () => void;
};

function CardMatchGameScreen({
  song,
  words,
  totalRounds,
  allFlips,
  setAllFlips,
  startTime,
  onRoundComplete,
  onBack,
}: CardMatchGameScreenProps) {
  const [currentRound, setCurrentRound] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [cardStates, setCardStates] = useState<{
    selected: Set<string>;
    matched: Set<string>;
  }>({ selected: new Set(), matched: new Set() });
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pairs = useMemo(() => {
    const startIdx = CARD_MATCH_ROUND_PAIRS.slice(0, currentRound).reduce((a, b) => a + b, 0);
    const pairCount = CARD_MATCH_ROUND_PAIRS[currentRound] ?? 0;
    const roundWords = words.slice(startIdx, startIdx + pairCount);
    const p: Array<{ id: string; text: string; type: 'chinese' | 'korean'; pairId: number }> = [];
    roundWords.forEach((w, i) => {
      p.push({ id: `zh-${i}`, text: w.zh, type: 'chinese', pairId: i });
      p.push({ id: `ko-${i}`, text: w.ko, type: 'korean', pairId: i });
    });
    return shuffle(p);
  }, [currentRound, words]);

  const totalInRound = pairs.length / 2;

  useEffect(() => {
    if (matchedCount > 0 && matchedCount >= totalInRound) {
      const next = currentRound + 1;
      onRoundComplete(next);
      if (next < totalRounds) {
        setMatchedCount(0);
        setCardStates({ selected: new Set(), matched: new Set() });
        setCurrentRound(next);
      }
    }
  }, [matchedCount, totalInRound, currentRound, totalRounds, onRoundComplete]);

  const speakChinese = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 0.6;
    window.speechSynthesis.speak(utter);
  }, []);

  const handleCardClick = useCallback(
    (cardId: string, pairId: number, type: string, text: string) => {
      if (isLocked) return;
      if (cardStates.matched.has(cardId)) return;

      if (type === 'chinese') speakChinese(text);

      if (cardStates.selected.has(cardId)) {
        setCardStates((prev) => ({
          ...prev,
          selected: (() => {
            const s = new Set(prev.selected);
            s.delete(cardId);
            return s;
          })(),
        }));
        return;
      }

      const newSelected = new Set(cardStates.selected);
      newSelected.add(cardId);
      setCardStates((prev) => ({ ...prev, selected: newSelected }));
      setAllFlips((f) => f + 1);

      if (newSelected.size === 2) {
        const selectedIds = Array.from(newSelected);
        const [a, b] = selectedIds;
        const cardA = pairs.find((c) => c.id === a);
        const cardB = pairs.find((c) => c.id === b);
        const match =
          cardA && cardB && cardA.pairId === cardB.pairId && cardA.type !== cardB.type;

        setIsLocked(true);
        if (match) {
          setTimeout(() => {
            setCardStates((prev) => ({
              selected: new Set(),
              matched: new Set([...prev.matched, a, b]),
            }));
            setMatchedCount((m) => m + 1);
            setIsLocked(false);
          }, 300);
        } else {
          setTimeout(() => {
            setCardStates((prev) => ({ ...prev, selected: new Set() }));
            setIsLocked(false);
          }, 400);
        }
      }
    },
    [
      isLocked,
      cardStates.selected,
      cardStates.matched,
      pairs,
      matchedCount,
      totalInRound,
      onRoundComplete,
      setAllFlips,
      speakChinese,
    ]
  );

  const progressPercent = totalRounds > 0 ? (currentRound / totalRounds) * 100 : 0;
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  const timeStr = `${m}:${s.toString().padStart(2, '0')}`;

  const handleBackClick = () => setShowExitModal(true);

  return (
    <div className="max-w-[680px] mx-auto py-5 px-4">
      {showExitModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 flex items-center justify-center z-[200]"
          style={{ background: 'rgba(44,26,14,0.48)', backdropFilter: 'blur(6px)' }}
          onClick={() => setShowExitModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[20px] p-11 text-center w-[90%] max-w-[350px]"
            style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
          >
            <div className="text-4xl mb-3">🎴</div>
            <h3 className="font-serif text-lg text-[#2c1a0e] mb-2">게임을 종료할까요?</h3>
            <p className="text-[13px] text-[#9c7b60] leading-relaxed mb-6">
              지금 나가면 이번 라운드 진행이 저장되지 않아요.<br />처음으로 돌아갈까요?
            </p>
            <div className="flex gap-2.5 justify-center">
              <button
                type="button"
                onClick={() => setShowExitModal(false)}
                className="px-5 py-2.5 rounded-lg border-[1.5px] border-[#e2cdb8] bg-transparent text-[#5c4a3a] text-[13px] font-medium cursor-pointer"
              >
                닫기
              </button>
              <button
                type="button"
                onClick={() => { setShowExitModal(false); onBack(); }}
                className="px-5 py-2.5 rounded-lg border-[1.5px] border-[#7a4f2d] bg-[#7a4f2d] text-white text-[13px] font-medium cursor-pointer"
              >
                처음으로
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between mb-3">
        <button type="button" onClick={handleBackClick} className="text-sm text-[#7a6e64] hover:text-[#3a3028]">
          ← 게임 선택
        </button>
      </div>
      <div className="flex items-center justify-between mb-5">
        <div className="text-[13px] text-[#9a8e84]">
          지금 연습 중: <strong className="text-[#3a3028] font-bold">{song.nameKr}</strong>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-xl font-extrabold text-[#5b8a5f]">{allFlips}</div>
            <div className="text-[10px] text-[#9a8e84] uppercase tracking-wider">뒤집기</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-extrabold text-[#5b8a5f] font-mono">{timeStr}</div>
            <div className="text-[10px] text-[#9a8e84] uppercase tracking-wider">시간</div>
          </div>
        </div>
      </div>
      <div className="h-1.5 bg-[#e0d8cc] rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-[#5b8a5f] rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      {totalRounds > 1 && (
        <div className="text-center text-xs text-[#9a8e84] mb-4">
          라운드 {currentRound + 1} / {totalRounds}
        </div>
      )}
      <div
        className="grid gap-2.5 mb-6"
        style={{
          gridTemplateColumns: pairs.length === 6 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
        }}
      >
        {pairs.map((card) => {
          const isSelected = cardStates.selected.has(card.id);
          const isMatched = cardStates.matched.has(card.id);
          const isChinese = card.type === 'chinese';
          return (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              data-text={card.text}
              data-type={card.type}
              onClick={() => !isMatched && handleCardClick(card.id, card.pairId, card.type, card.text)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (!isMatched) handleCardClick(card.id, card.pairId, card.type, card.text);
                }
              }}
              className={`card-match-wrap aspect-[1/1.2] cursor-pointer rounded-xl text-center transition-all ${isMatched ? 'matched' : ''}`}
              style={{
                boxShadow: isSelected && !isMatched ? '0 0 0 3px rgba(91,138,95,0.25)' : undefined,
              }}
            >
              <div className="card-match-inner w-full h-full relative">
                <div className="card-match-face card-match-back flex items-center justify-center">
                  <span className="opacity-80" style={{ fontSize: '3.75rem' }}>🎴</span>
                </div>
                <div
                  className="card-match-face card-match-front p-2.5 flex items-center justify-center"
                  style={{
                    background: isMatched ? 'transparent' : isChinese ? '#faf8f5' : '#f0efe8',
                    borderColor: isSelected && !isMatched ? '#5b8a5f' : '#e0d8cc',
                  }}
                >
                  <span
                    className="font-semibold leading-tight break-keep text-[24px] font-extrabold"
                    style={{ fontSize: 24, color: '#3a3028' }}
                  >
                    {card.text}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CardMatchResultScreen({
  song,
  totalFlips,
  elapsedSec,
  onRandomAgain,
  onChooseSong,
  onHome,
}: {
  song: YoutubeSong;
  totalFlips: number;
  elapsedSec: number;
  onRandomAgain: () => void;
  onChooseSong: () => void;
  onHome: () => void;
}) {
  const timeStr =
    elapsedSec >= 60 ? `${Math.floor(elapsedSec / 60)}분 ${elapsedSec % 60}초` : `${elapsedSec}초`;
  const ratio = totalFlips / (getAllVocab(song.videoId!).length || 1);
  let emoji = '🎉';
  let title = '잘했어요!';
  if (ratio < 2.5) {
    emoji = '🏆';
    title = '완벽해요!';
  } else if (ratio >= 4) {
    emoji = '💪';
    title = '계속 연습해요!';
  }

  return (
    <div className="max-w-[420px] mx-auto py-12 px-6 text-center">
      <div className="text-6xl mb-4">{emoji}</div>
      <h2 className="text-2xl font-extrabold mb-2">{title}</h2>
      <div className="flex gap-5 justify-center mb-9">
        <div className="bg-white rounded-xl py-4 px-7 border-2 border-[#e0d8cc]">
          <div className="text-2xl font-extrabold text-[#5b8a5f]">{totalFlips}번</div>
          <div className="text-xs text-[#9a8e84] mt-1">총 뒤집기 횟수</div>
        </div>
        <div className="bg-white rounded-xl py-4 px-7 border-2 border-[#e0d8cc]">
          <div className="text-2xl font-extrabold text-[#5b8a5f]">{timeStr}</div>
          <div className="text-xs text-[#9a8e84] mt-1">걸린 시간</div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={onRandomAgain}
          className="py-4 rounded-xl text-[15px] font-bold border-none cursor-pointer bg-[#5b8a5f] text-white"
        >
          🎲 랜덤 계속하기
        </button>
        <button
          type="button"
          onClick={onChooseSong}
          className="py-4 rounded-xl text-[15px] font-bold border-2 border-[#e0d8cc] bg-white text-[#3a3028] cursor-pointer"
        >
          🎵 노래 선택하기
        </button>
        <button
          type="button"
          onClick={onHome}
          className="py-4 rounded-xl text-[15px] font-bold border-2 border-[#e0d8cc] bg-white text-[#3a3028] cursor-pointer"
        >
          🏠 처음으로
        </button>
      </div>
    </div>
  );
}

// ——— 단어 탐정 (어휘 역할/뜻 맞추기) ———
const WORD_DETECTIVE_ROLES = ['상태 묘사', '동작 표현', '시간 표현', '장소 표현'] as const;
const WORD_DETECTIVE_QUESTIONS_COUNT = 10;

type WordDetectiveQuestion = {
  song: YoutubeSong;
  subtitle: SubtitleItem;
  word: WordAnalysis;
  lineText: string;
  koreanText: string;
};

function buildWordDetectiveQuestions(song: YoutubeSong, maxCount: number): WordDetectiveQuestion[] {
  if (!song.videoId || !song.srtContent) return [];
  const vocab = getAllVocab(song.videoId).filter((v) => v.word && (v.meaningKr ?? '').trim());
  if (vocab.length < 4) return [];
  const subtitles = parseSRT(song.srtContent);
  const pairs: WordDetectiveQuestion[] = [];
  for (let i = 0; i < subtitles.length; i++) {
    const sub = subtitles[i];
    const lineText = sub.text.replace(/^\d+\s*/, '').trim();
    if (!lineText) continue;
    const koreanText = getKoreanTranslation(song.videoId!, i + 1);
    if (!koreanText?.trim()) continue;
    for (const v of vocab) {
      if (lineText.includes(v.word)) {
        pairs.push({
          song,
          subtitle: sub,
          word: v,
          lineText,
          koreanText: koreanText.trim(),
        });
        break;
      }
    }
  }
  return shuffle(pairs).slice(0, maxCount);
}

function WordDetectiveFlow({ onBackToGameList }: { onBackToGameList: () => void }) {
  const [screen, setScreen] = useState<'entry' | 'songList' | 'game' | 'result'>('entry');
  const [currentSong, setCurrentSong] = useState<YoutubeSong | null>(null);
  const [questions, setQuestions] = useState<WordDetectiveQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedCorrect, setSelectedCorrect] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const songsWithVocab = useMemo(() => {
    return getAllYoutubeSongs().filter((s) => s.videoId && s.srtContent && getAllVocab(s.videoId).length >= 4);
  }, []);

  const startRandom = useCallback(() => {
    if (songsWithVocab.length === 0) return;
    const song = songsWithVocab[Math.floor(Math.random() * songsWithVocab.length)];
    const qs = buildWordDetectiveQuestions(song, WORD_DETECTIVE_QUESTIONS_COUNT);
    if (qs.length === 0) return;
    setCurrentSong(song);
    setQuestions(qs);
    setCurrentIndex(0);
    setCorrectCount(0);
    setScreen('game');
  }, [songsWithVocab]);

  const startWithSong = useCallback((song: YoutubeSong) => {
    const qs = buildWordDetectiveQuestions(song, WORD_DETECTIVE_QUESTIONS_COUNT);
    if (qs.length === 0) return;
    setCurrentSong(song);
    setQuestions(qs);
    setCurrentIndex(0);
    setCorrectCount(0);
    setScreen('game');
  }, []);

  const goToEntry = useCallback(() => {
    setScreen('entry');
    setCurrentSong(null);
    setQuestions([]);
  }, []);

  const goToResult = useCallback(() => {
    setScreen('result');
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      goToResult();
    } else {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
      setSelectedCorrect(false);
      setSelectedOptionIndex(null);
    }
  }, [currentIndex, questions.length, goToResult]);

  if (screen === 'entry') {
    return (
      <WordDetectiveEntryScreen
        onRandom={startRandom}
        onChooseSong={() => setScreen('songList')}
        onBack={onBackToGameList}
        canStart={songsWithVocab.length > 0}
      />
    );
  }
  if (screen === 'songList') {
    return (
      <WordDetectiveSongListScreen
        songs={songsWithVocab}
        onSelect={startWithSong}
        onBack={goToEntry}
      />
    );
  }
  if (screen === 'game' && currentSong && questions.length > 0 && questions[currentIndex]) {
    return (
      <WordDetectiveGameScreen
        song={currentSong}
        question={questions[currentIndex]}
        totalQuestions={questions.length}
        currentProgress={currentIndex + 1}
        correctCount={correctCount}
        answered={answered}
        selectedCorrect={selectedCorrect}
        selectedOptionIndex={selectedOptionIndex}
        onSelectOption={(isCorrect, optionIndex) => {
          setAnswered(true);
          setSelectedCorrect(isCorrect);
          setSelectedOptionIndex(optionIndex);
          if (isCorrect) setCorrectCount((c) => c + 1);
        }}
        onNext={handleNext}
        onBack={onBackToGameList}
      />
    );
  }
  if (screen === 'result' && currentSong) {
    return (
      <WordDetectiveResultScreen
        song={currentSong}
        totalQuestions={questions.length}
        correctCount={correctCount}
        onRandomAgain={startRandom}
        onChooseSong={() => setScreen('songList')}
        onHome={goToEntry}
        onBackToGameList={onBackToGameList}
      />
    );
  }
  return null;
}

function WordDetectiveEntryScreen({
  onRandom,
  onChooseSong,
  onBack,
  canStart,
}: {
  onRandom: () => void;
  onChooseSong: () => void;
  onBack: () => void;
  canStart: boolean;
}) {
  return (
    <div className="max-w-[480px] mx-auto py-12 px-6 text-center">
      <div className="flex items-center justify-between mb-6">
        <button type="button" onClick={onBack} className="text-sm text-[#7a6e64] hover:text-[#3a3028] flex items-center gap-1.5">
          ← 게임 선택
        </button>
        <span className="text-lg font-bold text-[#3a3028]">🕵️‍♀️ 단어 탐정</span>
        <div className="w-16" />
      </div>
      <div className="text-5xl mb-4">🕵️‍♀️</div>
      <h1 className="text-2xl font-extrabold mb-2">단어 탐정</h1>
      <p className="text-sm text-[#9a8e84] mb-12 leading-relaxed">
        가사 속 단어의 뜻과 역할을 맞춰요<br />노래를 듣고 정답을 골라보세요!
      </p>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onRandom}
          disabled={!canStart}
          className="py-5 px-6 rounded-2xl border-none cursor-pointer text-base font-bold flex items-center gap-3 transition-all text-left disabled:opacity-50"
          style={{ background: '#7a4f2d', color: '#fff' }}
        >
          <span className="text-2xl">🎲</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold">랜덤 매칭</span>
            <span className="text-xs opacity-75">등급에 맞는 노래를 자동으로 골라드려요</span>
          </div>
        </button>
        <button
          type="button"
          onClick={onChooseSong}
          className="py-5 px-6 rounded-2xl border-2 cursor-pointer text-base font-bold flex items-center gap-3 transition-all text-left"
          style={{ background: '#fff', color: '#3a3028', borderColor: '#e0d8cc' }}
        >
          <span className="text-2xl">🎵</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold">노래 선택</span>
            <span className="text-xs opacity-75">연습하고 싶은 노래를 직접 골라요</span>
          </div>
        </button>
      </div>
    </div>
  );
}

function WordDetectiveSongListScreen({
  songs,
  onSelect,
  onBack,
}: {
  songs: YoutubeSong[];
  onSelect: (song: YoutubeSong) => void;
  onBack: () => void;
}) {
  return (
    <div className="max-w-[640px] mx-auto p-6">
      <div className="flex items-center gap-4 mb-4">
        <button type="button" onClick={onBack} className="text-sm text-[#7a6e64] hover:text-[#3a3028] flex items-center gap-1.5">
          ← 처음으로
        </button>
      </div>
      <h2 className="text-base font-bold mb-4 text-[#5b4e44]">노래를 선택하세요</h2>
      <div className="space-y-2">
        {songs.map((song) => {
          const vocab = song.videoId ? getAllVocab(song.videoId) : [];
          const count = vocab.filter((v) => v.word && (v.meaningKr ?? '').trim()).length;
          return (
            <button
              key={song.id}
              type="button"
              onClick={() => onSelect(song)}
              className="w-full bg-white rounded-xl py-4 px-5 flex items-center justify-between border-2 border-transparent transition-all hover:border-[#7a4f2d] hover:shadow-md text-left"
            >
              <span className="font-semibold text-[15px]">{song.nameKr}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    song.level === '中级' ? 'bg-[#fff3e0] text-[#d07a20]' : 'bg-[#e8f4e8] text-[#4a7a4e]'
                  }`}
                >
                  {getLevelLabelKo(song.level)}
                </span>
                <span className="text-[13px] text-[#9a8e84]">핵심 어휘 {count}개</span>
                <span>▶</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

type WordDetectiveOption = { role: string; meaning: string; isCorrect: boolean };

function WordDetectiveGameScreen({
  song,
  question,
  totalQuestions,
  currentProgress,
  correctCount,
  answered,
  selectedCorrect,
  selectedOptionIndex,
  onSelectOption,
  onNext,
  onBack,
}: {
  song: YoutubeSong;
  question: WordDetectiveQuestion;
  totalQuestions: number;
  currentProgress: number;
  correctCount: number;
  answered: boolean;
  selectedCorrect: boolean;
  selectedOptionIndex: number | null;
  onSelectOption: (isCorrect: boolean, optionIndex: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const { subtitle, word, lineText, koreanText } = question;
  const videoId = song.videoId!;
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const playTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const options: WordDetectiveOption[] = useMemo(() => {
    const vocab = getAllVocab(videoId).filter((v) => v.word && (v.meaningKr ?? '').trim());
    const correctMeaning = word.meaningKr ?? '';
    const others = vocab.filter((v) => v.word !== word.word).map((v) => v.meaningKr ?? '');
    const shuffledOthers = shuffle(others).slice(0, 3);
    const roles = [...WORD_DETECTIVE_ROLES];
    const correctRole = roles[0];
    const wrongRoles = shuffle(roles.slice(1));
    const opts: WordDetectiveOption[] = [
      { role: correctRole, meaning: correctMeaning, isCorrect: true },
      ...shuffledOthers.map((m, i) => ({ role: wrongRoles[i % wrongRoles.length], meaning: m, isCorrect: false })),
    ];
    return shuffle(opts);
  }, [videoId, word.word, word.meaningKr]);

  const lyricWithHighlight = useMemo(() => {
    const idx = lineText.indexOf(word.word);
    if (idx === -1) return lineText;
    const before = lineText.slice(0, idx);
    const after = lineText.slice(idx + word.word.length);
    return { before, highlight: word.word, after };
  }, [lineText, word.word]);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setPlayerReady(true);
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const first = document.getElementsByTagName('script')[0];
    first?.parentNode?.insertBefore(tag, first);
    window.onYouTubeIframeAPIReady = () => setPlayerReady(true);
  }, []);

  useEffect(() => {
    if (!playerReady || !window.YT?.Player || playerRef.current) return;
    playerRef.current = new window.YT.Player('yt-word-detective-player', {
      videoId,
      playerVars: { autoplay: 0, controls: 0, rel: 0 },
      events: {
        onReady: () => {},
        onStateChange: (e: any) => {
          if (e.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
          else if (e.data === window.YT.PlayerState.PAUSED || e.data === window.YT.PlayerState.ENDED) setIsPlaying(false);
        },
      },
    });
    return () => {
      if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
      if (playerRef.current) {
        try {
          playerRef.current.destroy?.();
        } catch (_) {}
        playerRef.current = null;
      }
    };
  }, [playerReady, videoId]);

  const playSegment = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }
      try {
        playerRef.current.pauseVideo();
      } catch (_) {}
      return;
    }
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
    }
    const start = subtitle.startTime;
    const end = subtitle.endTime + 1;
    playerRef.current.seekTo(start, true);
    playerRef.current.playVideo();
    playTimeoutRef.current = setTimeout(() => {
      try {
        playerRef.current?.pauseVideo?.();
      } catch (_) {}
      playTimeoutRef.current = null;
    }, (end - start) * 1000);
  };

  const speakTTS = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(word.word);
    utter.lang = 'zh-CN';
    utter.rate = 0.85;
    window.speechSynthesis.speak(utter);
  };

  const progressPercent = totalQuestions > 0 ? (currentProgress / totalQuestions) * 100 : 0;

  return (
    <div className="min-h-[60vh]" style={{ background: '#faf7f2', color: '#2c1810' }}>
      <div
        id="yt-word-detective-player"
        style={{ width: 0, height: 0, overflow: 'hidden', position: 'absolute', left: -9999 }}
      />

      <div className="max-w-[680px] mx-auto py-5 px-4">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#8a7060] tracking-widest uppercase">🎵 {song.nameKr}</span>
            <span className="text-sm font-semibold tracking-wide" style={{ color: '#8b5e3c' }}>{currentProgress} / {totalQuestions}</span>
          </div>
          <div className="h-[3px] rounded-full overflow-hidden bg-[#e0d4c0]">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progressPercent}%`,
                background: 'linear-gradient(90deg, #8b5e3c, #c9a87c)',
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-lg" style={{ boxShadow: '0 4px 32px rgba(92,61,46,0.08)' }}>
          <div className="mb-6">
            <div className="text-[0.72rem] text-[#8a7060] tracking-[0.12em] uppercase mb-3">가사</div>
            <div className="font-sans text-[1.25rem] md:text-[1.5rem] font-light leading-relaxed tracking-wide" style={{ letterSpacing: '0.08em' }}>
              {typeof lyricWithHighlight === 'string' ? (
                lyricWithHighlight
              ) : (
                <>
                  {lyricWithHighlight.before}
                  <span
                    className="inline-block bg-[#fff3cd] border-b-2 border-[#c9a87c] px-1.5 py-0.5 rounded font-medium"
                    style={{ color: '#5c3d2e' }}
                  >
                    <span className="block text-[0.62rem] text-[#c9a87c] -mt-4 mb-0.5 font-serif" style={{ letterSpacing: '0.05em' }}>
                      {word.pinyin}
                    </span>
                    {lyricWithHighlight.highlight}
                  </span>
                  {lyricWithHighlight.after}
                </>
              )}
            </div>
            <div className="text-sm text-[#8a7060] mt-2.5 pl-0.5 italic">{koreanText}</div>
          </div>

          <div className="h-px bg-[#e0d4c0] my-6" />

          <div className="flex gap-2.5 mb-6">
            <button
              type="button"
              onClick={playSegment}
              className={`flex-1 py-3 rounded-xl border-none font-serif text-sm tracking-wide cursor-pointer flex items-center justify-center gap-2 transition-all text-white disabled:opacity-60 ${isPlaying ? 'word-detective-playing' : ''}`}
              style={{ background: isPlaying ? '#8b5e3c' : '#5c3d2e' }}
            >
              <span>{isPlaying ? '■' : '▶'}</span> 노래 듣기
            </button>
            <button
              type="button"
              onClick={speakTTS}
              className="py-3 px-4 rounded-xl bg-transparent border border-[#e0d4c0] font-serif text-sm cursor-pointer transition-colors whitespace-nowrap"
              style={{ color: '#8b5e3c' }}
            >
              🔊 힌트
            </button>
          </div>

          <div className="text-[0.72rem] text-[#8a7060] tracking-[0.12em] uppercase mb-3">어떤 뜻과 역할인가요?</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {options.map((opt, idx) => {
              const isCorrectOption = opt.isCorrect;
              const showCorrect = answered && isCorrectOption;
              const showWrong = answered && selectedOptionIndex === idx && !isCorrectOption;
              const dimmed = answered && !isCorrectOption && selectedOptionIndex !== idx;
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={answered}
                  onClick={() => !answered && onSelectOption(opt.isCorrect, idx)}
                  className={`text-left p-4 rounded-xl border-2 transition-all disabled:cursor-not-allowed ${
                    showCorrect ? 'bg-[#eaf4ee] border-[#3d7a5a]' : ''
                  } ${showWrong ? 'bg-[#fdecea] border-[#c0392b]' : ''} ${
                    dimmed ? 'opacity-40' : 'bg-[#faf7f2] border-[#e0d4c0] hover:border-[#c9a87c]'
                  }`}
                >
                  <div className={`text-[0.72rem] font-semibold tracking-wide uppercase mb-1 ${
                    showCorrect ? 'text-[#3d7a5a]' : showWrong ? 'text-[#c0392b]' : 'text-[#c9a87c]'
                  }`}>
                    {opt.role}
                  </div>
                  <div className={`text-[0.95rem] leading-snug ${
                    showCorrect ? 'text-[#3d7a5a] font-medium' : showWrong ? 'text-[#c0392b]' : 'text-[#2c1810]'
                  }`}>
                    {opt.meaning}
                  </div>
                </button>
              );
            })}
          </div>

          {answered && (
            <div
              className={`mt-5 flex items-center gap-2.5 p-4 rounded-xl ${
                selectedCorrect ? 'bg-[#eaf4ee] text-[#3d7a5a] border border-[#b2dfcc]' : 'bg-[#fdecea] text-[#c0392b] border border-[#f5c6c2]'
              }`}
            >
              <span className="text-lg">{selectedCorrect ? '✨' : '❌'}</span>
              <span className="flex-1 text-sm leading-relaxed">
                {selectedCorrect
                  ? `정답이에요! "${word.word}"는 이 문장에서 ${options.find((o) => o.isCorrect)?.role ?? '词义'}입니다.`
                  : `아쉬워요! 정답은 ${options.find((o) => o.isCorrect)?.role ?? ''} · ${word.meaningKr ?? ''}이에요.`}
              </span>
              <button
                type="button"
                onClick={onNext}
                className="py-2 px-4 rounded-lg border-none font-serif text-[0.82rem] cursor-pointer whitespace-nowrap text-white"
                style={{ background: '#5c3d2e' }}
              >
                {currentProgress >= totalQuestions ? '결과 보기' : '다음 →'}
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-start">
          <button
            type="button"
            onClick={onBack}
            className="text-sm text-[#8a7060] hover:text-[#5c3d2e]"
          >
            ← 게임 종료
          </button>
        </div>
      </div>
    </div>
  );
}

function WordDetectiveResultScreen({
  song,
  totalQuestions,
  correctCount,
  onRandomAgain,
  onChooseSong,
  onHome,
  onBackToGameList,
}: {
  song: YoutubeSong;
  totalQuestions: number;
  correctCount: number;
  onRandomAgain: () => void;
  onChooseSong: () => void;
  onHome: () => void;
  onBackToGameList: () => void;
}) {
  const pct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  let emoji = '🎉';
  let title = '잘했어요!';
  if (pct >= 90) {
    emoji = '🕵️‍♀️';
    title = '탐정 완료!';
  } else if (pct < 50) {
    emoji = '💪';
    title = '조금만 더 연습해요!';
  }

  return (
    <div className="max-w-[420px] mx-auto py-12 px-6 text-center">
      <div className="text-6xl mb-4">{emoji}</div>
      <h2 className="text-2xl font-extrabold mb-2">{title}</h2>
      <div className="flex gap-5 justify-center mb-9">
        <div className="bg-white rounded-xl py-4 px-7 border-2 border-[#e0d4c0]">
          <div className="text-2xl font-extrabold" style={{ color: '#5c3d2e' }}>{correctCount} / {totalQuestions}</div>
          <div className="text-xs text-[#8a7060] mt-1">맞은 개수</div>
        </div>
        <div className="bg-white rounded-xl py-4 px-7 border-2 border-[#e0d4c0]">
          <div className="text-2xl font-extrabold" style={{ color: '#5c3d2e' }}>{pct}%</div>
          <div className="text-xs text-[#8a7060] mt-1">정확도</div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={onRandomAgain}
          className="py-4 rounded-xl text-[15px] font-bold border-none cursor-pointer text-white"
          style={{ background: '#7a4f2d' }}
        >
          🎲 랜덤 계속하기
        </button>
        <button
          type="button"
          onClick={onChooseSong}
          className="py-4 rounded-xl text-[15px] font-bold border-2 border-[#e0d4c0] bg-white text-[#3a3028] cursor-pointer"
        >
          🎵 노래 선택하기
        </button>
        <button
          type="button"
          onClick={onHome}
          className="py-4 rounded-xl text-[15px] font-bold border-2 border-[#e0d4c0] bg-white text-[#3a3028] cursor-pointer"
        >
          🏠 처음으로
        </button>
        <button
          type="button"
          onClick={onBackToGameList}
          className="py-4 rounded-xl text-[15px] font-bold border-2 border-[#e0d4c0] bg-white text-[#3a3028] cursor-pointer"
        >
          ← 게임 선택
        </button>
      </div>
    </div>
  );
}

// ——— 노래 받아쓰기 (听歌填词) ——— 완전 재설계: 선택 → 한 글자씩 받아쓰기 → 통과

const LYRICS_DICTATION_STYLE_OPTIONS: { key: string | null; label: string }[] = [
  { key: null, label: '전체' },
  { key: '欢快', label: '신나는' },
  { key: '抒情', label: '서정적' },
  { key: '悲伤', label: '애절한' },
];

const LYRICS_DICTATION_LEVEL_OPTIONS: { key: string | null; label: string }[] = [
  { key: null, label: '전체' },
  { key: '初级', label: '초급' },
  { key: '中级', label: '중급' },
  { key: '高级', label: '고급' },
];

type DictationRound = {
  song: YoutubeSong;
  subtitle: SubtitleItem;
  idx: number;
  pureText: string;
  koreanText: string;
};

function pickRandomDictationRound(
  filteredSongs: YoutubeSong[]
): DictationRound | null {
  if (filteredSongs.length === 0) return null;
  const shuffled = [...filteredSongs].sort(() => Math.random() - 0.5);
  for (const song of shuffled) {
    if (!song.videoId || !song.srtContent) continue;
    const subtitles = parseSRT(song.srtContent);
    if (subtitles.length === 0) continue;
    const indices = [...Array(subtitles.length).keys()].sort(() => Math.random() - 0.5);
    for (const idx of indices) {
      const koreanText = getKoreanTranslation(song.videoId, idx + 1);
      if (!koreanText || !koreanText.trim()) continue;
      const subtitle = subtitles[idx];
      const pureText = subtitle.text.replace(/^\d+\s*/, '').trim();
      if (!pureText) continue;
      return { song, subtitle, idx, pureText, koreanText };
    }
  }
  return null;
}

function LyricsDictationFlow({ onBackToGameList }: { onBackToGameList: () => void }) {
  const [screen, setScreen] = useState<'select' | 'playing' | 'clear'>('select');
  const [styleFilter, setStyleFilter] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0); // 已完成题数 (0~10)
  const [currentRound, setCurrentRound] = useState<DictationRound | null>(null);

  const filteredSongs = useMemo(() => {
    const all = getAllYoutubeSongs().filter((s) => s.videoId && s.srtContent);
    return all.filter((s) => {
      if (styleFilter != null && s.style !== styleFilter) return false;
      if (levelFilter != null && s.level !== levelFilter) return false;
      return true;
    });
  }, [styleFilter, levelFilter]);

  const handleStartGame = () => {
    const round = pickRandomDictationRound(filteredSongs);
    if (!round) return;
    setCurrentRound(round);
    setCorrectCount(0);
    setAnsweredCount(0);
    setScreen('playing');
  };

  // 答对时只增加正确数，不自动跳转；需点击「다음 문장」才进入下一题
  const handleSentenceComplete = useCallback(() => {
    setCorrectCount((c) => Math.min(c + 1, 10));
  }, []);

  // 点击「다음 문장」：已完成题数 +1，若满 10 题则进入结果页，否则加载下一题
  const handleNextSentence = useCallback(() => {
    setAnsweredCount((a) => {
      const next = a + 1;
      if (next >= 10) setScreen('clear');
      else setCurrentRound(pickRandomDictationRound(filteredSongs));
      return next;
    });
  }, [filteredSongs]);

  const handleBackToSelect = () => {
    setScreen('select');
    setCurrentRound(null);
  };

  if (screen === 'select') {
    return (
      <LyricsDictationSelectScreen
        styleFilter={styleFilter}
        setStyleFilter={setStyleFilter}
        levelFilter={levelFilter}
        setLevelFilter={setLevelFilter}
        filteredSongs={filteredSongs}
        onStart={handleStartGame}
        onBackToGameList={onBackToGameList}
      />
    );
  }

  if (screen === 'playing' && currentRound) {
    return (
      <LyricsDictationPlayingScreen
        round={currentRound}
        correctCount={correctCount}
        currentProgress={answeredCount + 1}
        onSentenceComplete={handleSentenceComplete}
        onNextSentence={handleNextSentence}
        onBackToSelect={handleBackToSelect}
      />
    );
  }

  if (screen === 'clear') {
    return (
      <LyricsDictationClearScreen
        correctCount={correctCount}
        onRetry={() => {
          setCorrectCount(0);
          setAnsweredCount(0);
          const round = pickRandomDictationRound(filteredSongs);
          setCurrentRound(round ?? null);
          setScreen(round ? 'playing' : 'select');
        }}
        onChangeLevel={handleBackToSelect}
        onBackToGameList={onBackToGameList}
      />
    );
  }

  return null;
}

// 첫 번째 화면: 난이도/스타일 선택
function LyricsDictationSelectScreen({
  styleFilter,
  setStyleFilter,
  levelFilter,
  setLevelFilter,
  filteredSongs,
  onStart,
  onBackToGameList,
}: {
  styleFilter: string | null;
  setStyleFilter: (v: string | null) => void;
  levelFilter: string | null;
  setLevelFilter: (v: string | null) => void;
  filteredSongs: YoutubeSong[];
  onStart: () => void;
  onBackToGameList: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4" style={{ background: '#ffffff' }}>
      <button
        onClick={onBackToGameList}
        className="absolute top-4 left-4 text-sm text-gray-500 hover:text-gray-800"
      >
        ← 게임 선택
      </button>
      <h1 className="text-2xl font-semibold mb-1" style={{ color: '#2c1a0e' }}>
        노래 받아쓰기
      </h1>
      <p className="text-gray-500 text-sm mb-10">노래를 듣고 가사를 입력한 뒤 제출하세요</p>

      <div className="flex flex-wrap justify-center gap-3 mb-2">
        {LYRICS_DICTATION_STYLE_OPTIONS.map(({ key, label }) => (
          <button
            key={key ?? 'all'}
            onClick={() => setStyleFilter(key)}
            className="rounded-full border-2 px-4 py-2 text-sm transition-all"
            style={{
              background: styleFilter === key ? '#7a4f2d' : 'transparent',
              color: styleFilter === key ? '#fff' : '#5c4a3a',
              borderColor: styleFilter === key ? '#7a4f2d' : '#e2cdb8',
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-400 mb-6">스타일</p>

      <div className="flex flex-wrap justify-center gap-3 mb-2">
        {LYRICS_DICTATION_LEVEL_OPTIONS.map(({ key, label }) => (
          <button
            key={key ?? 'all'}
            onClick={() => setLevelFilter(key)}
            className="rounded-full border-2 px-4 py-2 text-sm transition-all"
            style={{
              background: levelFilter === key ? '#7a4f2d' : 'transparent',
              color: levelFilter === key ? '#fff' : '#5c4a3a',
              borderColor: levelFilter === key ? '#7a4f2d' : '#e2cdb8',
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-400 mb-10">난이도</p>

      <button
        onClick={onStart}
        disabled={filteredSongs.length === 0}
        className="py-4 px-8 rounded-2xl font-medium text-white text-lg disabled:opacity-50 transition-opacity"
        style={{ background: '#7a4f2d' }}
      >
        🎵 게임 시작
      </button>
    </div>
  );
}

// 두 번째 화면: 받아쓰기 (전문 입력 후 제출 → 정답 표시)
function LyricsDictationPlayingScreen({
  round,
  correctCount,
  currentProgress,
  onSentenceComplete,
  onNextSentence,
  onBackToSelect,
}: {
  round: DictationRound;
  correctCount: number;
  currentProgress: number;
  onSentenceComplete: () => void;
  onNextSentence: () => void;
  onBackToSelect: () => void;
}) {
  const { song, subtitle, pureText, koreanText } = round;
  const videoId = song.videoId!;
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const playTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 새 문장으로 바뀌면 입력/피드백 초기화
  useEffect(() => {
    setUserInput('');
    setFeedback(null);
  }, [round.pureText]);

  // YT IFrame API (중복 로드 방지)
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setPlayerReady(true);
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const first = document.getElementsByTagName('script')[0];
    first?.parentNode?.insertBefore(tag, first);
    window.onYouTubeIframeAPIReady = () => setPlayerReady(true);
  }, []);

  useEffect(() => {
    if (!playerReady || !window.YT?.Player || playerRef.current) return;
    playerRef.current = new window.YT.Player('yt-dictation-player', {
      videoId,
      playerVars: { autoplay: 0, controls: 0, rel: 0 },
      events: {
        onReady: () => {},
        onStateChange: (e: any) => {
          if (e.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
          else if (e.data === window.YT.PlayerState.PAUSED || e.data === window.YT.PlayerState.ENDED) setIsPlaying(false);
        },
      },
    });
    return () => {
      if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
      if (playerRef.current) {
        try {
          playerRef.current.destroy?.();
        } catch (_) {}
        playerRef.current = null;
      }
    };
  }, [playerReady, videoId]);

  const playSegment = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }
      try {
        playerRef.current.pauseVideo();
      } catch (_) {}
      return;
    }
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
    }
    const start = subtitle.startTime;
    const end = subtitle.endTime + 0.8; // 结束时间戳延长 0.8 秒
    playerRef.current.seekTo(start, true);
    playerRef.current.playVideo();
    playTimeoutRef.current = setTimeout(() => {
      try {
        playerRef.current?.pauseVideo?.();
      } catch (_) {}
      playTimeoutRef.current = null;
    }, (end - start) * 1000);
  };

  const handleSubmit = () => {
    const a = userInput.trim();
    const b = pureText.trim();
    const isCorrect = a === b;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) onSentenceComplete();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col" style={{ background: '#fffef9' }}>
      <div
        id="yt-dictation-player"
        style={{ width: 0, height: 0, overflow: 'hidden', position: 'absolute', left: -9999 }}
      />

      {/* ① 상단 상태바: 현재 진행(2/10) 표시 */}
      <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-500 shrink-0">
        <span>{song.nameKr}</span>
        <span>{currentProgress} / 10</span>
      </div>
      <div className="w-full h-[3px] bg-gray-100 shrink-0">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${(currentProgress / 10) * 100}%`, background: '#7a4f2d' }}
        />
      </div>

      {/* ② 번역 + 입력: 스크롤 가능 영역 */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center px-4 py-6">
        <p className="text-sm text-gray-400 mb-2">{song.nameKr}</p>
        <p
          className="text-center leading-relaxed max-w-xl"
          style={{ fontSize: '2.2rem', fontWeight: 500, color: '#2c1a0e' }}
        >
          {koreanText || '(번역 없음)'}
        </p>

        {/* ③ 듣기 / 힌트 버튼 */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={playSegment}
            disabled={!playerRef.current}
            className={`py-2 px-4 rounded-lg text-sm font-medium text-white ${isPlaying ? 'animate-pulse' : ''}`}
            style={{ background: '#7a4f2d' }}
          >
            {isPlaying ? '⏸ 멈춤' : '▶ 듣기'}
          </button>
          <TTSButton
            text={pureText}
            lang="zh-CN"
            label="🔊 힌트"
            className="py-2 px-4 rounded-lg text-sm border"
            style={{ borderColor: '#e2cdb8', background: '#faf6f0' }}
          />
        </div>

        {/* ④ 입력창 + 제출 */}
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="중국어 가사를 입력하세요..."
          className="w-full min-h-[100px] max-w-xl mt-6 p-4 rounded-xl border-2 text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#7a4f2d]/30"
          style={{ borderColor: '#e2cdb8', background: '#fffef9' }}
          disabled={feedback != null}
        />
        <button
          onClick={handleSubmit}
          disabled={feedback != null}
          className="mt-4 py-3 px-6 rounded-xl font-medium text-white disabled:opacity-50"
          style={{ background: '#7a4f2d' }}
        >
          제출
        </button>
      </div>

      {/* ⑥ 피드백 + 정답 + 다음 문장: 하단 고정(스크롤 없이 보임) */}
      {feedback != null && (
        <div className="shrink-0 w-full max-w-xl mx-auto px-4 pt-4 pb-2 feedback-fade-in">
          <p className={feedback === 'correct' ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
            {feedback === 'correct' ? '✅ 정답이에요!' : '❌ 아쉬워요!'}
          </p>
          <p className="mt-2 text-gray-700 text-sm">정답:</p>
          <div className="mt-1 p-3 rounded-lg bg-white border border-[#e2cdb8]">
            <p style={{ color: '#2c1a0e' }}>{pureText}</p>
            {pureText && (
              <p className="mt-1.5 text-sm text-gray-500">
                {pinyin(pureText, { toneType: 'tone', separator: ' ' })}
              </p>
            )}
          </div>
          <button
            onClick={onNextSentence}
            className="mt-4 py-2 px-4 rounded-lg font-medium text-white w-full"
            style={{ background: '#7a4f2d' }}
          >
            다음 문장 →
          </button>
        </div>
      )}

      <div className="shrink-0 px-4 py-4">
        <button onClick={onBackToSelect} className="text-sm text-gray-500 hover:text-gray-800">
          ← 난이도 바꾸기
        </button>
      </div>
    </div>
  );
}

// 세 번째 화면: 결과 (10문장 완료 후 정확도 표시)
function LyricsDictationClearScreen({
  correctCount,
  onRetry,
  onChangeLevel,
  onBackToGameList,
}: {
  correctCount: number;
  onRetry: () => void;
  onChangeLevel: () => void;
  onBackToGameList: () => void;
}) {
  const rate = Math.round((correctCount / 10) * 100);
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4" style={{ background: '#ffffff' }}>
      <span className="text-6xl mb-4">🎉</span>
      <h2 className="text-2xl font-semibold mb-2" style={{ color: '#2c1a0e' }}>
        완료!
      </h2>
      <p className="text-gray-500 mb-1">맞춘 문장: {correctCount} / 10</p>
      <p className="text-gray-600 font-medium mb-8">정확도: {rate}%</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onRetry}
          className="py-3 px-6 rounded-xl font-medium text-white"
          style={{ background: '#7a4f2d' }}
        >
          다시 하기
        </button>
        <button
          onClick={onChangeLevel}
          className="py-3 px-6 rounded-xl font-medium border-2"
          style={{ borderColor: '#7a4f2d', color: '#7a4f2d' }}
        >
          난이도 바꾸기
        </button>
      </div>
      <button onClick={onBackToGameList} className="mt-6 text-sm text-gray-500 hover:text-gray-800">
        ← 게임 선택
      </button>
    </div>
  );
}

// 单词卡片组件
function WordCard({ word, isStarred, toggleStar }: { word: Word; isStarred: boolean; toggleStar: () => void }) {
  const exampleText = word.examples[0];
  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-xl font-bold text-gray-900">{word.word}</h3>
            <TTSButton text={word.word} rate={0.6} className="shrink-0" />
            <span className="text-sm text-gray-500">{word.pinyin}</span>
            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">{word.hskLevel}</span>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            <div>🇰🇷 {word.korean}</div>
          </div>
          {exampleText && (
            <div className="text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-1 flex-wrap mb-1">
                <span className="font-medium text-gray-600">예문:</span>
                <span className="italic">{exampleText}</span>
                <TTSButton text={exampleText} rate={0.6} className="shrink-0" />
              </div>
              {(word.examplePinyin || word.exampleKr) && (
                <div className="text-gray-500 pl-0">
                  {word.examplePinyin && <div>{word.examplePinyin}</div>}
                  {word.exampleKr && <div>🇰🇷 {word.exampleKr}</div>}
                </div>
              )}
            </div>
          )}
        </div>
        <button
          onClick={toggleStar}
          className={`text-2xl transition-transform hover:scale-110 shrink-0 ${
            isStarred ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </button>
      </div>
    </div>
  );
}

