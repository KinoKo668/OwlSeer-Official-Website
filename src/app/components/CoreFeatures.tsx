import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3,
  MessageSquare,
  Zap,
  ArrowUpRight,
  MoreHorizontal,
  Calendar
} from 'lucide-react';

// --- Mock UI Components for Bento Cards ---

const MockChatUI = () => (
  <div className="w-full bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 overflow-hidden shadow-sm">
    <div className="p-3 border-b border-gray-100 dark:border-slate-700 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <div className="ml-auto text-[10px] text-gray-400 font-medium">AI Copilot</div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-[10px]">👤</div>
        <div className="bg-gray-100 dark:bg-slate-700/50 rounded-lg rounded-tl-none p-2 text-xs text-gray-600 dark:text-gray-300 max-w-[80%]">
          Give me a hook for my desk setup video.
        </div>
      </div>
      <div className="flex gap-2 flex-row-reverse">
        <div className="w-6 h-6 rounded-full bg-[#1AAE82]/10 flex items-center justify-center text-[10px]">🤖</div>
        <div className="bg-[#1AAE82]/10 dark:bg-[#1AAE82]/20 rounded-lg rounded-tr-none p-2 text-xs text-gray-700 dark:text-gray-200 max-w-[90%] shadow-sm">
          <p className="font-semibold mb-1 text-[#1AAE82]">High Conversion Hook:</p>
          "Stop buying expensive monitor arms. Here's why..."
        </div>
      </div>
    </div>
  </div>
);

const MockTrendList = () => (
  <div className="space-y-2 w-full">
    {[
      { tag: '#DeskSetup', score: 98, trend: 'up' },
      { tag: '#Productivity', score: 94, trend: 'up' },
      { tag: '#TechReview', score: 89, trend: 'flat' },
    ].map((item, i) => (
      <div key={i} className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.tag}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
            item.score > 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
          }`}>
            {item.score}
          </span>
          {item.trend === 'up' && <ArrowUpRight className="w-3 h-3 text-green-500" />}
        </div>
      </div>
    ))}
  </div>
);

const MockAnalyticsChart = () => (
  <div className="w-full h-full flex items-end gap-1 px-2 pb-2">
    {[35, 45, 40, 60, 75, 50, 65, 80, 70, 85, 95, 90].map((h, i) => (
      <motion.div 
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        className={`flex-1 rounded-t-sm ${i > 8 ? 'bg-[#1AAE82]' : 'bg-gray-200 dark:bg-slate-700'}`}
      />
    ))}
  </div>
);

const MockGoalRing = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <svg className="w-full h-full transform -rotate-90">
      <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-slate-800" />
      <motion.circle 
        cx="48" cy="48" r="40" 
        stroke="currentColor" 
        strokeWidth="8" 
        fill="transparent" 
        strokeDasharray="251.2" 
        initial={{ strokeDashoffset: 251.2 }}
        whileInView={{ strokeDashoffset: 251.2 * 0.25 }} // 75% progress
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-[#1AAE82]" 
        strokeLinecap="round"
      />
    </svg>
    <div className="absolute flex flex-col items-center">
      <span className="text-xl font-bold text-gray-900 dark:text-white">75%</span>
      <span className="text-[10px] text-gray-400 uppercase font-semibold">Goal</span>
    </div>
  </div>
);

// --- Bento Grid Component ---

export const CoreFeatures = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3 h-3" /> {t?.badge || 'Powerhouse'}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-display"
          >
            {t?.title || 'Everything you need to'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t?.titleHighlight || 'dominate'}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400"
          >
            {t?.subtitle || 'A unified operating system for modern creators. Stop juggling disjointed tools.'}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: AI Copilot (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col sm:flex-row gap-6"
          >
            <div className="flex-1 flex flex-col justify-center z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t?.copilot?.title || 'AI Strategy Copilot'}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {t?.copilot?.desc || 'Your 24/7 creative partner. Generate high-conversion scripts, brainstorm hooks, and get instant feedback on your ideas.'}
              </p>
            </div>
            <div className="flex-1 relative min-h-[160px] flex items-center justify-center bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-800/50 group-hover:scale-[1.02] transition-transform duration-500">
              <MockChatUI />
            </div>
          </motion.div>

          {/* Card 2: Trend Intelligence (Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors" />
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t?.trend?.title || 'Trend Intelligence'}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {t?.trend?.desc || 'Spot opportunities before they peak. Our AI analyzes millions of data points to find *your* next viral topic.'}
            </p>
            <div className="flex-1 bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-800/50 flex flex-col justify-center gap-3 group-hover:translate-y-[-5px] transition-transform duration-500">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{t?.trend?.liveSignals || 'Live Signals'}</div>
              <MockTrendList />
            </div>
          </motion.div>

          {/* Card 3: Smart Goals (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t?.goals?.title || 'Smart Goals'}</h3>
              </div>
              <MockGoalRing />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t?.goals?.desc || 'Turn vague ambitions into actionable daily tasks.'}
            </p>
          </motion.div>

          {/* Card 4: Deep Analytics (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded uppercase">
                +124% YOY
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t?.analytics?.title || 'Deep Analytics'}</h3>
            <div className="flex-1 h-24 w-full mt-2 group-hover:scale-[1.05] transition-transform origin-bottom duration-500">
              <MockAnalyticsChart />
            </div>
          </motion.div>

        </div>

        {/* Bottom Strip: Additional Features */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Calendar, label: t?.features?.scheduling || "Smart Scheduling" },
            { icon: TrendingUp, label: t?.features?.prediction || "Viral Prediction" },
            { icon: MoreHorizontal, label: t?.features?.multiAccount || "Multi-Account" },
            { icon: Zap, label: t?.features?.reports || "Instant Reports" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="flex items-center gap-3 p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-gray-100 dark:border-slate-800 backdrop-blur-sm"
            >
              <feature.icon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{feature.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
