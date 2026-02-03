import React from 'react';
import { Heart, MessageCircle, Bookmark, Search, Plus, Film, Music2, Home, Users, User, Forward, Pause, Volume2, Maximize, Wifi, Battery, Signal, Tv } from 'lucide-react';

interface StoryboardFrame {
  id: string;
  imageUrl: string;
  caption: string;
  timestamp: string;
}

interface TikTokPreviewInlineProps {
  scene: {
    index: number;
    role: string;
    scriptContent: string;
    executionNotes: string;
    storyboard?: StoryboardFrame[];
  } | null;
}

export function TikTokPreviewInline({ scene }: TikTokPreviewInlineProps) {
  const [currentFrameIndex, setCurrentFrameIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  // Reset frame index when scene changes
  React.useEffect(() => {
    setCurrentFrameIndex(0);
  }, [scene?.index]);

  // Handle scaling
  React.useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        // Calculate scale based on container height vs ideal height (e.g. 600px)
        const containerHeight = containerRef.current.clientHeight;
        const idealHeight = 600;
        // Only scale down, not up past 1
        const newScale = Math.min(1, containerHeight / idealHeight);
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    // Also listen for container size changes if possible, or just re-run on render
    const resizeObserver = new ResizeObserver(updateScale);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateScale);
      resizeObserver.disconnect();
    };
  }, []);

  if (!scene) {
    return (
      <div className="h-full flex items-center justify-center bg-[#fafafa]">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <Film className="w-8 h-8 text-[#999999]" />
          </div>
          <p className="text-[#999999]" style={{ fontSize: '14px', fontWeight: '600' }}>
            Select a scene to preview
          </p>
          <p className="text-[#cccccc] mt-1" style={{ fontSize: '12px' }}>
            Preview how it looks on TikTok
          </p>
        </div>
      </div>
    );
  }

  // Generate mock storyboard if none exists
  const storyboard = (scene.storyboard && scene.storyboard.length > 0) ? scene.storyboard : [
    {
      id: 'f1',
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop',
      caption: scene.scriptContent.substring(0, 50) + '...',
      timestamp: '0:00',
    },
  ];

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center bg-[#fafafa] p-4 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 8s linear infinite;
        }
      `}</style>
      <div 
        className="bg-black rounded-[32px] overflow-hidden border-[6px] border-[#1a1a1a] shadow-2xl relative aspect-[9/19] origin-center transition-transform duration-200"
        style={{ 
          height: '600px',
          width: 'auto',
          transform: `scale(${scale})`
        }}
      >
        
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-[32px] flex items-end justify-between px-5 pb-1 z-50 text-white">
          <span className="text-[11px] font-semibold tracking-wide">8:00</span>
          <div className="flex items-center gap-1">
            <Signal className="w-3 h-3 fill-white" />
            <Wifi className="w-3 h-3" />
            <div className="relative">
               <Battery className="w-4 h-4 text-white/40" />
               <div className="absolute top-[4px] left-[2px] w-[8px] h-[5px] bg-white rounded-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Video Layer */}
        <div className="absolute inset-0 bg-[#1a1a1a]">
          <img
            src={storyboard[currentFrameIndex].imageUrl}
            alt={`Frame ${currentFrameIndex + 1}`}
            className="w-full h-full object-cover opacity-90"
          />
          {/* Gradients */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Top Nav */}
        <div className="absolute top-[36px] left-0 right-0 flex items-center justify-between px-4 z-40">
           <Tv className="w-4 h-4 text-white/90" />
           <div className="flex items-center gap-4 text-[13px] font-bold">
              <span className="text-white/60">Following</span>
              <div className="flex flex-col items-center gap-0.5">
                 <span className="text-white">For You</span>
                 <div className="w-5 h-[2px] bg-white rounded-full"></div>
              </div>
           </div>
           <Search className="w-4 h-4 text-white" />
        </div>

        {/* Right Sidebar Actions */}
        <div className="absolute right-1.5 bottom-[100px] flex flex-col items-center gap-3 z-40">
           {/* Avatar */}
           <div className="relative mb-0.5">
             <div className="w-[36px] h-[36px] rounded-full border border-white p-[1px]">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=kinoko`} alt="Avatar" className="w-full h-full rounded-full bg-black object-cover" />
             </div>
             <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#fe2c55] flex items-center justify-center border-2 border-white/20">
               <Plus className="w-2 h-2 text-white" strokeWidth={4} />
             </div>
           </div>

           {/* Like */}
           <div className="flex flex-col items-center gap-0.5">
             <Heart className="w-[24px] h-[24px] text-white fill-white" />
             <span className="text-white text-[10px] font-semibold drop-shadow-md">124.5K</span>
           </div>

           {/* Comment */}
           <div className="flex flex-col items-center gap-0.5">
             <div className="bg-white/10 p-0.5 rounded-full backdrop-blur-sm">
                <MessageCircle className="w-[22px] h-[22px] text-white fill-white" />
             </div>
             <span className="text-white text-[10px] font-semibold drop-shadow-md">2305</span>
           </div>

           {/* Bookmark */}
           <div className="flex flex-col items-center gap-0.5">
             <Bookmark className="w-[22px] h-[22px] text-white fill-white" />
             <span className="text-white text-[10px] font-semibold drop-shadow-md">8420</span>
           </div>

           {/* Share */}
           <div className="flex flex-col items-center gap-0.5">
             <Forward className="w-[24px] h-[24px] text-white fill-white" />
             <span className="text-white text-[10px] font-semibold drop-shadow-md">1.2K</span>
           </div>

           {/* Music Disc */}
           <div className="mt-1 animate-[spin_5s_linear_infinite]">
             <div className="w-[36px] h-[36px] rounded-full bg-[#262626] border-[5px] border-[#1a1a1a] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-900"></div>
                <img src={storyboard[currentFrameIndex].imageUrl} className="w-4 h-4 rounded-full object-cover z-10" />
             </div>
           </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-[70px] left-0 right-12 px-3 z-30 flex flex-col justify-end text-white text-left">
           <div className="text-[13px] font-bold mb-1">@kinoko942</div>
           <div className="text-[11px] leading-snug mb-1.5 opacity-90">
             Video_1758883998988
             <br />
             <span className="font-bold">#fyp</span>
           </div>
           <div className="flex items-center gap-1.5 mb-1.5">
             <Music2 className="w-2.5 h-2.5" />
             <div className="overflow-hidden w-32">
               <div className="whitespace-nowrap animate-marquee text-[11px]">
                 Original Sound - kinoko942 &nbsp;&nbsp;&nbsp; Original Sound - kinoko942
               </div>
             </div>
           </div>
        </div>

        {/* "Full Screen" Overlay Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1 opacity-0 hover:opacity-100 transition-opacity">
           <div className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <Maximize className="w-4 h-4 text-white" />
           </div>
           <span className="text-white text-[9px] bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">Full Screen</span>
        </div>

        {/* Player Controls (Bottom) */}
        <div className="absolute bottom-[40px] left-0 right-0 z-40">
           {/* Progress Bar */}
           <div className="h-[2px] bg-white/30 w-full relative group cursor-pointer">
              <div className="absolute top-0 left-0 h-full bg-white w-[45%]"></div>
              <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
           
           {/* Controls Row */}
           <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-2">
                 <Pause className="w-3.5 h-3.5 text-white fill-white" />
                 <span className="text-white/90 text-[10px] font-medium tracking-wide">00:04 / 00:15</span>
              </div>
              <div className="flex items-center gap-3">
                 <Volume2 className="w-3.5 h-3.5 text-white" />
                 <Maximize className="w-3 h-3 text-white" />
              </div>
           </div>
        </div>

        {/* Bottom Nav Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-black border-t border-white/10 flex items-center justify-between px-4 z-50">
           <div className="flex flex-col items-center gap-0.5 cursor-pointer">
             <Home className="w-4 h-4 text-white" strokeWidth={2.5} />
             <span className="text-[8px] text-white font-medium">Home</span>
           </div>
           <div className="flex flex-col items-center gap-0.5 cursor-pointer opacity-50 hover:opacity-100">
             <Users className="w-4 h-4 text-white" strokeWidth={2.5} />
             <span className="text-[8px] text-white font-medium">Friends</span>
           </div>
           
           <div className="w-[36px] h-[24px] relative flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
             <div className="absolute left-0 w-full h-full bg-[#25F4EE] rounded-[6px] translate-x-[-2px]"></div>
             <div className="absolute left-0 w-full h-full bg-[#FE2C55] rounded-[6px] translate-x-[2px]"></div>
             <div className="absolute left-0 w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                <Plus className="w-3.5 h-3.5 text-black" strokeWidth={3} />
             </div>
           </div>

           <div className="flex flex-col items-center gap-0.5 cursor-pointer opacity-50 hover:opacity-100">
             <MessageCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
             <span className="text-[8px] text-white font-medium">Inbox</span>
           </div>
           <div className="flex flex-col items-center gap-0.5 cursor-pointer opacity-50 hover:opacity-100">
             <User className="w-4 h-4 text-white" strokeWidth={2.5} />
             <span className="text-[8px] text-white font-medium">Me</span>
           </div>
        </div>

      </div>
    </div>
  );
}