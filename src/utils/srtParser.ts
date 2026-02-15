// SRT字幕解析工具

export interface SubtitleItem {
  index: number;
  startTime: number; // 秒数（带毫秒精度）
  endTime: number;   // 秒数（带毫秒精度）
  text: string;       // 字幕文本
}

/**
 * 解析SRT格式的时间戳
 * 格式：00:00:08,480 --> 00:00:15,960
 */
function parseSRTTime(timeString: string): number {
  const match = timeString.match(/(\d{2}):(\d{2}):(\d{2})[,.](\d{3})/);
  if (!match) return 0;
  
  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const seconds = parseInt(match[3], 10);
  const milliseconds = parseInt(match[4], 10);
  
  return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
}

/**
 * 解析SRT文件内容
 * @param srtContent SRT文件内容
 * @param timeOffset 时间偏移量（秒），正数表示延后，负数表示提前
 */
export function parseSRT(srtContent: string, timeOffset: number = 0): SubtitleItem[] {
  const items: SubtitleItem[] = [];
  
  // 按空行分割成块
  const blocks = srtContent.trim().split(/\n\s*\n/);
  
  for (const block of blocks) {
    const lines = block.trim().split('\n').map(line => line.trim()).filter(line => line);
    if (lines.length < 3) continue;
    
    try {
      const index = parseInt(lines[0], 10);
      if (isNaN(index)) continue;
      
      // 解析时间戳行：00:00:08,480 --> 00:00:15,960
      const timeLine = lines[1];
      const timeMatch = timeLine.match(/(\d{2}:\d{2}:\d{2}[,.]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[,.]\d{3})/);
      
      if (!timeMatch) continue;
      
      let startTime = parseSRTTime(timeMatch[1]);
      let endTime = parseSRTTime(timeMatch[2]);
      
      // 应用时间偏移（提前1秒用负数）
      startTime = Math.max(0, startTime + timeOffset);
      endTime = Math.max(0, endTime + timeOffset);
      
      const text = lines.slice(2).join(' ').trim();
      
      if (text) {
        items.push({
          index,
          startTime,
          endTime,
          text,
        });
      }
    } catch (error) {
      console.warn('解析SRT块失败:', error, block);
      continue;
    }
  }
  
  return items.sort((a, b) => a.startTime - b.startTime);
}

/**
 * 将时间戳转换为SRT格式
 */
export function formatTimeToSRT(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`;
}

