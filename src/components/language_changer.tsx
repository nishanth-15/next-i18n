"use client";

import i18nConfig from "@/i18nConfig";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    {
      /* 
      redirect to new locale path 
        if: 
          prefix the new locale to the beginning URL path as if the current locale is default locale it wont be included in the URL path
        else: 
          if the current locale is not default then replace it with the new locale
    */
    }
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault)
      router.push("/" + newLocale + pathname);
    else router.push(pathname.replace(currentLocale, newLocale));

    // router.refresh();
  };

  return (
    <select value={currentLocale} onChange={changeLanguage}>
      {i18nConfig.locales.map((locale) => (
        <option key={locale} value={locale} disabled={locale === currentLocale}>
          {locale}
        </option>
      ))}
    </select>
  );
}
