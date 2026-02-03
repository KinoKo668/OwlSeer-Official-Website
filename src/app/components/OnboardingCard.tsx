import React from 'react';
import { Card } from './Card';
import { Circle, CircleCheck } from 'lucide-react';

interface OnboardingTask {
  id: string;
  title: string;
  ctaText: string;
  completed: boolean;
  onAction: () => void;
}

interface OnboardingCardProps {
  tasks: OnboardingTask[];
}

export function OnboardingCard({ tasks }: OnboardingCardProps) {
  const allCompleted = tasks.every(task => task.completed);
  
  // Don't render if all tasks are completed
  if (allCompleted) {
    return null;
  }

  return (
    <Card>
      <h2
        className="text-foreground mb-5"
        style={{ fontSize: 'var(--text-section-title)', fontWeight: '600' }}
      >
        Get value from Nova in 2 minutes
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between py-3 border-b border-[rgba(0,0,0,0.06)] last:border-0"
          >
            <div className="flex items-center gap-3">
              {task.completed ? (
                <CircleCheck size={20} className="text-[#2e7d32] flex-shrink-0" strokeWidth={2} />
              ) : (
                <Circle size={20} className="text-[#bdbdbd] flex-shrink-0" strokeWidth={2} />
              )}
              <span
                className={task.completed ? 'text-muted-foreground line-through' : 'text-foreground'}
                style={{ fontSize: 'var(--text-body)' }}
              >
                {task.title}
              </span>
            </div>

            {!task.completed && (
              <button
                onClick={task.onAction}
                className="px-4 py-2 bg-foreground text-white rounded-lg hover:bg-[#1a1625] transition-colors"
                style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
              >
                {task.ctaText}
              </button>
            )}
          </div>
        ))}
      </div>

      <p
        className="text-muted-foreground mt-5 pt-4 border-t border-[rgba(0,0,0,0.06)]"
        style={{ fontSize: 'var(--text-secondary)' }}
      >
        Complete these steps to unlock your personalized daily recommendations.
      </p>
    </Card>
  );
}
