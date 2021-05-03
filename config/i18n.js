import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locales from '../locales';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locales,
    lng: "fr",
    fallbackLng: "fr",

    interpolation: {
      escapeValue: true
    }
  });

export default i18n;