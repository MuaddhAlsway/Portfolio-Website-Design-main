import { useState, useEffect } from 'react';
import en from './en.json';
import ar from './ar.json';

type Language = 'en' | 'ar';

const translations = { en, ar };

export function useI18n() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Get saved language preference from localStorage
    const saved = localStorage.getItem('language') as Language | null;
    if (saved) {
      setLanguage(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === 'string' ? value : defaultValue || key;
  };

  return {
    language,
    switchLanguage,
    t,
    isRTL: language === 'ar',
    direction: language === 'ar' ? 'rtl' : 'ltr'
  };
}
