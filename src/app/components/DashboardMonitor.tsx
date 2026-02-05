import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  ArrowRight,
  Activity,
  Users,
  Video,
  Clock,
  PieChart,
  ArrowUpRight,
  Lightbulb,
  AlertCircle,
  ArrowDownRight,
} from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';
import { CopilotCTAButton } from './CopilotCTAButton';
import { BenchmarkBar } from './BenchmarkBar';
import { AudienceInsights } from './AudienceInsights';
import { CustomLineChart } from './CustomLineChart';
import { CustomBarChart } from './CustomBarChart';
import { ConversionFab } from './ConversionFab';
import { useSimulationGlobal } from './SimulationPageWrapper';

interface DashboardMonitorProps {
  onNavigate?: (page: string) => void;
  isSimulation?: boolean;
}

export function DashboardMonitor({
  onNavigate,
  isSimulation = false,
}: DashboardMonitorProps) {
  // Simulation Logic
  const [fabOpen, setFabOpen] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { isTriggered, markTriggered } = useSimulationGlobal();
  const pageId = '/simulation/dashboard';

  const trigger = React.useCallback(() => {
    if (isTriggered(pageId)) return;
    setFabOpen(true);
    markTriggered(pageId);
  }, [isTriggered, markTriggered]);

  React.useEffect(() => {
    if (!isSimulation) return;

    // Time Trigger: 30 seconds
    const timer = setTimeout(() => {
      trigger();
    }, 30000);

    return () => clearTimeout(timer);
  }, [isSimulation, trigger]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isSimulation) return;
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    // Trigger when scrolled more than 2/3
    if (scrollTop > (scrollHeight - clientHeight) * 0.66) {
      trigger();
    }
  };

  // Mock data - Account Health Snapshot
  const accountSnapshot = {
    followers: 125800,
    followerGrowth30d: 2.8, // percentage
    videoCount30d: 12,
    tier: 'L1',
    growthStatus: 'normal', // normal | slowing
    activityStatus: 'active', // active | low-supply
  };

  // Mock data - Traffic & Growth (last 15 videos)
  const trafficData = [
    { video: '15', views: 45000, date: '12/10' },
    { video: '14', views: 52000, date: '12/08' },
    { video: '13', views: 48000, date: '12/06' },
    { video: '12', views: 51000, date: '12/04' },
    { video: '11', views: 47000, date: '12/02' },
    { video: '10', views: 49000, date: '11/30' },
    { video: '9', views: 46000, date: '11/28' },
    { video: '8', views: 50000, date: '11/26' },
    { video: '7', views: 44000, date: '11/24' },
    { video: '6', views: 53000, date: '11/22' },
    { video: '5', views: 48000, date: '11/20' },
    { video: '4', views: 47000, date: '11/18' },
    { video: '3', views: 51000, date: '11/16' },
    { video: '2', views: 46000, date: '11/14' },
    { video: '1', views: 49000, date: '11/12' },
  ];

  const medianViews = 48000;
  const trafficEfficiency = ((medianViews / accountSnapshot.followers) * 100).toFixed(1);
  const categoryP50 = 47000; // benchmark

  // Follower growth data (daily - last 30 days)
  const followerGrowthData = [
    { day: '1', growth: 85 },
    { day: '2', growth: 92 },
    { day: '3', growth: 78 },
    { day: '4', growth: 65 },
    { day: '5', growth: 120 },
    { day: '6', growth: 95 },
    { day: '7', growth: 88 },
    { day: '8', growth: 110 },
    { day: '9', growth: 102 },
    { day: '10', growth: 75 },
    { day: '11', growth: 68 },
    { day: '12', growth: 130 },
    { day: '13', growth: 115 },
    { day: '14', growth: 98 },
    { day: '15', growth: 105 },
    { day: '16', growth: 82 },
    { day: '17', growth: 90 },
    { day: '18', growth: 125 },
    { day: '19', growth: 108 },
    { day: '20', growth: 95 },
    { day: '21', growth: 88 },
    { day: '22', growth: 112 },
    { day: '23', growth: 100 },
    { day: '24', growth: 78 },
    { day: '25', growth: 92 },
    { day: '26', growth: 118 },
    { day: '27', growth: 105 },
    { day: '28', growth: 85 },
    { day: '29', growth: 95 },
    { day: '30', growth: 102 },
  ];

  // Engagement metrics
  const engagementMetrics = {
    current: {
      aer: 5.8,
      likeRate: 4.5,
      commentRate: 0.7,
      shareRate: 0.3,
    },
    previous: {
      aer: 5.2,
      likeRate: 4.1,
      commentRate: 0.9,
      shareRate: 0.4,
    },
  };

  const getEngagementTrend = (current: number, previous: number) => {
    const diff = ((current - previous) / previous) * 100;
    if (diff > 5) return 'up';
    if (diff < -5) return 'down';
    return 'flat';
  };

  // Content Supply metrics
  const contentSupply = {
    videosPerWeek: 3.2,
    daysSinceLastPost: 2,
    consistency: 'consistent', // consistent | irregular | low-supply
    recentPostDays: [
      { date: '12/25', posted: true },
      { date: '12/24', posted: false },
      { date: '12/23', posted: true },
      { date: '12/22', posted: false },
      { date: '12/21', posted: false },
      { date: '12/20', posted: true },
      { date: '12/19', posted: false },
      { date: '12/18', posted: false },
      { date: '12/17', posted: true },
      { date: '12/16', posted: false },
      { date: '12/15', posted: false },
      { date: '12/14', posted: false },
      { date: '12/13', posted: true },
      { date: '12/12', posted: false },
    ].reverse(),
  };

  // Recent content performance
  const recentContent = [
    {
      date: '12/25',
      title: 'Code faster w/ AI in 3 moves ✅ #AICoding #Cursor #DevTips #Productivity #Programmer',
      views: 52000,
      likes: 2140,
      comments: 380,
      shares: 156,
    },
    {
      date: '12/23',
      title: 'My VS Code setup (steal this) #VSCode #Coding #DevTools #Workflow #Programmer',
      views: 48000,
      likes: 1920,
      comments: 340,
      shares: 144,
    },
    {
      date: '12/20',
      title: 'Terminal setup that saves HOURS ⚡ #Terminal #iTerm2 #Zsh #DevTips #Productivity',
      views: 45000,
      likes: 1800,
      comments: 315,
      shares: 135,
    },
    {
      date: '12/17',
      title: 'GitHub automation = free time 😮 #GitHub #Automation #CI #DevOps #Coding',
      views: 51000,
      likes: 2040,
      comments: 360,
      shares: 153,
    },
    {
      date: '12/13',
      title: 'Docker in 60s (finally makes sense) #Docker #DevOps #Backend #LearnToCode #TechTok',
      views: 46000,
      likes: 1840,
      comments: 322,
      shares: 138,
    },
    {
      date: '12/10',
      title: 'React state management… choose THIS #React #Frontend #StateManagement #Redux #Zustand',
      views: 49000,
      likes: 1960,
      comments: 350,
      shares: 147,
    },
    {
      date: '12/08',
      title: 'TypeScript tips that stop bugs 🧠 #TypeScript #TS #Frontend #DevTips #CleanCode',
      views: 47000,
      likes: 1880,
      comments: 330,
      shares: 141,
      },
    {
      date: '12/06',
      title: 'API design rules (don\'t ship chaos) #APIDesign #Backend #REST #Engineering #DevTips',
      views: 50000,
      likes: 2000,
      comments: 355,
      shares: 150,
    },
    {
      date: '12/04',
      title: 'DB optimization quick wins (do now) #Database #SQL #Performance #Backend #DevTips',
      views: 44000,
      likes: 1760,
      comments: 308,
      shares: 132,
    },
    {
      date: '12/02',
      title: 'CSS animations that feel premium ✨ #CSS #Animation #WebDesign #Frontend #UITips',
      views: 53000,
      likes: 2120,
      comments: 372,
      shares: 159,
    },
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  // Parse title to separate text and hashtags
  const parseTitleWithHashtags = (title: string) => {
    const hashtagMatch = title.match(/^(.+?)(\s#.+)$/);
    if (hashtagMatch) {
      return {
        text: hashtagMatch[1],
        hashtags: hashtagMatch[2],
      };
    }
    return {
      text: title,
      hashtags: '',
    };
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Sidebar */}
      <SidebarPro
        activeItem="dashboard"
        onNavigate={onNavigate}
        className="hidden md:flex"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden pb-[64px] md:pb-0">
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-4 md:px-8 py-4 md:py-5 relative overflow-hidden transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-gray-900 dark:text-white" style={{ fontSize: '24px', fontWeight: '700' }}>
                  Dashboard
                </h1>
              </div>
              <p className="text-gray-500 dark:text-gray-400" style={{ fontSize: '13px' }}>
                Real-time operational monitoring · Account performance overview
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate?.('intelligence')}
                className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                View Diagnosis
                <ArrowRight className="w-4 h-4" />
              </button>
              <CopilotCTAButton
                question="Explain my recent performance"
                context={{
                  medianViews,
                  trafficEfficiency,
                  aer: engagementMetrics.current.aer,
                  videosPerWeek: contentSupply.videosPerWeek,
                }}
                size="md"
                variant="primary"
              />
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div 
          className="flex-1 overflow-y-auto p-8"
          onScroll={handleScroll}
          ref={scrollRef}
        >
          <div className="max-w-[1400px] mx-auto space-y-6">
            {/* 1. ACCOUNT HEALTH SNAPSHOT */}
            <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-300">
              <div className="grid grid-cols-5 gap-6">
                {/* Followers */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Followers
                    </span>
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {formatNumber(accountSnapshot.followers)}
                  </div>
                  <div className="flex items-center gap-1">
                    {accountSnapshot.growthStatus === 'normal' ? (
                      <>
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                        <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>Normal</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                        <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '12px' }}>Slowing</span>
                      </>
                    )}
                  </div>
                </div>

                {/* 30-day Growth Rate */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      30-Day Growth
                    </span>
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    +{accountSnapshot.followerGrowth30d}%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                    ~{Math.round((accountSnapshot.followers * accountSnapshot.followerGrowth30d) / 100)} followers
                  </div>
                </div>

                {/* 30-day Video Count */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      30-Day Videos
                    </span>
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {accountSnapshot.videoCount30d}
                  </div>
                  <div className="flex items-center gap-1">
                    {accountSnapshot.activityStatus === 'active' ? (
                      <>
                        <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                        <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>Active</span>
                      </>
                    ) : (
                      <>
                        <Activity className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
                        <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '12px' }}>Low Supply</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Views per Follower */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Views/Follower
                    </span>
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    257
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowDownRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-500" style={{ fontSize: '12px' }}>-12% (30d)</span>
                  </div>
                </div>

                {/* Account Tier */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Account Tier
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-700 dark:bg-teal-800">
                    <span className="text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
                      {accountSnapshot.tier}
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1" style={{ fontSize: '12px' }}>
                    Established Creator
                  </div>
                </div>
              </div>
            </div>

            {/* 2. TRAFFIC & GROWTH MONITOR */}
            <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
                    Traffic & Growth Monitor
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500" style={{ fontSize: '12px' }}>
                    Algorithm distribution and follower acquisition trends
                  </p>
                </div>
                <button
                  onClick={() => onNavigate?.('intelligence')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  View diagnosis
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Views per Video */}
                <div>
                  <div className="mb-4">
                    <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '14px', fontWeight: '700' }}>
                      Views per Video (Last 15)
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-gray-900 dark:text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
                        {formatNumber(medianViews)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                        median
                      </span>
                      <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '12px' }}>
                        · Efficiency: {trafficEfficiency}%
                      </span>
                    </div>
                  </div>
                  <CustomLineChart
                    data={trafficData}
                    medianValue={medianViews}
                    categoryP50={categoryP50}
                  />
                </div>

                {/* Follower Growth */}
                <div>
                  <div className="mb-4">
                    <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '14px', fontWeight: '700' }}>
                      Follower Growth (Daily)
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-gray-900 dark:text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
                        {followerGrowthData[followerGrowthData.length - 1].growth}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                        today
                      </span>
                    </div>
                  </div>
                  <CustomBarChart data={followerGrowthData} />
                </div>
              </div>
            </div>

            {/* 3. ENGAGEMENT QUALITY MONITOR */}
            <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
                    Engagement Quality Monitor
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500" style={{ fontSize: '12px' }}>
                    User response metrics · Last 10 videos average
                  </p>
                </div>
                <button
                  onClick={() => onNavigate?.('intelligence')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  View diagnosis
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* AER */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Active Engagement
                    </div>
                    {getEngagementTrend(engagementMetrics.current.aer, engagementMetrics.previous.aer) === 'up' && (
                      <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.aer, engagementMetrics.previous.aer) === 'down' && (
                      <TrendingDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.aer, engagementMetrics.previous.aer) === 'flat' && (
                      <Minus className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {engagementMetrics.current.aer}%
                  </div>
                  <div className={`${engagementMetrics.current.aer > engagementMetrics.previous.aer ? 'text-emerald-600 dark:text-emerald-500' : engagementMetrics.current.aer < engagementMetrics.previous.aer ? 'text-red-600 dark:text-red-500' : 'text-gray-400 dark:text-gray-500'}`} style={{ fontSize: '11px', fontWeight: '600' }}>
                    {engagementMetrics.current.aer > engagementMetrics.previous.aer ? '+' : ''}{(engagementMetrics.current.aer - engagementMetrics.previous.aer).toFixed(1)}% vs prev 10
                  </div>
                </div>

                {/* Like Rate */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Heart className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                      <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        Like Rate
                      </div>
                    </div>
                    {getEngagementTrend(engagementMetrics.current.likeRate, engagementMetrics.previous.likeRate) === 'up' && (
                      <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.likeRate, engagementMetrics.previous.likeRate) === 'down' && (
                      <TrendingDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.likeRate, engagementMetrics.previous.likeRate) === 'flat' && (
                      <Minus className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {engagementMetrics.current.likeRate}%
                  </div>
                  <div className={`${engagementMetrics.current.likeRate > engagementMetrics.previous.likeRate ? 'text-emerald-600 dark:text-emerald-500' : engagementMetrics.current.likeRate < engagementMetrics.previous.likeRate ? 'text-red-600 dark:text-red-500' : 'text-gray-400 dark:text-gray-500'}`} style={{ fontSize: '11px', fontWeight: '600' }}>
                    {engagementMetrics.current.likeRate > engagementMetrics.previous.likeRate ? '+' : ''}{(engagementMetrics.current.likeRate - engagementMetrics.previous.likeRate).toFixed(1)}% vs prev 10
                  </div>
                </div>

                {/* Comment Rate */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                      <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        Comment Rate
                      </div>
                    </div>
                    {getEngagementTrend(engagementMetrics.current.commentRate, engagementMetrics.previous.commentRate) === 'up' && (
                      <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.commentRate, engagementMetrics.previous.commentRate) === 'down' && (
                      <TrendingDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.commentRate, engagementMetrics.previous.commentRate) === 'flat' && (
                      <Minus className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {engagementMetrics.current.commentRate}%
                  </div>
                  <div className={`${engagementMetrics.current.commentRate > engagementMetrics.previous.commentRate ? 'text-emerald-600 dark:text-emerald-500' : engagementMetrics.current.commentRate < engagementMetrics.previous.commentRate ? 'text-red-600 dark:text-red-500' : 'text-gray-400 dark:text-gray-500'}`} style={{ fontSize: '11px', fontWeight: '600' }}>
                    {engagementMetrics.current.commentRate > engagementMetrics.previous.commentRate ? '+' : ''}{(engagementMetrics.current.commentRate - engagementMetrics.previous.commentRate).toFixed(1)}% vs prev 10
                  </div>
                </div>

                {/* Share Rate */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
                      <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        Share Rate
                      </div>
                    </div>
                    {getEngagementTrend(engagementMetrics.current.shareRate, engagementMetrics.previous.shareRate) === 'up' && (
                      <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.shareRate, engagementMetrics.previous.shareRate) === 'down' && (
                      <TrendingDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                    {getEngagementTrend(engagementMetrics.current.shareRate, engagementMetrics.previous.shareRate) === 'flat' && (
                      <Minus className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {engagementMetrics.current.shareRate}%
                  </div>
                  <div className={`${engagementMetrics.current.shareRate > engagementMetrics.previous.shareRate ? 'text-emerald-600 dark:text-emerald-500' : engagementMetrics.current.shareRate < engagementMetrics.previous.shareRate ? 'text-red-600 dark:text-red-500' : 'text-gray-400 dark:text-gray-500'}`} style={{ fontSize: '11px', fontWeight: '600' }}>
                    {engagementMetrics.current.shareRate > engagementMetrics.previous.shareRate ? '+' : ''}{(engagementMetrics.current.shareRate - engagementMetrics.previous.shareRate).toFixed(1)}% vs prev 10
                  </div>
                </div>
              </div>
            </div>

            {/* 4. AUDIENCE INSIGHTS */}
            <AudienceInsights language="en" />

            {/* 5. CONTENT SUPPLY & RHYTHM */}
            <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
                    Content Supply & Rhythm
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500" style={{ fontSize: '12px' }}>
                    Production stability and posting consistency
                  </p>
                </div>
                <button
                  onClick={() => onNavigate?.('scheduling')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  View calendar
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                {/* Posting Frequency */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Posting Frequency
                    </span>
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {contentSupply.videosPerWeek}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                    videos per week
                  </div>
                </div>

                {/* Days Since Last Post */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Last Post
                    </span>
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {contentSupply.daysSinceLastPost}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                    days ago
                  </div>
                </div>

                {/* Consistency Status */}
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Consistency
                    </span>
                  </div>
                  <div className="text-gray-900 dark:text-white mb-1 capitalize" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {contentSupply.consistency}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                    Regular pattern
                  </div>
                </div>
              </div>

              {/* Calendar Strip */}
              <div>
                <div className="text-gray-400 dark:text-gray-500 mb-3" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Recent Posting Days (Last 14 days)
                </div>
                <div className="flex gap-1">
                  {contentSupply.recentPostDays.map((day, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 h-12 rounded-lg border ${
                        day.posted
                          ? 'bg-gray-900 dark:bg-emerald-600 border-gray-900 dark:border-emerald-600'
                          : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700'
                      } flex flex-col items-center justify-center`}
                    >
                      <div
                        className={day.posted ? 'text-white' : 'text-gray-600 dark:text-gray-400'}
                        style={{ fontSize: '10px', fontWeight: '600' }}
                      >
                        {day.date.split('/')[1]}
                      </div>
                      {day.posted && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BENCHMARK CONTEXT */}
            <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-300">
              <h3 className="text-gray-900 dark:text-white mb-6" style={{ fontSize: '16px', fontWeight: '700' }}>
                Benchmark Context
              </h3>
              
              {/* Peer Group Context */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '13px' }}>
                    Compared to similar creators
                  </div>
                </div>
              </div>

              {/* Benchmark Bars */}
              <div className="space-y-8">
                <BenchmarkBar
                  userPercentile={42}
                  metricName="Traffic Efficiency"
                  userValue="28.5%"
                  description="Views per follower · Measures algorithm distribution strength"
                  pathToP80={[
                    'Optimize posting times to match your audience\'s peak activity hours',
                    'Improve hook quality - first 3 seconds determine 70% of view completion',
                    'Test trending audio and effects to increase FYP probability'
                  ]}
                />
                <BenchmarkBar
                  userPercentile={67}
                  metricName="Active Engagement Rate"
                  userValue="5.2%"
                  description="(Likes + Comments + Shares) ÷ Views"
                  pathToP80={[]}
                />
                <BenchmarkBar
                  userPercentile={87}
                  metricName="Like-to-Follower Ratio"
                  userValue="9.8"
                  description="Total likes ÷ Total followers · Strong audience loyalty indicator"
                  pathToP80={[]}
                />
              </div>
            </div>

            {/* 6. RECENT CONTENT PERFORMANCE */}
            <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>
                    Recent Content Performance
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500" style={{ fontSize: '12px' }}>
                    Last 10 videos · Median: {formatNumber(medianViews)} views
                  </p>
                </div>
                <button
                  onClick={() => onNavigate?.('studio')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  style={{ fontSize: '12px', fontWeight: '600' }}
                >
                  View all content
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                {/* Header */}
                <div className="grid grid-cols-[1fr_100px_80px_80px_80px_100px] gap-4 px-4 py-2 border-b border-gray-200 dark:border-slate-800">
                  <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Date
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-right" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Views
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-right" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Likes
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-right" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Comments
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-right" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Shares
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 text-right" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Status
                  </div>
                </div>

                {/* Content Rows */}
                {recentContent.map((content, idx) => {
                  const isAboveMedian = content.views > medianViews;
                  const { text, hashtags } = parseTitleWithHashtags(content.title);
                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-[1fr_100px_80px_80px_80px_100px] gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div>
                        <div className="mb-0.5" style={{ fontSize: '13px', fontWeight: '600' }}>
                          <span className="text-gray-900 dark:text-white">{text}</span>
                          <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline cursor-pointer transition-colors">{hashtags}</span>
                        </div>
                        <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px' }}>
                          {content.date}
                        </div>
                      </div>
                      <div className="text-gray-900 dark:text-white text-right" style={{ fontSize: '14px', fontWeight: '600' }}>
                        {formatNumber(content.views)}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-right" style={{ fontSize: '13px' }}>
                        {formatNumber(content.likes)}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-right" style={{ fontSize: '13px' }}>
                        {content.comments}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-right" style={{ fontSize: '13px' }}>
                        {content.shares}
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block px-2 py-1 rounded ${
                            isAboveMedian
                              ? 'bg-gray-900 dark:bg-emerald-600 text-white'
                              : 'bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400'
                          }`}
                          style={{ fontSize: '10px', fontWeight: '600' }}
                        >
                          {isAboveMedian ? 'Above' : 'Below'} Median
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 7. CONTENT STRUCTURE ANALYSIS */}
            <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-gray-200 dark:border-slate-800 p-6 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-gray-900 dark:text-white mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                    Content Structure Analysis
                  </h2>
                  <p className="text-gray-400 dark:text-gray-500" style={{ fontSize: '13px' }}>
                    Video structure patterns from your last 30 videos
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Left: Top 3 Most Used */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <PieChart className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <h3 className="text-gray-900 dark:text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
                      Most Used Top 3
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {/* #1 Three Segments */}
                    <div className="p-4 rounded-lg border-2 border-gray-900 dark:border-slate-600 bg-gray-50 dark:bg-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-gray-900 dark:text-white" style={{ fontSize: '15px', fontWeight: '700' }}>
                            1. Three Segments
                          </span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900" style={{ fontSize: '11px', fontWeight: '700' }}>
                          52%
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        Hook → Body → Ending (90% of NA creators)
                      </p>
                      <div className="p-2 rounded bg-white dark:bg-slate-700">
                        <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '10px' }}>Usage Rate</div>
                        <div className="text-gray-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>16 videos</div>
                      </div>
                    </div>

                    {/* #2 Two Segments */}
                    <div className="p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                          2. Two Segments
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400" style={{ fontSize: '11px', fontWeight: '600' }}>
                          28%
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                        Problem/Phenomenon → Solution/Result
                      </p>
                      <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px' }}>
                        <span>9 videos</span>
                      </div>
                    </div>

                    {/* #3 Single Segment */}
                    <div className="p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                          3. Single Segment
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-gray-400" style={{ fontSize: '11px', fontWeight: '600' }}>
                          12%
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                        No division, suitable for 15s shorts/ASMR
                      </p>
                      <div className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px' }}>
                        <span>4 videos</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Top Performer */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                    <h3 className="text-gray-900 dark:text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
                      Top Performer
                    </h3>
                  </div>

                  {/* Winner: Three Segments */}
                  <div className="p-5 rounded-lg border-2 border-emerald-600 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center">
                        <span className="text-white" style={{ fontSize: '14px', fontWeight: '800' }}>1</span>
                      </div>
                      <div>
                        <span className="text-emerald-800 dark:text-emerald-300" style={{ fontSize: '16px', fontWeight: '700' }}>
                          Three Segments
                        </span>
                        <div className="flex items-center gap-1 mt-0.5">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-400" style={{ fontSize: '11px', fontWeight: '600' }}>
                            Best Overall Performance
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800">
                        <div className="text-emerald-800 dark:text-emerald-400 mb-1" style={{ fontSize: '11px', fontWeight: '600' }}>
                          Avg Engagement
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-emerald-700 dark:text-emerald-300" style={{ fontSize: '24px', fontWeight: '700' }}>5.8%</span>
                          <div className="flex items-center gap-0.5">
                            <ArrowUpRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-emerald-600 dark:text-emerald-400" style={{ fontSize: '11px', fontWeight: '600' }}>+22%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-emerald-200 dark:border-emerald-800">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <p className="text-emerald-800 dark:text-emerald-300" style={{ fontSize: '11px', fontWeight: '500', lineHeight: '1.5' }}>
                          Hook  Body → Ending structure drives 22% higher engagement. This is your proven format.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Other structures quick view */}
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-900 dark:text-white" style={{ fontSize: '13px', fontWeight: '600' }}>
                          Loop Segment
                        </span>
                        <span className="text-gray-400 dark:text-gray-500" style={{ fontSize: '11px' }}>2 videos</span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400" style={{ fontSize: '11px' }}>
                        <span>4.1% engagement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar
        activeItem="dashboard"
        onNavigate={onNavigate}
      />

      {isSimulation && (
        <ConversionFab 
          scenario="dashboard" 
          triggerOpen={fabOpen} 
          onNavigate={onNavigate || (() => {})}
          onClose={() => setFabOpen(false)}
        />
      )}
    </div>
  );
}
