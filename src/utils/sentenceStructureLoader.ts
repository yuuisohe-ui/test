// 统一的句式结构数据加载器
// 根据视频ID动态加载对应的句式结构数据，确保所有视频使用相同的接口

import { SentenceStructure } from '../data/tianmimiSentenceStructures';
import * as tianmimiSentenceStructures from '../data/tianmimiSentenceStructures';
import * as pingfanSentenceStructures from '../data/pingfanSentenceStructures';
import * as waipoSentenceStructures from '../data/waipoSentenceStructures';
import * as liangzhilaohuSentenceStructures from '../data/liangzhilaohuSentenceStructures';
import * as yishanyishanSentenceStructures from '../data/yishanyishanSentenceStructures';
import * as paomoSentenceStructures from '../data/paomoSentenceStructures';
import * as haizailiulangSentenceStructures from '../data/haizailiulangSentenceStructures';
import * as yuaiSentenceStructures from '../data/yuaiSentenceStructures';
import * as yueliangSentenceStructures from '../data/yueliangSentenceStructures';
import * as yequSentenceStructures from '../data/yequSentenceStructures';
import * as zhivenSentenceStructures from '../data/zhivenSentenceStructures';
import * as xiaoxingyunSentenceStructures from '../data/xiaoxingyunSentenceStructures';
import * as pengyouSentenceStructures from '../data/pengyouSentenceStructures';
import * as houlaiSentenceStructures from '../data/houlaiSentenceStructures';
import * as ningxiaSentenceStructures from '../data/ningxiaSentenceStructures';
import * as qiasiniSentenceStructures from '../data/qiasiniSentenceStructures';
import * as xinbuliaoSentenceStructures from '../data/xinbuliaoSentenceStructures';
import * as wohuainianSentenceStructures from '../data/wohuainianSentenceStructures';
import * as guangnianSentenceStructures from '../data/guangnianSentenceStructures';
import * as haishanghuaSentenceStructures from '../data/haishanghuaSentenceStructures';
import * as tongzhuodeniSentenceStructures from '../data/tongzhuodeniSentenceStructures';
import * as yongqiSentenceStructures from '../data/yongqiSentenceStructures';
import * as buweishuierzuodegeSentenceStructures from '../data/buweishuierzuodegeSentenceStructures';
import * as yanhuayilengSentenceStructures from '../data/yanhuayilengSentenceStructures';
import * as xiangwozheyangderenSentenceStructures from '../data/xiangwozheyangderenSentenceStructures';
import * as xiaochouSentenceStructures from '../data/xiaochouSentenceStructures';
import * as huidaoguoquSentenceStructures from '../data/huidaoguoquSentenceStructures';
import * as geiwoyishougedeshijianSentenceStructures from '../data/geiwoyishougedeshijianSentenceStructures';
import * as qimiaonengligesSentenceStructures from '../data/qimiaonengligesSentenceStructures';
import * as niyaodequannazousSentenceStructures from '../data/niyaodequannazousSentenceStructures';

// 视频ID到句式结构模块的映射
const sentenceStructureModules: Record<string, {
  getSentenceStructure: (sentenceIndex: number) => SentenceStructure | undefined;
}> = {
  'OMVlGjmppeY': tianmimiSentenceStructures, // 甜蜜蜜
  'wk9R0ugm5AE': pingfanSentenceStructures,  // 平凡之路
  'PjrsETvz7QQ': waipoSentenceStructures,   // 外婆的澎湖湾
  '0P0aApWogd0': liangzhilaohuSentenceStructures, // 两只老虎
  '_WTao2TJ2C8': yishanyishanSentenceStructures,  // 一闪一闪亮晶晶
  'mGeiABBB5f8': paomoSentenceStructures,   // 泡沫
  'G_uWYkLtiwI': haizailiulangSentenceStructures, // 还在流浪
  'fa0naBdR_q0': yuaiSentenceStructures,    // 雨爱
  'FhIXtvJbr3o': yueliangSentenceStructures, // 月亮代表我的心
  'OyDYW8mZXXg': yequSentenceStructures,     // 夜曲
  'KSSWVSpuf4E': zhivenSentenceStructures,  // 指纹
  '4DNi2UTOAdw': xiaoxingyunSentenceStructures, // 小幸运
  '6lbPgfKK7m4': pengyouSentenceStructures,  // 朋友
  't0igPuDjYUE': houlaiSentenceStructures,  // 后来
  'MmtVl9CssYE': ningxiaSentenceStructures, // 宁夏
  '3QfpuxVpTFo': xinbuliaoSentenceStructures, // 新不了情
  'w2_FycTdzVI': qiasiniSentenceStructures, // 恰似你的温柔
  '1hVkS2ldRhw': wohuainianSentenceStructures, // 我怀念的
  'HjPGELNH-00': guangnianSentenceStructures, // 光年之外
  'dkak-3Ej6iE': haishanghuaSentenceStructures, // 海上花
  'xqYMWyOpSFI': tongzhuodeniSentenceStructures, // 同桌的你
  'EaJM58fOsSQ': yongqiSentenceStructures, // 勇气
  '5V_aWacv6-Q': buweishuierzuodegeSentenceStructures, // 不为谁而作的歌
  'WqN-zGDV2uw': yanhuayilengSentenceStructures, // 烟花易冷
  'dim33vVuBQ0': xiangwozheyangderenSentenceStructures, // 像我这样的人
  'ZHGN3ViWrns': xiaochouSentenceStructures, // 消愁
  'lt7BhxrUGfY': huidaoguoquSentenceStructures, // 回到过去
  'HtB0Ym9uZXE': geiwoyishougedeshijianSentenceStructures, // 给我一首歌的时间
  'me6-2E1BEbA': qimiaonengligesSentenceStructures, // 奇妙能力歌
  '9HDHnU-Vl0g': niyaodequannazousSentenceStructures, // 你要的全拿走
};

/**
 * 获取指定句子的句式结构（根据视频ID动态加载）
 * @param videoId 视频ID
 * @param sentenceIndex 句子索引
 * @returns 句式结构（如果存在）
 */
export function getSentenceStructure(videoId: string, sentenceIndex: number): SentenceStructure | undefined {
  const structureModule = sentenceStructureModules[videoId];
  if (structureModule && typeof structureModule.getSentenceStructure === 'function') {
    return structureModule.getSentenceStructure(sentenceIndex);
  }
  // 如果没有找到对应的模块或模块未导出该函数，返回undefined
  return undefined;
}

