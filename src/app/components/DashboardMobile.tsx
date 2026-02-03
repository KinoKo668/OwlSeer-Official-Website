import React from 'react';
import {
  TrendingUp,
  Users,
  Eye,
  Heart,
  Activity,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Calendar,
  Zap,
  Target,
  Flame,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Play,
  Plus,
  Info,
} from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';
import { MobileHeader } from './MobileHeader';

type Language = 'en' | 'zh';

const translations = {
  en: {
    overview: 'Overview',
    today: 'Today',
    thisWeek: 'This Week',
    viewAll: 'View All',
    
    // Quick Stats
    followers: 'Followers',
    views: 'Views',
    likes: 'Likes',
    engagement: 'Engagement',
    vsLastWeek: 'vs last week',
    
    // AI Diagnosis
    aiDiagnosis: 'AI Diagnosis',
    currentStage: 'Stable Growth',
    mainIssue: 'Main Issue',
    issueText: 'Content format drifting from audience expectations',
    thisWeekAction: 'This Week\'s Action',
    actionText: 'Return to 3-part structure in next 2 uploads',
    viewDetails: 'View Details',
    
    // Today's Tasks
    todayTasks: 'Today\'s Tasks',
    uploadVideo: 'Upload video to Wed Prime slot',
    reviewDraft: 'Review draft script for Friday',
    taskCompleted: 'All tasks completed! 🎉',
    
    // Content Pipeline
    contentPipeline: 'Content Pipeline',
    daysUntilPost: 'days until post',
    viewCalendar: 'View Calendar',
    posted: 'Posted',
    draft: 'Draft',
    scheduled: 'Scheduled',
    
    // Trending Opportunities
    trendingOpportunities: 'Trending Opportunities',
    perfectFit: 'Perfect Fit',
    goodMatch: 'Good Match',
    emerging: 'Emerging',
    peakingSoon: 'Peaking Soon',
    affinity: 'Affinity',
    
    // Slot types
    coreContent: 'Core Content',
    experiment: 'Experiment',
    monetized: 'Monetized',
    timely: 'Timely',
  },
  zh: {
    overview: '概览',
    today: '今日',
    thisWeek: '本周',
    viewAll: '查看全部',
    
    followers: '粉丝',
    views: '浏览',
    likes: '点赞',
    engagement: '互动率',
    vsLastWeek: '对比上周',
    
    aiDiagnosis: 'AI 诊断',
    currentStage: '稳定增长',
    mainIssue: '主要问题',
    issueText: '内容格式偏离受众期待',
    thisWeekAction: '本周行动',
    actionText: '在接下来2个视频中回归三段式结构',
    viewDetails: '查看详情',
    
    todayTasks: '今日任务',
    uploadVideo: '上传视频到周三黄金时段',
    reviewDraft: '审阅周五脚本草稿',
    taskCompleted: '所有任务已完成！🎉',
    
    contentPipeline: '内容管道',
    daysUntilPost: '天后发布',
    viewCalendar: '查看日历',
    posted: '已发布',
    draft: '草稿',
    scheduled: '已排期',
    
    trendingOpportunities: '趋势机会',
    perfectFit: '完美匹配',
    goodMatch: '良好匹配',
    emerging: '新兴趋势',
    peakingSoon: '即将达峰',
    affinity: '匹配度',
    
    coreContent: '核心内容',
    experiment: '实验',
    monetized: '变现',
    timely: '时效',
  },
};

interface DashboardMobileProps {
  onNavigate?: (page: string) => void;
}

export function DashboardMobile({ onNavigate }: DashboardMobileProps) {
  const [language, setLanguage] = React.useState<Language>('en');
  const [accountDropdownOpen, setAccountDropdownOpen] = React.useState(false);
  const [selectedAccount, setSelectedAccount] = React.useState('TechReviews_US');
  const [completedTasks, setCompletedTasks] = React.useState<Set<number>>(new Set());

  const t = translations[language];

  const mockAccounts = [
    {
      id: 'TechReviews_US',
      name: 'TechReviews_US',
      displayName: '@techreviews_us',
      followers: '125.6K',
      avatar: 'TR',
    },
    {
      id: 'SarahTech',
      name: 'SarahTech',
      displayName: '@sarahtech',
      followers: '45.2K',
      avatar: 'ST',
    },
  ];

  const currentAccount = mockAccounts.find(acc => acc.id === selectedAccount) || mockAccounts[0];

  const toggleTask = (taskId: number) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const todayTasks = [
    { id: 1, text: t.uploadVideo, priority: 'high' as const },
    { id: 2, text: t.reviewDraft, priority: 'medium' as const },
  ];

  const allTasksCompleted = todayTasks.every(task => completedTasks.has(task.id));

  return (
    <div className="flex flex-col h-screen bg-[#fafafa]">
      {/* Top Header */}
      <MobileHeader
        currentAccount={currentAccount}
        accounts={mockAccounts}
        onAccountChange={setSelectedAccount}
        language={language}
        onLanguageChange={() => setLanguage(language === 'en' ? 'zh' : 'en')}
        showAccountSelector={true}
        showNotifications={true}
        showLanguageToggle={true}
        hasNotifications={true}
      />

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-20">
        <div className="p-4 space-y-4">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Followers */}
            <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#eff6ff] flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                  {t.followers}
                </span>
              </div>
              <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1' }}>
                125.6K
              </div>
              <div className="flex items-center gap-1 text-[#16a34a]" style={{ fontSize: '11px', fontWeight: '600' }}>
                <ArrowUpRight className="w-3 h-3" />
                +2.4%
              </div>
            </div>

            {/* Views */}
            <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#fef3c7] flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                  {t.views}
                </span>
              </div>
              <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1' }}>
                3.2M
              </div>
              <div className="flex items-center gap-1 text-[#16a34a]" style={{ fontSize: '11px', fontWeight: '600' }}>
                <ArrowUpRight className="w-3 h-3" />
                +15.8%
              </div>
            </div>

            {/* Likes */}
            <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#fce7f3] flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#ec4899]" />
                </div>
                <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                  {t.likes}
                </span>
              </div>
              <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1' }}>
                890K
              </div>
              <div className="flex items-center gap-1 text-[#16a34a]" style={{ fontSize: '11px', fontWeight: '600' }}>
                <ArrowUpRight className="w-3 h-3" />
                +8.2%
              </div>
            </div>

            {/* Engagement */}
            <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#e9d5ff] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#a855f7]" />
                </div>
                <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500' }}>
                  {t.engagement}
                </span>
              </div>
              <div className="text-[#1a1a1a] mb-1" style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1' }}>
                4.2%
              </div>
              <div className="flex items-center gap-1 text-[#dc2626]" style={{ fontSize: '11px', fontWeight: '600' }}>
                <ArrowDownRight className="w-3 h-3" />
                -0.3%
              </div>
            </div>
          </div>

          {/* AI Diagnosis Card */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#404040] rounded-xl p-4 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#fbbf24]" />
              <h3 style={{ fontSize: '16px', fontWeight: '700' }}>{t.aiDiagnosis}</h3>
            </div>

            <div className="space-y-3">
              {/* Current Stage */}
              <div>
                <div className="text-white/70 mb-1" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Current Stage
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#4ade80]" />
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>{t.currentStage}</span>
                </div>
              </div>

              {/* Main Issue */}
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-white/70 mb-1.5" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {t.mainIssue}
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {t.issueText}
                </p>
              </div>

              {/* This Week's Action */}
              <div className="bg-[#fbbf24]/20 rounded-lg p-3 border border-[#fbbf24]/30">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-4 h-4 text-[#fbbf24]" />
                  <div className="text-[#fbbf24]" style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {t.thisWeekAction}
                  </div>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {t.actionText}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate?.('monitor')}
              className="w-full mt-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center gap-2"
              style={{ fontSize: '14px', fontWeight: '600' }}
            >
              {t.viewDetails}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#3b82f6]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                  {t.todayTasks}
                </h3>
              </div>
              <div className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
                {completedTasks.size}/{todayTasks.length}
              </div>
            </div>

            {allTasksCompleted ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#dcfce7] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#16a34a]" />
                </div>
                <p className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
                  {t.taskCompleted}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {todayTasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all ${
                      completedTasks.has(task.id)
                        ? 'bg-[#f5f5f5] border-[#e0e0e0]'
                        : 'bg-white border-[#e0e0e0] hover:border-[#3b82f6]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 mt-0.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        completedTasks.has(task.id)
                          ? 'bg-[#16a34a] border-[#16a34a]'
                          : 'border-[#d0d0d0]'
                      }`}
                    >
                      {completedTasks.has(task.id) && (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p
                        className={`${
                          completedTasks.has(task.id) ? 'text-[#999999] line-through' : 'text-[#1a1a1a]'
                        }`}
                        style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.4' }}
                      >
                        {task.text}
                      </p>
                      {task.priority === 'high' && !completedTasks.has(task.id) && (
                        <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fee2e2]">
                          <span className="text-[#dc2626]" style={{ fontSize: '10px', fontWeight: '700' }}>
                            HIGH PRIORITY
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content Pipeline Preview */}
          <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#8b5cf6]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                  {t.contentPipeline}
                </h3>
              </div>
              <button
                onClick={() => onNavigate?.('scheduling')}
                className="text-[#3b82f6] flex items-center gap-1 hover:text-[#2563eb]"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                {t.viewCalendar}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {/* Today - Posted */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#dcfce7] border border-[#86efac]">
                <div className="text-center">
                  <div className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1' }}>
                    Wed
                  </div>
                  <div className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                    Today
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></div>
                    <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                      {t.coreContent}
                    </span>
                  </div>
                  <p className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}>
                    iPhone 16 Pro vs Samsung Galaxy S24
                  </p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#16a34a]">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                  <span className="text-white" style={{ fontSize: '10px', fontWeight: '700' }}>
                    {t.posted}
                  </span>
                </div>
              </div>

              {/* Friday - Scheduled */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#e0e0e0]">
                <div className="text-center">
                  <div className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1' }}>
                    Fri
                  </div>
                  <div className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                    2 days
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                    <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                      {t.monetized}
                    </span>
                  </div>
                  <p className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}>
                    Best Budget Earbuds Under $50
                  </p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#eff6ff]">
                  <Clock className="w-3 h-3 text-[#3b82f6]" />
                  <span className="text-[#3b82f6]" style={{ fontSize: '10px', fontWeight: '700' }}>
                    {t.scheduled}
                  </span>
                </div>
              </div>

              {/* Sunday - Draft */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-dashed border-[#d0d0d0]">
                <div className="text-center">
                  <div className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1' }}>
                    Sun
                  </div>
                  <div className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                    4 days
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div>
                    <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                      {t.experiment}
                    </span>
                  </div>
                  <p className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}>
                    Unboxing + First Impressions Format
                  </p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#fef3c7]">
                  <span className="text-[#f59e0b]" style={{ fontSize: '10px', fontWeight: '700' }}>
                    {t.draft}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Opportunities */}
          <div className="bg-white rounded-xl border border-[#e0e0e0] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#f97316]" />
                <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700' }}>
                  {t.trendingOpportunities}
                </h3>
              </div>
              <button
                onClick={() => onNavigate?.('hashtag-radar')}
                className="text-[#3b82f6] flex items-center gap-1 hover:text-[#2563eb]"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                {t.viewAll}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Horizontal Scroll Cards */}
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
              {/* Perfect Fit Card */}
              <div className="flex-shrink-0 w-[280px] rounded-xl border-2 border-[#16a34a] bg-[#f0fdf4] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#16a34a] text-white" style={{ fontSize: '10px', fontWeight: '700' }}>
                    {t.perfectFit}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#dcfce7]">
                    <span className="text-[#166534]" style={{ fontSize: '12px', fontWeight: '700' }}>94%</span>
                  </div>
                </div>
                <h4 className="text-[#1a1a1a] mb-2" style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.3' }}>
                  Budget Smartphone Comparisons
                </h4>
                <p className="text-[#166534] mb-3" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                  High demand for value-focused phone reviews in your niche
                </p>
                <div className="flex items-center gap-2 text-[#166534]" style={{ fontSize: '11px', fontWeight: '600' }}>
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Peaking in 3-5 days</span>
                </div>
              </div>

              {/* Good Match Card */}
              <div className="flex-shrink-0 w-[280px] rounded-xl border border-[#3b82f6] bg-[#eff6ff] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#3b82f6] text-white" style={{ fontSize: '10px', fontWeight: '700' }}>
                    {t.goodMatch}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#dbeafe]">
                    <span className="text-[#1e40af]" style={{ fontSize: '12px', fontWeight: '700' }}>78%</span>
                  </div>
                </div>
                <h4 className="text-[#1a1a1a] mb-2" style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.3' }}>
                  Smart Home Setup Guides
                </h4>
                <p className="text-[#1e40af] mb-3" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                  Growing interest in beginner-friendly smart home content
                </p>
                <div className="flex items-center gap-2 text-[#1e40af]" style={{ fontSize: '11px', fontWeight: '600' }}>
                  <Activity className="w-3.5 h-3.5" />
                  <span>Steady growth</span>
                </div>
              </div>

              {/* Emerging Card */}
              <div className="flex-shrink-0 w-[280px] rounded-xl border border-[#f59e0b] bg-[#fffbeb] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#f59e0b] text-white" style={{ fontSize: '10px', fontWeight: '700' }}>
                    {t.emerging}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fef3c7]">
                    <span className="text-[#92400e]" style={{ fontSize: '12px', fontWeight: '700' }}>65%</span>
                  </div>
                </div>
                <h4 className="text-[#1a1a1a] mb-2" style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.3' }}>
                  Foldable Phone Reviews
                </h4>
                <p className="text-[#92400e] mb-3" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                  New trend gaining traction in tech community
                </p>
                <div className="flex items-center gap-2 text-[#92400e]" style={{ fontSize: '11px', fontWeight: '600' }}>
                  <Zap className="w-3.5 h-3.5" />
                  <span>Early opportunity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate?.('content-studio')}
              className="p-4 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-white flex flex-col items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Plus className="w-6 h-6" />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>New Content</span>
            </button>
            <button
              onClick={() => onNavigate?.('copilot')}
              className="p-4 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white flex flex-col items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-6 h-6" />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Ask Copilot</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeItem="home" onNavigate={onNavigate} />
    </div>
  );
}