import React from 'react';

interface BenchmarkBarProps {
  /** User's percentile value (0-100) */
  userPercentile: number;
  /** Metric name (e.g., "Engagement Rate", "View Duration") */
  metricName: string;
  /** User's actual value (e.g., "5.2%", "48s") */
  userValue: string;
  /** Optional: Metric description/formula */
  description?: string;
  /** Optional: Custom P50 position (default: 50) */
  p50?: number;
  /** Optional: Custom P80 position (default: 80) */
  p80?: number;
  /** Optional: Show description text below bar */
  showDescription?: boolean;
  /** Optional: Path to P80 guidance */
  pathToP80?: string[];
}

export function BenchmarkBar({
  userPercentile,
  metricName,
  userValue,
  description,
  p50 = 50,
  p80 = 80,
  showDescription = true,
  pathToP80,
}: BenchmarkBarProps) {
  // Determine user's position description
  const getPositionDescription = () => {
    if (userPercentile >= p80) return 'Top Performer';
    if (userPercentile >= p50) return 'Above Median';
    if (userPercentile >= 30) return 'Near Median';
    return 'Below Median';
  };

  const positionDescription = getPositionDescription();

  // Color based on position
  const getUserColor = () => {
    if (userPercentile >= p80) return '#16a34a'; // green
    if (userPercentile >= p50) return '#1a1a1a'; // black
    if (userPercentile >= 30) return '#666666'; // dark gray
    return '#999999'; // gray
  };

  const userColor = getUserColor();

  return (
    <div className="w-full">
      {/* Metric Name and Description */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '600' }}>
            {metricName}
          </div>
          <div className="text-[#666666]" style={{ fontSize: '13px' }}>
            You: <span className="text-[#1a1a1a] font-semibold">{userValue}</span>
          </div>
        </div>
        {description && (
          <div className="text-[#999999]" style={{ fontSize: '12px' }}>
            {description}
          </div>
        )}
      </div>

      {/* Benchmark Bar */}
      <div className="relative">
        {/* Background bar */}
        <div className="h-2 bg-[#f0f0f0] rounded-full relative overflow-visible">
          {/* P50 marker line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#cccccc]"
            style={{ left: `${p50}%` }}
          />
          
          {/* P80 marker line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#cccccc]"
            style={{ left: `${p80}%` }}
          />

          {/* User position marker */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${userPercentile}%` }}
          >
            <div
              className="w-4 h-4 rounded-full border-2 border-white shadow-md"
              style={{ backgroundColor: userColor }}
            />
          </div>
        </div>

        {/* Labels below bar */}
        <div className="relative h-6 mt-2">
          {/* P50 label */}
          <div
            className="absolute -translate-x-1/2"
            style={{ left: `${p50}%` }}
          >
            <div className="text-[#999999] text-center" style={{ fontSize: '11px', fontWeight: '500' }}>
              P50
            </div>
          </div>

          {/* P80 label */}
          <div
            className="absolute -translate-x-1/2"
            style={{ left: `${p80}%` }}
          >
            <div className="text-[#999999] text-center" style={{ fontSize: '11px', fontWeight: '500' }}>
              P80
            </div>
          </div>
        </div>
      </div>

      {/* Position Description */}
      {showDescription && (
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: userColor }}
            />
            <span className="text-[#666666]" style={{ fontSize: '13px' }}>
              {positionDescription}
            </span>
          </div>
          <span className="text-[#999999]" style={{ fontSize: '12px' }}>
            {userPercentile}th percentile
          </span>
        </div>
      )}

      {/* Path to P80 Guidance */}
      {pathToP80 && pathToP80.length > 0 && userPercentile < p80 && (
        <div className="mt-4 p-3 rounded-lg bg-[#fafafa] border border-[#e0e0e0]">
          <div className="text-[#666666] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            Creators above P80 typically:
          </div>
          <div className="space-y-1.5">
            {pathToP80.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-[#999999]" style={{ fontSize: '12px' }}>•</span>
                <span className="text-[#1a1a1a]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}