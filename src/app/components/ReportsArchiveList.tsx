import React from 'react';
import { Search, Filter, ChevronDown, ChevronUp, FileText, ArrowLeft } from 'lucide-react';

interface ReportItem {
  id: string;
  weekRange: string;
  monthGroup: string; // e.g., "January 2026"
  status: 'on-track' | 'at-risk' | 'off-track';
  kpis: {
    views: { value: string; change: string; isPositive: boolean };
    followers: { value: string; change: string; isPositive: boolean };
    posts: { value: string; completion: string };
    deals: { value: string; change: string; isPositive: boolean };
  };
  takeaway: string;
}

interface ReportsArchiveListProps {
  variant?: 'normal' | 'loading' | 'empty';
  onOpenReport?: (reportId: string) => void;
  onBackToOverview?: () => void;
}

export function ReportsArchiveList({ 
  variant = 'normal',
  onOpenReport,
  onBackToOverview,
}: ReportsArchiveListProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

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

  // Mock data grouped by month
  const mockReports: ReportItem[] = [
    {
      id: '1',
      weekRange: 'Week of Jan 12–Jan 18',
      monthGroup: 'January 2026',
      status: 'on-track',
      kpis: {
        views: { value: '54K', change: '12%', isPositive: true },
        followers: { value: '+180', change: '5%', isPositive: true },
        posts: { value: '4/5', completion: '80%' },
        deals: { value: '2', change: '1', isPositive: false },
      },
      takeaway: 'Momentum is strong; deals lag due to weak CTA.',
    },
    {
      id: '2',
      weekRange: 'Week of Jan 5–Jan 11',
      monthGroup: 'January 2026',
      status: 'on-track',
      kpis: {
        views: { value: '48K', change: '8%', isPositive: true },
        followers: { value: '+165', change: '4%', isPositive: true },
        posts: { value: '5/5', completion: '100%' },
        deals: { value: '3', change: '2', isPositive: true },
      },
      takeaway: 'Consistency pays off; all targets met this week.',
    },
    {
      id: '3',
      weekRange: 'Week of Dec 29–Jan 4',
      monthGroup: 'December 2025',
      status: 'at-risk',
      kpis: {
        views: { value: '42K', change: '3%', isPositive: false },
        followers: { value: '+120', change: '2%', isPositive: true },
        posts: { value: '3/5', completion: '60%' },
        deals: { value: '1', change: '1', isPositive: false },
      },
      takeaway: 'Holiday slowdown; posting frequency dropped.',
    },
    {
      id: '4',
      weekRange: 'Week of Dec 22–Dec 28',
      monthGroup: 'December 2025',
      status: 'on-track',
      kpis: {
        views: { value: '51K', change: '15%', isPositive: true },
        followers: { value: '+195', change: '7%', isPositive: true },
        posts: { value: '5/5', completion: '100%' },
        deals: { value: '4', change: '2', isPositive: true },
      },
      takeaway: 'Strong holiday content performance with peak engagement.',
    },
  ];

  // Group reports by month
  const groupedReports = mockReports.reduce((acc, report) => {
    if (!acc[report.monthGroup]) {
      acc[report.monthGroup] = [];
    }
    acc[report.monthGroup].push(report);
    return acc;
  }, {} as Record<string, ReportItem[]>);

  // Loading skeleton state
  if (variant === 'loading') {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-6">
          <div className="h-7 w-48 bg-slate-200 dark:bg-slate-700 rounded mb-2 animate-pulse" />
          <div className="h-5 w-96 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-6">
          <div className="flex-1 h-11 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
          <div className="h-11 w-24 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
          <div className="h-11 w-32 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
        </div>

        {/* Skeleton rows */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-5 shadow-sm animate-pulse">
              <div className="h-5 w-48 bg-slate-200 dark:bg-slate-700 rounded mb-3" />
              <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded mb-3" />
              <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Empty state
  if (variant === 'empty') {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-slate-900 dark:text-white mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>
            Reports archive
          </h2>
          <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: '14px' }}>
            Browse and revisit past weekly reports.
          </p>
        </div>

        {/* Empty state */}
        <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-12 shadow-sm text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <FileText className="w-8 h-8 text-slate-500 dark:text-slate-400" />
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
                No reports yet
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4" style={{ fontSize: '14px' }}>
                Your weekly reports will appear here once generated.
              </p>
              {onBackToOverview && (
                <button
                  onClick={onBackToOverview}
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  style={{ fontSize: '14px', fontWeight: '600' }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to overview</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Normal state with reports
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-slate-900 dark:text-white mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>
          Reports archive
        </h2>
        <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: '14px' }}>
          Browse and revisit past weekly reports.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-400" />
          <input
            type="text"
            placeholder="Search by topic, format, or notes…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            style={{ fontSize: '14px' }}
          />
        </div>

        {/* Filter */}
        <button className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 transition-colors flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" style={{ fontSize: '14px', fontWeight: '500' }}>
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>

        {/* Sort */}
        <button className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 transition-colors flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" style={{ fontSize: '14px', fontWeight: '500' }}>
          <span>Sort: Newest</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Grouped Reports List */}
      <div className="space-y-8">
        {Object.entries(groupedReports).map(([monthGroup, reports]) => (
          <div key={monthGroup} className="space-y-4">
            {/* Month Section Header */}
            <h3 className="text-slate-900 dark:text-white px-1" style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.02em' }}>
              {monthGroup}
            </h3>

            {/* Reports in this month */}
            <div className="space-y-3">
              {reports.map((report) => {
                const currentStatus = statusConfig[report.status];
                
                return (
                  <div
                    key={report.id}
                    className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md dark:hover:shadow-black/30 transition-shadow"
                  >
                    {/* Row 1: Week range + Status + Actions */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-slate-900 dark:text-white" style={{ fontSize: '15px', fontWeight: '600' }}>
                          {report.weekRange}
                        </h4>
                        {/* Status Pill */}
                        <span
                          className={`px-2.5 py-1 rounded-full border ${currentStatus.bg} ${currentStatus.text} ${currentStatus.border}`}
                          style={{ fontSize: '11px', fontWeight: '600' }}
                        >
                          {currentStatus.label}
                        </span>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors hidden md:inline-flex"
                          style={{ fontSize: '13px', fontWeight: '500' }}
                        >
                          Export
                        </button>
                        <button
                          onClick={() => onOpenReport?.(report.id)}
                          className="px-4 py-2 text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors ml-2"
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          Open
                        </button>
                      </div>
                    </div>

                    {/* Row 2: Takeaway */}
                    <p className="text-slate-500 dark:text-slate-400 mb-3 line-clamp-1" style={{ fontSize: '14px', fontWeight: '400' }}>
                      {report.takeaway}
                    </p>

                    {/* Row 3: KPI Mini Strip - Compact */}
                    <div className="flex items-center gap-6 flex-wrap">
                      {/* Views */}
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Views
                        </span>
                        <span className="text-slate-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.views.value}
                        </span>
                        <span className={`flex items-center gap-0.5 ${report.kpis.views.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`} style={{ fontSize: '12px', fontWeight: '500' }}>
                          {report.kpis.views.isPositive ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                          {report.kpis.views.change}
                        </span>
                      </div>

                      {/* Followers */}
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Followers
                        </span>
                        <span className="text-slate-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.followers.value}
                        </span>
                        <span className={`flex items-center gap-0.5 ${report.kpis.followers.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`} style={{ fontSize: '12px', fontWeight: '500' }}>
                          {report.kpis.followers.isPositive ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                          {report.kpis.followers.change}
                        </span>
                      </div>

                      {/* Posts */}
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Posts
                        </span>
                        <span className="text-slate-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.posts.value}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
                          ({report.kpis.posts.completion})
                        </span>
                      </div>

                      {/* Deals */}
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Deals
                        </span>
                        <span className="text-slate-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.deals.value}
                        </span>
                        <span className={`flex items-center gap-0.5 ${report.kpis.deals.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`} style={{ fontSize: '12px', fontWeight: '500' }}>
                          {report.kpis.deals.isPositive ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                          {report.kpis.deals.change}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
