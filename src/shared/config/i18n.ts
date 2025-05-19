import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { env } from "./env";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: env.VITE_NODE_ENV === "development",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          test: "react is good tools",
        },
      },
      ar: {
        translation: {
          test: "react هي اداة جيدة للغاية",
        },
      },
    },
  });

const rtlLanguages = ["ar"];

const updateDocumentDirection = (lng: string) => {
  const direction = rtlLanguages.includes(lng) ? "rtl" : "ltr";
  document.documentElement.dir = direction;
  document.documentElement.lang = lng;
};

i18n.on("languageChanged", updateDocumentDirection);
updateDocumentDirection(i18n.language);

export default i18n;
