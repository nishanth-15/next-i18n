import ClientComponent from "@/components/client";
import initTranslations, { NAME_SPACES } from "@/utils/i18n";
import Link from "next/link";

type Page = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Page) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, NAME_SPACES);

  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-semibold">{t("hero_title")}</h1>
      <ClientComponent />
      <Link href="/about">{t("common:about_us")}</Link>
    </main>
  );
}
