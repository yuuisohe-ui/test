// 一闪一闪亮晶晶韩语翻译数据
export const yishanyishanKoreanTranslations: Record<number, string> = {
  1: "반짝반짝 작은 별",
  2: "하늘 가득히 작은 별들이 있네",
  3: "하늘에 걸려 빛을 내며",
  4: "마치 수많은 작은 눈 같아",
  5: "반짝반짝 작은 별",
  6: "하늘 가득히 작은 별들이 있네",
  7: "반짝반짝 작은 별",
  8: "하늘 가득히 작은 별들이 있네",
  9: "하늘에 걸려 빛을 내며",
  10: "마치 수많은 작은 눈 같아",
  11: "반짝반짝 작은 별",
  12: "하늘 가득히 작은 별들이 있네",
  13: "반짝반짝 작은 별",
  14: "하늘 가득히 작은 별들이 있네"
};

// 获取指定句子的韩语翻译
export function getKoreanTranslation(sentenceIndex: number): string {
  return yishanyishanKoreanTranslations[sentenceIndex] || '';
}

