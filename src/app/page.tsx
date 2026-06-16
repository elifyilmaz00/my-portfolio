'use client';

import React from 'react';
import { Navbar } from '@/components/features/Navbar';
import { Hero } from '@/components/features/Hero';
import { About } from '@/components/features/About';
import { Skills } from '@/components/features/Skills';
import { Experience } from '@/components/features/Experience';
import { Projects } from '@/components/features/Projects';
import { Contact } from '@/components/features/Contact';

export default function Home() {
  return (
    <>
      {/* Üst Navigasyon Çubuğu */}
      <Navbar />

      {/* Ana Bölümler */}
      <main className="flex-1 w-full relative">
        {/* Giriş Alanı */}
        <Hero />

        {/* Hakkımda Bölümü */}
        <About />

        {/* Yetenekler Bölümü */}
        <Skills />

        {/* Deneyimler Bölümü */}
        <Experience />

        {/* Projeler Bölümü */}
        <Projects />

        {/* İletişim Bölümü */}
        <Contact />
      </main>

      {/* Footer / Alt Bilgi Alanı */}
      <footer className="py-8 border-t border-white/5 text-center text-xs text-fg-dark/40">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Elif Sultan Yılmaz. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
