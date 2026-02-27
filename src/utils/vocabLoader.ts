// 统一的词汇数据加载器
// 根据视频ID动态加载对应的词汇数据，确保所有视频使用相同的接口

import { WordAnalysis } from '../data/tianmimiVocab';
import * as tianmimiVocab from '../data/tianmimiVocab';
import * as pingfanVocab from '../data/pingfanVocab';
import * as waipoVocab from '../data/waipoVocab';
import * as liangzhilaohuVocab from '../data/liangzhilaohuVocab';
import * as yishanyishanVocab from '../data/yishanyishanVocab';
import * as paomoVocab from '../data/paomoVocab';
import * as haizailiulangVocab from '../data/haizailiulangVocab';
import * as yuaiVocab from '../data/yuaiVocab';
import * as yueliangVocab from '../data/yueliangVocab';
import * as yequVocab from '../data/yequVocab';
import * as zhivenVocab from '../data/zhivenVocab';
import * as xiaoxingyunVocab from '../data/xiaoxingyunVocab';
import * as pengyouVocab from '../data/pengyouVocab';
import * as houlaiVocab from '../data/houlaiVocab';
import * as ningxiaVocab from '../data/ningxiaVocab';
import * as qiasiniVocab from '../data/qiasiniVocab';
import * as xinbuliaoVocab from '../data/xinbuliaoVocab';
import * as wohuainianVocab from '../data/wohuainianVocab';
import * as guangnianVocab from '../data/guangnianVocab';
import * as haishanghuaVocab from '../data/haishanghuaVocab';
import * as tongzhuodeniVocab from '../data/tongzhuodeniVocab';
import * as yongqiVocab from '../data/yongqiVocab';
import * as buweishuierzuodegeVocab from '../data/buweishuierzuodegeVocab';
import * as yanhuayilengVocab from '../data/yanhuayilengVocab';
import * as xiangwozheyangderenVocab from '../data/xiangwozheyangderenVocab';
import * as xiaochouVocab from '../data/xiaochouVocab';
import * as huidaoguoquVocab from '../data/huidaoguoquVocab';
import * as geiwoyishougedeshijianVocab from '../data/geiwoyishougedeshijianVocab';
import * as qimiaonengligesVocab from '../data/qimiaonengligesVocab';
import * as niyaodequannazousVocab from '../data/niyaodequannazousVocab';

// 视频ID到词汇数据模块的映射
const vocabModules: Record<string, {
  getVocabForSentence: (sentenceIndex: number) => WordAnalysis[];
  getAllVocab: () => WordAnalysis[];
}> = {
  'OMVlGjmppeY': tianmimiVocab, // 甜蜜蜜
  'wk9R0ugm5AE': pingfanVocab,  // 平凡之路
  'PjrsETvz7QQ': waipoVocab,    // 外婆的澎湖湾
  '0P0aApWogd0': liangzhilaohuVocab, // 两只老虎
  '_WTao2TJ2C8': yishanyishanVocab,  // 一闪一闪亮晶晶
  'mGeiABBB5f8': paomoVocab,    // 泡沫
  'G_uWYkLtiwI': haizailiulangVocab, // 还在流浪
  'fa0naBdR_q0': yuaiVocab,     // 雨爱
  'FhIXtvJbr3o': yueliangVocab, // 月亮代表我的心
  'OyDYW8mZXXg': yequVocab,     // 夜曲
  'KSSWVSpuf4E': zhivenVocab,   // 指纹
  '4DNi2UTOAdw': xiaoxingyunVocab, // 小幸运
  '6lbPgfKK7m4': pengyouVocab,   // 朋友
  't0igPuDjYUE': houlaiVocab,   // 后来
  'MmtVl9CssYE': ningxiaVocab,  // 宁夏
  '3QfpuxVpTFo': xinbuliaoVocab, // 新不了情
  'w2_FycTdzVI': qiasiniVocab,  // 恰似你的温柔
  '1hVkS2ldRhw': wohuainianVocab, // 我怀念的
  'HjPGELNH-00': guangnianVocab, // 光年之外
  'dkak-3Ej6iE': haishanghuaVocab, // 海上花
  'xqYMWyOpSFI': tongzhuodeniVocab, // 同桌的你
  'EaJM58fOsSQ': yongqiVocab, // 勇气
  '5V_aWacv6-Q': buweishuierzuodegeVocab, // 不为谁而作的歌
  'WqN-zGDV2uw': yanhuayilengVocab, // 烟花易冷
  'dim33vVuBQ0': xiangwozheyangderenVocab, // 像我这样的人
  'ZHGN3ViWrns': xiaochouVocab, // 消愁
  'lt7BhxrUGfY': huidaoguoquVocab, // 回到过去
  'HtB0Ym9uZXE': geiwoyishougedeshijianVocab, // 给我一首歌的时间
  'me6-2E1BEbA': qimiaonengligesVocab, // 奇妙能力歌
  '9HDHnU-Vl0g': niyaodequannazousVocab, // 你要的全拿走
};

/**
 * 获取指定句子的词汇（根据视频ID动态加载）
 * @param videoId 视频ID
 * @param sentenceIndex 句子索引
 * @returns 词汇列表
 */
export function getVocabForSentence(videoId: string, sentenceIndex: number): WordAnalysis[] {
  const vocabModule = vocabModules[videoId];
  if (vocabModule && typeof vocabModule.getVocabForSentence === 'function') {
    return vocabModule.getVocabForSentence(sentenceIndex);
  }
  // 如果没有找到对应的模块或模块未导出该函数，返回空数组
  return [];
}

/**
 * 获取所有词汇（根据视频ID动态加载）
 * @param videoId 视频ID
 * @returns 所有词汇列表（去重）
 */
export function getAllVocab(videoId: string): WordAnalysis[] {
  const vocabModule = vocabModules[videoId];
  if (vocabModule && typeof vocabModule.getAllVocab === 'function') {
    return vocabModule.getAllVocab();
  }
  // 如果没有找到对应的模块或模块未导出该函数，返回空数组
  return [];
}

