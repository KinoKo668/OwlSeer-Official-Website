import React from 'react';
import { FileText, Info, ChevronUp, ChevronDown, Minus, X } from 'lucide-react';

interface LatestWeeklyReportCardProps {
  variant?: 'normal' | 'loading' | 'empty';
  status?: 'on-track' | 'at-risk' | 'off-track';
  onOpenReport?: () => void;
  onViewPlan?: () => void;
  onViewArchive?: () => void;
  onRegenerate?: () => void;
  onViewIncludedPosts?: () => void;
}

export function LatestWeeklyReportCard({
  variant = 'normal',
  status = 'on-track',
  onOpenReport,
  onViewPlan,
  onViewArchive,
  onRegenerate,
  onViewIncludedPosts,
}: LatestWeeklyReportCardProps) {
  const [showConfidencePopover, setShowConfidencePopover] = React.useState(false);

  // Loading skeleton state
  if (variant === 'loading') {
    return (
      <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 md:p-8 shadow-sm">
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#e0e0e0] rounded" />
              <div className="h-5 w-40 bg-[#e0e0e0] rounded" />
            </div>
            <div className="h-9 w-24 bg-[#e0e0e0] rounded-lg" />
          </div>
          <div className="h-4 w-48 bg-[#e0e0e0] rounded mb-4" />
          <div className="h-6 w-full bg-[#e0e0e0] rounded mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-[#e0e0e0] rounded" />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-32 bg-[#e0e0e0] rounded" />
            <div className="flex items-center gap-3">
              <div className="h-10 w-24 bg-[#e0e0e0] rounded-lg" />
              <div className="h-10 w-28 bg-[#e0e0e0] rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (variant === 'empty') {
    return (
      <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-8 md:p-12 shadow-sm text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <FileText className="w-8 h-8 text-[#999999]" />
          </div>
          <div>
            <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
              No weekly report yet
            </h3>
            <p className="text-[#666666]" style={{ fontSize: '14px' }}>
              Connect an account to generate your first report.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Status pill configuration
  const statusConfig = {
    'on-track': {
      label: 'On track',
      bg: 'bg-[#d1fae5]',
      text: 'text-[#065f46]',
      border: 'border-[#a7f3d0]',
    },
    'at-risk': {
      label: 'At risk',
      bg: 'bg-[#fef3c7]',
      text: 'text-[#92400e]',
      border: 'border-[#fde68a]',
    },
    'off-track': {
      label: 'Off track',
      bg: 'bg-[#fee2e2]',
      text: 'text-[#991b1b]',
      border: 'border-[#fecaca]',
    },
  };

  const currentStatus = statusConfig[status];

  // Normal state with mock data
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-start md:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#10b981]" />
            <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '600' }}>
              Latest weekly report
            </h3>
          </div>
          {/* Status Pill */}
          <span
            className={`px-2.5 py-1 rounded-full border ${currentStatus.bg} ${currentStatus.text} ${currentStatus.border}`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {currentStatus.label}
          </span>
        </div>
        <div className="relative group flex-shrink-0">
          <button
            onClick={onRegenerate}
            className="px-4 py-2 text-[#666666] bg-white border border-[#e0e0e0] rounded-lg hover:border-[#10b981] hover:text-[#10b981] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Regenerate
          </button>
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#1a1a1a] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10" style={{ fontSize: '12px' }}>
            Suggest changes for next generation
          </div>
        </div>
      </div>

      {/* Week Range */}
      <p className="text-[#999999] mb-4" style={{ fontSize: '13px', fontWeight: '500' }}>
        Week of Jan 12–Jan 18
      </p>

      {/* Takeaway Summary - Allow 2 lines */}
      <p className="text-[#1a1a1a] mb-6 line-clamp-2" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.5' }}>
        Momentum is strong; deals lag due to weak CTA.
      </p>

      {/* KPI Mini Strip - Unified Format: Current Value + WoW Change */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Views */}
        <div className="flex flex-col gap-1.5 pb-4 md:pb-0 md:pr-4 md:border-r border-b md:border-b-0 border-[#e0e0e0]">
          <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
            Views
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
              54K
            </span>
            <div className="flex items-center gap-1 text-[#16a34a]" style={{ fontSize: '12px', fontWeight: '500' }}>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>12% vs last week</span>
            </div>
          </div>
        </div>

        {/* Followers */}
        <div className="flex flex-col gap-1.5 pb-4 md:pb-0 md:pr-4 md:border-r border-b md:border-b-0 border-[#e0e0e0]">
          <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
            Followers
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
              +180
            </span>
            <div className="flex items-center gap-1 text-[#16a34a]" style={{ fontSize: '12px', fontWeight: '500' }}>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>5% vs last week</span>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-1.5 pb-4 md:pb-0 md:pr-4 md:border-r border-b md:border-b-0 border-[#e0e0e0]">
          <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
            Posts
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
              4/5
            </span>
            <div className="flex items-center gap-1 text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
              <span>80% complete</span>
            </div>
          </div>
        </div>

        {/* Deals */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
            Deals
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
              2
            </span>
            <div className="flex items-center gap-1 text-[#dc2626]" style={{ fontSize: '12px', fontWeight: '500' }}>
              <ChevronDown className="w-3.5 h-3.5" />
              <span>1 vs last week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Confidence & Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-[#e0e0e0]">
        {/* Confidence & Coverage - Clickable with Popover */}
        <div className="relative">
          <button
            onClick={() => setShowConfidencePopover(!showConfidencePopover)}
            className="flex items-center gap-1.5 text-[#666666] hover:text-[#1a1a1a] transition-colors cursor-pointer"
            style={{ fontSize: '12px', fontWeight: '500' }}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Confidence: High</span>
            <span>·</span>
            <span>Coverage: 7 posts</span>
          </button>

          {/* Confidence Popover */}
          {showConfidencePopover && (
            <div className="absolute left-0 bottom-full mb-2 w-[320px] bg-white border border-[#e0e0e0] rounded-lg shadow-xl z-20 p-4">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                  How confidence is estimated
                </h4>
                <button
                  onClick={() => setShowConfidencePopover(false)}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#f5f5f5] transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4 text-[#666666]" />
                </button>
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#10b981] mt-0.5">•</span>
                  <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                    <span className="font-semibold text-[#1a1a1a]">Coverage:</span> 7 posts included
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#10b981] mt-0.5">•</span>
                  <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                    <span className="font-semibold text-[#1a1a1a]">Data completeness:</span> High
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#10b981] mt-0.5">•</span>
                  <p className="text-[#666666]" style={{ fontSize: '13px' }}>
                    <span className="font-semibold text-[#1a1a1a]">Sample size:</span> Sufficient for this week
                  </p>
                </div>
              </div>
              {onViewIncludedPosts && (
                <button
                  onClick={onViewIncludedPosts}
                  className="text-[#10b981] hover:text-[#059669] transition-colors"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  View included posts →
                </button>
              )}
            </div>
          )}

          {/* Backdrop to close popover */}
          {showConfidencePopover && (
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowConfidencePopover(false)}
            />
          )}
        </div>

        {/* CTA Buttons - Optimized Hierarchy */}
        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap md:flex-nowrap">
          <button
            onClick={onViewArchive}
            className="text-[#666666] hover:text-[#1a1a1a] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            View archive →
          </button>
          <button
            onClick={onViewPlan}
            className="px-4 py-2 text-[#666666] bg-white border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            View plan
          </button>
          <button
            onClick={onOpenReport}
            className="px-4 py-2 text-white bg-[#10b981] rounded-lg hover:bg-[#059669] transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Open report
          </button>
        </div>
      </div>
    </div>
  );
}
