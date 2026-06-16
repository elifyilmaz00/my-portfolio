'use client';

import React, { useState } from 'react';

interface BadgeProps {
  text: string;
  glowColor?: string; // Örn: 'rgba(99, 102, 241, 0.4)' (Indigo) veya marka rengi
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  glowColor = 'rgba(99, 102, 241, 0.3)', // Varsayılan: soft indigo
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Marka rengi parlaması için inline style oluşturuyoruz
  const glowStyle = isHovered
    ? {
        boxShadow: `0 0 15px ${glowColor}`,
        borderColor: glowColor,
      }
    : {};

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={glowStyle}
      className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold glass-effect text-fg-dark/90 transition-all duration-300 scale-100 hover:scale-105 hover:bg-white/5 cursor-default select-none border border-white/10"
    >
      {text}
    </span>
  );
};
