import React from 'react';
import { Card } from './Card';

interface BrandDeal {
  id: string;
  brandName: string;
  category: string;
  matchLevel: 'High' | 'Medium';
}

interface BrandDealsProps {
  deals: BrandDeal[];
  onReviewDeals: () => void;
  onLearnMore?: () => void;
}

export function BrandDeals({ deals, onReviewDeals, onLearnMore }: BrandDealsProps) {
  const hasDeals = deals.length > 0;
  const statusText = hasDeals
    ? `${deals.length} ${deals.length === 1 ? 'deal matches' : 'deals match'} your profile`
    : 'No suitable deals right now';

  return (
    <Card
      title="Brand deals"
      subtitle={statusText}
    >
      {hasDeals ? (
        <>
          <p
            className="text-muted-foreground mb-5"
            style={{ fontSize: 'var(--text-secondary)' }}
          >
            Pre-filtered by Nova based on content fit, audience match, and risk.
          </p>

          <div className="space-y-3 mb-5">
            {deals.slice(0, 2).map((deal) => (
              <div
                key={deal.id}
                className="flex items-center justify-between py-3 px-4 bg-[#fafafa] rounded-lg border border-[rgba(0,0,0,0.06)]"
              >
                <div className="flex-1">
                  <p
                    className="text-foreground mb-1"
                    style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
                  >
                    {deal.brandName}
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: 'var(--text-secondary)' }}
                  >
                    {deal.category}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-md text-sm ${
                    deal.matchLevel === 'High'
                      ? 'bg-[#e8f5e9] text-[#2e7d32]'
                      : 'bg-[#fff3e0] text-[#ef6c00]'
                  }`}
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
                >
                  {deal.matchLevel}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onReviewDeals}
            className="text-foreground hover:text-[#666] transition-colors"
            style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
          >
            Review deals →
          </button>
        </>
      ) : (
        <>
          <p
            className="text-muted-foreground mb-5"
            style={{ fontSize: 'var(--text-body)', lineHeight: '1.6' }}
          >
            Nova is continuously screening inbound requests on your behalf.
            You'll only see deals that fit your content and audience.
          </p>

          {onLearnMore && (
            <button
              onClick={onLearnMore}
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontSize: 'var(--text-secondary)' }}
            >
              How deals are selected
            </button>
          )}
        </>
      )}
    </Card>
  );
}