import React, { useState } from 'react';

interface DataPoint {
  day: string;
  growth: number;
}

interface CustomBarChartProps {
  data: DataPoint[];
  width?: number;
  height?: number;
}

export function CustomBarChart({
  data,
  width = 520,
  height = 200,
}: CustomBarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Chart dimensions
  const padding = { top: 20, right: 30, bottom: 30, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Find min and max values for scaling
  const values = data.map(d => d.growth);
  const maxValue = Math.max(...values) * 1.1; // Add 10% padding at top
  const minValue = 0;
  const valueRange = maxValue - minValue;

  // Helper function to format numbers
  const formatNumber = (num: number) => {
    return num.toString();
  };

  // Scale functions
  const barWidth = chartWidth / data.length * 0.7; // 70% of available space
  const barSpacing = chartWidth / data.length;

  const getX = (index: number) => {
    return padding.left + index * barSpacing + (barSpacing - barWidth) / 2;
  };

  const getY = (value: number) => {
    const ratio = value / valueRange;
    return padding.top + chartHeight - ratio * chartHeight;
  };

  const getBarHeight = (value: number) => {
    const ratio = value / valueRange;
    return ratio * chartHeight;
  };

  // Y-axis ticks
  const yTicks = 5;
  const yTickValues = Array.from({ length: yTicks }, (_, i) => {
    return Math.round((maxValue / (yTicks - 1)) * i);
  });

  // X-axis ticks (show every 5th to avoid crowding)
  const xTickIndices = data.map((_, i) => i).filter(i => i % 5 === 0 || i === data.length - 1);

  return (
    <div className="relative" style={{ width: '100%', height: `${height}px` }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Grid lines */}
        {yTickValues.map((value, i) => {
          const y = getY(value);
          return (
            <line
              key={`grid-${i}`}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="#E5E7EB"
              strokeDasharray="3 3"
            />
          );
        })}

        {/* Y-axis */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#E5E7EB"
          strokeWidth={1}
        />

        {/* X-axis */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#E5E7EB"
          strokeWidth={1}
        />

        {/* Y-axis labels */}
        {yTickValues.map((value, i) => {
          const y = getY(value);
          return (
            <text
              key={`y-label-${i}`}
              x={padding.left - 8}
              y={y}
              textAnchor="end"
              dominantBaseline="middle"
              fill="#9CA3AF"
              fontSize="11"
            >
              {formatNumber(value)}
            </text>
          );
        })}

        {/* X-axis labels */}
        {xTickIndices.map(index => {
          const x = getX(index) + barWidth / 2;
          return (
            <text
              key={`x-label-${index}`}
              x={x}
              y={height - padding.bottom + 15}
              textAnchor="middle"
              fill="#9CA3AF"
              fontSize="11"
            >
              {data[index].day}
            </text>
          );
        })}

        {/* Bars */}
        {data.map((d, i) => {
          const x = getX(i);
          const y = getY(d.growth);
          const barHeight = getBarHeight(d.growth);
          const isHovered = hoveredIndex === i;

          return (
            <g key={`bar-${i}`}>
              {/* Bar with rounded top */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={isHovered ? '#0D9488' : '#0F766E'}
                rx={4}
                ry={4}
                style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              {/* Cover bottom to make sharp corners */}
              {barHeight > 4 && (
                <rect
                  x={x}
                  y={height - padding.bottom - 2}
                  width={barWidth}
                  height={2}
                  fill={isHovered ? '#0D9488' : '#0F766E'}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredIndex !== null && (
        <div
          className="absolute bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 pointer-events-none shadow-lg"
          style={{
            left: `${((getX(hoveredIndex) + barWidth / 2) / width) * 100}%`,
            top: `${(getY(data[hoveredIndex].growth) / height) * 100}%`,
            transform: 'translate(-50%, -120%)',
          }}
        >
          <div className="text-[#111827] mb-1" style={{ fontSize: '12px', fontWeight: '600' }}>
            Day {data[hoveredIndex].day}
          </div>
          <div className="text-[#374151]" style={{ fontSize: '11px' }}>
            Followers: +{data[hoveredIndex].growth}
          </div>
        </div>
      )}
    </div>
  );
}
