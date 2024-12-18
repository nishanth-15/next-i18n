import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["en", "kn", "fr", "it"],
  defaultLocale: "en",
};
// for english - /about
// for french - /fr/about
// for italian - /it/about

export default i18nConfig;
