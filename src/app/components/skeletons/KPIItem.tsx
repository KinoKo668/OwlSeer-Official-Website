import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPIItemProps {
  label: string;
  value: string;
  delta: string;
  isPositive?: boolean | null;
}

export function KPIItem({ label, value, delta, isPositive }: KPIItemProps) {
  return (
    <div className="flex flex-col">
      <span className="text-[#999999] mb-1" style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
          {value}
        </span>
        <span
          className={`flex items-center gap-0.5 ${
            isPositive === true
              ? 'text-[#16a34a]'
              : isPositive === false
              ? 'text-[#dc2626]'
              : 'text-[#666666]'
          }`}
          style={{ fontSize: '11px', fontWeight: '500' }}
        >
          {isPositive === true && <TrendingUp className="w-3 h-3" />}
          {isPositive === false && <TrendingDown className="w-3 h-3" />}
          {delta}
        </span>
      </div>
    </div>
  );
}
