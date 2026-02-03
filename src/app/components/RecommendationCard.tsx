import React from 'react';
import { Sparkles, Copy, ArrowRight, Check } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  priority: 'p1' | 'p2' | 'p3';
  confidence: 'high' | 'medium' | 'low';
  impacts: Array<'deals' | 'posts' | 'views' | 'followers'>;
  effort: string;
  expectedImpact: string;
  tag?: 'repeatable' | 'one-time';
  reason?: string;
  onAddToPlan?: () => void;
  onCopy?: () => void;
  onWhyThis?: () => void;
  onViewEvidence?: () => void;
}

export function RecommendationCard({
  title,
  priority,
  confidence,
  impacts,
  effort,
  expectedImpact,
  tag,
  reason,
  onAddToPlan,
  onCopy,
  onWhyThis,
  onViewEvidence,
}: RecommendationCardProps) {
  // Priority configuration
  const priorityConfig = {
    p1: {
      label: 'P1',
      bg: 'bg-[#fee2e2]',
      text: 'text-[#991b1b]',
      border: 'border-[#fecaca]',
    },
    p2: {
      label: 'P2',
      bg: 'bg-[#fef3c7]',
      text: 'text-[#92400e]',
      border: 'border-[#fde68a]',
    },
    p3: {
      label: 'P3',
      bg: 'bg-[#f5f5f5]',
      text: 'text-[#666666]',
      border: 'border-[#e0e0e0]',
    },
  };

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

  // Impact configuration
  const impactConfig = {
    deals: { label: 'Deals', color: 'text-[#10b981]' },
    posts: { label: 'Posts', color: 'text-[#3b82f6]' },
    views: { label: 'Views', color: 'text-[#8b5cf6]' },
    followers: { label: 'Followers', color: 'text-[#f59e0b]' },
  };

  const currentPriority = priorityConfig[priority];
  const currentConfidence = confidenceConfig[confidence];

  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[12px] p-5 hover:border-[#10b981] transition-all hover:shadow-md">
      {/* Header: Title + Priority + Confidence */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <h4 className="text-[#1a1a1a] flex-1" style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.3' }}>
          {title}
        </h4>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className={`px-2.5 py-1 rounded-full border ${currentPriority.bg} ${currentPriority.text} ${currentPriority.border}`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {currentPriority.label}
          </span>
          <span
            className={`px-2.5 py-1 rounded-full border ${currentConfidence.bg} ${currentConfidence.text} ${currentConfidence.border}`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {currentConfidence.label}
          </span>
        </div>
      </div>

      {/* Chips row: Impacts + Effort + Expected + Tag */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* Impact chips */}
        {impacts.map((impact) => (
          <span
            key={impact}
            className={`px-2.5 py-1 rounded-full border border-[#e0e0e0] bg-white ${impactConfig[impact].color}`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {impactConfig[impact].label}
          </span>
        ))}
        
        {/* Effort chip */}
        <span
          className="px-2.5 py-1 rounded-full border border-[#e0e0e0] bg-white text-[#666666]"
          style={{ fontSize: '11px', fontWeight: '600' }}
        >
          Effort: {effort}
        </span>
        
        {/* Expected impact chip */}
        <span
          className="px-2.5 py-1 rounded-full border border-[#10b981] bg-[#d1fae5] text-[#065f46]"
          style={{ fontSize: '11px', fontWeight: '700' }}
        >
          Expected: {expectedImpact}
        </span>
        
        {/* Tag chip (optional) */}
        {tag && (
          <span
            className={`px-2.5 py-1 rounded-full border ${
              tag === 'repeatable'
                ? 'border-[#3b82f6] bg-[#dbeafe] text-[#1e40af]'
                : 'border-[#e0e0e0] bg-[#f5f5f5] text-[#666666]'
            }`}
            style={{ fontSize: '11px', fontWeight: '600' }}
          >
            {tag === 'repeatable' ? 'Repeatable' : 'One-time'}
          </span>
        )}
      </div>

      {/* Reason (optional) */}
      {reason && (
        <div className="mb-4 p-3 bg-[#fafafa] border border-[#e0e0e0] rounded-lg">
          <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
            <span className="font-semibold">Reason:</span> {reason}
          </p>
        </div>
      )}

      {/* Actions footer */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#e0e0e0]">
        {/* Left: Primary actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onAddToPlan}
            className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors flex items-center gap-2"
            style={{ fontSize: '13px', fontWeight: '600' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Add to plan</span>
          </button>
          <button
            onClick={onCopy}
            className="px-3 py-2 border border-[#e0e0e0] rounded-lg hover:border-[#1a1a1a] transition-colors flex items-center gap-2"
            style={{ fontSize: '13px', fontWeight: '600' }}
            title="Copy recommendation"
          >
            <Copy className="w-3.5 h-3.5 text-[#666666]" />
            <span className="text-[#666666]">Copy</span>
          </button>
        </div>

        {/* Right: Secondary links */}
        <div className="flex items-center gap-3">
          <button
            onClick={onWhyThis}
            className="text-[#10b981] hover:text-[#059669] transition-colors flex items-center gap-1"
            style={{ fontSize: '12px', fontWeight: '600' }}
          >
            <span>Why this</span>
            <ArrowRight className="w-3 h-3" />
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
                <ArrowRight className="w-3 h-3" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
