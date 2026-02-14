import React from 'react';
import { FileText, ChevronUp, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format, startOfWeek, endOfWeek, subWeeks } from 'date-fns';
import { cn } from './ui/utils';

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
  // Initialize with last week by default, since we only show historical data
  const [date, setDate] = React.useState<Date>(() => subWeeks(new Date(), 1));
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [hoveredDate, setHoveredDate] = React.useState<Date | undefined>(undefined);

  // Calculate the week range based on the selected date
  const weekStart = startOfWeek(date, { weekStartsOn: 0 }); // Sunday start
  const weekEnd = endOfWeek(date, { weekStartsOn: 0 });
  const dateRangeText = `${format(weekStart, 'MMM dd')}–${format(weekEnd, 'MMM dd')}`;

  // Loading skeleton state
  if (variant === 'loading') {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="h-5 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
            </div>
            <div className="h-9 w-24 bg-slate-200 dark:bg-slate-700 rounded-lg" />
          </div>
          <div className="h-4 w-48 bg-slate-200 dark:bg-slate-700 rounded mb-4" />
          <div className="h-6 w-full bg-slate-200 dark:bg-slate-700 rounded mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-slate-200 dark:bg-slate-700 rounded" />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="flex items-center gap-3">
              <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded-lg" />
              <div className="h-10 w-28 bg-slate-200 dark:bg-slate-700 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (variant === 'empty') {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-sm text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <FileText className="w-8 h-8 text-slate-500 dark:text-slate-400" />
          </div>
          <div>
            <h3 className="text-slate-900 dark:text-white mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
              No weekly report yet
            </h3>
            <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: '14px' }}>
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
      bg: 'bg-emerald-100 dark:bg-emerald-950/50',
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-200 dark:border-emerald-900',
    },
    'at-risk': {
      label: 'At risk',
      bg: 'bg-amber-100 dark:bg-amber-950/50',
      text: 'text-amber-700 dark:text-amber-300',
      border: 'border-amber-200 dark:border-amber-900',
    },
    'off-track': {
      label: 'Off track',
      bg: 'bg-red-100 dark:bg-red-950/50',
      text: 'text-red-700 dark:text-red-300',
      border: 'border-red-200 dark:border-red-900',
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-start md:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-500" />
            <h3 className="text-slate-900 dark:text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
              Weekly report
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

        {/* Week Selector using Popover Calendar */}
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white",
                "focus:outline-none focus:ring-2 focus:ring-emerald-500"
              )}
            >
              <CalendarIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>
                {dateRangeText}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => {
                if (newDate) {
                  setDate(newDate);
                  setPopoverOpen(false);
                }
              }}
              initialFocus
              disabled={(date) => {
                // Disable future dates AND current week
                const today = new Date();
                const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
                return date >= startOfCurrentWeek;
              }}
              onDayMouseEnter={(day) => setHoveredDate(day)}
              onDayMouseLeave={() => setHoveredDate(undefined)}
              modifiers={{
                hoveredRange: (day) => {
                  if (!hoveredDate) return false;
                  const start = startOfWeek(hoveredDate, { weekStartsOn: 0 });
                  const end = endOfWeek(hoveredDate, { weekStartsOn: 0 });
                  return day >= start && day <= end;
                },
                selectedRange: (day) => {
                  if (!date) return false;
                  const start = startOfWeek(date, { weekStartsOn: 0 });
                  const end = endOfWeek(date, { weekStartsOn: 0 });
                  return day >= start && day <= end;
                }
              }}
              modifiersClassNames={{
                hoveredRange: "bg-accent/50 text-accent-foreground rounded-none first:rounded-l-md last:rounded-r-md",
                selectedRange: "bg-emerald-500/20 text-emerald-900 dark:text-emerald-200 font-semibold rounded-none first:rounded-l-md last:rounded-r-md",
                selected: "bg-emerald-500/20 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-500/20 hover:text-emerald-900 dark:hover:text-emerald-200 focus:bg-emerald-500/20 focus:text-emerald-900 dark:focus:text-emerald-200"
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Takeaway Summary - Allow 2 lines */}
      <p className="text-slate-900 dark:text-white mb-6 line-clamp-2" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.5' }}>
        Momentum is strong; deals lag due to weak CTA.
      </p>

      {/* KPI Mini Strip - Unified Format: Current Value + WoW Change */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Views */}
        <div className="flex flex-col gap-1.5 pb-4 md:pb-0 md:pr-4 md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-800">
          <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
            Views
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-900 dark:text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
              54K
            </span>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400" style={{ fontSize: '12px', fontWeight: '500' }}>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>12% vs last week</span>
            </div>
          </div>
        </div>

        {/* Followers */}
        <div className="flex flex-col gap-1.5 pb-4 md:pb-0 md:pr-4 md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-800">
          <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
            Followers
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-900 dark:text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
              +180
            </span>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400" style={{ fontSize: '12px', fontWeight: '500' }}>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>5% vs last week</span>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-1.5 pb-4 md:pb-0 md:pr-4 md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-800">
          <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
            Posts
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-900 dark:text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
              4/5
            </span>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
              <span>80% complete</span>
            </div>
          </div>
        </div>

        {/* Deals */}
        <div className="flex flex-col gap-1.5">
          <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
            Deals
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-slate-900 dark:text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
              2
            </span>
            <div className="flex items-center gap-1 text-red-600 dark:text-red-400" style={{ fontSize: '12px', fontWeight: '500' }}>
              <ChevronDown className="w-3.5 h-3.5" />
              <span>1 vs last week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Confidence & Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        {/* CTA Buttons - Optimized Hierarchy */}
        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap md:flex-nowrap justify-end">
          <button
            onClick={onOpenReport}
            className="px-4 py-2 text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            Open report
          </button>
        </div>
      </div>
    </div>
  );
}
