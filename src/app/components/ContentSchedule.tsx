import React from 'react';
import { Card } from './Card';

interface ContentScheduleProps {
  nextPost?: {
    day: string; // e.g., "Today", "Tomorrow", "Monday"
    time: string; // e.g., "7 PM"
  };
  weekSchedule: boolean[]; // 7 days, true = scheduled, false = unscheduled
  status: 'On track' | 'Light' | 'At risk';
  onViewSchedule: () => void;
}

export function ContentSchedule({ nextPost, weekSchedule, status, onViewSchedule }: ContentScheduleProps) {
  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  const statusColors = {
    'On track': 'text-[#2e7d32]',
    'Light': 'text-[#ef6c00]',
    'At risk': 'text-[#c62828]',
  };

  return (
    <Card title="Content schedule">
      <div className="mb-5">
        <p
          className="text-foreground mb-1"
          style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
        >
          {nextPost
            ? `Next post: ${nextPost.day} · ${nextPost.time}`
            : 'No post scheduled today'}
        </p>
        <p
          className={`${statusColors[status]}`}
          style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
        >
          {status}
        </p>
      </div>

      {/* 7-day rhythm strip */}
      <div className="mb-5">
        <div className="flex items-center gap-2">
          {weekSchedule.map((isScheduled, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className={`w-full h-2 rounded-full transition-colors ${
                  isScheduled
                    ? 'bg-foreground'
                    : 'bg-[rgba(0,0,0,0.08)]'
                }`}
              />
              <span
                className="text-muted-foreground"
                style={{ fontSize: '11px', fontWeight: '500' }}
              >
                {dayLabels[index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onViewSchedule}
        className="text-muted-foreground hover:text-foreground transition-colors"
        style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
      >
        View schedule →
      </button>
    </Card>
  );
}
