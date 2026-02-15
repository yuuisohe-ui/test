import { useState } from "react";
import YoutubeVideoDetail from "../components/YoutubeVideoDetail";
import { tianmimiSRT } from "../data/tianmimiSRT";

// 歌曲数据类型
interface Song {
  id: string;
  name: string;
  nameKr: string;
  videoId?: string; // 可选，没有链接的歌曲没有 videoId
  level: string;
  style: string;
  age: string;
  difficulty: number; // 1-5星
  tags: string[];
  srtContent?: string;
}

// 获取歌曲封面图片 URL
const getSongImageUrl = (song: { id: string; videoId?: string }): string => {
  // 如果有 YouTube videoId，使用 YouTube 封面
  if (song.videoId) {
    return `https://img.youtube.com/vi/${song.videoId}/maxresdefault.jpg`;
  }
  // 否则使用基于 ID 的随机图片（确保同一首歌总是显示同一张图）
  return `https://picsum.photos/seed/${song.id}/400/300`;
};

export default function YoutubePage() {
  // 筛选状态（只保存在本地状态）
  const [level, setLevel] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [studyTime, setStudyTime] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  
  // 每个等级的展开状态
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({
    beginner: false,
    intermediate: false,
    advanced: false,
    expert: false,
  });

  // 检查是否所有筛选都已选择
  const isAllFiltersSelected = level && style && age && studyTime;

  // 切换等级展开状态
  const toggleLevel = (level: string) => {
    setExpandedLevels(prev => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  // 如果选择了歌曲，显示详情页
  if (selectedSong) {
    return (
      <YoutubeVideoDetail
        videoId={selectedSong.videoId}
        title={selectedSong.name}
        titleKr={selectedSong.nameKr}
        srtContent={selectedSong.srtContent || ""}
        onBack={() => setSelectedSong(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 顶部区域（Hero 区） */}
        <div className="text-center mb-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            听见中文，说出自然
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            从一首歌开始
          </p>

          {/* 筛选区域 */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 等级筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  等级
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">请选择等级</option>
                  <option value="初级">初级</option>
                  <option value="中级">中级</option>
                  <option value="高级">高级</option>
                  <option value="进阶">进阶</option>
                </select>
              </div>

              {/* 风格筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  风格
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">请选择风格</option>
                  <option value="欢快">欢快</option>
                  <option value="悲伤">悲伤</option>
                  <option value="抒情">抒情</option>
                </select>
              </div>

              {/* 年龄筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  年龄
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">请选择年龄</option>
                  <option value="7-12">7-12</option>
                  <option value="13-18">13-18</option>
                  <option value="19-30">19-30</option>
                  <option value="31-50">31-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>

              {/* 今日学习时长 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  今日学习时长
                </label>
                <select
                  value={studyTime}
                  onChange={(e) => setStudyTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">请选择时长</option>
                  <option value="10分钟">10分钟</option>
                  <option value="20分钟">20分钟</option>
                  <option value="30分钟">30分钟</option>
                  <option value="45分钟">45分钟</option>
                </select>
              </div>
            </div>
          </div>

          {/* 立即开始按钮 */}
          <button 
            disabled={!isAllFiltersSelected}
            className={`px-8 py-4 text-lg font-semibold rounded-lg transition-all ${
              isAllFiltersSelected
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            立即开始
          </button>
          {!isAllFiltersSelected && (
            <p className="mt-2 text-sm text-gray-500">
              请完成所有筛选选项
            </p>
          )}
        </div>

        {/* 模块一：🎵 今日推荐 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎵 今日推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 推荐卡片 1 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={getSongImageUrl({ id: "recommend-1" })}
                  alt="示例歌曲 A"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // 如果图片加载失败，使用占位图
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/recommend-1-fallback/400/300`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">示例歌曲 A</h3>
                <p className="text-sm text-gray-600 mb-2">推荐理由：节奏清晰，适合跟读</p>
                <p className="text-sm text-gray-600 mb-4">本曲重点：口语表达 × 3</p>
                <p className="text-xs text-gray-400 mb-3">YouTube 链接：待添加</p>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  开始学习
                </button>
              </div>
            </div>

            {/* 推荐卡片 2 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={getSongImageUrl({ id: "recommend-2" })}
                  alt="示例歌曲 B"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/recommend-2-fallback/400/300`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">示例歌曲 B</h3>
                <p className="text-sm text-gray-600 mb-2">推荐理由：词汇简单，易于理解</p>
                <p className="text-sm text-gray-600 mb-4">本曲重点：基础词汇 × 5</p>
                <p className="text-xs text-gray-400 mb-3">YouTube 链接：待添加</p>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  开始学习
                </button>
              </div>
            </div>

            {/* 推荐卡片 3 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={getSongImageUrl({ id: "recommend-3" })}
                  alt="示例歌曲 C"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/recommend-3-fallback/400/300`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">示例歌曲 C</h3>
                <p className="text-sm text-gray-600 mb-2">推荐理由：旋律优美，适合练习</p>
                <p className="text-sm text-gray-600 mb-4">本曲重点：声调练习 × 4</p>
                <p className="text-xs text-gray-400 mb-3">YouTube 链接：待添加</p>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  开始学习
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 模块二：🔥 歌曲库 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔥 歌曲库</h2>

          {/* 初级 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">初级</h3>
              <button
                onClick={() => toggleLevel('beginner')}
                className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
              >
                {expandedLevels.beginner ? '收起' : '展开更多'}
                <svg
                  className={`w-4 h-4 transition-transform ${expandedLevels.beginner ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 8 })
                .filter((_, idx) => idx < 4 || expandedLevels.beginner)
                .map((_, idx) => {
                  const songId = `beginner-${idx + 1}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <img
                          src={getSongImageUrl({ id: songId })}
                          alt={`歌曲 ${idx + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${songId}-fallback/400/300`;
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 1}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Rap</span>
                        </div>
                        <p className="text-xs text-gray-500">YouTube 链接：待添加</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 中级 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">中级</h3>
              <button
                onClick={() => toggleLevel('intermediate')}
                className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
              >
                {expandedLevels.intermediate ? '收起' : '展开更多'}
                <svg
                  className={`w-4 h-4 transition-transform ${expandedLevels.intermediate ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 8 })
                .filter((_, idx) => idx < 4 || expandedLevels.intermediate)
                .map((_, idx) => {
                  // 歌曲9是"甜蜜蜜"
                  if (idx === 0) {
                    const tianmimi: Song = {
                      id: "9",
                      name: "甜蜜蜜",
                      nameKr: "천밀밀",
                      videoId: "OMVlGjmppeY",
                      level: "中级",
                      style: "抒情",
                      age: "19-30",
                      difficulty: 3,
                      tags: ["抒情"],
                      srtContent: tianmimiSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(tianmimi)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(tianmimi)}
                            alt="甜蜜蜜"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // 如果 YouTube 封面加载失败，尝试使用 hqdefault
                              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${tianmimi.videoId}/hqdefault.jpg`;
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">甜蜜蜜</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  const songId = `intermediate-${idx + 9}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <img
                          src={getSongImageUrl({ id: songId })}
                          alt={`歌曲 ${idx + 9}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${songId}-fallback/400/300`;
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 9}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★★☆☆</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">古诗</span>
                        </div>
                        <p className="text-xs text-gray-500">YouTube 链接：待添加</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 高级 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">高级</h3>
              <button
                onClick={() => toggleLevel('advanced')}
                className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
              >
                {expandedLevels.advanced ? '收起' : '展开更多'}
                <svg
                  className={`w-4 h-4 transition-transform ${expandedLevels.advanced ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 8 })
                .filter((_, idx) => idx < 4 || expandedLevels.advanced)
                .map((_, idx) => {
                  const songId = `advanced-${idx + 17}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <img
                          src={getSongImageUrl({ id: songId })}
                          alt={`歌曲 ${idx + 17}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${songId}-fallback/400/300`;
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 17}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">口语</span>
                        </div>
                        <p className="text-xs text-gray-500">YouTube 链接：待添加</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 进阶 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">进阶</h3>
              <button
                onClick={() => toggleLevel('expert')}
                className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
              >
                {expandedLevels.expert ? '收起' : '展开更多'}
                <svg
                  className={`w-4 h-4 transition-transform ${expandedLevels.expert ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 8 })
                .filter((_, idx) => idx < 4 || expandedLevels.expert)
                .map((_, idx) => {
                  const songId = `expert-${idx + 25}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <img
                          src={getSongImageUrl({ id: songId })}
                          alt={`歌曲 ${idx + 25}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${songId}-fallback/400/300`;
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 25}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★★★★</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Rap</span>
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">口语</span>
                        </div>
                        <p className="text-xs text-gray-500">YouTube 链接：待添加</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* 模块三：📈 我的训练统计 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 我的训练统计</h2>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                <div className="text-gray-600">本周学习时长（分钟）</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                <div className="text-gray-600">已完成歌曲（首）</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-gray-600">连续学习天数（天）</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

