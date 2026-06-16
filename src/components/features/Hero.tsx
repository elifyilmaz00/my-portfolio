'use client';

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden grid-overlay">
      {/* Ambient Glow / Arka Plan Parlamaları */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 text-center flex flex-col items-center">
        {/* Karşılama Rozeti */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-semibold tracking-wide text-fg-dark/80 uppercase">
            {t.hero.greeting}
          </span>
        </div>

        {/* Ana Başlık */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          <span className="block text-white">Elif Sultan Yılmaz</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
            {t.hero.title}
          </span>
        </h1>

        {/* Açıklama */}
        <p className="text-base md:text-lg text-fg-dark/70 max-w-2xl mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        {/* Eylem Butonları */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#projects">
            <Button variant="primary" className="w-full sm:w-auto">
              <span>{t.hero.viewProjects}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="glass" className="w-full sm:w-auto border border-white/10">
              {t.hero.contactMe}
            </Button>
          </a>
        </div>

        {/* Sosyal Medya İkonları */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/elifyilmaz00"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 text-fg-dark/80 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profilim"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/elifsyilmaz00"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 text-fg-dark/80 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Profilim"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
