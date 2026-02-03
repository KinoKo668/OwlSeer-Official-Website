import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, Lock, TrendingUp, Zap } from 'lucide-react';

export type ConversionScenario = 'dashboard' | 'trend-radar' | 'content-studio' | 'default';

interface ConversionFabProps {
  onNavigate: (page: string) => void;
  scenario?: ConversionScenario;
  triggerOpen?: boolean; // External trigger to force open
  onClose?: () => void;
  autoCloseDelay?: number;
}

interface ScenarioConfigItem {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  footerText: string;
  gradient: string;
  buttonStyle?: string;
}

const scenarioConfig: Record<string, ScenarioConfigItem> = {
  dashboard: {
    icon: Sparkles,
    title: "Want real account diagnosis?",
    description: "Current simulation data is for demo only. Connect your TikTok account for instant analysis of your real follower growth potential.",
    buttonText: "Connect Real Account",
    footerText: "Secure encryption · 10s setup",
    gradient: "from-blue-500 to-purple-600"
  },
  'trend-radar': {
    icon: TrendingUp,
    title: "Don't miss the next viral trend",
    description: "AI is monitoring TikTok trends in real-time. Connect to get personalized creative inspiration based on your niche.",
    buttonText: "Start AI Trend Tracking",
    footerText: "No credit card required · Cancel anytime",
    gradient: "from-emerald-500 to-teal-600"
  },
  'content-studio': {
    icon: Zap,
    title: "Unlock your AI Creative Studio",
    description: "Simulation mode cannot generate targeted scripts. Connect to let AI tailor scripts for you and boost completion rates.",
    buttonText: "Unlock Full Features",
    footerText: "Secure connection · No credit card required",
    gradient: "from-amber-500 to-orange-600",
    buttonStyle: "animate-pulse-subtle" // Custom style marker
  },
  default: {
    icon: Sparkles,
    title: "Ready for real data?",
    description: "Connect your TikTok account to get personalized AI insights instantly.",
    buttonText: "Start Free Trial",
    footerText: "Secure connection · No credit card required",
    gradient: "from-blue-500 to-purple-600"
  }
};

export function ConversionFab({ onNavigate, scenario = 'default', triggerOpen, onClose, autoCloseDelay = 10000 }: ConversionFabProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const config = scenarioConfig[scenario] || scenarioConfig.default;
  const Icon = config.icon;

  // Handle external trigger
  React.useEffect(() => {
    if (triggerOpen) {
      setIsExpanded(true);
    }
  }, [triggerOpen]);

  // Auto-collapse logic
  React.useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
        onClose?.();
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, scenario, autoCloseDelay, onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#111827] text-white p-5 rounded-2xl shadow-2xl max-w-[320px] relative overflow-hidden group border border-white/10"
          >
            {/* Background Effects */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${config.gradient} opacity-20 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none`} />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-[30px] -ml-8 -mb-8 pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
                onClose?.();
              }}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 bg-gradient-to-br ${config.gradient} rounded-xl shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight mb-1">
                    {config.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {config.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => onNavigate('auth?mode=signup')}
                  className={`flex-1 bg-white text-[#111827] px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${config.buttonStyle === 'animate-pulse-subtle' ? 'animate-[pulse_3s_infinite]' : ''}`}
                >
                  {config.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                <Lock className="w-3 h-3" />
                <span>{config.footerText}</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            layoutId="fab-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 px-4 py-3 bg-[#111827] text-white rounded-full shadow-xl border border-white/10 hover:bg-[#1f2937] transition-colors group relative overflow-hidden"
          >
             <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
            <div className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${scenario === 'content-studio' ? 'bg-amber-400' : 'bg-blue-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${scenario === 'content-studio' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
              </span>
              <span className="font-semibold text-sm">{config.buttonText}</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}