import React from 'react';
import {
  TrendingUp,
  TrendingDown,
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
  Lightbulb,
  BarChart3,
  MessageSquare,
  Plus,
} from 'lucide-react';
import { MobileLayout } from './MobileLayout';

type Language = 'en' | 'zh';

const translations = {
  en: {
    // Greeting
    goodMorning: 'Good Morning',
    goodAfternoon: 'Good Afternoon',
    goodEvening: 'Good Evening',
    
    // Account Performance Overview
    accountOverview: 'Account Overview',
    last7Days: 'Last 7 Days',
    followers: 'Followers',
    totalViews: 'Total Views',
    totalLikes: 'Total Likes',
    engagementRate: 'Engagement Rate',
    last30Videos: 'Last 30 Videos',
    
    // Quick Actions
    quickActions: 'Quick Actions',
    generateIdeas: 'Generate Ideas',
    schedulePosts: 'Schedule Posts',
    checkTrends: 'Check Trends',
    askCopilot: 'Ask Copilot',
    
    // Today's Tasks
    todayTasks: 'Today\'s Tasks',
    viewAll: 'View All',
    uploadVideo: 'Upload video to Wed Prime slot',
    reviewScript: 'Review script for Friday post',
    checkPerformance: 'Check last video performance',
    noTasksToday: 'No tasks today',
    allDone: 'All done for today! 🎉',
    
    // AI Recommendation
    aiRecommendation: 'AI Recommendation',
    quickWin: 'Quick Win',
    tryProductFirstHook: 'Try "Product-First" Hook',
    boostEngagement: 'Boost engagement by ~12%',
    generate: 'Generate',
    
    // This Week
    thisWeek: 'This Week',
    posted: 'Posted',
    scheduled: 'Scheduled',
    draft: 'Draft',
    viewCalendar: 'View Calendar',
  },
  zh: {
    goodMorning: '早上好',
    goodAfternoon: '下午好',
    goodEvening: '晚上好',
    
    accountOverview: '账户概览',
    last7Days: '最近7天',
    followers: '粉丝',
    totalViews: '总浏览量',
    totalLikes: '总点赞数',
    engagementRate: '互动率',
    last30Videos: '最近30个视频',
    
    quickActions: '快捷操作',
    generateIdeas: '生成创意',
    schedulePosts: '发布排期',
    checkTrends: '查看热点',
    askCopilot: '询问 Copilot',
    
    todayTasks: '今日任务',
    viewAll: '查看全部',
    uploadVideo: '上传视频到周三黄金时段',
    reviewScript: '审阅周五发布脚本',
    checkPerformance: '查看上个视频表现',
    noTasksToday: '今日无任务',
    allDone: '今日任务全部完成！🎉',
    
    aiRecommendation: 'AI 推荐',
    quickWin: 'Quick Win',
    tryProductFirstHook: '尝试"产品优先"钩子',
    boostEngagement: '提升互动率约 12%',
    generate: '生成',
    
    thisWeek: '本周内容',
    posted: '已发布',
    scheduled: '已排期',
    draft: '草稿',
    viewCalendar: '查看日历',
  },
};

interface HomeMobileProps {
  onNavigate?: (page: string, question?: string) => void;
}

export function HomeMobile({ onNavigate }: HomeMobileProps) {
  const [language, setLanguage] = React.useState<Language>('en');
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

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t.goodMorning;
    if (hour < 18) return t.goodAfternoon;
    return t.goodEvening;
  };

  const toggleTask = (taskId: number) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  // Today's core metrics - Aligned with Web Dashboard
  const accountMetrics = [
    {
      icon: Users,
      label: t.followers,
      value: '125.6K',
      change: '+12.5%',
      isPositive: true,
      color: '#6366F1',
      bgColor: '#EEF2FF',
    },
    {
      icon: Eye,
      label: t.totalViews,
      value: '3.2M',
      change: '-5.2%',
      isPositive: false,
      color: '#8B5CF6',
      bgColor: '#F3E8FF',
    },
    {
      icon: Heart,
      label: t.totalLikes,
      value: '890.0K',
      change: '+8.1%',
      isPositive: true,
      color: '#EC4899',
      bgColor: '#FCE7F3',
    },
    {
      icon: Activity,
      label: t.engagementRate,
      sublabel: t.last30Videos,
      value: '4.2%',
      change: '+0.8%',
      isPositive: true,
      isHighlighted: true,
      color: '#0F766E',
      bgColor: 'linear-gradient(135deg, #CCFBF1 0%, #E0F2FE 100%)',
    },
  ];

  // Quick actions
  const quickActions = [
    {
      icon: Lightbulb,
      label: t.generateIdeas,
      color: '#8b5cf6',
      bgColor: '#f3e8ff',
      action: () => onNavigate?.('copilot', 'Generate 10 TikTok video ideas for this week'),
    },
    {
      icon: Calendar,
      label: t.schedulePosts,
      color: '#3b82f6',
      bgColor: '#eff6ff',
      action: () => onNavigate?.('scheduling'),
    },
    {
      icon: Flame,
      label: t.checkTrends,
      color: '#f97316',
      bgColor: '#fff7ed',
      action: () => onNavigate?.('hashtag'),
    },
    {
      icon: MessageSquare,
      label: t.askCopilot,
      color: '#10b981',
      bgColor: '#d1fae5',
      action: () => onNavigate?.('copilot'),
    },
  ];

  // Today's tasks
  const todayTasks = [
    { id: 1, text: t.uploadVideo, completed: false },
    { id: 2, text: t.reviewScript, completed: false },
    { id: 3, text: t.checkPerformance, completed: false },
  ];

  const activeTasks = todayTasks.filter(task => !completedTasks.has(task.id));
  const allTasksCompleted = activeTasks.length === 0;

  return (
    <MobileLayout
      currentAccount={currentAccount}
      accounts={mockAccounts}
      onAccountChange={setSelectedAccount}
      language={language}
      onLanguageChange={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      activeTab="home"
      onNavigate={onNavigate}
      showAccountSelector={true}
      showNotifications={true}
      showLanguageToggle={true}
      hasNotifications={true}
    >
      {/* Content */}
      <div className="px-4 pt-4 pb-6 space-y-5">
        {/* Greeting Section */}
        <div>
          <h1 className="text-[#1a1a1a] mb-1" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.2' }}>
            {getGreeting()}
          </h1>
          <p className="text-[#6b7280]" style={{ fontSize: '15px' }}>
            {currentAccount.displayName}
          </p>
        </div>

        {/* Account Performance - 2x2 Grid */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '700' }}>
              {t.accountOverview}
            </h2>
            <span className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '600' }}>
              {t.last7Days}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {accountMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const isHighlighted = metric.isHighlighted;
              
              return (
                <button
                  key={index}
                  className={`rounded-xl p-4 text-left active:scale-98 transition-transform ${
                    isHighlighted ? '' : 'bg-white border border-[#e5e7eb]'
                  }`}
                  onClick={() => onNavigate?.('intelligence')}
                  style={{ 
                    minHeight: '112px',
                    ...(isHighlighted ? { background: metric.bgColor } : {})
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon 
                      className="w-4 h-4" 
                      style={{ color: metric.color }} 
                    />
                    <div style={{ fontSize: '11px', fontWeight: '600', color: isHighlighted ? metric.color : '#6B7280' }}>
                      {metric.label}
                      {metric.sublabel && (
                        <span style={{ fontSize: '9px', fontWeight: '500', opacity: 0.6 }}>
                          {' '}· {metric.sublabel}
                        </span>
                      )}
                    </div>
                  </div>
                  <div 
                    className="mb-1" 
                    style={{ 
                      fontSize: '24px', 
                      fontWeight: '700', 
                      lineHeight: '1',
                      letterSpacing: '-0.02em',
                      color: isHighlighted ? metric.color : '#111827'
                    }}
                  >
                    {metric.value}
                  </div>
                  <div className="flex items-center gap-1">
                    {metric.isPositive ? (
                      <TrendingUp className="w-3 h-3" style={{ color: '#059669' }} />
                    ) : (
                      <TrendingDown className="w-3 h-3" style={{ color: '#DC2626' }} />
                    )}
                    <span 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: '600',
                        color: metric.isPositive ? '#059669' : '#DC2626'
                      }}
                    >
                      {metric.change}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Actions - 2x2 Grid */}
        <div>
          <h2 className="text-[#1a1a1a] mb-3" style={{ fontSize: '17px', fontWeight: '700' }}>
            {t.quickActions}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="bg-white rounded-xl border border-[#e5e7eb] p-4 active:scale-98 transition-transform flex flex-col items-center justify-center text-center"
                  onClick={action.action}
                  style={{ minHeight: '100px' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: action.bgColor }}
                  >
                    <Icon className="w-6 h-6" style={{ color: action.color }} />
                  </div>
                  <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}>
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[#3b82f6]" />
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '700' }}>
                {t.todayTasks}
              </h3>
            </div>
            {!allTasksCompleted && (
              <span className="text-[#6b7280]" style={{ fontSize: '13px', fontWeight: '600' }}>
                {activeTasks.length}
              </span>
            )}
          </div>

          {allTasksCompleted ? (
            <div className="py-6 text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#dcfce7] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#16a34a]" />
              </div>
              <p className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
                {t.allDone}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {/* Quick Win Card - First Item */}
              <button
                onClick={() => onNavigate?.('copilot', 'Generate a TikTok script using Product-First hook strategy')}
                className="w-full bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] rounded-xl p-4 text-left active:scale-98 transition-transform shadow-lg"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/80" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {t.aiRecommendation}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#fbbf24] text-[#78350f]" style={{ fontSize: '10px', fontWeight: '700' }}>
                        {t.quickWin}
                      </span>
                    </div>
                    <h3 className="text-white mb-1" style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.3' }}>
                      {t.tryProductFirstHook}
                    </h3>
                    <p className="text-white/90" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                      {t.boostEngagement}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white">
                    <Sparkles className="w-4 h-4" />
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>{t.generate}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/80" />
                </div>
              </button>

              {/* Regular Tasks */}
              {todayTasks.slice(0, 3).map((task) => (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all active:scale-98 ${
                    completedTasks.has(task.id)
                      ? 'bg-[#f9fafb]'
                      : 'bg-white hover:bg-[#f9fafb]'
                  }`}
                  style={{ minHeight: '56px' }}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      completedTasks.has(task.id)
                        ? 'bg-[#16a34a] border-[#16a34a]'
                        : 'border-[#d1d5db]'
                    }`}
                  >
                    {completedTasks.has(task.id) && (
                      <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                    )}
                  </div>
                  <p
                    className={`flex-1 text-left ${
                      completedTasks.has(task.id) ? 'text-[#9ca3af] line-through' : 'text-[#1a1a1a]'
                    }`}
                    style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.4' }}
                  >
                    {task.text}
                  </p>
                </button>
              ))}
            </div>
          )}

          {!allTasksCompleted && todayTasks.length > 3 && (
            <button
              onClick={() => onNavigate?.('scheduling')}
              className="w-full mt-2 py-2 text-[#3b82f6] flex items-center justify-center gap-1 active:opacity-70 transition-opacity"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              {t.viewAll}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* This Week - Collapsed View */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#8b5cf6]" />
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '17px', fontWeight: '700' }}>
                {t.thisWeek}
              </h3>
            </div>
            <button
              onClick={() => onNavigate?.('scheduling')}
              className="text-[#3b82f6] flex items-center gap-1 active:opacity-70 transition-opacity"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              {t.viewCalendar}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Today */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#f0fdf4] border border-[#86efac]">
              <div className="text-center min-w-[40px]">
                <div className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1' }}>
                  Wed
                </div>
                <div className="text-[#6b7280]" style={{ fontSize: '10px', fontWeight: '600' }}>
                  Today
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1a1a1a] truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
                  iPhone 16 Pro Review
                </p>
              </div>
              <div className="px-2 py-1 rounded-full bg-[#16a34a] flex-shrink-0">
                <span className="text-white" style={{ fontSize: '10px', fontWeight: '700' }}>
                  {t.posted}
                </span>
              </div>
            </div>

            {/* Friday */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white">
              <div className="text-center min-w-[40px]">
                <div className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1' }}>
                  Fri
                </div>
                <div className="text-[#6b7280]" style={{ fontSize: '10px', fontWeight: '600' }}>
                  2d
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1a1a1a] truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Budget Earbuds Guide
                </p>
              </div>
              <div className="px-2 py-1 rounded-full bg-[#eff6ff] flex-shrink-0">
                <span className="text-[#3b82f6]" style={{ fontSize: '10px', fontWeight: '700' }}>
                  {t.scheduled}
                </span>
              </div>
            </div>

            {/* Sunday */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-dashed border-[#d1d5db]">
              <div className="text-center min-w-[40px]">
                <div className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1' }}>
                  Sun
                </div>
                <div className="text-[#6b7280]" style={{ fontSize: '10px', fontWeight: '600' }}>
                  4d
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#6b7280] truncate" style={{ fontSize: '14px', fontWeight: '600' }}>
                  Unboxing Format Test
                </p>
              </div>
              <div className="px-2 py-1 rounded-full bg-[#fef3c7] flex-shrink-0">
                <span className="text-[#f59e0b]" style={{ fontSize: '10px', fontWeight: '700' }}>
                  {t.draft}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Spacing for Tab Bar */}
        <div className="h-20"></div>
      </div>
    </MobileLayout>
  );
}