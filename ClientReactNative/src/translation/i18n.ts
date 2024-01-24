import enTraslation from './en/global.json';
import esTraslation from './es/global.json';
import ptTraslation from './pt/global.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: enTraslation,
  },
  es: {
    translation: esTraslation,
  },
  pt: {
    translation: ptTraslation,
  },
};

i18n.use(initReactI18next).init({
  debug: false,
  compatibilityJSON: 'v3',
  interpolation: { escapeValue: false },
  lng: 'es',
  resources,
});

export default i18n;
