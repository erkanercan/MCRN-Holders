import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationEN from "./locales/en-GB/translation.json";
import translationTR from "./locales/tr-TR/translation.json";
const resources = {
  "en-GB": {
    translation: translationEN,
  },
  "en-US": {
    translation: translationEN,
  },
  "tr-TR": {
    translation: translationTR,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en-GB",
    resources,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
