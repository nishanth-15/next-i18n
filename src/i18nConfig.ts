import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["en", "fr", "it", "es"],
  defaultLocale: "en",
};
// for english - /about
// for spanish - /es/about
// for french - /fr/about
// for italian - /it/about

export default i18nConfig;
