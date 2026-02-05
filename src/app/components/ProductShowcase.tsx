import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Target, Calendar, BarChart2, ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

// --- Mock Components for Visual Showcase ---

const MockOpportunityCard = () => (
  <div className="w-full max-w-2xl mx-auto p-6">
    <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-1 shadow-2xl shadow-emerald-500/10 border border-white/20 dark:border-white/10 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 opacity-50" />
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700" />
      
      <div className="relative p-6 md:p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20 flex items-center justify-center border border-emerald-100/50 dark:border-emerald-800/50 backdrop-blur-sm">
              <Sparkles className="w-7 h-7 text-emerald-500" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Eco-Minimalism</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">Trending</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lifestyle & Home Decor • High Velocity</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 font-display">94<span className="text-lg text-emerald-600/60 dark:text-emerald-400/60">%</span></div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Match Score</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl p-4 border border-gray-100/50 dark:border-slate-700/50 backdrop-blur-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">Growth</div>
            <div className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-1">
              +128% <TrendingUp className="w-3 h-3 text-emerald-500" />
            </div>
          </div>
          <div className="bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl p-4 border border-gray-100/50 dark:border-slate-700/50 backdrop-blur-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">Competition</div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">Low</div>
          </div>
          <div className="bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl p-4 border border-gray-100/50 dark:border-slate-700/50 backdrop-blur-sm">
            <div className="text-xs text-gray-400 font-medium mb-1">Avg. Views</div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">45.2K</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Why it fits you</h4>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <span>Matches your audience's interest in sustainable living</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <span>Format aligns with your top-performing "Day in Life" videos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MockPlanningCard = () => (
  <div className="w-full max-w-2xl mx-auto p-6">
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-amber-500/10 border border-white/20 dark:border-white/10 overflow-hidden">
      <div className="p-6 border-b border-gray-100/50 dark:border-slate-800/50 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">Content Calendar</h3>
          <p className="text-xs text-gray-500">October 24 - 30</p>
        </div>
        <div className="flex -space-x-2">
           <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-slate-900" />
           <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-slate-900" />
           <div className="w-8 h-8 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold border-2 border-white dark:border-slate-900">+3</div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {[
          { day: 'Mon', title: 'Product Teaser', type: 'Growth', color: 'bg-amber-500' },
          { day: 'Wed', title: 'Behind the Scenes', type: 'Trust', color: 'bg-blue-500' },
          { day: 'Fri', title: 'User Q&A', type: 'Community', color: 'bg-emerald-500' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 text-center">
              <div className="text-xs font-bold text-gray-400 uppercase">{item.day}</div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">2{4 + i*2}</div>
            </div>
            <div className="flex-1 bg-gray-50/50 dark:bg-slate-800/50 rounded-2xl p-4 border border-gray-100/50 dark:border-slate-800/50 group-hover:border-amber-200 dark:group-hover:border-amber-800 transition-colors relative overflow-hidden backdrop-blur-sm">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color}`} />
              <div className="flex justify-between items-center relative z-10">
                <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.color} bg-opacity-10 text-${item.color.replace('bg-', '')} uppercase tracking-wide`}>
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-amber-50/50 dark:bg-amber-900/10 p-4 flex items-center justify-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 backdrop-blur-sm">
        <Sparkles className="w-4 h-4" /> AI Suggestion: Add a Hook variation for Wed
      </div>
    </div>
  </div>
);

const MockAnalyticsCard = () => (
  <div className="w-full max-w-2xl mx-auto p-6">
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-indigo-500/10 border border-white/20 dark:border-white/10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Content DNA</h3>
             <p className="text-sm text-gray-500">Analysis of your top performing video</p>
          </div>
          <div className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            Viral Hit
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Hook Strength</span>
              <span className="font-bold text-indigo-600">9.8/10</span>
            </div>
            <div className="h-2 w-full bg-gray-100/50 dark:bg-slate-800 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="h-full bg-indigo-500 w-[98%] rounded-full" />
            </div>
            <p className="text-xs text-gray-500 mt-1.5">First 3s retention is 40% above average</p>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">Pacing</span>
              <span className="font-bold text-indigo-600">Perfect</span>
            </div>
            <div className="flex gap-1 h-2 w-full">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`h-full rounded-full flex-1 ${i % 3 === 0 ? 'bg-indigo-500' : 'bg-indigo-200/50 dark:bg-indigo-900/50'}`} />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1.5">Visual changes every 2.4s match audience attention span</p>
          </div>

          <div className="flex gap-4 pt-4">
             <div className="flex-1 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-xl p-3 text-center backdrop-blur-sm">
               <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Keywords</div>
               <div className="font-bold text-indigo-700 dark:text-indigo-300">#budget #tech</div>
             </div>
             <div className="flex-1 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-xl p-3 text-center backdrop-blur-sm">
               <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Sentiment</div>
               <div className="font-bold text-indigo-700 dark:text-indigo-300">Positive</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Removed static features array as it's now inside the component


export function ProductShowcase({ t }: { t: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'opportunities',
      title: t?.opportunities?.title || 'Spot Trends Before They Peak',
      description: t?.opportunities?.desc || 'Stop chasing yesterday’s viral hits. Our AI analyzes millions of signals to find high-potential topics tailored specifically to your niche.',
      icon: <Target className="w-6 h-6" />,
      color: '#10B981', // Emerald
      component: <MockOpportunityCard />
    },
    {
      id: 'planning',
      title: t?.planning?.title || 'Execution, Not Just Planning',
      description: t?.planning?.desc || 'Turn strategy into action. Get a weekly production schedule that balances high-growth risks with stable, trust-building content.',
      icon: <Calendar className="w-6 h-6" />,
      color: '#F59E0B', // Amber
      component: <MockPlanningCard />
    },
    {
      id: 'analytics',
      title: t?.analytics?.title || 'Decode Your Content DNA',
      description: t?.analytics?.desc || 'Understand exactly why your best videos perform. We break down your content into structural elements to replicate success.',
      icon: <BarChart2 className="w-6 h-6" />,
      color: '#6366F1', // Indigo
      component: <MockAnalyticsCard />
    }
  ];
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });

  // Map scroll progress to active feature index
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide the scroll progress (0 to 1) into 3 sections
      // Use a slightly different logic to snap better
      // 0 - 0.33 -> 0
      // 0.33 - 0.66 -> 1
      // 0.66 - 1 -> 2
      const step = 1 / features.length;
      // Add a small buffer to avoid flickering at the edges
      const index = Math.min(Math.floor((latest + 0.05) / step), features.length - 1);
      setActiveFeature(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Parallax effects for the screen
  const screenScale = useTransform(springScroll, [0, 0.5, 1], [0.95, 1, 0.95]); 
  const screenRotateX = useTransform(springScroll, [0, 0.5, 1], [2, 0, -2]); 
  const screenY = useTransform(springScroll, [0, 1], [20, -20]); 

  // Smooth scroll translation for the text list
  // We want the text list to scroll such that the active item is centered in the container.
  // The container is h-[600px].
  // Each item is h-[400px].
  // Total height = 1200px.
  // When progress is 0 (Feature 0): Center of Feature 0 (200px) should be at Center of Container (300px).
  // Offset = 300 - 200 = 100px.
  // When progress is 1 (Feature 2): Center of Feature 2 (1000px) should be at Center of Container (300px).
  // Offset = 300 - 1000 = -700px.
  // Range: [100px, -700px] -> Apply -50px bias -> [50, -750]
  
  const textTranslateY = useTransform(springScroll, [0, 1], [50, -750]);

  return (
    <section ref={containerRef} className="relative md:h-[300vh] py-12 md:py-0 transition-colors duration-300 z-10">
      {/* Desktop Layout: Sticky */}
      <div className="hidden md:flex sticky top-0 h-screen flex-col justify-center overflow-hidden pt-20">
        
        {/* Background Ambient Effects - Matched to Hero - REMOVED for Shared Background */}

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full flex flex-row items-center gap-24">
          
          {/* Left Side: Text Narrative */}
          <div className="w-1/3 h-[600px] relative z-10 overflow-hidden">
             <div className="absolute inset-0 flex flex-col items-center">
                <motion.div 
                  className="flex flex-col w-full"
                  style={{ y: textTranslateY }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      animate={{ 
                        opacity: activeFeature === index ? 1 : 0.3,
                        scale: activeFeature === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-[400px] flex flex-col justify-center cursor-pointer"
                      onClick={() => {
                         // Optional: Scroll to this section
                      }}
                    >
                      <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: activeFeature === index ? 'auto' : 0,
                          opacity: activeFeature === index ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6">
                          <button 
                            className="flex items-center gap-2 text-sm font-bold transition-colors hover:underline" 
                            style={{ color: feature.color }}
                            aria-label={`Learn more about ${feature.title}`}
                          >
                            Learn more <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
             </div>
          </div>

          {/* Right Side: The "Screen" Visual */}
          <div className="w-2/3 flex items-center justify-center relative perspective-1000 h-full">
            <motion.div
              style={{ 
                scale: screenScale,
                rotateX: screenRotateX,
                y: screenY,
              }}
              className="relative w-full aspect-[16/10] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-slate-800/50 overflow-hidden backdrop-blur-xl"
            >
              {/* Browser Chrome */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center px-4 gap-2 z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="mx-auto w-1/3 h-4 bg-gray-200/50 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-[8px] text-gray-400 font-medium">
                  owlseer.app
                </div>
              </div>

              {/* Dynamic Content Area */}
              <div className="absolute inset-0 pt-8 bg-gray-50/50 dark:bg-slate-900/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full flex flex-col items-center justify-center p-4"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                       <div className="transform scale-[0.85] origin-center w-full">
                         {features[activeFeature].component}
                       </div>
                       <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur shadow-lg border border-gray-100 dark:border-slate-700 px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10"
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">Live Preview</span>
                       </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Vertical Stack */}
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {features.map((feature, index) => (
          <div key={feature.id} className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            {/* Mobile Card Visual */}
            <div className="w-full aspect-[4/3] bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-slate-800 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center px-3 gap-1.5 z-20">
                <div className="w-2 h-2 rounded-full bg-red-400/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                <div className="w-2 h-2 rounded-full bg-green-400/80" />
              </div>
              <div className="absolute inset-0 pt-6 bg-gray-50/50 dark:bg-slate-900/50 p-4 overflow-hidden">
                <div className="transform scale-[0.6] origin-top-left w-[166%] h-[166%]">
                   {feature.component}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
