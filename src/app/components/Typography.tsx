import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className = '' }: TypographyProps) {
  return (
    <h1
      className={`text-foreground ${className}`}
      style={{ fontSize: 'var(--text-page-title)', fontWeight: '600', lineHeight: '1.3' }}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className = '' }: TypographyProps) {
  return (
    <h2
      className={`text-foreground ${className}`}
      style={{ fontSize: 'var(--text-section-title)', fontWeight: '600', lineHeight: '1.4' }}
    >
      {children}
    </h2>
  );
}

export function BodyText({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`text-foreground ${className}`}
      style={{ fontSize: 'var(--text-body)', lineHeight: '1.6' }}
    >
      {children}
    </p>
  );
}

export function SecondaryText({ children, className = '' }: TypographyProps) {
  return (
    <p
      className={`text-muted-foreground ${className}`}
      style={{ fontSize: 'var(--text-secondary)', lineHeight: '1.5' }}
    >
      {children}
    </p>
  );
}
