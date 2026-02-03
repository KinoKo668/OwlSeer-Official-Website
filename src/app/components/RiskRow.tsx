import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

interface RiskRowProps {
  title: string;
  trigger: string;
  onAddMitigation?: () => void;
}

export function RiskRow({ title, trigger, onAddMitigation }: RiskRowProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-[#fef3c7] border border-[#fde68a] rounded-lg">
      {/* Warning icon */}
      <div className="flex-shrink-0 mt-0.5">
        <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Risk title */}
        <p className="text-[#1a1a1a] mb-1" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3' }}>
          {title}
        </p>

        {/* Trigger */}
        <p className="text-[#92400e] mb-2" style={{ fontSize: '11px', lineHeight: '1.4' }}>
          <span className="font-semibold">Trigger:</span> {trigger}
        </p>

        {/* Action link */}
        <button
          onClick={onAddMitigation}
          className="text-[#f59e0b] hover:text-[#d97706] transition-colors flex items-center gap-1"
          style={{ fontSize: '12px', fontWeight: '600' }}
        >
          <span>Add mitigation</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
