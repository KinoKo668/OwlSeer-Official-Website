import React from 'react';
import { motion } from 'motion/react';

const FloatingTag = ({ name, size, color, x, y, delay }: { name: string, size: number, color: string, x: number, y: number, delay: number }) => (
  <motion.div
    className={`absolute rounded-full flex items-center justify-center text-white font-bold backdrop-blur-md shadow-lg border border-white/20 ${color}`}
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      fontSize: `${size * 0.18}px`
    }}
    initial={{ y: 20, opacity: 0 }}
    animate={{ 
      y: [0, -10, 0],
      opacity: 1
    }}
    transition={{ 
      y: {
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay
      },
      opacity: { duration: 0.5 }
    }}
  >
    {name}
  </motion.div>
);

export const HashtagVisualizer = () => {
  return (
    <div className="w-full h-[400px] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl relative overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1AAE82]/5 via-blue-500/5 to-purple-500/5" />
      
      {/* Grid lines - subtler */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <FloatingTag name="#AI" size={100} color="bg-[#1AAE82]" x={20} y={20} delay={0} />
      <FloatingTag name="#Tech" size={80} color="bg-blue-500" x={70} y={15} delay={1} />
      <FloatingTag name="#2025" size={120} color="bg-purple-500" x={45} y={50} delay={2} />
      <FloatingTag name="#Review" size={70} color="bg-amber-500" x={15} y={60} delay={0.5} />
      <FloatingTag name="#Viral" size={90} color="bg-pink-500" x={75} y={65} delay={1.5} />

      <div className="absolute bottom-4 left-4 flex gap-4 text-xs font-mono text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-gray-200 dark:border-white/5">
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#1AAE82] animate-pulse"></div> High Momentum</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Stable</div>
      </div>
    </div>
  );
};
