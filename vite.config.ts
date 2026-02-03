import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // 👇👇👇 核心修改：添加这两行配置 👇👇👇
    minify: false,    // 暂时关闭压缩，防止构建卡死
    sourcemap: false, // 关闭 SourceMap，节省内存
    // 👆👆👆 修改结束 👆👆👆

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching and loading performance
        manualChunks: {
          // Vendor chunk for React and core libraries
          'react-vendor': ['react', 'react-dom'],
          
          // UI library chunks
          'radix-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
          ],
          
          // Chart library separate chunk (large dependency)
          'recharts-vendor': ['recharts'],
          
          // Material UI chunk
          'mui-vendor': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          
          // Icons and utilities
          'lucide-icons': ['lucide-react'],
          
          // Date and form libraries
          'form-date-utils': ['date-fns', 'react-hook-form', 'react-day-picker'],
          
          // Animation and interaction libraries
          'interaction-libs': ['motion', 'react-dnd', 'react-dnd-html5-backend'],
        },
      },
    },
    // Increase chunk size warning limit (default is 500kb)
    chunkSizeWarningLimit: 1000,
  },
})