import React from 'react';
import { TrendingUp, Sparkles, PieChart } from 'lucide-react';

interface CategoryData {
  name: string;
  percentage: number;
  videoCount: number;
  color: string;
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
      color: '#1a1a1a',
    },
    {
      name: 'Product Comparisons',
      percentage: 33,
      videoCount: 10,
      color: '#666666',
    },
    {
      name: 'Setup Guides & Tips',
      percentage: 20,
      videoCount: 6,
      color: '#cccccc',
    },
  ];

  const bestPerformingCategory = categories[0];
  const totalVideos = categories.reduce((sum, cat) => sum + cat.videoCount, 0);

  return (
    <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-[#1a1a1a]" />
          <h3 className="text-[#1a1a1a]" style={{ fontSize: '16px', fontWeight: '600' }}>
            {t.contentFocus}
          </h3>
        </div>
        <span className="text-[#999999]" style={{ fontSize: '12px', fontWeight: '500' }}>
          {t.last30Videos}
        </span>
      </div>

      {/* Category Distribution Visualization */}
      <div className="mb-6">
        {/* Stacked Bar */}
        <div className="flex h-2.5 rounded-full overflow-hidden mb-5 bg-[#f5f5f5]">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="transition-all hover:opacity-80 cursor-pointer relative group"
              style={{
                width: `${category.percentage}%`,
                backgroundColor: category.color,
              }}
              title={`${category.name}: ${category.percentage}%`}
            >
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#1a1a1a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10" style={{ fontSize: '11px' }}>
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
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: category.color }}
                  />
                  
                  {/* Category info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[#1a1a1a] truncate"
                        style={{
                          fontSize: '14px',
                          fontWeight: index === 0 ? '600' : '500',
                        }}
                      >
                        {category.name}
                      </span>
                      {index === 0 && (
                        <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-[#1a1a1a] text-white" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.02em' }}>
                          {t.bestPerforming}
                        </span>
                      )}
                    </div>
                    {index === 0 && (
                      <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        {t.bestPerformingDesc}
                      </p>
                    )}
                  </div>
                </div>

                {/* Percentage and count */}
                <div className="text-right flex-shrink-0 ml-4">
                  <div
                    className="text-[#1a1a1a] mb-0.5"
                    style={{
                      fontSize: '18px',
                      fontWeight: index === 0 ? '700' : '600',
                    }}
                  >
                    {category.percentage}%
                  </div>
                  <div className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '500' }}>
                    {category.videoCount} {t.videos}
                  </div>
                </div>
              </div>
              
              {/* Divider between items (except last) */}
              {index < categories.length - 1 && (
                <div className="h-px bg-[#f0f0f0] mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="pt-5 border-t border-[#e0e0e0]">
        <div className="flex items-center justify-between">
          <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '500' }}>
            {t.totalAnalyzed}
          </span>
          <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
            {totalVideos} {t.videos}
          </span>
        </div>
      </div>
    </div>
  );
}
