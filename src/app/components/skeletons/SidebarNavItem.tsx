import React from 'react';

interface SidebarNavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function SidebarNavItem({ label, isActive, onClick }: SidebarNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-[#f0fdf4] text-[#10b981]'
          : 'text-[#666666] hover:bg-[#f5f5f5] hover:text-[#1a1a1a]'
      }`}
      style={{ fontSize: '13px', fontWeight: isActive ? '600' : '500' }}
    >
      {label}
    </button>
  );
}
