import React from 'react';
import { Card } from './Card';

interface NextBestActionProps {
  title: string;
  description: string;
  buttonText: string;
  onAction: () => void;
}

export function NextBestAction({ title, description, buttonText, onAction }: NextBestActionProps) {
  return (
    <Card>
      <div className="bg-[#f5f5f7] -m-6 p-8 rounded-xl border-2 border-[rgba(0,0,0,0.08)]">
        <div className="max-w-2xl">
          <div className="mb-3">
            <h2
              className="text-foreground"
              style={{ fontSize: 'var(--text-section-title)', fontWeight: '600' }}
            >
              {title}
            </h2>
          </div>
          
          <p
            className="text-muted-foreground mb-6"
            style={{ fontSize: 'var(--text-body)', lineHeight: '1.6' }}
          >
            {description}
          </p>

          <button
            onClick={onAction}
            className="px-6 py-3 bg-foreground text-white rounded-lg hover:bg-[#333] transition-colors"
            style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Card>
  );
}
