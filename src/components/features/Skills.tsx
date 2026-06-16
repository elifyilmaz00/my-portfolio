'use client';

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Code2, Cpu, Wrench } from 'lucide-react';

// Markaların resmi renk paletine sadık kalarak glow (parlama) gölgeleri tanımlıyoruz
const brandGlowColors: Record<string, string> = {
  // Frontend
  'React': 'rgba(97, 218, 251, 0.45)', // Cyan
  'Next.js (App Router)': 'rgba(255, 255, 255, 0.45)', // White
  'TypeScript': 'rgba(49, 120, 198, 0.45)', // TS Blue
  'Tailwind CSS': 'rgba(56, 189, 248, 0.45)', // Tailwind Cyan
  'JavaScript (ES6+)': 'rgba(247, 223, 30, 0.45)', // JS Yellow
  'HTML5': 'rgba(227, 79, 38, 0.45)', // HTML Orange
  'CSS3': 'rgba(33, 150, 243, 0.45)', // CSS Blue
  // Engineering
  'Zustand / Redux': 'rgba(118, 74, 188, 0.45)', // Redux Purple
  'RESTful APIs (Fetch API)': 'rgba(16, 185, 129, 0.45)', // API Emerald
  'Git & GitHub': 'rgba(240, 80, 50, 0.45)', // Git Orange
  'Unity': 'rgba(128, 128, 128, 0.45)', // Unity Gray
  'Visual Studio Code': 'rgba(0, 122, 204, 0.45)', // VS Code Blue
  // Fundamentals
  'SOLID Prensipleri': 'rgba(99, 102, 241, 0.45)', // SOLID Indigo
  'SOLID Principles': 'rgba(99, 102, 241, 0.45)',
  'Data Structures & Algorithms': 'rgba(236, 72, 153, 0.45)', // Pink
  'C / C++': 'rgba(0, 89, 156, 0.45)', // C++ Blue
  'Java': 'rgba(224, 27, 36, 0.45)', // Java Red
};

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  // Yetenekleri kategorilerine göre grupluyoruz
  const frontendSkills = t.skillsList.filter(s => s.category === 'frontend');
  const engineeringSkills = t.skillsList.filter(s => s.category === 'engineering');
  const fundamentalsSkills = t.skillsList.filter(s => s.category === 'fundamentals');

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Soft Ambient Light */}
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 translate-x-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.skills.title}
          </span>
        </h2>

        {/* 3 Kategori Kartları Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Frontend Core */}
          <GlassCard hoverGlow className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                {t.skills.categories.frontend}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {frontendSkills.map((skill) => (
                <Badge 
                  key={skill.name} 
                  text={skill.name} 
                  glowColor={brandGlowColors[skill.name]} 
                />
              ))}
            </div>
          </GlassCard>

          {/* Engineering & Ecosystem */}
          <GlassCard hoverGlow className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                {t.skills.categories.engineering}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {engineeringSkills.map((skill) => (
                <Badge 
                  key={skill.name} 
                  text={skill.name} 
                  glowColor={brandGlowColors[skill.name]} 
                />
              ))}
            </div>
          </GlassCard>

          {/* CS Fundamentals */}
          <GlassCard hoverGlow className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">
                {t.skills.categories.fundamentals}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {fundamentalsSkills.map((skill) => (
                <Badge 
                  key={skill.name} 
                  text={skill.name} 
                  glowColor={brandGlowColors[skill.name]} 
                />
              ))}
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};
