'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationDict } from '@/constants/translations';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    // Tarayıcı hafızasını okuyup varsayılan dili belirliyoruz
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang === 'tr' || savedLang === 'en') {
      setTimeout(() => {
        setLanguageState(savedLang);
      }, 0);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
