import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Card({
  children,
  className = '',
}: CardProps) {
  return (
    <>
      {children}
    </>
  );
}

export function CardHeader({ title, subtitle, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-5 ${className}`}>
      <h3
        className="text-[var(--text-section-title)] text-foreground mb-1"
        style={{ fontSize: 'var(--text-section-title)' }}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className="text-[var(--text-secondary)] text-muted-foreground"
          style={{ fontSize: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={className}>{children}</div>;
}