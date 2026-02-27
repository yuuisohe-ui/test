import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface RadarChartData {
  subject: string;
  score: number;
  fullMark: number;
}

interface RadarChartProps {
  data: RadarChartData[];
}

interface SpeechRadarChartProps extends RadarChartProps {
  onClose?: () => void;
  /** 紧凑模式：减小高度与内外边距，用于示例页反馈卡 */
  compact?: boolean;
}

/** 根据 subject 文本微调雷达轴标签位置：左侧(말하기 유창도)往右移、右侧(성조 표현)往左移，使两行字完全露出 */
function getTickDx(subject: string): number {
  if (typeof subject !== 'string') return 0;
  if (subject.includes('성조')) return -24; // 右侧标签再往左一点
  if (subject.includes('유창도') || subject.includes('말하기')) return 44;  // 左侧标签再往右（约 3 字符宽度）
  return 0;
}

export const SpeechRadarChart = ({ data, onClose, compact }: SpeechRadarChartProps) => {
  const height = compact ? 140 : 260;
  const margin = compact ? { top: 4, right: 4, bottom: 4, left: 4 } : { top: 16, right: 28, bottom: 8, left: 28 };
  return (
    <div className="w-full h-full min-h-0 relative flex items-center justify-center">
      <ResponsiveContainer width="100%" height={height}>
        <RadarChart data={data} margin={margin}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="subject"
            tick={(props: Record<string, unknown>) => {
              const p = props.payload as { value?: string; subject?: string } | undefined;
              const subject = (p?.subject ?? p?.value ?? '') as string;
              const dx = getTickDx(subject);
              const textAnchor = ((props.textAnchor as string) ?? 'middle') as 'start' | 'middle' | 'end';
              const x = Number(props.x) || 0;
              const y = Number(props.y) || 0;
              return (
                <g transform={`translate(${x},${y})`}>
                  <text textAnchor={textAnchor} fill="#4b5563" fontSize={11} dy={5} style={{ lineHeight: 0.85 }} x={dx}>
                    {subject}
                  </text>
                </g>
              );
            }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]}
            tick={{ fontSize: 9, fill: '#9ca3af' }}
            tickCount={6}
          />
          <Radar
            name="评分"
            dataKey="score"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

