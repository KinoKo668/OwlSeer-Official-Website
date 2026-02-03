import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

interface IssueRowProps {
  title: string;
  severity: 'high' | 'medium' | 'low';
  cause: string;
  fix?: string;
  onFixWithRecommendation?: () => void;
  onViewEvidence?: () => void;
}

export function IssueRow({
  title,
  severity,
  cause,
  fix,
  onFixWithRecommendation,
  onViewEvidence,
}: IssueRowProps) {
  // Severity configuration
  const severityConfig = {
    high: {
      label: 'High',
      bg: 'bg-[#fee2e2]',
      text: 'text-[#991b1b]',
      border: 'border-[#fecaca]',
      iconColor: 'text-[#dc2626]',
    },
    medium: {
      label: 'Medium',
      bg: 'bg-[#fef3c7]',
      text: 'text-[#92400e]',
      border: 'border-[#fde68a]',
      iconColor: 'text-[#f59e0b]',
    },
    low: {
      label: 'Low',
      bg: 'bg-[#f5f5f5]',
      text: 'text-[#666666]',
      border: 'border-[#e0e0e0]',
      iconColor: 'text-[#999999]',
    },
  };

  const currentSeverity = severityConfig[severity];

  return (
    <div className="flex items-start gap-3 p-4 border border-[#e0e0e0] rounded-lg mb-3 last:mb-0">
      {/* Icon */}
      <div className={`flex-shrink-0 mt-0.5`}>
        <AlertTriangle className={`w-5 h-5 ${currentSeverity.iconColor}`} />
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Title row with severity */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="text-[#1a1a1a] flex-1" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.4' }}>
            {title}
          </h4>
          <span
            className={`px-2.5 py-1 rounded-full border flex-shrink-0 ${currentSeverity.bg} ${currentSeverity.text} ${currentSeverity.border}`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {currentSeverity.label}
          </span>
        </div>

        {/* Cause */}
        <p className="text-[#666666] mb-1" style={{ fontSize: '12px', lineHeight: '1.5' }}>
          {cause}
        </p>

        {/* Fix (optional) */}
        {fix && (
          <p className="text-[#999999] mb-3" style={{ fontSize: '11px', lineHeight: '1.5' }}>
            {fix}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4 pt-2 border-t border-[#e0e0e0]">
          <button
            onClick={onFixWithRecommendation}
            className="text-[#10b981] hover:text-[#059669] transition-colors flex items-center gap-1"
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            <span>Fix with recommendation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          {onViewEvidence && (
            <>
              <span className="text-[#e0e0e0]">•</span>
              <button
                onClick={onViewEvidence}
                className="text-[#666666] hover:text-[#1a1a1a] transition-colors flex items-center gap-1"
                style={{ fontSize: '12px', fontWeight: '600' }}
              >
                <span>View evidence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
