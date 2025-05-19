import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { lngs } from "@/shared/constants";

export const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const activeLang = i18n.language as keyof typeof lngs;

  const handleChangeLanguage = (key: string) => {
    return () => i18n.changeLanguage(key);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{lngs[activeLang].nativeName}</DropdownMenuTrigger>

      <DropdownMenuContent>
        {(Object.keys(lngs) as (keyof typeof lngs)[]).map((key) => (
          <DropdownMenuItem
            key={`language-toggler${key}`}
            onClick={handleChangeLanguage(key)}
          >
            {lngs[key].nativeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
