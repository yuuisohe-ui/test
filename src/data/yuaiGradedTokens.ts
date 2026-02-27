/**
 * 雨爱歌词按句的 token 分级数据（HSK 1–6）
 * 来源：基于 yuaiVocabAnalysis 的 level 映射（beginner→1-2, intermediate→3-4, advanced→5-6），
 * 一次生成后静态使用，无需再调 API。
 */
export interface GradedToken {
  text: string;
  pinyin: string;
  hskLevel: number;
}

/** 每句歌词的 token 列表（句序号 1-based） */
export const yuaiGradedLines: Record<number, GradedToken[]> = {
  1: [
    { text: "窗外", pinyin: "chuāng wài", hskLevel: 2 },
    { text: "的", pinyin: "de", hskLevel: 2 },
    { text: "天气", pinyin: "tiān qì", hskLevel: 1 },
  ],
  2: [
    { text: "就像", pinyin: "jiù xiàng", hskLevel: 2 },
    { text: "是", pinyin: "shì", hskLevel: 1 },
    { text: "你", pinyin: "nǐ", hskLevel: 1 },
    { text: "多变", pinyin: "duō biàn", hskLevel: 2 },
    { text: "的", pinyin: "de", hskLevel: 2 },
    { text: "表情", pinyin: "biǎo qíng", hskLevel: 3 },
  ],
  3: [
    { text: "下雨", pinyin: "xià yǔ", hskLevel: 2 },
    { text: "了", pinyin: "le", hskLevel: 1 },
    { text: "雨", pinyin: "yǔ", hskLevel: 2 },
    { text: "陪我", pinyin: "péi wǒ", hskLevel: 2 },
    { text: "哭泣", pinyin: "kū qì", hskLevel: 3 },
  ],
  4: [
    { text: "看不清", pinyin: "kàn bù qīng", hskLevel: 3 },
    { text: "我", pinyin: "wǒ", hskLevel: 1 },
    { text: "也", pinyin: "yě", hskLevel: 1 },
    { text: "不想", pinyin: "bù xiǎng", hskLevel: 2 },
    { text: "看清", pinyin: "kàn qīng", hskLevel: 2 },
  ],
  5: [
    { text: "离开", pinyin: "lí kāi", hskLevel: 3 },
    { text: "你", pinyin: "nǐ", hskLevel: 1 },
    { text: "我", pinyin: "wǒ", hskLevel: 1 },
    { text: "安静", pinyin: "ān jìng", hskLevel: 2 },
    { text: "的", pinyin: "de", hskLevel: 2 },
    { text: "抽离", pinyin: "chōu lí", hskLevel: 2 },
  ],
  6: [
    { text: "不忍", pinyin: "bù rěn", hskLevel: 2 },
    { text: "揭晓", pinyin: "jiē xiǎo", hskLevel: 2 },
    { text: "的", pinyin: "de", hskLevel: 2 },
    { text: "剧情", pinyin: "jù qíng", hskLevel: 5 },
  ],
  7: [
    { text: "我的", pinyin: "wǒ de", hskLevel: 1 },
    { text: "泪", pinyin: "lèi", hskLevel: 3 },
    { text: "流", pinyin: "liú", hskLevel: 2 },
    { text: "在", pinyin: "zài", hskLevel: 1 },
    { text: "心里", pinyin: "xīn lǐ", hskLevel: 2 },
    { text: "学会", pinyin: "xué huì", hskLevel: 2 },
    { text: "放弃", pinyin: "fàng qì", hskLevel: 3 },
  ],
  8: [
    { text: "听", pinyin: "tīng", hskLevel: 1 },
    { text: "雨", pinyin: "yǔ", hskLevel: 2 },
    { text: "的", pinyin: "de", hskLevel: 2 },
    { text: "声音", pinyin: "shēng yīn", hskLevel: 2 },
    { text: "一滴滴", pinyin: "yī dī dī", hskLevel: 2 },
    { text: "清晰", pinyin: "qīng xī", hskLevel: 5 },
  ],
};

const onlyChinese = (s: string) => s.replace(/[^\u4e00-\u9fff]/g, "");

/** 根据句序号与中文句获取分级 token；若无预置或与句子不符则退回按字默认 2 */
export function getGradedTokensForLine(
  lineNo: number,
  zhSentence: string,
  pinyinFn: (char: string, opts?: { toneType?: string }) => string
): GradedToken[] {
  const preset = yuaiGradedLines[lineNo];
  if (preset && preset.length > 0 && onlyChinese(preset.map((t) => t.text).join("")) === onlyChinese(zhSentence)) {
    return preset;
  }
  return zhSentence
    .split("")
    .filter((c) => /[\u4e00-\u9fff]/.test(c))
    .map((char) => ({
      text: char,
      pinyin: pinyinFn(char, { toneType: "none" }) || "",
      hskLevel: 2,
    }));
}
