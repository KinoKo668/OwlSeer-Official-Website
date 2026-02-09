import React from 'react';
import { ChevronDown, CheckCircle, TrendingUp, FileText, ArrowRight } from 'lucide-react';

interface InsightAccordionProps {
  headline: string;
  signal: string;
  signalDelta?: string;
  isPositive?: boolean;
  evidence: string[];
  confidence: 'high' | 'medium' | 'low';
  defaultExpanded?: boolean;
  onUsePlan?: () => void;
  onViewEvidence?: () => void;
}

export function InsightAccordion({
  headline,
  signal,
  signalDelta,
  isPositive,
  evidence,
  confidence,
  defaultExpanded = false,
  onUsePlan,
  onViewEvidence,
}: InsightAccordionProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

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
    low: {
      label: 'Low',
      bg: 'bg-[#f5f5f5]',
      text: 'text-[#666666]',
      border: 'border-[#e0e0e0]',
    },
  };

  const currentConfidence = confidenceConfig[confidence];

  return (
    <div className="border border-[#e0e0e0] rounded-[12px] overflow-hidden bg-white mb-3">
      {/* Accordion header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 flex items-center justify-between gap-3 hover:bg-[#fafafa] transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
          <span className="text-[#1a1a1a] flex-1" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.4' }}>
            {headline}
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className={`px-2.5 py-1 rounded-full border ${currentConfidence.bg} ${currentConfidence.text} ${currentConfidence.border}`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {currentConfidence.label}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#666666] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* Accordion content */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-[#e0e0e0]">
          {/* Signal */}
          <div className="pt-4 mb-4">
            <div className="text-[#999999] mb-2" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Signal
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '700' }}>
                {signal}
              </span>
              {signalDelta && (
                <span
                  className={`flex items-center ${isPositive ? 'text-[#10b981]' : isPositive === false ? 'text-[#dc2626]' : 'text-[#666666]'}`}
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  {signalDelta}
                </span>
              )}
            </div>
          </div>

          {/* Evidence */}
          <div className="mb-4">
            <div className="text-[#999999] mb-2" style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Evidence
            </div>
            <div className="space-y-1.5">
              {evidence.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '500', lineHeight: '1.5' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#e0e0e0]">
            {onUsePlan && (
              <button
                onClick={onUsePlan}
                className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Use in plan
              </button>
            )}
            {onViewEvidence && (
              <button
                onClick={onViewEvidence}
                className="text-[#10b981] hover:text-[#059669] transition-colors flex items-center gap-1"
                style={{ fontSize: '12px', fontWeight: '600' }}
              >
                <span>View evidence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
