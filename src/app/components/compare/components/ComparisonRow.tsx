import React from 'react';
import { Check } from 'lucide-react';

export const ComparisonRow = ({ feature, owlseer, vidiq, focus }: { feature: string, owlseer: string, vidiq: string, focus: number }) => {
  const isOwlSeerWinner = focus > 50;
  
  return (
    <div className={`group grid grid-cols-1 items-center gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 md:grid-cols-3 md:gap-5 md:p-5 ${
      isOwlSeerWinner
        ? 'hover:border-emerald-200/70 hover:bg-emerald-50/55 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/8'
        : 'hover:border-sky-200/70 hover:bg-sky-50/55 dark:hover:border-sky-500/30 dark:hover:bg-sky-500/8'
    }`}>
      <div className="flex items-center text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
        {feature}
      </div>
      
      {/* OwlSeer Column */}
      <div className={`relative rounded-xl border px-4 py-3.5 transition-all duration-300 ${
        isOwlSeerWinner
          ? 'z-10 border-emerald-200/80 bg-white/90 shadow-[0_20px_45px_-30px_rgba(16,185,129,0.65)] ring-1 ring-emerald-400/20 dark:border-emerald-400/35 dark:bg-slate-900/85'
          : 'border-white/80 bg-white/65 opacity-70 dark:border-white/10 dark:bg-slate-900/40'
      }`}>
        {isOwlSeerWinner && (
          <div className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_10px_24px_-12px_rgba(16,185,129,0.9)]">
            <Check className="w-4 h-4" strokeWidth={3} />
          </div>
        )}
        <div className="font-semibold text-slate-800 dark:text-slate-200">{owlseer}</div>
      </div>
      
      {/* VidIQ Column */}
      <div className={`relative rounded-xl border px-4 py-3.5 transition-all duration-300 ${
        !isOwlSeerWinner
          ? 'z-10 border-sky-200/80 bg-white/90 shadow-[0_20px_45px_-30px_rgba(14,165,233,0.65)] ring-1 ring-sky-400/20 dark:border-sky-400/35 dark:bg-slate-900/85'
          : 'border-white/80 bg-white/65 opacity-70 dark:border-white/10 dark:bg-slate-900/40'
      }`}>
        {!isOwlSeerWinner && (
          <div className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-sky-500 text-white shadow-[0_10px_24px_-12px_rgba(14,165,233,0.9)]">
            <Check className="w-4 h-4" strokeWidth={3} />
          </div>
        )}
        <div className="font-medium text-slate-600 dark:text-slate-400">{vidiq}</div>
      </div>
    </div>
  );
};
