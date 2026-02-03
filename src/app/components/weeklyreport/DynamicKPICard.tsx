import React from 'react';
import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

interface DynamicKPICardProps {
  metricName: string;
  value: string | number;
  delta: number;
  insight: string;
  icon?: React.ReactNode;
  derivedLabel?: string;
}

export function DynamicKPICard({
  metricName,
  value,
  delta,
  insight,
  icon,
  derivedLabel,
}: DynamicKPICardProps) {
  const isPositive = delta >= 0;

  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            {icon && (
              <div className="w-7 h-7 rounded-lg bg-[#fafafa] flex items-center justify-center">
                {icon}
              </div>
            )}
            <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '600' }}>
              {metricName}
            </span>
          </div>
          {derivedLabel && (
            <span className="text-[#999999] ml-9" style={{ fontSize: '10px', lineHeight: '1.2' }}>
              {derivedLabel}
            </span>
          )}
        </div>
        <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${
          isPositive ? 'bg-[#e8f5e9]' : 'bg-[#ffebee]'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-3 h-3 text-[#2e7d32]" />
          ) : (
            <TrendingDown className="w-3 h-3 text-[#c62828]" />
          )}
          <span
            className={isPositive ? 'text-[#2e7d32]' : 'text-[#c62828]'}
            style={{ fontSize: '11px', fontWeight: '700' }}
          >
            {isPositive ? '+' : ''}{delta}%
          </span>
        </div>
      </div>

      {/* Value */}
      <div className="mb-3">
        <div className="text-[#1a1a1a]" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1' }}>
          {value}
        </div>
      </div>

      {/* AI Insight */}
      <div className="flex items-start gap-2 bg-[#fafafa] rounded-lg p-2.5 border border-[#f0f0f0]">
        <Sparkles className="w-3.5 h-3.5 text-[#404040] flex-shrink-0 mt-0.5" />
        <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.4' }}>
          {insight}
        </p>
      </div>
    </div>
  );
}