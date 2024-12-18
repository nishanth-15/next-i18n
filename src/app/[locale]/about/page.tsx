import initTranslations, { NAME_SPACES } from "@/utils/i18n";
import Link from "next/link";

type Page = {
  params: Promise<{ locale: string }>;
};

const address_1 = "Nameless street,";
const address_2 = "Some City, Some State";

export default async function Page({ params }: Page) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, NAME_SPACES);

  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1>{t("about:about_us", { address_1 })}</h1>
      <div className="text-center">
        <p className="font-semibold">{t("about:our_address")}:</p>
        <p>{address_1}</p>
        <p>{address_2}</p>
      </div>
      <Link href="/">{t("common:back")}</Link>
    </main>
  );
}
