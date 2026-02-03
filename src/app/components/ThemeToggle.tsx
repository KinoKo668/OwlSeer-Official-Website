import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  isExpanded?: boolean;
  isCollapsedStable?: boolean;
}

export function ThemeToggle({ isExpanded = true, isCollapsedStable = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative group flex items-center justify-center rounded-lg transition-colors hover:bg-sidebar-accent ${
        isExpanded 
          ? 'w-full px-3 py-2 justify-start gap-3' 
          : 'w-10 h-10 mx-auto'
      }`}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative flex items-center justify-center w-5 h-5">
        <Sun 
          size={20} 
          className={`absolute transition-all duration-300 text-muted-foreground group-hover:text-sidebar-foreground ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`} 
        />
        <Moon 
          size={20} 
          className={`absolute transition-all duration-300 text-muted-foreground group-hover:text-sidebar-foreground ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>

      <motion.span 
        className="text-sidebar-foreground whitespace-nowrap overflow-hidden"
        initial={false}
        animate={{ 
          opacity: isExpanded ? 1 : 0,
          width: isExpanded ? 'auto' : 0,
        }}
        style={{
          fontSize: '14px', 
          fontWeight: '500',
          visibility: isCollapsedStable ? 'hidden' : 'visible',
        }}
        transition={{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </motion.span>
    </button>
  );
}
