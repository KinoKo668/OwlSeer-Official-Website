import React from 'react';
import { Target, Zap } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../Card';

export function AIPreferencesSettings() {
  const [strategyPreference, setStrategyPreference] = React.useState<'growth' | 'monetization' | 'balanced'>('balanced');
  const [aiProactiveness, setAiProactiveness] = React.useState<'conservative' | 'recommended' | 'aggressive'>('recommended');

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
      <Card>
        <CardContent className="space-y-6">
          {/* Strategy Preference */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                Default Strategy Preference
              </span>
            </label>
            <p className="text-[#999999] mb-3" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              When making recommendations, AI will prioritize this objective unless you specify otherwise.
            </p>
            <div className="space-y-2">
              <RadioOption
                label="Growth-first"
                description="Maximize reach and follower count"
                value="growth"
                checked={strategyPreference === 'growth'}
                onChange={() => setStrategyPreference('growth')}
              />
              <RadioOption
                label="Monetization-first"
                description="Prioritize revenue opportunities"
                value="monetization"
                checked={strategyPreference === 'monetization'}
                onChange={() => setStrategyPreference('monetization')}
              />
              <RadioOption
                label="Balanced"
                description="Balance growth and monetization"
                value="balanced"
                checked={strategyPreference === 'balanced'}
                onChange={() => setStrategyPreference('balanced')}
                recommended
              />
            </div>
          </div>

          <div className="border-t border-[#f0f0f0] my-6"></div>

          {/* AI Proactiveness */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#666666]" />
              <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
                AI Proactiveness Level
              </span>
            </label>
            <p className="text-[#999999] mb-3" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              How frequently should AI surface insights and suggestions?
            </p>
            <div className="space-y-2">
              <RadioOption
                label="Conservative"
                description="Only alert for critical issues and major opportunities"
                value="conservative"
                checked={aiProactiveness === 'conservative'}
                onChange={() => setAiProactiveness('conservative')}
              />
              <RadioOption
                label="Recommended"
                description="Regular insights and weekly recommendations"
                value="recommended"
                checked={aiProactiveness === 'recommended'}
                onChange={() => setAiProactiveness('recommended')}
                recommended
              />
              <RadioOption
                label="Aggressive"
                description="Frequent suggestions and real-time optimization tips"
                value="aggressive"
                checked={aiProactiveness === 'aggressive'}
                onChange={() => setAiProactiveness('aggressive')}
              />
            </div>
          </div>
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

interface RadioOptionProps {
  label: string;
  description: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  recommended?: boolean;
}

function RadioOption({ label, description, checked, onChange, recommended }: RadioOptionProps) {
  return (
    <button
      onClick={onChange}
      className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
        checked
          ? 'border-[#1a1a1a] bg-[#fafafa]'
          : 'border-[#e0e0e0] bg-white hover:border-[#c0c0c0]'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
          checked ? 'border-[#1a1a1a] bg-[#1a1a1a]' : 'border-[#d0d0d0] bg-white'
        }`}>
          {checked && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '600' }}>
              {label}
            </span>
            {recommended && (
              <span className="px-1.5 py-0.5 rounded-full bg-[#16a34a] text-white" style={{ fontSize: '10px', fontWeight: '700' }}>
                RECOMMENDED
              </span>
            )}
          </div>
          <p className="text-[#666666]" style={{ fontSize: '13px' }}>
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}