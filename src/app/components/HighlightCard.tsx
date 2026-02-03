import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HighlightCardProps {
  title: string;
  highlight: string;
  evidence: string;
  confidence: 'high' | 'medium';
  onUsePlan?: () => void;
  onViewEvidence?: () => void;
}

export function HighlightCard({
  title,
  highlight,
  evidence,
  confidence,
  onUsePlan,
  onViewEvidence,
}: HighlightCardProps) {
  // Confidence configuration
  const confidenceConfig = {
    high: {
      label: 'High',
      bg: 'bg-[#d1fae5]',
      text: 'text-[#065f46]',
      border: 'border-[#a7f3d0]',
    },
    medium: {
      label: 'Medium',
      bg: 'bg-[#fef3c7]',
      text: 'text-[#92400e]',
      border: 'border-[#fde68a]',
    },
  };

  const currentConfidence = confidenceConfig[confidence];

  return (
    <div className="bg-[#f0fdf4] border border-[#d1fae5] rounded-[12px] p-4 flex flex-col h-full">
      {/* Header with icon and confidence */}
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span
          className={`px-2.5 py-1 rounded-full border flex-shrink-0 ${currentConfidence.bg} ${currentConfidence.text} ${currentConfidence.border}`}
          style={{ fontSize: '11px', fontWeight: '600' }}
        >
          {currentConfidence.label}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-[#1a1a1a] mb-2" style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.3' }}>
        {title}
      </h4>

      {/* Highlight text */}
      <p className="text-[#666666] mb-3 flex-1" style={{ fontSize: '12px', lineHeight: '1.5' }}>
        {highlight}
      </p>

      {/* Evidence chip */}
      <div className="mb-4">
        <span
          className="px-2.5 py-1 rounded-full border bg-white text-[#10b981] border-[#d1fae5] inline-block"
          style={{ fontSize: '11px', fontWeight: '600' }}
        >
          {evidence}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-3 border-t border-[#d1fae5]">
        <button
          onClick={onUsePlan}
          className="px-3 py-1.5 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors"
          style={{ fontSize: '12px', fontWeight: '600' }}
        >
          Use in plan
        </button>
        <button
          onClick={onViewEvidence}
          className="text-[#10b981] hover:text-[#059669] transition-colors flex items-center gap-1"
          style={{ fontSize: '11px', fontWeight: '600' }}
        >
          <span>View evidence</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
