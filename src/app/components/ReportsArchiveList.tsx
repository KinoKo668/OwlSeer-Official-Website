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
          <div className="h-7 w-48 bg-[#e0e0e0] rounded mb-2 animate-pulse" />
          <div className="h-5 w-96 bg-[#e0e0e0] rounded animate-pulse" />
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-6">
          <div className="flex-1 h-11 bg-[#e0e0e0] rounded-lg animate-pulse" />
          <div className="h-11 w-24 bg-[#e0e0e0] rounded-lg animate-pulse" />
          <div className="h-11 w-32 bg-[#e0e0e0] rounded-lg animate-pulse" />
        </div>

        {/* Skeleton rows */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-[12px] border border-[#e0e0e0] p-5 shadow-sm animate-pulse">
              <div className="h-5 w-48 bg-[#e0e0e0] rounded mb-3" />
              <div className="h-4 w-full bg-[#e0e0e0] rounded mb-3" />
              <div className="h-4 w-2/3 bg-[#e0e0e0] rounded" />
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
          <h2 className="text-[#1a1a1a] mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>
            Reports archive
          </h2>
          <p className="text-[#666666]" style={{ fontSize: '14px' }}>
            Browse and revisit past weekly reports.
          </p>
        </div>

        {/* Empty state */}
        <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-12 shadow-sm text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#999999]" />
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
                No reports yet
              </h3>
              <p className="text-[#666666] mb-4" style={{ fontSize: '14px' }}>
                Your weekly reports will appear here once generated.
              </p>
              {onBackToOverview && (
                <button
                  onClick={onBackToOverview}
                  className="inline-flex items-center gap-2 text-[#10b981] hover:text-[#059669] transition-colors"
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
        <h2 className="text-[#1a1a1a] mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>
          Reports archive
        </h2>
        <p className="text-[#666666]" style={{ fontSize: '14px' }}>
          Browse and revisit past weekly reports.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
          <input
            type="text"
            placeholder="Search by topic, format, or notes…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent"
            style={{ fontSize: '14px' }}
          />
        </div>

        {/* Filter */}
        <button className="px-4 py-2.5 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center gap-2 text-[#666666] hover:text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '500' }}>
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>

        {/* Sort */}
        <button className="px-4 py-2.5 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center gap-2 text-[#666666] hover:text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '500' }}>
          <span>Sort: Newest</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Grouped Reports List */}
      <div className="space-y-8">
        {Object.entries(groupedReports).map(([monthGroup, reports]) => (
          <div key={monthGroup} className="space-y-4">
            {/* Month Section Header */}
            <h3 className="text-[#1a1a1a] px-1" style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.02em' }}>
              {monthGroup}
            </h3>

            {/* Reports in this month */}
            <div className="space-y-3">
              {reports.map((report) => {
                const currentStatus = statusConfig[report.status];
                
                return (
                  <div
                    key={report.id}
                    className="bg-white rounded-[12px] border border-[#e0e0e0] p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Row 1: Week range + Status + Actions */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
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
                          className="text-[#999999] hover:text-[#666666] transition-colors hidden md:inline-flex"
                          style={{ fontSize: '13px', fontWeight: '500' }}
                        >
                          Export
                        </button>
                        <button
                          className="text-[#999999] hover:text-[#666666] transition-colors hidden md:inline-flex"
                          style={{ fontSize: '13px', fontWeight: '500' }}
                        >
                          Compare
                        </button>
                        <button
                          onClick={() => onOpenReport?.(report.id)}
                          className="px-4 py-2 text-white bg-[#10b981] rounded-lg hover:bg-[#059669] transition-colors ml-2"
                          style={{ fontSize: '13px', fontWeight: '600' }}
                        >
                          Open
                        </button>
                      </div>
                    </div>

                    {/* Row 2: Takeaway */}
                    <p className="text-[#666666] mb-3 line-clamp-1" style={{ fontSize: '14px', fontWeight: '400' }}>
                      {report.takeaway}
                    </p>

                    {/* Row 3: KPI Mini Strip - Compact */}
                    <div className="flex items-center gap-6 flex-wrap">
                      {/* Views */}
                      <div className="flex items-center gap-2">
                        <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Views
                        </span>
                        <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.views.value}
                        </span>
                        <span className={`flex items-center gap-0.5 ${report.kpis.views.isPositive ? 'text-[#16a34a]' : 'text-[#dc2626]'}`} style={{ fontSize: '12px', fontWeight: '500' }}>
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
                        <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Followers
                        </span>
                        <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.followers.value}
                        </span>
                        <span className={`flex items-center gap-0.5 ${report.kpis.followers.isPositive ? 'text-[#16a34a]' : 'text-[#dc2626]'}`} style={{ fontSize: '12px', fontWeight: '500' }}>
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
                        <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Posts
                        </span>
                        <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.posts.value}
                        </span>
                        <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          ({report.kpis.posts.completion})
                        </span>
                      </div>

                      {/* Deals */}
                      <div className="flex items-center gap-2">
                        <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Deals
                        </span>
                        <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {report.kpis.deals.value}
                        </span>
                        <span className={`flex items-center gap-0.5 ${report.kpis.deals.isPositive ? 'text-[#16a34a]' : 'text-[#dc2626]'}`} style={{ fontSize: '12px', fontWeight: '500' }}>
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
