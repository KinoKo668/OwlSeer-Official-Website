import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Youtube, Check, Zap } from 'lucide-react';

export const FlipCard = ({ title, features, type, onFlip }: { title: string, features: string[], type: 'owlseer' | 'vidiq', onFlip?: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isOwlSeer = type === 'owlseer';
  
  return (
    <div 
      className="group relative h-[500px] w-full cursor-pointer [perspective:1400px] sm:h-[520px]"
      onClick={() => {
        setIsFlipped(!isFlipped);
        onFlip?.();
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className={`absolute inset-0 flex flex-col rounded-[30px] border p-7 shadow-[0_34px_95px_-62px_rgba(15,23,42,0.95)] backdrop-blur-xl [backface-visibility:hidden] sm:p-9 ${
            isOwlSeer 
              ? 'border-emerald-200/80 bg-white/82 dark:border-emerald-500/30 dark:bg-slate-900/72'
              : 'border-sky-200/80 bg-white/82 dark:border-sky-500/30 dark:bg-slate-900/72'
          }`}
        >
          <div className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner ${
            isOwlSeer ? 'bg-[#1AAE82]/10 text-[#1AAE82]' : 'bg-sky-50 text-sky-500 dark:bg-sky-500/15 dark:text-sky-300'
          }`}>
            {isOwlSeer ? <Smartphone className="h-8 w-8" /> : <Youtube className="h-8 w-8" />}
          </div>
          
          <h3 className="mb-7 font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            {title}
          </h3>
          
          <ul className="flex-1 space-y-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3.5">
                <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                   isOwlSeer ? 'bg-[#1AAE82]/12 text-[#1AAE82]' : 'bg-sky-100 text-sky-500 dark:bg-sky-500/20 dark:text-sky-300'
                }`}>
                  <Check className="h-3 w-3" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 transition-opacity group-hover:opacity-100 dark:text-slate-500 sm:text-xs">
            <Zap className="h-4 w-4" /> Click to Flip
          </div>
        </div>

        {/* Back */}
        <div 
          className={`absolute inset-0 flex rotate-y-180 flex-col overflow-hidden rounded-[30px] shadow-[0_34px_95px_-62px_rgba(15,23,42,0.95)] [backface-visibility:hidden] ${
            isOwlSeer 
              ? 'bg-gradient-to-br from-[#1AAE82] to-[#15956F]' 
              : 'bg-gradient-to-br from-sky-500 to-sky-700'
          }`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="p-7 text-center text-white sm:p-8">
            <h4 className="mb-2 font-display text-2xl font-bold">
              {isOwlSeer ? "Built for TikTok" : "Built for YouTube"}
            </h4>
            <p className="text-base text-white/80 sm:text-lg">
              {isOwlSeer ? "Deep Signal Analysis" : "Search Volume & SEO"}
            </p>
          </div>
          <div className="relative m-3 mt-0 flex-1 overflow-hidden rounded-t-[24px] bg-white p-6 shadow-inner dark:bg-slate-900">
             {/* Mock UI Representation */}
             {isOwlSeer ? (
               <div className="space-y-4 opacity-80">
                 <div className="flex items-center justify-between mb-4">
                   <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3"></div>
                   <div className="h-8 w-24 bg-[#1AAE82] rounded-full"></div>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                   <div className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 dark:border-emerald-900/20 dark:bg-emerald-900/10">
                     <div className="w-8 h-8 rounded-full bg-[#1AAE82]/20"></div>
                     <div className="h-2 w-12 bg-gray-200 dark:bg-slate-700 rounded"></div>
                   </div>
                   <div className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 dark:border-emerald-900/20 dark:bg-emerald-900/10">
                     <div className="w-8 h-8 rounded-full bg-[#1AAE82]/20"></div>
                     <div className="h-2 w-12 bg-gray-200 dark:bg-slate-700 rounded"></div>
                   </div>
                 </div>
                 <div className="h-32 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-4">
                    <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-1/2"></div>
                 </div>
               </div>
             ) : (
               <div className="space-y-4 opacity-80">
                  <div className="h-10 bg-gray-100 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center px-4">
                    <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex h-12 items-center justify-between rounded-xl border border-sky-100 bg-sky-50 px-4 dark:border-sky-900/20 dark:bg-sky-900/10">
                       <div className="h-2 bg-blue-200 rounded w-1/3"></div>
                       <div className="h-6 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex h-12 items-center justify-between rounded-xl border border-sky-100 bg-sky-50 px-4 dark:border-sky-900/20 dark:bg-sky-900/10">
                       <div className="h-2 bg-blue-200 rounded w-1/3"></div>
                       <div className="h-6 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex h-12 items-center justify-between rounded-xl border border-sky-100 bg-sky-50 px-4 dark:border-sky-900/20 dark:bg-sky-900/10">
                       <div className="h-2 bg-blue-200 rounded w-1/3"></div>
                       <div className="h-6 w-12 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
               </div>
             )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
