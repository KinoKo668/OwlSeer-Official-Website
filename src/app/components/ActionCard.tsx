import React from 'react';
import { Target, Clock, TrendingUp } from 'lucide-react';

interface ActionCardProps {
  title: string;
  impacts: string[];
  expectedImpact: string;
  effort: string;
  onAddToPlan?: () => void;
  onWhyThis?: () => void;
}

export function ActionCard({
  title,
  impacts,
  expectedImpact,
  effort,
  onAddToPlan,
  onWhyThis,
}: ActionCardProps) {
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Title */}
      <h4 className="text-[#1a1a1a] mb-3" style={{ fontSize: '15px', fontWeight: '600' }}>
        {title}
      </h4>

      {/* Impact chips */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
          Impacts:
        </span>
        {impacts.map((impact, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-full bg-[#f5f5f5] text-[#666666] border border-[#e0e0e0]"
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {impact}
          </span>
        ))}
      </div>

      {/* Expected impact & Effort */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-[#16a34a]">
          <TrendingUp className="w-3.5 h-3.5" />
          <span style={{ fontSize: '12px', fontWeight: '500' }}>{expectedImpact}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#666666]">
          <Clock className="w-3.5 h-3.5" />
          <span style={{ fontSize: '12px', fontWeight: '500' }}>{effort}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onAddToPlan}
          className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors flex items-center gap-2"
          style={{ fontSize: '13px', fontWeight: '600' }}
        >
          <Target className="w-4 h-4" />
          <span>Add to plan</span>
        </button>
        <button
          onClick={onWhyThis}
          className="text-[#10b981] hover:text-[#059669] transition-colors"
          style={{ fontSize: '13px', fontWeight: '600' }}
        >
          Why this
        </button>
      </div>
    </div>
  );
}
