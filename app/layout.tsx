import { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import MobileBlocker from "@/components/shared/MobileBlocker";

const BASE_URL = "https://suryacode.vercel.app/en";

export const metadata: Metadata = {
  title: "Surya Rafliansyah - Fullstack Developer Portfolio",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="">
        <NextIntlClientProvider>
          <MobileBlocker>{children}</MobileBlocker>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

