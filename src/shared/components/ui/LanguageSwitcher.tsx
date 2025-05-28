import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { Language, languages } from "@/shared/constants";
import { loadLocale, resolveNameSpaceFromPath } from "@/shared/config/i18n";
import { useLocation } from "react-router-dom";

export const LanguageSwitcher = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const activeLang = i18n.language as keyof typeof languages;

  const handleChangeLanguage = (key: Language) => {
    return async () => {
      const nameSpace = resolveNameSpaceFromPath(location.pathname);
      await loadLocale(key, nameSpace);
      i18n.changeLanguage(key);
    };
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {languages[activeLang].nativeName}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {(Object.keys(languages) as Language[]).map((key) => (
          <DropdownMenuItem
            key={`language-toggler${key}`}
            onClick={handleChangeLanguage(key)}
          >
            {languages[key].nativeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
