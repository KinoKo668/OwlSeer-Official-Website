import React from 'react';
import { Info, TrendingUp, TrendingDown, Minus, ArrowRight, AlertCircle } from 'lucide-react';

interface GoalRowProps {
  name: string;
  description: string;
  actual: string;
  target: string;
  percentage: number;
  trend: 'accelerating' | 'stable' | 'declining';
  tooltip: string;
  warningNote?: string;
  onViewDrivers?: () => void;
}

export function GoalRow({
  name,
  description,
  actual,
  target,
  percentage,
  trend,
  tooltip,
  warningNote,
  onViewDrivers,
}: GoalRowProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  // Progress bar color based on percentage
  const getProgressColor = () => {
    if (percentage >= 80) return '#10b981'; // green
    if (percentage >= 60) return '#f59e0b'; // amber
    return '#dc2626'; // red
  };

  const getProgressBg = () => {
    if (percentage >= 80) return 'bg-[#d1fae5]';
    if (percentage >= 60) return 'bg-[#fef3c7]';
    return 'bg-[#fee2e2]';
  };

  // Trend configuration
  const trendConfig = {
    accelerating: {
      label: 'Accelerating',
      icon: TrendingUp,
      bg: 'bg-[#d1fae5]',
      text: 'text-[#065f46]',
      border: 'border-[#a7f3d0]',
    },
    stable: {
      label: 'Stable',
      icon: Minus,
      bg: 'bg-[#f5f5f5]',
      text: 'text-[#666666]',
      border: 'border-[#e0e0e0]',
    },
    declining: {
      label: 'Declining',
      icon: TrendingDown,
      bg: 'bg-[#fee2e2]',
      text: 'text-[#991b1b]',
      border: 'border-[#fecaca]',
    },
  };

  const currentTrend = trendConfig[trend];
  const TrendIcon = currentTrend.icon;

  return (
    <div className="py-4 border-b border-[#e0e0e0] last:border-b-0">
      <div className="grid grid-cols-12 gap-4 items-start mb-3">
        {/* LEFT: Goal info (4 cols) */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-start gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {name}
                </h4>
                {/* Info icon with tooltip */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="text-[#999999] hover:text-[#666666] transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                  {showTooltip && (
                    <div className="absolute left-0 top-full mt-1 w-64 bg-[#1a1a1a] text-white px-3 py-2 rounded-lg shadow-xl z-10" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                      {tooltip}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '400' }}>
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* MIDDLE: Progress (4 cols) */}
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '700' }}>
              {actual}
            </span>
            <span className="text-[#999999]" style={{ fontSize: '13px', fontWeight: '400' }}>
              / {target}
            </span>
          </div>
          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className={`flex-1 h-2 ${getProgressBg()} rounded-full overflow-hidden`}>
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${Math.min(percentage, 100)}%`,
                  backgroundColor: getProgressColor(),
                }}
              />
            </div>
            <span
              className="flex-shrink-0 w-10 text-right"
              style={{
                fontSize: '13px',
                fontWeight: '700',
                color: getProgressColor(),
              }}
            >
              {percentage}%
            </span>
          </div>
        </div>

        {/* RIGHT: Trend + Drivers (4 cols) */}
        <div className="col-span-12 md:col-span-4 flex items-center justify-between gap-3">
          {/* Trend pill */}
          <span
            className={`px-2.5 py-1 rounded-full border ${currentTrend.bg} ${currentTrend.text} ${currentTrend.border} flex items-center gap-1.5 flex-shrink-0`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            <TrendIcon className="w-3 h-3" />
            <span>{currentTrend.label}</span>
          </span>

          {/* View drivers link */}
          <button
            onClick={onViewDrivers}
            className="text-[#10b981] hover:text-[#059669] transition-colors flex items-center gap-1 flex-shrink-0"
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            <span>View drivers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Warning note (if present) */}
      {warningNote && (
        <div className="flex items-start gap-2 mt-2 p-2.5 bg-[#fef3c7] border border-[#fde68a] rounded-lg">
          <AlertCircle className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" />
          <p className="text-[#92400e] flex-1" style={{ fontSize: '11px', fontWeight: '500', lineHeight: '1.4' }}>
            {warningNote}
          </p>
        </div>
      )}
    </div>
  );
}
