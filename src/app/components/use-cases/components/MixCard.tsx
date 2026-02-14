import React from 'react';

export const MixCard = ({ t }: { t: any }) => (
  <div className="relative group overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1AAE82]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <h4 className="font-display font-bold text-gray-900 dark:text-white mb-4 relative z-10">{t.title}</h4>
    
    <div className="flex h-12 rounded-xl overflow-hidden mb-6 shadow-inner relative z-10">
      <div className="w-[20%] bg-blue-500/90 flex items-center justify-center text-[10px] text-white font-bold tracking-wider hover:w-[25%] transition-all duration-500 cursor-help">20%</div>
      <div className="w-[50%] bg-[#1AAE82]/90 flex items-center justify-center text-[10px] text-white font-bold tracking-wider hover:w-[60%] transition-all duration-500 cursor-help">50%</div>
      <div className="w-[30%] bg-purple-500/90 flex items-center justify-center text-[10px] text-white font-bold tracking-wider hover:w-[40%] transition-all duration-500 cursor-help">30%</div>
    </div>
    
    <div className="grid grid-cols-1 gap-3 relative z-10">
      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
        <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0 shadow-sm shadow-blue-500/50"></div>
        <span>{t.broad}</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
        <div className="w-3 h-3 rounded-full bg-[#1AAE82] shrink-0 shadow-sm shadow-[#1AAE82]/50"></div>
        <span>{t.niche}</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
        <div className="w-3 h-3 rounded-full bg-purple-500 shrink-0 shadow-sm shadow-purple-500/50"></div>
        <span>{t.trending}</span>
      </div>
    </div>
  </div>
);
