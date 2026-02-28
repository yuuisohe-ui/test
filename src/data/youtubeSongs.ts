// 영상 학습실 곡 목록 공용 데이터 (YoutubePage, WordReviewPage 등에서 사용)

import { liangzhilaohuSRT } from "./liangzhilaohuSRT";
import { yueliangSRT } from "./yueliangSRT";
import { pengyouSRT } from "./pengyouSRT";
import { yishanyishanSRT } from "./yishanyishanSRT";
import { houlaiSRT } from "./houlaiSRT";
import { ningxiaSRT } from "./ningxiaSRT";
import { xinbuliaoSRT } from "./xinbuliaoSRT";
import { qiasiniSRT } from "./qiasiniSRT";
import { haishanghuaSRT } from "./haishanghuaSRT";
import { tongzhuodeniSRT } from "./tongzhuodeniSRT";
import { tianmimiSRT } from "./tianmimiSRT";
import { waipoSRT } from "./waipoSRT";
import { paomoSRT } from "./paomoSRT";
import { yuaiSRT } from "./yuaiSRT";
import { zhivenSRT } from "./zhivenSRT";
import { xiaoxingyunSRT } from "./xiaoxingyunSRT";
import { wohuainianSRT } from "./wohuainianSRT";
import { guangnianSRT } from "./guangnianSRT";
import { yongqiSRT } from "./yongqiSRT";
import { buweishuierzuodegeSRT } from "./buweishuierzuodegeSRT";
import { haizailiulangSRT } from "./haizailiulangSRT";
import { pingfanSRT } from "./pingfanSRT";
import { yequSRT } from "./yequSRT";
import { yanhuayilengSRT } from "./yanhuayilengSRT";
import { xiangwozheyangderenSRT } from "./xiangwozheyangderenSRT";
import { xiaochouSRT } from "./xiaochouSRT";
import { huidaoguoquSRT } from "./huidaoguoquSRT";
import { geiwoyishougedeshijianSRT } from "./geiwoyishougedeshijianSRT";
import { qimiaonengligesRT } from "./qimiaonengligesRT";
import { niyaodequannazousRT } from "./niyaodequannazousRT";

export interface YoutubeSong {
  id: string;
  name: string;
  nameKr: string;
  videoId?: string;
  level: string;
  style: string;
  age: string;
  difficulty: number;
  tags: string[];
  srtContent?: string;
}

export function getAllYoutubeSongs(): YoutubeSong[] {
  const songs: YoutubeSong[] = [];
  // 초급
  songs.push({ id: "1", name: "两只老虎", nameKr: "두 마리 호랑이", videoId: "0P0aApWogd0", level: "初级", style: "欢快", age: "6세 이상", difficulty: 1, tags: ["欢快"], srtContent: liangzhilaohuSRT });
  songs.push({ id: "2", name: "月亮代表我的心", nameKr: "달은 내 마음을 대신해", videoId: "FhIXtvJbr3o", level: "初级", style: "抒情", age: "13세 이상", difficulty: 2, tags: ["抒情"], srtContent: yueliangSRT });
  songs.push({ id: "3", name: "朋友", nameKr: "친구", videoId: "6lbPgfKK7m4", level: "初级", style: "欢快", age: "13세 이상", difficulty: 2, tags: ["抒情"], srtContent: pengyouSRT });
  songs.push({ id: "4", name: "一闪一闪亮晶晶", nameKr: "반짝반짝 작은 별", videoId: "_WTao2TJ2C8", level: "初级", style: "欢快", age: "6세 이상", difficulty: 1, tags: ["童谣"], srtContent: yishanyishanSRT });
  songs.push({ id: "5", name: "后来", nameKr: "나중에", videoId: "t0igPuDjYUE", level: "初级", style: "悲伤", age: "15세 이상", difficulty: 3, tags: ["抒情"], srtContent: houlaiSRT });
  songs.push({ id: "6", name: "宁夏", nameKr: "닝샤", videoId: "MmtVl9CssYE", level: "初级", style: "抒情", age: "12세 이상", difficulty: 2, tags: ["抒情"], srtContent: ningxiaSRT });
  songs.push({ id: "7", name: "新不了情", nameKr: "새로운 못 다한 사랑-新不了情", videoId: "3QfpuxVpTFo", level: "初级", style: "悲伤", age: "13세 이상", difficulty: 2, tags: ["抒情"], srtContent: xinbuliaoSRT });
  songs.push({ id: "8", name: "恰似你的温柔", nameKr: "마치 당신의 부드러움처럼-恰似你的温柔", videoId: "w2_FycTdzVI", level: "初级", style: "抒情", age: "13세 이상", difficulty: 2, tags: ["抒情"], srtContent: qiasiniSRT });
  songs.push({ id: "9", name: "海上花", nameKr: "해상의 꽃-海上花", videoId: "dkak-3Ej6iE", level: "初级", style: "悲伤", age: "13세 이상", difficulty: 2, tags: ["抒情"], srtContent: haishanghuaSRT });
  songs.push({ id: "10", name: "同桌的你", nameKr: "옆자리의 너-同桌的你", videoId: "xqYMWyOpSFI", level: "初级", style: "欢快", age: "13세 이상", difficulty: 2, tags: ["抒情"], srtContent: tongzhuodeniSRT });
  // 중급
  songs.push({ id: "11", name: "甜蜜蜜", nameKr: "첨밀밀-甜蜜蜜", videoId: "OMVlGjmppeY", level: "中级", style: "悲伤", age: "19-30", difficulty: 3, tags: ["抒情"], srtContent: tianmimiSRT });
  songs.push({ id: "12", name: "外婆的澎湖湾", nameKr: "할머니의 펑후만-外婆的澎湖湾", videoId: "PjrsETvz7QQ", level: "中级", style: "欢快", age: "6세 이상", difficulty: 2, tags: ["抒情"], srtContent: waipoSRT });
  songs.push({ id: "13", name: "泡沫", nameKr: "거품-泡沫", videoId: "mGeiABBB5f8", level: "中级", style: "悲伤", age: "13세 이상", difficulty: 3, tags: ["悲伤"], srtContent: paomoSRT });
  songs.push({ id: "14", name: "雨爱", nameKr: "우애-雨爱", videoId: "fa0naBdR_q0", level: "中级", style: "悲伤", age: "13세 이상", difficulty: 4, tags: ["悲伤"], srtContent: yuaiSRT });
  songs.push({ id: "15", name: "指纹", nameKr: "지문-指纹", videoId: "KSSWVSpuf4E", level: "中级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["R&B"], srtContent: zhivenSRT });
  songs.push({ id: "16", name: "小幸运", nameKr: "작은 행운-小幸运", videoId: "4DNi2UTOAdw", level: "中级", style: "欢快", age: "10세 이상", difficulty: 3, tags: ["抒情"], srtContent: xiaoxingyunSRT });
  songs.push({ id: "17", name: "我怀念的", nameKr: "내가 그리워하는-我怀念的", videoId: "1hVkS2ldRhw", level: "中级", style: "悲伤", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: wohuainianSRT });
  songs.push({ id: "18", name: "光年之外", nameKr: "광년지외-光年之外", videoId: "HjPGELNH-00", level: "中级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["流行"], srtContent: guangnianSRT });
  songs.push({ id: "19", name: "勇气", nameKr: "용기-勇气", videoId: "EaJM58fOsSQ", level: "中级", style: "欢快", age: "13세 이상", difficulty: 2, tags: ["抒情"], srtContent: yongqiSRT });
  songs.push({ id: "20", name: "不为谁而作的歌", nameKr: "누구를 위해 만든 노래도 아니야-不为谁做的歌", videoId: "5V_aWacv6-Q", level: "中级", style: "抒情", age: "15세 이상", difficulty: 3, tags: ["抒情"], srtContent: buweishuierzuodegeSRT });
  // 고급
  songs.push({ id: "21", name: "还在流浪", nameKr: "아직 방랑 중-还在流浪", videoId: "G_uWYkLtiwI", level: "高级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: haizailiulangSRT });
  songs.push({ id: "22", name: "平凡之路", nameKr: "평범한 길-平凡之路", videoId: "wk9R0ugm5AE", level: "高级", style: "欢快", age: "15세 이상", difficulty: 4, tags: ["励志"], srtContent: pingfanSRT });
  songs.push({ id: "23", name: "夜曲", nameKr: "야곡-夜曲", videoId: "OyDYW8mZXXg", level: "高级", style: "悲伤", age: "15세 이상", difficulty: 4, tags: ["流行"], srtContent: yequSRT });
  songs.push({ id: "24", name: "烟花易冷", nameKr: "불꽃은 쉽게 식는다-烟花易冷", videoId: "WqN-zGDV2uw", level: "高级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: yanhuayilengSRT });
  songs.push({ id: "25", name: "像我这样的人", nameKr: "나 같은 사람-像我这样的人", videoId: "dim33vVuBQ0", level: "高级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: xiangwozheyangderenSRT });
  songs.push({ id: "26", name: "消愁", nameKr: "근심을 없애다-消愁", videoId: "ZHGN3ViWrns", level: "高级", style: "悲伤", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: xiaochouSRT });
  songs.push({ id: "27", name: "回到过去", nameKr: "과거로 돌아가-回到过去", videoId: "lt7BhxrUGfY", level: "高级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: huidaoguoquSRT });
  songs.push({ id: "28", name: "给我一首歌的时间", nameKr: "노래 한 곡만큼의 시간-给我一首歌的时间", videoId: "HtB0Ym9uZXE", level: "高级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: geiwoyishougedeshijianSRT });
  songs.push({ id: "29", name: "奇妙能力歌", nameKr: "기묘한 능력의 노래-奇妙能力歌", videoId: "me6-2E1BEbA", level: "高级", style: "抒情", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: qimiaonengligesRT });
  songs.push({ id: "30", name: "你要的全拿走", nameKr: "원하는 건 다 가져가-你要的全拿走", videoId: "9HDHnU-Vl0g", level: "高级", style: "悲伤", age: "15세 이상", difficulty: 4, tags: ["抒情"], srtContent: niyaodequannazousRT });
  return songs;
}
