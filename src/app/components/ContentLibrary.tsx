import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Eye,
  Play,
  AlertCircle,
  X,
  Calendar,
  TrendingUp,
  Copy,
  FileText,
  Save,
  Sparkles,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Search,
  RefreshCw,
  Info,
  Flame,
  Code,
} from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { useSimulationTrigger } from './SimulationPageWrapper';

interface ContentLibraryProps {
  onNavigate?: (page: string) => void;
  conversations?: Array<{
    id: string;
    title: string;
    messages: any[];
    createdAt: Date;
    updatedAt: Date;
  }>;
  currentConversationId?: string | null;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
}

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  saves: number;
  shares: number;
  contentType: string;
  structure: string;
  hookType: string;
  visualStyle: string[];
  audioStyle: string[];
  creatorPersona: string;
  needsReview?: boolean;
  performance?: 'viral' | 'high-perf' | 'standard'; // Add performance tier
}

export function ContentLibrary({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: ContentLibraryProps) {
  const { trigger } = useSimulationTrigger();

  // Simulation Trigger: 30s dwell
  React.useEffect(() => {
    const timer = setTimeout(() => {
      trigger();
    }, 30000);
    return () => clearTimeout(timer);
  }, [trigger]);

  const [timeRange, setTimeRange] = useState<'30' | '60' | '90'>('30');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showReuseModal, setShowReuseModal] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null); // Track hovered card
  const [showBadgeDemo, setShowBadgeDemo] = useState(false); // Show badge explanation demo
  const [showEngineerModal, setShowEngineerModal] = useState(false); // Show engineer documentation modal

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filters
  const [filterContentType, setFilterContentType] = useState<string>('all');
  const [filterStructure, setFilterStructure] = useState<string>('all');
  const [filterDate, setFilterDate] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock data
  const mockVideos: Video[] = [
    {
      id: '1',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
      title: 'This coding technique will save you hours 💻✨ #Tech #Coding #Programming #Tutorial',
      date: '2024-12-28',
      views: 52000,
      likes: 1200,
      comments: 50,
      saves: 300,
      shares: 200,
      contentType: 'Tech Tutorial',
      structure: 'Three Segments',
      hookType: 'Problem Statement',
      visualStyle: ['Screen Recording', 'Code Editor'],
      audioStyle: ['Voice Over', 'Background Music'],
      creatorPersona: 'Expert Educator',
      performance: 'viral', // L1 Viral
    },
    {
      id: '2',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      title: 'You won\'t believe what this new feature can do 🔥 #Tech #Product #Software #Demo',
      date: '2024-12-26',
      views: 48000,
      likes: 1100,
      comments: 45,
      saves: 250,
      shares: 180,
      contentType: 'Product Demo',
      structure: 'Single Segment',
      hookType: 'Bold Claim',
      visualStyle: ['Talking Head', 'Product Showcase'],
      audioStyle: ['Direct Voice'],
      creatorPersona: 'Enthusiast Reviewer',
      performance: 'high-perf', // L2 High-Perf
    },
    {
      id: '3',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      title: 'How do you debug faster? Here\'s my secret 🐛 #Tech #Programming #Debugging #Tips',
      date: '2024-12-24',
      views: 45000,
      likes: 1000,
      comments: 40,
      saves: 200,
      shares: 150,
      contentType: 'Tech Tutorial',
      structure: 'Two Segments',
      hookType: 'Question',
      visualStyle: ['Screen Recording'],
      audioStyle: ['Voice Over'],
      creatorPersona: 'Expert Educator',
      performance: 'standard', // Standard - will show Diagnose button on hover
    },
    {
      id: '4',
      thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400',
      title: 'Breaking: AI just changed everything again 🤯 #Tech #AI #News #Innovation',
      date: '2024-12-22',
      views: 51000,
      likes: 1300,
      comments: 55,
      saves: 350,
      shares: 250,
      contentType: 'Tech News',
      structure: 'Three Segments',
      hookType: 'Trending Topic',
      visualStyle: ['B-Roll', 'Graphics'],
      audioStyle: ['Voice Over', 'Sound Effects'],
      creatorPersona: 'News Anchor',
    },
    {
      id: '5',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400',
      title: 'Unboxing the device everyone\'s talking about 📦✨ #Unboxing #Tech #Review #Gadgets',
      date: '2024-12-20',
      views: 47000,
      likes: 1200,
      comments: 50,
      saves: 300,
      shares: 200,
      contentType: 'Product Review',
      structure: 'Three Segments',
      hookType: 'Unboxing Reveal',
      visualStyle: ['Talking Head', 'Product Showcase'],
      audioStyle: ['Direct Voice'],
      creatorPersona: 'Enthusiast Reviewer',
    },
    {
      id: '6',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
      title: 'Master data structures in 60 seconds 📊 #Tech #Coding #DataStructures #Learn',
      date: '2024-12-18',
      views: 49000,
      likes: 1100,
      comments: 45,
      saves: 250,
      shares: 180,
      contentType: 'Tech Tutorial',
      structure: 'Two Segments',
      hookType: 'Problem Statement',
      visualStyle: ['Screen Recording', 'Code Editor'],
      audioStyle: ['Voice Over'],
      creatorPersona: 'Expert Educator',
    },
    {
      id: '7',
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
      title: 'This integration will blow your mind 🚀 #Tech #Productivity #Software #Tools',
      date: '2024-12-16',
      views: 44000,
      likes: 1000,
      comments: 40,
      saves: 200,
      shares: 150,
      contentType: 'Product Demo',
      structure: 'Single Segment',
      hookType: 'Bold Claim',
      visualStyle: ['Product Showcase', 'Graphics'],
      audioStyle: ['Direct Voice', 'Background Music'],
      creatorPersona: 'Enthusiast Reviewer',
    },
    {
      id: '8',
      thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
      title: 'Cybersecurity alert: What you need to know 🔒 #Tech #Cybersecurity #News #Security',
      date: '2024-12-14',
      views: 53000,
      likes: 1300,
      comments: 55,
      saves: 350,
      shares: 250,
      contentType: 'Tech News',
      structure: 'Three Segments',
      hookType: 'Trending Topic',
      visualStyle: ['Talking Head', 'B-Roll'],
      audioStyle: ['Voice Over', 'Sound Effects'],
      creatorPersona: 'News Anchor',
    },
    {
      id: '9',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
      title: 'What is machine learning actually? Simple explanation 🤖 #Tech #AI #MachineLearning #Education',
      date: '2024-12-12',
      views: 46000,
      likes: 1200,
      comments: 50,
      saves: 300,
      shares: 200,
      contentType: 'Tech Tutorial',
      structure: 'Three Segments',
      hookType: 'Question',
      visualStyle: ['Screen Recording'],
      audioStyle: ['Voice Over'],
      creatorPersona: 'Expert Educator',
    },
  ];

  const formatNumber = (num: number) => {
    if (num === undefined || num === null) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const handleSave = () => {
    if (editingVideo) {
      // In real app, save to backend
      setSelectedVideo(editingVideo);
      setEditingVideo(null);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };

  const handleCancel = () => {
    setEditingVideo(null);
  };

  const handleEdit = () => {
    if (selectedVideo) {
      setEditingVideo({ ...selectedVideo });
    }
  };

  const filteredVideos = mockVideos.filter((video) => {
    if (filterContentType !== 'all' && video.contentType !== filterContentType) return false;
    if (filterStructure !== 'all' && video.structure !== filterStructure) return false;
    if (searchQuery && !video.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    // Date filter can be implemented here
    return true;
  });

  // Pagination calculations
  const totalVideos = filteredVideos.length;
  const totalPages = Math.ceil(totalVideos / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);

  const videoCount = timeRange === '30' ? 30 : timeRange === '60' ? 60 : 90;

  return (
    <div className="flex h-screen bg-[#F8F9FA]">
      {/* Sidebar */}
      <SidebarPro
        activeItem="library"
        onNavigate={onNavigate}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={onSelectConversation}
        onDeleteConversation={onDeleteConversation}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-[#E5E7EB] px-8 py-5">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[#111827] mb-1" style={{ fontSize: '24px', fontWeight: '700' }}>
                Content Library
              </h1>
              <p className="text-[#374151]" style={{ fontSize: '13px' }}>
                Review how your content is categorized and structured by the system.
              </p>
            </div>
            <button
              onClick={() => {
                // In real app: trigger sync from TikTok
              }}
              className="px-4 py-2.5 rounded-xl bg-[#0F766E] text-white hover:bg-[#0d6560] transition-colors flex items-center gap-2"
              style={{ fontSize: '13px', fontWeight: '600' }}
            >
              <RefreshCw className="w-4 h-4" />
              Sync Content
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white border-b border-[#E5E7EB] px-8 py-4">
          <div className="flex items-center justify-between mb-3">
            {/* Filters */}
            <div className="flex items-center gap-2">
              <select
                value={filterContentType}
                onChange={(e) => setFilterContentType(e.target.value)}
                className="px-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                style={{ fontSize: '13px', fontWeight: '500' }}
              >
                <option value="all">Content Type</option>
                <option value="Tech Tutorial">Tech Tutorial</option>
                <option value="Product Demo">Product Demo</option>
                <option value="Product Review">Product Review</option>
                <option value="Tech News">Tech News</option>
              </select>

              <select
                value={filterStructure}
                onChange={(e) => setFilterStructure(e.target.value)}
                className="px-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                style={{ fontSize: '13px', fontWeight: '500' }}
              >
                <option value="all">Structure</option>
                <option value="Single Segment">Single Segment</option>
                <option value="Two Segments">Two Segments</option>
                <option value="Three Segments">Three Segments</option>
              </select>

              <select
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="px-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                style={{ fontSize: '13px', fontWeight: '500' }}
              >
                <option value="all">Date</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="older">Older</option>
              </select>

              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title..."
                  className="pl-9 pr-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#374151] placeholder:text-[#9CA3AF] hover:bg-[#F8F9FA] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-0 transition-colors"
                  style={{ fontSize: '13px', fontWeight: '500', width: '200px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid gap-4 grid-cols-4">
            {paginatedVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className={`bg-white rounded-xl border overflow-hidden cursor-pointer transition-all ${
                  selectedVideo?.id === video.id
                    ? 'border-[#0F766E] shadow-lg'
                    : 'border-[#E5E7EB] hover:border-[#9CA3AF] shadow-sm'
                }`}
                onMouseEnter={() => setHoveredCardId(video.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/16] bg-[#F8F9FA]">
                  <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                  
                  {/* Performance Badge - Top Left (Restrained Style) */}
                  {video.performance === 'viral' && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-purple-100 border border-purple-200">
                      <span className="text-purple-700" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Viral
                      </span>
                    </div>
                  )}
                  {video.performance === 'high-perf' && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                      <span className="text-emerald-700" style={{ fontSize: '11px', fontWeight: '600' }}>
                        High-Perf
                      </span>
                    </div>
                  )}
                  
                  {/* Views Badge - Top Right */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/80 text-white flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span style={{ fontSize: '11px', fontWeight: '600' }}>
                      {formatNumber(video.views)}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Diagnose Button - Bottom (Only for standard performance on hover) */}
                  {video.performance === 'standard' && hoveredCardId === video.id && (
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // In real app: navigate to diagnostic
                          console.log('Diagnose video:', video.id);
                        }}
                        className="w-full py-2 rounded-xl bg-white/90 hover:bg-white border border-white/50 backdrop-blur-sm text-[#0F766E] transition-all flex items-center justify-center gap-1.5 shadow-lg"
                        style={{ fontSize: '12px', fontWeight: '600' }}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Diagnose
                      </button>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-3">
                  {/* Title */}
                  <div className="mb-3">
                    <p className="text-[#111827] line-clamp-2" style={{ fontSize: '12px', fontWeight: '600', lineHeight: '1.4' }}>
                      {video.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3 h-3 text-[#9CA3AF]" />
                    <span className="text-[#9CA3AF]" style={{ fontSize: '11px' }}>
                      {video.date}
                    </span>
                  </div>

                  {/* Interaction Metrics */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-1 text-[#9CA3AF]">
                      <Heart className="w-3 h-3" />
                      <span style={{ fontSize: '10px' }}>{formatNumber(video.likes)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#9CA3AF]">
                      <MessageCircle className="w-3 h-3" />
                      <span style={{ fontSize: '10px' }}>{formatNumber(video.comments)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#9CA3AF]">
                      <Bookmark className="w-3 h-3" />
                      <span style={{ fontSize: '10px' }}>{formatNumber(video.saves)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#9CA3AF]">
                      <Share2 className="w-3 h-3" />
                      <span style={{ fontSize: '10px' }}>{formatNumber(video.shares)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-[#9CA3AF]" style={{ fontSize: '10px', fontWeight: '600' }}>
                        Content Type
                      </span>
                      <span className="text-[#111827] flex-1 text-right" style={{ fontSize: '11px', fontWeight: '600' }}>
                        {video.contentType}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#9CA3AF]" style={{ fontSize: '10px', fontWeight: '600' }}>
                        Structure
                      </span>
                      <span className="text-[#374151] flex-1 text-right" style={{ fontSize: '11px' }}>
                        {video.structure}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#9CA3AF]" style={{ fontSize: '10px', fontWeight: '600' }}>
                        Hook Type
                      </span>
                      <span className="text-[#374151] flex-1 text-right" style={{ fontSize: '11px' }}>
                        {video.hookType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - Always visible */}
          <div className="mt-8 flex items-center justify-between">
            {/* Results info */}
            <div className="text-[#374151]" style={{ fontSize: '13px' }}>
              Showing {startIndex + 1}-{Math.min(endIndex, totalVideos)} of {totalVideos} videos
            </div>

            {/* Pagination controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-xl border transition-colors flex items-center gap-1 ${
                  currentPage === 1
                    ? 'border-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
                    : 'border-[#E5E7EB] text-[#374151] hover:bg-[#F8F9FA] cursor-pointer'
                }`}
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl transition-colors ${
                      currentPage === page
                        ? 'bg-[#0F766E] text-white'
                        : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#F8F9FA]'
                    }`}
                    style={{ fontSize: '13px', fontWeight: '600' }}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || totalPages <= 1}
                className={`px-3 py-2 rounded-xl border transition-colors flex items-center gap-1 ${
                  currentPage === totalPages || totalPages <= 1
                    ? 'border-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
                    : 'border-[#E5E7EB] text-[#374151] hover:bg-[#F8F9FA] cursor-pointer'
                }`}
                style={{ fontSize: '13px', fontWeight: '600' }}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Panel */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => {
          setSelectedVideo(null);
          setEditingVideo(null);
        }}>
          <div className="bg-white rounded-xl w-[600px] max-h-[90vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Panel Header */}
            <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between">
              <h3 className="text-[#111827]" style={{ fontSize: '18px', fontWeight: '700' }}>
                Video Details
              </h3>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  setEditingVideo(null);
                }}
                className="text-[#374151] hover:text-[#111827] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="mx-6 mt-4 p-3 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0]">
                <p className="text-[#059669]" style={{ fontSize: '12px', fontWeight: '500' }}>
                  Got it. This helps the system better understand your content going forward.
                </p>
              </div>
            )}

            {/* Panel Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Interaction Snapshot */}
              <div>
                <div className="text-[#9CA3AF] mb-3" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Interaction Snapshot
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {/* Views */}
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                    <div className="flex items-center gap-2 mb-1">
                      <Eye className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Views
                      </span>
                    </div>
                    <div className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
                      {formatNumber(selectedVideo.views)}
                    </div>
                  </div>

                  {/* Likes */}
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                    <div className="flex items-center gap-2 mb-1">
                      <Heart className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Likes
                      </span>
                    </div>
                    <div className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
                      {formatNumber(selectedVideo.likes)}
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageCircle className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Comments
                      </span>
                    </div>
                    <div className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
                      {formatNumber(selectedVideo.comments)}
                    </div>
                  </div>

                  {/* Saves */}
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                    <div className="flex items-center gap-2 mb-1">
                      <Bookmark className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Saves
                      </span>
                    </div>
                    <div className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
                      {formatNumber(selectedVideo.saves)}
                    </div>
                  </div>

                  {/* Shares */}
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                    <div className="flex items-center gap-2 mb-1">
                      <Share2 className="w-4 h-4 text-[#9CA3AF]" />
                      <span className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Shares
                      </span>
                    </div>
                    <div className="text-[#111827]" style={{ fontSize: '16px', fontWeight: '700' }}>
                      {formatNumber(selectedVideo.shares)}
                    </div>
                  </div>
                </div>
              </div>

              {/* How this video is understood */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#111827]" style={{ fontSize: '14px', fontWeight: '700' }}>
                    How this video is understood
                  </div>
                  {!editingVideo && (
                    <button
                      onClick={handleEdit}
                      className="text-[#0F766E] hover:text-[#0d6560] transition-colors"
                      style={{ fontSize: '12px', fontWeight: '600' }}
                    >
                      Edit
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Content Type */}
                  <div>
                    <label className="block text-[#9CA3AF] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Content Type
                    </label>
                    {editingVideo ? (
                      <select
                        value={editingVideo.contentType}
                        onChange={(e) => setEditingVideo({ ...editingVideo, contentType: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#111827]"
                        style={{ fontSize: '13px' }}
                      >
                        <option>Tech Tutorial</option>
                        <option>Product Demo</option>
                        <option>Product Review</option>
                        <option>Tech News</option>
                        <option>Lifestyle Vlog</option>
                      </select>
                    ) : (
                      <div className="px-3 py-2 rounded-xl bg-[#F8F9FA] text-[#111827]" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {selectedVideo.contentType}
                      </div>
                    )}
                  </div>

                  {/* Structure Type */}
                  <div>
                    <label className="block text-[#9CA3AF] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Structure Type
                    </label>
                    {editingVideo ? (
                      <select
                        value={editingVideo.structure}
                        onChange={(e) => setEditingVideo({ ...editingVideo, structure: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#111827]"
                        style={{ fontSize: '13px' }}
                      >
                        <option>Single Segment</option>
                        <option>Two Segments</option>
                        <option>Three Segments</option>
                        <option>Loop Segment</option>
                      </select>
                    ) : (
                      <div className="px-3 py-2 rounded-xl bg-[#F8F9FA] text-[#111827]" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {selectedVideo.structure}
                      </div>
                    )}
                  </div>

                  {/* Hook Type */}
                  <div>
                    <label className="block text-[#9CA3AF] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Hook Type
                    </label>
                    {editingVideo ? (
                      <select
                        value={editingVideo.hookType}
                        onChange={(e) => setEditingVideo({ ...editingVideo, hookType: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#111827]"
                        style={{ fontSize: '13px' }}
                      >
                        <option>Problem Statement</option>
                        <option>Bold Claim</option>
                        <option>Question</option>
                        <option>Trending Topic</option>
                        <option>Unboxing Reveal</option>
                      </select>
                    ) : (
                      <div className="px-3 py-2 rounded-xl bg-[#F8F9FA] text-[#111827]" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {selectedVideo.hookType}
                      </div>
                    )}
                  </div>

                  {/* Creator Persona */}
                  <div>
                    <label className="block text-[#9CA3AF] mb-2" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      Creator Persona
                    </label>
                    {editingVideo ? (
                      <select
                        value={editingVideo.creatorPersona}
                        onChange={(e) => setEditingVideo({ ...editingVideo, creatorPersona: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#E5E7EB] bg-white text-[#111827]"
                        style={{ fontSize: '13px' }}
                      >
                        <option>Expert Educator</option>
                        <option>Enthusiast Reviewer</option>
                        <option>News Anchor</option>
                        <option>Casual Friend</option>
                      </select>
                    ) : (
                      <div className="px-3 py-2 rounded-xl bg-[#F8F9FA] text-[#111827]" style={{ fontSize: '13px', fontWeight: '600' }}>
                        {selectedVideo.creatorPersona}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Reuse Structure Button */}
              {!editingVideo && (
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <button
                    onClick={() => setShowReuseModal(true)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F766E] text-white hover:bg-[#0d6560] transition-colors flex items-center justify-center gap-2"
                    style={{ fontSize: '14px', fontWeight: '600' }}
                  >
                    <Copy className="w-4 h-4" />
                    Reuse this structure
                  </button>
                  <p className="text-[#9CA3AF] text-center mt-2" style={{ fontSize: '11px', lineHeight: '1.5' }}>
                    Apply this content pattern to a new video
                  </p>
                </div>
              )}
            </div>

            {/* Panel Footer */}
            {editingVideo && (
              <div className="px-6 py-4 border-t border-[#E5E7EB] flex items-center gap-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-[#374151] hover:bg-[#F8F9FA] transition-colors"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#0F766E] text-white hover:bg-[#0d6560] transition-colors"
                  style={{ fontSize: '13px', fontWeight: '600' }}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reuse Structure Modal */}
      {showReuseModal && selectedVideo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowReuseModal(false)}>
          <div className="bg-white rounded-xl w-[500px] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#111827]" style={{ fontSize: '18px', fontWeight: '700' }}>
                  How would you like to reuse this structure?
                </h3>
                <button
                  onClick={() => setShowReuseModal(false)}
                  className="text-[#374151] hover:text-[#111827] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[#374151]" style={{ fontSize: '13px' }}>
                This pattern works well for you. Choose how to apply it to new content.
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-3">
              {/* Option 1: Re-shoot with new topic */}
              <button
                className="w-full p-4 rounded-xl border-2 border-[#E5E7EB] hover:border-[#0F766E] hover:bg-[#F8F9FA] transition-all text-left"
                onClick={() => {
                  // Navigate to script generation with structure
                  setShowReuseModal(false);
                  // In real app: onNavigate?.('copilot') with structure data
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#111827] mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
                      Re-shoot with a new topic
                    </div>
                    <p className="text-[#374151]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      Generate a new script using this structure. Keep the same pattern, but with different content.
                    </p>
                  </div>
                </div>
              </button>

              {/* Option 2: Apply to upcoming slot */}
              <button
                className="w-full p-4 rounded-xl border-2 border-[#E5E7EB] hover:border-[#0F766E] hover:bg-[#F8F9FA] transition-all text-left"
                onClick={() => {
                  // Navigate to scheduling with structure
                  setShowReuseModal(false);
                  // In real app: onNavigate?.('scheduling') with structure data
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#111827] mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
                      Apply to an upcoming slot
                    </div>
                    <p className="text-[#374151]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      Link this structure to a future posting slot. The slot will be marked as structure-based.
                    </p>
                  </div>
                </div>
              </button>

              {/* Option 3: Save as personal template */}
              <button
                className="w-full p-4 rounded-xl border-2 border-[#E5E7EB] hover:border-[#0F766E] hover:bg-[#F8F9FA] transition-all text-left"
                onClick={() => {
                  // Save to My Templates
                  setShowReuseModal(false);
                  // In real app: save structure to templates
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center flex-shrink-0">
                    <Save className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#111827] mb-1" style={{ fontSize: '15px', fontWeight: '700' }}>
                      Save as a personal template
                    </div>
                    <p className="text-[#374151]" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      Add to your reusable structures library. Access it anytime from your templates.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* What will be copied */}
            <div className="px-6 pb-6">
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                <div className="text-[#111827] mb-2" style={{ fontSize: '12px', fontWeight: '700' }}>
                  What gets copied:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#374151]" style={{ fontSize: '11px' }}>
                      {selectedVideo.structure}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#374151]" style={{ fontSize: '11px' }}>
                      {selectedVideo.hookType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#374151]" style={{ fontSize: '11px' }}>
                      Content rhythm
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#059669]" />
                    <span className="text-[#374151]" style={{ fontSize: '11px' }}>
                      Video duration range
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Badge System Demo Modal */}
      {showBadgeDemo && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-8" onClick={() => setShowBadgeDemo(false)}>
          <div className="bg-[#F8F9FA] rounded-xl w-[900px] max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-[#E5E7EB] bg-white sticky top-0 z-10 rounded-t-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[#111827]" style={{ fontSize: '20px', fontWeight: '700' }}>
                  Performance Badge System
                </h3>
                <button
                  onClick={() => setShowBadgeDemo(false)}
                  className="text-[#374151] hover:text-[#111827] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[#374151]" style={{ fontSize: '14px' }}>
                Understand how we categorize your content based on performance metrics.
              </p>
            </div>

            {/* Demo Section */}
            <div className="p-8">
              {/* Demo Card Container */}
              <div className="bg-white rounded-xl p-6 mb-6 border border-[#E5E7EB]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span className="text-[#9CA3AF]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Interactive Demo
                  </span>
                </div>

                {/* Video Card with Badge Demo */}
                <div className="relative max-w-[320px] mx-auto">
                  <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-lg">
                    {/* Thumbnail */}
                    <div className="relative aspect-[9/16] bg-[#f5f5f5]">
                      <img
                        src="https://images.unsplash.com/photo-1566915896913-549d796d2166?w=600"
                        alt="Demo video"
                        className="w-full h-full object-cover"
                      />

                      {/* L1 Viral Badge with Info Icon */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                        <div className="px-2.5 py-1 rounded-full bg-purple-100 border border-purple-200">
                          <span className="text-purple-700" style={{ fontSize: '11px', fontWeight: '600' }}>
                            Viral
                          </span>
                        </div>
                        
                        {/* Info Icon */}
                        <div className="relative group">
                          <div className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all cursor-pointer">
                            <Info className="w-4 h-4 text-white" />
                          </div>

                          {/* Glassmorphism Tooltip */}
                          <div className="absolute top-11 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                            <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-[#3a3a3a] rounded-xl shadow-2xl p-4 min-w-[280px]">
                              {/* Tooltip Header */}
                              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2a2a2a]">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                <span className="text-[#e0e0e0]" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                                  System Logic
                                </span>
                              </div>

                              {/* Chinese Content */}
                              <div className="space-y-2.5">
                                <div className="text-white/90 mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
                                  打标规则：
                                </div>
                                
                                {/* L1 Rule */}
                                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                  <div className="flex-shrink-0 mt-0.5">
                                    <span style={{ fontSize: '14px' }}>🟣</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-purple-300" style={{ fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>
                                      L1 破圈
                                    </div>
                                    <div className="text-[#b0b0b0]" style={{ fontSize: '11px', fontWeight: '500' }}>
                                      播放量 &gt; 10x 粉丝
                                    </div>
                                  </div>
                                </div>

                                {/* L2 Rule */}
                                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                                  <div className="flex-shrink-0 mt-0.5">
                                    <span style={{ fontSize: '14px' }}>🟢</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-emerald-300" style={{ fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>
                                      L2 优质
                                    </div>
                                    <div className="text-[#909090]" style={{ fontSize: '11px', fontWeight: '500' }}>
                                      播放量 &gt; 2x 粉丝
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Tooltip Arrow */}
                              <div className="absolute -top-2 left-6 w-4 h-4 bg-[#1a1a1a]/95 border-l border-t border-[#3a3a3a] rotate-45"></div>
                            </div>
                          </div>

                          {/* Simulated Cursor (Static) */}
                          <div className="absolute -right-1 -bottom-1 pointer-events-none group-hover:block hidden">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                              <path d="M5 3L19 12L12 14L9 21L5 3Z" fill="white" stroke="black" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Views Badge */}
                      <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/80 text-white flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span style={{ fontSize: '11px', fontWeight: '600' }}>
                          458K
                        </span>
                      </div>

                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
                          <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-4">
                      <p className="text-[#111827] mb-2 line-clamp-2" style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.4' }}>
                        AI coding workflow tips that changed my dev life 💻✨
                      </p>
                      <div className="flex items-center gap-2 text-[#9CA3AF]">
                        <Calendar className="w-3 h-3" />
                        <span style={{ fontSize: '11px' }}>Jan 15, 2024</span>
                      </div>
                    </div>
                  </div>

                  {/* Annotation */}
                  <div className="absolute -right-52 top-16 w-44">
                    <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#374151] rounded-xl p-3 shadow-xl">
                      <div className="text-[#e0e0e0] mb-1" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Hover the (i) icon
                      </div>
                      <div className="text-[#9CA3AF]" style={{ fontSize: '10px', fontWeight: '500', lineHeight: '1.5' }}>
                        Tooltip reveals backend tagging logic in Chinese
                      </div>
                    </div>
                    <div className="absolute -left-3 top-6 w-3 h-0.5 bg-[#374151]"></div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
                  <p className="text-[#374151] text-center" style={{ fontSize: '12px', lineHeight: '1.6' }}>
                    Hover over the <span className="font-semibold">(i) icon</span> to see the system's tagging logic
                  </p>
                </div>
              </div>

              {/* Badge Explanation Grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Viral Badge */}
                <div className="bg-white rounded-xl p-5 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-2.5 py-1 rounded-full bg-purple-100 border border-purple-200">
                      <span className="text-purple-700" style={{ fontSize: '11px', fontWeight: '600' }}>
                        Viral
                      </span>
                    </div>
                  </div>
                  <h4 className="text-[#111827] mb-2" style={{ fontSize: '14px', fontWeight: '700' }}>
                    L1 Viral Content
                  </h4>
                  <p className="text-[#374151] mb-3" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    Content that has significantly outperformed expectations and reached a wider audience.
                  </p>
                  <div className="pt-3 border-t border-[#E5E7EB]">
                    <div className="text-[#9CA3AF] mb-1" style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase' }}>
                      Criteria
                    </div>
                    <div className="text-[#111827]" style={{ fontSize: '11px', fontWeight: '500' }}>
                      Views &gt; 10x followers
                    </div>
                  </div>
                </div>

                {/* High-Perf Badge */}
                <div className="bg-white rounded-xl p-5 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                      <span className="text-emerald-700" style={{ fontSize: '11px', fontWeight: '600' }}>
                        High-Perf
                      </span>
                    </div>
                  </div>
                  <h4 className="text-[#111827] mb-2" style={{ fontSize: '14px', fontWeight: '700' }}>
                    L2 High Performance
                  </h4>
                  <p className="text-[#374151] mb-3" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    Well-performing content showing strong engagement with your existing audience.
                  </p>
                  <div className="pt-3 border-t border-[#E5E7EB]">
                    <div className="text-[#9CA3AF] mb-1" style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase' }}>
                      Criteria
                    </div>
                    <div className="text-[#111827]" style={{ fontSize: '11px', fontWeight: '500' }}>
                      Views &gt; 2x followers
                    </div>
                  </div>
                </div>

                {/* Standard */}
                <div className="bg-white rounded-xl p-5 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                  <h4 className="text-[#111827] mb-2" style={{ fontSize: '14px', fontWeight: '700' }}>
                    Standard Content
                  </h4>
                  <p className="text-[#374151] mb-3" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    Content awaiting performance analysis. Click "Diagnose" to get insights.
                  </p>
                  <div className="pt-3 border-t border-[#E5E7EB]">
                    <div className="text-[#9CA3AF] mb-1" style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase' }}>
                      Action
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#0F766E]" />
                      <span className="text-[#111827]" style={{ fontSize: '11px', fontWeight: '500' }}>
                        Diagnose available on hover
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engineer Documentation Modal */}
      {showEngineerModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowEngineerModal(false)}>
          <div className="bg-white rounded-xl w-[900px] max-h-[90vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F766E] flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#111827]" style={{ fontSize: '18px', fontWeight: '700' }}>
                    工程师看
                  </h3>
                  <p className="text-[#374151]" style={{ fontSize: '12px' }}>
                    TikTok Video Performance Labeling System
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowEngineerModal(false)}
                className="text-[#374151] hover:text-[#111827] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-8" style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div className="prose prose-sm max-w-none">
                {/* Title */}
                <h1 className="text-[#111827] mb-2" style={{ fontSize: '24px', fontWeight: '700' }}>
                  TikTok 视频表现打标（最终版：含全部增强项）
                </h1>
                
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] mb-6" style={{ fontSize: '13px' }}>
                  <strong>目标：</strong>在<strong>不依赖历史 24h/72h 快照</strong>的前提下，仅使用"API 当前可取字段 + 发布时间"，对视频进行可更新、可解释的表现打标（L1 破圈 / L2 优质）。
                </div>

                <hr className="my-6 border-[#E5E7EB]" />

                {/* Section 1 */}
                <h2 className="text-[#111827] mt-8 mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                  1. 输入数据（全部来自 API 或系统时间）
                </h2>

                <h3 className="text-[#111827] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  账号级（User）
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">F</code>：follower_count（当前粉丝数）</li>
                </ul>

                <h3 className="text-[#111827] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  视频级（Video）
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">V</code>：view_count（当前播放量）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">L</code>：like_count（当前点赞数）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">C</code>：comment_count（当前评论数）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">S</code>：share_count（当前分享数）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">D</code>：duration（视频时长，单位：秒）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">t</code>：create_time（发布时间，Unix timestamp，秒）</li>
                </ul>

                <h3 className="text-[#111827] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  系统
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#374151]">
                  <li><code className="px-2 py-0.5 rounded bg-[#F8F9FA] text-[#111827] font-mono text-[12px]">Now</code>：当前时间戳（秒）</li>
                </ul>

                <hr className="my-6 border-[#E5E7EB]" />

                {/* Section 2 */}
                <h2 className="text-[#1a1a1a] mt-8 mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                  2. 中间变量定义
                </h2>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  2.1 视频年龄（小时）
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">T</code>：发布至今的小时数</li>
                </ul>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  T = (Now - t) / 3600
                </div>
                <div className="p-3 rounded-lg bg-[#fffbeb] border border-[#fde68a] text-[#92400e]" style={{ fontSize: '13px' }}>
                  <strong>约束：</strong>若 <code className="px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#92400e] font-mono text-[12px]">T &lt; 0</code> 视为数据异常，直接不打标；若 <code className="px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#92400e] font-mono text-[12px]">T &lt; 0.1h</code>（6分钟）可标记为 <code className="px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#92400e] font-mono text-[12px]">TooEarly</code> 暂不打标（可选）。
                </div>

                <hr className="my-6 border-[#e0e0e0]" />

                {/* Section 3 */}
                <h2 className="text-[#1a1a1a] mt-8 mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                  3. 核心计算（含全部增强）
                </h2>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  3.1 时间归一化：等效 24h 播放
                </h3>
                <p className="text-[#666666] mb-3">
                  为了让不同发布时间的视频可比，将当前播放量换算为"等效 24h 播放量"。
                </p>
                <p className="text-[#666666] mb-3">
                  <strong>参数：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#666666] mb-3">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">t0 = 24</code>（标准窗，小时）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">s_max = 6</code>（最大放大倍数，防止刚发几分钟被夸大）</li>
                </ul>
                <p className="text-[#666666] mb-3">
                  <strong>放大系数：</strong>
                </p>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  s(T) = min( t0 / max(T, 1), s_max )
                </div>
                <p className="text-[#666666] mb-3">
                  <strong>等效 24h 播放量：</strong>
                </p>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  V* = V · s(T)
                </div>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  3.2 小号保护：粉丝下限
                </h3>
                <p className="text-[#666666] mb-3">
                  <strong>参数：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#666666] mb-3">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">F_min = 1000</code></li>
                </ul>
                <p className="text-[#666666] mb-3">
                  <strong>修正粉丝数：</strong>
                </p>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  F' = max(F, F_min)
                </div>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  3.3 相对表现倍率（主指标）
                </h3>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  R = V* / F'
                </div>
                <p className="text-[#666666] mb-3">
                  <strong>解释：</strong><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">R</code> 越大，说明该视频在"等效 24h"尺度下，相对当前粉丝体量的触达越强。
                </p>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  3.4 互动质量增强：加权互动率（Quality Gate）
                </h3>
                <p className="text-[#666666] mb-3">
                  <strong>参数（可调）：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#666666] mb-3">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">w_c = 3</code>（评论权重）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">w_s = 4</code>（分享权重）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">ER_min = 0.01</code>（最低互动率阈值，1%）</li>
                </ul>
                <p className="text-[#666666] mb-3">
                  <strong>加权互动率：</strong>
                </p>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  ER = (L + w_c·C + w_s·S) / max(V, 1)
                </div>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  3.5 时长增强：时长归一化（避免长视频天然更难的偏差）
                </h3>
                <p className="text-[#666666] mb-3">
                  短视频不同长度的互动/完播结构差异明显。用一个轻量的时长修正项，让阈值对不同 D 更公平。
                </p>
                <p className="text-[#666666] mb-3">
                  <strong>参数：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#666666] mb-3">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">D_ref = 20</code>（参考时长，秒）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">a = 0.30</code>（时长修正强度，建议 0.2~0.4）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">g_min = 0.80</code>，<code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">g_max = 1.20</code>（修正上下限，防止过度影响）</li>
                </ul>
                <p className="text-[#666666] mb-3">
                  <strong>时长修正因子（长视频略放宽、短视频略收紧）：</strong>
                </p>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  g(D) = clip( (D / D_ref)^a, g_min, g_max )
                </div>
                <p className="text-[#666666] mb-3">
                  <strong>将主指标按时长修正：</strong>
                </p>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  R' = R / g(D)
                </div>
                <p className="text-[#666666] mb-3">
                  <strong>解释：</strong>当 <code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">D</code> 更长时，<code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">g(D)</code> 通常 &gt; 1，<code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">R'</code> 会略降低"要求"（等价于放宽阈值）；当 <code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">D</code> 更短时，<code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">g(D)</code> &lt; 1，<code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">R'</code> 会略提高"要求"（避免超短视频因结构简单而虚高）。
                </p>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  3.6 播放量门槛（抗噪）
                </h3>
                <p className="text-[#666666] mb-3">
                  <strong>参数：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#666666] mb-3">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">V_min = 2000</code></li>
                </ul>
                <p className="text-[#666666] mb-3">
                  <strong>条件：</strong>
                </p>
                <div className="p-4 rounded-lg bg-[#fafafa] border border-[#e0e0e0] my-4 font-mono text-[13px]">
                  V ≥ V_min
                </div>

                <hr className="my-6 border-[#e0e0e0]" />

                {/* Section 4 */}
                <h2 className="text-[#1a1a1a] mt-8 mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                  4. 最终打标规则（L1 / L2）
                </h2>

                <p className="text-[#666666] mb-3">
                  <strong>阈值（可调，建议先用此默认）：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#666666] mb-4">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">θ1 = 6</code>（L1 破圈）</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">θ2 = 2</code>（L2 优质）</li>
                </ul>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  L1 破圈（Breakout）
                </h3>
                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200 my-4 font-mono text-[13px]">
                  L1 ⟺ (V ≥ V_min) ∧ (ER ≥ ER_min) ∧ (R' ≥ θ1)
                </div>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  L2 优质（Good）
                </h3>
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 my-4 font-mono text-[13px]">
                  L2 ⟺ (V ≥ V_min) ∧ (ER ≥ ER_min) ∧ (R' ≥ θ2)
                </div>

                <h3 className="text-[#1a1a1a] mt-6 mb-3" style={{ fontSize: '16px', fontWeight: '700' }}>
                  否则
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                  <li>不打标（None）</li>
                </ul>

                <hr className="my-6 border-[#e0e0e0]" />

                {/* Section 5 */}
                <h2 className="text-[#1a1a1a] mt-8 mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                  5. 输出字段建议（便于解释与调参）
                </h2>

                <p className="text-[#666666] mb-3">
                  每条视频输出：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">label</code>: L1 / L2 / None</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">T_hours</code>: T</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">V_now</code>: V</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">V_eq_24h</code>: V*</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">F_now</code>: F</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">R_raw</code>: R</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">ER</code>: ER</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">duration_sec</code>: D</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">g_duration</code>: g(D)</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">R_final</code>: R'</li>
                  <li><code className="px-2 py-0.5 rounded bg-[#f5f5f5] text-[#1a1a1a] font-mono text-[12px]">params_snapshot</code>: &#123;t0, s_max, F_min, V_min, ER_min, w_c, w_s, D_ref, a, g_min, g_max, θ1, θ2&#125;</li>
                </ul>

                <hr className="my-6 border-[#e0e0e0]" />

                {/* Section 6 */}
                <h2 className="text-[#1a1a1a] mt-8 mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                  6. 默认参数汇总（可直接上线）
                </h2>

                <div className="p-5 rounded-lg bg-[#fafafa] border border-[#e0e0e0]">
                  <ul className="space-y-2 text-[#666666] font-mono text-[13px]">
                    <li>t0 = 24</li>
                    <li>s_max = 6</li>
                    <li>F_min = 1000</li>
                    <li>V_min = 2000</li>
                    <li>w_c = 3</li>
                    <li>w_s = 4</li>
                    <li>ER_min = 0.01</li>
                    <li>D_ref = 20</li>
                    <li>a = 0.30</li>
                    <li>g_min = 0.80</li>
                    <li>g_max = 1.20</li>
                    <li>θ1 = 6</li>
                    <li>θ2 = 2</li>
                  </ul>
                </div>

                <hr className="my-6 border-[#e0e0e0]" />

                {/* Section 7 */}
                <h2 className="text-[#1a1a1a] mt-8 mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                  7. 工程实现的一行版（便于落地）
                </h2>

                <div className="p-5 rounded-lg bg-[#1a1a1a] text-white font-mono text-[12px] leading-relaxed overflow-x-auto">
                  <div className="space-y-2">
                    <div><span className="text-emerald-400">1)</span> T = (Now - t) / 3600</div>
                    <div><span className="text-emerald-400">2)</span> s = min( 24 / max(T, 1), 6 )</div>
                    <div><span className="text-emerald-400">3)</span> V_star = V * s</div>
                    <div><span className="text-emerald-400">4)</span> F_prime = max(F, 1000)</div>
                    <div><span className="text-emerald-400">5)</span> R = V_star / F_prime</div>
                    <div><span className="text-emerald-400">6)</span> ER = (L + 3*C + 4*S) / max(V, 1)</div>
                    <div><span className="text-emerald-400">7)</span> g = clip( (D/20)^0.30, 0.80, 1.20 )</div>
                    <div><span className="text-emerald-400">8)</span> R_prime = R / g</div>
                    <div><span className="text-emerald-400">9)</span> label = L1 if (V&gt;=2000 and ER&gt;=0.01 and R_prime&gt;=6)</div>
                    <div className="pl-8">else L2 if (V&gt;=2000 and ER&gt;=0.01 and R_prime&gt;=2)</div>
                    <div className="pl-8">else None</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Engineer Button */}
      <button
        onClick={() => setShowEngineerModal(true)}
        className="fixed bottom-24 right-8 px-4 py-3 rounded-[12px] bg-[#1a1a1a] text-white shadow-2xl hover:bg-[#000000] transition-all hover:scale-105 flex items-center gap-2 group z-40"
        style={{ fontSize: '13px', fontWeight: '600' }}
      >
        <Code className="w-4 h-4" />
        <span>Viral、High-Perf判定方法</span>
      </button>
    </div>
  );
}