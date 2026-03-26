import foto2025 from "../assets/images/compromisso2025.jpeg";

export default function StorySection() {
  return (
    <section className="mt-12 px-6 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={foto2025}
                alt="Casebre da Comunidade Mariana Sagrado Amor"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>

          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-heading text-primary-900 mb-6">
              Nossa História
            </h2>
            <div className="w-20 h-1 bg-secondary-500 rounded-full mb-16"></div>

            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              A Comunidade Mariana Sagrado Amor foi fundada no dia 02 de junho de 2019, em Fortaleza, na Paróquia de Fátima, por Gabriele Estrela, com a direção espiritual do Pe. Ivan de Sousa. É fruto de um ardente desejo de fazer a vontade de Deus, de estar com Ele e amá-Lo sem medidas.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Existimos para "dar a conhecer o Amor a todo coração pobre". Esse é o nosso Carisma. Deus nos pede, a cada dia, para ir até cada coração, sem reservas, levando esse Amor que nos move, que é o sentido de tudo para nós.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-6">
          <p className="text-lg text-neutral-700 leading-relaxed">
            De forma prática, nossa missão contribui para a manutenção da nossa Casa Santa Teresa de Calcutá, onde realizamos alguns grupos de oração e também o Centro Cultural e o Grupo Olaria de Deus.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Além disso, contamos com a Capela São José, onde realizamos assembleias, missas e novenas. Tudo para dar a conhecer o Amor a todo coração pobre.
          </p>
        </div>
      </div>
    </section>
  );
}
