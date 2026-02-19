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
}

export const SpeechRadarChart = ({ data, onClose }: SpeechRadarChartProps) => {
  return (
    <div className="w-full relative">
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fontSize: 11, fill: '#4b5563', dy: 5 }}
            className="text-xs"
            style={{ fontSize: '11px' }}
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

