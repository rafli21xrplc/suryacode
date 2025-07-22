import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Metadata } from "next";


const BASE_URL = "https://suryacode.vercel.app/en";

export const metadata: Metadata = {
  title: "Surya Rafliansyah - Software Developer Portfolio",
  description:
    "Surya Rafliansyah, Fullstack Developer di Malang ahli Laravel, React, & Flutter. Lihat portofolio web & mobile saya dan mari diskusikan proyek Anda selanjutnya.",
  keywords: [
    "Fullstack Developer",
    "Web Developer",
    "Mobile Developer",
    "Laravel",
    "React",
    "Flutter",
    "Malang",
    "Surya Rafliansyah",
  ],
  authors: [{ name: "Surya Rafliansyah" }],

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "Surya Rafliansyah - Fullstack Developer Portfolio",
    description:
      "Portofolio Surya Rafliansyah, seorang Fullstack Developer berpengalaman dalam membangun solusi web dan mobile yang efisien dan skalabel.",
    url: BASE_URL,
    siteName: "Portofolio Surya Rafliansyah",
    images: [
      {
        url: `${BASE_URL}/images/banner.png`,
        width: 1200,
        height: 630,
        alt: "Surya Rafliansyah - Fullstack Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <div className="min-h-screen bg-black overflow-hidden">
        <Navbar />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
