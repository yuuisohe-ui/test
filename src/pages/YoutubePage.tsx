import { useState, useMemo, useRef, useEffect } from "react";
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
import { yanhuayilengSRT } from "../data/yanhuayilengSRT";
import { xiaochouSRT } from "../data/xiaochouSRT";
import { xiangwozheyangderenSRT } from "../data/xiangwozheyangderenSRT";
import { huidaoguoquSRT } from "../data/huidaoguoquSRT";
import { haishanghuaSRT } from "../data/haishanghuaSRT";
import { tongzhuodeniSRT } from "../data/tongzhuodeniSRT";
import { yongqiSRT } from "../data/yongqiSRT";
import { buweishuierzuodegeSRT } from "../data/buweishuierzuodegeSRT";
import { geiwoyishougedeshijianSRT } from "../data/geiwoyishougedeshijianSRT";
import { qimiaonengligesRT } from "../data/qimiaonengligesRT";
import { niyaodequannazousRT } from "../data/niyaodequannazousRT";
import { youtubePageTranslations, getLevelLabelKo, getStyleLabelKo } from "../i18n/youtubePageTranslations";

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
  // 优先使用 hqdefault.jpg，因为它更可靠（几乎所有视频都有）
  if (song.videoId) {
    return `https://img.youtube.com/vi/${song.videoId}/hqdefault.jpg`;
  }
  // 否则使用灰色背景（不使用外部占位符服务，避免网络问题）
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBWaWRlbzwvdGV4dD48L3N2Zz4=';
};

// 处理 YouTube 缩略图加载错误
const handleYouTubeThumbnailError = (e: React.SyntheticEvent<HTMLImageElement, Event>, videoId?: string) => {
  const img = e.target as HTMLImageElement;
  // 防止无限循环
  if (img.dataset.retryCount === '1') {
    // 已经尝试过一次，使用灰色背景
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
    return;
  }
  // hqdefault.jpg 加载失败时，尝试 mqdefault.jpg
  if (img.src.includes('hqdefault.jpg') && videoId) {
    img.dataset.retryCount = '1';
    img.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  } else if (img.src.includes('mqdefault.jpg') && videoId) {
    // mqdefault.jpg 也失败，尝试 sddefault.jpg
    img.dataset.retryCount = '1';
    img.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
  } else {
    // 如果所有 YouTube 缩略图都失败或没有 videoId，使用灰色背景
    img.dataset.retryCount = '1';
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
  }
};

export default function YoutubePage() {
  // 筛选状态（只保存在本地状态）；等级以首页「나의 수준」为准（localStorage nz_level）
  const [style, setStyle] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [showRecommendationSection, setShowRecommendationSection] = useState(false);
  const [recommendationRefreshKey, setRecommendationRefreshKey] = useState(0);
  
  // 每个等级的展开状态
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({
    beginner: false,
    intermediate: false,
    advanced: false,
    expert: false,
  });

  // 「바로 시작」点击后显示「나에게 맞는 노래 추천」，无需先选筛选

  // 切换等级展开状态
  const toggleLevel = (level: string) => {
    setExpandedLevels(prev => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  // 每个等级已配置的歌曲索引
  const configuredSongs: Record<string, number[]> = {
    beginner: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 初级：10首
    intermediate: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 中级：10首（第9首是勇气，第10首是不为谁而作的歌）
    advanced: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 高级：10首（第8首是给我一首歌的时间，第9首是奇妙能力歌，第10首是你要的全拿走）
    expert: [0, 1, 2, 3], // 专家：4首（默认显示）
  };

  // 获取所有已配置的歌曲列表
  const getAllSongs = (): Song[] => {
    const songs: Song[] = [];
    
    // 初级歌曲
    songs.push({
      id: "1",
      name: "两只老虎",
      nameKr: "두 마리 호랑이",
      videoId: "0P0aApWogd0",
      level: "初级",
      style: "欢快",
      age: "6세 이상",
      difficulty: 1,
      tags: ["欢快"],
      srtContent: liangzhilaohuSRT,
    });
    songs.push({
      id: "2",
      name: "月亮代表我的心",
      nameKr: "달은 내 마음을 대신해",
      videoId: "FhIXtvJbr3o",
      level: "初级",
      style: "抒情",
      age: "13세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: yueliangSRT,
    });
    songs.push({
      id: "3",
      name: "朋友",
      nameKr: "친구",
      videoId: "6lbPgfKK7m4",
      level: "初级",
      style: "欢快",
      age: "13세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: pengyouSRT,
    });
    songs.push({
      id: "4",
      name: "一闪一闪亮晶晶",
      nameKr: "반짝반짝 작은 별",
      videoId: "_WTao2TJ2C8",
      level: "初级",
      style: "欢快",
      age: "6세 이상",
      difficulty: 1,
      tags: ["童谣"],
      srtContent: yishanyishanSRT,
    });
    songs.push({
      id: "5",
      name: "后来",
      nameKr: "나중에",
      videoId: "t0igPuDjYUE",
      level: "初级",
      style: "悲伤",
      age: "15세 이상",
      difficulty: 3,
      tags: ["抒情"],
      srtContent: houlaiSRT,
    });
    songs.push({
      id: "6",
      name: "宁夏",
      nameKr: "닝샤",
      videoId: "MmtVl9CssYE",
      level: "初级",
      style: "抒情",
      age: "12세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: ningxiaSRT,
    });
    songs.push({
      id: "7",
      name: "新不了情",
      nameKr: "새로운 못 다한 사랑-新不了情",
      videoId: "3QfpuxVpTFo",
      level: "初级",
      style: "悲伤",
      age: "13세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: xinbuliaoSRT,
    });
    songs.push({
      id: "8",
      name: "恰似你的温柔",
      nameKr: "마치 당신의 부드러움처럼-恰似你的温柔",
      videoId: "w2_FycTdzVI",
      level: "初级",
      style: "抒情",
      age: "13세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: qiasiniSRT,
    });
    songs.push({
      id: "9",
      name: "海上花",
      nameKr: "해상의 꽃-海上花",
      videoId: "dkak-3Ej6iE",
      level: "初级",
      style: "悲伤",
      age: "13세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: haishanghuaSRT,
    });
    songs.push({
      id: "10",
      name: "同桌的你",
      nameKr: "옆자리의 너-同桌的你",
      videoId: "xqYMWyOpSFI",
      level: "初级",
      style: "欢快",
      age: "13세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: tongzhuodeniSRT,
    });

    // 中级歌曲
    songs.push({
      id: "11",
      name: "甜蜜蜜",
      nameKr: "첨밀밀-甜蜜蜜",
      videoId: "OMVlGjmppeY",
      level: "中级",
      style: "悲伤",
      age: "19-30",
      difficulty: 3,
      tags: ["抒情"],
      srtContent: tianmimiSRT,
    });
    songs.push({
      id: "12",
      name: "外婆的澎湖湾",
      nameKr: "할머니의 펑후만-外婆的澎湖湾",
      videoId: "PjrsETvz7QQ",
      level: "中级",
      style: "欢快",
      age: "6세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: waipoSRT,
    });
    songs.push({
      id: "13",
      name: "泡沫",
      nameKr: "거품-泡沫",
      videoId: "mGeiABBB5f8",
      level: "中级",
      style: "悲伤",
      age: "13세 이상",
      difficulty: 3,
      tags: ["悲伤"],
      srtContent: paomoSRT,
    });
    songs.push({
      id: "14",
      name: "雨爱",
      nameKr: "우애-雨爱",
      videoId: "fa0naBdR_q0",
      level: "中级",
      style: "悲伤",
      age: "13세 이상",
      difficulty: 4,
      tags: ["悲伤"],
      srtContent: yuaiSRT,
    });
    songs.push({
      id: "15",
      name: "指纹",
      nameKr: "지문-指纹",
      videoId: "KSSWVSpuf4E",
      level: "中级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["R&B"],
      srtContent: zhivenSRT,
    });
    songs.push({
      id: "16",
      name: "小幸运",
      nameKr: "작은 행운-小幸运",
      videoId: "4DNi2UTOAdw",
      level: "中级",
      style: "欢快",
      age: "10세 이상",
      difficulty: 3,
      tags: ["抒情"],
      srtContent: xiaoxingyunSRT,
    });
    songs.push({
      id: "17",
      name: "我怀念的",
      nameKr: "내가 그리워하는-我怀念的",
      videoId: "1hVkS2ldRhw",
      level: "中级",
      style: "悲伤",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: wohuainianSRT,
    });
    songs.push({
      id: "18",
      name: "光年之外",
      nameKr: "광년지외-光年之外",
      videoId: "HjPGELNH-00",
      level: "中级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["流行"],
      srtContent: guangnianSRT,
    });
    songs.push({
      id: "19",
      name: "勇气",
      nameKr: "용기-勇气",
      videoId: "EaJM58fOsSQ",
      level: "中级",
      style: "欢快",
      age: "13세 이상",
      difficulty: 2,
      tags: ["抒情"],
      srtContent: yongqiSRT,
    });
    songs.push({
      id: "20",
      name: "不为谁而作的歌",
      nameKr: "누구를 위해 만든 노래도 아니야-不为谁做的歌",
      videoId: "5V_aWacv6-Q",
      level: "中级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 3,
      tags: ["抒情"],
      srtContent: buweishuierzuodegeSRT,
    });

    // 高级歌曲
    songs.push({
      id: "21",
      name: "还在流浪",
      nameKr: "아직 방랑 중-还在流浪",
      videoId: "G_uWYkLtiwI",
      level: "高级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: haizailiulangSRT,
    });
    songs.push({
      id: "22",
      name: "平凡之路",
      nameKr: "평범한 길-平凡之路",
      videoId: "wk9R0ugm5AE",
      level: "高级",
      style: "欢快",
      age: "15세 이상",
      difficulty: 4,
      tags: ["励志"],
      srtContent: pingfanSRT,
    });
    songs.push({
      id: "23",
      name: "夜曲",
      nameKr: "야곡-夜曲",
      videoId: "OyDYW8mZXXg",
      level: "高级",
      style: "悲伤",
      age: "15세 이상",
      difficulty: 4,
      tags: ["流行"],
      srtContent: yequSRT,
    });
    songs.push({
      id: "24",
      name: "烟花易冷",
      nameKr: "불꽃은 쉽게 식는다-烟花易冷",
      videoId: "WqN-zGDV2uw",
      level: "高级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: yanhuayilengSRT,
    });
    songs.push({
      id: "25",
      name: "像我这样的人",
      nameKr: "나 같은 사람-像我这样的人",
      videoId: "dim33vVuBQ0",
      level: "高级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: xiangwozheyangderenSRT,
    });
    songs.push({
      id: "26",
      name: "消愁",
      nameKr: "근심을 없애다-消愁",
      videoId: "ZHGN3ViWrns",
      level: "高级",
      style: "悲伤",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: xiaochouSRT,
    });
    songs.push({
      id: "27",
      name: "回到过去",
      nameKr: "과거로 돌아가-回到过去",
      videoId: "lt7BhxrUGfY",
      level: "高级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: huidaoguoquSRT,
    });
    songs.push({
      id: "28",
      name: "给我一首歌的时间",
      nameKr: "노래 한 곡만큼의 시간-给我一首歌的时间",
      videoId: "HtB0Ym9uZXE",
      level: "高级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: geiwoyishougedeshijianSRT,
    });
    songs.push({
      id: "29",
      name: "奇妙能力歌",
      nameKr: "기묘한 능력의 노래-奇妙能力歌",
      videoId: "me6-2E1BEbA",
      level: "高级",
      style: "抒情",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: qimiaonengligesRT,
    });
    songs.push({
      id: "30",
      name: "你要的全拿走",
      nameKr: "원하는 건 다 가져가-你要的全拿走",
      videoId: "9HDHnU-Vl0g",
      level: "高级",
      style: "悲伤",
      age: "15세 이상",
      difficulty: 4,
      tags: ["抒情"],
      srtContent: niyaodequannazousRT,
    });

    return songs;
  };

  // 随机选择推荐歌曲（选择足够多的歌曲用于自动滚动）
  // 根据首页「나의 수준」(nz_level) 推荐 3 首：主等级优先 + 次等级若干，随机
  const recommendedSongs = useMemo((): Song[] => {
    if (!showRecommendationSection) return [];
    const userLevelKo = typeof window !== "undefined" ? (localStorage.getItem("nz_level") || "중급") : "중급";
    const allSongs = getAllSongs();
    const levelMap: Record<string, { primary: string; secondary: string }> = {
      "초급": { primary: "初级", secondary: "中级" },
      "중급": { primary: "中级", secondary: "初级" },
      "고급": { primary: "高级", secondary: "中级" },
    };
    const { primary, secondary } = levelMap[userLevelKo] || levelMap["중급"];
    const primarySongs = allSongs.filter((s) => s.level === primary);
    const secondarySongs = allSongs.filter((s) => s.level === secondary);
    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);
    // 尽量主等级为主：2 或 3 首来自主等级，不足时用次等级补足
    const primaryCount = 2 + Math.floor(Math.random() * 2); // 2 或 3
    const fromPrimary = shuffle(primarySongs).slice(0, Math.min(primaryCount, primarySongs.length));
    const need = Math.max(0, 3 - fromPrimary.length);
    const fromSecondary = shuffle(secondarySongs).slice(0, need);
    return shuffle([...fromPrimary, ...fromSecondary]);
  }, [showRecommendationSection, recommendationRefreshKey]);

  // 滚动容器引用
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  // 自动滚动效果 - 很慢很慢的滚动，无缝循环
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || recommendedSongs.length === 0) return;

    const cardWidth = 320; // 每个卡片宽度
    const gap = 24; // gap-6 = 24px
    const cardWidthWithGap = cardWidth + gap;
    const scrollStep = 0.2; // 每次滚动0.2px（非常慢）
    const scrollInterval = 50; // 每50ms滚动一次（很慢很慢）
    let intervalId: NodeJS.Timeout | null = null;
    let isResetting = false; // 标记是否正在重置

    const autoScroll = () => {
      if (!container || isResetting) return;
      
      scrollPositionRef.current += scrollStep;
      container.scrollLeft = scrollPositionRef.current;

      // 计算单组内容的宽度（因为我们复制了3次，所以是总宽度的1/3）
      const singleGroupWidth = container.scrollWidth / 3;
      const visibleWidth = container.clientWidth;
      
      // 当滚动到第一组末尾时，平滑重置到开始位置
      // 在距离第一组末尾还有一张卡片宽度时开始重置，确保无缝衔接
      const resetThreshold = singleGroupWidth - cardWidthWithGap;
      
      if (scrollPositionRef.current >= resetThreshold && !isResetting) {
        isResetting = true;
        
        // 立即重置到开始位置（因为内容重复，视觉上无缝）
        // 使用requestAnimationFrame确保在下一帧执行，避免视觉跳跃
        requestAnimationFrame(() => {
          if (container) {
            // 重置到开始位置（减去第一组的宽度）
            scrollPositionRef.current = scrollPositionRef.current - singleGroupWidth;
            
            // 临时禁用平滑滚动，实现瞬间但无感知的重置
            const originalScrollBehavior = container.style.scrollBehavior;
            container.style.scrollBehavior = 'auto';
            container.scrollLeft = scrollPositionRef.current;
            
            // 下一帧恢复平滑滚动
            requestAnimationFrame(() => {
              if (container) {
                container.style.scrollBehavior = originalScrollBehavior || 'smooth';
                isResetting = false;
              }
            });
          }
        });
      }
    };

    // 延迟1秒后开始滚动
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(autoScroll, scrollInterval);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [recommendedSongs]);

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
    <div className="min-h-screen" style={{ background: '#faf6f0' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 顶部区域（Hero 区） */}
        <div className="text-center mb-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#7a4f2d' }}>
            {youtubePageTranslations.ko.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            {youtubePageTranslations.ko.heroSubtitle}
          </p>

          {/* 筛选区域（仅风格、年龄；等级以首页 나의 수준 为准） */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 风格筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {youtubePageTranslations.ko.labelStyle}
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a4f2d]"
                >
                  <option value="">{youtubePageTranslations.ko.pleaseSelectStyle}</option>
                  <option value="欢快">{youtubePageTranslations.ko.styleLively}</option>
                  <option value="悲伤">{youtubePageTranslations.ko.styleSad}</option>
                  <option value="抒情">{youtubePageTranslations.ko.styleLyrical}</option>
                </select>
              </div>

              {/* 年龄筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {youtubePageTranslations.ko.labelAge}
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a4f2d]"
                >
                  <option value="">{youtubePageTranslations.ko.pleaseSelectAge}</option>
                  <option value="7-12">7-12</option>
                  <option value="13-18">13-18</option>
                  <option value="19-30">19-30</option>
                  <option value="31-50">31-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
            </div>
          </div>

          {/* 바로 시작：点击后下方显示「나에게 맞는 노래 추천」 */}
          <button
            onClick={() => setShowRecommendationSection(true)}
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-[#7a4f2d] hover:bg-[#a06c3e]"
          >
            {youtubePageTranslations.ko.startNow}
          </button>
        </div>

        {/* 点击「바로 시작」后显示：나에게 맞는 노래 추천（3 首，按首页等级） */}
        {showRecommendationSection && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{youtubePageTranslations.ko.recommendForMe}</h2>
            <button
              type="button"
              onClick={() => setRecommendationRefreshKey((k) => k + 1)}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-[#7a4f2d] hover:text-white hover:bg-[#7a4f2d] border border-[#7a4f2d]"
            >
              {youtubePageTranslations.ko.otherRecommend}
            </button>
          </div>
          <div className="relative">
            <div className="overflow-x-auto pb-4 recommend-scroll" style={{ width: '100%', margin: '0 auto' }}>
              <div className="flex gap-6 flex-wrap justify-center">
                {recommendedSongs.map((song, index) => (
                  <div
                    key={`${song.id}-${index}`}
                    onClick={() => setSelectedSong(song)}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer flex-shrink-0 border-2 hover:border-[#7a4f2d]"
                    style={{ width: '320px', minWidth: '320px', borderColor: '#e2cdb8' }}
                  >
                    <div className="relative w-full h-48 bg-gray-200">
                      <img
                        src={getSongImageUrl(song)}
                        alt={song.nameKr}
                        className="w-full h-full object-cover"
                        onError={(e) => handleYouTubeThumbnailError(e, song.videoId)}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{song.nameKr}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs rounded ${
                          song.level === '初级' ? 'bg-green-100 text-green-700' :
                          song.level === '中级' ? 'bg-[#f5ede3] text-[#a06c3e]' :
                          song.level === '高级' ? 'bg-[#f0e6dc] text-[#7a4f2d]' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {getLevelLabelKo(song.level)}
                        </span>
                        <span className="text-xs text-yellow-500">
                          {'★'.repeat(song.difficulty)}{'☆'.repeat(5 - song.difficulty)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{youtubePageTranslations.ko.labelStyleColon}: {getStyleLabelKo(song.style)}</p>
                      <p className="text-sm text-gray-600 mb-4">{youtubePageTranslations.ko.labelSuitable}: {song.age}</p>
                      <button className="w-full px-4 py-2 text-white rounded-lg transition-colors bg-[#7a4f2d] hover:bg-[#a06c3e]">
                        {youtubePageTranslations.ko.startLearning}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* 模块二：歌曲库 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{youtubePageTranslations.ko.songLibrary}</h2>

          {/* 初级 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{youtubePageTranslations.ko.sectionBeginner}</h3>
              <button
                onClick={() => toggleLevel('beginner')}
                className="px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 text-[#7a4f2d] hover:text-[#a06c3e] hover:bg-[#f5ede3]"
              >
                {expandedLevels.beginner ? youtubePageTranslations.ko.collapse : youtubePageTranslations.ko.expandMore}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: expandedLevels.beginner ? 10 : 8 })
                .map((_, idx) => {
                  // 检查这个位置是否有配置的歌曲
                  const hasConfiguredSong = configuredSongs.beginner.includes(idx);
                  // 如果未展开且超过5个，或者没有配置的歌曲且未展开，不显示
                  if (!expandedLevels.beginner && (!hasConfiguredSong || idx >= 8)) {
                    return null;
                  }
                  // 如果展开后没有配置的歌曲，显示占位符
                  if (expandedLevels.beginner && !hasConfiguredSong) {
                    const songId = `beginner-${idx + 1}`;
                    return (
                      <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                        <div className="relative w-full h-32 bg-gray-200">
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-gray-400 text-sm">{youtubePageTranslations.ko.placeholderAddLater}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-400 mb-2 text-sm">{youtubePageTranslations.ko.songN} {idx + 1}</h4>
                          <div className="text-xs text-gray-300 mb-2">☆☆☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-400 text-xs rounded">{youtubePageTranslations.ko.placeholderTbd}</span>
                          </div>
                          <p className="text-xs text-gray-400">{youtubePageTranslations.ko.placeholderAddLater}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲1是"两只老虎"（idx === 0）
                  if (idx === 0) {
                    const liangzhilaohu: Song = {
                      id: "1",
                      name: "两只老虎",
                      nameKr: "두 마리 호랑이-两只老虎",
                      videoId: "0P0aApWogd0",
                      level: "初级",
                      style: "欢快",
                      age: "6세 이상",
                      difficulty: 1,
                      tags: ["童谣"],
                      srtContent: liangzhilaohuSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(liangzhilaohu)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">{getStyleLabelKo(liangzhilaohu.style)}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      age: "13세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: yueliangSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yueliang)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "欢快",
                      age: "13세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: pengyouSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(pengyou)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "欢快",
                      age: "6세 이상",
                      difficulty: 1,
                      tags: ["童谣"],
                      srtContent: yishanyishanSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yishanyishan)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">{getStyleLabelKo("童谣")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "悲伤",
                      age: "15세 이상",
                      difficulty: 3,
                      tags: ["抒情"],
                      srtContent: houlaiSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(houlai)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      age: "12세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: ningxiaSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(ningxia)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "悲伤",
                      age: "13세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: xinbuliaoSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(xinbuliao)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      age: "13세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: qiasiniSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(qiasini)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲7是"海上花"（idx === 8）
                  if (idx === 8) {
                    const haishanghua: Song = {
                      id: "7",
                      name: "海上花",
                      nameKr: "해상의 꽃-海上花",
                      videoId: "dkak-3Ej6iE",
                      level: "初级",
                      style: "悲伤",
                      age: "13세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: haishanghuaSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(haishanghua)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(haishanghua)}
                            alt="海上花"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, haishanghua.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">해상의 꽃-海上花</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲10是"同桌的你"（idx === 9）
                  if (idx === 9) {
                    const tongzhuodeni: Song = {
                      id: "8",
                      name: "同桌的你",
                      nameKr: "옆자리의 너-同桌的你",
                      videoId: "xqYMWyOpSFI",
                      level: "初级",
                      style: "欢快",
                      age: "13세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: tongzhuodeniSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(tongzhuodeni)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(tongzhuodeni)}
                            alt="同桌的你"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, tongzhuodeni.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">옆자리의 너-同桌的你</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  const songId = `beginner-${idx + 1}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">{youtubePageTranslations.ko.placeholderAddLater}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 1}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Rap</span>
                        </div>
                        <p className="text-xs text-gray-500">{youtubePageTranslations.ko.youtubeLinkAddLater}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 中级 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{youtubePageTranslations.ko.sectionIntermediate}</h3>
              <button
                onClick={() => toggleLevel('intermediate')}
                className="px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 text-[#7a4f2d] hover:text-[#a06c3e] hover:bg-[#f5ede3]"
              >
                {expandedLevels.intermediate ? youtubePageTranslations.ko.collapse : youtubePageTranslations.ko.expandMore}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: expandedLevels.intermediate ? 10 : 8 })
                .map((_, idx) => {
                  // 检查这个位置是否有配置的歌曲
                  const hasConfiguredSong = configuredSongs.intermediate.includes(idx);
                  // 如果未展开且超过5个，或者没有配置的歌曲且未展开，不显示
                  if (!expandedLevels.intermediate && (!hasConfiguredSong || idx >= 8)) {
                    return null;
                  }
                  // 如果展开后没有配置的歌曲，显示占位符
                  if (expandedLevels.intermediate && !hasConfiguredSong) {
                    const songId = `intermediate-${idx + 9}`;
                    return (
                      <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                        <div className="relative w-full h-32 bg-gray-200">
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-gray-400 text-sm">{youtubePageTranslations.ko.placeholderAddLater}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-400 mb-2 text-sm">歌曲 {idx + 9}</h4>
                          <div className="text-xs text-gray-300 mb-2">☆☆☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-400 text-xs rounded">{youtubePageTranslations.ko.placeholderTbd}</span>
                          </div>
                          <p className="text-xs text-gray-400">{youtubePageTranslations.ko.placeholderAddLater}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲9是"甜蜜蜜"
                  if (idx === 0) {
                    const tianmimi: Song = {
                      id: "9",
                      name: "甜蜜蜜",
                      nameKr: "첨밀밀-甜蜜蜜",
                      videoId: "OMVlGjmppeY",
                      level: "中级",
                      style: "悲伤",
                      age: "19-30",
                      difficulty: 3,
                      tags: ["抒情"],
                      srtContent: tianmimiSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(tianmimi)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "欢快",
                      age: "6세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: waipoSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(waipo)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      age: "13세 이상",
                      difficulty: 4,
                      tags: ["悲伤"],
                      srtContent: paomoSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(paomo)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{getStyleLabelKo("悲伤")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      age: "13세 이상",
                      difficulty: 4,
                      tags: ["悲伤"],
                      srtContent: yuaiSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yuai)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{getStyleLabelKo("悲伤")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["R&B"],
                      srtContent: zhivenSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(zhiven)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "欢快",
                      age: "10세 이상",
                      difficulty: 3,
                      tags: ["抒情"],
                      srtContent: xiaoxingyunSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(xiaoxingyun)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "悲伤",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: wohuainianSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(wohuainian)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["R&B"],
                      srtContent: guangnianSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(guangnian)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲17是"勇气"（idx === 8，第9个位置）
                  if (idx === 8) {
                    const yongqi: Song = {
                      id: "7",
                      name: "勇气",
                      nameKr: "용기-勇气",
                      videoId: "EaJM58fOsSQ",
                      level: "中级",
                      style: "欢快",
                      age: "13세 이상",
                      difficulty: 2,
                      tags: ["抒情"],
                      srtContent: yongqiSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yongqi)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(yongqi)}
                            alt="勇气"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, yongqi.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">용기-勇气</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲18是"不为谁而作的歌"（idx === 9，第10个位置）
                  if (idx === 9) {
                    const buweishuierzuodege: Song = {
                      id: "8",
                      name: "不为谁而作的歌",
                      nameKr: "누구를 위해 만든 노래도 아니야-不为谁做的歌",
                      videoId: "5V_aWacv6-Q",
                      level: "中级",
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 3,
                      tags: ["抒情"],
                      srtContent: buweishuierzuodegeSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(buweishuierzuodege)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(buweishuierzuodege)}
                            alt="不为谁而作的歌"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, buweishuierzuodege.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">누구를 위해 만든 노래도 아니야-不为谁做的歌</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  const songId = `intermediate-${idx + 9}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">{youtubePageTranslations.ko.placeholderAddLater}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 9}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★★☆☆</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">古诗</span>
                        </div>
                        <p className="text-xs text-gray-500">{youtubePageTranslations.ko.youtubeLinkAddLater}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 高级 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{youtubePageTranslations.ko.sectionAdvanced}</h3>
              <button
                onClick={() => toggleLevel('advanced')}
                className="px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 text-[#7a4f2d] hover:text-[#a06c3e] hover:bg-[#f5ede3]"
              >
                {expandedLevels.advanced ? youtubePageTranslations.ko.collapse : youtubePageTranslations.ko.expandMore}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: expandedLevels.advanced ? 10 : 8 })
                .map((_, idx) => {
                  // 检查这个位置是否有配置的歌曲
                  const hasConfiguredSong = configuredSongs.advanced.includes(idx);
                  // 如果未展开且超过5个，或者没有配置的歌曲且未展开，不显示
                  if (!expandedLevels.advanced && (!hasConfiguredSong || idx >= 8)) {
                    return null;
                  }
                  // 如果展开后没有配置的歌曲，显示占位符
                  if (expandedLevels.advanced && !hasConfiguredSong) {
                    const songId = `advanced-${idx + 13}`;
                    return (
                      <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                        <div className="relative w-full h-32 bg-gray-200">
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-gray-400 text-sm">{youtubePageTranslations.ko.placeholderAddLater}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-400 mb-2 text-sm">歌曲 {idx + 17}</h4>
                          <div className="text-xs text-gray-300 mb-2">☆☆☆☆☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-400 text-xs rounded">{youtubePageTranslations.ko.placeholderTbd}</span>
                          </div>
                          <p className="text-xs text-gray-400">{youtubePageTranslations.ko.placeholderAddLater}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲13是"还在流浪"
                  if (idx === 0) {
                    const haizailiulang: Song = {
                      id: "13",
                      name: "还在流浪",
                      nameKr: "여전히 방황 중이야-还在流浪",
                      videoId: "G_uWYkLtiwI",
                      level: "高级",
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["R&B"],
                      srtContent: haizailiulangSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(haizailiulang)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "欢快",
                      age: "19-30",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: pingfanSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(pingfan)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
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
                      style: "悲伤",
                      age: "15세 이상",
                      difficulty: 5,
                      tags: ["R&B"],
                      srtContent: yequSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yequ)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
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
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲20是"烟花易冷"
                  if (idx === 3) {
                    const yanhuayileng: Song = {
                      id: "20",
                      name: "烟花易冷",
                      nameKr: "불꽃은 쉽게 식는다-烟花易冷",
                      videoId: "WqN-zGDV2uw",
                      level: "高级",
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: yanhuayilengSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(yanhuayileng)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(yanhuayileng)}
                            alt="烟花易冷"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, yanhuayileng.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">불꽃은 쉽게 식는다-烟花易冷</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲5是"像我这样的人"
                  if (idx === 4) {
                    const xiangwozheyangderen: Song = {
                      id: "5",
                      name: "像我这样的人",
                      nameKr: "나 같은 사람-像我这样的人",
                      videoId: "dim33vVuBQ0",
                      level: "高级",
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: xiangwozheyangderenSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(xiangwozheyangderen)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(xiangwozheyangderen)}
                            alt="像我这样的人"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, xiangwozheyangderen.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">나 같은 사람-像我这样的人</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲22是"消愁"
                  if (idx === 5) {
                    const xiaochou: Song = {
                      id: "22",
                      name: "消愁",
                      nameKr: "근심을 없애다-消愁",
                      videoId: "ZHGN3ViWrns",
                      level: "高级",
                      style: "悲伤",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: xiaochouSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(xiaochou)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(xiaochou)}
                            alt="消愁"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, xiaochou.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">근심을 없애다-消愁</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲7是"回到过去"
                  if (idx === 6) {
                    const huidaoguoqu: Song = {
                      id: "7",
                      name: "回到过去",
                      nameKr: "과거로 돌아가-回到过去",
                      videoId: "lt7BhxrUGfY",
                      level: "高级",
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: huidaoguoquSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(huidaoguoqu)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(huidaoguoqu)}
                            alt="回到过去"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, huidaoguoqu.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">과거로 돌아가-回到过去</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">{youtubePageTranslations.ko.clickToStartLearning}</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲8是"给我一首歌的时间"（idx === 7，第8个位置）
                  if (idx === 7) {
                    const geiwoyishougedeshijian: Song = {
                      id: "8",
                      name: "给我一首歌的时间",
                      nameKr: "노래 한 곡만큼의 시간-给我一首歌的时间",
                      videoId: "HtB0Ym9uZXE",
                      level: "高级",
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: geiwoyishougedeshijianSRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(geiwoyishougedeshijian)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(geiwoyishougedeshijian)}
                            alt="给我一首歌的时间"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, geiwoyishougedeshijian.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">노래 한 곡만큼의 시간-给我一首歌的时间</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">15세 이상</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲9是"奇妙能力歌"（idx === 8，第9个位置）
                  if (idx === 8) {
                    const qimiaonengliges: Song = {
                      id: "9",
                      name: "奇妙能力歌",
                      nameKr: "기묘한 능력의 노래-奇妙能力歌",
                      videoId: "me6-2E1BEbA",
                      level: "高级",
                      style: "抒情",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: qimiaonengligesRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(qimiaonengliges)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(qimiaonengliges)}
                            alt="奇妙能力歌"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, qimiaonengliges.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">기묘한 능력의 노래-奇妙能力歌</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">15세 이상</p>
                        </div>
                      </div>
                    );
                  }
                  // 歌曲10是"你要的全拿走"（idx === 9，第10个位置）
                  if (idx === 9) {
                    const niyaodequannazous: Song = {
                      id: "10",
                      name: "你要的全拿走",
                      nameKr: "원하는 건 다 가져가-你要的全拿走",
                      videoId: "9HDHnU-Vl0g",
                      level: "高级",
                      style: "悲伤",
                      age: "15세 이상",
                      difficulty: 4,
                      tags: ["抒情"],
                      srtContent: niyaodequannazousRT,
                    };
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSong(niyaodequannazous)}
                        className="bg-white rounded-lg shadow-sm border-2 border-[#e2cdb8] overflow-hidden hover:shadow-md hover:border-[#7a4f2d] transition-all cursor-pointer"
                      >
                        <div className="relative w-full h-32 bg-gray-200">
                          <img
                            src={getSongImageUrl(niyaodequannazous)}
                            alt="你要的全拿走"
                            className="w-full h-full object-cover"
                            onError={(e) => handleYouTubeThumbnailError(e, niyaodequannazous.videoId)}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">원하는 건 다 가져가-你要的全拿走</h4>
                          <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">{getStyleLabelKo("抒情")}</span>
                          </div>
                          <p className="text-xs text-gray-500">15세 이상</p>
                        </div>
                      </div>
                    );
                  }
                  const songId = `advanced-${idx + 13}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">{youtubePageTranslations.ko.placeholderAddLater}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 17}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★★★☆</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">口语</span>
                        </div>
                        <p className="text-xs text-gray-500">{youtubePageTranslations.ko.youtubeLinkAddLater}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* 进阶（심화）暂时隐藏 */}
          {false && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{youtubePageTranslations.ko.sectionExpert}</h3>
              <button
                onClick={() => toggleLevel('expert')}
                className="px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 text-[#7a4f2d] hover:text-[#a06c3e] hover:bg-[#f5ede3]"
              >
                {expandedLevels.expert ? youtubePageTranslations.ko.collapse : youtubePageTranslations.ko.expandMore}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {configuredSongs.expert
                .filter((idx) => idx < 4 || expandedLevels.expert)
                .map((idx) => {
                  const songId = `expert-${idx + 25}`;
                  return (
                    <div key={idx} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 bg-gray-200">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">{youtubePageTranslations.ko.placeholderAddLater}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">歌曲 {idx + 25}</h4>
                        <div className="text-xs text-yellow-500 mb-2">★★★★★</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Rap</span>
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">口语</span>
                        </div>
                        <p className="text-xs text-gray-500">{youtubePageTranslations.ko.youtubeLinkAddLater}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          )}
        </div>

        {/* 模块三：📈 我的训练统计（暂时隐藏） */}
        {false && (
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
        )}
      </div>
    </div>
  );
}

