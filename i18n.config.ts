import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Example translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
    },
  },
  pt: {
    translation: {
      welcome: "Bem-vindo",
    },
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
