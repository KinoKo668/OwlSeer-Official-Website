import React from 'react';
import {
  Video,
  ShoppingBag,
  Check,
  ArrowRight,
  Search,
  X,
  Globe,
  Briefcase,
  Camera,
  Users,
  MapPin,
  Sparkles,
  Target,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContentProfileProps {
  onContinue: (data: {
    identity: 'brand' | 'creator' | 'agency' | 'ecommerce' | 'local';
    location: string;
    acquisitionSource: string;
    acquisitionSourceOther?: string;
  }) => void;
  onBack: () => void;
}

const ACQUISITION_SOURCES = [
  { 
    id: 'social-media', 
    name: 'Social Media',
    isGroup: true,
    children: [
      { id: 'tiktok', name: 'TikTok' },
      { id: 'youtube', name: 'YouTube' },
      { id: 'instagram', name: 'Instagram' },
      { id: 'twitter', name: 'X (Twitter)' },
    ]
  },
  { 
    id: 'search-discovery', 
    name: 'Search & Discovery',
    isGroup: true,
    children: [
      { id: 'google', name: 'Google Search' },
      { id: 'app-store', name: 'App Store / Chrome Web Store' },
    ]
  },
  { id: 'ai-chat', name: 'AI chat tools (ChatGPT / Claude / Gemini)', isGroup: false },
  { id: 'friend', name: 'Friend or colleague', isGroup: false },
  { 
    id: 'community', 
    name: 'Community',
    isGroup: true,
    children: [
      { id: 'creator-community', name: 'Creator community / Discord' },
      { id: 'reddit', name: 'Reddit' },
    ]
  },
  { 
    id: 'content', 
    name: 'Content & Media',
    isGroup: true,
    children: [
      { id: 'newsletter', name: 'Newsletter / Blog' },
      { id: 'product-hunt', name: 'Product Hunt' },
    ]
  },
  { id: 'other', name: 'Other', isGroup: false },
];

const LOCATIONS = [
  { id: 'us', name: 'United States', code: 'US', topMarket: true },
  { id: 'gb', name: 'United Kingdom', code: 'GB', topMarket: true },
  { id: 'ca', name: 'Canada', code: 'CA', topMarket: true },
  { id: 'au', name: 'Australia', code: 'AU', topMarket: true },
  { id: 'de', name: 'Germany', code: 'DE', topMarket: true },
  { id: 'fr', name: 'France', code: 'FR', topMarket: true },
  { id: 'es', name: 'Spain', code: 'ES', topMarket: true },
  { id: 'it', name: 'Italy', code: 'IT', topMarket: true },
  { id: 'br', name: 'Brazil', code: 'BR', topMarket: true },
  { id: 'mx', name: 'Mexico', code: 'MX', topMarket: true },
  { id: 'jp', name: 'Japan', code: 'JP', topMarket: false },
  { id: 'kr', name: 'South Korea', code: 'KR', topMarket: false },
  { id: 'in', name: 'India', code: 'IN', topMarket: false },
];

export function ContentProfile({ onContinue, onBack }: ContentProfileProps) {
  const [identity, setIdentity] = React.useState<'brand' | 'creator' | 'agency' | 'ecommerce' | 'local' | null>(null);
  const [selectedLocation, setSelectedLocation] = React.useState<string | null>(null);
  const [selectedSource, setSelectedSource] = React.useState<string | null>(null);
  const [sourceOtherText, setSourceOtherText] = React.useState('');
  const [locationSearch, setLocationSearch] = React.useState('');
  const [expandedGroup, setExpandedGroup] = React.useState<string | null>(null);

  const filteredLocations = locationSearch
    ? LOCATIONS.filter(
        (l) =>
          l.name.toLowerCase().includes(locationSearch.toLowerCase()) ||
          l.code.toLowerCase().includes(locationSearch.toLowerCase())
      )
    : LOCATIONS;

  const canContinue =
    identity !== null && selectedLocation !== null && selectedSource !== null;

  const selectedLocationName = LOCATIONS.find((l) => l.id === selectedLocation)?.name;

  // Calculate completion
  const completionSteps = [identity !== null, selectedLocation !== null, selectedSource !== null];
  const completionCount = completionSteps.filter(Boolean).length;
  const completionPercentage = Math.round((completionCount / 3) * 100);

  // Determine current step
  const currentStep = identity === null ? 1 : selectedLocation === null ? 2 : 3;

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#FFFFFF] to-[#F8F9FA]"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0F766E]/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#059669]/6 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-[12%] w-2 h-2 rounded-full bg-[#0F766E]/20"
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
        className="absolute top-32 right-[18%] w-3 h-3 rounded-full bg-[#059669]/20"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl relative z-10"
      >
        {/* Header */}
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

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* Step 1 - Complete */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"></div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 2 - Active */}
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
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
              Step 2 of 5 • {completionPercentage}% Complete
            </span>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#0F766E]/10 to-[#059669]/10 border border-[#0F766E]/20 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-sm">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span
              className="text-[#0F766E]"
              style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}
            >
              Account Connected
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-4"
        >
          <h1
            className="bg-gradient-to-r from-[#111827] via-[#0F766E] to-[#059669] bg-clip-text text-transparent mb-3"
            style={{ fontSize: '36px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            Tell us about your content
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Target className="w-4 h-4 text-[#0F766E]" />
            <p
              className="text-muted-foreground"
              style={{ fontSize: 'var(--text-body)', lineHeight: '1.5' }}
            >
              Personalize your AI team in 3 quick steps
            </p>
          </div>
        </motion.div>

        {/* Step 1: Identity - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-[16px] p-6 border border-[#E5E7EB] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[16px] pointer-events-none"></div>
            
            <div className="relative">
              {/* Step Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-lg text-white font-bold" style={{ fontSize: '14px' }}>
                    1
                  </div>
                  <div>
                    <h3
                      className="text-foreground"
                      style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '-0.01em' }}
                    >
                      You are a...
                    </h3>
                    <p className="text-muted-foreground" style={{ fontSize: 'var(--text-secondary)' }}>
                      Choose your creator type
                    </p>
                  </div>
                </div>
                <AnimatePresence>
                  {identity && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#059669]/10 to-[#047857]/10 border border-[#059669]/20"
                    >
                      <Check className="w-3.5 h-3.5 text-[#059669]" />
                      <span className="text-[#059669]" style={{ fontSize: '12px', fontWeight: '600' }}>
                        Completed
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Identity Options - Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* Option 1: Brand */}
                <motion.button
                  onClick={() => setIdentity('brand')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative text-left p-4 rounded-[14px] transition-all duration-300 ${
                    identity === 'brand' ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {identity === 'brand' && (
                    <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E] to-[#059669] opacity-100 -z-10" style={{ padding: '2px' }}>
                      <div className="absolute inset-[2px] bg-white rounded-[12px]"></div>
                    </div>
                  )}
                  {identity !== 'brand' && (
                    <>
                      <div className="absolute inset-0 rounded-[14px] border-2 border-[#E5E7EB] group-hover:border-[#0F766E]/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
                    </>
                  )}

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      identity === 'brand' 
                        ? 'bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-md' 
                        : 'bg-[#F8F9FA] group-hover:bg-[#0F766E]/10'
                    }`}>
                      <Briefcase className={`w-6 h-6 ${identity === 'brand' ? 'text-white' : 'text-[#374151]'}`} />
                    </div>
                    <div
                      className="text-foreground mb-1"
                      style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
                    >
                      Brand / Business
                    </div>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
                    >
                      Manage brand content strategy
                    </p>
                    {identity === 'brand' && (
                      <div className="absolute top-2 right-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#059669]/30 rounded-full blur-md"></div>
                          <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.button>

                {/* Option 2: Creator */}
                <motion.button
                  onClick={() => setIdentity('creator')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative text-left p-4 rounded-[14px] transition-all duration-300 ${
                    identity === 'creator' ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {identity === 'creator' && (
                    <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E] to-[#059669] opacity-100 -z-10" style={{ padding: '2px' }}>
                      <div className="absolute inset-[2px] bg-white rounded-[12px]"></div>
                    </div>
                  )}
                  {identity !== 'creator' && (
                    <>
                      <div className="absolute inset-0 rounded-[14px] border-2 border-[#E5E7EB] group-hover:border-[#0F766E]/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
                    </>
                  )}

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      identity === 'creator' 
                        ? 'bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-md' 
                        : 'bg-[#F8F9FA] group-hover:bg-[#0F766E]/10'
                    }`}>
                      <Camera className={`w-6 h-6 ${identity === 'creator' ? 'text-white' : 'text-[#374151]'}`} />
                    </div>
                    <div
                      className="text-foreground mb-1"
                      style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
                    >
                      Content Creator
                    </div>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
                    >
                      Grow with creator-focused AI
                    </p>
                    {identity === 'creator' && (
                      <div className="absolute top-2 right-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#059669]/30 rounded-full blur-md"></div>
                          <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.button>

                {/* Option 3: Agency */}
                <motion.button
                  onClick={() => setIdentity('agency')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative text-left p-4 rounded-[14px] transition-all duration-300 ${
                    identity === 'agency' ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {identity === 'agency' && (
                    <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E] to-[#059669] opacity-100 -z-10" style={{ padding: '2px' }}>
                      <div className="absolute inset-[2px] bg-white rounded-[12px]"></div>
                    </div>
                  )}
                  {identity !== 'agency' && (
                    <>
                      <div className="absolute inset-0 rounded-[14px] border-2 border-[#E5E7EB] group-hover:border-[#0F766E]/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
                    </>
                  )}

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      identity === 'agency' 
                        ? 'bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-md' 
                        : 'bg-[#F8F9FA] group-hover:bg-[#0F766E]/10'
                    }`}>
                      <Users className={`w-6 h-6 ${identity === 'agency' ? 'text-white' : 'text-[#374151]'}`} />
                    </div>
                    <div
                      className="text-foreground mb-1"
                      style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
                    >
                      Agency / MCN
                    </div>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
                    >
                      Manage multiple creators
                    </p>
                    {identity === 'agency' && (
                      <div className="absolute top-2 right-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#059669]/30 rounded-full blur-md"></div>
                          <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.button>

                {/* Option 4: Ecommerce */}
                <motion.button
                  onClick={() => setIdentity('ecommerce')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative text-left p-4 rounded-[14px] transition-all duration-300 ${
                    identity === 'ecommerce' ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {identity === 'ecommerce' && (
                    <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E] to-[#059669] opacity-100 -z-10" style={{ padding: '2px' }}>
                      <div className="absolute inset-[2px] bg-white rounded-[12px]"></div>
                    </div>
                  )}
                  {identity !== 'ecommerce' && (
                    <>
                      <div className="absolute inset-0 rounded-[14px] border-2 border-[#E5E7EB] group-hover:border-[#0F766E]/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
                    </>
                  )}

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      identity === 'ecommerce' 
                        ? 'bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-md' 
                        : 'bg-[#F8F9FA] group-hover:bg-[#0F766E]/10'
                    }`}>
                      <ShoppingBag className={`w-6 h-6 ${identity === 'ecommerce' ? 'text-white' : 'text-[#374151]'}`} />
                    </div>
                    <div
                      className="text-foreground mb-1"
                      style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
                    >
                      Ecommerce Seller
                    </div>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
                    >
                      Optimize for conversion
                    </p>
                    {identity === 'ecommerce' && (
                      <div className="absolute top-2 right-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#059669]/30 rounded-full blur-md"></div>
                          <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.button>

                {/* Option 5: Local */}
                <motion.button
                  onClick={() => setIdentity('local')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative text-left p-4 rounded-[14px] transition-all duration-300 ${
                    identity === 'local' ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {identity === 'local' && (
                    <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E] to-[#059669] opacity-100 -z-10" style={{ padding: '2px' }}>
                      <div className="absolute inset-[2px] bg-white rounded-[12px]"></div>
                    </div>
                  )}
                  {identity !== 'local' && (
                    <>
                      <div className="absolute inset-0 rounded-[14px] border-2 border-[#E5E7EB] group-hover:border-[#0F766E]/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
                    </>
                  )}

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      identity === 'local' 
                        ? 'bg-gradient-to-br from-[#0F766E] to-[#059669] shadow-md' 
                        : 'bg-[#F8F9FA] group-hover:bg-[#0F766E]/10'
                    }`}>
                      <MapPin className={`w-6 h-6 ${identity === 'local' ? 'text-white' : 'text-[#374151]'}`} />
                    </div>
                    <div
                      className="text-foreground mb-1"
                      style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
                    >
                      Local Business
                    </div>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
                    >
                      Drive local discovery
                    </p>
                    {identity === 'local' && (
                      <div className="absolute top-2 right-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#059669]/30 rounded-full blur-md"></div>
                          <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 2 & 3: Two Column Layout */}
        <AnimatePresence>
          {identity !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
            >
              {/* Step 2: Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-[16px] p-6 border border-[#E5E7EB] shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[16px] pointer-events-none"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-lg text-white font-bold" style={{ fontSize: '14px' }}>
                        2
                      </div>
                      <div>
                        <h3
                          className="text-foreground"
                          style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '-0.01em' }}
                        >
                          Primary location
                        </h3>
                        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-secondary)' }}>
                          For analytics and benchmarks
                        </p>
                      </div>
                    </div>
                    <AnimatePresence>
                      {selectedLocation && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#059669]/10 to-[#047857]/10 border border-[#059669]/20"
                        >
                          <Check className="w-3.5 h-3.5 text-[#059669]" />
                          <span className="text-[#059669]" style={{ fontSize: '12px', fontWeight: '600' }}>
                            Completed
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Search */}
                  <div className="relative mb-4 group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-[#0F766E] transition-colors" />
                    <input
                      type="text"
                      placeholder="Search country or code"
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      className="w-full pl-11 pr-10 py-3 rounded-[12px] border-2 border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] transition-all duration-200"
                      style={{ fontSize: 'var(--text-body)' }}
                    />
                    {locationSearch && (
                      <button
                        onClick={() => setLocationSearch('')}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#0F766E] transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Locations */}
                  <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                    {filteredLocations.map((location) => (
                      <motion.button
                        key={location.id}
                        onClick={() => setSelectedLocation(location.id)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`w-full px-4 py-2.5 rounded-[12px] border-2 text-left transition-all duration-200 ${
                          selectedLocation === location.id
                            ? 'border-[#0F766E] bg-gradient-to-r from-[#0F766E] to-[#059669] text-white shadow-lg'
                            : 'border-[#E5E7EB] hover:border-[#0F766E]/30 hover:bg-[#0F766E]/5'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span style={{ fontSize: 'var(--text-body)', fontWeight: '700' }}>
                              {location.code}
                            </span>
                            <span
                              className={selectedLocation === location.id ? 'text-white/90' : 'text-muted-foreground'}
                              style={{ fontSize: 'var(--text-secondary)' }}
                            >
                              {location.name}
                            </span>
                          </div>
                          {selectedLocation === location.id && (
                            <Check className="w-4 h-4 text-white flex-shrink-0" strokeWidth={3} />
                          )}
                        </div>
                      </motion.button>
                    ))}
                    {filteredLocations.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        <Globe className="w-8 h-8 mx-auto mb-2 opacity-40" />
                        <p style={{ fontSize: 'var(--text-secondary)' }}>No locations found</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Source */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-[16px] p-6 border border-[#E5E7EB] shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[16px] pointer-events-none"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-lg text-white font-bold" style={{ fontSize: '14px' }}>
                        3
                      </div>
                      <div>
                        <h3
                          className="text-foreground"
                          style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '-0.01em' }}
                        >
                          How did you hear about us?
                        </h3>
                        <p className="text-muted-foreground" style={{ fontSize: 'var(--text-secondary)' }}>
                          Helps us improve
                        </p>
                      </div>
                    </div>
                    <AnimatePresence>
                      {selectedSource && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#059669]/10 to-[#047857]/10 border border-[#059669]/20"
                        >
                          <Check className="w-3.5 h-3.5 text-[#059669]" />
                          <span className="text-[#059669]" style={{ fontSize: '12px', fontWeight: '600' }}>
                            Completed
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Radio List */}
                  <div className="space-y-2">
                    {ACQUISITION_SOURCES.map((source: any) => {
                      const isGroupExpanded = expandedGroup === source.id;
                      const isSelected = selectedSource === source.id;
                      // Check if any child is selected
                      const isChildSelected = source.isGroup && source.children?.some((child: any) => child.id === selectedSource);
                      
                      return (
                        <div key={source.id}>
                          {/* Group or Single Option */}
                          <motion.button
                            onClick={() => {
                              if (source.isGroup) {
                                // Toggle group expansion
                                setExpandedGroup(isGroupExpanded ? null : source.id);
                              } else {
                                // Select single option directly
                                setSelectedSource(source.id);
                              }
                            }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={`w-full px-4 py-2.5 rounded-[12px] border-2 text-left transition-all duration-200 flex items-center justify-between ${
                              isChildSelected
                                ? 'border-[#0F766E] bg-gradient-to-r from-[#0F766E]/10 to-[#059669]/10 shadow-md'
                                : isSelected
                                ? 'border-[#0F766E] bg-gradient-to-r from-[#0F766E]/10 to-[#059669]/10 shadow-md'
                                : 'border-[#E5E7EB] hover:border-[#0F766E]/30 hover:bg-[#0F766E]/5'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={(isSelected || isChildSelected) ? 'text-foreground' : 'text-muted-foreground'}
                                style={{ fontSize: 'var(--text-secondary)', fontWeight: (isSelected || isChildSelected) ? '700' : '500', letterSpacing: '-0.01em' }}
                              >
                                {source.name}
                              </span>
                              {source.isGroup && isChildSelected && (
                                <span className="text-[#0F766E]" style={{ fontSize: '11px', fontWeight: '600' }}>
                                  ({source.children.find((c: any) => c.id === selectedSource)?.name})
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {source.isGroup && (
                                <motion.div
                                  animate={{ rotate: isGroupExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                </motion.div>
                              )}
                              <AnimatePresence>
                                {(isSelected || isChildSelected) && (
                                  <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 180 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                  >
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-[#059669]/30 rounded-full blur-md"></div>
                                      <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center shadow-lg">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.button>

                          {/* Expanded Children */}
                          <AnimatePresence>
                            {source.isGroup && isGroupExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-6 mt-2 space-y-2"
                              >
                                {source.children?.map((child: any) => {
                                  const isChildActive = selectedSource === child.id;
                                  return (
                                    <motion.button
                                      key={child.id}
                                      onClick={() => {
                                        setSelectedSource(child.id);
                                        setExpandedGroup(null); // Collapse after selection
                                      }}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      whileHover={{ scale: 1.01, x: 2 }}
                                      whileTap={{ scale: 0.99 }}
                                      className={`w-full px-3.5 py-2 rounded-[10px] border text-left transition-all duration-200 flex items-center justify-between ${
                                        isChildActive
                                          ? 'border-[#0F766E] bg-white shadow-sm'
                                          : 'border-[#E5E7EB] hover:border-[#0F766E]/30 bg-white/50'
                                      }`}
                                    >
                                      <span
                                        className={isChildActive ? 'text-[#0F766E]' : 'text-muted-foreground'}
                                        style={{ fontSize: '13px', fontWeight: isChildActive ? '600' : '500' }}
                                      >
                                        {child.name}
                                      </span>
                                      {isChildActive && (
                                        <Check className="w-3.5 h-3.5 text-[#0F766E]" strokeWidth={3} />
                                      )}
                                    </motion.button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* "Other" text input */}
                          <AnimatePresence>
                            {source.id === 'other' && isSelected && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 ml-4"
                              >
                                <label
                                  className="block text-muted-foreground mb-2"
                                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}
                                >
                                  Please specify (optional)
                                </label>
                                <input
                                  type="text"
                                  placeholder="Type here…"
                                  value={sourceOtherText}
                                  onChange={(e) => setSourceOtherText(e.target.value)}
                                  className="w-full px-3.5 py-3 rounded-[12px] border-2 border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] transition-all duration-200"
                                  style={{ fontSize: 'var(--text-body)' }}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary Pill */}
        <AnimatePresence>
          {canContinue && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/20 to-[#059669]/20 rounded-full blur-lg"></div>
                <div className="relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white border-2 border-[#0F766E]/20 shadow-xl">
                  <Sparkles className="w-5 h-5 text-[#0F766E]" />
                  <div className="flex items-center gap-2.5">
                    <span
                      className="text-foreground"
                      style={{ fontSize: 'var(--text-body)', fontWeight: '700', letterSpacing: '-0.01em' }}
                    >
                      {identity === 'creator' && 'Content Creator'}
                      {identity === 'brand' && 'Brand / Business'}
                      {identity === 'agency' && 'Agency'}
                      {identity === 'ecommerce' && 'Ecommerce Seller'}
                      {identity === 'local' && 'Local Business'}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
                    <span
                      className="text-[#0F766E]"
                      style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
                    >
                      {selectedLocationName}
                    </span>
                  </div>
                  <Check className="w-5 h-5 text-[#059669]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="px-8 py-3.5 rounded-[12px] text-foreground border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 hover:bg-[#F8F9FA] transition-all duration-300 shadow-sm hover:shadow-md"
            style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
          >
            Back
          </motion.button>
          <motion.button
            onClick={() =>
              canContinue &&
              identity &&
              selectedLocation &&
              selectedSource &&
              onContinue({
                identity,
                location: selectedLocation,
                acquisitionSource: selectedSource,
                acquisitionSourceOther: sourceOtherText || undefined,
              })
            }
            disabled={!canContinue}
            whileHover={canContinue ? { scale: 1.02 } : {}}
            whileTap={canContinue ? { scale: 0.98 } : {}}
            className={`relative px-8 py-3.5 rounded-[12px] transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
              canContinue
                ? 'shadow-lg hover:shadow-xl'
                : 'cursor-not-allowed opacity-60'
            }`}
            style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
          >
            {canContinue ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-[#059669] to-[#047857]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
                <span className="relative text-white">Continue</span>
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

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#E5E7EB]/50 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0F766E]/20 to-[#059669]/20 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-[#0F766E]" />
            </div>
            <p
              className="text-muted-foreground"
              style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
            >
              Personalization only • Update anytime in Settings
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}