// 统一的韩语翻译数据加载器
// 根据视频ID动态加载对应的韩语翻译数据，确保所有视频使用相同的接口

import * as tianmimiKorean from '../data/tianmimiKorean';
import * as pingfanKorean from '../data/pingfanKorean';
import * as waipoKorean from '../data/waipoKorean';
import * as liangzhilaohuKorean from '../data/liangzhilaohuKorean';
import * as yishanyishanKorean from '../data/yishanyishanKorean';
import * as paomoKorean from '../data/paomoKorean';
import * as haizailiulangKorean from '../data/haizailiulangKorean';
import * as yuaiKorean from '../data/yuaiKorean';
import * as yueliangKorean from '../data/yueliangKorean';
import * as yequKorean from '../data/yequKorean';
import * as zhivenKorean from '../data/zhivenKorean';
import * as xiaoxingyunKorean from '../data/xiaoxingyunKorean';
import * as pengyouKorean from '../data/pengyouKorean';
import * as houlaiKorean from '../data/houlaiKorean';
import * as ningxiaKorean from '../data/ningxiaKorean';
import * as qiasiniKorean from '../data/qiasiniKorean';
import * as xinbuliaoKorean from '../data/xinbuliaoKorean';
import * as wohuainianKorean from '../data/wohuainianKorean';
import * as guangnianKorean from '../data/guangnianKorean';
import * as haishanghuaKorean from '../data/haishanghuaKorean';
import * as tongzhuodeniKorean from '../data/tongzhuodeniKorean';
import * as yongqiKorean from '../data/yongqiKorean';
import * as buweishuierzuodegeKorean from '../data/buweishuierzuodegeKorean';
import * as yanhuayilengKorean from '../data/yanhuayilengKorean';
import * as xiangwozheyangderenKorean from '../data/xiangwozheyangderenKorean';
import * as xiaochouKorean from '../data/xiaochouKorean';
import * as huidaoguoquKorean from '../data/huidaoguoquKorean';
import * as geiwoyishougedeshijianKorean from '../data/geiwoyishougedeshijianKorean';
import * as qimiaonengligesKorean from '../data/qimiaonengligesKorean';
import * as niyaodequannazousKorean from '../data/niyaodequannazousKorean';

// 视频ID到韩语翻译模块的映射
const koreanTranslationModules: Record<string, {
  getKoreanTranslation: (sentenceIndex: number) => string;
}> = {
  'OMVlGjmppeY': tianmimiKorean, // 甜蜜蜜
  'wk9R0ugm5AE': pingfanKorean,   // 平凡之路
  'PjrsETvz7QQ': waipoKorean,    // 外婆的澎湖湾
  '0P0aApWogd0': liangzhilaohuKorean, // 两只老虎
  '_WTao2TJ2C8': yishanyishanKorean,  // 一闪一闪亮晶晶
  'mGeiABBB5f8': paomoKorean,    // 泡沫
  'G_uWYkLtiwI': haizailiulangKorean, // 还在流浪
  'fa0naBdR_q0': yuaiKorean,     // 雨爱
  'FhIXtvJbr3o': yueliangKorean, // 月亮代表我的心
  'OyDYW8mZXXg': yequKorean,     // 夜曲
  'KSSWVSpuf4E': zhivenKorean,   // 指纹
  '4DNi2UTOAdw': xiaoxingyunKorean, // 小幸运
  '6lbPgfKK7m4': pengyouKorean,   // 朋友
  't0igPuDjYUE': houlaiKorean,   // 后来
  'MmtVl9CssYE': ningxiaKorean,  // 宁夏
  '3QfpuxVpTFo': xinbuliaoKorean, // 新不了情
  'w2_FycTdzVI': qiasiniKorean,  // 恰似你的温柔
  '1hVkS2ldRhw': wohuainianKorean, // 我怀念的
  'HjPGELNH-00': guangnianKorean, // 光年之外
  'dkak-3Ej6iE': haishanghuaKorean, // 海上花
  'xqYMWyOpSFI': tongzhuodeniKorean, // 同桌的你
  'EaJM58fOsSQ': yongqiKorean, // 勇气
  '5V_aWacv6-Q': buweishuierzuodegeKorean, // 不为谁而作的歌
  'WqN-zGDV2uw': yanhuayilengKorean, // 烟花易冷
  'dim33vVuBQ0': xiangwozheyangderenKorean, // 像我这样的人
  'ZHGN3ViWrns': xiaochouKorean, // 消愁
  'lt7BhxrUGfY': huidaoguoquKorean, // 回到过去
  'HtB0Ym9uZXE': geiwoyishougedeshijianKorean, // 给我一首歌的时间
  'me6-2E1BEbA': qimiaonengligesKorean, // 奇妙能力歌
  '9HDHnU-Vl0g': niyaodequannazousKorean, // 你要的全拿走
};

/**
 * 获取指定句子的韩语翻译（根据视频ID动态加载）
 * @param videoId 视频ID
 * @param sentenceIndex 句子索引
 * @returns 韩语翻译
 */
export function getKoreanTranslation(videoId: string, sentenceIndex: number): string {
  const koreanModule = koreanTranslationModules[videoId];
  if (koreanModule) {
    return koreanModule.getKoreanTranslation(sentenceIndex);
  }
  // 如果没有找到对应的模块，返回空字符串
  return '';
}

