import React from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { Sparkles, Target, Video, TrendingUp, MessageSquare, Eye, Zap } from 'lucide-react';

interface ProcessingStep {
  id: string;
  text: string;
}

interface TipCard {
  id: string;
  title: string;
  content: string;
  category: string;
  icon: 'hook' | 'retention' | 'profile' | 'growth' | 'engagement' | 'analytics';
}

interface AIProcessingProps {
  onComplete: () => void;
}

// Side Rail Tip Card Component
function SideRailCard({ tip, hoveredId, setHoveredId, expandedId, setExpandedId }: {
  tip: TipCard;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
}) {
  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'hook': return Target;
      case 'retention': return Video;
      case 'profile': return TrendingUp;
      case 'growth': return TrendingUp;
      case 'engagement': return MessageSquare;
      case 'analytics': return Eye;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hook': return 'bg-[#404040]/10 text-[#404040] border-[#404040]/20';
      case 'Retention': return 'bg-[#404040]/10 text-[#404040] border-[#404040]/20';
      case 'Profile': return 'bg-[#404040]/10 text-[#404040] border-[#404040]/20';
      case 'Growth': return 'bg-[#666666]/10 text-[#666666] border-[#666666]/20';
      case 'Engagement': return 'bg-[#1a1a1a]/10 text-[#1a1a1a] border-[#1a1a1a]/20';
      case 'Analytics': return 'bg-[#666666]/10 text-[#666666] border-[#666666]/20';
      default: return 'bg-[#78909c]/10 text-[#78909c] border-[#78909c]/20';
    }
  };

  const Icon = getIconComponent(tip.icon);
  const isHovered = hoveredId === tip.id;
  const isExpanded = expandedId === tip.id;
  const isInteractive = isHovered || isExpanded;

  return (
    <motion.div
      className="flex-shrink-0 mb-4"
      animate={{
        scale: isInteractive ? 1.02 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        onMouseEnter={() => setHoveredId(tip.id)}
        onMouseLeave={() => setHoveredId(null)}
        onClick={() => setExpandedId(expandedId === tip.id ? null : tip.id)}
        className={`
          bg-white/90 rounded-[10px] border border-[var(--card-border)] p-3.5 cursor-pointer
          relative overflow-hidden
          transition-shadow duration-300
          ${isInteractive ? 'shadow-md' : 'shadow-sm'}
        `}
        style={{ width: '200px' }}
      >
        {/* Gradient Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#404040]/5 via-transparent to-[#1a1a1a]/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInteractive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative">
          {/* Category Badge & Icon */}
          <div className="flex items-center justify-between mb-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full border ${getCategoryColor(tip.category)}`}
              style={{ fontWeight: '600', fontSize: '10px' }}
            >
              {tip.category}
            </span>
            <Icon className="w-3.5 h-3.5 text-muted-foreground" />
          </div>

          {/* Title */}
          <h3
            className="text-foreground"
            style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}
          >
            {tip.title}
          </h3>

          {/* Expandable Content */}
          <motion.div
            initial={false}
            animate={{
              height: isInteractive ? 'auto' : 0,
              opacity: isInteractive ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="text-muted-foreground pt-2 mt-2 border-t border-[var(--card-border)]"
              style={{ fontSize: '11px', lineHeight: '1.5' }}
            >
              {tip.content}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function AIProcessing({ onComplete }: AIProcessingProps) {
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);
  const [showReadyMessage, setShowReadyMessage] = React.useState(false);
  const [hoveredLeftId, setHoveredLeftId] = React.useState<string | null>(null);
  const [hoveredRightId, setHoveredRightId] = React.useState<string | null>(null);
  const [expandedLeftId, setExpandedLeftId] = React.useState<string | null>(null);
  const [expandedRightId, setExpandedRightId] = React.useState<string | null>(null);

  // Animation controls for left and right rails
  const leftControls = useAnimationControls();
  const rightControls = useAnimationControls();

  // Track if user is hovering over left or right rail
  const isLeftRailInteractive = hoveredLeftId !== null || expandedLeftId !== null;
  const isRightRailInteractive = hoveredRightId !== null || expandedRightId !== null;

  const steps: ProcessingStep[] = [
    { id: 'analyzing', text: 'Benchmarking your niche against top performers' },
    { id: 'blockers', text: 'Identifying growth blockers and opportunities' },
    { id: 'identifying', text: 'Simulating high-probability content paths' },
    { id: 'preparing', text: 'Finalizing your 90-day execution roadmap' },
  ];

  // Side rail tips
  const leftRailTips: TipCard[] = [
    { id: 'l1', title: 'Open with the result first', content: 'Lead with outcome, not setup. Viewers decide in 3 seconds.', category: 'Hook', icon: 'hook' },
    { id: 'l2', title: 'Use series format', content: 'Break topics into 5–10 videos with consistent structure.', category: 'Growth', icon: 'growth' },
    { id: 'l3', title: 'Turn comments into content', content: 'Quote top comments as video openings. Instant relevance.', category: 'Retention', icon: 'retention' },
    { id: 'l4', title: 'Give constant micro-hooks', content: 'New info every 2–3 seconds. No dead air.', category: 'Retention', icon: 'retention' },
    { id: 'l5', title: 'Leave curiosity gaps', content: 'Use "I thought… but" patterns to create tension.', category: 'Hook', icon: 'hook' },
    { id: 'l6', title: 'Film vertically always', content: 'Even if editing later, vertical = mobile-first mindset.', category: 'Profile', icon: 'profile' },
    { id: 'l7', title: 'Pattern interrupts work', content: 'Visual changes every 3–4 seconds prevent thumb scroll.', category: 'Retention', icon: 'retention' },
    { id: 'l8', title: 'Sound design matters', content: 'First 3 seconds of audio hook attention as much as visuals.', category: 'Hook', icon: 'hook' },
    { id: 'l9', title: 'Always add text overlays', content: '70% watch on mute. On-screen text isn\'t optional.', category: 'Profile', icon: 'profile' },
    { id: 'l10', title: 'Test your first frame', content: 'Would you stop scrolling if you saw this thumbnail?', category: 'Hook', icon: 'hook' },
    { id: 'l11', title: 'Build micro story arcs', content: 'Even 15-second videos need setup → tension → payoff.', category: 'Retention', icon: 'retention' },
    { id: 'l12', title: 'Show, don\'t tell', content: 'Demonstrate the result in-frame rather than describing it.', category: 'Engagement', icon: 'engagement' },
  ];

  const rightRailTips: TipCard[] = [
    { id: 'r1', title: 'Keep cover text short', content: '5–7 words max. Action + result format.', category: 'Profile', icon: 'profile' },
    { id: 'r2', title: 'CTA after value', content: 'Give insight first, then ask for engagement.', category: 'Engagement', icon: 'engagement' },
    { id: 'r3', title: 'Watch completion first', content: 'Low completion? Fix pacing. High but no likes? Fix hook.', category: 'Analytics', icon: 'analytics' },
    { id: 'r4', title: 'Use a signature phrase', content: 'Repeat one line per video. Builds brand recall.', category: 'Profile', icon: 'profile' },
    { id: 'r5', title: 'Think deliverables first', content: 'What can you offer? Work backward into content.', category: 'Growth', icon: 'growth' },
    { id: 'r6', title: 'Numbers reduce friction', content: '"3 ways" beats vague concepts. Structure wins.', category: 'Hook', icon: 'hook' },
    { id: 'r7', title: 'Post when they\'re active', content: 'Check analytics for your audience peak times, not generic advice.', category: 'Analytics', icon: 'analytics' },
    { id: 'r8', title: 'Repost high performers', content: 'Wait 30 days, then repost your best content. New audience sees it.', category: 'Growth', icon: 'growth' },
    { id: 'r9', title: 'Optimize your bio first line', content: 'State your value in 5 words. Who you help + how.', category: 'Profile', icon: 'profile' },
    { id: 'r10', title: 'Mix hashtag sizes', content: '3 broad tags (1M+ views) + 2 niche tags (10K–100K views).', category: 'Growth', icon: 'growth' },
    { id: 'r11', title: 'Duet trending content', content: 'React to viral videos in your niche for algorithmic boost.', category: 'Engagement', icon: 'engagement' },
    { id: 'r12', title: 'A/B test your covers', content: 'Same video, different cover text. Track which performs better.', category: 'Analytics', icon: 'analytics' },
  ];

  // Cycle through steps
  React.useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(stepInterval);
  }, [steps.length]);

  // Mark as complete after all steps are done
  React.useEffect(() => {
    if (activeStepIndex === steps.length - 1) {
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setShowReadyMessage(true);
      }, 3500);

      const hideMessageTimer = setTimeout(() => {
        setShowReadyMessage(false);
      }, 3500 + 3000); // 3500ms + 3000ms

      return () => {
        clearTimeout(completeTimer);
        clearTimeout(hideMessageTimer);
      };
    }
  }, [activeStepIndex, steps.length]);

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* LEFT SIDE RAIL - Moving Upward */}
      <div className="fixed left-4 top-0 bottom-0 w-[200px] overflow-hidden pointer-events-none hidden lg:block">
        {/* Top Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none" />
        
        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <motion.div
          className="pointer-events-auto"
          initial={{ y: '0%' }}
          animate={
            isLeftRailInteractive
              ? undefined // Stay at current position when paused
              : { y: ['-50%', '0%'] } // Loop: from middle of second set to start
          }
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* First set */}
          {leftRailTips.map((tip) => (
            <SideRailCard
              key={`${tip.id}-1`}
              tip={tip}
              hoveredId={hoveredLeftId}
              setHoveredId={setHoveredLeftId}
              expandedId={expandedLeftId}
              setExpandedId={setExpandedLeftId}
            />
          ))}
          {/* Second set - for seamless loop */}
          {leftRailTips.map((tip) => (
            <SideRailCard
              key={`${tip.id}-2`}
              tip={tip}
              hoveredId={hoveredLeftId}
              setHoveredId={setHoveredLeftId}
              expandedId={expandedLeftId}
              setExpandedId={setExpandedLeftId}
            />
          ))}
          {/* Third set - ensures always visible content */}
          {leftRailTips.map((tip) => (
            <SideRailCard
              key={`${tip.id}-3`}
              tip={tip}
              hoveredId={hoveredLeftId}
              setHoveredId={setHoveredLeftId}
              expandedId={expandedLeftId}
              setExpandedId={setExpandedLeftId}
            />
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE RAIL - Moving Downward */}
      <div className="fixed right-4 top-0 bottom-0 w-[200px] overflow-hidden pointer-events-none hidden lg:block">
        {/* Top Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none" />
        
        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <motion.div
          className="pointer-events-auto"
          initial={{ y: '0%' }}
          animate={
            isRightRailInteractive
              ? undefined // Stay at current position when paused
              : { y: ['0%', '-50%'] } // Loop: from start to middle of second set
          }
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* First set */}
          {rightRailTips.map((tip) => (
            <SideRailCard
              key={`${tip.id}-1`}
              tip={tip}
              hoveredId={hoveredRightId}
              setHoveredId={setHoveredRightId}
              expandedId={expandedRightId}
              setExpandedId={setExpandedRightId}
            />
          ))}
          {/* Second set - for seamless loop */}
          {rightRailTips.map((tip) => (
            <SideRailCard
              key={`${tip.id}-2`}
              tip={tip}
              hoveredId={hoveredRightId}
              setHoveredId={setHoveredRightId}
              expandedId={expandedRightId}
              setExpandedId={setExpandedRightId}
            />
          ))}
          {/* Third set - ensures always visible content */}
          {rightRailTips.map((tip) => (
            <SideRailCard
              key={`${tip.id}-3`}
              tip={tip}
              hoveredId={hoveredRightId}
              setHoveredId={setHoveredRightId}
              expandedId={expandedRightId}
              setExpandedId={setExpandedRightId}
            />
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4 sm:p-8 min-h-screen bg-[#F8F9FA]">
        <div className="w-full max-w-md">
          {/* Animated Visual - Pulsing Nodes */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32">
              {/* Center Node */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-lg shadow-[#0F766E]/30"></div>
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-[#0F766E] blur-xl"></div>
              </motion.div>

              {/* Outer Ring 1 */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#0F766E]/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0,
                }}
              ></motion.div>

              {/* Outer Ring 2 */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#059669]/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              ></motion.div>

              {/* Outer Ring 3 */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#0F766E]/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              ></motion.div>

              {/* Orbiting Dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 2.67,
                  }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-md shadow-[#0F766E]/40"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.67,
                    }}
                    style={{
                      transform: `translateX(${40 + i * 8}px)`,
                    }}
                  ></motion.div>
                </motion.div>
              ))}

              {/* Sparkle Particles */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#0F766E]"
                  animate={{
                    x: [0, (i % 2 === 0 ? 1 : -1) * 60],
                    y: [0, (i < 2 ? -1 : 1) * 60],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: i * 0.5,
                  }}
                ></motion.div>
              ))}
            </div>
          </div>

          {/* Primary Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-3"
          >
            <h1
              className="text-[#111827]"
              style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}
            >
              Designing your growth strategy...
            </h1>
          </motion.div>

          {/* Secondary Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#374151] text-center mb-10"
            style={{ fontSize: 'var(--text-body)', lineHeight: '1.5' }}
          >
            Based on your content and the challenges you selected, we're uncovering patterns you can actually act on.
          </motion.p>

          {/* Processing Steps */}
          <div className="space-y-3 mb-10">
            {steps.map((step, index) => {
              const isActive = index === activeStepIndex;
              const isStepComplete = index < activeStepIndex || isComplete;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isActive || isStepComplete ? 1 : 0.4,
                    x: 0,
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-3 p-4 rounded-[14px] transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F0FDFA] to-white border-2 border-[#0F766E] shadow-lg shadow-[#0F766E]/10'
                      : isStepComplete
                      ? 'bg-white border border-[#E5E7EB] shadow-sm'
                      : 'bg-white/50 border border-transparent'
                  }`}
                >
                  {/* Step Indicator */}
                  <div className="flex-shrink-0">
                    {isStepComplete ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-md"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                    ) : isActive ? (
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#0F766E]/30 blur-md"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        ></motion.div>
                        <motion.div
                          className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-md"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        ></motion.div>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-[#E5E7EB] bg-white"></div>
                    )}
                  </div>

                  {/* Step Text */}
                  <span
                    className={`${
                      isActive || isStepComplete ? 'text-[#111827]' : 'text-[#9CA3AF]'
                    }`}
                    style={{
                      fontSize: 'var(--text-body)',
                      fontWeight: isActive ? '700' : isStepComplete ? '600' : '500',
                    }}
                  >
                    {step.text}
                  </span>

                  {/* Active Indicator */}
                  {isActive && !isComplete && (
                    <motion.div
                      className="ml-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: i * 0.2,
                            }}
                          ></motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Completion Icon */}
                  {isStepComplete && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="ml-auto"
                    >
                      <Sparkles className="w-4 h-4 text-[#059669]" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Reassurance Microcopy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-2 mb-8"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-[#0F766E]"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2,
                    }}
                  ></motion.div>
                ))}
              </div>
              <p
                className="text-[#9CA3AF]"
                style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
              >
                Analyzing 500+ data points to ensure accuracy
              </p>
            </div>
          </motion.div>

          {/* Ready Message */}
          {showReadyMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F0FDFA] to-[#CCFBF1] border border-[#0F766E]/20 shadow-lg">
                <Sparkles className="w-4 h-4 text-[#0F766E]" />
                <span
                  className="text-[#0F766E]"
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '700' }}
                >
                  Your insights are ready
                </span>
              </div>
            </motion.div>
          )}

          {/* CTA Button */}
          <motion.button
            onClick={isComplete ? onComplete : undefined}
            disabled={!isComplete}
            whileHover={isComplete ? { scale: 1.02 } : {}}
            whileTap={isComplete ? { scale: 0.98 } : {}}
            className={`relative w-full py-4 rounded-[14px] transition-all flex items-center justify-center gap-2 overflow-hidden ${
              isComplete
                ? 'shadow-xl cursor-pointer'
                : 'cursor-not-allowed opacity-60'
            }`}
            style={{ fontSize: 'var(--text-body)', fontWeight: '700' }}
            animate={
              isComplete
                ? {
                    boxShadow: [
                      '0 10px 25px -5px rgba(15, 118, 110, 0.3)',
                      '0 15px 35px -5px rgba(15, 118, 110, 0.4)',
                      '0 10px 25px -5px rgba(15, 118, 110, 0.3)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: isComplete ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            {isComplete ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
                <Sparkles className="relative w-5 h-5 text-white" />
                <span className="relative text-white">Show me my insights</span>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-[#E5E7EB]"></div>
                <span className="relative text-[#9CA3AF]">Preparing your insights…</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}