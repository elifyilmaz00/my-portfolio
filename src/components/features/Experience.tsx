'use client';

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { GlassCard } from '@/components/ui/GlassCard';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.experience.title}
          </span>
        </h2>

        {/* Dikey Timeline Akışı */}
        <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-12">
          
          {t.experiences.map((exp) => (
            <div key={exp.company} className="relative group">
              {/* Timeline Düğümü */}
              <div className="absolute -left-[37px] md:-left-[45px] top-1.5 p-1.5 rounded-full bg-bg-dark border border-white/10 text-primary group-hover:text-secondary group-hover:border-secondary transition-all duration-300">
                <div className="p-1 rounded-full bg-white/5">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>

              {/* Deneyim Kartı */}
              <GlassCard hoverGlow className="relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-fg-dark/80 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Tarih ve Konum Bilgileri */}
                  <div className="flex flex-col gap-1.5 text-xs text-fg-dark/60 md:items-end">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Başarılar ve Görev Detayları */}
                <ul className="space-y-3 mt-4 text-sm text-fg-dark/70 leading-relaxed list-none">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
