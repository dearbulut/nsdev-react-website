import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';
import translationDE from './locales/de/translation.json';
import translationRU from './locales/ru/translation.json';
import translationZH from './locales/zh/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  },
  de: {
    translation: translationDE
  },
  ru: {
    translation: translationRU
  },
  zh: {
    translation: translationZH
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;