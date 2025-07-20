import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import it from './locales/it.json';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  fr: {
    translation: fr,
  },
  ar: {
    translation: ar,
  },
  it: {
    translation: it,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n; 