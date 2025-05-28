import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { env } from "./env";
import { Language, NameSpace, rtlLanguages } from "../constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: env.VITE_NODE_ENV === "development",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {},
  });

const updateDocumentDirection = (lng: string) => {
  const direction = rtlLanguages.includes(lng) ? "rtl" : "ltr";
  document.documentElement.dir = direction;
  document.documentElement.lang = lng;
};

i18n.on("languageChanged", updateDocumentDirection);
updateDocumentDirection(i18n.language);

const loadLocale = async (lng: Language, ns: NameSpace) => {
  const locale = await import(`@/shared/locales/${lng}/${ns}.json`);
  i18n.addResourceBundle(lng, ns, locale);
};

const resolveNameSpaceFromPath = (path: string): NameSpace => {
  if (path.startsWith("/") || path.startsWith("/home")) return "home";
  return "home";
};

export default i18n;
export { loadLocale, resolveNameSpaceFromPath };
