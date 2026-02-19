import { useState } from "react";
import YoutubeVideoDetail from "../components/YoutubeVideoDetail";
import { tianmimiSRT } from "../data/tianmimiSRT";
import { pingfanSRT } from "../data/pingfanSRT";
import { waipoSRT } from "../data/waipoSRT";
import { liangzhilaohuSRT } from "../data/liangzhilaohuSRT";
import { yishanyishanSRT } from "../data/yishanyishanSRT";
import { paomoSRT } from "../data/paomoSRT";
import { haizailiulangSRT } from "../data/haizailiulangSRT";
import { yuaiSRT } from "../data/yuaiSRT";
import { yueliangSRT } from "../data/yueliangSRT";
import { yequSRT } from "../data/yequSRT";
import { zhivenSRT } from "../data/zhivenSRT";
import { xiaoxingyunSRT } from "../data/xiaoxingyunSRT";
import { pengyouSRT } from "../data/pengyouSRT";
import { houlaiSRT } from "../data/houlaiSRT";
import { ningxiaSRT } from "../data/ningxiaSRT";
import { xinbuliaoSRT } from "../data/xinbuliaoSRT";
import { qiasiniSRT } from "../data/qiasiniSRT";
import { wohuainianSRT } from "../data/wohuainianSRT";
import { guangnianSRT } from "../data/guangnianSRT";

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

// 处理 YouTube 缩略图加载错误，回退到 hqdefault.jpg
const handleYouTubeThumbnailError = (e: React.SyntheticEvent<HTMLImageElement, Event>, videoId?: string) => {
  const img = e.target as HTMLImageElement;
  // maxresdefault.jpg 加载失败时，回退到 hqdefault.jpg
  if (img.src.includes('maxresdefault.jpg') && videoId) {
    img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } else {
    // 如果 hqdefault.jpg 也失败或没有 videoId，使用占位符
    img.src = `https://picsum.photos/seed/${videoId || 'fallback'}/400/300`;
  }
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
                  // 歌曲1是"两只老虎"（idx === 0）
                  if (idx === 0) {
                    const liangzhilaohu: Song = {
                      id: "1",
                      name: "两只老虎",
                      nameKr: "두 마리 호랑이-两只老虎",
                      videoId: "0P0aApWogd0",
                      level: "初级",
                      style: "童谣",
                      age: "六岁以上",
                      difficulty: 1,
                      tags: ["童谣"],
                      srtContent: liangzhilaohuSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(liangzhilaohu)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(liangzhilaohu)}
                            alt="两只老虎"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, liangzhilaohu.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">두 마리 호랑이-两只老虎</h4>
                          <div className="text-xs text-yellow-500 mb-2">★☆☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">童谣</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲2是"月亮代表我的心"（idx === 1）
                  if (idx === 1) {
                    const yueliang: Song = {
                      id: "2",
                      name: "月亮代表我的心",
                      nameKr: "달은 내 마음을 대신해-月亮代表我的心",
                      videoId: "FhIXtvJbr3o",
                      level: "初级",
                      style: "抒情",
                      age: "13岁以上",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: yueliangSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yueliang)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(yueliang)}
                            alt="月亮代表我的心"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, yueliang.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">달은 내 마음을 대신해-月亮代表我的心</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲3是"朋友"（idx === 2）
                  if (idx === 2) {
                    const pengyou: Song = {
                      id: "3",
                      name: "朋友",
                      nameKr: "친구-朋友",
                      videoId: "6lbPgfKK7m4",
                      level: "初级",
                      style: "抒情",
                      age: "13岁以上",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: pengyouSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(pengyou)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(pengyou)}
                            alt="朋友"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, pengyou.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">친구-朋友</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲4是"一闪一闪亮晶晶"（idx === 3）
                  if (idx === 3) {
                    const yishanyishan: Song = {
                      id: "4",
                      name: "一闪一闪亮晶晶",
                      nameKr: "반짝반짝 작은 별-一闪一闪亮晶晶",
                      videoId: "_WTao2TJ2C8",
                      level: "初级",
                      style: "童谣",
                      age: "六岁以上",
                      difficulty: 1,
                      tags: ["童谣"],
                      srtContent: yishanyishanSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yishanyishan)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(yishanyishan)}
                            alt="一闪一闪亮晶晶"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, yishanyishan.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">반짝반짝 작은 별-一闪一闪亮晶晶</h4>
                          <div className="text-xs text-yellow-500 mb-2">★☆☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">童谣</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲5是"后来"（idx === 4）
                  if (idx === 4) {
                    const houlai: Song = {
                      id: "5",
                      name: "后来",
                      nameKr: "그 후에-后来",
                      videoId: "t0igPuDjYUE",
                      level: "初级",
                      style: "抒情",
                      age: "15岁以上",
                      difficulty: 3,
                      tags: ["抒情"],
                      srtContent: houlaiSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(houlai)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(houlai)}
                            alt="后来"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, houlai.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">그 후에-后来</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲6是"宁夏"（idx === 5）
                  if (idx === 5) {
                    const ningxia: Song = {
                      id: "6",
                      name: "宁夏",
                      nameKr: "닝샤-宁夏",
                      videoId: "MmtVl9CssYE",
                      level: "初级",
                      style: "抒情",
                      age: "12岁以上",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: ningxiaSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(ningxia)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(ningxia)}
                            alt="宁夏"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, ningxia.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">닝샤-宁夏</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲9是"新不了情"（idx === 6）
                  if (idx === 6) {
                    const xinbuliao: Song = {
                      id: "9",
                      name: "新不了情",
                      nameKr: "새로운 못 다한 사랑-新不了情",
                      videoId: "3QfpuxVpTFo",
                      level: "初级",
                      style: "抒情",
                      age: "13岁以上",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: xinbuliaoSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(xinbuliao)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(xinbuliao)}
                            alt="新不了情"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, xinbuliao.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">새로운 못 다한 사랑-新不了情</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲10是"恰似你的温柔"（idx === 7）
                  if (idx === 7) {
                    const qiasini: Song = {
                      id: "10",
                      name: "恰似你的温柔",
                      nameKr: "너의 부드러움처럼-恰似你的温柔",
                      videoId: "w2_FycTdzVI",
                      level: "初级",
                      style: "抒情",
                      age: "13岁以上",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: qiasiniSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(qiasini)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(qiasini)}
                            alt="恰似你的温柔"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, qiasini.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">너의 부드러움처럼-恰似你的温柔</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
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
                      nameKr: "첨밀밀-甜蜜蜜",
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
                            onError={(e) => handleYouTubeThumbnailError(e, tianmimi.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">첨밀밀-甜蜜蜜</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲10是"外婆的澎湖湾"（idx === 1）
                  if (idx === 1) {
                    const waipo: Song = {
                      id: "10",
                      name: "外婆的澎湖湾",
                      nameKr: "할머니의 펑후만-外婆的澎湖湾",
                      videoId: "PjrsETvz7QQ",
                      level: "中级",
                      style: "抒情",
                      age: "6岁以上",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: waipoSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(waipo)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(waipo)}
                            alt="外婆的澎湖湾"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, waipo.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">할머니의 펑후만-外婆的澎湖湾</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲11是"泡沫"（idx === 2）
                  if (idx === 2) {
                    const paomo: Song = {
                      id: "11",
                      name: "泡沫",
                      nameKr: "거품-泡沫",
                      videoId: "mGeiABBB5f8",
                      level: "中级",
                      style: "悲伤",
                      age: "13岁以上",
                      difficulty: 4,
                      tags: ["悲伤"],
                      srtContent: paomoSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(paomo)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(paomo)}
                            alt="泡沫"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, paomo.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">거품-泡沫</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">悲伤</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲12是"雨爱"（idx === 3）
                  if (idx === 3) {
                    const yuai: Song = {
                      id: "12",
                      name: "雨爱",
                      nameKr: "우애-雨爱",
                      videoId: "fa0naBdR_q0",
                      level: "中级",
                      style: "悲伤",
                      age: "13岁以上",
                      difficulty: 4,
                      tags: ["悲伤"],
                      srtContent: yuaiSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yuai)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(yuai)}
                            alt="雨爱"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, yuai.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">우애-雨爱</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">悲伤</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲13是"指纹"（idx === 4）
                  if (idx === 4) {
                    const zhiven: Song = {
                      id: "13",
                      name: "指纹",
                      nameKr: "지문-指纹",
                      videoId: "KSSWVSpuf4E",
                      level: "中级",
                      style: "R&B",
                      age: "15岁以上",
                      difficulty: 4,
                      tags: ["R&B"],
                      srtContent: zhivenSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(zhiven)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(zhiven)}
                            alt="指纹"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, zhiven.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">지문-指纹</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">R&B</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲16是"小幸运"（idx === 5）
                  if (idx === 5) {
                    const xiaoxingyun: Song = {
                      id: "16",
                      name: "小幸运",
                      nameKr: "작은 행운-小幸运",
                      videoId: "4DNi2UTOAdw",
                      level: "中级",
                      style: "抒情",
                      age: "10岁以上",
                      difficulty: 3,
                      tags: ["抒情"],
                      srtContent: xiaoxingyunSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(xiaoxingyun)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(xiaoxingyun)}
                            alt="小幸运"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, xiaoxingyun.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">작은 행운-小幸运</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲19是"我怀念的"（idx === 6）
                  if (idx === 6) {
                    const wohuainian: Song = {
                      id: "19",
                      name: "我怀念的",
                      nameKr: "내가 그리워하는 것-我怀念的",
                      videoId: "1hVkS2ldRhw",
                      level: "中级",
                      style: "抒情",
                      age: "15岁以上",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: wohuainianSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(wohuainian)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(wohuainian)}
                            alt="我怀念的"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, wohuainian.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">내가 그리워하는 것-我怀念的</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲10是"光年之外"（idx === 7）
                  if (idx === 7) {
                    const guangnian: Song = {
                      id: "20",
                      name: "光年之外",
                      nameKr: "광년 밖에서-光年之外",
                      videoId: "HjPGELNH-00",
                      level: "中级",
                      style: "R&B",
                      age: "15岁以上",
                      difficulty: 4,
                      tags: ["R&B"],
                      srtContent: guangnianSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(guangnian)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(guangnian)}
                            alt="光年之外"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, guangnian.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">광년 밖에서-光年之外</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">R&B</span>
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
                  // 歌曲13是"还在流浪"
                  if (idx === 0) {
                    const haizailiulang: Song = {
                      id: "13",
                      name: "还在流浪",
                      nameKr: "여전히 방황 중이야-还在流浪",
                      videoId: "G_uWYkLtiwI",
                      level: "高级",
                      style: "R&B",
                      age: "15岁以上",
                      difficulty: 4,
                      tags: ["R&B"],
                      srtContent: haizailiulangSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(haizailiulang)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(haizailiulang)}
                            alt="还在流浪"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, haizailiulang.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">여전히 방황 중이야-还在流浪</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">R&B</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲17是"平凡之路"
                  if (idx === 1) {
                    const pingfan: Song = {
                      id: "17",
                      name: "平凡之路",
                      nameKr: "평범한 길-平凡之路",
                      videoId: "wk9R0ugm5AE",
                      level: "高级",
                      style: "抒情",
                      age: "19-30",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: pingfanSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(pingfan)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(pingfan)}
                            alt="平凡之路"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, pingfan.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">평범한 길-平凡之路</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">抒情</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲19是"夜曲"
                  if (idx === 2) {
                    const yequ: Song = {
                      id: "19",
                      name: "夜曲",
                      nameKr: "야상곡-夜曲",
                      videoId: "OyDYW8mZXXg",
                      level: "高级",
                      style: "R&B",
                      age: "15岁以上",
                      difficulty: 5,
                      tags: ["R&B"],
                      srtContent: yequSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yequ)}
                        className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(yequ)}
                            alt="夜曲"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, yequ.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">야상곡-夜曲</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★★</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">R&B</span>
                          </div>
                          <p className="text-xs text-gray-500">点击开始学习</p>
                        </div>
                      </div>
                    );
                  }
                  const songId = `advanced-${idx + 13}`;
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

