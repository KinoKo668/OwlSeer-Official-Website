import React from 'react';
import { FileText, ChevronRight, Download, Calendar } from 'lucide-react';
import { SidebarPro } from './SidebarPro';
import { BottomTabBar } from './BottomTabBar';

interface ReportsArchiveProps {
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

const archiveItems = [
  { week: 'Jan 05–Jan 11', completionRate: 85, outcome: 'Hooks improved, retention up', isNew: true, insights: ['+12% retention rate', 'Product-first hooks working'] },
  { week: 'Dec 29–Jan 04', completionRate: 68, outcome: 'Holiday slowdown, deal pipeline built', isNew: false, insights: ['Lower posting frequency', 'High engagement on stories'] },
  { week: 'Dec 22–Dec 28', completionRate: 92, outcome: 'Strong finish, 5/5 posts delivered', isNew: false, insights: ['Goal exceeded', 'Viral video on Tuesday'] },
  { week: 'Dec 15–Dec 21', completionRate: 74, outcome: 'Format experiment successful', isNew: false, insights: ['New editing style tested', 'Mixed audience reaction'] },
  { week: 'Dec 08–Dec 14', completionRate: 81, outcome: 'Consistency improved', isNew: false, insights: ['Daily posting streak', 'Follower growth stable'] },
  { week: 'Dec 01–Dec 07', completionRate: 65, outcome: 'Topic dispersion addressed', isNew: false, insights: ['Niche focus refined', 'Script quality audit'] },
  { week: 'Nov 24–Nov 30', completionRate: 88, outcome: 'Black Friday campaign success', isNew: false, insights: ['High conversion', 'Sponsored content peak'] },
  { week: 'Nov 17–Nov 23', completionRate: 72, outcome: 'Audience growth steady', isNew: false, insights: ['Organic reach up 5%', 'Comment volume increased'] },
];

export function ReportsArchive({
  onNavigate,
  conversations = [],
  currentConversationId,
  onSelectConversation,
  onDeleteConversation,
}: ReportsArchiveProps) {
  return (
    <div className="flex h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <SidebarPro
        activeItem="reports-archive"
        onNavigate={onNavigate}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={onSelectConversation}
        onDeleteConversation={onDeleteConversation}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden pb-[64px] md:pb-0">
        {/* Header */}
        <div className="bg-white border-b border-[#e0e0e0] px-4 md:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#1a1a1a] mb-1" style={{ fontSize: '20px', fontWeight: '700' }}>
                Reports Archive
              </h1>
              <p className="text-[#666666] hidden md:block" style={{ fontSize: '13px' }}>
                Browse and revisit past weekly reports here.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-6 md:py-8">
            <div className="space-y-4">
              {archiveItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[12px] border border-[#e0e0e0] p-5 shadow-sm hover:shadow-md hover:border-[#0F766E] transition-all cursor-pointer group"
                  onClick={() => onNavigate?.('weekly-report-detail')}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {item.isNew && (
                          <span className="px-2 py-0.5 bg-[#059669] text-white rounded-full text-[11px] font-bold tracking-wide">
                            NEW
                          </span>
                        )}
                        <h3 className="text-[#1a1a1a] font-bold text-[16px]">
                          Weekly Report: {item.week}
                        </h3>
                      </div>
                      <p className="text-[#4B5563] text-[14px] mb-3">
                        {item.outcome}
                      </p>
                      
                      {/* Insights Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.insights?.map((insight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#F3F4F6] text-[#4B5563] rounded-md text-[12px] font-medium border border-[#E5E7EB]">
                            {insight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      {/* Completion Rate Badge */}
                      <div className={`px-3 py-1 rounded-full border ${
                        item.completionRate >= 80 ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]' :
                        item.completionRate >= 60 ? 'bg-[#FFFBEB] border-[#FDE68A] text-[#D97706]' :
                        'bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]'
                      }`}>
                        <span className="text-[12px] font-bold">{item.completionRate}% Completion</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[#6B7280] group-hover:text-[#0F766E] transition-colors">
                        <span className="text-[13px] font-medium">View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center text-[#9CA3AF] text-[13px]">
              End of archive
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar - Mobile Only */}
      <BottomTabBar activeItem="intelligence" onNavigate={onNavigate} />
    </div>
  );
}
