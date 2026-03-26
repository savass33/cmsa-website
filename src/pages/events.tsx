import { useState } from "react";
import Card from "../components/card";
import { FadeIn } from "../components/ui/fade-in";
import { Button } from "../components/ui/button";
import { Modal } from "../components/ui/modal";

import aguaviva from "../assets/images/aguaviva.jpeg";
import sopro from "../assets/images/sopro.jpeg";
import santaTeresa from "../assets/images/santateresacalcuta.jpeg";
import casebre from "../assets/images/casebre.jpeg";
import olaria from "../assets/images/olaria.jpeg";
import vocacional from "../assets/images/vocacional.jpeg";
import taus from "../assets/images/taus.jpeg";

interface EventGroup {
  title: string;
  image: string;
  description: string;
  details: {
    schedule: string;
    location: string;
    coordinator: string;
    fullDescription: string;
  };
}

export default function Event() {
  const [selectedGroup, setSelectedGroup] = useState<EventGroup | null>(null);

  const groups: EventGroup[] = [
    {
      title: "Água Viva",
      image: aguaviva,
      description:
        "Nosso grupo de jovens! Um espaço vibrante de oração onde mergulhamos nas águas profundas do Espírito Santo. Um tempo para louvar, agradecer e experimentar o amor renovador de Deus em comunidade.",
      details: {
        schedule: "Todos os domingos, das 16h30 às 18h30",
        location: "Sala 2 da Igreja de Fátima",
        coordinator: "A definir",
        fullDescription:
          "O Água Viva é o nosso encontro de jovens para celebrar a vida e a fé. Através de cantos de louvor, dinâmicas, pregações inspiradoras e momentos de oração profunda, buscamos a efusão do Espírito Santo. É um espaço aberto para todos os jovens que desejam ter um encontro pessoal com Jesus e reavivar a chama da fé, bebendo da fonte inesgotável da graça divina.",
      },
    },
    {
      title: "Sopro de Vida",
      image: sopro,
      description:
        "Nosso grupo de adultos voltado para a cura e restauração interior. Como a brisa suave, permitimos que o Espírito de Deus sopre sobre nossas feridas e nos traga a verdadeira paz e liberdade.",
      details: {
        schedule: "Todas as terças-feiras, das 19h30 às 21h00",
        location: "Salas da Igreja de Fátima",
        coordinator: "A definir",
        fullDescription:
          "Inspirados no sopro vital de Deus sobre a criação, este grupo é destinado a adultos que buscam a oração por cura interior e libertação. Em um ambiente de extremo acolhimento, partilha fraterna e escuta, os participantes são convidados a entregar suas angústias e dores ao Senhor. Acreditamos que o mesmo Espírito que ressuscitou Cristo dos mortos pode dar vida nova aos corações machucados.",
      },
    },
    {
      title: "Tenho Sede",
      image: santaTeresa,
      description:
        "Grupo de oração e partilha voltado especialmente para os moradores da comunidade Aldaci Barbosa. Um espaço para reavivar a fé e promover a caridade e a fraternidade.",
      details: {
        schedule: "Todas as terças-feiras, das 19h00 às 20h00",
        location: "Capela São José (Vila Dália, 5) - Comunidade Aldaci Barbosa",
        coordinator: "A definir",
        fullDescription:
          "Respondendo ao grito de Jesus na cruz: 'Tenho sede', este grupo de oração se reúne para partilhar a Palavra de Deus e promover a fé junto aos moradores da comunidade Aldaci Barbosa. Inspirados pelos exemplos dos santos, unimos a espiritualidade contemplativa ao acolhimento fraterno, buscando saciar a sede de Cristo presente em nossos irmãos através do amor e da caridade prática.",
      },
    },
    {
      title: "Centro Cultural",
      image: casebre,
      description:
        "Um espaço de evangelização através das artes e da cultura cristã. Promovemos o belo, o bom e o verdadeiro por meio de teatro, música, literatura e estudos de aprofundamento.",
      details: {
        schedule: "Segundas, Quartas e Sextas, das 18h30 às 20h30",
        location: "Casa Santa Teresa de Calcutá (Vila Dália, 5)",
        coordinator: "A definir",
        fullDescription:
          "Acreditamos que a beleza é um caminho que conduz a Deus. O Centro Cultural reúne crianças, jovens e adultos para explorar a riqueza da tradição católica através de diversas expressões artísticas e intelectuais. Oferecemos oficinas de teatro, clube do livro, ciclos de palestras e exposições, visando a formação integral do ser humano e a transformação da cultura.",
      },
    },
    {
      title: "Grupo Olaria de Deus",
      image: olaria,
      description:
        "Grupo voltado para a evangelização e formação das crianças da Comunidade Aldaci Barbosa. Como o barro nas mãos do oleiro, ajudamos a moldar os pequenos corações com a Palavra de Deus.",
      details: {
        schedule: "Todos os sábados, das 09h00 às 11h00",
        location: "Casa Santa Teresa de Calcutá (Vila Dália, 5)",
        coordinator: "A definir",
        fullDescription:
          "Assim como o oleiro trabalha o vaso no torno (Jeremias 18), o Grupo Olaria de Deus é um ambiente de discipulado e formação dedicado às crianças da Comunidade Aldaci Barbosa. Através de atividades lúdicas, momentos de oração e ensino catequético, buscamos plantar a semente da fé desde cedo, ajudando as crianças a crescerem no amor a Deus, ao próximo e à Igreja.",
      },
    },
    {
      title: "Vocacional",
      image: vocacional,
      description:
        "Caminho de discernimento para aqueles que sentem o chamado a fazer parte da nossa comunidade. Um tempo de escuta, oração e conhecimento do nosso carisma.",
      details: {
        schedule: "Quinzenalmente às terças-feiras, das 19h30 às 21h00",
        location: "Salas da Igreja de Fátima",
        coordinator: "Equipe Vocacional",
        fullDescription:
          "O Caminho Vocacional é oferecido anualmente para todos que desejam conhecer profundamente a Comunidade Mariana Sagrado Amor e que sentem o apelo de Deus para viver o nosso carisma. Durante os encontros, abordamos os nossos pilares, baluartes e regras de vida. É um período de intenso discernimento espiritual para responder com liberdade e amor à voz do Senhor.",
      },
    },
  ];

  return (
    <div className="flex flex-col w-full mb-20">
      {/* Cape / Hero Section */}
      <FadeIn>
        <div className="relative w-full h-50">
          <div
            style={{ backgroundImage: `url(${taus})` }}
            className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-heading p-15 text-5xl text-white md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
              Nossos Grupos
            </h1>
          </div>
        </div>
      </FadeIn>

      {/* Introdução */}
      <section className="px-6 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed font-light italic mb-6">
              "Onde dois ou três estão reunidos em meu nome, aí estou eu no meio deles." (Mateus 18,20).
            </p>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto font-body leading-relaxed">
              Nossos grupos abertos são espaços de acolhimento, oração, formação e convivência fraterna. Venha participar e crescer na fé conosco!
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full mt-8"></div>
          </FadeIn>
        </div>
      </section>

      {/* Lista de Grupos */}
      <section className="px-6 mt-16 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {groups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 150 + 300}>
              <Card
                title={group.title}
                description={group.description}
                image={group.image}
                orientation="horizontal"
                reversed={index % 2 !== 0}
                className="shadow-xl bg-white border-none"
              >
                <div className="mt-6 flex justify-start">
                  <Button
                    onClick={() => setSelectedGroup(group)}
                    variant="outline"
                    className="border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-2 transition-colors duration-300"
                  >
                    Saiba mais
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedGroup}
        onClose={() => setSelectedGroup(null)}
        title={selectedGroup?.title || ""}
      >
        {selectedGroup && (
          <div className="flex flex-col gap-4 text-neutral-700">
            <p className="text-base leading-relaxed mb-2 font-medium italic text-neutral-600">
              "{selectedGroup.description}"
            </p>

            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary-800 min-w-[80px]">Horários:</span>
                <span className="text-neutral-600">{selectedGroup.details.schedule}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary-800 min-w-[80px]">Local:</span>
                <span className="text-neutral-600">{selectedGroup.details.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary-800 min-w-[80px]">Contato:</span>
                <span className="text-neutral-600">{selectedGroup.details.coordinator}</span>
              </div>
            </div>

            <div className="mt-2">
              <h4 className="text-lg font-heading text-primary-900 mb-2">Sobre o Grupo</h4>
              <p className="text-sm leading-relaxed text-neutral-600 text-justify">
                {selectedGroup.details.fullDescription}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={() => setSelectedGroup(null)}
                className="bg-primary-600 text-white hover:bg-primary-700"
              >
                Fechar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
