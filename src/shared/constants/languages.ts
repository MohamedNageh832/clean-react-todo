const languages = {
  en: { nativeName: "English" },
  ar: { nativeName: "العربية" },
} as const;

const nameSpaces = ["home"] as const;

const rtlLanguages = ["ar"];

type Language = keyof typeof languages;
type NameSpace = (typeof nameSpaces)[number];

export { languages, nameSpaces, rtlLanguages };
export type { Language, NameSpace };
