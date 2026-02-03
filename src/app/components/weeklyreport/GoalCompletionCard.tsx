import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface GoalBreakdown {
  label: string;
  current: number;
  target: number;
  percentage: number;
}

interface GoalCompletionCardProps {
  completionRate?: number;
  status?: 'On track' | 'At risk' | 'Completed';
  breakdown?: GoalBreakdown[];
  weekOverWeekChange?: number;
}

export function GoalCompletionCard({
  completionRate = 72,
  status = 'On track',
  breakdown = [
    { label: 'Followers', current: 1200, target: 1500, percentage: 80 },
    { label: 'Views', current: 45000, target: 75000, percentage: 60 },
    { label: 'Posts', current: 4, target: 5, percentage: 80 },
  ],
  weekOverWeekChange = 12,
}: GoalCompletionCardProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'On track':
        return 'bg-[#D1FAE5] text-[#059669] border-[#6EE7B7]';
      case 'At risk':
        return 'bg-[#FEF3C7] text-[#D97706] border-[#FCD34D]';
      case 'Completed':
        return 'bg-[#CCFBF1] text-[#0F766E] border-[#5EEAD4]';
      default:
        return 'bg-[#F3F4F6] text-[#6B7280] border-[#D1D5DB]';
    }
  };

  return (
    <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
          Goal Completion
        </h3>
      </div>

      {/* Progress Ring/Bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#111827]" style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1' }}>
            {completionRate}%
          </span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#CCFBF1] rounded-full">
            {weekOverWeekChange >= 0 ? (
              <TrendingUp className="w-3.5 h-3.5 text-[#0F766E]" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5 text-[#DC2626]" />
            )}
            <span
              className={weekOverWeekChange >= 0 ? 'text-[#0F766E]' : 'text-[#DC2626]'}
              style={{ fontSize: '12px', fontWeight: '700' }}
            >
              {weekOverWeekChange >= 0 ? '+' : ''}{weekOverWeekChange}% vs last week
            </span>
          </div>
        </div>
        <div className="h-3 bg-[#F8F9FA] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0F766E] to-[#14B8A6] rounded-full transition-all duration-500"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Mini Breakdown */}
      <div className="space-y-3">
        {breakdown.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#374151]" style={{ fontSize: '13px', fontWeight: '500' }}>
                  {item.label}
                </span>
                <span className="text-[#111827]" style={{ fontSize: '13px', fontWeight: '600' }}>
                  {item.current.toLocaleString()} / {item.target.toLocaleString()}
                </span>
              </div>
              <div className="h-1.5 bg-[#F8F9FA] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.percentage >= 80
                      ? 'bg-[#059669]'
                      : item.percentage >= 50
                      ? 'bg-[#D97706]'
                      : 'bg-[#DC2626]'
                  }`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
            <span
              className="ml-3 text-[#374151] font-mono"
              style={{ fontSize: '12px', fontWeight: '600' }}
            >
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}