import React from 'react';
import {
  ChevronLeft,
  MoreVertical,
  PlayCircle,
  Send,
  Lightbulb,
  Film,
  Sparkles,
  Target,
  ArrowRight,
} from 'lucide-react';

// Types
type SceneRole = 'Hook' | 'Context' | 'Value' | 'Proof' | 'CTA';

interface SceneCard {
  id: string;
  role: SceneRole;
  content: string;
  duration?: string;
}

interface Script {
  id: string;
  title: string;
  scenes: SceneCard[];
}

interface ScriptPreviewProps {
  script: Script;
  onBack: () => void;
  onSchedule?: () => void;
}

const SCENE_ROLE_CONFIG = {
  Hook: { icon: Lightbulb, color: '#fbbf24', label: 'Hook' },
  Context: { icon: Film, color: '#3b82f6', label: 'Context' },
  Value: { icon: Sparkles, color: '#8b5cf6', label: 'Value' },
  Proof: { icon: Target, color: '#10b981', label: 'Proof' },
  CTA: { icon: ArrowRight, color: '#ec4899', label: 'CTA' },
};

export function ScriptPreview({ script, onBack, onSchedule }: ScriptPreviewProps) {
  const totalDuration = script.scenes.reduce((sum, scene) => {
    const duration = parseInt(scene.duration || '0');
    return sum + duration;
  }, 0);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
      {/* Header */}
      <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <span className="text-white" style={{ fontSize: '15px', fontWeight: '600' }}>
          Preview
        </span>
        <button className="p-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all">
          <MoreVertical className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* TikTok Preview (9:16) */}
      <div className="flex-1 bg-[#1a1a1a] flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative w-full max-w-[375px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
          {/* Mock TikTok UI */}
          <div className="absolute inset-0 flex flex-col">
            {/* Video Area */}
            <div className="flex-1 relative bg-gradient-to-br from-[#374151] to-[#1f2937] flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white/50" />
              
              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                  @techreviews_us
                </p>
                <p className="text-white/90 mb-3" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                  {script.scenes[0]?.content || 'Your video description...'}
                </p>
                <div className="flex items-center gap-4 text-white/80">
                  <span style={{ fontSize: '12px' }}>♫ Original Sound</span>
                </div>
              </div>

              {/* Right Actions */}
              <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                    <span className="text-white" style={{ fontSize: '12px' }}>❤️</span>
                  </div>
                  <span className="text-white text-xs">125K</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                    <span className="text-white" style={{ fontSize: '12px' }}>💬</span>
                  </div>
                  <span className="text-white text-xs">3.2K</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                    <span className="text-white" style={{ fontSize: '12px' }}>🔖</span>
                  </div>
                  <span className="text-white text-xs">8.1K</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                    <span className="text-white" style={{ fontSize: '12px' }}>↗️</span>
                  </div>
                  <span className="text-white text-xs">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Script Timeline */}
      <div className="bg-white p-4 border-t border-[#e0e0e0]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[#666666]" style={{ fontSize: '13px', fontWeight: '600' }}>
            Script Timeline
          </span>
          <span className="text-[#3b82f6]" style={{ fontSize: '13px', fontWeight: '600' }}>
            ~{totalDuration}s
          </span>
        </div>
        <div className="space-y-2 max-h-[200px] overflow-y-auto">
          {script.scenes.map((scene, index) => {
            const config = SCENE_ROLE_CONFIG[scene.role];
            const Icon = config.icon;
            
            return (
              <div
                key={scene.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-[#f5f5f5]"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${config.color}20` }}
                >
                  <Icon className="w-4 h-4" style={{ color: config.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[#1a1a1a]" style={{ fontSize: '13px', fontWeight: '600' }}>
                      {scene.role}
                    </span>
                    <span className="text-[#999999]" style={{ fontSize: '12px' }}>
                      {scene.duration}
                    </span>
                  </div>
                  <p className="text-[#666666]" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                    {scene.content || 'No content yet...'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Publish Button */}
      <div className="bg-white border-t border-[#e0e0e0] px-4 py-3 safe-area-bottom">
        <button
          onClick={onSchedule}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#10b981] text-white active:scale-98 transition-all"
          style={{ fontSize: '15px', fontWeight: '600' }}
        >
          <Send className="w-4 h-4" />
          Schedule to Publish
        </button>
      </div>
    </div>
  );
}
