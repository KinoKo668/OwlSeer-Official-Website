import React from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface InsightAccordionItemProps {
  signal: string;
  hypothesis: string;
  evidence: string[];
  confidence: 'high' | 'medium' | 'low';
  isExpanded?: boolean;
  onToggle?: () => void;
  onViewEvidence?: () => void;
}

export function InsightAccordionItem({
  signal,
  hypothesis,
  evidence,
  confidence,
  isExpanded = false,
  onToggle,
  onViewEvidence,
}: InsightAccordionItemProps) {
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
    low: {
      label: 'Low',
      bg: 'bg-[#fee2e2]',
      text: 'text-[#991b1b]',
      border: 'border-[#fecaca]',
    },
  };

  const currentConfidence = confidenceConfig[confidence];

  return (
    <div className="border border-[#e0e0e0] rounded-[12px] overflow-hidden bg-white">
      {/* Header - clickable to toggle */}
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#fafafa] transition-colors"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#10b981]" />
          <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
            {signal}
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-[#666666]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#666666]" />
        )}
      </button>

      {/* Expandable content */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-[#e0e0e0]">
          {/* Hypothesis */}
          <div className="mb-3 mt-3">
            <p className="text-[#666666] mb-2" style={{ fontSize: '13px', fontWeight: '400', lineHeight: '1.5' }}>
              {hypothesis}
            </p>
          </div>

          {/* Evidence */}
          <div className="mb-3">
            <span className="text-[#999999] block mb-2" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Evidence
            </span>
            <ul className="space-y-1.5">
              {evidence.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#10b981] mt-1">•</span>
                  <span className="text-[#666666] flex-1" style={{ fontSize: '12px', fontWeight: '400' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Confidence pill */}
          <div className="flex items-center justify-between">
            <span
              className={`px-2.5 py-1 rounded-full border ${currentConfidence.bg} ${currentConfidence.text} ${currentConfidence.border}`}
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              Confidence: {currentConfidence.label}
            </span>

            <button
              onClick={onViewEvidence}
              className="text-[#10b981] hover:text-[#059669] transition-colors"
              style={{ fontSize: '12px', fontWeight: '600' }}
            >
              View evidence
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
