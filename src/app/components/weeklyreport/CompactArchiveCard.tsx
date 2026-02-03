import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';

interface ArchiveItem {
  week: string;
  completionRate: number;
  outcome: string;
}

interface CompactArchiveCardProps {
  items?: ArchiveItem[];
  onViewAll?: () => void;
  onSelectWeek?: (week: string) => void;
}

export function CompactArchiveCard({
  items = [
    { week: 'Jan 05–Jan 11', completionRate: 85, outcome: 'Hooks improved, retention up' },
    { week: 'Dec 29–Jan 04', completionRate: 68, outcome: 'Holiday slowdown' },
    { week: 'Dec 22–Dec 28', completionRate: 92, outcome: 'Strong finish' },
    { week: 'Dec 15–Dec 21', completionRate: 75, outcome: 'Consistent output' },
  ],
  onViewAll,
  onSelectWeek,
}: CompactArchiveCardProps) {
  return (
    <div className="bg-muted/30 rounded-[12px] border border-border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b border-border px-4 py-3 bg-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-card-foreground" style={{ fontSize: '14px', fontWeight: '700' }}>
              Recent Reports
            </h3>
          </div>
          <button
            onClick={onViewAll}
            className="text-[#0F766E] hover:text-[#0D9488] transition-colors flex items-center gap-0.5"
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            View all
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {items.map((item, i) => {
          // First item is highlighted
          if (i === 0) {
            return (
              <button
                key={i}
                onClick={() => onSelectWeek?.(item.week)}
                className="w-full text-left bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] dark:from-[#0F766E]/30 dark:to-[#0F766E]/10 border border-[#6EE7B7] dark:border-[#0F766E]/50 rounded-[10px] p-3 hover:from-[#A7F3D0] hover:to-[#6EE7B7] dark:hover:from-[#0F766E]/40 dark:hover:to-[#0F766E]/20 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 bg-[#059669] text-white rounded-full"
                      style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.05em' }}
                    >
                      NEW
                    </span>
                    <span className="text-[#047857] dark:text-[#2DD4BF]" style={{ fontSize: '13px', fontWeight: '700' }}>
                      {item.week}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#059669] dark:text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#059669] dark:text-[#2DD4BF]/90 line-clamp-1 flex-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                    {item.outcome}
                  </p>
                  <span
                    className="text-[#047857] dark:text-[#2DD4BF] font-mono ml-2 flex-shrink-0"
                    style={{ fontSize: '11px', fontWeight: '700' }}
                  >
                    {item.completionRate}%
                  </span>
                </div>
              </button>
            );
          }

          // Regular items
          return (
            <button
              key={i}
              onClick={() => onSelectWeek?.(item.week)}
              className="w-full text-left p-3 rounded-[10px] border border-border bg-card hover:bg-muted hover:border-[#D1D5DB] dark:hover:border-border transition-all group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-card-foreground" style={{ fontSize: '12px', fontWeight: '600' }}>
                  {item.week}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.completionRate >= 80
                          ? 'bg-[#059669]'
                          : item.completionRate >= 60
                          ? 'bg-[#D97706]'
                          : 'bg-[#DC2626]'
                      }`}
                      style={{ width: `${item.completionRate}%` }}
                    ></div>
                  </div>
                  <span
                    className="text-muted-foreground font-mono"
                    style={{ fontSize: '11px', fontWeight: '600' }}
                  >
                    {item.completionRate}%
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-1" style={{ fontSize: '11px' }}>
                {item.outcome}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
