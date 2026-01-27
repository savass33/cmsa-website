import MainCard from "../components/maincard";
import AboutSection from "../components/about-section";
import PillarsSection from "../components/pillars-section";
import CTASection from "../components/cta-section";
import { FadeIn } from "../components/ui/fade-in";
import MinistriesSection from "../components/ministries-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <FadeIn>
        <MainCard />
      </FadeIn>

      {/* Brief About Section */}
      <FadeIn delay={200}>
        <AboutSection />
      </FadeIn>

      {/* Featured Ministries Section */}
      <FadeIn>
        <MinistriesSection />
      </FadeIn>

      {/* Our Values/Pillars */}
      <FadeIn>
        <PillarsSection />
      </FadeIn>

      {/* Call to Action */}
      <FadeIn>
        <CTASection />
      </FadeIn>
    </div>
  );
}
