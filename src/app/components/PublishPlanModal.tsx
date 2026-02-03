import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Plus, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  FileText,
  Target,
  Film
} from 'lucide-react';

interface Script {
  id: string;
  title: string;
  contentType: string;
  targetGoal: string;
  scenes: any[];
}

interface SchedulePlan {
  id: string;
  title: string;
  date: Date;
  time: string;
  status: 'scheduled' | 'draft';
  slotsUsed: number;
  slotsTotal: number;
}

interface PublishPlanModalProps {
  script: Script;
  onClose: () => void;
  onPublish: (planId: string | 'new', scheduleData?: any) => void;
}

export function PublishPlanModal({ script, onClose, onPublish }: PublishPlanModalProps) {
  const [view, setView] = React.useState<'choose' | 'existing' | 'new'>('choose');
  const [selectedPlanId, setSelectedPlanId] = React.useState<string | null>(null);
  const [newPlanData, setNewPlanData] = React.useState({
    title: script.title,
    date: '',
    time: '09:00',
  });

  // Mock existing schedule plans
  const existingPlans: SchedulePlan[] = [
    {
      id: 'plan-1',
      title: 'Weekly Content - Jan 13-19',
      date: new Date(2025, 0, 13),
      time: '09:00 AM',
      status: 'scheduled',
      slotsUsed: 3,
      slotsTotal: 7,
    },
    {
      id: 'plan-2',
      title: 'Weekend Special Posts',
      date: new Date(2025, 0, 18),
      time: '02:00 PM',
      status: 'draft',
      slotsUsed: 1,
      slotsTotal: 3,
    },
    {
      id: 'plan-3',
      title: 'Daily Morning Routine Series',
      date: new Date(2025, 0, 14),
      time: '07:30 AM',
      status: 'scheduled',
      slotsUsed: 5,
      slotsTotal: 7,
    },
  ];

  const handlePublishToExisting = () => {
    if (selectedPlanId) {
      onPublish(selectedPlanId);
    }
  };

  const handleCreateAndPublish = () => {
    if (newPlanData.date && newPlanData.time) {
      onPublish('new', newPlanData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e0e0e0]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[#1a1a1a]" style={{ fontSize: '20px', fontWeight: '700' }}>
                {view === 'choose' ? 'Publish Script' : view === 'existing' ? 'Select Schedule Plan' : 'Create New Schedule'}
              </h2>
              <p className="text-[#666666] mt-1" style={{ fontSize: '13px' }}>
                {view === 'choose' && 'Choose how you want to schedule this content'}
                {view === 'existing' && 'Add this script to an existing schedule plan'}
                {view === 'new' && 'Set up a new publishing schedule for this script'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors text-[#666666]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Script Summary */}
        <div className="px-6 py-4 bg-[#fafafa] border-b border-[#e0e0e0]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#404040] flex items-center justify-center flex-shrink-0">
              <Film className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#1a1a1a]" style={{ fontSize: '15px', fontWeight: '700' }}>
                {script.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-[#e0e0e0]">
                  <FileText className="w-3 h-3 text-[#666666]" />
                  <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                    {script.contentType}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-[#e0e0e0]">
                  <Target className="w-3 h-3 text-[#666666]" />
                  <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                    {script.targetGoal}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-[#e0e0e0]">
                  <span className="text-[#666666]" style={{ fontSize: '11px', fontWeight: '600' }}>
                    {script.scenes.length} Scenes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {view === 'choose' && (
            <div className="px-6 py-8">
              <div className="grid grid-cols-2 gap-4">
                {/* Add to Existing Plan */}
                <button
                  onClick={() => setView('existing')}
                  className="group p-6 rounded-xl border-2 border-[#e0e0e0] hover:border-[#1a1a1a] transition-all bg-white hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5f5] group-hover:bg-[#1a1a1a] flex items-center justify-center mb-4 transition-colors">
                    <Calendar className="w-6 h-6 text-[#666666] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#1a1a1a] text-left mb-2" style={{ fontSize: '16px', fontWeight: '700' }}>
                    Add to Existing Plan
                  </h3>
                  <p className="text-[#666666] text-left" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                    Schedule this content within an existing publishing plan
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[#1a1a1a] group-hover:translate-x-1 transition-transform">
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>Select Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Create New Plan */}
                <button
                  onClick={() => setView('new')}
                  className="group p-6 rounded-xl border-2 border-[#e0e0e0] hover:border-[#7c3aed] transition-all bg-white hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#a855f7]/10 group-hover:from-[#7c3aed] group-hover:to-[#a855f7] flex items-center justify-center mb-4 transition-all">
                    <Plus className="w-6 h-6 text-[#7c3aed] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#1a1a1a] text-left mb-2" style={{ fontSize: '16px', fontWeight: '700' }}>
                    Create New Schedule
                  </h3>
                  <p className="text-[#666666] text-left" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                    Set up a new publishing schedule with AI-optimized timing
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[#7c3aed] group-hover:translate-x-1 transition-transform">
                    <Sparkles className="w-4 h-4" />
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>Create Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {view === 'existing' && (
            <div className="px-6 py-6">
              <div className="space-y-3">
                {existingPlans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      selectedPlanId === plan.id
                        ? 'border-[#1a1a1a] bg-[#fafafa] shadow-md'
                        : 'border-[#e0e0e0] hover:border-[#999999] bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-[#1a1a1a]" style={{ fontSize: '14px', fontWeight: '700' }}>
                            {plan.title}
                          </h4>
                          <span className={`px-2 py-0.5 rounded-full text-white ${
                            plan.status === 'scheduled' ? 'bg-[#10b981]' : 'bg-[#f59e0b]'
                          }`} style={{ fontSize: '10px', fontWeight: '600' }}>
                            {plan.status === 'scheduled' ? 'Scheduled' : 'Draft'}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-[#666666]">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span style={{ fontSize: '12px' }}>
                              {plan.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span style={{ fontSize: '12px' }}>{plan.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span style={{ fontSize: '12px' }}>
                              {plan.slotsUsed}/{plan.slotsTotal} slots used
                            </span>
                          </div>
                        </div>
                      </div>
                      {selectedPlanId === plan.id && (
                        <CheckCircle className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {view === 'new' && (
            <div className="px-6 py-6">
              <div className="max-w-xl mx-auto space-y-5">
                {/* Plan Title */}
                <div>
                  <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                    Schedule Title
                  </label>
                  <input
                    type="text"
                    value={newPlanData.title}
                    onChange={(e) => setNewPlanData({ ...newPlanData, title: e.target.value })}
                    placeholder="Enter schedule plan name"
                    className="w-full px-4 py-2.5 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] placeholder:text-[#999999] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 focus:border-[#1a1a1a]"
                    style={{ fontSize: '13px' }}
                  />
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                    Publishing Date
                  </label>
                  <input
                    type="date"
                    value={newPlanData.date}
                    onChange={(e) => setNewPlanData({ ...newPlanData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 focus:border-[#1a1a1a]"
                    style={{ fontSize: '13px' }}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-[#1a1a1a] mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
                    Publishing Time
                  </label>
                  <input
                    type="time"
                    value={newPlanData.time}
                    onChange={(e) => setNewPlanData({ ...newPlanData, time: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#e0e0e0] rounded-lg text-[#1a1a1a] outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 focus:border-[#1a1a1a]"
                    style={{ fontSize: '13px' }}
                  />
                </div>

                {/* AI Suggestion Box */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#7c3aed]/5 to-[#a855f7]/5 border border-[#7c3aed]/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a1a] mb-1" style={{ fontSize: '13px', fontWeight: '700' }}>
                        AI Timing Recommendation
                      </h4>
                      <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        Based on your audience engagement patterns, we recommend posting between <strong>9:00 AM - 11:00 AM</strong> or <strong>7:00 PM - 9:00 PM</strong> for maximum reach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#e0e0e0] bg-[#fafafa]">
          <div className="flex items-center justify-between">
            {view !== 'choose' && (
              <button
                onClick={() => {
                  if (view === 'existing' || view === 'new') {
                    setView('choose');
                    setSelectedPlanId(null);
                  }
                }}
                className="px-4 py-2 text-[#666666] hover:text-[#1a1a1a] transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Back
              </button>
            )}
            <div className={`flex items-center gap-3 ${view === 'choose' ? 'ml-auto' : ''}`}>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-[#e0e0e0] text-[#666666] hover:bg-white transition-colors"
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Cancel
              </button>
              {view === 'existing' && (
                <button
                  onClick={handlePublishToExisting}
                  disabled={!selectedPlanId}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#404040] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  <CheckCircle className="w-4 h-4" />
                  Add to Plan
                </button>
              )}
              {view === 'new' && (
                <button
                  onClick={handleCreateAndPublish}
                  disabled={!newPlanData.date || !newPlanData.time || !newPlanData.title}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  <Sparkles className="w-4 h-4" />
                  Create & Schedule
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
