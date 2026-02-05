import React from 'react';
import { X, Play, Heart, MessageCircle, Share2, Bookmark, Search, Plus, Film, PlayCircle } from 'lucide-react';

interface StoryboardFrame {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
}

interface TikTokPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  scene: {
    index: number;
    role: string;
    scriptContent: string;
    executionNotes: string;
    storyboard?: StoryboardFrame[];
  };
}

export function TikTokPreviewModal({ isOpen, onClose, scene }: TikTokPreviewModalProps) {
  const [currentFrameIndex, setCurrentFrameIndex] = React.useState(0);

  if (!isOpen) return null;

  // Generate mock storyboard if none exists
  const storyboard = scene.storyboard || [
    {
      id: 'f1',
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop',
      caption: scene.scriptContent.substring(0, 50) + '...',
      timestamp: '0:00',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* TikTok Phone Frame */}
        <div className="bg-black rounded-[32px] shadow-2xl overflow-hidden border-8 border-[#1a1a1a]">
          {/* Screen */}
          <div className="relative bg-black" style={{ aspectRatio: '9/16', height: '700px' }}>
            {/* Storyboard Image */}
            <div className="absolute inset-0">
              <img
                src={storyboard[currentFrameIndex].imageUrl}
                alt={`Frame ${currentFrameIndex + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            </div>

            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 px-4 pt-3 pb-8 bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="text-white/90 text-sm font-semibold">Following</button>
                  <div className="h-4 w-px bg-white/30" />
                  <button className="text-white text-sm font-semibold">For You</button>
                </div>
                <button className="p-1.5">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Captions/Subtitles Overlay */}
            <div className="absolute inset-x-0 bottom-32 px-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 mb-3">
                <p className="text-white text-center font-bold text-base leading-tight">
                  {scene.scriptContent}
                </p>
              </div>
              
              {/* Execution Notes */}
              {scene.executionNotes && (
                <div className="bg-[#7c3aed]/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#7c3aed]/50">
                  <div className="flex items-start gap-2">
                    <Film className="w-4 h-4 text-[#a855f7] flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-xs leading-relaxed">
                      {scene.executionNotes}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Actions */}
            <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5">
              {/* Profile */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] border-2 border-white" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#fe2c55] border-2 border-black flex items-center justify-center">
                  <Plus className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Like */}
              <div className="flex flex-col items-center gap-1">
                <button className="p-2">
                  <Heart className="w-8 h-8 text-white" />
                </button>
                <span className="text-white text-xs font-semibold">124K</span>
              </div>

              {/* Comment */}
              <div className="flex flex-col items-center gap-1">
                <button className="p-2">
                  <MessageCircle className="w-8 h-8 text-white" />
                </button>
                <span className="text-white text-xs font-semibold">2,341</span>
              </div>

              {/* Bookmark */}
              <div className="flex flex-col items-center gap-1">
                <button className="p-2">
                  <Bookmark className="w-7 h-7 text-white" />
                </button>
                <span className="text-white text-xs font-semibold">8,432</span>
              </div>

              {/* Share */}
              <div className="flex flex-col items-center gap-1">
                <button className="p-2">
                  <Share2 className="w-7 h-7 text-white" />
                </button>
                <span className="text-white text-xs font-semibold">Share</span>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 pt-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm">@your_account</span>
                  <span className="text-white/60 text-xs">· 2h ago</span>
                </div>
                <p className="text-white text-sm">
                  Scene {String(scene.index).padStart(2, '0')} • {scene.role}
                </p>
              </div>
            </div>

            {/* Storyboard Navigation */}
            {storyboard.length > 1 && (
              <div className="absolute top-16 left-0 right-0 px-4">
                <div className="flex gap-1">
                  {storyboard.map((frame, idx) => (
                    <button
                      key={frame.id}
                      onClick={() => setCurrentFrameIndex(idx)}
                      className={`flex-1 h-1 rounded-full transition-all ${
                        idx === currentFrameIndex
                          ? 'bg-white'
                          : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview Info */}
        <div className="mt-4 text-center">
          <p className="text-white/70 text-sm">
            TikTok Preview • Scene {String(scene.index).padStart(2, '0')}
          </p>
          <p className="text-white/50 text-xs mt-1">
            Click outside to close
          </p>
        </div>
      </div>
    </div>
  );
}
