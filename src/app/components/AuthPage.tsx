import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, Check, CircleAlert, Sparkles, Shield } from 'lucide-react';

interface AuthPageProps {
  onContinue: () => void;
}

type AuthMode = 'login' | 'signup';
type AuthStep = 'input' | 'verify-email';

export function AuthPage({ onContinue }: AuthPageProps) {
  const [mode, setMode] = React.useState<AuthMode>('login');
  const [step, setStep] = React.useState<AuthStep>('input');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (mode === 'signup' && password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (mode === 'signup') {
        // Go to email verification step
        setStep('verify-email');
      } else {
        // Login success - go to account selection
        onContinue();
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleOAuthLogin = (provider: 'google' | 'tiktok') => {
    setIsLoading(true);
    // Simulate OAuth flow
    setTimeout(() => {
      onContinue();
      setIsLoading(false);
    }, 1500);
  };

  const handleResendEmail = () => {
    // Simulate resending verification email
    console.log('Resending verification email to:', email);
  };

  // Email verification step
  if (step === 'verify-email') {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#FFFFFF] to-[#F8F9FA]"></div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0F766E]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#059669]/8 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-[#0F766E]/20"
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
          className="absolute top-32 right-[20%] w-3 h-3 rounded-full bg-[#059669]/20"
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
          className="w-full max-w-md relative z-10"
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[20px] shadow-2xl p-10 border border-white/20">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[20px] pointer-events-none"></div>
            
            <div className="relative">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/20 to-[#059669]/20 rounded-full blur-xl"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-xl">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-[#111827] via-[#0F766E] to-[#059669] bg-clip-text text-transparent text-center mb-3"
                style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                Check your email
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-center mb-8"
                style={{ fontSize: 'var(--text-body)', lineHeight: '1.6' }}
              >
                We sent a verification link to <strong className="text-[#0F766E]">{email}</strong>
              </motion.p>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative bg-gradient-to-br from-[#0F766E]/5 to-[#059669]/5 rounded-[16px] p-5 mb-8 border border-[#0F766E]/10"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span
                      className="text-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.6' }}
                    >
                      Click the link in the email to verify your account
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#059669] to-[#047857] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span
                      className="text-foreground"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.6' }}
                    >
                      After verification, you'll be redirected back here
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Resend */}
              <div className="text-center mb-6">
                <button
                  onClick={handleResendEmail}
                  className="text-[#0F766E] hover:text-[#047857] transition-colors font-semibold"
                  style={{ fontSize: 'var(--text-secondary)' }}
                >
                  Didn't receive the email? <span className="underline">Resend</span>
                </button>
              </div>

              {/* Back to login */}
              <motion.button
                onClick={() => {
                  setStep('input');
                  setMode('login');
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 rounded-[12px] border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 hover:bg-[#F8F9FA] transition-all duration-300 shadow-sm hover:shadow-md"
                style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
              >
                Back to login
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Main auth form
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#FFFFFF] to-[#F8F9FA]"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0F766E]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#059669]/8 to-transparent rounded-full blur-3xl"></div>
      
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
        className="w-full max-w-md relative z-10"
      >
        <div className="relative bg-white/80 backdrop-blur-xl rounded-[20px] shadow-2xl p-10 border border-white/20">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-[20px] pointer-events-none"></div>
          
          <div className="relative">
            {/* Logo/Title */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0F766E]/20 rounded-lg blur-md"></div>
                  <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F766E] to-[#059669] flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h1
                className="bg-gradient-to-r from-[#111827] via-[#0F766E] to-[#059669] bg-clip-text text-transparent mb-2"
                style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                TikTok Creator AI Ops
              </h1>
              <p
                className="text-muted-foreground"
                style={{ fontSize: 'var(--text-body)', fontWeight: '500' }}
              >
                {mode === 'login' ? 'Welcome back' : 'Create your account'}
              </p>
            </motion.div>

            {/* OAuth Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 mb-6"
            >
              <motion.button
                onClick={() => handleOAuthLogin('google')}
                disabled={isLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group relative w-full py-3.5 rounded-[12px] bg-white border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="relative z-10">Continue with Google</span>
              </motion.button>

              <motion.button
                onClick={() => handleOAuthLogin('tiktok')}
                disabled={isLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group relative w-full py-3.5 rounded-[12px] bg-white border-2 border-[#E5E7EB] hover:border-[#0F766E]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/0 to-[#059669]/0 group-hover:from-[#0F766E]/5 group-hover:to-[#059669]/5 transition-all duration-300"></div>
                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                    fill="currentColor"
                  />
                </svg>
                <span className="relative z-10">Continue with TikTok</span>
              </motion.button>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E7EB]"></div>
              </div>
              <div className="relative flex justify-center">
                <span
                  className="bg-white px-4 text-muted-foreground"
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '500' }}
                >
                  Or continue with email
                </span>
              </div>
            </motion.div>

            {/* Email/Password Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleEmailAuth}
              className="space-y-4"
            >
              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative bg-gradient-to-r from-[#D97706]/10 to-[#D97706]/5 border-2 border-[#D97706]/30 rounded-[12px] p-3.5 flex items-start gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D97706]/5 to-transparent"></div>
                    <CircleAlert className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5 relative z-10" />
                    <span
                      className="text-[#D97706] relative z-10"
                      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5', fontWeight: '500' }}
                    >
                      {error}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground mb-2"
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}
                >
                  Email address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#0F766E] transition-colors" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-[12px] border-2 border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] transition-all duration-200"
                    style={{ fontSize: 'var(--text-body)' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-foreground mb-2"
                  style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}
                >
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#0F766E] transition-colors" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3.5 rounded-[12px] border-2 border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] transition-all duration-200"
                    style={{ fontSize: 'var(--text-body)' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#0F766E] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password (only for signup) */}
              <AnimatePresence>
                {mode === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label
                      htmlFor="confirmPassword"
                      className="block text-foreground mb-2"
                      style={{ fontSize: 'var(--text-secondary)', fontWeight: '600' }}
                    >
                      Confirm password
                    </label>
                    <div className="relative group">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#0F766E] transition-colors" />
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-11 pr-12 py-3.5 rounded-[12px] border-2 border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 focus:border-[#0F766E] transition-all duration-200"
                        style={{ fontSize: 'var(--text-body)' }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#0F766E] transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Forgot Password (only for login) */}
              {mode === 'login' && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-[#0F766E] hover:text-[#047857] transition-colors font-semibold"
                    style={{ fontSize: 'var(--text-secondary)' }}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.01 } : {}}
                whileTap={!isLoading ? { scale: 0.99 } : {}}
                className="relative w-full py-4 rounded-[12px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-lg hover:shadow-xl mt-6"
                style={{ fontSize: 'var(--text-body)', fontWeight: '600' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#059669] to-[#047857]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ transform: 'skewX(-20deg)' }}></div>
                <span className="relative text-white">
                  {isLoading
                    ? 'Processing...'
                    : mode === 'login'
                    ? 'Sign in'
                    : 'Create account'}
                </span>
              </motion.button>
            </motion.form>

            {/* Toggle between login/signup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center"
            >
              <span
                className="text-muted-foreground"
                style={{ fontSize: 'var(--text-secondary)' }}
              >
                {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              </span>
              <button
                onClick={() => {
                  setMode(mode === 'login' ? 'signup' : 'login');
                  setError('');
                }}
                className="text-[#0F766E] hover:text-[#047857] transition-colors font-semibold"
                style={{ fontSize: 'var(--text-secondary)' }}
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </motion.div>

            {/* Terms (only for signup) */}
            <AnimatePresence>
              {mode === 'signup' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <div className="flex items-start gap-2 p-3 rounded-[12px] bg-[#F8F9FA] border border-[#E5E7EB]">
                    <Shield className="w-4 h-4 text-[#0F766E] flex-shrink-0 mt-0.5" />
                    <p
                      className="text-muted-foreground text-left"
                      style={{ fontSize: '12px', lineHeight: '1.5' }}
                    >
                      By creating an account, you agree to our <span className="text-[#0F766E] font-semibold">Terms of Service</span> and <span className="text-[#0F766E] font-semibold">Privacy Policy</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
