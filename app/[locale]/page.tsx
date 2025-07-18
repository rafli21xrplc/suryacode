import { useTranslations } from "next-intl";
import { Header } from "@/components/features/header";
import { About } from "@/components/features/about";
import TechSlider from "@/components/shared/tech";
import Experience from "@/components/features/experience";

export default function HomePage() {
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
