"use client";

import { useTranslations } from "next-intl";
import { Header } from "@/components/features/header";
import { About } from "@/components/features/about";
import TechSlider from "@/components/shared/tech";
import { Experience } from "@/components/features/experience";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextmenu);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
  const t = useTranslations("HomePage");
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <TechSlider />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
    </div>
  );
}
