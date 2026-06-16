'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Sayfa kaydırıldığında navigasyon çubuğunun zemin netliğini artırıyoruz
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const navItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          ESY.
        </a>

        {/* Masaüstü Navigasyon Linkleri */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-fg-dark/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          {/* Dil Değiştirici Buton */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 transition-all duration-300 text-xs font-semibold"
            aria-label="Dili değiştir / Change language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Mobil Menü Tetikleyici Buton */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobil Dil Butonu */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold"
          >
            <Globe className="w-3 h-3" />
            <span>{language.toUpperCase()}</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-fg-dark/95 focus:outline-none"
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü Paneli (Drawer) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-effect transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 py-6 visible' : 'opacity-0 scale-y-0 py-0 invisible'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-fg-dark/90 hover:text-primary py-2 transition-colors duration-200 border-b border-white/5 last:border-0"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
