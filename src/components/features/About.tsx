'use client';

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { GlassCard } from '@/components/ui/GlassCard';
import { GraduationCap, Users, Calendar, MapPin, Award } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.about.title}
          </span>
        </h2>

        {/* İki Sütunlu Grid Düzeni */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sol Sütun: Eğitim ve Topluluk Kartları */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Üniversite Kartı */}
            <GlassCard hoverGlow className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <GraduationCap className="w-24 h-24 text-primary" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t.education.school}
                  </h3>
                  <p className="text-sm text-fg-dark/80 mb-3">
                    {t.education.degree}
                  </p>
                  
                  <div className="flex flex-col gap-1.5 text-xs text-fg-dark/60">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.education.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{t.education.location}</span>
                    </div>
                    {t.education.gpa && (
                      <div className="flex items-center gap-1.5 text-accent font-semibold mt-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>GPA: {t.education.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* GDSC Topluluk Kartı */}
            <GlassCard hoverGlow className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Users className="w-24 h-24 text-secondary" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t.about.gdscTitle}
                  </h3>
                  <p className="text-sm text-fg-dark/70 leading-relaxed">
                    {t.about.gdscDesc}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Sağ Sütun: Profesyonel Özet Metni */}
          <div className="lg:col-span-7">
            <GlassCard className="h-full flex flex-col justify-center">
              <p className="text-lg text-fg-dark/80 leading-relaxed font-light mb-6">
                {t.about.summary}
              </p>
              <div className="border-l-4 border-gradient-to-b from-primary to-secondary pl-4 py-2 italic text-sm text-fg-dark/60">
                &quot;Frontend engineering is about making complex logic look beautifully simple.&quot;
              </div>
            </GlassCard>
          </div>
          
        </div>
      </div>
    </section>
  );
};
