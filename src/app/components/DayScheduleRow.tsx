import React from 'react';
import { Circle, CheckCircle2 } from 'lucide-react';

interface DayScheduleRowProps {
  day: string;
  actions: string[];
  completed?: boolean;
}

export function DayScheduleRow({ day, actions, completed = false }: DayScheduleRowProps) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      {/* Day checkbox */}
      <div className="flex items-center gap-2 w-16 flex-shrink-0 pt-0.5">
        {completed ? (
          <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
        ) : (
          <Circle className="w-4 h-4 text-[#e0e0e0]" />
        )}
        <span className="text-[#666666]" style={{ fontSize: '12px', fontWeight: '600' }}>
          {day}
        </span>
      </div>

      {/* Actions */}
      <div className="flex-1">
        {actions.map((action, index) => (
          <div key={index} className="text-[#1a1a1a] mb-1 last:mb-0" style={{ fontSize: '13px', lineHeight: '1.4' }}>
            {action}
          </div>
        ))}
      </div>
    </div>
  );
}
