import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverGlow = false,
}) => {
  return (
    <div
      className={`glass-effect rounded-2xl p-6 transition-all duration-300 ${
        hoverGlow 
          ? 'hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:border-primary/30 hover:-translate-y-1' 
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
