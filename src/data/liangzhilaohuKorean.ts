// 两只老虎韩语翻译数据
export const liangzhilaohuKoreanTranslations: Record<number, string> = {
  1: "호랑이 두 마리, 호랑이 두 마리",
  2: "정말 빨리 달리네, 정말 빨리 달리네",
  3: "한 마리는 눈이 없고, 한 마리는 꼬리가 없네",
  4: "정말 이상하네! 정말 이상하네!",
  5: "호랑이 두 마리, 호랑이 두 마리",
  6: "정말 빨리 달리네, 정말 빨리 달리네",
  7: "한 마리는 눈이 없고, 한 마리는 꼬리가 없네",
  8: "정말 이상하네! 정말 이상하네!"
};

// 获取指定句子的韩语翻译
export function getKoreanTranslation(sentenceIndex: number): string {
  return liangzhilaohuKoreanTranslations[sentenceIndex] || '';
}

