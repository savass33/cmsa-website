import { FadeIn } from "./ui/fade-in";
import tulio from "../assets/images/tulio.png";
import gabi from "../assets/images/gabi.png";

const councilMembers = [
  {
    name: "Gabriele Estrela",
    role: "Fundadora",
    description:
      "Portadora do carisma original e guia espiritual da nossa família comunitária. Como fundadora, traz em seu coração a semente primeira do Sagrado Amor, inspirando-nos a viver a santidade no cotidiano.",
    image: gabi,
  },
  {
    name: "Marco Túlio",
    role: "Moderador Geral",
    description:
      "Zela pela fidelidade ao carisma e pela unidade de todos os membros da comunidade. Responsável pela direção geral, busca sempre a vontade de Deus para guiar nossos passos na missão.",
    image: tulio,
  },
];

export default function CouncilSection() {
  return (
    <section className="py-24 px-6 bg-neutral-50 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-50 rounded-full -ml-48 -mb-48 blur-3xl opacity-60"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-primary-900 mb-6">
              Nossa Liderança
            </h2>
            <div className="w-40 h-1 bg-secondary-500 rounded-full mx-auto"></div>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 md:gap-16">
          {councilMembers.map((member, index) => (
            <FadeIn key={index} delay={index * 200} className="flex-1 max-w-lg">
              <div className="group h-full relative bg-white rounded-3xl p-10 shadow-sm border border-neutral-100">
                <div className="w-full aspect-square mb-10 relative overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-all duration-300 hover:scale-105"
                  />
                </div>

                <div className="text-center relative">
                  <h3 className="text-3xl font-heading text-primary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold tracking-widest text-secondary-600 uppercase mb-6">
                    {member.role}
                  </p>

                  <div className="w-16 h-1 bg-secondary-400 mx-auto mb-6"></div>

                  <p className="text-neutral-600 text-lg leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
