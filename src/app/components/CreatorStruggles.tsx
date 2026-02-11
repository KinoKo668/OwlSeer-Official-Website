import React from 'react';
import { ArrowRight, CircleCheck, Circle, Check, Sparkles, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Struggle {
  id: string;
  text: string;
  isSelectAll?: boolean;
}

interface CreatorStrugglesProps {
  onContinue: (selectedStruggles: string[]) => void;
  onBack: () => void;
}

export function CreatorStruggles({ onContinue, onBack }: CreatorStrugglesProps) {
  const [selectedStruggles, setSelectedStruggles] = React.useState<string[]>([]);

  const struggles: Struggle[] = [
    {
      id: 'inconsistent-views',
      text: 'My views are inconsistent — some videos do well, others flop',
    },
    {
      id: 'no-follower-growth',
      text: "I'm getting views, but my follower count isn't growing",
    },
    {
      id: 'content-ideas',
      text: "I don't know what content I should post next",
    },
    {
      id: 'effort-vs-results',
      text: 'I put a lot of effort into my videos, but the results are disappointing',
    },
    {
      id: 'monetization',
      text: "I have some traction, but I don't know how to make money from it",
    },
    {
      id: 'algorithm-suppression',
      text: "I'm worried my account is being limited or suppressed by the algorithm",
    },
    {
      id: 'all-of-above',
      text: "Honestly, I'm struggling with all of the above",
      isSelectAll: true,
    },
    {
      id: 'risk-mitigation',
      text: "My account is doing well — I want to avoid risks and improve efficiency",
    },
  ];

  const regularStruggles = struggles.filter((s) => !s.isSelectAll && s.id !== 'risk-mitigation');
  const allOfAboveOption = struggles.find((s) => s.isSelectAll);
  const riskMitigationOption = struggles.find((s) => s.id === 'risk-mitigation');

  // Check if user selected any problem-related options
  const hasSelectedProblems = selectedStruggles.some(
    (id) => id === 'all-of-above' || regularStruggles.some((s) => s.id === id)
  );

  // Check if user only selected risk mitigation
  const hasOnlyRiskMitigation =
    selectedStruggles.length === 1 && selectedStruggles.includes('risk-mitigation');

  // Check if user selected risk mitigation along with problems
  const hasRiskMitigationWithProblems =
    hasSelectedProblems && selectedStruggles.includes('risk-mitigation');

  const handleToggle = (id: string, isSelectAll?: boolean) => {
    if (isSelectAll) {
      // If "all of above" is clicked
      if (selectedStruggles.includes(id)) {
        // Deselect it
        setSelectedStruggles((prev) => prev.filter((sId) => sId !== id));
      } else {
        // Select only this option, clear others
        setSelectedStruggles([id]);
      }
    } else {
      // Regular option clicked
      if (selectedStruggles.includes(id)) {
        // Deselect this option
        setSelectedStruggles((prev) => prev.filter((sId) => sId !== id));
      } else {
        // If "all of above" was selected, deselect it first
        const newSelection = selectedStruggles.filter((sId) => sId !== 'all-of-above');
        setSelectedStruggles([...newSelection, id]);
      }
    }
  };

  const isSelected = (id: string) => selectedStruggles.includes(id);
  const hasSelection = selectedStruggles.length > 0;

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
      {/* Cloud Base background */}
      <div className="absolute inset-0 bg-[#F8F9FA]"></div>
      
      {/* Decorative gradient orbs using Teal Prime */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0F766E]/6 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0F766E]/4 to-transparent rounded-full blur-3xl"></div>
      
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
        className="absolute top-32 right-[18%] w-3 h-3 rounded-full bg-[#0F766E]/15"
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
            <div className="relative w-10 h-10 rounded-full bg-[#0F766E] flex items-center justify-center shadow-lg">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <div
              className="text-[#111827]"
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

        {/* Progress Indicator - Step 3 of 5 */}
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
            
            {/* Step 2 - Complete */}
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"></div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 3 - Active */}
            <motion.div 
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669] shadow-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0F766E] to-[#059669]"></div>
            
            {/* Step 4 - Inactive */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
            <div className="w-12 h-1.5 rounded-full bg-[#E5E7EB]"></div>
            
            {/* Step 5 - Inactive */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
          </div>
          <div className="text-center">
            <span className="text-[#0F766E]" style={{ fontSize: '12px', fontWeight: '700' }}>
              Step 3 of 5 • 60% Complete
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
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F0FDFA] border border-[#0F766E]/20 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#0F766E] flex items-center justify-center shadow-sm">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span
              className="text-[#0F766E]"
              style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}
            >
              Audience Regions Selected
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
            className="text-[#111827] mb-3"
            style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            What are you struggling with right now?
          </h1>
          <div className="flex items-center justify-center gap-2">
            <p
              className="text-[#374151]"
              style={{ fontSize: 'var(--text-body)', lineHeight: '1.5' }}
            >
              Select all that apply — we'll personalize your experience
            </p>
          </div>
        </motion.div>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 mb-6"
        >
          {/* Regular Options */}
          {regularStruggles.map((struggle, index) => (
            <motion.button
              key={struggle.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              onClick={() => handleToggle(struggle.id)}
              whileHover={{ scale: 1.01, x: 2 }}
              whileTap={{ scale: 0.99 }}
              className={`group relative w-full text-left p-4 rounded-[14px] transition-all duration-300 flex items-start gap-3 ${
                isSelected(struggle.id)
                  ? 'shadow-lg'
                  : 'shadow-md hover:shadow-lg'
              }`}
            >
              {isSelected(struggle.id) && (
                <div className="absolute inset-0 rounded-[14px] bg-[#F0FDFA] border-2 border-[#0F766E]"></div>
              )}
              {!isSelected(struggle.id) && (
                <>
                  <div className="absolute inset-0 rounded-[14px] border-2 border-[#E5E7EB] group-hover:border-[#0F766E]/30 transition-colors duration-300 bg-white"></div>
                </>
              )}

              {/* Checkbox Icon */}
              <div className="relative flex-shrink-0 mt-0.5">
                {isSelected(struggle.id) ? (
                  <>
                    <div className="absolute inset-0 bg-[#0F766E]/20 rounded-full blur-md"></div>
                    <CircleCheck className="relative w-6 h-6 text-[#0F766E]" strokeWidth={2.5} />
                  </>
                ) : (
                  <Circle className="w-6 h-6 text-[#9CA3AF]" strokeWidth={2} />
                )}
              </div>

              {/* Text */}
              <span
                className={`relative ${isSelected(struggle.id) ? 'text-[#111827] font-medium' : 'text-[#374151]'}`}
                style={{ fontSize: 'var(--text-body)', lineHeight: '1.6' }}
              >
                {struggle.text}
              </span>
            </motion.button>
          ))}

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="relative py-3"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]"></div>
            </div>
            <div className="relative flex justify-center">
              <span
                className="bg-[#F8F9FA] px-4 text-[#9CA3AF] font-medium"
                style={{ fontSize: 'var(--text-secondary)' }}
              >
                or
              </span>
            </div>
          </motion.div>

          {/* All of Above Option */}
          {allOfAboveOption && (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              onClick={() => handleToggle(allOfAboveOption.id, true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-full text-left p-5 rounded-[16px] transition-all duration-300 flex items-start gap-4 overflow-hidden ${
                isSelected(allOfAboveOption.id)
                  ? 'shadow-2xl'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {isSelected(allOfAboveOption.id) ? (
                <>
                  <div className="absolute inset-0 bg-[#0F766E]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" style={{ transform: 'skewX(-20deg)' }}></div>
                </>
              ) : (
                <div className="absolute inset-0 border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 rounded-[16px] transition-colors duration-300 bg-white"></div>
              )}

              {/* Checkbox Icon */}
              <div className="relative flex-shrink-0 mt-0.5">
                {isSelected(allOfAboveOption.id) ? (
                  <>
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-md"></div>
                    <CircleCheck className="relative w-7 h-7 text-white" strokeWidth={2.5} />
                  </>
                ) : (
                  <Circle className="w-7 h-7 text-[#9CA3AF]" strokeWidth={2} />
                )}
              </div>

              {/* Text */}
              <div className="relative flex-1">
                <span
                  className={isSelected(allOfAboveOption.id) ? 'text-white' : 'text-[#111827]'}
                  style={{ fontSize: 'var(--text-body)', lineHeight: '1.6', fontWeight: '700', letterSpacing: '-0.01em' }}
                >
                  {allOfAboveOption.text}
                </span>
                <AnimatePresence>
                  {isSelected(allOfAboveOption.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-white/80 mt-2 flex items-center gap-1.5"
                      style={{ fontSize: 'var(--text-secondary)' }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>All {regularStruggles.length} challenges selected</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          )}

          {/* Risk Mitigation Option - Using Emerald for success state */}
          {riskMitigationOption && (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              onClick={() => handleToggle(riskMitigationOption.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-full text-left p-5 rounded-[16px] transition-all duration-300 flex items-start gap-4 overflow-hidden ${
                isSelected(riskMitigationOption.id)
                  ? 'shadow-2xl'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {isSelected(riskMitigationOption.id) ? (
                <>
                  <div className="absolute inset-0 bg-[#059669]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" style={{ transform: 'skewX(-20deg)' }}></div>
                </>
              ) : (
                <div className="absolute inset-0 border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 rounded-[16px] transition-colors duration-300 bg-white"></div>
              )}

              {/* Checkbox Icon */}
              <div className="relative flex-shrink-0 mt-0.5">
                {isSelected(riskMitigationOption.id) ? (
                  <>
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-md"></div>
                    <CircleCheck className="relative w-7 h-7 text-white" strokeWidth={2.5} />
                  </>
                ) : (
                  <Circle className="w-7 h-7 text-[#9CA3AF]" strokeWidth={2} />
                )}
              </div>

              {/* Text */}
              <div className="relative flex-1">
                <span
                  className={isSelected(riskMitigationOption.id) ? 'text-white' : 'text-[#111827]'}
                  style={{ fontSize: 'var(--text-body)', lineHeight: '1.6', fontWeight: '700', letterSpacing: '-0.01em' }}
                >
                  {riskMitigationOption.text}
                </span>
              </div>
            </motion.button>
          )}
        </motion.div>

        {/* Selection Counter */}
        <AnimatePresence>
          {hasSelection && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-center mb-6"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#0F766E]/20 rounded-full blur-lg"></div>
                <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F766E] text-white shadow-xl">
                  <Check className="w-4 h-4" strokeWidth={3} />
                  <span style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}>
                    {selectedStruggles.includes('all-of-above')
                      ? `${regularStruggles.length} challenges selected`
                      : `${selectedStruggles.length} ${
                          selectedStruggles.length === 1 ? 'challenge' : 'challenges'
                        } selected`}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Helper Text */}
        <AnimatePresence mode="wait">
          {hasSelectedProblems && !hasRiskMitigationWithProblems && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                <span className="text-xl">💪</span>
                <p
                  className="text-[#374151]"
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
                >
                  Most creators go through this — you're not alone
                </p>
              </div>
            </motion.div>
          )}

          {hasOnlyRiskMitigation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#059669]" />
                <p
                  className="text-[#374151]"
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
                >
                  Great job! Let's help you stay ahead and optimize further
                </p>
              </div>
            </motion.div>
          )}

          {hasRiskMitigationWithProblems && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                <Target className="w-4 h-4 text-[#0F766E]" />
                <p
                  className="text-[#374151]"
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
                >
                  We'll help you solve challenges and optimize what's working
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="px-8 py-3.5 rounded-[12px] text-[#111827] bg-white border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 hover:bg-[#F8F9FA] transition-all duration-300 shadow-sm hover:shadow-md"
            style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
          >
            Back
          </motion.button>
          <motion.button
            onClick={() => onContinue(selectedStruggles)}
            disabled={!hasSelection}
            whileHover={hasSelection ? { scale: 1.02 } : {}}
            whileTap={hasSelection ? { scale: 0.98 } : {}}
            className={`relative px-8 py-3.5 rounded-[12px] transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
              hasSelection
                ? 'shadow-lg hover:shadow-xl'
                : 'cursor-not-allowed opacity-60'
            }`}
            style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
          >
            {hasSelection ? (
              <>
                <div className="absolute inset-0 bg-[#0F766E]"></div>
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

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
            <div className="w-5 h-5 rounded-full bg-[#0F766E]/10 flex items-center justify-center">
              <span className="text-sm">🔒</span>
            </div>
            <p
              className="text-[#374151]"
              style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
            >
              Your responses are private and secure
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}