import React from 'react';
import { PieChart } from 'lucide-react';

interface CategoryData {
  name: string;
  percentage: number;
  videoCount: number;
  barClass: string;
  badgeClass: string;
}

interface ContentCategoryInsightProps {
  t: any; // translations object
}

export function ContentCategoryInsight({ t }: ContentCategoryInsightProps) {
  // Mock data - Top 3 categories from last 30 videos
  const categories: CategoryData[] = [
    {
      name: 'Tech Reviews & Unboxing',
      percentage: 47,
      videoCount: 14,
      barClass: 'bg-slate-900 dark:bg-slate-200',
      badgeClass: 'bg-slate-900 dark:bg-slate-200',
    },
    {
      name: 'Product Comparisons',
      percentage: 33,
      videoCount: 10,
      barClass: 'bg-slate-500 dark:bg-slate-400',
      badgeClass: 'bg-slate-500 dark:bg-slate-400',
    },
    {
      name: 'Setup Guides & Tips',
      percentage: 20,
      videoCount: 6,
      barClass: 'bg-slate-300 dark:bg-slate-600',
      badgeClass: 'bg-slate-300 dark:bg-slate-600',
    },
  ];

  const bestPerformingCategory = categories[0];
  const totalVideos = categories.reduce((sum, cat) => sum + cat.videoCount, 0);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[12px] border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-slate-900 dark:text-white" />
          <h3 className="text-slate-900 dark:text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
            {t.contentFocus}
          </h3>
        </div>
        <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', fontWeight: '500' }}>
          {t.last30Videos}
        </span>
      </div>

      {/* Category Distribution Visualization */}
      <div className="mb-6">
        {/* Stacked Bar */}
        <div className="flex h-2.5 rounded-full overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`transition-all hover:opacity-80 cursor-pointer relative group ${category.barClass}`}
              style={{
                width: `${category.percentage}%`,
              }}
              title={`${category.name}: ${category.percentage}%`}
            >
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10" style={{ fontSize: '11px' }}>
                {category.percentage}%
              </div>
            </div>
          ))}
        </div>

        {/* Category List */}
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={category.name}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {/* Color indicator */}
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${category.badgeClass}`}
                  />
                  
                  {/* Category info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-slate-900 dark:text-white truncate"
                        style={{
                          fontSize: '14px',
                          fontWeight: index === 0 ? '600' : '500',
                        }}
                      >
                        {category.name}
                      </span>
                      {index === 0 && (
                        <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.02em' }}>
                          {t.bestPerforming}
                        </span>
                      )}
                    </div>
                    {index === 0 && (
                      <p className="text-slate-500 dark:text-slate-400" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        {t.bestPerformingDesc}
                      </p>
                    )}
                  </div>
                </div>

                {/* Percentage and count */}
                <div className="text-right flex-shrink-0 ml-4">
                  <div
                    className="text-slate-900 dark:text-white mb-0.5"
                    style={{
                      fontSize: '18px',
                      fontWeight: index === 0 ? '700' : '600',
                    }}
                  >
                    {category.percentage}%
                  </div>
                  <div className="text-slate-500 dark:text-slate-400" style={{ fontSize: '11px', fontWeight: '500' }}>
                    {category.videoCount} {t.videos}
                  </div>
                </div>
              </div>
              
              {/* Divider between items (except last) */}
              {index < categories.length - 1 && (
                <div className="h-px bg-slate-100 dark:bg-slate-800 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="pt-5 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 dark:text-slate-400" style={{ fontSize: '13px', fontWeight: '500' }}>
            {t.totalAnalyzed}
          </span>
          <span className="text-slate-900 dark:text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
            {totalVideos} {t.videos}
          </span>
        </div>
      </div>
    </div>
  );
}
