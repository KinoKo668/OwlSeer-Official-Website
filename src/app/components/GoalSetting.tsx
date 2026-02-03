import React from 'react';
import { TrendingUp, DollarSign, MessageCircle, Info, Shuffle, Lock, Sparkles, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GoalSettingProps {
  onContinue: (selectedGoal: string) => void;
  onBack: () => void;
}

const CUSTOM_NOTE_EXAMPLES = [
  "I can only post on weekends.",
  "I don't want to show my face.",
  "I prefer short scripts and fast edits.",
  "I have limited time for shooting, max 2 hours/week.",
];

type LifecycleStage = 'L0' | 'L1-L2' | 'L3-L5' | 'L6+';

// Lifecycle stage data with account snapshots
const LIFECYCLE_DATA = {
  'L0': {
    label: 'L0 Cold Start',
    followers: 850,
    followerRange: '0 - 1,000',
    recentVideos: 9,
    medianViews: 380,
    engagementRate: 6.8,
    postingCadence: '~1–2 posts/week',
    detectedNiche: 'Tech Education',
    strategy: 'Survival first, unlock permissions',
  },
  'L1-L2': {
    label: 'L1-L2 Growth',
    followers: 8500,
    followerRange: '1,000 - 50,000',
    recentVideos: 11,
    medianViews: 2400,
    engagementRate: 4.2,
    postingCadence: '~3 posts/week',
    detectedNiche: 'Tech Education',
    strategy: 'Build persona, prevent traffic loss',
  },
  'L3-L5': {
    label: 'L3-L5 Maturity',
    followers: 185000,
    followerRange: '50,000 - 1,000,000',
    recentVideos: 12,
    medianViews: 48000,
    engagementRate: 5.6,
    postingCadence: '~4–5 posts/week',
    detectedNiche: 'Tech Education',
    strategy: 'Professionalize, stabilize income rhythm',
  },
  'L6+': {
    label: 'L6+ Top Tier',
    followers: 1250000,
    followerRange: '1,000,000+',
    recentVideos: 15,
    medianViews: 285000,
    engagementRate: 7.2,
    postingCadence: '~5–6 posts/week',
    detectedNiche: 'Tech Education',
    strategy: 'Harvest value, expand brand influence',
  },
};

// Goal card configurations for each lifecycle stage
const GOAL_CARDS_CONFIG = {
  'L0': {
    audience: {
      status: 'ai-recommended' as const,
      goalTitle: 'Goal: Break through 1,000 followers',
      options: [
        { id: 'basic', label: 'Basic: Reach 500 followers' },
        { id: 'core', label: 'Core: Reach 1,000 followers (Unlock permissions)', isDefault: true },
        { id: 'aggressive', label: 'Aggressive: Viral growth (Target 5k)' },
      ],
    },
    engagement: {
      status: 'standard' as const,
      goalTitle: 'Goal: Get traffic validation',
      options: [
        { id: 'proxy', label: 'Proxy metric: Get first 10k views', isDefault: true },
        { id: 'action', label: 'Action: Test viral template' },
        { id: 'community', label: 'Community: Get 100 comments' },
      ],
    },
    revenue: {
      status: 'locked' as const,
      goalTitle: '',
      lockedMessage: 'Requires 1,000 followers to unlock link and sales permissions',
      options: [],
    },
  },
  'L1-L2': {
    audience: {
      status: 'standard' as const,
      goalTitle: 'Goal: Follower growth +20%',
      options: [
        { id: 'steady', label: 'Steady: Growth 10-15%' },
        { id: 'progressive', label: 'Progressive: Growth 20-30%', isDefault: true },
        { id: 'ambitious', label: 'Ambitious: Adaptive high growth' },
      ],
    },
    engagement: {
      status: 'ai-recommended' as const,
      goalTitle: 'Goal: Build fixed series',
      options: [
        { id: 'data', label: 'Data: Engagement rate +10%' },
        { id: 'action', label: 'Action: Build Series', isDefault: true },
        { id: 'community', label: 'Community: Increase UGC ratio' },
      ],
    },
    revenue: {
      status: 'standard' as const,
      goalTitle: 'Goal: Commercialization MVP',
      options: [
        { id: 'milestone', label: 'Milestone: Complete first commercial loop (first sale/ad)', isDefault: true },
        { id: 'rhythm', label: 'Rhythm: Try brand deals' },
        { id: 'scale', label: 'Scale: Not recommended yet' },
      ],
    },
  },
  'L3-L5': {
    audience: {
      status: 'standard' as const,
      goalTitle: 'Goal: Maintain steady growth',
      options: [
        { id: 'steady', label: 'Steady: Growth 5-10%' },
        { id: 'progressive', label: 'Progressive: Growth 10-15%', isDefault: true },
      ],
    },
    engagement: {
      status: 'standard' as const,
      goalTitle: 'Goal: Activate existing fans',
      options: [
        { id: 'data', label: 'Data: Activate dormant fans (Improve recall rate)', isDefault: true },
        { id: 'action', label: 'Action: Host fan events' },
      ],
    },
    revenue: {
      status: 'ai-recommended' as const,
      goalTitle: 'Goal: Build stable income stream',
      options: [
        { id: 'milestone', label: 'Milestone: Expand new revenue sources' },
        { id: 'rhythm', label: 'Rhythm: Build weekly stable monetization rhythm', isDefault: true },
        { id: 'scale', label: 'Scale: Revenue growth +20%' },
      ],
    },
  },
  'L6+': {
    audience: {
      status: 'standard' as const,
      goalTitle: 'Goal: Cross-platform/cross-circle influence',
      options: [
        { id: 'platform', label: 'Platform: Expand to new platforms', isDefault: true },
        { id: 'circle', label: 'Circle: Break into new audience segments' },
      ],
    },
    engagement: {
      status: 'standard' as const,
      goalTitle: 'Goal: Maintain private community',
      options: [
        { id: 'community', label: 'Community: Build private fan community', isDefault: true },
        { id: 'loyalty', label: 'Loyalty: Increase superfan ratio' },
      ],
    },
    revenue: {
      status: 'ai-recommended' as const,
      goalTitle: 'Goal: Maximize commercial value',
      options: [
        { id: 'rhythm', label: 'Rhythm: Annual brand partnerships' },
        { id: 'scale', label: 'Scale: Adaptive high revenue target (Scale Revenue)', isDefault: true },
        { id: 'brand', label: 'Brand: Launch own brand (DTC)' },
      ],
    },
  },
};

export function GoalSetting({ onContinue, onBack }: GoalSettingProps) {
  // Lifecycle stage switcher
  const [lifecycleStage, setLifecycleStage] = React.useState<LifecycleStage>('L1-L2');
  const [showLifecyclePicker, setShowLifecyclePicker] = React.useState(false);
  
  const currentStageData = LIFECYCLE_DATA[lifecycleStage];
  const currentGoalCards = GOAL_CARDS_CONFIG[lifecycleStage];

  const [selectedGoal, setSelectedGoal] = React.useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = React.useState<Record<string, string>>({});
  const [customNote, setCustomNote] = React.useState<string>('');
  const [isNoteFocused, setIsNoteFocused] = React.useState(false);
  const [currentExampleIndex, setCurrentExampleIndex] = React.useState(0);
  const [exampleVisible, setExampleVisible] = React.useState(true);

  // Initialize default selections when lifecycle stage changes
  React.useEffect(() => {
    const defaults: Record<string, string> = {};
    Object.entries(currentGoalCards).forEach(([goalType, config]) => {
      if (config.options) {
        const defaultOption = config.options.find(opt => opt.isDefault);
        if (defaultOption) {
          defaults[goalType] = defaultOption.id;
        }
      }
    });
    setSelectedOptions(defaults);
    setSelectedGoal(null);
  }, [lifecycleStage]);

  // Auto-rotate custom note examples
  React.useEffect(() => {
    if (!isNoteFocused && !customNote.trim()) {
      let timeoutId: NodeJS.Timeout | undefined;
      const interval = setInterval(() => {
        setExampleVisible(false);
        timeoutId = setTimeout(() => {
          setCurrentExampleIndex((prev) => (prev + 1) % CUSTOM_NOTE_EXAMPLES.length);
          setExampleVisible(true);
        }, 200);
      }, 3500);

      return () => {
        clearInterval(interval);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
    // Return empty cleanup function when condition is not met
    return () => {};
  }, [isNoteFocused, customNote]);

  const handleNextExample = () => {
    setExampleVisible(false);
    setTimeout(() => {
      setCurrentExampleIndex((prev) => (prev + 1) % CUSTOM_NOTE_EXAMPLES.length);
      setExampleVisible(true);
    }, 200);
  };

  const handleGoalSelect = (goalId: string, status: string) => {
    if (status === 'locked') return;
    setSelectedGoal(selectedGoal === goalId ? null : goalId);
  };

  const handleOptionSelect = (goalType: string, optionId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [goalType]: optionId,
    }));
  };

  const handleContinue = () => {
    const goalData = {
      lifecycleStage,
      selectedGoal,
      selectedOptions,
      customNote: customNote.trim(),
    };
    onContinue(JSON.stringify(goalData));
  };

  const isEnabled = selectedGoal && selectedOptions[selectedGoal];

  const renderGoalCard = (goalType: 'audience' | 'engagement' | 'revenue', icon: React.ReactNode, title: string) => {
    const config = currentGoalCards[goalType];
    const isSelected = selectedGoal === goalType;
    const isLocked = config.status === 'locked';
    const isAIRecommended = config.status === 'ai-recommended';

    return (
      <motion.div
        key={goalType}
        whileHover={!isLocked ? { scale: 1.01, y: -2 } : {}}
        whileTap={!isLocked ? { scale: 0.99 } : {}}
        className={`rounded-[16px] border-2 transition-all cursor-pointer ${
          isLocked
            ? 'bg-[#F8F9FA] border-[#E5E7EB] opacity-60 cursor-not-allowed'
            : isAIRecommended
            ? 'bg-gradient-to-br from-[#FFF7ED] via-white to-white border-[#D97706] shadow-md'
            : isSelected
            ? 'bg-white border-[#0F766E] shadow-lg'
            : 'bg-white border-[#E5E7EB] hover:border-[#0F766E]/40 shadow-sm'
        }`}
        onClick={() => handleGoalSelect(goalType, config.status)}
      >
        {/* Card Header */}
        <div className="p-6 flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
              isAIRecommended
                ? 'bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]'
                : isSelected
                ? 'bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1]'
                : 'bg-[#F8F9FA]'
            }`}
          >
            {isLocked ? (
              <Lock className="w-6 h-6 text-[#9CA3AF]" />
            ) : (
              icon
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[#111827]" style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.01em' }}>
                {title}
              </h3>
              <AnimatePresence>
                {isAIRecommended && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-[#FFF7ED] to-[#FFEDD5] border border-[#D97706]/20 rounded-full"
                  >
                    <Sparkles className="w-3 h-3 text-[#D97706]" />
                    <span className="text-[#D97706]" style={{ fontSize: '11px', fontWeight: '700' }}>
                      AI Recommended
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {isLocked ? (
              <p className="text-[#9CA3AF]" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                🔒 {config.lockedMessage}
              </p>
            ) : (
              <p className="text-[#374151]" style={{ fontSize: '14px', fontWeight: '600' }}>
                {config.goalTitle}
              </p>
            )}
          </div>
        </div>

        {/* Card Options (when expanded and not locked) */}
        <AnimatePresence>
          {isSelected && !isLocked && config.options && config.options.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="px-6 pb-6 pt-2 border-t border-[#E5E7EB]"
            >
              <div className="space-y-2">
                {config.options.map((option, index) => {
                  const isOptionSelected = selectedOptions[goalType] === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOptionSelect(goalType, option.id);
                      }}
                      whileHover={{ scale: 1.01, x: 2 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full px-4 py-3 rounded-[12px] border-2 transition-all text-left ${
                        isOptionSelected
                          ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-md'
                          : 'bg-white text-[#374151] border-[#E5E7EB] hover:border-[#0F766E]/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            isOptionSelected
                              ? 'border-white'
                              : 'border-[#9CA3AF]'
                          }`}
                        >
                          {isOptionSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white"
                            ></motion.div>
                          )}
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: option.isDefault ? '700' : '600' }}>
                          {option.label}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#FFFFFF] to-[#F8F9FA]"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0F766E]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#059669]/8 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-[#0F766E]/20"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-[#059669]/20"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-32 right-[20%] w-2 h-2 rounded-full bg-[#0F766E]/25"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#0F766E]/20 rounded-full blur-md"></div>
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-lg">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <div
              className="text-foreground"
              style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
            >
              Creator
            </div>
            <div
              className="text-[#0F766E]"
              style={{ fontSize: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}
            >
              ONBOARDING TRACK
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator - Step 4 of 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* Step 1 - Complete */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"></div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 2 - Complete */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"></div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 3 - Complete */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"></div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 4 - Active */}
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 5 - Inactive */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
          </div>
          <div className="text-center">
            <span className="text-[#0F766E]" style={{ fontSize: '12px', fontWeight: '700' }}>
              Step 4 of 5 • 80% Complete
            </span>
          </div>
        </motion.div>

        <div className="w-full">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1
              className="bg-gradient-to-r from-[#111827] via-[#0F766E] to-[#059669] bg-clip-text text-transparent mb-3"
              style={{ fontSize: '36px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}
            >
              What is your primary objective for this quarter?
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0F766E]" />
              <p
                className="text-muted-foreground text-center"
                style={{ fontSize: 'var(--text-body)', lineHeight: '1.5' }}
              >
                Set a 3-month direction. We'll generate your first weekly to-do list now and refine the roadmap as your new videos perform.
              </p>
            </div>
          </motion.div>

          {/* Account Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 mb-6 relative shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[#111827]" style={{ fontSize: '15px', fontWeight: '700' }}>
                Account Snapshot
              </h3>
              <span className="text-[#9CA3AF]" style={{ fontSize: '12px' }}>
                ({currentStageData.followerRange} followers)
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Followers */}
              <div>
                <p className="text-[#9CA3AF] mb-1" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.02em' }}>
                  Followers
                </p>
                <p className="text-[#111827]" style={{ fontSize: '20px', fontWeight: '700' }}>
                  {currentStageData.followers.toLocaleString()}
                </p>
              </div>

              {/* Recent Videos */}
              <div>
                <p className="text-[#9CA3AF] mb-1" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.02em' }}>
                  Recent videos (last {currentStageData.recentVideos})
                </p>
                <p className="text-[#111827] mb-0.5" style={{ fontSize: '15px', fontWeight: '600' }}>
                  Median views: {currentStageData.medianViews.toLocaleString()}
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-[#111827]" style={{ fontSize: '15px', fontWeight: '600' }}>
                    Engagement: {currentStageData.engagementRate}%
                  </p>
                  <div className="group relative">
                    <Info className="w-3.5 h-3.5 text-[#9CA3AF] cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#111827] text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 shadow-xl" style={{ fontSize: '11px', lineHeight: '1.4' }}>
                      Proxy uses public engagement; it's not a follower-growth forecast.
                    </div>
                  </div>
                  <span className="text-[#9CA3AF]" style={{ fontSize: '11px' }}>(proxy)</span>
                </div>
              </div>

              {/* Posting Cadence */}
              <div>
                <p className="text-[#9CA3AF] mb-1" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.02em' }}>
                  Posting cadence (estimated)
                </p>
                <p className="text-[#111827]" style={{ fontSize: '15px', fontWeight: '600' }}>
                  {currentStageData.postingCadence}
                </p>
              </div>

              {/* Detected Niche */}
              <div>
                <p className="text-[#9CA3AF] mb-1" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.02em' }}>
                  Detected niche
                </p>
                <span className="inline-flex items-center px-3 py-1.5 bg-[#F0FDFA] text-[#0F766E] rounded-full border border-[#0F766E]/20" style={{ fontSize: '13px', fontWeight: '600' }}>
                  {currentStageData.detectedNiche}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Strategy Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-[#F0FDFA] to-white border border-[#0F766E]/20 rounded-[14px] p-4 mb-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#0F766E] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-[#111827]" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.5' }}>
                  Strategy for {currentStageData.label}:{' '}
                  <span className="font-bold text-[#0F766E]">{currentStageData.strategy}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Objective Cards */}
          <div className="space-y-4 mb-6">
            {['audience', 'engagement', 'revenue'].map((goalType, index) => (
              <motion.div
                key={goalType}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {renderGoalCard(
                  goalType as 'audience' | 'engagement' | 'revenue',
                  goalType === 'audience' ? (
                    <TrendingUp className={`w-6 h-6 ${currentGoalCards[goalType as keyof typeof currentGoalCards].status === 'ai-recommended' ? 'text-[#D97706]' : 'text-[#374151]'}`} strokeWidth={1.5} />
                  ) : goalType === 'engagement' ? (
                    <MessageCircle className={`w-6 h-6 ${currentGoalCards[goalType as keyof typeof currentGoalCards].status === 'ai-recommended' ? 'text-[#D97706]' : 'text-[#374151]'}`} strokeWidth={1.5} />
                  ) : (
                    <DollarSign className={`w-6 h-6 ${currentGoalCards[goalType as keyof typeof currentGoalCards].status === 'ai-recommended' ? 'text-[#D97706]' : 'text-[#374151]'}`} strokeWidth={1.5} />
                  ),
                  goalType === 'audience' ? '📈 Expand Audience' : goalType === 'engagement' ? '💬 Deepen Engagement' : '💲 Drive Revenue'
                )}
              </motion.div>
            ))}
          </div>

          {/* Custom Note (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-[#374151]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Add a custom note (optional)
              </p>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] border border-[#0F766E]/20">
                <Sparkles className="w-3 h-3 text-[#0F766E]" />
                <span className="text-[#0F766E]" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.02em' }}>
                  AI CONTEXT
                </span>
              </div>
            </div>

            <div className="relative group">
              {/* Background Glow Effect */}
              <div className={`absolute -inset-[1px] rounded-[14px] bg-gradient-to-r from-[#0F766E]/20 via-[#06B6D4]/20 to-[#0F766E]/20 opacity-0 blur-sm transition-opacity duration-500 ${isNoteFocused ? 'opacity-100' : 'group-hover:opacity-60'}`}></div>
              
              {/* Animated Placeholder */}
              {!isNoteFocused && !customNote.trim() && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: exampleVisible ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 left-4 right-16 pointer-events-none z-10"
                >
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#0F766E]/40 flex-shrink-0 mt-0.5" />
                    <span className="text-[#9CA3AF] italic" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      {CUSTOM_NOTE_EXAMPLES[currentExampleIndex]}
                    </span>
                  </div>
                </motion.div>
              )}
              
              {/* Textarea with Glass Effect */}
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                onFocus={() => setIsNoteFocused(true)}
                onBlur={() => setIsNoteFocused(false)}
                placeholder=""
                rows={3}
                className={`relative w-full px-4 py-3.5 rounded-[14px] text-[#111827] resize-none focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                  isNoteFocused
                    ? 'bg-white/95 border-2 border-[#0F766E] shadow-xl shadow-[#0F766E]/10'
                    : 'bg-white/60 border-2 border-[#E5E7EB] hover:border-[#0F766E]/40 hover:bg-white/80 shadow-sm'
                }`}
                style={{ fontSize: '14px', lineHeight: '1.6' }}
              />
              
              {/* Character Counter (when focused and has content) */}
              <AnimatePresence>
                {isNoteFocused && customNote.trim() && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute bottom-2 left-3 px-2 py-0.5 rounded-full bg-[#F0FDFA] border border-[#0F766E]/20"
                  >
                    <span className="text-[#0F766E]" style={{ fontSize: '10px', fontWeight: '600' }}>
                      {customNote.length} characters
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Shuffle Button with Enhanced Design */}
              {!customNote.trim() && (
                <motion.button
                  onClick={handleNextExample}
                  whileHover={{ scale: 1.05, rotate: 15 }}
                  whileTap={{ scale: 0.95, rotate: -15 }}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-white to-[#F8F9FA] border border-[#E5E7EB] hover:border-[#0F766E]/40 text-[#9CA3AF] hover:text-[#0F766E] transition-all shadow-sm hover:shadow-md group/shuffle"
                >
                  <Shuffle className="w-4 h-4 transition-transform group-hover/shuffle:rotate-180 duration-500" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full right-0 mb-2 px-2.5 py-1.5 bg-[#111827] text-white rounded-lg opacity-0 group-hover/shuffle:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl" style={{ fontSize: '11px', fontWeight: '500' }}>
                    Try another example
                  </div>
                </motion.button>
              )}
              
              {/* Sparkle Particles (when focused) */}
              <AnimatePresence>
                {isNoteFocused && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: -10, y: -10 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.5],
                        x: [-10, -20, -30],
                        y: [-10, -20, -30],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                      className="absolute top-2 left-2 w-1 h-1 rounded-full bg-[#0F766E]"
                    ></motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: 10, y: -10 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.5],
                        x: [10, 20, 30],
                        y: [-10, -20, -30],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.3 }}
                      className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#06B6D4]"
                    ></motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Expectation Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white border border-[#E5E7EB] rounded-[12px] p-4 mb-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#0F766E] flex-shrink-0 mt-0.5" />
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2 text-[#374151]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  <span className="mt-0.5">•</span>
                  <span>This is a starting point. We'll adjust weekly based on performance data.</span>
                </li>
                <li className="flex items-start gap-2 text-[#374151]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  <span className="mt-0.5">•</span>
                  <span>You can change your goal anytime in Settings.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Action Buttons - Centered Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.button
              onClick={onBack}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-8 py-3.5 rounded-[12px] text-foreground border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 hover:bg-[#F8F9FA] transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
            >
              Back
            </motion.button>
            <motion.button
              onClick={handleContinue}
              disabled={!isEnabled}
              whileHover={isEnabled ? { scale: 1.02 } : {}}
              whileTap={isEnabled ? { scale: 0.98 } : {}}
              className={`relative px-8 py-3.5 rounded-[12px] transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
                isEnabled
                  ? 'shadow-lg hover:shadow-xl'
                  : 'cursor-not-allowed'
              }`}
              style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
            >
              {isEnabled ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#059669] to-[#047857]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
                  <span className="relative text-white">Continue</span>
                  <ArrowRight className="relative w-4 h-4 text-white" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-[#E5E7EB]"></div>
                  <span className="relative text-[#9CA3AF]">Continue</span>
                  <ArrowRight className="relative w-4 h-4 text-[#9CA3AF]" />
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Reassurance Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#E5E7EB]/50 shadow-sm">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0F766E]/20 to-[#059669]/20 flex items-center justify-center">
                <span className="text-sm">✓</span>
              </div>
              <p
                className="text-muted-foreground"
                style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
              >
                Your goals can be adjusted anytime in settings
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Lifecycle Stage Picker */}
      <div className="fixed top-24 right-8 z-50">
        <div className="bg-white rounded-xl border-2 border-[#e5e7eb] shadow-lg overflow-hidden">
          <button
            onClick={() => setShowLifecyclePicker(!showLifecyclePicker)}
            className="w-full px-4 py-3 flex items-center justify-between gap-3 hover:bg-[#f9fafb] transition-colors"
          >
            <div className="text-left">
              <div className="text-[#9ca3af] mb-0.5" style={{ fontSize: '11px', fontWeight: '600' }}>
                LIFECYCLE DEMO
              </div>
              <div className="text-[#111827]" style={{ fontSize: '13px', fontWeight: '700' }}>
                {currentStageData.label}
              </div>
              <div className="text-[#9ca3af] mt-0.5" style={{ fontSize: '11px', fontWeight: '500' }}>
                演示组件，无需开发
              </div>
            </div>
            {showLifecyclePicker ? (
              <ChevronUp className="w-4 h-4 text-[#6b7280]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#6b7280]" />
            )}
          </button>

          {showLifecyclePicker && (
            <div className="border-t border-[#e5e7eb] bg-[#fafafa] p-2">
              {(Object.keys(LIFECYCLE_DATA) as LifecycleStage[]).map((stage) => {
                const data = LIFECYCLE_DATA[stage];
                const isActive = lifecycleStage === stage;
                return (
                  <button
                    key={stage}
                    onClick={() => {
                      setLifecycleStage(stage);
                      setShowLifecyclePicker(false);
                    }}
                    className={`w-full px-3 py-2 rounded-lg text-left transition-all mb-1 last:mb-0 ${
                      isActive
                        ? 'bg-[#111827] text-white'
                        : 'bg-white text-[#6b7280] hover:bg-[#f3f4f6]'
                    }`}
                  >
                    <div style={{ fontSize: '13px', fontWeight: '600' }}>
                      {data.label}
                    </div>
                    <div className={`${isActive ? 'text-white/70' : 'text-[#9ca3af]'}`} style={{ fontSize: '11px' }}>
                      {data.followerRange} followers
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}