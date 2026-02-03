import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hash, TrendingUp, TrendingDown, ArrowUpRight, ArrowRight, Minus, Target, Globe, Zap, Shield, AlertTriangle, Sparkles, Activity, Eye, FileText, CheckCircle, Info, ChevronDown, Flame, Rocket, Sprout, Search, X, BarChart3, Users, Clock, Youtube, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { useSimulationTrigger } from './SimulationPageWrapper';

interface HashtagRadarProps {
  onNavigate?: (page: string) => void;
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
  isSimulation?: boolean;
}

export function HashtagRadar({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
  isSimulation = false,
}: HashtagRadarProps) {
  const { trigger } = useSimulationTrigger();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Time Trigger: 30 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      trigger();
    }, 30000);

    return () => clearTimeout(timer);
  }, [trigger]);

  // Scroll Trigger: 2/3 depth
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // Trigger if scrolled past 2/3 of the scrollable content
      if (scrollTop + clientHeight >= scrollHeight * 0.66) {
        trigger();
      }
    }
  };

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <SidebarPro 
        activeItem="hashtag" 
        onNavigate={onNavigate}
      />
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-auto"
        onScroll={handleScroll}
      >
        <HashtagRadarContent />
      </div>
    </div>
  );
}

type TimeWindow = '7D' | '30D' | '120D';
type VelocityType = 'fast' | 'steady' | 'slow';
type TrendClassification = 'rising' | 'trending' | 'stable' | 'declining';
type VolatilityType = 'stable' | 'volatile';
type CompetitionLevel = 'low' | 'medium' | 'high';
type AffinityType = 'strong' | 'general' | 'weak';
type PriorityMode = 'VIRAL' | 'STABLE';

// Official TikTok API data structure
interface HashtagAPIData {
  rank: number;
  rankChange: number; // positive = up, negative = down, 0 = no change
  publishCount: string; // e.g. "12.5K"
  totalViews: string; // e.g. "45M"
  category: string;
  country: string;
  trendTimeSeries: number[]; // Normalized 0-100 values over time
}

// System-derived indicators
interface DerivedIndicators {
  velocity: VelocityType;
  trendClassification: TrendClassification;
  volatility: VolatilityType;
  competitionPressure: CompetitionLevel;
}

// System intelligence layer
interface SystemIntelligence {
  affinity: AffinityType;
  usageHint: string;
  contentFit: string; // Best For / Content Fit
  growthPhase: 'Emerging' | 'Accelerating' | 'Saturating'; 
  coldStartStability: 'High' | 'Medium' | 'Low'; 
  trendSignals: {
    tiktok: boolean;
    googleTrends: boolean;
    reddit: boolean;
    twitter: boolean;
  };
  decisionStatus?: 'Recommended' | 'Use with Caution' | 'Avoid for Now'; // Optional now
}

// Complete hashtag data model
interface HashtagData {
  id: string;
  name: string;
  api: HashtagAPIData;
  derived: DerivedIndicators;
  intelligence: SystemIntelligence;
  isAnalyzed: boolean; // NEW: Flag to indicate if AI analysis is complete
  decision?: 'Recommended' | 'Use with Caution' | 'Avoid for Now';
}

// Official TikTok Ranking Categories
const RANKING_CATEGORIES = [
  'Food & Beverage',
  'Games',
  'Health & Wellness',
  'Tech & Electronics',
  'Fashion & Beauty',
  'Sports & Fitness',
  'Travel & Places',
  'Entertainment',
  'Education',
  'Business & Finance',
  'DIY & Crafts',
  'Pets & Animals',
  'Music',
  'Art & Design',
  'Home & Garden',
  'Parenting & Family',
  'Automotive',
  'Books & Literature',
];

// TikTok Supported Regions
const CORE_REGIONS = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
];

const ALL_SUPPORTED_REGIONS = [
  'Argentina',
  'Australia',
  'Austria',
  'Belgium',
  'Brazil',
  'Canada',
  'Chile',
  'Colombia',
  'Czech Republic',
  'Denmark',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hong Kong',
  'Hungary',
  'India',
  'Indonesia',
  'Ireland',
  'Israel',
  'Italy',
  'Japan',
  'Malaysia',
  'Mexico',
  'Netherlands',
  'New Zealand',
  'Norway',
  'Philippines',
  'Poland',
  'Portugal',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'Singapore',
  'South Africa',
  'South Korea',
  'Spain',
  'Sweden',
  'Switzerland',
  'Taiwan',
  'Thailand',
  'Turkey',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Vietnam',
];

function HashtagRadarContent() {
  const [selectedCategory, setSelectedCategory] = React.useState('Auto (Based on your account)');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [categorySearchQuery, setCategorySearchQuery] = React.useState('');
  const [timeWindow, setTimeWindow] = React.useState<TimeWindow>('30D');
  const [myNiche] = React.useState('Tech & Gadgets'); // User's content category
  const [selectedCountry, setSelectedCountry] = React.useState('Auto (Based on your audience)');
  const [countryDropdownOpen, setCountryDropdownOpen] = React.useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = React.useState('');
  const [priorityMode, setPriorityMode] = React.useState<PriorityMode>('VIRAL');
  const [activeTab, setActiveTab] = React.useState<TrendClassification>('rising');
  
  // Pagination states for each tab
  const [risingPage, setRisingPage] = React.useState(1);
  const [trendingPage, setTrendingPage] = React.useState(1);
  const [stablePage, setStablePage] = React.useState(1);
  const [decliningPage, setDecliningPage] = React.useState(1);
  const itemsPerPage = 10;

  // Filter categories by search query
  const filteredCategories = RANKING_CATEGORIES.filter(cat =>
    cat.toLowerCase().includes(categorySearchQuery.toLowerCase())
  );

  // Check if Auto mode is selected
  const isAutoMode = selectedCategory === 'Auto (Based on your account)';
  const isAutoRegion = selectedCountry === 'Auto (Based on your audience)';

  // Sample hashtag data combining API data with derived insights
  const hashtagsData = React.useMemo<HashtagData[]>(() => [
    // RISING SECTION
    {
      id: 'r1',
      name: '#TechUnboxing2025',
      api: {
        rank: 1,
        rankChange: 15,
        publishCount: '12.5K',
        totalViews: '45M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [20, 25, 35, 50, 70, 85, 100],
      },
      derived: {
        velocity: 'fast',
        trendClassification: 'rising',
        volatility: 'volatile',
        competitionPressure: 'low',
      },
      intelligence: {
        affinity: 'strong',
        usageHint: 'Videos featuring first impressions and unboxing experiences of the latest tech products released in 2025',
        contentFit: 'Best for unboxing videos',
        growthPhase: 'Emerging',
        coldStartStability: 'High',
        trendSignals: {
          tiktok: true,
          googleTrends: false,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Recommended',
      },
      isAnalyzed: true,
    },
    {
      id: 'r2',
      name: '#AIGadgetReview',
      api: {
        rank: 2,
        rankChange: 8,
        publishCount: '8.3K',
        totalViews: '28M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [15, 22, 30, 45, 65, 80, 100],
      },
      derived: {
        velocity: 'fast',
        trendClassification: 'rising',
        volatility: 'stable',
        competitionPressure: 'low',
      },
      intelligence: {
        affinity: 'strong',
        usageHint: 'Daily gadget reviews covering specs, performance tests, and honest opinions on new devices',
        contentFit: 'Best for product reviews',
        growthPhase: 'Accelerating',
        coldStartStability: 'Medium',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Recommended',
      },
      isAnalyzed: true,
    },
    {
      id: 'r3',
      name: '#WinterTech',
      api: {
        rank: 3,
        rankChange: 12,
        publishCount: '18.2K',
        totalViews: '52M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [10, 18, 28, 42, 60, 82, 100],
      },
      derived: {
        velocity: 'fast',
        trendClassification: 'rising',
        volatility: 'volatile',
        competitionPressure: 'medium',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'Gift guides and product recommendations for tech enthusiasts during the holiday season',
        contentFit: 'Best for seasonal content',
        growthPhase: 'Emerging',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: false,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    {
      id: 'r4',
      name: '#SmartDevices2025',
      api: {
        rank: 4,
        rankChange: 6,
        publishCount: '6.7K',
        totalViews: '19M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [25, 32, 42, 55, 68, 85, 100],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'rising',
        volatility: 'stable',
        competitionPressure: 'low',
      },
      intelligence: {
        affinity: 'strong',
        usageHint: 'Home automation tutorials, smart device integrations, and IoT ecosystem walkthroughs',
        contentFit: 'Best for smart device reviews',
        growthPhase: 'Accelerating',
        coldStartStability: 'Medium',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Recommended',
      },
      isAnalyzed: true,
    },

    // TRENDING SECTION
    {
      id: 't1',
      name: '#TechReview',
      api: {
        rank: 1,
        rankChange: 2,
        publishCount: '2.5M',
        totalViews: '8.5B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [85, 88, 90, 92, 90, 88, 90],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'trending',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'strong',
        usageHint: 'Camera quality comparisons, photo/video samples, and mobile photography tutorials',
        contentFit: 'Best for in-depth reviews',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    {
      id: 't2',
      name: '#GadgetReview',
      api: {
        rank: 2,
        rankChange: 0,
        publishCount: '1.8M',
        totalViews: '6.2B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [80, 82, 85, 87, 85, 83, 85],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'trending',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'strong',
        usageHint: 'Affordable tech products, value comparisons, and budget-friendly alternatives reviews',
        contentFit: 'Best for product reviews',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    {
      id: 't3',
      name: '#TechTok',
      api: {
        rank: 3,
        rankChange: -1,
        publishCount: '4.2M',
        totalViews: '12.8B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [90, 92, 93, 95, 93, 92, 93],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'trending',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'Broad tech discussions, community engagement, and general technology enthusiast content',
        contentFit: 'Best for general tech content',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    {
      id: 't4',
      name: '#SmartHome',
      api: {
        rank: 4,
        rankChange: 3,
        publishCount: '890K',
        totalViews: '3.2B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [70, 75, 80, 85, 82, 80, 83],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'trending',
        volatility: 'volatile',
        competitionPressure: 'medium',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'Latest smart gadgets, AI-powered devices, and cutting-edge IoT products of 2025',
        contentFit: 'Best for smart home content',
        growthPhase: 'Accelerating',
        coldStartStability: 'Medium',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Recommended',
      },
      isAnalyzed: true,
    },

    // STABLE SECTION
    {
      id: 's1',
      name: '#ProductReview',
      api: {
        rank: 1,
        rankChange: 0,
        publishCount: '5.6M',
        totalViews: '15.2B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [85, 85, 86, 85, 85, 86, 85],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'stable',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'strong',
        usageHint: 'Comprehensive product evaluations, pros & cons analysis, and purchase recommendations',
        contentFit: 'Best for product reviews',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    {
      id: 's2',
      name: '#Unboxing',
      api: {
        rank: 2,
        rankChange: 0,
        publishCount: '8.2M',
        totalViews: '22.5B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [88, 87, 88, 87, 88, 87, 88],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'stable',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'strong',
        usageHint: 'First-look unboxing experiences, packaging reviews, and initial setup demonstrations',
        contentFit: 'Best for unboxing videos',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    {
      id: 's3',
      name: '#TechNews',
      api: {
        rank: 3,
        rankChange: 1,
        publishCount: '1.2M',
        totalViews: '4.8B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [82, 83, 82, 83, 82, 83, 82],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'stable',
        volatility: 'stable',
        competitionPressure: 'medium',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'Latest technology industry updates, product announcements, and breaking tech stories',
        contentFit: 'Best for tech news',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    {
      id: 's4',
      name: '#Technology',
      api: {
        rank: 4,
        rankChange: -1,
        publishCount: '12.5M',
        totalViews: '38.5B',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [92, 91, 92, 91, 92, 91, 92],
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'stable',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'Wide-ranging technology content from innovations to tutorials and industry insights',
        contentFit: 'Best for general tech content',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: true,
          googleTrends: true,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: true,
    },
    // DECLINING SECTION
    {
      id: 'd1',
      name: '#TechTrends2024',
      api: {
        rank: 78,
        rankChange: -25,
        publishCount: '8.2K',
        totalViews: '18M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [95, 88, 75, 62, 48, 35, 25],
      },
      derived: {
        velocity: 'slow',
        trendClassification: 'declining',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'weak',
        usageHint: 'Year-specific content that lost relevance as 2025 began, now replaced by 2025-focused hashtags',
        contentFit: 'Avoid - outdated',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: false,
          googleTrends: false,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Avoid for Now',
      },
      isAnalyzed: true,
    },
    {
      id: 'd2',
      name: '#GadgetHaul',
      api: {
        rank: 92,
        rankChange: -18,
        publishCount: '5.8K',
        totalViews: '12M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [70, 68, 60, 52, 42, 32, 28],
      },
      derived: {
        velocity: 'slow',
        trendClassification: 'declining',
        volatility: 'stable',
        competitionPressure: 'medium',
      },
      intelligence: {
        affinity: 'weak',
        usageHint: 'Generic shopping haul content losing traction to more specific product review formats',
        contentFit: 'Avoid - oversaturated',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: false,
          googleTrends: false,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Avoid for Now',
      },
      isAnalyzed: true,
    },
    {
      id: 'd3',
      name: '#SmartphoneReview',
      api: {
        rank: 105,
        rankChange: -32,
        publishCount: '4.2K',
        totalViews: '8.5M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [85, 75, 65, 52, 40, 30, 22],
      },
      derived: {
        velocity: 'slow',
        trendClassification: 'declining',
        volatility: 'volatile',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'Broad smartphone content being replaced by device-specific and feature-specific hashtags',
        contentFit: 'Avoid - too generic',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: false,
          googleTrends: false,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Avoid for Now',
      },
      isAnalyzed: true,
    },
    {
      id: 'd4',
      name: '#TechTips',
      api: {
        rank: 115,
        rankChange: -22,
        publishCount: '6.5K',
        totalViews: '15M',
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: [78, 72, 65, 55, 45, 35, 30],
      },
      derived: {
        velocity: 'slow',
        trendClassification: 'declining',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'General tech advice content losing engagement to more niche, tutorial-focused hashtags',
        contentFit: 'Avoid - generic advice',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: {
          tiktok: false,
          googleTrends: false,
          reddit: false,
          twitter: false,
        },
        decisionStatus: 'Avoid for Now',
      },
      isAnalyzed: true,
    },
    // GENERATED DATA - RISING
    ...Array.from({ length: 25 }).map((_, i) => ({
      id: `r-gen-${i}`,
      name: `#RisingTech${i + 2025}`,
      api: {
        rank: i + 5,
        rankChange: Math.floor(Math.random() * 30) + 5,
        publishCount: `${(Math.random() * 20 + 2).toFixed(1)}K`,
        totalViews: `${(Math.random() * 50 + 5).toFixed(1)}M`,
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: Array.from({ length: 7 }, (_, j) => Math.min(100, 20 + j * 10 + Math.random() * 15)),
      },
      derived: {
        velocity: 'fast',
        trendClassification: 'rising',
        volatility: Math.random() > 0.5 ? 'volatile' : 'stable',
        competitionPressure: Math.random() > 0.6 ? 'medium' : 'low',
      },
      intelligence: {
        affinity: Math.random() > 0.4 ? 'strong' : 'general',
        usageHint: 'Emerging tech trend showing strong early signals on TikTok.',
        contentFit: 'Early adoption content',
        growthPhase: 'Accelerating',
        coldStartStability: 'Medium',
        trendSignals: { tiktok: true, googleTrends: Math.random() > 0.5, reddit: false, twitter: Math.random() > 0.5 },
        decisionStatus: 'Recommended',
      },
      isAnalyzed: false,
    } as HashtagData)),
    // GENERATED DATA - TRENDING
    ...Array.from({ length: 25 }).map((_, i) => ({
      id: `t-gen-${i}`,
      name: `#ViralGadget${i}`,
      api: {
        rank: i + 5,
        rankChange: Math.floor(Math.random() * 10) - 5,
        publishCount: `${(Math.random() * 5 + 1).toFixed(1)}M`,
        totalViews: `${(Math.random() * 10 + 2).toFixed(1)}B`,
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: Array.from({ length: 7 }, () => 80 + Math.random() * 20),
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'trending',
        volatility: 'stable',
        competitionPressure: 'high',
      },
      intelligence: {
        affinity: Math.random() > 0.3 ? 'strong' : 'general',
        usageHint: 'High-traffic viral topic, great for visibility but requires high quality.',
        contentFit: 'Mass appeal content',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: { tiktok: true, googleTrends: true, reddit: true, twitter: true },
        decisionStatus: Math.random() > 0.5 ? 'Recommended' : 'Use with Caution',
      },
      isAnalyzed: false,
    } as HashtagData)),
    // GENERATED DATA - STABLE
    ...Array.from({ length: 25 }).map((_, i) => ({
      id: `s-gen-${i}`,
      name: `#TechDaily${i}`,
      api: {
        rank: i + 10,
        rankChange: Math.floor(Math.random() * 4) - 2,
        publishCount: `${(Math.random() * 800 + 100).toFixed(0)}K`,
        totalViews: `${(Math.random() * 5 + 1).toFixed(1)}B`,
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: Array.from({ length: 7 }, () => 70 + Math.random() * 10),
      },
      derived: {
        velocity: 'steady',
        trendClassification: 'stable',
        volatility: 'stable',
        competitionPressure: Math.random() > 0.5 ? 'high' : 'medium',
      },
      intelligence: {
        affinity: 'general',
        usageHint: 'Consistent evergreen topic suitable for regular programming.',
        contentFit: 'Evergreen content',
        growthPhase: 'Saturating',
        coldStartStability: 'Medium',
        trendSignals: { tiktok: true, googleTrends: true, reddit: false, twitter: false },
        decisionStatus: 'Use with Caution',
      },
      isAnalyzed: false,
    } as HashtagData)),
    // GENERATED DATA - DECLINING
    ...Array.from({ length: 25 }).map((_, i) => ({
      id: `d-gen-${i}`,
      name: `#OldTech${i}`,
      api: {
        rank: 100 + i,
        rankChange: -Math.floor(Math.random() * 20) - 5,
        publishCount: `${(Math.random() * 50 + 10).toFixed(0)}K`,
        totalViews: `${(Math.random() * 20 + 5).toFixed(1)}M`,
        category: 'Tech & Electronics',
        country: 'United States',
        trendTimeSeries: Array.from({ length: 7 }, (_, j) => Math.max(10, 80 - j * 10 - Math.random() * 5)),
      },
      derived: {
        velocity: 'slow',
        trendClassification: 'declining',
        volatility: 'stable',
        competitionPressure: 'medium',
      },
      intelligence: {
        affinity: 'weak',
        usageHint: 'Trend is fading, viewership is dropping significantly.',
        contentFit: 'Avoid',
        growthPhase: 'Saturating',
        coldStartStability: 'Low',
        trendSignals: { tiktok: false, googleTrends: false, reddit: false, twitter: false },
        decisionStatus: 'Avoid for Now',
      },
      isAnalyzed: false,
    } as HashtagData)),
  ], []);

  // Sort hashtags based on priority mode
  const getSortedHashtags = (hashtags: HashtagData[]) => {
    if (priorityMode === 'VIRAL') {
      // Prioritize fast velocity and rising trends
      return [...hashtags].sort((a, b) => {
        const aScore = (a.derived.velocity === 'fast' ? 2 : 1) + (a.derived.trendClassification === 'rising' ? 1 : 0);
        const bScore = (b.derived.velocity === 'fast' ? 2 : 1) + (b.derived.trendClassification === 'rising' ? 1 : 0);
        return bScore - aScore;
      });
    } else {
      // Prioritize stable volatility and steady velocity
      return [...hashtags].sort((a, b) => {
        const aScore = (a.derived.volatility === 'stable' ? 2 : 0) + (a.derived.velocity === 'steady' ? 1 : 0);
        const bScore = (b.derived.volatility === 'stable' ? 2 : 0) + (b.derived.velocity === 'steady' ? 1 : 0);
        return bScore - aScore;
      });
    }
  };

  const risingHashtags = getSortedHashtags(hashtagsData.filter(h => h.derived.trendClassification === 'rising'));
  const trendingHashtags = getSortedHashtags(hashtagsData.filter(h => h.derived.trendClassification === 'trending'));
  const stableHashtags = getSortedHashtags(hashtagsData.filter(h => h.derived.trendClassification === 'stable'));
  const decliningHashtags = getSortedHashtags(hashtagsData.filter(h => h.derived.trendClassification === 'declining'));

  // Pagination helper
  const getPaginatedData = (data: HashtagData[], currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {
      items: data.slice(startIndex, endIndex),
      totalPages: Math.ceil(data.length / itemsPerPage),
      totalItems: data.length,
      startIndex: startIndex + 1,
      endIndex: Math.min(endIndex, data.length),
    };
  };

  const paginatedRising = getPaginatedData(risingHashtags, risingPage);
  const paginatedTrending = getPaginatedData(trendingHashtags, trendingPage);
  const paginatedStable = getPaginatedData(stableHashtags, stablePage);
  const paginatedDeclining = getPaginatedData(decliningHashtags, decliningPage);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Page Header */}
      <div className="bg-white border-b border-[#e4e4e7] sticky top-0 z-30 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-[#18181b] mb-2 tracking-tight" style={{ fontSize: '28px', fontWeight: '800' }}>
                Trend Radar
              </h1>
              <p className="text-[#71717a] max-w-lg leading-relaxed" style={{ fontSize: '14px' }}>
                AI-powered analysis of {filteredCategories.length} categories to identify your next viral opportunity.
              </p>
            </div>
            
            {/* Quick Actions or Global Stats could go here */}
            <div className="flex gap-3">
               {/* Placeholder for potential future actions */}
            </div>
          </div>

          {/* FILTER CONTROLS - Modernized */}
          <div className="flex items-center gap-3">
            {/* CLUSTER 1: Category */}
            <div className="relative group">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 border shadow-sm hover:shadow ${
                  isAutoMode 
                    ? 'bg-white border-[#e4e4e7] text-[#18181b] hover:border-[#d4d4d8]'
                    : 'bg-[#18181b] border-[#18181b] text-white'
                }`}
              >
                <BarChart3 className={`w-4 h-4 ${isAutoMode ? 'text-[#71717a]' : 'text-white'}`} />
                <span style={{ fontSize: '13px', fontWeight: '600' }}>
                  {selectedCategory}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''} ${isAutoMode ? 'text-[#a1a1aa]' : 'text-white/70'}`} />
              </button>

              {categoryDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => {
                      setCategoryDropdownOpen(false);
                      setCategorySearchQuery('');
                    }}
                  ></div>
                  <div className="absolute left-0 top-full mt-2 w-[320px] bg-white rounded-xl border border-[#e4e4e7] shadow-xl shadow-black/5 z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    {/* Auto Option */}
                    <button
                      onClick={() => {
                        setSelectedCategory('Auto (Based on your account)');
                        setCategoryDropdownOpen(false);
                        setCategorySearchQuery('');
                      }}
                      className="w-full px-4 py-3.5 text-left hover:bg-[#fafafa] transition-colors border-b border-[#f4f4f5] group/item"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1.5 rounded-md ${selectedCategory === 'Auto (Based on your account)' ? 'bg-[#dcfce7] text-[#16a34a]' : 'bg-[#f4f4f5] text-[#a1a1aa] group-hover/item:text-[#71717a]'}`}>
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className={`block mb-0.5 ${selectedCategory === 'Auto (Based on your account)' ? 'text-[#16a34a]' : 'text-[#18181b]'}`} style={{ fontSize: '13px', fontWeight: '600' }}>
                            Auto-Detect
                          </span>
                          <p className="text-[#71717a]" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                            AI analyzes your profile to match trends
                          </p>
                        </div>
                        {selectedCategory === 'Auto (Based on your account)' && (
                          <CheckCircle className="w-4 h-4 text-[#16a34a] ml-auto mt-1" />
                        )}
                      </div>
                    </button>

                    {/* Search */}
                    <div className="p-3 border-b border-[#f4f4f5] bg-white">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#a1a1aa]" />
                        <input
                          type="text"
                          value={categorySearchQuery}
                          onChange={(e) => setCategorySearchQuery(e.target.value)}
                          placeholder="Search categories..."
                          className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#f4f4f5] border-transparent text-[#18181b] placeholder:text-[#a1a1aa] focus:bg-white focus:border-[#e4e4e7] focus:ring-2 focus:ring-[#18181b]/5 transition-all outline-none"
                          style={{ fontSize: '12px' }}
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* List */}
                    <div className="max-h-[300px] overflow-y-auto p-1">
                      {filteredCategories.length > 0 ? (
                        filteredCategories.map(category => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setCategoryDropdownOpen(false);
                              setCategorySearchQuery('');
                            }}
                            className={`w-full px-3 py-2 text-left rounded-lg transition-colors flex items-center justify-between group/opt ${
                              selectedCategory === category ? 'bg-[#f4f4f5] text-[#18181b]' : 'text-[#52525b] hover:bg-[#fafafa] hover:text-[#18181b]'
                            }`}
                          >
                            <span style={{ fontSize: '13px', fontWeight: selectedCategory === category ? '600' : '500' }}>
                              {category}
                            </span>
                            {selectedCategory === category && <CheckCircle className="w-3.5 h-3.5 text-[#18181b]" />}
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-8 text-center text-[#a1a1aa] text-[12px]">
                          No categories found
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* CLUSTER 2: Region */}
            <div className="relative group">
              <button
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 border shadow-sm hover:shadow ${
                  isAutoRegion
                    ? 'bg-white border-[#e4e4e7] text-[#18181b] hover:border-[#d4d4d8]'
                    : 'bg-[#18181b] border-[#18181b] text-white'
                }`}
              >
                <Globe className={`w-4 h-4 ${isAutoRegion ? 'text-[#71717a]' : 'text-white'}`} />
                <span style={{ fontSize: '13px', fontWeight: '600' }}>
                  {selectedCountry}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${countryDropdownOpen ? 'rotate-180' : ''} ${isAutoRegion ? 'text-[#a1a1aa]' : 'text-white/70'}`} />
              </button>

              {countryDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => {
                      setCountryDropdownOpen(false);
                      setCountrySearchQuery('');
                    }}
                  ></div>
                  <div className="absolute left-0 top-full mt-2 w-[320px] bg-white rounded-xl border border-[#e4e4e7] shadow-xl shadow-black/5 z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    {/* Auto Option */}
                    <button
                      onClick={() => {
                        setSelectedCountry('Auto (Based on your audience)');
                        setCountryDropdownOpen(false);
                        setCountrySearchQuery('');
                      }}
                      className="w-full px-4 py-3.5 text-left hover:bg-[#fafafa] transition-colors border-b border-[#f4f4f5] group/item"
                    >
                      <div className="flex items-start gap-3">
                         <div className={`mt-0.5 p-1.5 rounded-md ${selectedCountry === 'Auto (Based on your audience)' ? 'bg-[#dcfce7] text-[#16a34a]' : 'bg-[#f4f4f5] text-[#a1a1aa] group-hover/item:text-[#71717a]'}`}>
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className={`block mb-0.5 ${selectedCountry === 'Auto (Based on your audience)' ? 'text-[#16a34a]' : 'text-[#18181b]'}`} style={{ fontSize: '13px', fontWeight: '600' }}>
                            Audience Match
                          </span>
                          <p className="text-[#71717a]" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                            Target where your viewers are active
                          </p>
                        </div>
                        {selectedCountry === 'Auto (Based on your audience)' && (
                          <CheckCircle className="w-4 h-4 text-[#16a34a] ml-auto mt-1" />
                        )}
                      </div>
                    </button>

                    {/* Search */}
                    <div className="p-3 border-b border-[#f4f4f5] bg-white">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#a1a1aa]" />
                        <input
                          type="text"
                          value={countrySearchQuery}
                          onChange={(e) => setCountrySearchQuery(e.target.value)}
                          placeholder="Search regions..."
                          className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#f4f4f5] border-transparent text-[#18181b] placeholder:text-[#a1a1aa] focus:bg-white focus:border-[#e4e4e7] focus:ring-2 focus:ring-[#18181b]/5 transition-all outline-none"
                          style={{ fontSize: '12px' }}
                        />
                      </div>
                    </div>

                    {/* List */}
                    <div className="max-h-[300px] overflow-y-auto p-1">
                      {/* Similar structure to previous but styled like categories */}
                       {!countrySearchQuery ? (
                            <>
                              <div className="px-3 py-2">
                                <span className="text-[#a1a1aa] text-[10px] font-bold tracking-wider uppercase">Core Regions</span>
                              </div>
                              {CORE_REGIONS.map(country => (
                                <button
                                  key={`core-${country}`}
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setCountryDropdownOpen(false);
                                  }}
                                  className={`w-full px-3 py-2 text-left rounded-lg transition-colors flex items-center justify-between group/opt ${
                                    selectedCountry === country ? 'bg-[#f4f4f5] text-[#18181b]' : 'text-[#52525b] hover:bg-[#fafafa] hover:text-[#18181b]'
                                  }`}
                                >
                                  <span style={{ fontSize: '13px', fontWeight: selectedCountry === country ? '600' : '500' }}>{country}</span>
                                  {selectedCountry === country && <CheckCircle className="w-3.5 h-3.5 text-[#18181b]" />}
                                </button>
                              ))}
                              
                              <div className="px-3 py-2 mt-2 border-t border-[#f4f4f5]">
                                <span className="text-[#a1a1aa] text-[10px] font-bold tracking-wider uppercase">All Regions</span>
                              </div>
                              {ALL_SUPPORTED_REGIONS.map(country => (
                                <button
                                  key={`all-${country}`}
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setCountryDropdownOpen(false);
                                  }}
                                  className={`w-full px-3 py-2 text-left rounded-lg transition-colors flex items-center justify-between group/opt ${
                                    selectedCountry === country ? 'bg-[#f4f4f5] text-[#18181b]' : 'text-[#52525b] hover:bg-[#fafafa] hover:text-[#18181b]'
                                  }`}
                                >
                                  <span style={{ fontSize: '13px', fontWeight: selectedCountry === country ? '600' : '500' }}>{country}</span>
                                  {selectedCountry === country && <CheckCircle className="w-3.5 h-3.5 text-[#18181b]" />}
                                </button>
                              ))}
                            </>
                          ) : (
                            // Filtered results
                            ALL_SUPPORTED_REGIONS.filter(c => c.toLowerCase().includes(countrySearchQuery.toLowerCase())).map(country => (
                                <button
                                  key={`search-${country}`}
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setCountryDropdownOpen(false);
                                    setCountrySearchQuery('');
                                  }}
                                  className={`w-full px-3 py-2 text-left rounded-lg transition-colors flex items-center justify-between group/opt ${
                                    selectedCountry === country ? 'bg-[#f4f4f5] text-[#18181b]' : 'text-[#52525b] hover:bg-[#fafafa] hover:text-[#18181b]'
                                  }`}
                                >
                                  <span style={{ fontSize: '13px', fontWeight: selectedCountry === country ? '600' : '500' }}>{country}</span>
                                  {selectedCountry === country && <CheckCircle className="w-3.5 h-3.5 text-[#18181b]" />}
                                </button>
                            ))
                          )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="grid grid-cols-[1fr_340px] gap-8">
          {/* MAIN CONTENT - Leaderboard with Tabs */}
          <div>
            {/* Tab Navigation */}
            <div className="mb-6">
              <div className="flex items-center gap-2 p-1 bg-[#f4f4f5] rounded-xl w-fit">
                <TabButton
                  icon={<Rocket className="w-4 h-4" />}
                  label="Rising"
                  count={risingHashtags.length}
                  isActive={activeTab === 'rising'}
                  onClick={() => setActiveTab('rising')}
                />
                <TabButton
                  icon={<Flame className="w-4 h-4" />}
                  label="Trending"
                  count={trendingHashtags.length}
                  isActive={activeTab === 'trending'}
                  onClick={() => setActiveTab('trending')}
                />
                <TabButton
                  icon={<Sprout className="w-4 h-4" />}
                  label="Stable"
                  count={stableHashtags.length}
                  isActive={activeTab === 'stable'}
                  onClick={() => setActiveTab('stable')}
                />
                <TabButton
                  icon={<TrendingDown className="w-4 h-4" />}
                  label="Declining"
                  count={decliningHashtags.length}
                  isActive={activeTab === 'declining'}
                  onClick={() => setActiveTab('declining')}
                />
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'rising' && (
                <>
                  <div className="space-y-3">
                    {paginatedRising.items.map(hashtag => (
                      <HashtagLeaderboardCard key={hashtag.id} hashtag={hashtag} />
                    ))}
                  </div>
                  <Pagination 
                    currentPage={risingPage}
                    totalPages={paginatedRising.totalPages}
                    onPageChange={setRisingPage}
                    startIndex={paginatedRising.startIndex}
                    endIndex={paginatedRising.endIndex}
                    totalItems={paginatedRising.totalItems}
                  />
                </>
              )}

              {activeTab === 'trending' && (
                <>
                  <div className="space-y-3">
                    {paginatedTrending.items.map(hashtag => (
                      <HashtagLeaderboardCard key={hashtag.id} hashtag={hashtag} />
                    ))}
                  </div>
                  <Pagination 
                    currentPage={trendingPage}
                    totalPages={paginatedTrending.totalPages}
                    onPageChange={setTrendingPage}
                    startIndex={paginatedTrending.startIndex}
                    endIndex={paginatedTrending.endIndex}
                    totalItems={paginatedTrending.totalItems}
                  />
                </>
              )}

              {activeTab === 'stable' && (
                <>
                  <div className="space-y-3">
                    {paginatedStable.items.map(hashtag => (
                      <HashtagLeaderboardCard key={hashtag.id} hashtag={hashtag} />
                    ))}
                  </div>
                  <Pagination 
                    currentPage={stablePage}
                    totalPages={paginatedStable.totalPages}
                    onPageChange={setStablePage}
                    startIndex={paginatedStable.startIndex}
                    endIndex={paginatedStable.endIndex}
                    totalItems={paginatedStable.totalItems}
                  />
                </>
              )}

              {activeTab === 'declining' && (
                <>
                  <div className="space-y-3">
                    {paginatedDeclining.items.map(hashtag => (
                      <HashtagLeaderboardCard key={hashtag.id} hashtag={hashtag} />
                    ))}
                  </div>
                  <Pagination 
                    currentPage={decliningPage}
                    totalPages={paginatedDeclining.totalPages}
                    onPageChange={setDecliningPage}
                    startIndex={paginatedDeclining.startIndex}
                    endIndex={paginatedDeclining.endIndex}
                    totalItems={paginatedDeclining.totalItems}
                  />
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* Velocity Guide */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-[#18181b] text-[14px] font-bold">
                  Velocity Guide
                </h3>
              </div>
              <div className="space-y-3">
                <VelocityLegendItem
                  icon={<TrendingUp className="w-3.5 h-3.5 text-[#f59e0b]" />}
                  label="Fast"
                  description="Rapid growth trajectory (>50% WoW)"
                />
                <VelocityLegendItem
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#3b82f6]" />}
                  label="Steady"
                  description="Consistent growth pattern (10-50% WoW)"
                />
                <VelocityLegendItem
                  icon={<Minus className="w-3.5 h-3.5 text-[#a1a1aa]" />}
                  label="Slow"
                  description="Minimal movement (<10% WoW)"
                />
              </div>
            </div>

            {/* Competition Pressure Guide */}
            <div className="bg-white rounded-xl border border-[#e4e4e7] p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-[#18181b] text-[14px] font-bold">
                  Competition Level
                </h3>
              </div>
              <div className="space-y-3">
                <CompetitionLegendItem
                  level="Low"
                  description="Less saturated, easier to stand out"
                  color="text-[#16a34a]"
                />
                <CompetitionLegendItem
                  level="Medium"
                  description="Moderate saturation, needs quality"
                  color="text-[#f59e0b]"
                />
                <CompetitionLegendItem
                  level="High"
                  description="Very crowded, requires high production"
                  color="text-[#dc2626]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pagination Component
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number | ((prev: number) => number)) => void;
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

function Pagination({ currentPage, totalPages, onPageChange, startIndex, endIndex, totalItems }: PaginationProps) {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="text-[#71717a] text-[13px]">
        Showing <span className="font-medium text-[#18181b]">{startIndex}-{endIndex}</span> of <span className="font-medium text-[#18181b]">{totalItems}</span> results
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg border transition-all ${
            currentPage === 1
              ? 'border-transparent text-[#d4d4d8] cursor-not-allowed'
              : 'border-[#e4e4e7] text-[#18181b] hover:bg-white hover:shadow-sm bg-white'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-lg transition-all text-[13px] font-medium ${
                currentPage === page
                  ? 'bg-[#18181b] text-white shadow-sm'
                  : 'text-[#71717a] hover:bg-white hover:text-[#18181b]'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => onPageChange(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg border transition-all ${
            currentPage === totalPages
              ? 'border-transparent text-[#d4d4d8] cursor-not-allowed'
              : 'border-[#e4e4e7] text-[#18181b] hover:bg-white hover:shadow-sm bg-white'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Tab Button Component
interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ icon, label, count, isActive, onClick }: TabButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-white text-[#18181b] shadow-sm'
          : 'text-[#71717a] hover:text-[#18181b] hover:bg-black/[0.03]'
      }`}
      onClick={onClick}
    >
      <div className={isActive ? 'text-[#18181b]' : 'text-[#a1a1aa]'}>{icon}</div>
      <span style={{ fontSize: '13px', fontWeight: '600' }}>
        {label}
      </span>
      {count > 0 && (
        <span
          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
            isActive ? 'bg-[#f4f4f5] text-[#18181b]' : 'bg-[#e4e4e7]/50 text-[#a1a1aa]'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

// Advanced Hashtag Card with all data layers
interface HashtagLeaderboardCardProps {
  hashtag: HashtagData;
}

function HashtagLeaderboardCard({ hashtag }: HashtagLeaderboardCardProps) {
  const [tooltipData, setTooltipData] = React.useState<{ x: number; y: number; date: string; value: number } | null>(null);
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Get card styling based on recommendation status
  const getCardStyles = () => {
    switch (hashtag.intelligence.decisionStatus) {
      case 'Recommended':
        return {
          containerClass: 'bg-white hover:border-[#16a34a]/30',
          badgeClass: 'bg-[#16a34a]/10 text-[#16a34a]',
          scoreClass: 'text-[#16a34a]',
          indicatorColor: '#16a34a',
          buttonClass: 'bg-[#1a1a1a] text-white hover:bg-[#333]',
          labelText: 'Recommended',
          gradientId: 'gradientGreen',
          gradientColors: { start: '#16a34a', end: '#16a34a' },
          trendColor: '#16a34a',
        };
      case 'Use with Caution':
        return {
          containerClass: 'bg-white hover:border-[#f59e0b]/30',
          badgeClass: 'bg-[#f59e0b]/10 text-[#f59e0b]',
          scoreClass: 'text-[#d97706]',
          indicatorColor: '#f59e0b',
          buttonClass: 'bg-[#1a1a1a] text-white hover:bg-[#333]',
          labelText: 'Caution',
          gradientId: 'gradientOrange',
          gradientColors: { start: '#f59e0b', end: '#f59e0b' },
          trendColor: '#f59e0b',
        };
      case 'Avoid for Now':
        return {
          containerClass: 'bg-white opacity-80',
          badgeClass: 'bg-[#71717a]/10 text-[#71717a]',
          scoreClass: 'text-[#71717a]',
          indicatorColor: '#71717a',
          buttonClass: 'bg-[#f4f4f5] text-[#a1a1aa] cursor-not-allowed',
          labelText: 'Avoid',
          gradientId: 'gradientGray',
          gradientColors: { start: '#71717a', end: '#71717a' },
          trendColor: '#71717a',
        };
      default:
        return {
          containerClass: 'bg-white hover:border-[#e4e4e7]',
          badgeClass: 'hidden',
          scoreClass: 'text-[#71717a]',
          indicatorColor: '#d4d4d8',
          buttonClass: 'bg-[#18181b] text-white hover:bg-[#333]',
          labelText: '',
          gradientId: 'gradientNeutral',
          gradientColors: { start: '#71717a', end: '#71717a' },
          trendColor: '#71717a',
        };
    }
  };

  const styles = getCardStyles();
  
  // Calculate match score based on affinity and other factors
  const getMatchScore = () => {
    if (hashtag.intelligence.affinity === 'strong' && hashtag.derived.competitionPressure === 'low') return 94;
    if (hashtag.intelligence.affinity === 'strong') return 87;
    if (hashtag.intelligence.affinity === 'general') return 72;
    return 58;
  };
  
  const matchScore = getMatchScore();

  // Calculate time window based on growth phase
  const getTimeWindow = () => {
    if (hashtag.intelligence.growthPhase === 'Emerging') return { days: 5, total: 7 };
    if (hashtag.intelligence.growthPhase === 'Accelerating') return { days: 8, total: 14 };
    return { days: 12, total: 21 };
  };
  
  const timeWindow = getTimeWindow();

  // Handle mouse move on SVG to show tooltip
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!svgRef.current) return;
    
    // Use SVG coordinate transformation for accurate positioning
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    
    const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    let relativeX = svgP.x;
    
    // Clamp relativeX to viewBox bounds
    relativeX = Math.max(0, Math.min(180, relativeX));
    
    const data = hashtag.api.trendTimeSeries;
    const dataIndex = Math.round((relativeX / 180) * (data.length - 1));
    
    if (dataIndex >= 0 && dataIndex < data.length) {
      const today = new Date();
      const daysAgo = data.length - 1 - dataIndex;
      const date = new Date(today);
      date.setDate(date.getDate() - daysAgo);
      
      const normalize = (val: number) => 64 - ((val / 100) * 48 + 8);
      const yPos = normalize(data[dataIndex]);
      
      setTooltipData({
        x: relativeX,
        y: yPos,
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        value: data[dataIndex]
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltipData(null);
  };

  const getCompetitionColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return 'text-[#16a34a]';
      case 'medium': return 'text-[#f59e0b]';
      case 'high': return 'text-[#ef4444]';
      default: return 'text-[#71717a]';
    }
  };

  return (
    <div className="w-full">
      <div 
        className={`group relative rounded-xl border border-[#e4e4e7] bg-white transition-all duration-200 hover:shadow-lg hover:shadow-black/[0.02] hover:-translate-y-0.5 ${styles.containerClass} overflow-hidden`}
      >
        <div className="flex items-center p-5 gap-6">
          {/* LEFT: Main Info & Stats */}
          <div className="flex-1 min-w-0">
             {/* Header: Badges & Category */}
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${styles.badgeClass}`}>
                {styles.labelText}
              </span>
              <span className="text-[#71717a] text-[11px] font-medium truncate">
                {hashtag.api.category}
              </span>
              <div className="w-1 h-1 rounded-full bg-[#d4d4d8]"></div>
              <div className="flex items-center gap-1.5" title="Growth rate">
                <TrendingUp className={`w-3 h-3 ${hashtag.api.rankChange > 0 ? 'text-[#16a34a]' : 'text-[#ef4444]'}`} />
                <span className={`text-[11px] font-bold ${hashtag.api.rankChange > 0 ? 'text-[#16a34a]' : 'text-[#ef4444]'}`}>
                  {hashtag.api.rankChange > 0 ? '+' : ''}{hashtag.api.rankChange * 3}%
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-3">
               <div className="flex items-center gap-2 mb-1">
                <h3 className="text-[#18181b] text-[18px] font-bold tracking-tight group-hover:text-black transition-colors truncate">
                  {hashtag.name}
                </h3>
                 <div className="flex items-center gap-1 bg-[#fafafa] px-1.5 py-0.5 rounded border border-[#f4f4f5]">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: styles.indicatorColor }}></div>
                    <span className={`text-[10px] font-bold ${styles.scoreClass}`}>
                      {matchScore}% Match
                    </span>
                  </div>
               </div>
              <p className="text-[#52525b] text-[13px] leading-snug line-clamp-1 max-w-[90%]">
                {hashtag.intelligence.usageHint}
              </p>
            </div>

            {/* Quick Stats Row */}
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-1.5 p-1.5 rounded-md hover:bg-[#fafafa] transition-colors">
                  <div className="text-[#a1a1aa] text-[10px] font-bold uppercase tracking-wider">Posts</div>
                  <div className="text-[#18181b] text-[12px] font-bold">{hashtag.api.publishCount}</div>
               </div>
               <div className="w-px h-3 bg-[#e4e4e7]"></div>
               <div className="flex items-center gap-1.5 p-1.5 rounded-md hover:bg-[#fafafa] transition-colors">
                  <div className="text-[#a1a1aa] text-[10px] font-bold uppercase tracking-wider">Views</div>
                  <div className="text-[#18181b] text-[12px] font-bold">{hashtag.api.totalViews}</div>
               </div>
               <div className="w-px h-3 bg-[#e4e4e7]"></div>
               <div className="flex items-center gap-1.5 text-[#71717a]" title="Optimal posting window">
                <Clock className="w-3.5 h-3.5 text-[#a1a1aa]" />
                <span className="text-[11px] font-medium">{timeWindow.days}d left</span>
              </div>
               <div className="w-px h-3 bg-[#e4e4e7]"></div>
               <div className="flex items-center gap-1.5" title="Competition Level">
                  <Users className="w-3.5 h-3.5 text-[#a1a1aa]" />
                  <span className={`text-[11px] font-bold capitalize ${getCompetitionColor(hashtag.derived.competitionPressure)}`}>
                    {hashtag.derived.competitionPressure} Comp.
                  </span>
               </div>
            </div>
          </div>

          {/* RIGHT: Trend Chart */}
          <div className="w-[180px] h-[64px] relative flex-shrink-0 self-center">
            <svg 
              ref={svgRef}
              width="100%" 
              height="100%" 
              viewBox="0 0 180 64" 
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id={`${styles.gradientId}-right`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={styles.gradientColors.start} stopOpacity="0.15" />
                  <stop offset="100%" stopColor={styles.gradientColors.end} stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Interaction Layer */}
              <rect 
                x="0" y="0" width="180" height="64" 
                fill="transparent"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="cursor-crosshair"
              />
              
              {/* Chart Rendering Logic */}
              {(() => {
                const data = hashtag.api.trendTimeSeries;
                const splitPoint = Math.floor(data.length * 0.65);
                const normalize = (val: number) => 64 - ((val / 100) * 48 + 8);
                const histX = (i: number) => (i / (data.length - 1)) * 180;
                const histPoints = data.slice(0, splitPoint + 1).map((val, i) => `${histX(i)} ${normalize(val)}`).join(' L ');
                const predPoints = data.slice(splitPoint).map((val, i) => `${histX(splitPoint + i)} ${normalize(val)}`).join(' L ');
                const currentX = histX(splitPoint);
                const currentY = normalize(data[splitPoint]);

                return (
                  <>
                    <path d={`M ${histPoints}`} fill="none" stroke={styles.trendColor} strokeWidth="2" strokeLinecap="round" />
                    <path d={`M ${histPoints} L ${currentX} 64 L 0 64 Z`} fill={`url(#${styles.gradientId}-right)`} />
                    <path d={`M ${predPoints}`} fill="none" stroke={styles.trendColor} strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" opacity="0.4" />
                    
                    {/* Current Point Pulse */}
                    <circle cx={currentX} cy={currentY} r="3" fill={styles.trendColor} stroke="white" strokeWidth="2" />
                    <circle cx={currentX} cy={currentY} r="8" fill={styles.trendColor} opacity="0.1" className="animate-pulse" />

                    {/* Tooltip */}
                    {tooltipData && (
                      <g>
                        <line x1={tooltipData.x} y1="0" x2={tooltipData.x} y2="64" stroke={styles.trendColor} strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                        <circle cx={tooltipData.x} cy={tooltipData.y} r="3" fill={styles.trendColor} stroke="white" strokeWidth="1.5" />
                        <g transform={`translate(${tooltipData.x > 90 ? tooltipData.x - 70 : tooltipData.x + 10}, ${tooltipData.y < 30 ? tooltipData.y + 8 : tooltipData.y - 35})`}>
                          <rect width="60" height="28" rx="6" fill="#18181b" />
                          <text x="30" y="14" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">{tooltipData.date}</text>
                          <text x="30" y="24" textAnchor="middle" fill="#a1a1aa" fontSize="8">Value: {tooltipData.value}</text>
                        </g>
                      </g>
                    )}
                  </>
                );
              })()}
            </svg>
          </div>

          {/* ACTION: Expand/Action Button */}
           <div className="flex flex-col items-end gap-2 self-center pl-4 border-l border-[#f4f4f5]">
             <button 
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all shadow-sm hover:shadow flex items-center gap-1.5 active:scale-95 whitespace-nowrap ${styles.buttonClass}`}
              onClick={(e) => {
                e.stopPropagation();
                // Logic
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Generate
            </button>
           </div>
        </div>
      </div>
    </div>
  );
}

// Simple Sparkline Component
interface SparklineProps {
  data: number[];
}

function Sparkline({ data }: SparklineProps) {
  const width = 96;
  const height = 40;
  const padding = 2;
  
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = padding + (index * (width - padding * 2)) / (data.length - 1);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  const isRising = data[data.length - 1] > data[0];
  const color = isRising ? '#16a34a' : '#3b82f6';

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Data Layer Item
interface DataLayerItemProps {
  label: string;
  description: string;
  color: string;
}

function DataLayerItem({ label, description, color }: DataLayerItemProps) {
  return (
    <div className="flex items-start gap-2.5">
      <div className={`w-3 h-3 rounded ${color} flex-shrink-0 mt-1`} />
      <div>
        <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '12px', fontWeight: '600' }}>
          {label}
        </div>
        <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.3' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Affinity Legend Item
interface AffinityLegendItemProps {
  color: string;
  label: string;
  description: string;
}

function AffinityLegendItem({ color, label, description }: AffinityLegendItemProps) {
  return (
    <div className="flex items-start gap-2.5">
      <div className={`w-4 h-4 rounded ${color} flex-shrink-0 mt-0.5`} />
      <div>
        <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '12px', fontWeight: '600' }}>
          {label}
        </div>
        <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.3' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Velocity Legend Item
interface VelocityLegendItemProps {
  icon: React.ReactNode;
  label: string;
  description: string;
}

function VelocityLegendItem({ icon, label, description }: VelocityLegendItemProps) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-[#1a1a1a] mb-0.5" style={{ fontSize: '12px', fontWeight: '600' }}>
          {label}
        </div>
        <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.3' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Competition Legend Item
interface CompetitionLegendItemProps {
  level: string;
  description: string;
  color: string;
}

function CompetitionLegendItem({ level, description, color }: CompetitionLegendItemProps) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="flex-shrink-0 mt-0.5">
        <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')}`} />
      </div>
      <div>
        <div className={`mb-0.5 ${color}`} style={{ fontSize: '12px', fontWeight: '600' }}>
          {level}
        </div>
        <p className="text-[#666666]" style={{ fontSize: '11px', lineHeight: '1.3' }}>
          {description}
        </p>
      </div>
    </div>
  );
}