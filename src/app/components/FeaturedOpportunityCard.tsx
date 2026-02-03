import React from 'react';
import { Target, Lightbulb, Brain, Clock, TrendingUp, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedOpportunityCardProps {
  onCreate: (topic: any) => void;
}

export function FeaturedOpportunityCard({ onCreate }: FeaturedOpportunityCardProps) {
  return (
    <div className="mb-5 relative group">
      {/* Light & Airy Background with Subtle Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/20 rounded-[20px] overflow-hidden border border-emerald-100/50 dark:border-emerald-900/30">
        {/* Subtle Animated Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 dark:bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-100/40 dark:bg-teal-500/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3"></div>
        
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>

      <div className="relative rounded-[20px] p-6 md:p-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 text-xs font-bold tracking-wider uppercase border border-emerald-200 dark:border-emerald-500/30">
                Perfect fit
              </span>
              <span className="text-emerald-600/80 dark:text-emerald-400/80 text-sm font-medium tracking-wide">
                Tech Reviews
              </span>
            </div>
            <h3 className="text-gray-900 dark:text-foreground text-2xl md:text-3xl font-bold leading-tight mb-2 font-display tracking-tight">
              Budget Smartphone Comparisons
            </h3>
            <p className="text-gray-600 dark:text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
              Comparing budget-friendly smartphones to help viewers find the best value for their money.
            </p>
          </div>

          {/* Match Score Ring - Light Theme */}
          <div className="flex-shrink-0 flex items-center gap-3 bg-white dark:bg-card border border-emerald-100 dark:border-emerald-900/50 rounded-2xl p-3 shadow-sm">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-emerald-50 dark:text-emerald-900/30"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="94, 100"
                  strokeLinecap="round"
                  className="animate-[dash_1s_ease-out_forwards]"
                />
              </svg>
              <span className="absolute text-xs font-bold text-emerald-700 dark:text-emerald-400">94%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-emerald-600/60 dark:text-emerald-400/60 uppercase font-semibold tracking-wider">Match Score</span>
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-100">Excellent</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8 !items-stretch">
          {/* Why This Fits You - White Card */}
          <div className="flex-1 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl p-5 shadow-sm hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors group/card !h-full !flex !flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h4 className="text-gray-900 dark:text-card-foreground font-bold text-sm tracking-wide">
                WHY THIS FITS YOU
              </h4>
            </div>
            <ul className="space-y-3 !flex-1">
              {[
                { text: "Your tech review videos have 2.3x higher CTR than average", highlight: "2.3x higher CTR" },
                { text: "Budget tech content drives 18% more shares from your audience", highlight: "18% more shares" },
                { text: "Your followers actively comment asking for budget recommendations", highlight: "" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                  <span>
                    {item.highlight ? (
                      <>
                        {item.text.split(item.highlight)[0]}
                        <span className="text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-500/20 px-1 rounded">{item.highlight}</span>
                        {item.text.split(item.highlight)[1]}
                      </>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Ideas - White Card */}
          <div className="flex-1 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl p-5 shadow-sm hover:border-teal-200 dark:hover:border-teal-800 transition-colors group/card !h-full !flex !flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400">
                <Brain className="w-4 h-4" />
              </div>
              <h4 className="text-gray-900 dark:text-card-foreground font-bold text-sm tracking-wide">
                CONTENT IDEAS
              </h4>
            </div>
            <div className="space-y-2 !flex-1">
              {[
                { title: '"Best Budget Phones Under $300 in 2026"', desc: "Side-by-side comparison of top 5 budget phones" },
                { title: '"Flagship vs Budget: Can You Tell?"', desc: "Blind camera test comparing $200 and $1000 phones" },
                { title: '"I Used a Budget Phone for 30 Days"', desc: "Personal journey format showing real daily use" }
              ].map((idea, idx) => (
                <div 
                  key={idx}
                  className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-muted border border-transparent transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-gray-100 dark:bg-muted text-gray-500 dark:text-muted-foreground flex items-center justify-center text-xs font-bold group-hover/item:bg-teal-500 group-hover/item:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-card-foreground font-semibold text-sm mb-0.5 group-hover/item:text-teal-700 dark:group-hover/item:text-teal-400 transition-colors">
                      {idea.title}
                    </p>
                    <p className="text-gray-500 dark:text-muted-foreground text-xs leading-relaxed line-clamp-1">
                      {idea.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-emerald-100/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-amber-600">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wide">5D LEFT</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-2 text-emerald-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wide">+32% GROWTH</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCreate({
              title: 'Budget Smartphone Comparisons',
              description: 'Comparing budget-friendly smartphones to help viewers find the best value for their money.',
              category: 'Tech Reviews',
              matchScore: 94,
              trend: 'Peak in 5d'
            })}
            className="px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-sm shadow-lg shadow-emerald-200 flex items-center gap-2 transition-all group"
          >
            <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
            <span>Start Creating Now</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
