import React from 'react';
import { Zap, CalendarRange, Shield, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../Card';

export function ContentAutomationSettings() {
  const [autoGenerateIdeas, setAutoGenerateIdeas] = React.useState(true);
  const [autoPlanWeekly, setAutoPlanWeekly] = React.useState(false);
  const [autoOptimizeTiming, setAutoOptimizeTiming] = React.useState(true);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
      <Card>
        <CardContent className="space-y-5">
          <ToggleSetting
            icon={<Zap className="w-4 h-4" />}
            label="Auto-generate content ideas"
            description="AI will automatically suggest video ideas based on your niche and trending topics"
            checked={autoGenerateIdeas}
            onChange={setAutoGenerateIdeas}
          />

          <ToggleSetting
            icon={<CalendarRange className="w-4 h-4" />}
            label="Auto-plan weekly content slots"
            description="AI will pre-fill your content calendar with strategic posting times"
            checked={autoPlanWeekly}
            onChange={setAutoPlanWeekly}
          />

          <div className="p-4 rounded-lg bg-[#fff7ed] border border-[#fed7aa]">
            <ToggleSetting
              icon={<Shield className="w-4 h-4 text-[#9a3412]" />}
              label="Require confirmation before finalizing content plans"
              description="You must approve all AI-generated content plans before they're marked as final"
              checked={autoOptimizeTiming}
              onChange={setAutoOptimizeTiming}
              locked
            />
          </div>

          <ToggleSetting
            icon={<AlertCircle className="w-4 h-4" />}
            label="Pause monetization suggestions during traffic repair"
            description="Automatically disable brand deal recommendations when your account is in recovery mode"
            checked={autoOptimizeTiming}
            onChange={setAutoOptimizeTiming}
          />
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex items-center justify-between pt-6">
        <p className="text-[#999999]" style={{ fontSize: '13px' }}>
          Changes are saved automatically
        </p>
        <button className="px-6 py-2.5 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#000000] transition-colors" style={{ fontSize: '14px', fontWeight: '600' }}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

interface ToggleSettingProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  locked?: boolean;
}

function ToggleSetting({ icon, label, description, checked, onChange, locked }: ToggleSettingProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3 flex-1">
        <div className={`w-8 h-8 rounded-lg ${locked ? 'bg-[#fff7ed]' : 'bg-[#f5f5f5]'} flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
              {label}
            </h4>
            {locked && (
              <span className="px-1.5 py-0.5 rounded bg-[#fff7ed] text-[#9a3412] border border-[#fed7aa]" style={{ fontSize: '10px', fontWeight: '700' }}>
                REQUIRED
              </span>
            )}
          </div>
          <p className="text-[#666666]" style={{ fontSize: '13px', lineHeight: '1.5' }}>
            {description}
          </p>
        </div>
      </div>
      <button
        onClick={() => !locked && onChange(!checked)}
        disabled={locked}
        className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${
          checked ? 'bg-[#1a1a1a]' : 'bg-[#e0e0e0]'
        } ${locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}