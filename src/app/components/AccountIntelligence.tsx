import React from 'react';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Info,
  Clock,
} from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { CopilotCTAButton } from './CopilotCTAButton';
import { ContentCategoryInsight } from './ContentCategoryInsight';
import { BottomTabBar } from './BottomTabBar';
import { LatestWeeklyReportCard } from './LatestWeeklyReportCard';
import { RegenerateReportModal } from './RegenerateReportModal';
import { ReportsArchiveList } from './ReportsArchiveList';
import { DiagnosisIssuesList } from './DiagnosisIssuesList';
import { AIGoalsCard } from './AIGoalsCard';
import { useIsMobile } from './ui/use-mobile';
import { useSimulationTrigger } from './SimulationPageWrapper';

// Translations for Content Category Insight
const translations = {
  en: {
    contentFocus: 'Content Focus',
    last30Videos: 'Last 30 videos',
    bestPerforming: 'BEST PERFORMING',
    bestPerformingDesc: 'The algorithm is amplifying this category most in recent videos.',
    totalAnalyzed: 'Total analyzed',
  },
  zh: {
    contentFocus: '内容焦点',
    last30Videos: '最近30个视频',
    bestPerforming: '表现最佳',
    bestPerformingDesc: '算法最近主要在放大这个类别的内容。',
    totalAnalyzed: '总计分析',
  },
};

interface AccountIntelligenceProps {
  onNavigate?: (page: string, question?: string) => void;
  initialTab?: 'overview' | 'reports';
  conversations?: Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  currentConversationId?: string | null;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
}

export function AccountIntelligence({ 
  onNavigate,
  initialTab = 'overview',
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: AccountIntelligenceProps) {
  const [language, setLanguage] = React.useState<'en' | 'zh'>('en');
  const [isRegenerateModalOpen, setIsRegenerateModalOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'overview' | 'reports'>(initialTab);
  const initialTabRef = React.useRef(initialTab);
  const t = translations[language];
  const { trigger } = useSimulationTrigger();

  // Timer trigger (30s)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      trigger();
    }, 30000);
    return () => clearTimeout(timer);
  }, [trigger]);

  // Update activeTab when initialTab prop changes - only if actually different
  React.useEffect(() => {
    if (initialTab !== initialTabRef.current) {
      setActiveTab(initialTab);
      initialTabRef.current = initialTab;
    }
  }, [initialTab]);

  const handleRegenerate = React.useCallback((feedback: string) => {
    // Handle feedback submission
    console.log('Regenerate feedback:', feedback);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  const handleOpenReport = React.useCallback((reportId?: string) => {
    // Navigate to Weekly Report Detail placeholder
    onNavigate?.('weekly-report-detail');
  }, [onNavigate]);

  const handleViewPlan = React.useCallback(() => {
    // Navigate to Weekly Plan Detail placeholder
    console.log('Navigate to Weekly Plan Detail');
  }, []);

  const handleViewArchive = React.useCallback(() => {
    // Switch to Reports tab
    setActiveTab('reports');
  }, []);
  
  // Mock data - simplified
  const systemStatus = {
    judgment: 'stable', // stable | needs-attention | growing
    confidence: 0.87,
    summary: 'Your account shows consistent engagement patterns and structural stability typical of established creators in your niche.',
  };

  const stabilitySnapshot = {
    structure: {
      status: 'Stable',
      label: 'Structure Stability',
      vsP50: 'Above median',
      description: 'Consistent video structure usage',
    },
    category: {
      status: 'Focused',
      label: 'Category (Niche) Stability',
      vsP50: 'At median',
      description: 'Clear topic positioning',
    },
  };

  // User's peer group definition
  const peerGroup = {
    category: 'Lifestyle & Fashion',
    followerTier: '50K-150K',
  };

  const primaryReason = {
    title: 'Three Segments structure likely maintains engagement stability',
    dataPoints: [
      'You use the Three Segments structure in 52% of recent videos',
      'Videos with this structure tend to show 18% longer watch time than your other formats',
    ],
  };

  const guidance = {
    title: 'What This Means for You',
    description: 'Your current approach is working. Continue using your proven Three Segments structure while gradually testing variations.',
    nextStep: 'Maintain your 3+ videos per week rhythm to preserve algorithmic momentum.',
    copilotPrompt: 'How can I optimize my content structure further?',
  };

  // Diagnosis Issues Data
  const diagnosisIssues = [
    {
      id: 'issue-1',
      severity: 'HIGH' as const,
      title: 'Weak Hook Performance',
      reason: "Your video openings use slow intros like 'Hey everyone, today I'll show you...' Viewers scroll away before seeing your content.",
      solution: "Try 'Product-First' hook - show the finished dish in the first second to grab attention",
    },
    {
      id: 'issue-2',
      severity: 'MEDIUM' as const,
      title: 'Suboptimal Posting Time',
      reason: "You're posting during low-activity hours. Your audience is most active in the evening, but 80% of your content goes live at noon.",
      solution: 'Shift your posting schedule to 7-9 PM to catch your audience\'s peak activity window',
    },
  ];

  const isMobile = useIsMobile();

  return (
    <div className="simulation-overview-theme simulation-dark-surface flex h-screen bg-sidebar transition-colors duration-300">
      {/* Sidebar */}
      <SidebarPro
        activeItem="intelligence"
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden pb-[64px] md:pb-0">
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 md:px-8 py-4 md:py-5 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-slate-900 dark:text-white mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                  Account Intelligence
                </h1>
                <p className="text-slate-500 dark:text-slate-400 hidden md:block" style={{ fontSize: '13px' }}>
                  System evaluation and current status
                </p>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="px-4 md:px-8">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-emerald-500 text-slate-900 dark:text-white'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                style={{ fontSize: '14px', fontWeight: activeTab === 'overview' ? '600' : '500' }}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-3 border-b-2 transition-colors ${
                  activeTab === 'reports'
                    ? 'border-emerald-500 text-slate-900 dark:text-white'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                style={{ fontSize: '14px', fontWeight: activeTab === 'reports' ? '600' : '500' }}
              >
                Reports
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className={`max-w-[1400px] mx-auto ${isMobile ? 'px-3 py-3' : 'px-4 md:px-8 py-6 md:py-12'}`}>
            {activeTab === 'overview' ? (
              <div className={isMobile ? 'space-y-3' : 'space-y-8'}>
                {/* DIAGNOSIS ISSUES LIST - Moved to top */}
                <div className={isMobile ? 'px-1' : ''}>
                  <DiagnosisIssuesList issues={diagnosisIssues} />
                </div>

                {/* AI GOALS CARD */}
                <AIGoalsCard hasGoal={true} />

                {/* LATEST WEEKLY REPORT CARD */}
                <LatestWeeklyReportCard
                  variant="normal"
                  onOpenReport={handleOpenReport}
                  onViewPlan={handleViewPlan}
                  onViewArchive={handleViewArchive}
                  onRegenerate={() => setIsRegenerateModalOpen(true)}
                />

                {/* 1.5. KEY CHANGES - Full Width Grid */}
                <div>
                  <h3 className={`text-slate-900 dark:text-white ${isMobile ? 'mb-2.5 px-1' : 'mb-4'}`} style={{ fontSize: isMobile ? '15px' : '16px', fontWeight: '600' }}>
                    Key Changes (Last 7 vs 30 Videos)
                  </h3>
                  <div className={`grid grid-cols-1 md:grid-cols-3 ${isMobile ? 'gap-2.5' : 'gap-4 md:gap-5'}`}>
                    {/* Engagement Trend */}
                    <div className={`bg-white dark:bg-slate-900 ${isMobile ? 'rounded-[8px] border-0 p-4' : 'rounded-[12px] border border-slate-200 dark:border-slate-800 p-6'} shadow-sm`}>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} text-emerald-600`} />
                        <span className="text-slate-900 dark:text-white" style={{ fontSize: isMobile ? '14px' : '13px', fontWeight: '600' }}>
                          Engagement Trend
                        </span>
                      </div>
                      <div className="text-emerald-600 mb-2" style={{ fontSize: isMobile ? '32px' : '28px', fontWeight: '700' }}>
                        +2.3%
                      </div>
                      <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: isMobile ? '13px' : '12px', lineHeight: '1.4' }}>
                        Likes and comments up this week
                      </p>
                    </div>

                    {/* Views Trend */}
                    <div className={`bg-white dark:bg-slate-900 ${isMobile ? 'rounded-[8px] border-0 p-4' : 'rounded-[12px] border border-slate-200 dark:border-slate-800 p-6'} shadow-sm`}>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} text-emerald-600`} />
                        <span className="text-slate-900 dark:text-white" style={{ fontSize: isMobile ? '14px' : '13px', fontWeight: '600' }}>
                          Avg Views
                        </span>
                        <div className="relative group">
                          <Info className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 cursor-help" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            Videos published within 3 days are excluded from this metric
                          </div>
                        </div>
                      </div>
                      <div className="text-emerald-600 mb-2" style={{ fontSize: isMobile ? '32px' : '28px', fontWeight: '700' }}>
                        +125K
                      </div>
                      <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: isMobile ? '13px' : '12px', lineHeight: '1.4' }}>
                        Weekly views increasing
                      </p>
                    </div>

                    {/* Posting Consistency */}
                    <div className={`bg-white dark:bg-slate-900 ${isMobile ? 'rounded-[8px] border-0 p-4' : 'rounded-[12px] border border-slate-200 dark:border-slate-800 p-6'} shadow-sm`}>
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowRight className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} text-slate-500 dark:text-slate-400`} />
                        <span className="text-slate-900 dark:text-white" style={{ fontSize: isMobile ? '14px' : '13px', fontWeight: '600' }}>
                          Posting Consistency
                        </span>
                      </div>
                      <div className="text-slate-900 dark:text-white mb-2" style={{ fontSize: isMobile ? '32px' : '28px', fontWeight: '700' }}>
                        3.2/wk
                      </div>
                      <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: isMobile ? '13px' : '12px', lineHeight: '1.4' }}>
                        Maintaining steady cadence
                      </p>
                    </div>
                  </div>
                </div>

                {/* BEST TIME TO POST - Heatmap */}
                <div>
                  <div className={`bg-white dark:bg-slate-900 ${isMobile ? 'rounded-[8px] border-0 p-4' : 'rounded-[12px] border border-slate-200 dark:border-slate-800 p-6 md:p-8'} shadow-sm`}>
                    {/* Header */}
                    <div className={`${isMobile ? 'mb-5' : 'mb-6'} flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        <Clock className={`${isMobile ? 'w-5 h-5' : 'w-5 h-5'} text-emerald-500`} />
                        <h3 className="text-slate-900 dark:text-white" style={{ fontSize: isMobile ? '15px' : '16px', fontWeight: '600' }}>
                          Best Time to Post
                        </h3>
                      </div>
                    </div>

                    {/* Heatmap Grid */}
                    <div className="space-y-2">
                      {/* Mobile: Horizontal scroll container */}
                      {isMobile ? (
                        <div className="overflow-x-auto -mx-4 px-4">
                          <div className="min-w-[680px]">
                            {/* Time Labels */}
                            <div className="grid grid-cols-[40px_repeat(24,1fr)] gap-1 mb-3">
                              <div /> {/* Empty cell for day labels */}
                              {Array.from({ length: 24 }).map((_, index) => {
                                const hour = (index + 6) % 24;
                                const showLabel = index % 4 === 0;
                                const ampm = hour >= 12 ? 'PM' : 'AM';
                                const h = hour % 12 || 12;
                                return (
                                  <div key={index} className="text-center text-slate-400 dark:text-slate-500" style={{ fontSize: '10px', fontWeight: '500' }}>
                                    {showLabel ? `${h}${ampm}` : ''}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Heatmap Rows */}
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                              <div key={day} className="grid grid-cols-[40px_repeat(24,1fr)] gap-1 mb-2">
                                <div className="flex items-center text-slate-400 dark:text-slate-500" style={{ fontSize: '11px', fontWeight: '500' }}>
                                  {day}
                                </div>
                                {Array.from({ length: 24 }, (_, hourIndex) => {
                                  // Mock logic for Recommended vs Not Recommended
                                  let isRecommended = false;
                                  if (dayIndex <= 3) { // Mon-Thu
                                    if (hourIndex >= 12 && hourIndex <= 16) isRecommended = true; // 6PM-10PM
                                  } else if (dayIndex === 4) { // Fri
                                    if (hourIndex >= 10 && hourIndex <= 17) isRecommended = true; // 4PM-11PM
                                  } else if (dayIndex === 5) { // Sat
                                    if ((hourIndex >= 4 && hourIndex <= 7) || (hourIndex >= 13 && hourIndex <= 17)) isRecommended = true;
                                  } else if (dayIndex === 6) { // Sun
                                    if (hourIndex >= 4 && hourIndex <= 10) isRecommended = true;
                                  }

                                  const intensity = isRecommended 
                                    ? 'bg-emerald-500 dark:bg-emerald-600 shadow-sm' 
                                    : 'bg-slate-100 dark:bg-slate-800/50';

                                  return (
                                    <div
                                      key={hourIndex}
                                    className={`h-7 rounded-sm ${intensity} transition-all`}
                                  />
                                );
                              })}
                            </div>
                          ))}

                          {/* Legend */}
                          <div className="flex items-center justify-center gap-6 mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                              <div className="w-3.5 h-3.5 rounded-sm bg-slate-100 dark:bg-slate-800/50" />
                              <span className="text-slate-400 dark:text-slate-500" style={{ fontSize: '11px', fontWeight: '500' }}>
                                Off-Peak
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3.5 h-3.5 rounded-sm bg-emerald-500 dark:bg-emerald-600" />
                              <span className="text-slate-900 dark:text-white" style={{ fontSize: '11px', fontWeight: '500' }}>
                                Recommended
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Desktop version
                      <div>
                        {/* Time Labels */}
                        <div className="grid grid-cols-[50px_repeat(24,1fr)] gap-1 mb-3">
                          <div /> {/* Empty cell for day labels */}
                          {Array.from({ length: 24 }).map((_, index) => {
                            const hour = (index + 6) % 24;
                            const showLabel = index % 4 === 0;
                            const ampm = hour >= 12 ? 'PM' : 'AM';
                            const h = hour % 12 || 12;
                            return (
                              <div key={index} className="text-center text-slate-400 dark:text-slate-500" style={{ fontSize: '11px', fontWeight: '500' }}>
                                {showLabel ? `${h}${ampm}` : ''}
                              </div>
                            );
                          })}
                        </div>

                        {/* Heatmap Rows */}
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                          <div key={day} className="grid grid-cols-[50px_repeat(24,1fr)] gap-1 mb-2">
                            <div className="flex items-center text-slate-400 dark:text-slate-500" style={{ fontSize: '12px', fontWeight: '500' }}>
                              {day}
                            </div>
                            {Array.from({ length: 24 }, (_, hourIndex) => {
                              // Mock logic for Recommended vs Not Recommended
                              let isRecommended = false;
                              if (dayIndex <= 3) { // Mon-Thu
                                if (hourIndex >= 12 && hourIndex <= 16) isRecommended = true; // 6PM-10PM
                              } else if (dayIndex === 4) { // Fri
                                if (hourIndex >= 10 && hourIndex <= 17) isRecommended = true; // 4PM-11PM
                              } else if (dayIndex === 5) { // Sat
                                if ((hourIndex >= 4 && hourIndex <= 7) || (hourIndex >= 13 && hourIndex <= 17)) isRecommended = true;
                              } else if (dayIndex === 6) { // Sun
                                if (hourIndex >= 4 && hourIndex <= 10) isRecommended = true;
                              }

                              const intensity = isRecommended 
                                ? 'bg-emerald-500 dark:bg-emerald-600 shadow-sm' 
                                : 'bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer';

                              return (
                                <div
                                  key={hourIndex}
                                  className={`h-8 rounded-sm ${intensity}`}
                                  title={isRecommended ? 'Recommended Time' : 'Off-Peak'}
                                />
                              );
                            })}
                          </div>
                        ))}

                        {/* Legend */}
                        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-sm bg-slate-100 dark:bg-slate-800/50" />
                            <span className="text-slate-400 dark:text-slate-500" style={{ fontSize: '12px', fontWeight: '500' }}>
                              Off-Peak
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-sm bg-emerald-500 dark:bg-emerald-600" />
                            <span className="text-slate-900 dark:text-white" style={{ fontSize: '12px', fontWeight: '500' }}>
                              Recommended
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className={isMobile ? 'space-y-3' : 'space-y-8'}>
                {/* Reports Archive List */}
                <ReportsArchiveList
                  onOpenReport={handleOpenReport}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar - Mobile Only */}
      <BottomTabBar 
        activeItem="intelligence" 
        onNavigate={onNavigate}
      />

      {/* Regenerate Report Modal */}
      <RegenerateReportModal
        isOpen={isRegenerateModalOpen}
        onClose={() => setIsRegenerateModalOpen(false)}
        onSubmit={handleRegenerate}
      />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in">
          <p style={{ fontSize: '14px', fontWeight: '500' }}>
            Got it — we'll regenerate using your suggestions.
          </p>
        </div>
      )}
    </div>
  );
}
