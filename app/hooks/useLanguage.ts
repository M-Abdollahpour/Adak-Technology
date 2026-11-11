import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { t, i18n } = useTranslation();

  const language = i18n.resolvedLanguage ?? i18n.language;
  const isPersian = language.startsWith("fa");

  useEffect(() => {
    document.documentElement.lang = isPersian ? "fa-IR" : "en";
    document.documentElement.dir = isPersian ? "rtl" : "ltr";
  }, [isPersian]);

  const changeLanguage = (language: "fa" | "en") => {
    return i18n.changeLanguage(language);
  };

  return { i18n, t, language, isPersian, changeLanguage };
}
