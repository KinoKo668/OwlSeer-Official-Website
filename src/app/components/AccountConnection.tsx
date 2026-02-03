import React from 'react';
import { ExternalLink, Shield, ArrowRight, Check, Sparkles, Zap, Users, Plus, X, ChevronDown, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Team {
  id: string;
  name: string;
  isDefault: boolean;
  memberCount: number;
}

interface Platform {
  id: string;
  name: string;
  users: number;
  description: string;
  enabled: boolean;
  comingSoon?: boolean;
  iconBg: string;
  iconColor: string;
}

interface AccountConnectionProps {
  onContinue: () => void;
  onBack: () => void;
}

export function AccountConnection({ onContinue, onBack }: AccountConnectionProps) {
  const [selectedPlatform, setSelectedPlatform] = React.useState<string | null>(null);
  
  // Team Management State
  const [teams, setTeams] = React.useState<Team[]>([
    { id: 'default', name: "My Personal Team", isDefault: true, memberCount: 1 },
  ]);
  const [selectedTeamId, setSelectedTeamId] = React.useState<string>('default');
  const [showCreateTeam, setShowCreateTeam] = React.useState(false);
  const [newTeamName, setNewTeamName] = React.useState('');
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = React.useState(false);

  const selectedTeam = teams.find(t => t.id === selectedTeamId) || teams[0];

  const handleCreateTeam = () => {
    if (!newTeamName.trim()) return;
    const newTeam: Team = {
      id: `team-${Date.now()}`,
      name: newTeamName,
      isDefault: false,
      memberCount: 1
    };
    setTeams([...teams, newTeam]);
    setSelectedTeamId(newTeam.id);
    setNewTeamName('');
    setShowCreateTeam(false);
  };

  const platforms: Platform[] = [
    {
      id: 'tiktok',
      name: 'TikTok',
      users: 182,
      description: 'Connect TikTok and watch your AI team get to work instantly',
      enabled: true,
      iconBg: '#111827',
      iconColor: '#ffffff',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      users: 289,
      description: 'Expand your Instagram reach with AI-powered strategies',
      enabled: false,
      comingSoon: true,
      iconBg: '#E5E7EB',
      iconColor: '#9CA3AF',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      users: 542,
      description: 'Grow your YouTube channel with data-driven optimization',
      enabled: false,
      comingSoon: true,
      iconBg: '#E5E7EB',
      iconColor: '#9CA3AF',
    },
  ];

  const TikTokIcon = ({ className, color }: { className?: string; color: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
        fill={color}
      />
    </svg>
  );

  const InstagramIcon = ({ className, color }: { className?: string; color: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill={color} />
    </svg>
  );

  const YouTubeIcon = ({ className, color }: { className?: string; color: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
        fill={color}
      />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
    </svg>
  );

  const handleConnect = (platformId: string) => {
    setSelectedPlatform(platformId);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#FFFFFF] to-[#F8F9FA]"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0F766E]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#059669]/8 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-[#0F766E]/20"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-[#059669]/20"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-32 right-[20%] w-2 h-2 rounded-full bg-[#0F766E]/25"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#0F766E]/20 rounded-full blur-md"></div>
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-lg">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <div
              className="text-foreground"
              style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
            >
              Creator
            </div>
            <div
              className="text-[#0F766E]"
              style={{ fontSize: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}
            >
              ONBOARDING TRACK
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator - Step 1 of 5 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* Step 1 - Active */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"></div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 2 - Inactive */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
            <div className="w-12 h-1.5 rounded-full bg-[#E5E7EB]"></div>
            
            {/* Step 3 - Inactive */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
            <div className="w-12 h-1.5 rounded-full bg-[#E5E7EB]"></div>
            
            {/* Step 4 - Inactive */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
            <div className="w-12 h-1.5 rounded-full bg-[#E5E7EB]"></div>
            
            {/* Step 5 - Inactive */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
          </div>
          <div className="text-center">
            <span className="text-[#0F766E]" style={{ fontSize: '12px', fontWeight: '700' }}>
              Step 1 of 5 • 20% Complete
            </span>
          </div>
        </motion.div>

        {/* Team Selection Section - Industry Best Practice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-8 flex justify-center relative z-20"
        >
          <div className="relative">
            <button
              onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
              className="flex items-center gap-3 px-5 py-2.5 bg-white border border-[#E5E7EB] rounded-full shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E]">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider">Connect to Team</div>
                <div className="text-[14px] text-[#111827] font-semibold flex items-center gap-1.5">
                  {selectedTeam.name}
                  <ChevronDown className={`w-3.5 h-3.5 text-[#9CA3AF] transition-transform duration-200 ${isTeamDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </button>

            {/* Team Dropdown */}
            <AnimatePresence>
              {isTeamDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E5E7EB] overflow-hidden z-50"
                >
                  <div className="p-2 space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                      Select Team
                    </div>
                    {teams.map((team) => (
                      <button
                        key={team.id}
                        onClick={() => {
                          setSelectedTeamId(team.id);
                          setIsTeamDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          selectedTeamId === team.id
                            ? 'bg-[#0F766E]/5 text-[#0F766E]'
                            : 'hover:bg-[#F3F4F6] text-[#374151]'
                        }`}
                      >
                        <span className="font-medium">{team.name}</span>
                        {selectedTeamId === team.id && (
                          <Check className="w-4 h-4 text-[#0F766E]" />
                        )}
                      </button>
                    ))}
                    <div className="h-px bg-[#E5E7EB] my-1"></div>
                    <button
                      onClick={() => {
                        setShowCreateTeam(true);
                        setIsTeamDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-[#0F766E] font-medium hover:bg-[#0F766E]/5 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Create New Team
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Title with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-4"
        >
          <h1
            className="bg-gradient-to-r from-[#111827] via-[#0F766E] to-[#059669] bg-clip-text text-transparent"
            style={{ fontSize: '36px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            Connect Your Creator Account
          </h1>
        </motion.div>

        {/* Subtitle with icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <Sparkles className="w-4 h-4 text-[#0F766E]" />
          <p
            className="text-muted-foreground text-center"
            style={{ fontSize: 'var(--text-body)', lineHeight: '1.5' }}
          >
            Your AI team starts working immediately after connection
          </p>
        </motion.div>

        {/* Platform Cards - Enhanced */}
        <div className="space-y-4 mb-8">
          {platforms.map((platform, index) => (
            <motion.button
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              onClick={() => platform.enabled && handleConnect(platform.id)}
              disabled={!platform.enabled}
              className={`group relative w-full bg-white rounded-[16px] p-6 flex items-center gap-5 transition-all duration-300 ${
                selectedPlatform === platform.id
                  ? 'shadow-xl scale-[1.02]'
                  : 'shadow-md hover:shadow-xl hover:scale-[1.01]'
              } ${!platform.enabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {/* Gradient border effect for selected */}
              {selectedPlatform === platform.id && (
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-r from-[#0F766E] to-[#059669] opacity-100 -z-10" style={{ padding: '2px' }}>
                  <div className="absolute inset-[2px] bg-white rounded-[14px]"></div>
                </div>
              )}
              
              {/* Default border */}
              {selectedPlatform !== platform.id && (
                <div className={`absolute inset-0 rounded-[16px] border-2 ${platform.enabled ? 'border-[#E5E7EB] group-hover:border-[#0F766E]/50' : 'border-[#E5E7EB]'} transition-colors duration-300`}></div>
              )}

              {/* Glow effect on hover */}
              {platform.enabled && selectedPlatform !== platform.id && (
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
              )}

              {/* Platform Icon with enhanced styling */}
              <div className="relative">
                {selectedPlatform === platform.id && platform.enabled && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/20 to-[#059669]/20 rounded-2xl blur-lg"></div>
                )}
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md"
                  style={{ backgroundColor: platform.iconBg }}
                >
                  {platform.id === 'tiktok' && (
                    <TikTokIcon className="w-8 h-8" color={platform.iconColor} />
                  )}
                  {platform.id === 'instagram' && (
                    <InstagramIcon className="w-8 h-8" color={platform.iconColor} />
                  )}
                  {platform.id === 'youtube' && (
                    <YouTubeIcon className="w-8 h-8" color={platform.iconColor} />
                  )}
                </div>
              </div>

              {/* Platform Info */}
              <div className="flex-1 text-left relative">
                <div className="flex items-center gap-3 mb-1.5">
                  <span
                    className="text-foreground"
                    style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '-0.01em' }}
                  >
                    {platform.name}
                  </span>
                  {!platform.comingSoon && platform.enabled && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#0F766E]/10 to-[#059669]/10 border border-[#0F766E]/20">
                      <Zap className="w-3 h-3 text-[#0F766E]" />
                      <span
                        className="text-[#0F766E]"
                        style={{ fontSize: '12px', fontWeight: '600' }}
                      >
                        {platform.users}+ creators
                      </span>
                    </div>
                  )}
                  {platform.comingSoon && (
                    <span
                      className="px-3 py-1 rounded-full bg-[#F8F9FA] text-[#9CA3AF] border border-[#E5E7EB]"
                      style={{ fontSize: '12px', fontWeight: '600' }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
                >
                  {platform.description}
                </p>
              </div>

              {/* Selection Indicator with animation */}
              <AnimatePresence>
                {selectedPlatform === platform.id && platform.enabled && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#059669]/30 rounded-full blur-md"></div>
                      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-lg">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* External Link Icon for enabled platforms */}
              {!selectedPlatform && platform.enabled && (
                <ExternalLink className="w-5 h-5 text-[#9CA3AF] flex-shrink-0 group-hover:text-[#0F766E] transition-colors duration-300" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Security Notice - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative mb-8 p-5 rounded-[16px] overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/8 via-[#0F766E]/5 to-[#059669]/8"></div>
          <div className="absolute inset-0 border-2 border-[#0F766E]/25 rounded-[16px]"></div>
          
          <div className="relative flex gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0F766E]/20 rounded-xl blur-lg"></div>
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <p
                className="text-[#111827]"
                style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.4', letterSpacing: '-0.01em' }}
              >
                Security & privacy
              </p>
              <ul className="space-y-2.5 text-[#374151]" style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] mt-2 flex-shrink-0"></div>
                  <span><strong className="text-[#111827] font-semibold">Official TikTok OAuth:</strong> We never see or store your password.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] mt-2 flex-shrink-0"></div>
                  <span><strong className="text-[#111827] font-semibold">Read-only access:</strong> Only analytics and script generation permissions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] mt-2 flex-shrink-0"></div>
                  <span><strong className="text-[#111827] font-semibold">You're in control:</strong> We never post for you. Revoke access anytime.</span>
                </li>
              </ul>
              <p className="text-[#9CA3AF] pt-1.5 flex items-center gap-1.5" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                <Shield className="w-3 h-3" />
                Only data from the account you connect.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Actions - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={onBack}
            className="px-8 py-3.5 rounded-[12px] text-foreground border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 hover:bg-[#F8F9FA] transition-all duration-300 shadow-sm hover:shadow-md"
            style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
          >
            Back
          </button>
          <motion.button
            onClick={onContinue}
            disabled={!selectedPlatform}
            whileHover={selectedPlatform ? { scale: 1.02 } : {}}
            whileTap={selectedPlatform ? { scale: 0.98 } : {}}
            className={`relative px-8 py-3.5 rounded-[12px] transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
              selectedPlatform
                ? 'shadow-lg hover:shadow-xl'
                : 'cursor-not-allowed'
            }`}
            style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
          >
            {selectedPlatform ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-[#059669] to-[#047857] group-hover:from-[#047857] group-hover:to-[#059669] transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
                <span className="relative text-white">Connect to {selectedTeam.name}</span>
                <ArrowRight className="relative w-4 h-4 text-white" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-[#E5E7EB]"></div>
                <span className="relative text-[#9CA3AF]">Continue</span>
                <ArrowRight className="relative w-4 h-4 text-[#9CA3AF]" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Footer Text - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#E5E7EB]/50 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0F766E]/20 to-[#059669]/20 flex items-center justify-center">
              <span className="text-sm">🔒</span>
            </div>
            <p
              className="text-muted-foreground"
              style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
            >
              Your data is encrypted and stored securely
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Create Team Modal */}
      <AnimatePresence>
        {showCreateTeam && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateTeam(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#111827]">Create New Team</h3>
                <button
                  onClick={() => setShowCreateTeam(false)}
                  className="p-2 rounded-full hover:bg-[#F3F4F6] text-[#6B7280] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">
                    Team Name
                  </label>
                  <input
                    type="text"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    placeholder="e.g. Marketing Team"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 outline-none transition-all"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && handleCreateTeam()}
                  />
                </div>
                
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setShowCreateTeam(false)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-[#374151] font-medium hover:bg-[#F9FAFB] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateTeam}
                    disabled={!newTeamName.trim()}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#0F766E] text-white font-medium hover:bg-[#0D655D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Create Team
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}