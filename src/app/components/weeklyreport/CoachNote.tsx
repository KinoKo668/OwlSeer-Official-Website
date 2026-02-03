import React from 'react';
import { Sparkles, Info } from 'lucide-react';

type CoachNoteStatus = 'good' | 'warning' | 'critical';

interface CoachNoteProps {
  status?: CoachNoteStatus;
}

const notes = {
  good: {
    tone: 'Great',
    message:
      'You\'re on track and building momentum. Keep the rhythm going—small wins compound over time.',
    nextWin: 'Draft 1 more script this week to stay ahead',
    bgColor: 'bg-[#f0fdf4]',
    borderColor: 'border-[#86efac]',
    textColor: 'text-[#166534]',
    badgeBg: 'bg-[#86efac]',
    badgeText: 'text-[#166534]',
  },
  warning: {
    tone: 'Watch Out',
    message:
      'You\'re slightly behind schedule. One focused session can get you back on track—prioritize the highest-impact task.',
    nextWin: 'Complete 2 scripts by Thursday to recover',
    bgColor: 'bg-[#fffbeb]',
    borderColor: 'border-[#fde68a]',
    textColor: 'text-[#92400e]',
    badgeBg: 'bg-[#fde68a]',
    badgeText: 'text-[#92400e]',
  },
  critical: {
    tone: 'Action Needed',
    message:
      'This week needs immediate attention. Breaking down your goal into micro-tasks might help you regain control.',
    nextWin: 'Pick 1 task and finish it today',
    bgColor: 'bg-[#fef2f2]',
    borderColor: 'border-[#fca5a5]',
    textColor: 'text-[#991b1b]',
    badgeBg: 'bg-[#fca5a5]',
    badgeText: 'text-[#991b1b]',
  },
};

export function CoachNote({
  status = 'good',
}: CoachNoteProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const note = notes[status];

  return null;
}