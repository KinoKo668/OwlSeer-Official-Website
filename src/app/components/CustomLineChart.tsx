import React, { useState } from 'react';

interface DataPoint {
  video: string;
  views: number;
  date: string;
}

interface CustomLineChartProps {
  data: DataPoint[];
  medianValue: number;
  categoryP50: number;
  width?: number;
  height?: number;
}

export function CustomLineChart({
  data,
  medianValue,
  categoryP50,
  width = 520,
  height = 200,
}: CustomLineChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Chart dimensions
  const padding = { top: 20, right: 40, bottom: 30, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Find min and max values for scaling
  const values = data.map(d => d.views);
  const maxValue = Math.max(...values, categoryP50);
  const minValue = Math.min(...values, categoryP50) * 0.9;
  const valueRange = maxValue - minValue;

  // Helper function to format numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  // Scale functions
  const getX = (index: number) => {
    return padding.left + (index / (data.length - 1)) * chartWidth;
  };

  const getY = (value: number) => {
    const ratio = (value - minValue) / valueRange;
    return padding.top + chartHeight - ratio * chartHeight;
  };

  // Generate path for line
  const linePath = data
    .map((d, i) => {
      const x = getX(i);
      const y = getY(d.views);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  // Y-axis ticks
  const yTicks = 5;
  const yTickValues = Array.from({ length: yTicks }, (_, i) => {
    return minValue + (valueRange / (yTicks - 1)) * i;
  });

  // X-axis ticks (show every 3rd)
  const xTickIndices = data.map((_, i) => i).filter(i => i % 3 === 0);

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
          const x = getX(index);
          return (
            <text
              key={`x-label-${index}`}
              x={x}
              y={height - padding.bottom + 15}
              textAnchor="middle"
              fill="#9CA3AF"
              fontSize="11"
            >
              {data[index].video}
            </text>
          );
        })}

        {/* Reference line for Category P50 */}
        <line
          x1={padding.left}
          y1={getY(categoryP50)}
          x2={width - padding.right}
          y2={getY(categoryP50)}
          stroke="#9CA3AF"
          strokeDasharray="5 5"
          strokeWidth={1}
        />
        <text
          x={width - padding.right + 5}
          y={getY(categoryP50)}
          fill="#9CA3AF"
          fontSize="10"
          dominantBaseline="middle"
        >
          P50
        </text>

        {/* Line path */}
        <path
          d={linePath}
          fill="none"
          stroke="#0F766E"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {data.map((d, i) => {
          const x = getX(i);
          const y = getY(d.views);
          const isHovered = hoveredIndex === i;
          return (
            <circle
              key={`point-${i}`}
              cx={x}
              cy={y}
              r={isHovered ? 5 : 3}
              fill="#0F766E"
              stroke="white"
              strokeWidth={isHovered ? 2 : 0}
              style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}

        {/* Invisible larger circles for better hover detection */}
        {data.map((d, i) => {
          const x = getX(i);
          const y = getY(d.views);
          return (
            <circle
              key={`hover-area-${i}`}
              cx={x}
              cy={y}
              r={10}
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredIndex !== null && (
        <div
          className="absolute bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 pointer-events-none shadow-lg"
          style={{
            left: `${(getX(hoveredIndex) / width) * 100}%`,
            top: `${(getY(data[hoveredIndex].views) / height) * 100}%`,
            transform: 'translate(-50%, -120%)',
          }}
        >
          <div className="text-[#111827] mb-1" style={{ fontSize: '12px', fontWeight: '600' }}>
            Video {data[hoveredIndex].video}
          </div>
          <div className="text-[#374151]" style={{ fontSize: '11px' }}>
            Views: {formatNumber(data[hoveredIndex].views)}
          </div>
          <div className="text-[#9CA3AF]" style={{ fontSize: '10px' }}>
            {data[hoveredIndex].date}
          </div>
        </div>
      )}
    </div>
  );
}
