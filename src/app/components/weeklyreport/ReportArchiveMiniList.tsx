import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';

interface ArchiveItem {
  week: string;
  completionRate: number;
  outcome: string;
}

interface ReportArchiveMiniListProps {
  items?: ArchiveItem[];
  onViewAll?: () => void;
  onSelectWeek?: (week: string) => void;
}

export function ReportArchiveMiniList({
  items = [
    { week: 'Jan 05–Jan 11', completionRate: 85, outcome: 'Hooks improved, retention up' },
    { week: 'Dec 29–Jan 04', completionRate: 68, outcome: 'Holiday slowdown, deal pipeline built' },
    { week: 'Dec 22–Dec 28', completionRate: 92, outcome: 'Strong finish, 5/5 posts delivered' },
    { week: 'Dec 15–Dec 21', completionRate: 74, outcome: 'Format experiment successful' },
    { week: 'Dec 08–Dec 14', completionRate: 81, outcome: 'Consistency improved' },
    { week: 'Dec 01–Dec 07', completionRate: 65, outcome: 'Topic dispersion addressed' },
  ],
  onViewAll,
  onSelectWeek,
}: ReportArchiveMiniListProps) {
  return (
    <div className="bg-white rounded-[12px] border border-[#E5E7EB] p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
          Report Archive
        </h3>
        <button
          onClick={onViewAll}
          className="text-[#0F766E] hover:text-[#0D9488] transition-colors flex items-center gap-1"
          style={{ fontSize: '13px', fontWeight: '600' }}
        >
          View all
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => {
          // First item is the Hero Card with teal/green background
          if (i === 0) {
            return (
              <button
                key={i}
                onClick={() => onSelectWeek?.(item.week)}
                className="w-full text-left bg-[#D1FAE5] border border-[#6EE7B7] rounded-[12px] p-4 hover:bg-[#A7F3D0] hover:border-[#34D399] transition-all group shadow-sm hover:shadow-md"
              >
                {/* NEW Badge and Title */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {/* High-contrast NEW pill badge */}
                    <span
                      className="px-2.5 py-0.5 bg-[#059669] text-white rounded-full flex-shrink-0"
                      style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em' }}
                    >
                      NEW
                    </span>
                    <div>
                      <h4 className="text-[#047857]" style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.3' }}>
                        Weekly Analysis Ready
                      </h4>
                    </div>
                  </div>
                  {/* View > link that appears on hover */}
                  <span
                    className="text-[#0F766E] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 flex-shrink-0 ml-2"
                    style={{ fontSize: '12px', fontWeight: '600' }}
                  >
                    View
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-[#059669] mb-2" style={{ fontSize: '12px', fontWeight: '500', lineHeight: '1.4' }}>
                  Traffic anomaly detected in last 24h
                </p>

                {/* Week range and Completion Rate */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#059669]" style={{ fontSize: '11px', fontWeight: '500' }}>
                      {item.week}
                    </span>
                  </div>
                  
                  {/* Completion Rate */}
                  <div className="flex items-center gap-1.5">
                    <div className="flex-shrink-0 w-12">
                      <div className="h-1.5 bg-[#6EE7B7] rounded-full overflow-hidden">
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
                    </div>
                    <span
                      className="text-[#059669] font-mono flex-shrink-0"
                      style={{ fontSize: '11px', fontWeight: '600' }}
                    >
                      {item.completionRate}%
                    </span>
                  </div>
                </div>
              </button>
            );
          }

          // Rest of the items - regular white list style
          return (
            <button
              key={i}
              onClick={() => onSelectWeek?.(item.week)}
              className="w-full text-left p-3 rounded-lg border border-[#E5E7EB] hover:bg-[#F8F9FA] hover:border-[#0F766E] transition-all group"
            >
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <span className="text-[#111827]" style={{ fontSize: '13px', fontWeight: '600' }}>
                  {item.week}
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex-shrink-0 w-12">
                    <div className="h-1.5 bg-[#F8F9FA] rounded-full overflow-hidden">
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
                  </div>
                  <span
                    className="text-[#374151] font-mono flex-shrink-0"
                    style={{ fontSize: '11px', fontWeight: '600' }}
                  >
                    {item.completionRate}%
                  </span>
                </div>
              </div>
              <p className="text-[#374151] line-clamp-1" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                {item.outcome}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}