import React from 'react';
import { Users, DollarSign, Eye, Activity, Info } from 'lucide-react';
import { DynamicKPICard } from './DynamicKPICard';

interface KPIData {
  metricName: string;
  value: string | number;
  delta: number;
  insight: string;
  icon?: React.ReactNode;
  derivedLabel?: string;
}

interface DynamicKPIGridProps {
  kpis?: KPIData[];
}

export function DynamicKPIGrid({ kpis }: DynamicKPIGridProps) {
  const defaultKPIs: KPIData[] = [
    {
      metricName: 'Follower Growth',
      value: '+1,245',
      delta: 18,
      insight: 'Consistent posting schedule driving steady growth.',
      icon: <Users className="w-4 h-4 text-[#666666]" />,
    },
    {
      metricName: 'Deal Count',
      value: '3',
      delta: -25,
      insight: 'Lower deal volume this week; focus on outreach next week.',
      icon: <DollarSign className="w-4 h-4 text-[#666666]" />,
    },
    {
      metricName: 'Weekly Views',
      value: '128.5K',
      delta: 22,
      insight: 'Distribution improved as hooks stabilized across posts.',
      icon: <Eye className="w-4 h-4 text-[#666666]" />,
    },
    {
      metricName: 'Engagement Rate',
      value: '6.3%',
      delta: -8,
      insight: 'Comments dipped; strengthen CTA prompts in the first 5 seconds.',
      icon: <Activity className="w-4 h-4 text-[#666666]" />,
      derivedLabel: 'Derived from likes/comments/shares/views',
    },
  ];

  const displayKPIs = kpis || defaultKPIs;

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '600' }}>
          Key metrics
        </span>
        <span className="text-[#999999]" style={{ fontSize: '12px' }}>
          (auto-selected)
        </span>
        {/* Data Coverage Tooltip */}
        <div className="relative group">
          <Info className="w-3.5 h-3.5 text-[#999999] cursor-help" />
          <div className="absolute left-0 top-full mt-2 w-64 bg-[#1a1a1a] text-white rounded-lg shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <p style={{ fontSize: '12px', lineHeight: '1.5' }}>
              Metrics are selected based on your goals and available data. Some metrics may be derived.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayKPIs.slice(0, 4).map((kpi, i) => (
          <DynamicKPICard key={i} {...kpi} />
        ))}
      </div>
    </div>
  );
}