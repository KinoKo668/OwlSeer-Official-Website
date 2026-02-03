import React from 'react';
import { ArrowRight, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AdjustedGoalRowProps {
  goal: string;
  newTarget: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  reason: string;
  onWhyClick?: () => void;
}

export function AdjustedGoalRow({
  goal,
  newTarget,
  change,
  changeType,
  reason,
  onWhyClick,
}: AdjustedGoalRowProps) {
  const getChangeIcon = () => {
    if (changeType === 'increase') {
      return <TrendingUp className="w-3.5 h-3.5 text-[#10b981]" />;
    } else if (changeType === 'decrease') {
      return <TrendingDown className="w-3.5 h-3.5 text-[#dc2626]" />;
    } else {
      return <Minus className="w-3.5 h-3.5 text-[#999999]" />;
    }
  };

  const getChangeColor = () => {
    if (changeType === 'increase') return 'text-[#10b981]';
    if (changeType === 'decrease') return 'text-[#dc2626]';
    return 'text-[#999999]';
  };

  return (
    <div className="flex items-center gap-4 py-3 border-b border-[#e0e0e0] last:border-b-0">
      {/* Goal name */}
      <div className="w-24 flex-shrink-0">
        <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
          {goal}
        </span>
      </div>

      {/* New target */}
      <div className="w-20 flex-shrink-0">
        <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
          {newTarget}
        </span>
      </div>

      {/* Change */}
      <div className="w-20 flex-shrink-0 flex items-center gap-1.5">
        {getChangeIcon()}
        <span className={getChangeColor()} style={{ fontSize: '12px', fontWeight: '600' }}>
          {change}
        </span>
      </div>

      {/* Reason */}
      <div className="flex-1">
        <span className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.4' }}>
          {reason}
        </span>
      </div>

      {/* Why link */}
      <button
        onClick={onWhyClick}
        className="flex-shrink-0 text-[#10b981] hover:text-[#059669] transition-colors flex items-center gap-1"
        style={{ fontSize: '12px', fontWeight: '600' }}
      >
        <span>Why</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}
