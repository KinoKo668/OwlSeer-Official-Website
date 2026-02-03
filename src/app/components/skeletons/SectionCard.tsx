import React from 'react';

interface SectionCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({ id, title, subtitle, children, className = '' }: SectionCardProps) {
  return (
    <section id={id} className={`scroll-mt-48 ${className}`}>
      <div className="mb-3">
        <h2 className="text-[#1a1a1a]" style={{ fontSize: '18px', fontWeight: '700' }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#999999] mt-1" style={{ fontSize: '13px', fontWeight: '400' }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="bg-white rounded-[12px] border border-[#e0e0e0] p-6 shadow-sm">
        {children}
      </div>
    </section>
  );
}
