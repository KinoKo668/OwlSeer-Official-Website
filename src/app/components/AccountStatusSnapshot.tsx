import React from 'react';
import { Card, CardHeader } from './Card';
import { TrendingUp, TrendingDown, Minus, CircleAlert, ArrowRight } from 'lucide-react';

type StatusType = 'stable' | 'growing' | 'declining' | 'needs-attention';

interface StatusDimension {
  id: string;
  name: string;
  status: StatusType;
  description: string;
}

interface AccountStatusSnapshotProps {
  dimensions: StatusDimension[];
  onViewDetails?: () => void;
}

function getStatusConfig(status: StatusType) {
  switch (status) {
    case 'stable':
      return {
        label: 'Stable',
        color: 'text-[#5f6368]',
        icon: <Minus size={16} strokeWidth={2.5} />,
      };
    case 'growing':
      return {
        label: 'Growing steadily',
        color: 'text-[#2e7d32]',
        icon: <TrendingUp size={16} strokeWidth={2.5} />,
      };
    case 'declining':
      return {
        label: 'Slight decline',
        color: 'text-[#e65100]',
        icon: <TrendingDown size={16} strokeWidth={2.5} />,
      };
    case 'needs-attention':
      return {
        label: 'Needs attention',
        color: 'text-[#c2185b]',
        icon: <CircleAlert size={16} strokeWidth={2.5} />,
      };
  }
}

function StatusItem({ dimension }: { dimension: StatusDimension }) {
  const config = getStatusConfig(dimension.status);

  return (
    <div className="py-4 border-b border-[rgba(0,0,0,0.06)] last:border-0">
      <div className="mb-1.5">
        <span
          className="text-foreground"
          style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
        >
          {dimension.name}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className={config.color}>{config.icon}</span>
        <span
          className={config.color}
          style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
        >
          {config.label}
        </span>
        <span className="text-muted-foreground">·</span>
        <span
          className="text-muted-foreground"
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          {dimension.description}
        </span>
      </div>
    </div>
  );
}

export function AccountStatusSnapshot({ dimensions, onViewDetails }: AccountStatusSnapshotProps) {
  // Show max 4 dimensions
  const displayDimensions = dimensions.slice(0, 4);

  return (
    <Card>
      <CardHeader title="Account status" />
      <div>
        {displayDimensions.map((dimension) => (
          <StatusItem key={dimension.id} dimension={dimension} />
        ))}
      </div>
      {onViewDetails && (
        <div className="mt-5 pt-5 border-t border-[rgba(0,0,0,0.06)]">
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 px-4 py-2 bg-[#f5f5f7] text-foreground rounded-lg hover:bg-[#e8e8ea] transition-colors"
            style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
          >
            View more
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </Card>
  );
}