import React from 'react';
import { Users, BarChart3, Activity, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { PricingModal } from './PricingModal';

type ProfileDimension = 'category' | 'structure';
type InsightType = 'distribution' | 'performance' | 'stability';

interface TopItem {
  name: string;
  percentage: number;
  color: string;
}

interface AccountProfileSnapshotProps {
  t: any; // translations object
  onNavigate?: (page: string) => void;
}

export function AccountProfileSnapshot({ t, onNavigate }: AccountProfileSnapshotProps) {
  const [videoCount, setVideoCount] = React.useState<5 | 30>(30);
  const [showPricingModal, setShowPricingModal] = React.useState(false);

  // Mock data for Content Category
  const categoryData = {
    top3: [
      { name: 'Tech Reviews & Unboxing', percentage: 47, color: 'var(--chart-1)' },
      { name: 'Product Comparisons', percentage: 33, color: 'var(--chart-2)' },
      { name: 'Setup Guides & Tips', percentage: 20, color: 'var(--chart-3)' },
    ],
  };

  // Mock data for Content Structure
  const structureData = {
    top3: [
      { name: 'Three Segments (Hook → Body → End)', percentage: 52, color: 'var(--chart-1)' },
      { name: 'Two Segments (Problem → Solution)', percentage: 30, color: 'var(--chart-2)' },
      { name: 'Single Segment (ASMR/Short)', percentage: 18, color: 'var(--chart-3)' },
    ],
  };

  return (
    <>
      <div className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 bg-muted rounded-lg">
                <Users className="w-4 h-4 text-card-foreground" />
              </div>
              <h3 className="text-card-foreground font-semibold text-base">
                Content Profile
              </h3>
            </div>
            <p className="text-muted-foreground text-xs ml-0.5">
              Based on your last {videoCount} videos
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-3">
             {/* Dev Tool Toggle */}
            <div className="flex items-center gap-0.5 bg-muted rounded-lg p-0.5">
              <button
                onClick={() => setVideoCount(5)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  videoCount === 5
                    ? 'bg-card text-card-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-card-foreground'
                }`}
              >
                5
              </button>
              <button
                onClick={() => setVideoCount(30)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  videoCount === 30
                    ? 'bg-card text-card-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-card-foreground'
                }`}
              >
                30
              </button>
            </div>

            <button 
              onClick={() => setShowPricingModal(true)}
              className="flex items-center gap-1.5 text-xs font-semibold text-card-foreground hover:text-primary transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Analyze More
            </button>
          </div>
        </div>

        {/* Top 3 Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Top 3 Categories */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                Top Categories
              </span>
            </div>
            <div className="space-y-3">
              {categoryData.top3.map((item, index) => (
                <div key={item.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-card-foreground">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top 3 Structures */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                Top Structures
              </span>
            </div>
            <div className="space-y-3">
              {structureData.top3.map((item, index) => (
                <div key={item.name} className="group">
                   <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-card-foreground truncate max-w-[140px]" title={item.name}>
                        {item.name.split('(')[0].trim()}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight Summary */}
        <div className="p-4 rounded-lg bg-muted/30 mb-4">
          <p className="text-sm text-muted-foreground">
            Your content is highly focused and structurally consistent.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center pt-2">
          <button 
            onClick={() => onNavigate?.('library')}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-card-foreground transition-colors group"
          >
            <span className="text-xs font-medium">Review recent videos</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Pricing Modal */}
      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
    </>
  );
}
