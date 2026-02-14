import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Youtube, Smartphone } from 'lucide-react';

export const PlatformFocusSlider = ({ focus, setFocus }: { focus: number, setFocus: (val: number) => void }) => {
  const constraintsRef = useRef(null);

  return (
    <div className="mx-auto mb-10 w-full max-w-2xl rounded-[26px] border border-white/85 bg-white/72 p-4 shadow-[0_28px_75px_-56px_rgba(15,23,42,0.95)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 sm:p-5 md:mb-12">
      <div className="mb-4 flex items-center justify-between font-display text-sm font-semibold sm:text-base">
        <div className={`flex items-center gap-2 transition-colors duration-300 ${focus < 50 ? 'text-sky-500' : 'text-slate-400 dark:text-slate-500'}`}>
          <Youtube className="w-5 h-5" />
          YouTube Focus
        </div>
        <div className={`flex items-center gap-2 transition-colors duration-300 ${focus > 50 ? 'text-emerald-600 dark:text-emerald-300' : 'text-slate-400 dark:text-slate-500'}`}>
          TikTok Focus
          <Smartphone className="w-5 h-5" />
        </div>
      </div>
      
      <div className="relative h-14 overflow-hidden rounded-full border border-white/90 bg-white/85 p-1.5 shadow-inner dark:border-white/10 dark:bg-slate-950/45" ref={constraintsRef}>
        {/* Background Gradients */}
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-500/16 to-sky-400/10 transition-all duration-300"
          style={{ width: `${100 - focus}%` }}
        />
        <div 
          className="absolute inset-y-0 right-0 bg-gradient-to-l from-emerald-500/20 to-emerald-400/10 transition-all duration-300"
          style={{ width: `${focus}%` }}
        />
        
        {/* Slider Knob */}
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(event, info) => {
            if (!constraintsRef.current) return;
            const element = constraintsRef.current as HTMLElement;
            const width = element.offsetWidth - 44;
            const x = info.point.x - element.getBoundingClientRect().left - 22;
            const newFocus = Math.max(0, Math.min(100, (x / width) * 100));
            setFocus(newFocus);
          }}
          style={{ left: `${focus}%`, x: '-50%' }}
          className="absolute bottom-1.5 top-1.5 z-10 flex w-10 cursor-grab items-center justify-center rounded-full border border-white/90 bg-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.75)] transition-transform hover:scale-105 active:cursor-grabbing dark:border-white/20 dark:bg-slate-800"
        >
          <div className="h-5 w-1 rounded-full bg-slate-300 dark:bg-slate-500" />
        </motion.div>
        
        {/* Center Line */}
        <div className="absolute bottom-3 top-3 left-1/2 w-px border-l border-dashed border-slate-300/80 dark:border-slate-600" />
      </div>
      
      <p className="mt-3 text-center text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
        Drag to compare feature priorities based on your main platform
      </p>
    </div>
  );
};
