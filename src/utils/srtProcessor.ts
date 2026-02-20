// 通用的SRT数据处理工具
// 所有视频都使用这个工具来处理SRT数据，确保格式统一

/**
 * 提取行号和歌词文本
 * 格式：01 歌词内容 或 02 歌词内容
 * @param text 原始文本
 * @returns 行号和歌词文本
 */
export const extractLineNumberAndText = (text: string): { lineNumber: string; lyricText: string } => {
  // 匹配行号格式：01, 02, 03 等（两位数字，后面跟空格）
  const match = text.match(/^(\d{2})\s+(.+)$/);
  if (match) {
    return {
      lineNumber: match[1], // 行号（如 "01"）
      lyricText: match[2],  // 歌词内容（去掉行号后的文本）
    };
  }
  // 如果没有匹配到行号，返回空行号和原文本
  return { lineNumber: '', lyricText: text };
};

/**
 * 繁体字转简体字的映射表（常用字）
 * 注意：这是一个简化版本，如果需要完整转换，建议使用专业的繁简转换库
 */
const traditionalToSimplifiedMap: Record<string, string> = {
  '著': '着',
  '嗎': '吗',
  '驕': '骄',
  '樣': '样',
  '騰': '腾',
  '謎': '谜',
  '聽': '听',
  '過': '过',
  '擁': '拥',
  '轉': '转',
  '飄': '飘',
  '煙': '烟',
  '見': '见',
  '當': '当',
  '會': '会',
  '爛': '烂',
  '對': '对',
  '毀': '毁',
  '遠': '远',
  '離': '离',
  '墮': '堕',
  '邊': '边',
  '掙': '挣',
  '紮': '扎',
  '絕': '绝',
  '望': '望',
  '渴': '渴',
  '麼': '么',
  '奪': '夺',
  '錯': '错',
  '問': '问',
  '個': '个',
  '從': '从',
  '沒': '没',
  '這': '这',
  '風': '风',
  '講': '讲',
  '哪': '哪',
};

/**
 * 将繁体字转换为简体字
 * @param text 繁体文本
 * @returns 简体文本
 */
export const convertTraditionalToSimplified = (text: string): string => {
  let result = text;
  for (const [traditional, simplified] of Object.entries(traditionalToSimplifiedMap)) {
    result = result.replace(new RegExp(traditional, 'g'), simplified);
  }
  return result;
};

/**
 * 处理SRT文本，统一格式
 * 1. 提取行号
 * 2. 转换繁简
 * @param text 原始SRT文本行
 * @returns 处理后的行号和歌词
 */
export const processSRTLine = (text: string): { lineNumber: string; lyricText: string } => {
  // 先提取行号
  const { lineNumber, lyricText } = extractLineNumberAndText(text);
  
  // 转换繁简（如果歌词文本存在）
  const simplifiedLyric = lyricText ? convertTraditionalToSimplified(lyricText) : '';
  
  return {
    lineNumber,
    lyricText: simplifiedLyric || lyricText,
  };
};


