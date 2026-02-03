import React from 'react';
import { Card, CardHeader, CardContent } from './Card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatChange {
  value: number;
  percentage: number;
}

interface StatItem {
  label: string;
  value: number;
  change7d: StatChange;
  change30d: StatChange;
}

interface AccountStatsProps {
  engagementRate: number;
  engagementChange7d: number;
  engagementChange30d: number;
  followers: number;
  followersChange7d: number;
  followersChange30d: number;
  views: number;
  viewsChange7d: number;
  viewsChange30d: number;
  likes: number;
  likesChange7d: number;
  likesChange30d: number;
}

export function AccountStats({
  engagementRate,
  engagementChange7d,
  engagementChange30d,
  followers,
  followersChange7d,
  followersChange30d,
  views,
  viewsChange7d,
  viewsChange30d,
  likes,
  likesChange7d,
  likesChange30d,
}: AccountStatsProps) {
  const formatNumber = (num: number): string => {
    if (num === undefined || num === null) {
      return '0';
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  const getTrendIcon = (value: number) => {
    if (value > 0) return <TrendingUp className="w-3.5 h-3.5" />;
    if (value < 0) return <TrendingDown className="w-3.5 h-3.5" />;
    return <Minus className="w-3.5 h-3.5" />;
  };

  const getTrendColor = (value: number): string => {
    if (value > 0) return 'text-[#2e7d32]';
    if (value < 0) return 'text-[#d32f2f]';
    return 'text-[#757575]';
  };

  const stats: StatItem[] = [
    {
      label: 'Followers',
      value: followers,
      change7d: {
        value: followersChange7d,
        percentage: (followersChange7d / followers) * 100,
      },
      change30d: {
        value: followersChange30d,
        percentage: (followersChange30d / followers) * 100,
      },
    },
    {
      label: 'Views',
      value: views,
      change7d: {
        value: viewsChange7d,
        percentage: (viewsChange7d / views) * 100,
      },
      change30d: {
        value: viewsChange30d,
        percentage: (viewsChange30d / views) * 100,
      },
    },
    {
      label: 'Likes',
      value: likes,
      change7d: {
        value: likesChange7d,
        percentage: (likesChange7d / likes) * 100,
      },
      change30d: {
        value: likesChange30d,
        percentage: (likesChange30d / likes) * 100,
      },
    },
  ];

  return (
    <Card>
      <CardHeader title="Account Performance" />
      <CardContent>
        {/* Engagement Rate - Prominent */}
        <div className="mb-6 pb-6 border-b border-[rgba(0,0,0,0.08)]">
          <div
            className="text-muted-foreground mb-2"
            style={{ fontSize: 'var(--text-secondary)' }}
          >
            Engagement Rate
          </div>
          <div className="flex items-end gap-4">
            <div
              className="text-foreground"
              style={{ fontSize: '36px', fontWeight: '600', lineHeight: '1' }}
            >
              {formatPercentage(engagementRate)}
            </div>
            <div className="flex items-center gap-3 pb-1">
              <div
                className={`flex items-center gap-1 ${getTrendColor(engagementChange7d)}`}
                style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
              >
                {getTrendIcon(engagementChange7d)}
                <span>{formatPercentage(Math.abs(engagementChange7d))} (7d)</span>
              </div>
              <div
                className={`flex items-center gap-1 ${getTrendColor(engagementChange30d)}`}
                style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
              >
                {getTrendIcon(engagementChange30d)}
                <span>{formatPercentage(Math.abs(engagementChange30d))} (30d)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Stats */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-muted-foreground mb-2"
                style={{ fontSize: 'var(--text-secondary)' }}
              >
                {stat.label}
              </div>
              <div
                className="text-foreground mb-2"
                style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1.2' }}
              >
                {formatNumber(stat.value)}
              </div>
              
              {/* 7d Change */}
              <div
                className={`flex items-center gap-1 mb-1 ${getTrendColor(stat.change7d.value)}`}
                style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
              >
                {getTrendIcon(stat.change7d.value)}
                <span>
                  {stat.change7d.value > 0 ? '+' : ''}
                  {formatNumber(stat.change7d.value)} ({formatPercentage(Math.abs(stat.change7d.percentage))}) 7d
                </span>
              </div>

              {/* 30d Change */}
              <div
                className={`flex items-center gap-1 ${getTrendColor(stat.change30d.value)}`}
                style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
              >
                {getTrendIcon(stat.change30d.value)}
                <span>
                  {stat.change30d.value > 0 ? '+' : ''}
                  {formatNumber(stat.change30d.value)} ({formatPercentage(Math.abs(stat.change30d.percentage))}) 30d
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
