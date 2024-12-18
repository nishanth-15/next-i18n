"use client";

import { useTranslation } from "react-i18next";

export default function ClientComponent() {
  const { t } = useTranslation();
  const name = "Nextjs i18n";

  return <h2>{t("common:greetings", { name })}</h2>;
}
