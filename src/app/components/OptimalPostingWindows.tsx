import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ContentType = 'entertainment' | 'educational' | 'product' | 'mixed';

interface UpcomingContent {
  type: ContentType;
  length: 'Short' | 'Medium' | 'Long';
  hookStyle: 'Fast' | 'Narrative' | 'Informational';
  title: string;
}

interface HeatmapCell {
  hour: number;
  contentType: ContentType;
  stability: 'avoid' | 'stable' | 'highly-stable';
  competition: 'low' | 'medium' | 'high';
  traffic: 'low' | 'medium' | 'high';
  decayRisk: 'low' | 'medium' | 'high';
  tooltip: string;
}

export function OptimalPostingWindows() {
  const [isExplanationExpanded, setIsExplanationExpanded] = React.useState(false);
  const [hoveredCell, setHoveredCell] = React.useState<{ hour: number; type: ContentType } | null>(null);
  const [upcomingContent, setUpcomingContent] = React.useState<UpcomingContent>({
    type: 'mixed',
    length: 'Short',
    hookStyle: 'Fast',
    title: 'Trending sound challenge',
  });

  // Generate heatmap data
  const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const contentTypes: ContentType[] = ['entertainment', 'educational', 'product', 'mixed'];

  // Heatmap data structure
  const getHeatmapData = (): Record<ContentType, HeatmapCell[]> => {
    return {
      entertainment: [
        { hour: 6, contentType: 'entertainment', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'medium', tooltip: 'Very low engagement window for entertainment' },
        { hour: 7, contentType: 'entertainment', stability: 'stable', competition: 'low', traffic: 'medium', decayRisk: 'low', tooltip: 'Morning commute - moderate engagement' },
        { hour: 8, contentType: 'entertainment', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Stable morning engagement' },
        { hour: 9, contentType: 'entertainment', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Work hours - low entertainment traffic' },
        { hour: 10, contentType: 'entertainment', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Work hours - avoid' },
        { hour: 11, contentType: 'entertainment', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Pre-lunch browsing picks up' },
        { hour: 12, contentType: 'entertainment', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Lunch break peak - high competition but stable' },
        { hour: 13, contentType: 'entertainment', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Lunch break continues - very stable' },
        { hour: 14, contentType: 'entertainment', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Post-lunch engagement window' },
        { hour: 15, contentType: 'entertainment', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Afternoon engagement steady' },
        { hour: 16, contentType: 'entertainment', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Late work hours - low traffic' },
        { hour: 17, contentType: 'entertainment', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'After work begins - engagement rising' },
        { hour: 18, contentType: 'entertainment', stability: 'stable', competition: 'high', traffic: 'high', decayRisk: 'medium', tooltip: 'Evening begins - high traffic' },
        { hour: 19, contentType: 'entertainment', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Prime time window - highly stable' },
        { hour: 20, contentType: 'entertainment', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Peak entertainment hours' },
        { hour: 21, contentType: 'entertainment', stability: 'stable', competition: 'high', traffic: 'high', decayRisk: 'medium', tooltip: 'Late evening - still stable' },
        { hour: 22, contentType: 'entertainment', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Night browsing - moderate engagement' },
        { hour: 23, contentType: 'entertainment', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Late night - declining engagement' },
      ],
      educational: [
        { hour: 6, contentType: 'educational', stability: 'highly-stable', competition: 'low', traffic: 'medium', decayRisk: 'low', tooltip: 'Morning learning window - highly engaged audience' },
        { hour: 7, contentType: 'educational', stability: 'highly-stable', competition: 'low', traffic: 'medium', decayRisk: 'low', tooltip: 'Peak morning learning time' },
        { hour: 8, contentType: 'educational', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Still good for educational content' },
        { hour: 9, contentType: 'educational', stability: 'stable', competition: 'low', traffic: 'low', decayRisk: 'medium', tooltip: 'Work hours but selective audience' },
        { hour: 10, contentType: 'educational', stability: 'stable', competition: 'low', traffic: 'low', decayRisk: 'medium', tooltip: 'Lower traffic but stable feedback' },
        { hour: 11, contentType: 'educational', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Pre-lunch distraction window' },
        { hour: 12, contentType: 'educational', stability: 'avoid', competition: 'high', traffic: 'medium', decayRisk: 'high', tooltip: 'Lunch break - entertainment dominates' },
        { hour: 13, contentType: 'educational', stability: 'avoid', competition: 'high', traffic: 'medium', decayRisk: 'high', tooltip: 'Lunch break - avoid' },
        { hour: 14, contentType: 'educational', stability: 'stable', competition: 'low', traffic: 'low', decayRisk: 'medium', tooltip: 'Afternoon learning window' },
        { hour: 15, contentType: 'educational', stability: 'stable', competition: 'low', traffic: 'low', decayRisk: 'medium', tooltip: 'Lower traffic but engaged viewers' },
        { hour: 16, contentType: 'educational', stability: 'stable', competition: 'low', traffic: 'medium', decayRisk: 'medium', tooltip: 'After-work learning starts' },
        { hour: 17, contentType: 'educational', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Evening learning window opens' },
        { hour: 18, contentType: 'educational', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Moderate competition from entertainment' },
        { hour: 19, contentType: 'educational', stability: 'stable', competition: 'high', traffic: 'high', decayRisk: 'medium', tooltip: 'High traffic but entertainment competition' },
        { hour: 20, contentType: 'educational', stability: 'highly-stable', competition: 'medium', traffic: 'high', decayRisk: 'low', tooltip: 'Evening study window - highly stable' },
        { hour: 21, contentType: 'educational', stability: 'highly-stable', competition: 'medium', traffic: 'high', decayRisk: 'low', tooltip: 'Peak learning engagement' },
        { hour: 22, contentType: 'educational', stability: 'stable', competition: 'low', traffic: 'medium', decayRisk: 'medium', tooltip: 'Late night learners' },
        { hour: 23, contentType: 'educational', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Too late - declining engagement' },
      ],
      product: [
        { hour: 6, contentType: 'product', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Too early for product content' },
        { hour: 7, contentType: 'product', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Morning commute - not shopping minded' },
        { hour: 8, contentType: 'product', stability: 'stable', competition: 'low', traffic: 'low', decayRisk: 'medium', tooltip: 'Early browsing begins' },
        { hour: 9, contentType: 'product', stability: 'stable', competition: 'low', traffic: 'medium', decayRisk: 'medium', tooltip: 'Morning shopping window opens' },
        { hour: 10, contentType: 'product', stability: 'highly-stable', competition: 'low', traffic: 'high', decayRisk: 'low', tooltip: 'Peak morning shopping intent' },
        { hour: 11, contentType: 'product', stability: 'highly-stable', competition: 'low', traffic: 'high', decayRisk: 'low', tooltip: 'High conversion intent window' },
        { hour: 12, contentType: 'product', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Lunch break - moderate engagement' },
        { hour: 13, contentType: 'product', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Post-lunch browsing' },
        { hour: 14, contentType: 'product', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Afternoon slump for product content' },
        { hour: 15, contentType: 'product', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Low shopping intent' },
        { hour: 16, contentType: 'product', stability: 'stable', competition: 'low', traffic: 'medium', decayRisk: 'medium', tooltip: 'After-work shopping begins' },
        { hour: 17, contentType: 'product', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Evening shopping window' },
        { hour: 18, contentType: 'product', stability: 'highly-stable', competition: 'medium', traffic: 'high', decayRisk: 'low', tooltip: 'Prime shopping hours' },
        { hour: 19, contentType: 'product', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Peak product engagement' },
        { hour: 20, contentType: 'product', stability: 'stable', competition: 'high', traffic: 'high', decayRisk: 'medium', tooltip: 'High competition from entertainment' },
        { hour: 21, contentType: 'product', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Late evening shopping' },
        { hour: 22, contentType: 'product', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Too late for product content' },
        { hour: 23, contentType: 'product', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Night hours - avoid' },
      ],
      mixed: [
        { hour: 6, contentType: 'mixed', stability: 'stable', competition: 'low', traffic: 'low', decayRisk: 'medium', tooltip: 'Early morning - engaged audience' },
        { hour: 7, contentType: 'mixed', stability: 'stable', competition: 'low', traffic: 'medium', decayRisk: 'medium', tooltip: 'Morning commute window' },
        { hour: 8, contentType: 'mixed', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Morning engagement steady' },
        { hour: 9, contentType: 'mixed', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Work hours - lower engagement' },
        { hour: 10, contentType: 'mixed', stability: 'stable', competition: 'low', traffic: 'medium', decayRisk: 'medium', tooltip: 'Mid-morning browsing' },
        { hour: 11, contentType: 'mixed', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Pre-lunch window' },
        { hour: 12, contentType: 'mixed', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Lunch break peak - highly stable' },
        { hour: 13, contentType: 'mixed', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Lunch break continues' },
        { hour: 14, contentType: 'mixed', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Post-lunch engagement' },
        { hour: 15, contentType: 'mixed', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Afternoon browsing steady' },
        { hour: 16, contentType: 'mixed', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Afternoon low point' },
        { hour: 17, contentType: 'mixed', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'After work - engagement rising' },
        { hour: 18, contentType: 'mixed', stability: 'stable', competition: 'high', traffic: 'high', decayRisk: 'medium', tooltip: 'Evening window opens' },
        { hour: 19, contentType: 'mixed', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Prime time - highly stable' },
        { hour: 20, contentType: 'mixed', stability: 'highly-stable', competition: 'high', traffic: 'high', decayRisk: 'low', tooltip: 'Peak engagement hours' },
        { hour: 21, contentType: 'mixed', stability: 'stable', competition: 'high', traffic: 'high', decayRisk: 'medium', tooltip: 'Late evening - still stable' },
        { hour: 22, contentType: 'mixed', stability: 'stable', competition: 'medium', traffic: 'medium', decayRisk: 'medium', tooltip: 'Night browsing continues' },
        { hour: 23, contentType: 'mixed', stability: 'avoid', competition: 'low', traffic: 'low', decayRisk: 'high', tooltip: 'Late night - declining' },
      ],
    };
  };

  const heatmapData = getHeatmapData();

  // Get recommended windows for current content type
  const getRecommendedWindows = (contentType: ContentType) => {
    const data = heatmapData[contentType];
    const highlyStable = data.filter(cell => cell.stability === 'highly-stable');
    
    if (highlyStable.length === 0) {
      return { primary: null, alternative: null };
    }

    // Primary window (first highly stable block)
    let primaryStart = highlyStable[0].hour;
    let primaryEnd = highlyStable[0].hour;
    
    // Find contiguous block
    for (let i = 1; i < highlyStable.length; i++) {
      if (highlyStable[i].hour === primaryEnd + 1) {
        primaryEnd = highlyStable[i].hour;
      } else {
        break;
      }
    }

    const primaryWindow = {
      start: primaryStart,
      end: primaryEnd,
      confidence: 'High' as const,
      label: 'Recommended Window',
    };

    // Alternative window (second highly stable block if exists)
    const alternativeStartIdx = highlyStable.findIndex(cell => cell.hour > primaryEnd);
    if (alternativeStartIdx === -1) {
      return { primary: primaryWindow, alternative: null };
    }

    let alternativeStart = highlyStable[alternativeStartIdx].hour;
    let alternativeEnd = alternativeStart;
    
    for (let i = alternativeStartIdx + 1; i < highlyStable.length; i++) {
      if (highlyStable[i].hour === alternativeEnd + 1) {
        alternativeEnd = highlyStable[i].hour;
      } else {
        break;
      }
    }

    const alternative = {
      start: alternativeStart,
      end: alternativeEnd,
      confidence: 'Medium' as const,
      label: 'Safer Alternative',
    };

    return { primary: primaryWindow, alternative };
  };

  const recommendedWindows = getRecommendedWindows(upcomingContent.type);

  const getStabilityColor = (stability: string) => {
    switch (stability) {
      case 'highly-stable':
        return 'bg-[#dcfce7] border-[#86efac]';
      case 'stable':
        return 'bg-[#f0fdf4] border-[#bbf7d0]';
      case 'avoid':
      default:
        return 'bg-[#f5f5f5] border-[#e0e0e0]';
    }
  };

  const contentTypeLabels: Record<ContentType, string> = {
    entertainment: 'Entertainment / Emotional',
    educational: 'Educational / Tutorial',
    product: 'Product / Conversion',
    mixed: 'Mixed / General',
  };

  return (
    <div className="max-w-[1800px] mx-auto px-8 py-8 mt-6">
      <div className="bg-white rounded-xl border border-[#e0e0e0] p-8">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-[#1a1a1a] mb-1" style={{ fontSize: '18px', fontWeight: '700' }}>
            Optimal Posting Windows (Content-Aware)
          </h2>
          <p className="text-[#666666]" style={{ fontSize: '13px' }}>
            Optimized for early performance stability, not raw activity
          </p>
        </div>

        {/* Upcoming Content Matcher */}
        <div className="mb-6 p-5 rounded-xl bg-gradient-to-r from-[#fafafa] to-white border-2 border-[#1a1a1a]">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
                <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Your Next Scheduled Content
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-[#999999] mb-0.5" style={{ fontSize: '11px', fontWeight: '600' }}>
                    TITLE
                  </p>
                  <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {upcomingContent.title}
                  </p>
                </div>
                
                <div className="h-8 w-px bg-[#e0e0e0]" />
                
                <div>
                  <p className="text-[#999999] mb-0.5" style={{ fontSize: '11px', fontWeight: '600' }}>
                    CONTENT TYPE
                  </p>
                  <select
                    value={upcomingContent.type}
                    onChange={(e) => setUpcomingContent({ ...upcomingContent, type: e.target.value as ContentType })}
                    className="text-[#1a1a1a] bg-transparent border-none outline-none cursor-pointer"
                    style={{ fontSize: '14px', fontWeight: '600' }}
                  >
                    <option value="entertainment">Entertainment / Emotional</option>
                    <option value="educational">Educational / Tutorial</option>
                    <option value="product">Product / Conversion</option>
                    <option value="mixed">Mixed / General</option>
                  </select>
                </div>
                
                <div className="h-8 w-px bg-[#e0e0e0]" />
                
                <div>
                  <p className="text-[#999999] mb-0.5" style={{ fontSize: '11px', fontWeight: '600' }}>
                    LENGTH
                  </p>
                  <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {upcomingContent.length}
                  </p>
                </div>
                
                <div className="h-8 w-px bg-[#e0e0e0]" />
                
                <div>
                  <p className="text-[#999999] mb-0.5" style={{ fontSize: '11px', fontWeight: '600' }}>
                    HOOK STYLE
                  </p>
                  <p className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {upcomingContent.hookStyle}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-[#666666] mb-1" style={{ fontSize: '11px' }}>
                This view is tailored to
              </p>
              <p className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '700' }}>
                your upcoming post
              </p>
            </div>
          </div>
        </div>

        {/* Decision Heatmap */}
        <div className="mb-6 relative">
          {/* Y-axis labels */}
          <div className="flex">
            <div className="w-44 flex-shrink-0" />
            
            {/* X-axis labels */}
            <div className="flex-1 grid gap-1 mb-2" style={{ gridTemplateColumns: `repeat(${hours.length}, minmax(0, 1fr))` }}>
              {hours.map((hour) => (
                <div key={hour} className="text-center">
                  <span className="text-[#999999]" style={{ fontSize: '11px', fontWeight: '600' }}>
                    {hour === 12 ? '12PM' : hour > 12 ? `${hour - 12}PM` : `${hour}AM`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap rows */}
          {contentTypes.map((type) => {
            const isHighlighted = type === upcomingContent.type;
            
            return (
              <div 
                key={type} 
                className={`flex items-center mb-2 transition-opacity ${
                  isHighlighted ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {/* Row label */}
                <div className="w-44 flex-shrink-0 pr-4">
                  <div className={`py-3 px-4 rounded-lg border-2 ${
                    isHighlighted 
                      ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' 
                      : 'bg-white text-[#666666] border-[#e0e0e0]'
                  }`}>
                    <p style={{ fontSize: '13px', fontWeight: isHighlighted ? '700' : '600' }}>
                      {contentTypeLabels[type]}
                    </p>
                  </div>
                </div>

                {/* Cells */}
                <div className="flex-1 grid gap-1 relative" style={{ gridTemplateColumns: `repeat(${hours.length}, minmax(0, 1fr))` }}>
                  {heatmapData[type].map((cell) => {
                    const isHovered = hoveredCell?.hour === cell.hour && hoveredCell?.type === type;
                    const isInPrimaryWindow = 
                      isHighlighted &&
                      recommendedWindows.primary &&
                      cell.hour >= recommendedWindows.primary.start && 
                      cell.hour <= recommendedWindows.primary.end;
                    const isInAlternativeWindow = 
                      isHighlighted &&
                      recommendedWindows.alternative &&
                      cell.hour >= recommendedWindows.alternative.start && 
                      cell.hour <= recommendedWindows.alternative.end;
                    
                    return (
                      <div
                        key={cell.hour}
                        className={`aspect-square rounded-lg border-2 transition-all relative ${
                          getStabilityColor(cell.stability)
                        } ${
                          isInPrimaryWindow ? 'ring-2 ring-[#16a34a] ring-offset-2' : ''
                        } ${
                          isInAlternativeWindow ? 'ring-2 ring-[#f59e0b] ring-offset-2' : ''
                        } ${
                          isHovered ? 'scale-110 z-10 shadow-lg' : ''
                        }`}
                        onMouseEnter={() => setHoveredCell({ hour: cell.hour, type })}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        {/* Risk indicators on hover */}
                        {isHovered && isHighlighted && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 z-20">
                            <div className="bg-[#1a1a1a] text-white rounded-lg p-3 shadow-xl">
                              <p className="mb-2" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                                {cell.tooltip}
                              </p>
                              <div className="flex gap-2 text-[10px] text-white/70">
                                <span>Competition: {cell.competition}</span>
                                <span>•</span>
                                <span>Traffic: {cell.traffic}</span>
                                <span>•</span>
                                <span>Decay: {cell.decayRisk}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Window overlays */}
                  {isHighlighted && recommendedWindows.primary && (
                    <>
                      {/* Primary window */}
                      <div
                        className="absolute top-0 h-full pointer-events-none"
                        style={{
                          left: `${((recommendedWindows.primary.start - hours[0]) / hours.length) * 100}%`,
                          width: `${((recommendedWindows.primary.end - recommendedWindows.primary.start + 1) / hours.length) * 100}%`,
                        }}
                      >
                        <div className="absolute -top-8 left-0 px-2 py-1 rounded-md bg-[#16a34a] text-white whitespace-nowrap">
                          <span style={{ fontSize: '10px', fontWeight: '700' }}>
                            {recommendedWindows.primary.label}
                          </span>
                        </div>
                      </div>

                      {/* Alternative window */}
                      {recommendedWindows.alternative && (
                        <div
                          className="absolute top-0 h-full pointer-events-none"
                          style={{
                            left: `${((recommendedWindows.alternative.start - hours[0]) / hours.length) * 100}%`,
                            width: `${((recommendedWindows.alternative.end - recommendedWindows.alternative.start + 1) / hours.length) * 100}%`,
                          }}
                        >
                          <div className="absolute -top-8 left-0 px-2 py-1 rounded-md bg-[#f59e0b] text-white whitespace-nowrap">
                            <span style={{ fontSize: '10px', fontWeight: '700' }}>
                              {recommendedWindows.alternative.label}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-6 pb-6 border-b border-[#e0e0e0]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#dcfce7] border-2 border-[#86efac]" />
            <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
              Highly Stable
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#f0fdf4] border-2 border-[#bbf7d0]" />
            <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
              Stable
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#f5f5f5] border-2 border-[#e0e0e0]" />
            <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
              Avoid
            </span>
          </div>
        </div>

        {/* Explanation Layer */}
        <div>
          <button
            onClick={() => setIsExplanationExpanded(!isExplanationExpanded)}
            className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-[#f5f5f5] transition-colors"
          >
            <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
              How this heatmap works
            </span>
            {isExplanationExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#666666]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#666666]" />
            )}
          </button>

          {isExplanationExpanded && (
            <div className="px-4 pb-4 space-y-3">
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                • Colors represent early engagement stability, not audience volume.
              </p>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                • Stability is measured using completion rate and engagement velocity.
              </p>
              <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                • Best posting times differ by content type.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
