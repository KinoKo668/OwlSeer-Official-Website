import React from 'react';

interface ScoreDimensionProps {
  label: string;
  value: number | string;
  max?: number;
  type?: 'numeric' | 'trend';
}

export function ScoreDimension({ label, value, max = 10, type = 'numeric' }: ScoreDimensionProps) {
  const numericValue = typeof value === 'number' ? value : 0;
  const percentage = type === 'numeric' ? (numericValue / max) * 100 : 0;

  // Color based on score
  const getColor = (val: number) => {
    if (val >= 8) return '#10b981'; // green
    if (val >= 6) return '#f59e0b'; // amber
    return '#dc2626'; // red
  };

  const color = type === 'numeric' ? getColor(numericValue) : '#10b981';

  return (
    <div className="flex items-center justify-between py-2 border-b border-[#f5f5f5] last:border-b-0">
      <span className="text-[#666666] flex-1" style={{ fontSize: '12px', fontWeight: '500' }}>
        {label}
      </span>
      
      {type === 'numeric' ? (
        <>
          <div className="flex-1 mx-3 h-1.5 bg-[#f5f5f5] rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all"
              style={{ 
                width: `${percentage}%`,
                backgroundColor: color
              }}
            />
          </div>
          <span 
            className="flex-shrink-0 w-8 text-right" 
            style={{ 
              fontSize: '13px', 
              fontWeight: '700',
              color: color
            }}
          >
            {numericValue.toFixed(1)}
          </span>
        </>
      ) : (
        <span 
          className="flex-shrink-0 px-2.5 py-0.5 rounded-full bg-[#d1fae5] border border-[#a7f3d0]" 
          style={{ 
            fontSize: '11px', 
            fontWeight: '600',
            color: '#065f46'
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
}
