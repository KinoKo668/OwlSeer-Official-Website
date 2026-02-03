import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface PerformanceContextType {
  // 性能模式：'auto' | 'high-quality' | 'performance'
  performanceMode: 'auto' | 'high-quality' | 'performance';
  setPerformanceMode: (mode: 'auto' | 'high-quality' | 'performance') => void;
  
  // 计算后的实际设置
  enableBlur: boolean;
  enableAnimations: boolean;
  enableParallax: boolean;
  reduceMotion: boolean;
  
  // 设备信息
  isLowEndDevice: boolean;
  isWindows: boolean;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

// 检测是否为低端设备
function detectLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  // 检测硬件并发数（CPU核心数）
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  if (hardwareConcurrency <= 2) return true;
  
  // 检测设备内存（如果支持）
  const deviceMemory = (navigator as any).deviceMemory;
  if (deviceMemory && deviceMemory <= 4) return true;
  
  // 检测是否请求减少动画
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return true;
  
  return false;
}

// 检测是否为 Windows 系统
function detectWindows(): boolean {
  if (typeof window === 'undefined') return false;
  return navigator.platform?.toLowerCase().includes('win') || 
         navigator.userAgent?.toLowerCase().includes('windows');
}

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [performanceMode, setPerformanceModeState] = useState<'auto' | 'high-quality' | 'performance'>(() => {
    // 从 localStorage 读取用户偏好
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('owlseer-performance-mode');
      if (saved === 'auto' || saved === 'high-quality' || saved === 'performance') {
        return saved;
      }
    }
    return 'auto';
  });
  
  const [isLowEndDevice] = useState(detectLowEndDevice);
  const [isWindows] = useState(detectWindows);
  
  // 保存用户偏好
  const setPerformanceMode = useCallback((mode: 'auto' | 'high-quality' | 'performance') => {
    setPerformanceModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('owlseer-performance-mode', mode);
    }
  }, []);
  
  // 计算实际的性能设置
  const settings = useMemo(() => {
    // 强制高性能模式
    if (performanceMode === 'performance') {
      return {
        enableBlur: false,
        enableAnimations: false,
        enableParallax: false,
        reduceMotion: true,
      };
    }
    
    // 强制高质量模式
    if (performanceMode === 'high-quality') {
      return {
        enableBlur: true,
        enableAnimations: true,
        enableParallax: true,
        reduceMotion: false,
      };
    }
    
    // 自动模式：根据设备和系统判断
    // Windows 系统或低端设备默认减少特效
    const shouldReduceEffects = isWindows || isLowEndDevice;
    
    return {
      enableBlur: !shouldReduceEffects,
      enableAnimations: !isLowEndDevice, // 低端设备完全禁用动画
      enableParallax: !shouldReduceEffects, // Windows 和低端设备禁用视差
      reduceMotion: shouldReduceEffects,
    };
  }, [performanceMode, isLowEndDevice, isWindows]);
  
  // 将 reduceMotion 状态同步到 CSS 变量，方便 CSS 动画使用
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty(
        '--reduce-motion',
        settings.reduceMotion ? '1' : '0'
      );
      document.documentElement.classList.toggle('reduce-motion', settings.reduceMotion);
      document.documentElement.classList.toggle('no-blur', !settings.enableBlur);
    }
  }, [settings.reduceMotion, settings.enableBlur]);
  
  const value = useMemo(() => ({
    performanceMode,
    setPerformanceMode,
    ...settings,
    isLowEndDevice,
    isWindows,
  }), [performanceMode, setPerformanceMode, settings, isLowEndDevice, isWindows]);
  
  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
}

// Hook to use performance settings
export function usePerformance(): PerformanceContextType {
  const context = useContext(PerformanceContext);
  if (!context) {
    // 返回默认值而不是报错，方便组件独立使用
    return {
      performanceMode: 'auto',
      setPerformanceMode: () => {},
      enableBlur: true,
      enableAnimations: true,
      enableParallax: true,
      reduceMotion: false,
      isLowEndDevice: false,
      isWindows: false,
    };
  }
  return context;
}

// 便捷 hook：获取 blur 类名
export function useBlurClass(baseClass: string = 'backdrop-blur-xl'): string {
  const { enableBlur } = usePerformance();
  return enableBlur ? baseClass : 'bg-opacity-95';
}

// 便捷 hook：获取动画配置
export function useAnimationConfig() {
  const { enableAnimations, reduceMotion } = usePerformance();
  
  return useMemo(() => ({
    // Framer Motion 的 transition 配置
    transition: reduceMotion 
      ? { duration: 0 } 
      : { duration: 0.3, ease: 'easeOut' },
    
    // 入场动画
    initial: reduceMotion ? false : undefined,
    
    // 是否应该动画
    shouldAnimate: enableAnimations && !reduceMotion,
  }), [enableAnimations, reduceMotion]);
}
