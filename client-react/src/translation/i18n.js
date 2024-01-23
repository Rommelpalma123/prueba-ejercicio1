import enTraslation from '@/translation/en/global.json';
import esTraslation from '@/translation/es/global.json';
import ptTraslation from '@/translation/pt/global.json';
import i18next from 'i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: esTraslation,
    },

    en: {
      global: enTraslation,
    },
    pt: {
      global: ptTraslation,
    },
  },
});

export default i18next;
