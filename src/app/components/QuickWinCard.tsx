import React, { useState } from 'react';
import { Zap, Lightbulb, X, ArrowRight, Check } from 'lucide-react';

interface QuickWinCardProps {
  onGenerateScript?: () => void;
  onMarkComplete?: () => void;
  onDismiss?: () => void;
}

export function QuickWinCard({ 
  onGenerateScript, 
  onMarkComplete,
  onDismiss 
}: QuickWinCardProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleMarkComplete = () => {
    setIsCompleted(true);
    setTimeout(() => {
      setIsDismissed(true);
      onMarkComplete?.();
    }, 300);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] shadow-[0_4px_20px_rgba(15,118,110,0.25)] transition-all duration-300 ${
        isCompleted ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
      }`}
      style={{
        padding: '16px 20px',
      }}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-50 pointer-events-none"></div>

      {/* Top Row */}
      <div className="flex items-center justify-between mb-3 relative">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-white/80" />
          <span className="text-white/80" style={{ fontSize: '14px', fontWeight: '700' }}>
            Quick Win
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/60" style={{ fontSize: '12px' }}>
            Today Jan 22
          </span>
          <button
            onClick={handleDismiss}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-start gap-3 mb-4 relative">
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/15">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-white mb-1" style={{ fontSize: '16px', fontWeight: '700', lineHeight: '1.3' }}>
            Use 'Product-First' hook for your next video
          </h3>
          <p className="text-white/70" style={{ fontSize: '14px', lineHeight: '1.4' }}>
            This is the key step to fix your Hook problem
          </p>
        </div>
      </div>

      {/* Bottom Row - Buttons */}
      <div className="flex flex-col sm:flex-row gap-2.5 relative">
        <button
          onClick={onGenerateScript}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#0F766E] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          Generate Script
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          onClick={handleMarkComplete}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-transparent border border-white/50 text-white transition-transform hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98]"
          style={{ fontSize: '14px', fontWeight: '600' }}
        >
          Mark Complete
          <Check className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}