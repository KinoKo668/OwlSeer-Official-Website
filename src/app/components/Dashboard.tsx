import React, { memo } from 'react';
import {
  Bell,
  Plus,
  Sparkles,
  TrendingUp,
  Shield,
  ChevronDown,
  ChevronRight,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Eye,
  Heart,
  CheckCircle2,
  Hash,
  Flame,
  Radar,
  Lightbulb,
  AlertTriangle,
  Minus,
  ExternalLink,
  Brain,
  Target,
  Activity,
  DollarSign,
  AlertCircle,
  Info,
  Zap,
  Globe,
  PieChart,
  Menu,
  Clock,
  Check,
  Play,
  Lock,
  Unlock,
  TrendingDown,
  Award,
  BarChart3,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { AccountProfileSnapshot } from './AccountProfileSnapshot';
import { HomeMobile } from './HomeMobile';
import { WeeklyReportModule, WeeklyOverviewCard, CompactArchiveCard, QuickActionsCard } from './weeklyreport';
import { FeedbackDrawer } from './FeedbackDrawer';
import { useIsMobile } from './ui/use-mobile';
import { QuickWinCard } from './QuickWinCard';
import { RenderLogger } from './RenderLogger';
import { usePerformance } from '../contexts';
import { useSimulationTrigger } from './SimulationPageWrapper';

import { FeaturedOpportunityCard } from './FeaturedOpportunityCard';

type Language = 'en' | 'zh';

const translations = {
  en: {
    // Header
    greeting: 'Good morning, Creator Admin',
    account: 'Account',
    tier: 'Tier 1',
    searchPlaceholder: 'Ask AI Copilot anything...',
    newProject: 'New Project',
    userSignature: 'User Signature',
    
    // AI Diagnosis
    aiDiagnosis: 'AI Diagnosis',
    currentStage: 'Current Stage:',
    stableGrowth: 'Stable Growth',
    mainIssue: 'Main Issue:',
    issueDescription: 'Your content format is drifting from what your audience trusts. This weakens consistency.',
    thisWeeksPriority: 'This Week\'s Priority:',
    priorityAction: 'Return to the 3-part structure (hook → specs → verdict) in your next 2 uploads.',
    viewActionPlan: 'View Action Plan',
    
    // Account Performance
    accountPerformance: 'Account Performance',
    vsSimilar: 'vs. similar Tech & Gadgets creators',
    engagementRate: 'Engagement Rate',
    abovePeers: 'Above 65% of peers',
    engagementDesc: 'Strong audience connection. Maintain consistency in content format.',
    followers: 'Followers',
    followersDesc: 'Healthy growth rate for your tier',
    views7Day: 'Total Views',
    viewsDesc: 'Traffic spike from seasonal content',
    totalLikes: 'Total Likes',
    likesDesc: 'Consistent audience appreciation',
    vsLastWeek: 'vs last week',
    
    // Weekly Pipeline
    weeklyPipeline: 'This Week\'s Pipeline',
    pipelineDesc: 'AI-optimized execution plan • 4 slots active',
    viewFullCalendar: 'View Full Calendar',
    slotTypes: 'SLOT TYPES:',
    trustSlot: 'Core Content = Proven formats',
    riskSlot: 'Monetized Content = Commercial focus',
    testSlot: 'Experiment = New ideas',
    seasonalSlot: 'Timely = Time-sensitive',
    
    // Slot strategies
    stabilizeTraffic: 'Stabilize traffic',
    highRevenue: 'High revenue potential',
    formatExperiment: 'Format experiment',
    timelyContent: 'Timely content',
    
    // Days
    sun: 'Sun',
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    
    // Slot stages
    scripting: 'Scripting',
    shooting: 'Shooting',
    editing: 'Editing',
    published: 'Published',
    posted: 'Posted',
    
    // Account Health
    accountHealth: 'Account Health',
    allClear: 'ALL CLEAR',
    platformRisk: 'Platform Risk',
    platformRiskDesc: 'No copyright warnings • All content compliant',
    monetizationRisk: 'Monetization Risk',
    monetizationRiskDesc: 'Brand-safe content • Ready for partnerships',
    structuralRisk: 'Structural Risk',
    structuralRiskDesc: 'Format drift detected • Review recent videos',
    monitoring: 'Monitoring',
    lowRisk: 'Low Risk',
    watch: 'Watch',
    contentScanned: 'Content Scanned',
    issuesResolved: 'Issues Resolved',
    
    // Trending Opportunities
    trendingOpportunities: 'Trending Opportunities',
    filteredNiche: 'Filtered for Tech & Gadgets niche',
    scan: 'Scan',
    safe: 'SAFE',
    use: 'Use',
    nicheAffinity: 'Niche Affinity',
    silentReviewTip: 'Perfect for your niche — ASMR silent reviews trending with tech audiences',
    
    // Content Structure Analysis
    contentStructureAnalysis: 'Content Structure Analysis',
    mostUsed: 'Most Used',
    topPerformer: 'Top Performer',
    usageRate: 'Usage Rate',
    avgViewDuration: 'Avg View Duration',
    avgEngagement: 'Avg Engagement',
    videos: 'videos',
    singleSegment: 'Single Segment',
    singleSegmentDesc: 'No division, suitable for 15s shorts/ASMR',
    twoSegments: 'Two Segments',
    twoSegmentsDesc: 'Problem/Phenomenon → Solution/Result',
    threeSegments: 'Three Segments',
    threeSegmentsDesc: 'Hook → Body → Ending (90% of NA creators)',
    multiSegments: 'Multi Segments',
    multiSegmentsDesc: '4+ segments for long videos/complex tutorials',
    loopSegment: 'Loop Segment',
    loopSegmentDesc: 'Core content repeats, suitable for viral/beat-sync',
    qaSegment: 'Q&A Segment',
    qaSegmentDesc: 'Question → Answer → Interaction',
    challengeSegment: 'Challenge Segment',
    challengeSegmentDesc: 'Rules → Process → Result',
    
    // Content Category Insight
    contentFocus: 'Content Focus',
    last30Videos: 'Last 30 videos',
    bestPerforming: 'BEST PERFORMING',
    bestPerformingDesc: 'This category drives the highest engagement across your recent videos.',
    totalAnalyzed: 'Total analyzed',
    
    // Account Profile Snapshot
    accountProfileSnapshot: 'Account Profile Snapshot',
    basedOnLast30: 'Based on your last 30 videos',
    benchmarkedContext: 'Benchmarked vs creators in your category and follower range',
    topCategories: 'TOP 3 CATEGORIES',
    topStructures: 'TOP 3 STRUCTURES',
    viewBy: 'VIEW BY',
    showInsight: 'SHOW INSIGHT',
    contentCategory: 'Content Category',
    contentStructure: 'Content Structure',
    distribution: 'Distribution',
    performance: 'Performance',
    stability: 'Stability',
    contentDistribution: 'Content Distribution',
    distributionSummary: 'Top 3 items account for {percentage}% of recent content.',
    peerPerformance: 'Peer-Relative Performance',
    you: 'You',
    benchmarkContext: 'COMPARISON SCOPE',
    performanceExplanation: 'Your position relative to creators with similar follower count and content category. Higher percentile indicates stronger performance.',
    profileStability: 'Profile Stability Indicators',
    categoryConsistency: 'Category Consistency',
    structureConsistency: 'Structure Consistency',
    performanceVolatility: 'Performance Volatility',
    consistencyStrongDesc: 'Your content maintains a focused category mix, which helps build audience expectations.',
    consistencyStableDesc: 'Your content shows reasonable consistency in category distribution.',
    volatilityLowDesc: 'Your content performance is predictable and steady across recent videos.',
    volatilityModerateDesc: 'Some variation in performance, but within normal range for your category.',
    insightDistribution: 'Your content profile is concentrated in 2-3 core areas, providing clear audience positioning.',
    insightPerformanceHigh: 'Your content performs above the median of similar creators, indicating strong resonance with your audience.',
    insightPerformanceGood: 'Your content performs at or near the median of your peer group, showing solid baseline engagement.',
    insightPerformanceAverage: 'Your content performance is within the expected range for creators in your category and size.',
    insightStabilityStrong: 'Your content profile is concentrated and delivers predictable performance within your peer group.',
    insightStabilityStable: 'Your content shows stable patterns with moderate consistency across categories and structures.',
    insightStabilityVolatile: 'Your content profile shows variation that may indicate exploration or shifting strategy.',
  },
  zh: {
    // Header
    greeting: '早上好，创作者管理员',
    account: '账号',
    tier: '等级 1',
    searchPlaceholder: '向AI助手提问...',
    newProject: '新建项目',
    userSignature: '用户签名',
    
    // AI Diagnosis
    aiDiagnosis: 'AI 诊',
    currentStage: '当前阶段：',
    stableGrowth: '稳定增长',
    mainIssue: '主要问题：',
    issueDescription: '你的内容格式正在偏离观众信任的模式。这会削弱一性。',
    thisWeeksPriority: '本周先事项：',
    priorityAction: '在接下来的2个上传中返回到3部分结构（钩子 → 参数 → 结论）。',
    viewActionPlan: '查看行动计划',
    
    // Account Performance
    accountPerformance: '账号表现',
    vsSimilar: '对比同类科技数码创作者',
    engagementRate: '互动率',
    abovePeers: '超过65%同行',
    engagementDesc: '强劲的观众连接。保持内容格式的一致性。',
    followers: '粉丝数',
    followersDesc: '的等级中健康的增长率',
    views7Day: '总浏览量',
    viewsDesc: '季节性内容带来的流量高峰',
    totalLikes: '总点赞数',
    likesDesc: '持续的观众认可',
    vsLastWeek: '相比上周',
    
    // Weekly Pipeline
    weeklyPipeline: '本周生产排期',
    pipelineDesc: 'AI优化执行计划 • 4个槽位激活',
    viewFullCalendar: '查看完整日历',
    slotTypes: '槽位类型',
    trustSlot: '核心内容 = 成熟格式',
    riskSlot: '变现内容 = 商业重点',
    testSlot: '实验 = 新想法',
    seasonalSlot: '时效 = 时间敏感',
    
    // Slot strategies
    stabilizeTraffic: '稳定流量',
    highRevenue: '高收益潜力',
    formatExperiment: '格式实验',
    timelyContent: '时效内容',
    
    // Days
    sun: '周日',
    mon: '周一',
    tue: '周二',
    wed: '周三',
    thu: '���四',
    fri: '周五',
    sat: '周六',
    
    // Slot stages
    scripting: '脚本中',
    shooting: '拍摄中',
    editing: '剪辑中',
    published: '已发布',
    posted: '发布',
    
    // Account Health
    accountHealth: '账号健康',
    allClear: '一正常',
    platformRisk: '平台风险',
    platformRiskDesc: '无版权警告 • 所有内容合规',
    monetizationRisk: '变现风险',
    monetizationRiskDesc: '品牌安全内容 • 可接商业合作',
    structuralRisk: '结构风险',
    structuralRiskDesc: '检测到格式漂移 • 请审查最近视频',
    monitoring: '监控中',
    lowRisk: '低风险',
    watch: '关注',
    contentScanned: '已扫描内容',
    issuesResolved: '已解决问题',
    
    // Trending Opportunities
    trendingOpportunities: '趋势机会',
    filteredNiche: '基于科技数码赛道筛选',
    scan: '扫描',
    safe: '安全',
    use: '用',
    nicheAffinity: '赛道适配度',
    silentReviewTip: '完美匹配你的赛道 — ASMR静音评测正在科技观众中流行',
    
    // Content Structure Analysis
    contentStructureAnalysis: '内容结构分析',
    mostUsed: '最常用',
    topPerformer: '最佳表现',
    usageRate: '使用率',
    avgViewDuration: '平均观看时长',
    avgEngagement: '平均动率',
    videos: '视频',
    singleSegment: '单段',
    singleSegmentDesc: '无分割，适合15秒短片/ASMR',
    twoSegments: '双段',
    twoSegmentsDesc: '问题/现象 → 解决方案/结果',
    threeSegments: '三段',
    threeSegmentsDesc: '钩子 → 主体 → 结尾 (北美创作者的90%)',
    multiSegments: '多段',
    multiSegmentsDesc: '4+段落用于长视频/复杂教程',
    loopSegment: '循环段',
    loopSegmentDesc: '核心内容重复，适合病毒式/节拍同步',
    qaSegment: '问答段',
    qaSegmentDesc: '问题 → 答案 → 互动',
    challengeSegment: '挑战段',
    challengeSegmentDesc: '规则 → 过程 → 结果',
    
    // Content Category Insight
    contentFocus: '内容焦点',
    last30Videos: '最近30个视频',
    bestPerforming: '表现最佳',
    bestPerformingDesc: '该类别在你最近的视频中推动了最高的互动率。',
    totalAnalyzed: '总计分析',
    
    // Account Profile Snapshot
    accountProfileSnapshot: '账号画像快照',
    basedOnLast30: '基于你最近30个视频',
    benchmarkedContext: '对标同类别和粉丝量级的创作者',
    topCategories: '前3类别',
    topStructures: '前3结构',
    viewBy: '查看维度',
    showInsight: '显示洞察',
    contentCategory: '内容类别',
    contentStructure: '内容结构',
    distribution: '分布',
    performance: '表现',
    stability: '稳定���',
    contentDistribution: '内容分布',
    distributionSummary: '前3项占最近内容的 {percentage}%。',
    peerPerformance: '同行相对表现',
    you: '你',
    benchmarkContext: '对比范围',
    performanceExplanation: '你相对于相似粉丝数和内容类别的作者的位置。百分位数越高表示表现越强。',
    profileStability: '画像稳定性指标',
    categoryConsistency: '类别一致性',
    structureConsistency: '结构一致性',
    performanceVolatility: '表现波动性',
    consistencyStrongDesc: '你的内容保持了集中的类别组合，有助于建立受众预期。',
    consistencyStableDesc: '你的内容在类别分布上显示出合理的一致性。',
    volatilityLowDesc: '你的内容表现在最近的视频中可预测且稳定。',
    volatilityModerateDesc: '表���有一些变化，但在你的类别的正常范围内。',
    insightDistribution: '你的内容集中在2-3个核心领域，提供清晰受众定位。',
    insightPerformanceHigh: '你的内容表现高于同类创作者的中位数，显示出与受众的强烈共鸣。',
    insightPerformanceGood: '你的内容表现处于或接近同行的中位数，显���出稳定的基础互动。',
    insightPerformanceAverage: '你的内容表现在你的类别和规模的创作者的预期范围内。',
    insightStabilityStrong: '你的内容画像集中，在同行中提供可预测的表现。',
    insightStabilityStable: '你的内容显示出稳定的模式，类别和结构具有适度的一���性。',
    insightStabilityVolatile: '你的内容画像显示出变化，可能表明正在探索或调整策略。',
  },
};

interface WeeklySlotCardProps {
  day: string;
  slotType?: 'TRUST' | 'RISK' | 'TEST' | 'SEASONAL';
  stage?: string;
  title?: string;
  strategy?: string;
  isPosted?: boolean;
}

const WeeklySlotCard = memo(function WeeklySlotCard({ day, slotType, stage, title, strategy, isPosted }: WeeklySlotCardProps) {
  const slotColors = {
    TRUST: { bg: '#F0FDFA', text: '#0F766E', border: '#E5E7EB', label: 'TRUST', desc: 'Stabilize traffic' },
    RISK: { bg: '#FEF3C7', text: '#D97706', border: '#E5E7EB', label: 'RISK', desc: 'High revenue, higher risk' },
    TEST: { bg: '#F0FDFA', text: '#0F766E', border: '#E5E7EB', label: 'TEST', desc: 'Format experiment' },
    SEASONAL: { bg: '#F8F9FA', text: '#374151', border: '#E5E7EB', label: 'SEASONAL', desc: 'Timely content' },
  };

  const colors = slotType ? slotColors[slotType] : null;

  return (
    <div className="flex-1 min-w-[130px]">
      <div className={`rounded-[10px] border p-3 h-[160px] flex flex-col ${
        slotType ? 'border-2' : 'border border-[#E5E7EB] bg-white'
      }`} style={colors ? { 
        backgroundColor: colors.bg, 
        borderColor: colors.border 
      } : undefined}>
        {/* Day header */}
        <div className="text-[#9CA3AF] mb-3" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
          {day.toUpperCase()}
        </div>

        {slotType && colors ? (
          <>
            {/* Slot badge */}
            <div className="mb-2">
              <span
                className="inline-block px-2 py-1 rounded-md text-[10px]"
                style={{
                  backgroundColor: colors.text,
                  color: 'white',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                }}
              >
                {colors.label}
              </span>
            </div>

            {/* Stage */}
            <div className="mb-1.5" style={{ fontSize: '12px', fontWeight: '600', color: colors.text }}>
              {stage}
            </div>

            {/* Title */}
            {title && (
              <div className="text-[#9CA3AF] mb-2 flex-1" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                {title}
              </div>
            )}

            {/* Strategy explanation */}
            {strategy && (
              <div className="px-2 py-1 rounded bg-white/50 border" style={{ 
                fontSize: '10px', 
                fontWeight: '500',
                color: colors.text,
                borderColor: colors.border,
                lineHeight: '1.3'
              }}>
                {strategy}
              </div>
            )}

            {/* Posted indicator */}
            {isPosted && (
              <div className="flex items-center gap-1 mt-2" style={{ color: colors.text }}>
                <CheckCircle2 className="w-3 h-3" />
                <span style={{ fontSize: '10px', fontWeight: '600' }}>Posted</span>
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-[#9CA3AF]" style={{ fontSize: '11px' }}>
            —
          </div>
        )}
      </div>
    </div>
  );
});

// Mock data constants (moved outside component to prevent recreation on every render)
const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    type: 'performance',
    icon: 'trending',
    title: 'Video Performance Alert',
    message: '"iPhone 15 Review" reached 50K views in 24 hours!',
    time: '5m ago',
    isUnread: true,
    color: '#059669',
  },
  {
    id: '2',
    type: 'content',
    icon: 'lightbulb',
    title: 'New Content Opportunity',
    message: '#TechReview trending in your niche with 85% match score',
    time: '1h ago',
    isUnread: true,
    color: '#F59E0B',
  },
  {
    id: '3',
    type: 'system',
    icon: 'alert',
    title: 'Account Health Check',
    message: 'Format drift detected in recent uploads - Review recommended',
    time: '3h ago',
    isUnread: true,
    color: '#EF4444',
  },
  {
    id: '4',
    type: 'achievement',
    icon: 'award',
    title: 'Level Up!',
    message: 'Congratulations! You reached Level 5 creator status',
    time: '1d ago',
    isUnread: false,
    color: '#8B5CF6',
  },
  {
    id: '5',
    type: 'engagement',
    icon: 'heart',
    title: 'Engagement Milestone',
    message: 'Your content received 10K+ likes this week',
    time: '2d ago',
    isUnread: false,
    color: '#EC4899',
  },
];

const MOCK_ACCOUNTS = [
  {
    id: '1',
    name: 'TechReviews_US',
    displayName: 'Sarah Chen',
    tier: 'Tier 1',
    level: 5,
    followers: '125K',
    avatarUrl: 'https://images.unsplash.com/photo-1622825312265-5d5caaed05b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200',
  },
  {
    id: '2',
    name: 'SarahTech',
    displayName: 'Sarah | Tech Tips',
    tier: 'Tier 1',
    level: 3,
    followers: '45K',
    avatarUrl: 'https://images.unsplash.com/photo-1712230778936-766a99478dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200',
  },
  {
    id: '3',
    name: 'DailyGadgets',
    displayName: 'Daily Gadgets',
    tier: 'Tier 1',
    level: 2,
    followers: '12K',
    avatarUrl: 'https://images.unsplash.com/photo-1715865919565-5cedfdfa5650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200',
  },
];

export const Dashboard = memo(function Dashboard({ onNavigate }: { onNavigate?: (page: string, question?: string) => void }) {
  const [selectedAccount, setSelectedAccount] = React.useState('TechReviews_US');
  const [language, setLanguage] = React.useState<Language>('en');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  const { trigger } = useSimulationTrigger();

  // Timer trigger (20s)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      trigger();
    }, 20000);
    return () => clearTimeout(timer);
  }, [trigger]);
  
  // Use standard mobile detection hook
  const isMobile = useIsMobile();

  // Show mobile version on small screens
  if (isMobile) {
    return (
      <div className="simulation-overview-theme h-screen bg-sidebar" onClick={() => trigger()}>
        <HomeMobile onNavigate={onNavigate} />
      </div>
    );
  }

  // Show desktop version on larger screens
  return (
    <div className="simulation-overview-theme flex h-screen bg-sidebar" onClick={() => trigger()}>
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <SidebarPro 
        activeItem="home" 
        onNavigate={onNavigate}
        className="hidden md:flex"
      />
      
      {/* Main Content */}
      <DashboardContent 
        selectedAccount={selectedAccount} 
        setSelectedAccount={setSelectedAccount}
        language={language}
        setLanguage={setLanguage}
        onNavigate={onNavigate}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Bottom Tab Bar - Mobile Only */}
      <BottomTabBar 
        activeItem="home" 
        onNavigate={onNavigate}
      />
    </div>
  );
});

export const DashboardContent = memo(function DashboardContent({ 
  selectedAccount = 'TechReviews_US',
  setSelectedAccount,
  language = 'en',
  setLanguage,
  onNavigate,
  onToggleSidebar
}: { 
  selectedAccount?: string;
  setSelectedAccount?: (account: string) => void;
  language?: Language;
  setLanguage?: (lang: Language) => void;
  onNavigate?: (page: string, question?: string) => void;
  onToggleSidebar?: () => void;
}) {
  console.log('[DashboardContent] Rendering');
  const t = translations[language];
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = React.useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [chatInput, setChatInput] = React.useState('');
  const [todayTaskCompleted, setTodayTaskCompleted] = React.useState(false);
  const [feedbackDrawerOpen, setFeedbackDrawerOpen] = React.useState(false);
  
  const unreadCount = MOCK_NOTIFICATIONS.filter(n => n.isUnread).length;
  const currentAccountData = MOCK_ACCOUNTS.find(acc => acc.name === selectedAccount) || MOCK_ACCOUNTS[0];
  
  // Memoize callback functions to prevent unnecessary re-renders
  const handleQuickWinGenerate = React.useCallback(() => {
    if (onNavigate) {
      const prompt = language === 'en'
        ? "Create a TikTok script using a 'Product-First' hook strategy. The hook should immediately showcase the product or key topic in the first 2 seconds to grab attention and fix engagement issues."
        : "使用'产品优先'钩子策略创建TikTok脚本。钩子应在前2秒立即展示产品或关键主题，以吸引注意力并解决互动问题。";
      onNavigate('copilot', prompt);
    }
  }, [onNavigate, language]);

  const handleQuickWinComplete = React.useCallback(() => {
    console.log('Quick Win completed');
  }, []);

  const handleSendToCopilot = React.useCallback((action: string) => {
    const prompt = action.includes('topic ideas')
      ? "Generate 10 TikTok video topic ideas for my account. Use trending hashtags, include a 1-line hook for each idea, and label each as Quick/Medium/Hard."
      : action.includes('scripts')
      ? "Write 3 short TikTok scripts (20–30s). For each: Hook (0–2s), Value (3–20s), CTA (last 3s). Keep language punchy and creator-style."
      : action.includes('posts')
      ? "Create a posting schedule for 4 posts next week. Pick days + time slots, and match each slot with a recommended content format and topic."
      : action;
    onNavigate?.('copilot', prompt);
  }, [onNavigate]);

  // Memoize quickWin object to prevent recreation on every render
  const quickWin = React.useMemo(() => ({
    title: "Use 'Product-First' hook for your next video",
    description: "This is the key step to fix your Hook problem",
    onGenerate: handleQuickWinGenerate,
    onComplete: handleQuickWinComplete,
  }), [handleQuickWinGenerate, handleQuickWinComplete]);
  
  // Handle Create button click for Today's Opportunity
  const handleCreateWithTopic = (topic: {
    title: string;
    description: string;
    category: string;
    matchScore: number;
    trend: string;
  }) => {
    if (onNavigate) {
      const prompt = language === 'en' 
        ? `Create a script for the following trending topic:\n\nTopic: ${topic.title}\nCategory: ${topic.category}\nDescription: ${topic.description}\nTrend: ${topic.trend}\n\nPlease help me write an engaging TikTok script for this topic.`
        : `为以下热门选题创作脚本：\n\n选题：${topic.title}\n类别：${topic.category}\n描述：${topic.description}\n趋势：${topic.trend}\n\n请帮我为这个选题撰写一个吸引人的TikTok脚本。`;
      onNavigate('copilot', prompt);
    }
  };
  
  return (
    <div className="flex-1 flex flex-col overflow-hidden pb-[64px] md:pb-0">
      {/* Top Header */}
      <div className="bg-gradient-to-b from-background to-sidebar border-b border-border px-4 md:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-6">
            {/* Welcome message */}
            <div>
              <h1 className="text-foreground mb-1.5" style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
                {t.greeting}
              </h1>
              <div className="hidden md:flex items-center gap-2.5 relative">
                <span className="text-muted-foreground" style={{ fontSize: '13px', fontWeight: '500' }}>
                  {t.account}:
                </span>
                <button 
                  onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-card hover:bg-muted border border-border hover:border-[#0F766E] transition-all shadow-sm hover:shadow-md group"
                >
                  {/* Avatar preview */}
                  <div className="relative flex-shrink-0">
                    <img 
                      src={currentAccountData.avatarUrl} 
                      alt={currentAccountData.displayName}
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-border group-hover:ring-[#0F766E] transition-all"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#059669] border border-card rounded-full"></div>
                  </div>
                  
                  <span className="text-foreground font-medium" style={{ fontSize: '13px', fontWeight: '600' }}>
                    {selectedAccount}
                  </span>
                  
                  {/* Level badge with special styling for L5 */}
                  <span
                    className={`px-2 py-0.5 rounded-full flex-shrink-0 ${
                      currentAccountData.level >= 5 
                        ? 'bg-gradient-to-r from-[#FCD34D] via-[#F59E0B] to-[#F97316] text-white shadow-md' 
                        : currentAccountData.level >= 4
                        ? 'bg-gradient-to-r from-[#DBEAFE] to-[#BFDBFE] text-[#1E40AF]'
                        : 'bg-[#F3F4F6] text-[#6B7280]'
                    }`}
                    style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.03em' }}
                  >
                    L{currentAccountData.level}
                  </span>
                  
                  <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-[#0F766E] transition-colors" />
                </button>

                {/* Account Switcher Dropdown - Google Style */}
                {accountDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setAccountDropdownOpen(false)}
                    ></div>
                    <div className="absolute left-0 top-full mt-2 w-[360px] bg-popover rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] z-20 overflow-hidden border border-border">
                      {/* Header - Google Style */}
                      <div className="px-6 py-5 border-b border-border">
                        <h3 className="text-popover-foreground" style={{ fontSize: '16px', fontWeight: '400', letterSpacing: '0' }}>
                          Switch Account
                        </h3>
                      </div>

                      {/* Account List - Google Style */}
                      <div className="max-h-[420px] overflow-y-auto">
                        {MOCK_ACCOUNTS.map((account, index) => {
                          const isActive = account.name === selectedAccount;
                          return (
                            <button
                              key={account.id}
                              onClick={() => {
                                setSelectedAccount?.(account.name);
                                setAccountDropdownOpen(false);
                              }}
                              className={`w-full px-6 py-3 hover:bg-muted transition-all text-left flex items-center gap-4 border-b border-border last:border-b-0 ${
                                isActive ? 'bg-green-50 dark:bg-green-900/20' : ''
                              }`}
                            >
                              {/* Avatar */}
                              <div className="relative flex-shrink-0">
                                <img 
                                  src={account.avatarUrl} 
                                  alt={account.displayName}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                {/* Active indicator on avatar */}
                                {isActive && (
                                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#34A853] border-2 border-popover rounded-full flex items-center justify-center">
                                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                  </div>
                                )}
                              </div>

                              {/* Account Info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-popover-foreground truncate" style={{ fontSize: '14px', fontWeight: '500' }}>
                                    {account.displayName}
                                  </span>
                                  {/* Level Badge */}
                                  <span
                                    className={`inline-flex items-center px-1.5 py-0.5 rounded flex-shrink-0 ${
                                      account.level >= 4 
                                        ? 'bg-[#FEF7CD] text-[#7A5B00]' 
                                        : 'bg-muted text-muted-foreground'
                                    }`}
                                    style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.02em' }}
                                  >
                                    L{account.level}
                                  </span>
                                </div>
                                <div className="text-muted-foreground mt-0.5 truncate" style={{ fontSize: '12px', fontWeight: '400' }}>
                                  @{account.name}
                                </div>
                              </div>

                              {/* Active checkmark - Google style */}
                              {isActive && (
                                <div className="flex-shrink-0">
                                  <div className="w-5 h-5 rounded-full bg-[#34A853] flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                  </div>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Footer - Google Style */}
                      <div className="px-6 py-4 border-t border-border bg-popover">
                        <button
                          onClick={() => {
                            onNavigate?.('settings-add-account');
                            setAccountDropdownOpen(false);
                          }}
                          className="w-full px-4 py-2.5 rounded-full border border-border hover:bg-muted transition-all text-center"
                        >
                          <span className="text-[#1A73E8]" style={{ fontSize: '14px', fontWeight: '500' }}>
                            Add another account
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            onNavigate?.('settings-connected');
                            setAccountDropdownOpen(false);
                          }}
                          className="w-full px-4 py-2 mt-2 rounded-full hover:bg-muted transition-all text-center"
                        >
                          <span className="text-muted-foreground" style={{ fontSize: '14px', fontWeight: '500' }}>
                            Manage accounts
                          </span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">

            {/* Feedback Button */}
            <button 
              onClick={() => setFeedbackDrawerOpen(true)}
              className="p-2.5 rounded-[10px] hover:bg-card border border-transparent hover:border-border transition-all relative group shadow-sm hover:shadow-md"
              title="Feedback"
            >
              <MessageSquare className="w-5 h-5 text-muted-foreground group-hover:text-[#0F766E] transition-colors" />
              {/* Optional pulse animation for new feedback */}
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                className="p-2.5 rounded-[10px] hover:bg-card border border-transparent hover:border-border transition-all relative group shadow-sm hover:shadow-md"
              >
                <Bell className="w-5 h-5 text-muted-foreground group-hover:text-[#0F766E] transition-colors" />
                {/* Notification badge with count */}
                {unreadCount > 0 && (
                  <div className="absolute top-1 right-1 flex items-center justify-center">
                    <div className="min-w-[16px] h-4 px-1 rounded-full bg-gradient-to-br from-[#EF4444] to-[#DC2626] text-white flex items-center justify-center shadow-md" style={{ fontSize: '10px', fontWeight: '700' }}>
                      {unreadCount}
                    </div>
                  </div>
                )}
              </button>

              {/* Notification Dropdown */}
              {notificationDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setNotificationDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 top-full mt-2 w-[420px] bg-popover rounded-[12px] shadow-2xl z-20 overflow-hidden border border-border/50">
                    {/* Header */}
                    <div className="px-5 py-4 bg-gradient-to-br from-muted/50 to-popover border-b border-border/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-popover-foreground" style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '-0.01em' }}>
                            Notifications
                          </h3>
                          <p className="text-muted-foreground mt-0.5" style={{ fontSize: '12px' }}>
                            {unreadCount} unread • {MOCK_NOTIFICATIONS.length} total
                          </p>
                        </div>
                        {unreadCount > 0 && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              // Mark all as read logic here
                            }}
                            className="text-[#0F766E] hover:text-[#14B8A6] transition-colors" 
                            style={{ fontSize: '12px', fontWeight: '600' }}
                          >
                            Mark all read
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Notification List */}
                    <div className="max-h-[480px] overflow-y-auto">
                      {MOCK_NOTIFICATIONS.map((notification, index) => {
                        const getIcon = () => {
                          switch (notification.icon) {
                            case 'trending':
                              return <TrendingUp className="w-5 h-5" />;
                            case 'lightbulb':
                              return <Lightbulb className="w-5 h-5" />;
                            case 'alert':
                              return <AlertCircle className="w-5 h-5" />;
                            case 'award':
                              return <Award className="w-5 h-5" />;
                            case 'heart':
                              return <Heart className="w-5 h-5" />;
                            default:
                              return <Bell className="w-5 h-5" />;
                          }
                        };

                        return (
                          <button
                            key={notification.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              // Handle notification click
                            }}
                            className={`w-full px-5 py-4 hover:bg-muted transition-all text-left border-b border-border/50 last:border-b-0 group relative ${
                              notification.isUnread ? 'bg-gradient-to-r from-[#F0FDFA]/30 to-transparent' : ''
                            }`}
                          >
                            {/* Unread indicator bar */}
                            {notification.isUnread && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-[#0F766E] to-[#14B8A6] rounded-r-full"></div>
                            )}

                            <div className="flex items-start gap-3 pl-1">
                              {/* Icon */}
                              <div 
                                className="flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center"
                                style={{ backgroundColor: `${notification.color}15`, color: notification.color }}
                              >
                                {getIcon()}
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <h4 className="text-popover-foreground font-medium" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.4' }}>
                                    {notification.title}
                                  </h4>
                                  {notification.isUnread && (
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#0F766E] mt-1"></div>
                                  )}
                                </div>
                                <p className="text-muted-foreground mb-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                                  {notification.message}
                                </p>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                                  <span className="text-muted-foreground" style={{ fontSize: '11px' }}>
                                    {notification.time}
                                  </span>
                                </div>
                              </div>

                              {/* Hover action */}
                              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-border/50 bg-gradient-to-br from-popover to-muted/50">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setNotificationDropdownOpen(false);
                          // Navigate to notifications page
                        }}
                        className="w-full px-4 py-2.5 rounded-[10px] bg-popover border border-border hover:border-[#0F766E] hover:bg-[#F0FDFA] transition-all text-center group"
                      >
                        <span className="text-popover-foreground group-hover:text-[#0F766E] font-medium transition-colors" style={{ fontSize: '13px', fontWeight: '600' }}>
                          View All Notifications
                        </span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-[1600px] mx-auto space-y-4 md:space-y-6">
          {/* TOP HERO — Account Overview */}
          <div className="bg-card rounded-[12px] border border-border p-4 md:p-5 shadow-sm">
            <div className="flex flex-col gap-3.5">
              {/* TOP — Identity Section */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center text-white flex-shrink-0" style={{ fontSize: '16px', fontWeight: '700' }}>
                  TR
                </div>
                
                {/* Account Info */}
                <div>
                  <h2 className="text-card-foreground mb-0.5" style={{ fontSize: '17px', fontWeight: '700', lineHeight: '1.2' }}>
                    TechReviews_US
                  </h2>
                  <p className="text-muted-foreground" style={{ fontSize: '12px' }}>
                    {t.userSignature}
                  </p>
                </div>
              </div>

              {/* BOTTOM — Account Performance Section */}
              <div>


                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {/* Followers */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Users className="w-3.5 h-3.5 text-[#6366F1]" />
                      <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600' }}>
                        {t.followers}
                      </span>
                    </div>
                    <div className="text-card-foreground mb-0.5" style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1', letterSpacing: '-0.02em' }}>
                      125.6K
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#059669]" />
                      <span className="text-[#059669]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        +12.5%
                      </span>
                    </div>
                  </div>

                  {/* Views */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600' }}>
                        {t.views7Day}
                      </span>
                    </div>
                    <div className="text-card-foreground mb-0.5" style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1', letterSpacing: '-0.02em' }}>
                      3.2M
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingDown className="w-3 h-3 text-[#DC2626]" />
                      <span className="text-[#DC2626]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        -5.2%
                      </span>
                    </div>
                  </div>

                  {/* Likes */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Heart className="w-3.5 h-3.5 text-[#EC4899]" />
                      <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600' }}>
                        {t.totalLikes}
                      </span>
                    </div>
                    <div className="text-card-foreground mb-0.5" style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1', letterSpacing: '-0.02em' }}>
                      890.0K
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#059669]" />
                      <span className="text-[#059669]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        +8.1%
                      </span>
                    </div>
                  </div>

                  {/* Engagement Rate - Highlighted */}
                  <div className="relative rounded-[10px] bg-gradient-to-br from-[#CCFBF1] to-[#E0F2FE] p-3 -m-0.5">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Activity className="w-3.5 h-3.5 text-[#0F766E]" />
                      <div className="text-[#0F766E]" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.02em' }}>
                        {t.engagementRate} <span className="text-[#0F766E]/60" style={{ fontSize: '9px', fontWeight: '500' }}>· Last 30 Videos</span>
                      </div>
                    </div>
                    <div className="text-[#0F766E] mb-0.5" style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1', letterSpacing: '-0.02em' }}>
                      4.2%
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#059669]" />
                      <span className="text-[#059669]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        +0.8%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Plan Module */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
            {/* Primary Zone - Weekly Overview (2 columns) */}
            <div className="lg:col-span-2">
              <WeeklyOverviewCard 
                quickWin={{
                  title: "Use 'Product-First' hook for your next video",
                  description: "This is the key step to fix your Hook problem",
                  onGenerate: () => {
                    if (onNavigate) {
                      const prompt = language === 'en'
                        ? "Create a TikTok script using a 'Product-First' hook strategy. The hook should immediately showcase the product or key topic in the first 2 seconds to grab attention and fix engagement issues."
                        : "使用'产品优先'钩子策略创建TikTok脚本。钩子应在前2秒立即展示产品或��键主题，以吸引注意力并解决互动问题。";
                      onNavigate('copilot', prompt);
                    }
                  },
                  onComplete: () => {
                    console.log('Quick Win completed');
                  }
                }}
                onSendToCopilot={(action) => {
                  const prompt = action.includes('topic ideas')
                    ? "Generate 10 TikTok video topic ideas for my account. Use trending hashtags, include a 1-line hook for each idea, and label each as Quick/Medium/Hard."
                    : action.includes('scripts')
                    ? "Write 3 short TikTok scripts (20–30s). For each: Hook (0–2s), Value (3–20s), CTA (last 3s). Keep language punchy and creator-style."
                    : action.includes('posts')
                    ? "Create a posting schedule for 4 posts next week. Pick days + time slots, and match each slot with a recommended content format and topic."
                    : action;
                  onNavigate?.('copilot', prompt);
                }}
              />
            </div>

            {/* Secondary Zone - Sidebar (1 column) */}
            <div className="space-y-4">
              {/* Recent Reports */}
              <CompactArchiveCard 
                onViewAll={() => onNavigate?.('reports-archive')}
                onSelectWeek={(week) => {
                  console.log('Selected week:', week);
                }}
              />

              {/* Quick Actions */}
              <QuickActionsCard onNavigate={onNavigate} />
            </div>
          </div>

          {/* WORTH YOUR ATTENTION - Opportunity Discovery */}
          <div className="bg-card rounded-[12px] border border-border p-4 md:p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-card-foreground mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                  Today's Opportunities
                </h2>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                  Opportunities matched to where you are right now
                </p>
              </div>
              <button 
                onClick={() => onNavigate?.('trends')}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-card-foreground transition-colors"
              >
                <span style={{ fontSize: '13px', fontWeight: '500' }}>See all</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Disclaimer */}
            <div className="mb-5 px-3.5 py-2.5 rounded-lg bg-muted border border-border flex items-start gap-2.5">
              <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                <span className="font-semibold text-card-foreground">AI Prediction Notice:</span> The trend predictions and peak timing shown below are generated by AI models based on historical data. Actual results may vary. These insights are for reference only and should be combined with your own judgment when making content decisions.
              </p>
            </div>



            {/* Featured Opportunity - Enhanced with AI Insights */}
            <FeaturedOpportunityCard onCreate={handleCreateWithTopic} />

            {/* Other Opportunities */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Radar className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-card-foreground" style={{ fontSize: '15px', fontWeight: '600' }}>
                  Other Opportunities
                </h3>
              </div>

              {/* Horizontal Scrollable Cards */}
              <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">

              {/* Card 2 - Worth Trying */}
              <div className="flex-shrink-0 flex-1 min-w-[320px] md:min-w-0 rounded-[12px] border border-border bg-card p-5 flex flex-col">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#374151] text-white" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.3px' }}>
                      Worth trying
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '12px', fontWeight: '500' }}>
                      Lifestyle
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border border-border">
                    <div className="w-2 h-2 rounded-full bg-[#374151]"></div>
                    <span className="text-card-foreground" style={{ fontSize: '13px', fontWeight: '700' }}>
                      87%
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <h3 className="text-card-foreground mb-2" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.3' }}>
                  Desk Setup Tours
                </h3>
                <p className="text-muted-foreground mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Showcasing workspace aesthetics, gear choices, and productivity setups to inspire viewers.
                </p>

                {/* Visual Signal - Simple Trend Line */}
                <div className="w-full aspect-[22/3] mb-4 relative overflow-hidden rounded-lg">
                  <svg width="100%" height="100%" viewBox="0 0 440 60">
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#374151" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#374151" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Historical data - realistic fluctuation */}
                    <path
                      d="M 0 50 L 20 48 L 40 49 L 60 46 L 80 47 L 100 44 L 120 45 L 140 40 L 160 42 L 180 38 L 200 39 L 220 35 L 240 36 L 260 32 L 280 33 L 293 30"
                      fill="none"
                      stroke="currentColor"
                      className="text-muted-foreground"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Fill area for historical */}
                    <path
                      d="M 0 50 L 20 48 L 40 49 L 60 46 L 80 47 L 100 44 L 120 45 L 140 40 L 160 42 L 180 38 L 200 39 L 220 35 L 240 36 L 260 32 L 280 33 L 293 30 L 293 60 L 0 60 Z"
                      fill="url(#gradient2)"
                    />
                    {/* Predicted data - smooth curve */}
                    <path
                      d="M 293 30 C 330 28, 360 25, 440 20"
                      fill="none"
                      stroke="currentColor"
                      className="text-muted-foreground"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    {/* Current point marker */}
                    <circle cx="293" cy="30" r="5" fill="currentColor" className="text-muted-foreground" stroke="var(--card)" strokeWidth="2.5" />
                    <circle cx="293" cy="30" r="8" fill="none" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.5" opacity="0.4" />
                    <text x="293" y="48" textAnchor="middle" fill="currentColor" className="text-card-foreground" fontSize="9" fontWeight="600">NOW</text>
                    
                    {/* Peak point marker */}
                    <circle cx="440" cy="20" r="4" fill="currentColor" className="text-muted-foreground" stroke="var(--card)" strokeWidth="2" />
                    <text x="400" y="15" textAnchor="middle" fill="currentColor" className="text-card-foreground" fontSize="10" fontWeight="600">Peak in 18d</text>
                  </svg>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>30d left</span>
                    </div>
                    <div className="w-px h-3 bg-border"></div>
                    <div className="flex items-center gap-1.5 text-card-foreground">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>+18%</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCreateWithTopic({
                      title: 'Desk Setup Tours',
                      description: 'Showcasing workspace aesthetics, gear choices, and productivity setups to inspire viewers.',
                      category: 'Lifestyle',
                      matchScore: 87,
                      trend: 'Peak in 18d'
                    })}
                    className="px-5 py-2.5 rounded-lg bg-[#0F766E] text-white hover:bg-[#0D6962] transition-colors flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>Create</span>
                  </button>
                </div>
              </div>

              {/* Card 3 - Experimental */}
              <div className="flex-shrink-0 flex-1 min-w-[320px] md:min-w-0 rounded-[12px] border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/30 p-5 flex flex-col">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#D97706] text-white" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.3px' }}>
                      Experimental
                    </span>
                    <span className="text-yellow-800 dark:text-yellow-200" style={{ fontSize: '12px', fontWeight: '500' }}>
                      Smart Home
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-700">
                    <div className="w-2 h-2 rounded-full bg-[#D97706]"></div>
                    <span className="text-yellow-800 dark:text-yellow-200" style={{ fontSize: '13px', fontWeight: '700' }}>
                      78%
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <h3 className="text-card-foreground mb-2" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.3' }}>
                  Smart Home Integration Guides
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Step-by-step tutorials on connecting and automating smart home devices for seamless living.
                </p>

                {/* Visual Signal - Simple Trend Line */}
                <div className="w-full aspect-[22/3] mb-4 relative overflow-hidden rounded-lg">
                  <svg width="100%" height="100%" viewBox="0 0 440 60">
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Historical data - volatile */}
                    <path
                      d="M 0 52 L 20 54 L 40 48 L 60 50 L 80 42 L 100 48 L 120 40 L 140 45 L 160 35 L 180 38 L 200 30 L 220 28"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Fill area */}
                    <path
                      d="M 0 52 L 20 54 L 40 48 L 60 50 L 80 42 L 100 48 L 120 40 L 140 45 L 160 35 L 180 38 L 200 30 L 220 28 L 220 60 L 0 60 Z"
                      fill="url(#gradient3)"
                    />
                    {/* Prediction - sharp rise */}
                    <path
                      d="M 220 28 C 260 25, 300 15, 330 12 S 400 10, 440 15"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    {/* NOW marker */}
                    <circle cx="220" cy="28" r="5" fill="#f59e0b" stroke="white" strokeWidth="2.5" />
                    <circle cx="220" cy="28" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" />
                    <text x="220" y="46" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="600">NOW</text>
                    
                    {/* Peak marker */}
                    <circle cx="330" cy="12" r="4" fill="#f59e0b" stroke="white" strokeWidth="2" />
                    <text x="330" y="8" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="600">Peak in 8d</text>
                  </svg>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-yellow-800 dark:text-yellow-200">
                      <Clock className="w-3.5 h-3.5" />
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>12d left</span>
                    </div>
                    <div className="w-px h-3 bg-yellow-200 dark:bg-yellow-800"></div>
                    <div className="flex items-center gap-1.5 text-yellow-800 dark:text-yellow-200">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>+45%</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCreateWithTopic({
                      title: 'Smart Home Integration Guides',
                      description: 'Step-by-step tutorials on connecting and automating smart home devices for seamless living.',
                      category: 'Smart Home',
                      matchScore: 78,
                      trend: 'Peak in 8d'
                    })}
                    className="px-5 py-2.5 rounded-lg bg-[#D97706] text-white hover:bg-[#B45309] transition-colors flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>Create</span>
                  </button>
                </div>
              </div>

              {/* Card 3 - Rising Trend */}
              <div className="flex-shrink-0 flex-1 min-w-[320px] md:min-w-0 rounded-[12px] border border-border bg-card p-5 flex flex-col">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#0F766E] text-white" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.3px' }}>
                      Rising trend
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '12px', fontWeight: '500' }}>
                      Gaming
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                    <div className="w-2 h-2 rounded-full bg-[#0F766E]"></div>
                    <span className="text-[#0F766E] dark:text-emerald-400" style={{ fontSize: '13px', fontWeight: '700' }}>
                      82%
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <h3 className="text-card-foreground mb-2" style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.3' }}>
                  Mobile Gaming Performance Tests
                </h3>
                <p className="text-muted-foreground mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Testing popular mobile games on different devices to show real-world gaming performance.
                </p>

                {/* Visual Signal - Simple Trend Line */}
                <div className="w-full aspect-[22/3] mb-4 relative overflow-hidden rounded-lg">
                  <svg width="100%" height="100%" viewBox="0 0 440 60">
                    <defs>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0F766E" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Historical - rapid growth */}
                    <path
                      d="M 0 55 L 30 54 L 60 52 L 90 53 L 120 48 L 150 45 L 180 40 L 210 42 L 240 35 L 270 32 L 293 28"
                      fill="none"
                      stroke="currentColor"
                      className="text-[#0F766E] dark:text-emerald-400"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Fill */}
                    <path
                      d="M 0 55 L 30 54 L 60 52 L 90 53 L 120 48 L 150 45 L 180 40 L 210 42 L 240 35 L 270 32 L 293 28 L 293 60 L 0 60 Z"
                      fill="url(#gradient4)"
                    />
                    {/* Prediction - plateau */}
                    <path
                      d="M 293 28 C 330 22, 360 20, 440 18"
                      fill="none"
                      stroke="currentColor"
                      className="text-[#0F766E] dark:text-emerald-400"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    {/* NOW marker */}
                    <circle cx="293" cy="28" r="5" fill="currentColor" className="text-[#0F766E] dark:text-emerald-400" stroke="var(--card)" strokeWidth="2.5" />
                    <circle cx="293" cy="28" r="8" fill="none" stroke="currentColor" className="text-[#0F766E] dark:text-emerald-400" strokeWidth="1.5" opacity="0.4" />
                    <text x="293" y="46" textAnchor="middle" fill="currentColor" className="text-[#0F766E] dark:text-emerald-400" fontSize="9" fontWeight="600">NOW</text>
                    
                    {/* Peak marker */}
                    <circle cx="380" cy="20" r="4" fill="currentColor" className="text-[#0F766E] dark:text-emerald-400" stroke="var(--card)" strokeWidth="2" />
                    <text x="380" y="15" textAnchor="middle" fill="currentColor" className="text-[#0F766E] dark:text-emerald-400" fontSize="10" fontWeight="600">Peak in 15d</text>
                  </svg>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>22d left</span>
                    </div>
                    <div className="w-px h-3 bg-border"></div>
                    <div className="flex items-center gap-1.5 text-[#0F766E] dark:text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span style={{ fontSize: '12px', fontWeight: '600' }}>+28%</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleCreateWithTopic({
                      title: 'Mobile Gaming Performance Tests',
                      description: 'Testing popular mobile games on different devices to show real-world gaming performance.',
                      category: 'Gaming',
                      matchScore: 82,
                      trend: 'Peak in 15d'
                    })}
                    className="px-5 py-2.5 rounded-lg bg-[#0F766E] text-white hover:bg-[#0D6962] transition-colors flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>Create</span>
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* THIS WEEK'S SCHEDULE - Quick Publishing Overview */}
          <div className="bg-card rounded-[12px] border border-border p-4 md:p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-card-foreground mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                  This Week's Schedule
                </h2>
                <p className="text-muted-foreground" style={{ fontSize: '13px' }}>
                  Planned publishing days for this week
                </p>
              </div>
              <button 
                onClick={() => onNavigate?.('scheduling')}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-card-foreground transition-colors"
              >
                <span style={{ fontSize: '13px', fontWeight: '500' }}>View full schedule</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Week View */}
            <div className="flex items-center gap-3 mb-5">
              {/* Monday */}
              <div className="flex-1">
                <div className="rounded-[10px] border-2 border-[#0F766E] bg-muted p-3 relative group cursor-pointer hover:bg-muted/80 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                      MON
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
                      Jan 6
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0F766E]"></div>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    <span style={{ fontSize: '11px', fontWeight: '500' }}>1 video planned</span>
                  </div>
                </div>
              </div>

              {/* Tuesday */}
              <div className="flex-1">
                <div className="rounded-[10px] border border-border bg-card p-3 relative group cursor-pointer hover:bg-muted transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                      TUE
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
                      Jan 7
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-border"></div>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    <span style={{ fontSize: '11px', fontWeight: '500' }}>No content scheduled</span>
                  </div>
                </div>
              </div>

              {/* Wednesday - Today */}
              <div className="flex-1">
                <div className="rounded-[10px] border-2 border-emerald-600 bg-emerald-100 dark:bg-emerald-900/20 p-3 relative group cursor-pointer hover:bg-emerald-200 dark:hover:bg-emerald-900/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-700 dark:text-emerald-300" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' }}>
                      WED
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-300" style={{ fontSize: '10px', fontWeight: '600' }}>
                      Today
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    <span style={{ fontSize: '11px', fontWeight: '500' }}>1 video planned</span>
                  </div>
                </div>
              </div>

              {/* Thursday */}
              <div className="flex-1">
                <div className="rounded-[10px] border border-border bg-card p-3 relative group cursor-pointer hover:bg-muted transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                      THU
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
                      Jan 9
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-border"></div>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    <span style={{ fontSize: '11px', fontWeight: '500' }}>No content scheduled</span>
                  </div>
                </div>
              </div>

              {/* Friday */}
              <div className="flex-1">
                <div className="rounded-[10px] border-2 border-foreground bg-muted p-3 relative group cursor-pointer hover:bg-muted/80 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                      FRI
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
                      Jan 10
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground"></div>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    <span style={{ fontSize: '11px', fontWeight: '500' }}>1 video planned</span>
                  </div>
                </div>
              </div>

              {/* Saturday */}
              <div className="flex-1">
                <div className="rounded-[10px] border border-border bg-card p-3 relative group cursor-pointer hover:bg-muted transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                      SAT
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
                      Jan 11
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-border"></div>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    <span style={{ fontSize: '11px', fontWeight: '500' }}>No content scheduled</span>
                  </div>
                </div>
              </div>

              {/* Sunday */}
              <div className="flex-1">
                <div className="rounded-[10px] border-2 border-foreground bg-muted p-3 relative group cursor-pointer hover:bg-muted/80 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                      SUN
                    </span>
                    <span className="text-muted-foreground" style={{ fontSize: '10px' }}>
                      Jan 12
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground"></div>
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    <span style={{ fontSize: '11px', fontWeight: '500' }}>1 video planned</span>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* 3.7. ACCOUNT PROFILE SNAPSHOT - Interactive Profile Analysis */}
          <AccountProfileSnapshot t={t} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Floating AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          /* Chat Window */
          <div className="w-[400px] h-[600px] bg-card rounded-[12px] border border-border shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F766E] to-[#14B8A6] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white" style={{ fontSize: '15px', fontWeight: '600' }}>
                    AI Copilot
                  </h3>
                  <p className="text-white/70" style={{ fontSize: '11px' }}>
                    Always here to help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Minus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted">
              {/* Welcome Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#404040] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-card rounded-[12px] rounded-tl-none p-3.5 border border-border shadow-sm">
                    <p className="text-card-foreground" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      Hi! I'm your AI Copilot. I can help you with content strategy, performance analysis, hashtag recommendations, and more. What would you like to know?
                    </p>
                  </div>
                  <span className="text-muted-foreground ml-3 mt-1 inline-block" style={{ fontSize: '10px' }}>
                    Just now
                  </span>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-4 pr-12 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring focus:bg-card transition-colors"
                  style={{ fontSize: '13px' }}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Feedback Drawer */}
      <FeedbackDrawer
        isOpen={feedbackDrawerOpen}
        onClose={() => setFeedbackDrawerOpen(false)}
        currentPage="Dashboard"
        currentAccount={selectedAccount}
      />
    </div>
  );
});
