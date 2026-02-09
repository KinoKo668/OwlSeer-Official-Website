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
          </div>

          {/* Skip reason (if applicable) */}
          {status === 'skipped' && skipReason && (
            <p className="text-[#999999] mt-2" style={{ fontSize: '11px', fontWeight: '500' }}>
              Reason: {skipReason}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
