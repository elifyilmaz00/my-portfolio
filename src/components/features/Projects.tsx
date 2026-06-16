'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Code } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'web' | 'other'>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Asenkron veri simülasyonu - İskelet ekranları (Skeleton Loaders) 1 saniye gösteriyoruz
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [filter]);

  // Filtre değiştiğinde yüklenme animasyonunu tekrar tetikliyoruz
  const handleFilterChange = (newFilter: 'all' | 'web' | 'other') => {
    setIsLoading(true);
    setFilter(newFilter);
  };

  const filteredProjects = t.projectsList.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.projects.title}
          </span>
        </h2>

        {/* Filtre Butonları */}
        <div className="flex justify-center items-center gap-3 mb-16 flex-wrap">
          <Button 
            variant={filter === 'all' ? 'primary' : 'glass'} 
            onClick={() => handleFilterChange('all')}
            className="text-xs px-5 py-2"
          >
            {t.projects.categories.all}
          </Button>
          <Button 
            variant={filter === 'web' ? 'primary' : 'glass'} 
            onClick={() => handleFilterChange('web')}
            className="text-xs px-5 py-2"
          >
            {t.projects.categories.web}
          </Button>
          <Button 
            variant={filter === 'other' ? 'primary' : 'glass'} 
            onClick={() => handleFilterChange('other')}
            className="text-xs px-5 py-2"
          >
            {t.projects.categories.other}
          </Button>
        </div>

        {/* Proje Listesi Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // İskelet Ekranlar (Skeleton Loaders) - Yüklenme durumu simülasyonu
            Array.from({ length: filteredProjects.length || 3 }).map((_, i) => (
              <GlassCard key={i} className="flex flex-col h-[350px] animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-white/5 mb-6" />
                <div className="h-6 w-2/3 bg-white/10 rounded-md mb-3" />
                <div className="h-4 w-1/2 bg-white/5 rounded-md mb-8" />
                <div className="space-y-2 mb-8 flex-grow">
                  <div className="h-3 w-full bg-white/5 rounded-md" />
                  <div className="h-3 w-5/6 bg-white/5 rounded-md" />
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  <div className="h-6 w-16 bg-white/5 rounded-full" />
                  <div className="h-6 w-20 bg-white/5 rounded-full" />
                </div>
                <div className="h-8 w-24 bg-white/10 rounded-lg" />
              </GlassCard>
            ))
          ) : (
            // Gerçek Proje Kartları
            filteredProjects.map((project) => (
              <GlassCard 
                key={project.id} 
                hoverGlow 
                className="flex flex-col h-full hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Proje Simgesi */}
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <Code className="w-5 h-5" />
                </div>

                {/* Proje Başlığı */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-accent font-semibold mb-4 tracking-wider uppercase">
                  {project.subtitle}
                </p>

                {/* Proje Açıklaması */}
                <p className="text-sm text-fg-dark/70 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Proje Teknolojileri */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} text={tag} />
                  ))}
                </div>

                {/* Buton Linki */}
                <div className="mt-auto">
                  <a
                    href={project.link || '#'}
                    className="inline-flex items-center text-xs font-semibold text-primary hover:text-secondary transition-colors duration-300 group/link"
                  >
                    <span>Detayları İncele</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </GlassCard>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
