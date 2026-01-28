import AboutCard from "../components/aboutcard";
import BastionsSection from "../components/bastions-section";
import StorySection from "../components/story-section";
import { FadeIn } from "../components/ui/fade-in";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Cape */}
      <FadeIn>
        <AboutCard />
      </FadeIn>

      {/* Nossa História */}
      <FadeIn delay={300}>
        <StorySection />
      </FadeIn>

      {/* Nossos baluartes */}
      <FadeIn delay={300}>
        <BastionsSection />
      </FadeIn>
      {/* Baluartes */}
      {/* Convite pro Vocacional */}
    </div>
  );
}
