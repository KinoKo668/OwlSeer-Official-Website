import React from 'react';

export function GoalRowSkeleton() {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[#e0e0e0] last:border-b-0">
      <div className="flex-1">
        <div className="h-4 w-48 bg-[#f5f5f5] rounded mb-2" />
        <div className="h-3 w-32 bg-[#f5f5f5] rounded" />
      </div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-24 bg-[#f5f5f5] rounded" />
        <div className="h-4 w-16 bg-[#f5f5f5] rounded" />
      </div>
    </div>
  );
}

export function ActionRowSkeleton() {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#e0e0e0] last:border-b-0">
      <div className="flex-1">
        <div className="h-4 w-64 bg-[#f5f5f5] rounded mb-2" />
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-[#f5f5f5] rounded-full" />
          <div className="h-5 w-16 bg-[#f5f5f5] rounded-full" />
        </div>
      </div>
      <div className="h-8 w-20 bg-[#f5f5f5] rounded-lg" />
    </div>
  );
}

export function InsightAccordionSkeleton() {
  return (
    <div className="border border-[#e0e0e0] rounded-[12px] overflow-hidden bg-white mb-3">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="h-4 w-48 bg-[#f5f5f5] rounded" />
        <div className="h-4 w-4 bg-[#f5f5f5] rounded" />
      </div>
    </div>
  );
}

export function IssueRowSkeleton() {
  return (
    <div className="flex items-start gap-3 p-4 border border-[#e0e0e0] rounded-lg mb-3">
      <div className="w-8 h-8 bg-[#fee2e2] rounded-full flex-shrink-0" />
      <div className="flex-1">
        <div className="h-4 w-56 bg-[#f5f5f5] rounded mb-2" />
        <div className="h-3 w-full bg-[#f5f5f5] rounded mb-2" />
        <div className="h-3 w-3/4 bg-[#f5f5f5] rounded" />
      </div>
    </div>
  );
}

export function HighlightCardSkeleton() {
  return (
    <div className="bg-[#f0fdf4] border border-[#d1fae5] rounded-[12px] p-4 mb-3">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-[#10b981] rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="h-4 w-40 bg-[#d1fae5] rounded mb-2" />
          <div className="h-3 w-full bg-[#d1fae5] rounded mb-2" />
          <div className="h-3 w-2/3 bg-[#d1fae5] rounded" />
        </div>
      </div>
    </div>
  );
}

export function RecommendationActionCardSkeleton() {
  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-5 shadow-sm mb-4">
      <div className="h-5 w-64 bg-[#f5f5f5] rounded mb-3" />
      <div className="flex gap-2 mb-3">
        <div className="h-5 w-16 bg-[#f5f5f5] rounded-full" />
        <div className="h-5 w-16 bg-[#f5f5f5] rounded-full" />
        <div className="h-5 w-16 bg-[#f5f5f5] rounded-full" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-4 w-32 bg-[#f5f5f5] rounded" />
        <div className="h-4 w-24 bg-[#f5f5f5] rounded" />
      </div>
      <div className="flex items-center gap-3">
        <div className="h-9 w-32 bg-[#f5f5f5] rounded-lg" />
        <div className="h-4 w-20 bg-[#f5f5f5] rounded" />
      </div>
    </div>
  );
}
