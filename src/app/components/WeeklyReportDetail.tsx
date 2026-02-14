import React from 'react';
import {
  ArrowLeft,
  FileText,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Download,
  Share2,
  Sparkles,
  Info,
  ArrowRight,
} from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';
import { KPIItem } from './skeletons/KPIItem';
import { SectionCard } from './skeletons/SectionCard';
import { SidebarNavItem } from './skeletons/SidebarNavItem';
import { ScoreDimension } from './ScoreDimension';
import { GoalRow } from './GoalRow';
import { ActionRow } from './ActionRow';
import { InsightAccordion } from './InsightAccordion';
import { IssueRow } from './IssueRow';
import { Toast } from './Toast';
import { AdjustedGoalRow } from './AdjustedGoalRow';
import { DayScheduleRow } from './DayScheduleRow';
import {
  GoalRowSkeleton,
  ActionRowSkeleton,
  InsightAccordionSkeleton,
  IssueRowSkeleton,
  RecommendationActionCardSkeleton,
} from './skeletons/ReportSkeletons';

interface WeeklyReportDetailProps {
  onNavigate?: (page: string) => void;
  onBackToReports?: () => void;
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

export function WeeklyReportDetail({
  onNavigate,
  onBackToReports,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: WeeklyReportDetailProps) {
  const [activeSection, setActiveSection] = React.useState<string>('overall');
  const [toast, setToast] = React.useState<{ message: string; type: 'success' | 'info' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
  };

  const handleBackToReports = () => {
    if (onBackToReports) {
      onBackToReports();
    } else {
      onNavigate?.('intelligence');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 180; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Navigation sections
  const navSections = [
    { id: 'overall', label: 'Overall assessment' },
    { id: 'goals', label: 'Goal progress' },
    { id: 'execution', label: 'Execution analysis' },
    { id: 'insights', label: 'Key insights' },
    { id: 'issues', label: 'Challenges & issues' },
    { id: 'nextplan', label: 'Next week smart plan' },
  ];

  return (
    <div className="simulation-overview-theme simulation-dark-surface flex h-screen bg-sidebar transition-colors duration-300">
      {/* Sidebar */}
      <SidebarPro
        activeItem="intelligence"
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden pb-[64px] md:pb-0">
        {/* Sticky Header */}
        <div className="bg-white border-b border-[#e0e0e0] sticky top-0 z-30">
          {/* Row 1: Back link + Title + Status + Week switcher + Actions */}
          <div className="px-4 md:px-8 py-4 border-b border-[#e0e0e0]">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <button
                  onClick={handleBackToReports}
                  className="flex items-center gap-2 text-[#666666] hover:text-[#1a1a1a] transition-colors mb-3"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Reports</span>
                </button>
                
                <div className="flex items-center gap-3 flex-wrap">
                  <FileText className="w-6 h-6 text-[#10b981]" />
                  <h1 className="text-[#1a1a1a]" style={{ fontSize: '26px', fontWeight: '700' }}>
                    Weekly report
                  </h1>
                </div>
                <p className="text-[#666666] mt-1" style={{ fontSize: '13px' }}>
                  Week of Jan 12–Jan 18
                </p>
              </div>

              {/* Week switcher & Actions */}
              <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                <div className="flex items-center gap-1">
                  <button 
                    className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
                    title="Previous week"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#666666]" />
                  </button>
                  <button className="px-3 py-2 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center gap-2" style={{ fontSize: '13px', fontWeight: '500' }}>
                    <span className="text-[#666666] hidden sm:inline">Select week</span>
                    <ChevronDown className="w-4 h-4 text-[#666666]" />
                  </button>
                  <button 
                    className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors"
                    title="Next week"
                  >
                    <ChevronRight className="w-4 h-4 text-[#666666]" />
                  </button>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <button className="px-3 py-2 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center gap-2" style={{ fontSize: '13px', fontWeight: '500' }}>
                    <Download className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#666666]">Export</span>
                  </button>
                  <button className="px-3 py-2 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center gap-2" style={{ fontSize: '13px', fontWeight: '500' }}>
                    <Share2 className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#666666]">Share</span>
                  </button>
                  <button 
                    className="px-3 py-2 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center gap-2"
                    style={{ fontSize: '13px', fontWeight: '500' }}
                    title="Suggest changes for next generation"
                  >
                    <Sparkles className="w-4 h-4 text-[#666666]" />
                    <span className="text-[#666666]">Regenerate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: KPI Strip */}
          <div className="px-4 md:px-8 py-4">
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-8 flex-wrap flex-1">
                <KPIItem label="Views" value="54K" delta="▲12% vs last week" isPositive={true} />
                <KPIItem label="Followers" value="+180" delta="▲5% vs last week" isPositive={true} />
                <KPIItem label="Posts" value="4/5" delta="80% complete" isPositive={undefined} />
                <KPIItem label="Deals" value="2" delta="▼1 vs last week" isPositive={false} />
              </div>

              {/* Confidence/Coverage */}
              <button
                className="flex items-center gap-1.5 text-[#666666] hover:text-[#1a1a1a] transition-colors flex-shrink-0"
                style={{ fontSize: '12px', fontWeight: '500' }}
                title="Click to view confidence details"
              >
                <span>Confidence: High · Coverage: 7 posts</span>
                <Info className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content - Two Column Layout */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* LEFT COLUMN - Main Content (8/12) */}
              <div className="lg:col-span-8 space-y-8">
                {/* Section A: Overall assessment */}
                <SectionCard id="overall" title="Overall assessment">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* LEFT: Weekly score */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Weekly score
                        </div>
                        {/* Info icon with tooltip */}
                        <div className="relative group">
                          <button className="text-[#999999] hover:text-[#666666] transition-colors">
                            <Info className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute left-0 top-full mt-1 w-80 bg-[#1a1a1a] text-white px-3 py-2.5 rounded-lg shadow-xl z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                            <p className="mb-2">
                              Score is estimated from views momentum, goal completion, execution consistency, and week-over-week trends.
                            </p>
                            <p className="text-[#d1d5db]">
                              Views are treated as a supporting signal, not a primary goal unless configured.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Score badge */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d1fae5] to-[#a7f3d0] border-4 border-[#10b981] flex flex-col items-center justify-center shadow-sm">
                            <span className="text-[#065f46]" style={{ fontSize: '26px', fontWeight: '800', lineHeight: '1' }}>
                              A-
                            </span>
                            <span className="text-[#059669]" style={{ fontSize: '10px', fontWeight: '600' }}>
                              8.2/10
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-[#1a1a1a] mb-1" style={{ fontSize: '14px', fontWeight: '600' }}>
                            Strong week overall
                          </p>
                          <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                            Above target on views and followers; deal momentum needs attention.
                          </p>
                        </div>
                      </div>

                      {/* Score dimensions */}
                      <div className="space-y-1">
                        <ScoreDimension label="Performance" value={8.4} />
                        <ScoreDimension label="Goal progress" value={7.9} />
                        <ScoreDimension label="Execution quality" value={7.5} />
                        <ScoreDimension label="Trend direction" value="Positive" type="trend" />
                      </div>

                      {/* Explanation link */}
                      <button className="mt-4 text-[#10b981] hover:text-[#059669] transition-colors flex items-center gap-1" style={{ fontSize: '12px', fontWeight: '600' }}>
                        <Info className="w-3.5 h-3.5" />
                        <span>How is this calculated?</span>
                      </button>
                    </div>
                    
                    {/* RIGHT: Summary */}
                    <div>
                      <div className="text-[#999999] mb-4" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Summary
                      </div>
                      
                      {/* Quick takeaway */}
                      <div className="mb-4 p-4 bg-[#f0fdf4] border-l-4 border-[#10b981] rounded-r-lg">
                        <p className="text-[#065f46]" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.6' }}>
                          Strong content momentum continues; short-form tips are outperforming deep dives 2:1. Focus needed on CTAs to convert views into deals.
                        </p>
                      </div>

                      {/* Key points */}
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-start gap-2 mb-1">
                            <span className="text-[#10b981] mt-1 text-lg">✓</span>
                            <div className="flex-1">
                              <p className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                                Views & followers exceeding targets
                              </p>
                              <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                                54K views (+12%) and +180 followers show sustained audience growth.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-start gap-2 mb-1">
                            <span className="text-[#f59e0b] mt-1 text-lg">⚠</span>
                            <div className="flex-1">
                              <p className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                                Deal conversion needs attention
                              </p>
                              <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                                Only 2 deals closed (down from 3). Posts lack clear CTAs at critical moments.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-start gap-2 mb-1">
                            <span className="text-[#10b981] mt-1 text-lg">→</span>
                            <div className="flex-1">
                              <p className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                                Execution slightly below plan
                              </p>
                              <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                                4 of 5 planned posts published; quality maintained despite reduced volume.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA */}
                      <div className="mt-5 pt-4 border-t border-[#e0e0e0]">
                        <p className="text-[#666666] mb-2" style={{ fontSize: '11px', fontWeight: '500' }}>
                          See detailed breakdown in
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <button 
                            onClick={() => scrollToSection('goals')}
                            className="text-[#10b981] hover:underline" 
                            style={{ fontSize: '12px', fontWeight: '600' }}
                          >
                            Goal progress
                          </button>
                          <span className="text-[#e0e0e0]">•</span>
                          <button 
                            onClick={() => scrollToSection('insights')}
                            className="text-[#10b981] hover:underline" 
                            style={{ fontSize: '12px', fontWeight: '600' }}
                          >
                            Key insights
                          </button>
                          <span className="text-[#e0e0e0]">•</span>
                          <button 
                            onClick={() => scrollToSection('recommendations')}
                            className="text-[#10b981] hover:underline" 
                            style={{ fontSize: '12px', fontWeight: '600' }}
                          >
                            Recommendations
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionCard>

                {/* Section B: Goal progress */}
                <section id="goals" className="scroll-mt-48">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                        Goal progress
                      </h2>
                      <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                        Week-to-date vs target
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 shadow-sm">
                    {/* Top overview bar */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e0e0e0]">
                      <div className="flex items-center gap-3">
                        <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '500' }}>
                          Goals on track:
                        </span>
                        <span className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '700' }}>
                          2/3
                        </span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                          <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                          <div className="w-2 h-2 rounded-full bg-[#dc2626]" />
                        </div>
                      </div>
                      <button
                        className="text-[#10b981] hover:text-[#059669] transition-colors"
                        style={{ fontSize: '13px', fontWeight: '600' }}
                      >
                        Edit goals
                      </button>
                    </div>

                    {/* Goal rows */}
                    <div>
                      <GoalRow
                        name="Followers"
                        description="Net new followers"
                        actual="+180"
                        target="+200"
                        percentage={90}
                        trend="accelerating"
                        tooltip="Net followers gained during the week."
                        onViewDrivers={() => scrollToSection('execution')}
                      />
                      <GoalRow
                        name="Posts"
                        description="Planned posts completed"
                        actual="4"
                        target="5"
                        percentage={80}
                        trend="stable"
                        tooltip="Completed posts out of planned posts."
                        onViewDrivers={() => scrollToSection('execution')}
                      />
                      <GoalRow
                        name="Deals"
                        description="Collab deals closed"
                        actual="2"
                        target="3"
                        percentage={67}
                        trend="declining"
                        tooltip="Deals attributed to this week."
                        warningNote="Behind target — CTA quality flagged in insights."
                        onViewDrivers={() => scrollToSection('insights')}
                      />
                    </div>
                  </div>
                </section>

                {/* Section C: Execution analysis */}
                <SectionCard id="execution" title="Execution analysis">
                  {/* Block A: Completion summary */}
                  <div className="mb-6 pb-6 border-b border-[#e0e0e0]">
                    <div className="text-[#999999] mb-4" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Completion summary
                    </div>
                    
                    {/* KPI metrics row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                          Planned actions
                        </div>
                        <div className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
                          10
                        </div>
                      </div>
                      <div>
                        <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                          Completed
                        </div>
                        <div className="text-[#10b981]" style={{ fontSize: '20px', fontWeight: '700' }}>
                          7
                        </div>
                      </div>
                      <div>
                        <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                          On-time
                        </div>
                        <div className="text-[#10b981]" style={{ fontSize: '20px', fontWeight: '700' }}>
                          5
                        </div>
                      </div>
                      <div>
                        <div className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500' }}>
                          Skipped
                        </div>
                        <div className="text-[#dc2626]" style={{ fontSize: '20px', fontWeight: '700' }}>
                          3
                        </div>
                      </div>
                    </div>

                    {/* Execution rate bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                          Execution rate: 70%
                        </span>
                      </div>
                      <div className="h-2 bg-[#fef3c7] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#f59e0b] rounded-full"
                          style={{ width: '70%' }}
                        />
                      </div>
                    </div>

                    {/* Summary text */}
                    <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      Execution was solid overall; missed actions were mostly deal-related.
                    </p>
                  </div>

                  {/* Block B: Actions executed */}
                  <div>
                    {/* Header with filters */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Actions executed
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="px-2.5 py-1.5 border border-[#e0e0e0] rounded-lg text-[#666666] bg-white hover:border-[#1a1a1a] transition-colors" style={{ fontSize: '12px', fontWeight: '500' }}>
                          <option>Status</option>
                          <option>Completed</option>
                          <option>Late</option>
                          <option>Skipped</option>
                        </select>
                        <select className="px-2.5 py-1.5 border border-[#e0e0e0] rounded-lg text-[#666666] bg-white hover:border-[#1a1a1a] transition-colors" style={{ fontSize: '12px', fontWeight: '500' }}>
                          <option>Goal</option>
                          <option>Followers</option>
                          <option>Posts</option>
                          <option>Deals</option>
                        </select>
                        <label className="flex items-center gap-2 px-2.5 py-1.5 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors cursor-pointer">
                          <input type="checkbox" className="w-3.5 h-3.5" />
                          <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                            Only missed
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Action rows list */}
                    <div>
                      <ActionRow
                        title="Create 10 topic ideas"
                        status="completed"
                        linkedGoal="Goal: Posts"
                        timeEstimate="30-45 min"
                        hasEvidence={true}
                        onAddToPlan={() => {}}
                        onViewEvidence={() => scrollToSection('insights')}
                      />
                      <ActionRow
                        title="Write 3 short scripts"
                        status="completed"
                        linkedGoal="Goal: Posts"
                        timeEstimate="60-90 min"
                        hasEvidence={true}
                        onAddToPlan={() => {}}
                        onViewEvidence={() => scrollToSection('insights')}
                      />
                      <ActionRow
                        title="Schedule 4 posts"
                        status="completed"
                        linkedGoal="Goal: Posts"
                        timeEstimate="15-20 min"
                        hasEvidence={false}
                        onAddToPlan={() => {}}
                      />
                      <ActionRow
                        title="Test stronger CTA in the last 3 seconds"
                        status="late"
                        linkedGoal="Goal: Deals"
                        timeEstimate="45-60 min"
                        hasEvidence={true}
                        onAddToPlan={() => {}}
                        onViewEvidence={() => scrollToSection('insights')}
                      />
                      <ActionRow
                        title="DM 10 potential brand partners"
                        status="skipped"
                        linkedGoal="Goal: Deals"
                        timeEstimate="30-45 min"
                        hasEvidence={false}
                        skipReason="not enough time"
                        onAddToPlan={() => {}}
                      />
                      <ActionRow
                        title="Repurpose best-performing format"
                        status="completed"
                        linkedGoal="Goal: Followers"
                        timeEstimate="40-60 min"
                        hasEvidence={true}
                        onAddToPlan={() => {}}
                        onViewEvidence={() => scrollToSection('insights')}
                      />
                      <ActionRow
                        title="Review comments and pin 3 replies"
                        status="skipped"
                        linkedGoal="Goal: Followers"
                        timeEstimate="15-20 min"
                        hasEvidence={false}
                        skipReason="waiting for approval"
                        onAddToPlan={() => {}}
                      />
                    </div>
                  </div>
                </SectionCard>

                {/* Section D: Key insights */}
                <section id="insights" className="scroll-mt-48">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                        Key insights
                      </h2>
                      <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                        3 concise insights with evidence
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 shadow-sm">
                    <InsightAccordion
                      headline="Short workflow tips drove higher retention"
                      signal="Median views"
                      signalDelta="▲12% (48K → 54K)"
                      isPositive={true}
                      evidence={[
                        '3 posts in \'workflow tips\' cluster',
                        'Above-median retention on 18-25s videos',
                      ]}
                      confidence="high"
                      defaultExpanded={true}
                      onUsePlan={() => {}}
                      onViewEvidence={() => scrollToSection('execution')}
                    />
                    <InsightAccordion
                      headline="CTA inconsistency likely reduced deal conversions"
                      signal="Deals"
                      signalDelta="▼1 (3 → 2)"
                      isPositive={false}
                      evidence={[
                        '2 posts missing a clear CTA',
                        'Skipped \'DM outreach\' action',
                      ]}
                      confidence="medium"
                      defaultExpanded={false}
                      onUsePlan={() => {}}
                      onViewEvidence={() => scrollToSection('execution')}
                    />
                    <InsightAccordion
                      headline="Posting cadence was stable but topic spread diluted impact"
                      signal="Posts"
                      signalDelta="4/5 completed (80%)"
                      isPositive={undefined}
                      evidence={[
                        '3 topics with small sample sizes',
                        'Top topic outperformed others by +18%',
                      ]}
                      confidence="medium"
                      defaultExpanded={false}
                      onViewEvidence={() => scrollToSection('execution')}
                    />
                  </div>
                </section>

                {/* Section E: Challenges & issues */}
                <section id="issues" className="scroll-mt-48">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                        Challenges & issues
                      </h2>
                      <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                        Top blockers to address next week
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 shadow-sm">
                    <IssueRow
                      title="CTA was inconsistent across posts"
                      severity="high"
                      cause="Only 2/5 posts included a clear CTA."
                      onViewEvidence={() => scrollToSection('execution')}
                    />
                    <IssueRow
                      title="Deal outreach execution was missed"
                      severity="medium"
                      cause="DM outreach task was skipped this week."
                      onViewEvidence={() => scrollToSection('execution')}
                    />
                    <IssueRow
                      title="Topic spread diluted performance"
                      severity="medium"
                      cause="Content covered 3 topics with low sample size each."
                      onViewEvidence={() => scrollToSection('insights')}
                    />
                    <IssueRow
                      title="One post underperformed due to weak hook"
                      severity="low"
                      cause="Drop-off in the first 2 seconds."
                      onViewEvidence={() => scrollToSection('insights')}
                    />
                  </div>
                </section>

                {/* Section H: Next week smart plan */}
                <section id="nextplan" className="scroll-mt-48">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h2 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
                          Next week smart plan
                        </h2>
                      </div>
                      <p className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
                        Auto-adjusted from this week's performance and execution.
                      </p>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors"
                        style={{ fontSize: '13px', fontWeight: '600' }}
                      >
                        Open plan
                      </button>
                      <button
                        className="text-[#10b981] hover:text-[#059669] transition-colors"
                        style={{ fontSize: '13px', fontWeight: '600' }}
                      >
                        Edit goals
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 shadow-sm">
                    {/* Adjusted goals table */}
                    <div className="mb-6 pb-6 border-b border-[#e0e0e0]">
                      <div className="text-[#999999] mb-4" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Adjusted goals
                      </div>
                      <div>
                        <AdjustedGoalRow
                          goal="Followers"
                          newTarget="+220"
                          change="▲10%"
                          changeType="increase"
                          reason="Format retention improved"
                          onWhyClick={() => scrollToSection('insights')}
                        />
                        <AdjustedGoalRow
                          goal="Posts"
                          newTarget="6/6"
                          change="▲1"
                          changeType="increase"
                          reason="Batch scripting planned"
                          onWhyClick={() => scrollToSection('insights')}
                        />
                        <AdjustedGoalRow
                          goal="Deals"
                          newTarget="3"
                          change="▲1"
                          changeType="increase"
                          reason="CTA + outreach focus"
                          onWhyClick={() => scrollToSection('insights')}
                        />
                      </div>
                    </div>

                    {/* Weekly schedule */}
                    <div className="mb-6 pb-6 border-b border-[#e0e0e0]">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Weekly schedule
                        </div>
                      </div>
                      <div className="space-y-0">
                        <DayScheduleRow day="Mon" actions={['Write 3 scripts']} />
                        <DayScheduleRow day="Tue" actions={['Record 2 short posts']} />
                        <DayScheduleRow day="Wed" actions={['Schedule remaining posts']} />
                        <DayScheduleRow day="Thu" actions={['Add CTA + pin replies']} />
                        <DayScheduleRow day="Fri" actions={['DM 10 partners']} />
                        <DayScheduleRow day="Sat" actions={['Repurpose best format']} />
                        <DayScheduleRow day="Sun" actions={['Review results + adjust']} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN - Sticky Sidebar (4/12) */}
              <div className="lg:col-span-4">
                <div className="sticky top-6 space-y-6">
                  {/* Card 1: On this page (Navigation) */}
                  <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-5 shadow-sm">
                    <h3 className="text-[#1a1a1a] mb-4" style={{ fontSize: '14px', fontWeight: '700' }}>
                      On this page
                    </h3>
                    <div className="space-y-1">
                      {navSections.map((section) => (
                        <SidebarNavItem
                          key={section.id}
                          label={section.label}
                          isActive={activeSection === section.id}
                          onClick={() => scrollToSection(section.id)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card 2: Quick actions */}
                  <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-5 shadow-sm">
                    <h3 className="text-[#1a1a1a] mb-4" style={{ fontSize: '14px', fontWeight: '700' }}>
                      Quick actions
                    </h3>
                    <div className="space-y-3">
                      <button
                        className="w-full px-4 py-2.5 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors"
                        style={{ fontSize: '14px', fontWeight: '600' }}
                      >
                        Open plan
                      </button>
                      <button
                        className="w-full px-4 py-2.5 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
                        style={{ fontSize: '14px', fontWeight: '600' }}
                      >
                        <Sparkles className="w-4 h-4 text-[#666666]" />
                        <span className="text-[#666666]">Regenerate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar - Mobile Only */}
      <BottomTabBar activeItem="intelligence" onNavigate={onNavigate} />

      {/* Toast notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
