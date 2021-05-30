import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './locale/fr/translationFR.json';
import translationEN from './locale/en/translationEN.json';
import translationDE from './locale/de/translationDE.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
