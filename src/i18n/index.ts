import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en';
import vi from './translations/vi';

const resources = {
  en: { translation: en },
  vi: { translation: vi },
};

const deviceLocale = Localization.getLocales()[0];
const deviceLanguage =
  deviceLocale?.languageTag ?? deviceLocale?.languageCode ?? 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage,
  fallbackLng: 'en',
  supportedLngs: ['en', 'vi'],
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
