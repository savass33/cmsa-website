import { HeartIcon, LightningBoltIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "./ui/fade-in";

const pillars = [
  {
    title: "Pobres",
    description:
      "Viver a simplicidade e a dependência total da providência divina, despojados de nós mesmos.",
    icon: <HeartIcon className="w-8 h-8 text-primary-600" />,
  },
  {
    title: "Íntimos da Verdade",
    description:
      "Buscar a Deus no silêncio, na oração e no estudo, deixando que a Verdade nos liberte.",
    icon: <LightningBoltIcon className="w-8 h-8 text-primary-600" />,
  },
  {
    title: "Livres",
    description:
      "A liberdade de quem se sabe amado por Deus e escolhe segui-Lo sem reservas.",
    icon: <SunIcon className="w-8 h-8 text-primary-600" />,
  },
];

export default function PillarsSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-900 mb-4">
              Nosso Carisma
            </h2>
            <p className="text-xl font-accent italic text-primary-700 mb-6">
              "Dar a conhecer o Amor a todo coração pobre"
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 150} className="h-full">
              <div
                className="h-full p-8 rounded-2xl bg-primary-50 border border-primary-100 flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-primary-200 hover:-translate-y-1"
              >
                <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-heading text-primary-800 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => navigate("/charisma")}
              className="px-8 py-3 text-lg border-primary-600 text-primary-600 hover:bg-primary-50"
            >
              Conhecer Mais
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
