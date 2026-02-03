import React from 'react';
import { Play, Eye } from 'lucide-react';

interface VideoRowProps {
  title: string;
  date: string;
  views: string;
  badge: 'above' | 'below';
  onOpen?: () => void;
}

export function VideoRow({ title, date, views, badge, onOpen }: VideoRowProps) {
  const badgeConfig = {
    above: {
      label: 'Above median',
      bg: 'bg-[#d1fae5]',
      text: 'text-[#065f46]',
      border: 'border-[#a7f3d0]',
    },
    below: {
      label: 'Below median',
      bg: 'bg-[#fee2e2]',
      text: 'text-[#991b1b]',
      border: 'border-[#fecaca]',
    },
  };

  const currentBadge = badgeConfig[badge];

  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#e0e0e0] hover:shadow-sm transition-shadow">
      {/* Play icon */}
      <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
        <Play className="w-5 h-5 text-[#10b981]" fill="#10b981" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h5 className="text-[#1a1a1a] mb-1 truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
          {title}
        </h5>
        <div className="flex items-center gap-3 text-[#999999]" style={{ fontSize: '12px', fontWeight: '400' }}>
          <span>{date}</span>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>{views}</span>
          </div>
        </div>
      </div>

      {/* Badge */}
      <span
        className={`px-2.5 py-1 rounded-full border ${currentBadge.bg} ${currentBadge.text} ${currentBadge.border} flex-shrink-0`}
        style={{ fontSize: '11px', fontWeight: '600' }}
      >
        {currentBadge.label}
      </span>

      {/* Open button */}
      <button
        onClick={onOpen}
        className="px-3 py-1.5 text-[#10b981] hover:bg-[#f0fdf4] rounded-lg transition-colors flex-shrink-0"
        style={{ fontSize: '13px', fontWeight: '600' }}
      >
        Open
      </button>
    </div>
  );
}
