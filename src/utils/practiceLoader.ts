// 统一的练习题数据加载器
// 根据视频ID动态加载对应的练习题数据，确保所有视频使用相同的接口

import { PracticeQuestion } from '../data/tianmimiPractice';
import * as tianmimiPractice from '../data/tianmimiPractice';
import * as pingfanPractice from '../data/pingfanPractice';
import * as waipoPractice from '../data/waipoPractice';
import * as liangzhilaohuPractice from '../data/liangzhilaohuPractice';
import * as yishanyishanPractice from '../data/yishanyishanPractice';
import * as paomoPractice from '../data/paomoPractice';
import * as haizailiulangPractice from '../data/haizailiulangPractice';
import * as yuaiPractice from '../data/yuaiPractice';
import * as yueliangPractice from '../data/yueliangPractice';
import * as yequPractice from '../data/yequPractice';
import * as zhivenPractice from '../data/zhivenPractice';
import * as xiaoxingyunPractice from '../data/xiaoxingyunPractice';
import * as pengyouPractice from '../data/pengyouPractice';
import * as houlaiPractice from '../data/houlaiPractice';
import * as ningxiaPractice from '../data/ningxiaPractice';
import * as qiasiniPractice from '../data/qiasiniPractice';
import * as xinbuliaoPractice from '../data/xinbuliaoPractice';
import * as wohuainianPractice from '../data/wohuainianPractice';
import * as guangnianPractice from '../data/guangnianPractice';
import * as haishanghuaPractice from '../data/haishanghuaPractice';
import * as tongzhuodeniPractice from '../data/tongzhuodeniPractice';
import * as yongqiPractice from '../data/yongqiPractice';
import * as buweishuierzuodegePractice from '../data/buweishuierzuodegePractice';
import * as yanhuayilengPractice from '../data/yanhuayilengPractice';
import * as xiangwozheyangderenPractice from '../data/xiangwozheyangderenPractice';
import * as xiaochouPractice from '../data/xiaochouPractice';
import * as huidaoguoquPractice from '../data/huidaoguoquPractice';
import * as geiwoyishougedeshijianPractice from '../data/geiwoyishougedeshijianPractice';
import * as qimiaonengligesPractice from '../data/qimiaonengligesPractice';
import * as niyaodequannazousPractice from '../data/niyaodequannazousPractice';

// 视频ID到练习题模块的映射
const practiceModules: Record<string, {
  getPracticeForSentence: (sentenceIndex: number) => PracticeQuestion[];
}> = {
  'OMVlGjmppeY': tianmimiPractice, // 甜蜜蜜
  'wk9R0ugm5AE': pingfanPractice,   // 平凡之路
  'PjrsETvz7QQ': waipoPractice,    // 外婆的澎湖湾
  '0P0aApWogd0': liangzhilaohuPractice, // 两只老虎
  '_WTao2TJ2C8': yishanyishanPractice,  // 一闪一闪亮晶晶
  'mGeiABBB5f8': paomoPractice,    // 泡沫
  'G_uWYkLtiwI': haizailiulangPractice, // 还在流浪
  'fa0naBdR_q0': yuaiPractice,     // 雨爱
  'FhIXtvJbr3o': yueliangPractice, // 月亮代表我的心
  'OyDYW8mZXXg': yequPractice,     // 夜曲
  'KSSWVSpuf4E': zhivenPractice,   // 指纹
  '4DNi2UTOAdw': xiaoxingyunPractice, // 小幸运
  '6lbPgfKK7m4': pengyouPractice,   // 朋友
  't0igPuDjYUE': houlaiPractice,   // 后来
  'MmtVl9CssYE': ningxiaPractice,  // 宁夏
  '3QfpuxVpTFo': xinbuliaoPractice, // 新不了情
  'w2_FycTdzVI': qiasiniPractice,  // 恰似你的温柔
  '1hVkS2ldRhw': wohuainianPractice, // 我怀念的
  'HjPGELNH-00': guangnianPractice, // 光年之外
  'dkak-3Ej6iE': haishanghuaPractice, // 海上花
  'xqYMWyOpSFI': tongzhuodeniPractice, // 同桌的你
  'EaJM58fOsSQ': yongqiPractice, // 勇气
  '5V_aWacv6-Q': buweishuierzuodegePractice, // 不为谁而作的歌
  'WqN-zGDV2uw': yanhuayilengPractice, // 烟花易冷
  'dim33vVuBQ0': xiangwozheyangderenPractice, // 像我这样的人
  'ZHGN3ViWrns': xiaochouPractice, // 消愁
  'lt7BhxrUGfY': huidaoguoquPractice, // 回到过去
  'HtB0Ym9uZXE': geiwoyishougedeshijianPractice, // 给我一首歌的时间
  'me6-2E1BEbA': qimiaonengligesPractice, // 奇妙能力歌
  '9HDHnU-Vl0g': niyaodequannazousPractice, // 你要的全拿走
};

/**
 * 获取指定句子的练习题（根据视频ID动态加载）
 * @param videoId 视频ID
 * @param sentenceIndex 句子索引
 * @returns 练习题列表
 */
export function getPracticeForSentence(videoId: string, sentenceIndex: number): PracticeQuestion[] {
  const practiceModule = practiceModules[videoId];
  if (practiceModule) {
    return practiceModule.getPracticeForSentence(sentenceIndex);
  }
  // 如果没有找到对应的模块，返回空数组
  return [];
}

