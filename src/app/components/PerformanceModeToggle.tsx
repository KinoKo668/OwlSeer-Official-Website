import React, { memo } from 'react';
import { Zap, Sparkles, Monitor, ChevronDown, Check } from 'lucide-react';
import { usePerformance } from '../contexts';

interface PerformanceModeToggleProps {
  variant?: 'dropdown' | 'buttons' | 'compact';
  className?: string;
}

/**
 * Performance Mode Toggle Component
 * 
 * Allows users to switch between different performance modes:
 * - auto: Automatically detect and apply optimal settings
 * - high-quality: Enable all visual effects
 * - performance: Disable blur and reduce animations
 */
export const PerformanceModeToggle = memo(function PerformanceModeToggle({ 
  variant = 'dropdown',
  className = ''
}: PerformanceModeToggleProps) {
  const { 
    performanceMode, 
    setPerformanceMode, 
    isWindows, 
    isLowEndDevice,
    enableBlur,
    enableAnimations 
  } = usePerformance();
  
  const [isOpen, setIsOpen] = React.useState(false);

  const modes = [
    {
      id: 'auto' as const,
      label: 'Auto',
      description: isWindows 
        ? 'Optimized for Windows' 
        : isLowEndDevice 
          ? 'Optimized for your device'
          : 'Best quality for your device',
      icon: Monitor,
    },
    {
      id: 'high-quality' as const,
      label: 'High Quality',
      description: 'All visual effects enabled',
      icon: Sparkles,
    },
    {
      id: 'performance' as const,
      label: 'Performance',
      description: 'Reduced effects for smoother experience',
      icon: Zap,
    },
  ];

  const currentMode = modes.find(m => m.id === performanceMode) || modes[0];
  const CurrentIcon = currentMode.icon;

  if (variant === 'compact') {
    return (
      <button
        onClick={() => {
          // Cycle through modes
          const modeOrder: Array<'auto' | 'high-quality' | 'performance'> = ['auto', 'high-quality', 'performance'];
          const currentIndex = modeOrder.indexOf(performanceMode);
          const nextIndex = (currentIndex + 1) % modeOrder.length;
          setPerformanceMode(modeOrder[nextIndex]);
        }}
        className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors ${className}`}
        title={`Performance Mode: ${currentMode.label}`}
      >
        <CurrentIcon className={`w-5 h-5 ${
          performanceMode === 'performance' 
            ? 'text-emerald-500' 
            : performanceMode === 'high-quality'
              ? 'text-purple-500'
              : 'text-gray-500'
        }`} />
      </button>
    );
  }

  if (variant === 'buttons') {
    return (
      <div className={`flex items-center gap-1 p-1 bg-gray-100 dark:bg-slate-800 rounded-lg ${className}`}>
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = performanceMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setPerformanceMode(mode.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                isActive
                  ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{mode.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Default: dropdown variant
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-colors bg-white dark:bg-slate-800"
      >
        <CurrentIcon className={`w-4 h-4 ${
          performanceMode === 'performance' 
            ? 'text-emerald-500' 
            : performanceMode === 'high-quality'
              ? 'text-purple-500'
              : 'text-gray-500'
        }`} />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentMode.label}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden z-20">
            <div className="px-3 py-2 border-b border-gray-100 dark:border-slate-700">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Display Mode
              </p>
            </div>
            
            <div className="py-1">
              {modes.map((mode) => {
                const Icon = mode.icon;
                const isActive = performanceMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => {
                      setPerformanceMode(mode.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-start gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${
                      isActive ? 'bg-gray-50 dark:bg-slate-700/50' : ''
                    }`}
                  >
                    <Icon className={`w-5 h-5 mt-0.5 ${
                      mode.id === 'performance' 
                        ? 'text-emerald-500' 
                        : mode.id === 'high-quality'
                          ? 'text-purple-500'
                          : 'text-gray-400'
                    }`} />
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${
                          isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {mode.label}
                        </span>
                        {isActive && (
                          <Check className="w-4 h-4 text-emerald-500" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {mode.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Status info */}
            <div className="px-3 py-2 border-t border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Effects:</span>
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 rounded ${enableBlur ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-gray-200 text-gray-600 dark:bg-slate-700 dark:text-gray-400'}`}>
                    Blur {enableBlur ? 'ON' : 'OFF'}
                  </span>
                  <span className={`px-1.5 py-0.5 rounded ${enableAnimations ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-gray-200 text-gray-600 dark:bg-slate-700 dark:text-gray-400'}`}>
                    Animations {enableAnimations ? 'ON' : 'OFF'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

/**
 * Floating Performance Indicator
 * Shows current performance mode in corner (useful for debugging)
 */
export const PerformanceIndicator = memo(function PerformanceIndicator() {
  const { performanceMode, isWindows, isLowEndDevice, enableBlur, reduceMotion } = usePerformance();
  
  // Only show in development or when there's an issue
  const showIndicator = !enableBlur || reduceMotion;
  
  if (!showIndicator) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-sm">
      <Zap className="w-3.5 h-3.5 text-emerald-400" />
      <span>
        {performanceMode === 'performance' 
          ? 'Performance Mode' 
          : isWindows 
            ? 'Windows Optimized'
            : 'Low-end Device Mode'}
      </span>
    </div>
  );
});

export default PerformanceModeToggle;
