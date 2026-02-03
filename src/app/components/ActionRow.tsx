import React from 'react';
import { AlertCircle, ArrowRight, CheckCircle, Clock, XCircle } from 'lucide-react';

interface ActionRowProps {
  title: string;
  status: 'completed' | 'late' | 'skipped';
  linkedGoal: string;
  timeEstimate?: string;
  hasEvidence?: boolean;
  skipReason?: string;
  onAddToPlan?: () => void;
  onViewEvidence?: () => void;
}

export function ActionRow({
  title,
  status,
  linkedGoal,
  timeEstimate,
  hasEvidence = false,
  skipReason,
  onAddToPlan,
  onViewEvidence,
}: ActionRowProps) {
  // Status configuration
  const statusConfig = {
    completed: {
      label: 'Completed',
      icon: CheckCircle,
      bg: 'bg-[#d1fae5]',
      text: 'text-[#065f46]',
      border: 'border-[#a7f3d0]',
      rowBg: '',
    },
    late: {
      label: 'Late',
      icon: Clock,
      bg: 'bg-[#fef3c7]',
      text: 'text-[#92400e]',
      border: 'border-[#fde68a]',
      rowBg: '',
    },
    skipped: {
      label: 'Skipped',
      icon: XCircle,
      bg: 'bg-[#fee2e2]',
      text: 'text-[#991b1b]',
      border: 'border-[#fecaca]',
      rowBg: 'bg-[#fef2f2]',
    },
  };

  const currentStatus = statusConfig[status];
  const StatusIcon = currentStatus.icon;

  return (
    <div
      className={`py-4 border-b border-[#e0e0e0] last:border-b-0 ${currentStatus.rowBg} ${
        currentStatus.rowBg ? '-mx-6 px-6' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        {/* LEFT: Action title */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
              {title}
            </h4>
            {status === 'skipped' && <AlertCircle className="w-4 h-4 text-[#dc2626]" />}
          </div>

          {/* Meta chips row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Status chip */}
            <span
              className={`px-2 py-0.5 rounded-full border text-xs font-semibold flex items-center gap-1 ${currentStatus.bg} ${currentStatus.text} ${currentStatus.border}`}
            >
              <StatusIcon className="w-3 h-3" />
              <span>{currentStatus.label}</span>
            </span>

            {/* Linked goal chip */}
            <span
              className="px-2 py-0.5 rounded-full border bg-[#eff6ff] text-[#1e40af] border-[#bfdbfe]"
              style={{ fontSize: '11px', fontWeight: '600' }}
            >
              {linkedGoal}
            </span>

            {/* Time estimate chip (optional) */}
            {timeEstimate && (
              <span
                className="px-2 py-0.5 rounded-full border bg-[#f5f5f5] text-[#666666] border-[#e0e0e0]"
                style={{ fontSize: '11px', fontWeight: '500' }}
              >
                Est. {timeEstimate}
              </span>
            )}

            {/* Evidence chip (optional) */}
            {hasEvidence && (
              <span
                className="px-2 py-0.5 rounded-full border bg-[#f0fdf4] text-[#065f46] border-[#d1fae5]"
                style={{ fontSize: '11px', fontWeight: '600' }}
              >
                Evidence available
              </span>
            )}
          </div>

          {/* Skip reason (if applicable) */}
          {status === 'skipped' && skipReason && (
            <p className="text-[#999999] mt-2" style={{ fontSize: '11px', fontWeight: '500' }}>
              Reason: {skipReason}
            </p>
          )}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onAddToPlan}
            className="px-3 py-1.5 border border-[#e0e0e0] rounded-lg hover:border-[#10b981] hover:bg-[#f0fdf4] transition-colors"
            style={{ fontSize: '12px', fontWeight: '600', color: '#666666' }}
          >
            Add to plan
          </button>
          {hasEvidence && (
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
    </div>
  );
}
