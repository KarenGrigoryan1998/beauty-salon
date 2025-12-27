import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hy: { translation: translations.hy },
      en: { translation: translations.en },
      ru: { translation: translations.ru }
    },
    lng: 'hy',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
