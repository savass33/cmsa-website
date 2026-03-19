import { useState } from "react";
import Card from "../components/card";
import { FadeIn } from "../components/ui/fade-in";
import { Button } from "../components/ui/button";
import { Modal } from "../components/ui/modal";

import musica from "../assets/images/musica.jpeg";
import ostensorio from "../assets/images/ostensorio.jpg";
import liturgia from "../assets/images/liturgia.jpg";
import saoJoaoPaulo from "../assets/images/saojpii.jpeg";

interface Ministry {
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

export default function Ministeries() {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  const ministries: Ministry[] = [
    {
      title: "Música Sagrada",
      image: musica,
      description:
        "Elevar as almas a Deus através de melodias consagradas. O Ministério de Música é o sopro do Espírito que, pelas vozes e instrumentos, prepara o coração da comunidade para o encontro profundo com o Cristo Vivo.",
      details: {
        schedule: "Ensaios: Segundas-feiras (Quinzenal)",
        location: "Salas da Igreja de Fátima",
        coordinator: "A definir",
        fullDescription:
          "O canto litúrgico e os louvores não são apenas adornos, mas a própria oração em forma de arte. Aqueles que servem neste ministério dedicam suas vidas a serem canais da graça divina, levando consolo, adoração e fervor espiritual a toda a assembleia. Se você sente o chamado para cantar as glórias de Deus, venha unir sua voz à nossa.",
      },
    },
    {
      title: "Intercessão",
      image: ostensorio,
      description:
        "Colocar-se na brecha pelos irmãos e pela Igreja. Como sentinelas do Senhor, nossos intercessores clamam incessantemente diante do Santíssimo Sacramento, sustentando espiritualmente toda a obra e missão da comunidade.",
      details: {
        schedule: "Vigílias: Segundas-feiras (Quinzenal)",
        location: "Salas da Igreja de Fátima",
        coordinator: "A definir",
        fullDescription:
          "A intercessão é o coração invisível que bombeia a graça para todo o corpo da Igreja. Através do Santo Terço, da adoração silenciosa e do jejum, lutamos as batalhas espirituais e confiamos cada alma à misericórdia de Cristo. É um chamado ao sacrifício escondido e ao amor incondicional por aqueles que sofrem e pelos sacerdotes.",
      },
    },
    {
      title: "Liturgia",
      image: liturgia,
      description:
        "Zelar pelo Sagrado e pelo Altar do Senhor. Cada gesto, paramento e objeto litúrgico é um reflexo do mistério celestial. Este ministério guarda a beleza do culto divino para que o céu toque a terra em cada Santa Missa.",
      details: {
        schedule: "Reuniões Formativas: Segundas-feiras (Quinzenal)",
        location: "Salas da Igreja de Fátima",
        coordinator: "A definir",
        fullDescription:
          "Os servidores do altar (acólitos, leitores, ministros) são guardiões dos santos mistérios. A vocação litúrgica exige reverência, piedade e um profundo amor pela Eucaristia. Nós nos preparamos não apenas de forma prática, mas principalmente espiritual, para que a comunidade viva o ápice da fé com dignidade e temor de Deus.",
      },
    },
    {
      title: "Palavra e Anúncio",
      image: saoJoaoPaulo,
      description:
        "Proclamar a Boa Nova, sendo a voz de Cristo no deserto do mundo. Levamos a luz das Sagradas Escrituras aos corações sedentos, através da meditação, do estudo e da pregação fiel ao Magistério.",
      details: {
        schedule: "Encontros de Estudo: Segundas-feiras (Quinzenal)",
        location: "Salas da Igreja de Fátima",
        coordinator: "A definir",
        fullDescription:
          "'Ignorar as Escrituras é ignorar o próprio Cristo' (São Jerônimo). O Ministério da Palavra se debruça sobre a Revelação divina para nutrir a própria alma e, transbordando dessa graça, instruir a comunidade. Cuidamos da formação catequética, dos grupos de leitura orante (Lectio Divina) e da difusão do Evangelho.",
      },
    },
  ];

  return (
    <div className="flex flex-col w-full mb-20">
      {/* Cape / Hero Section - Padronizado com About */}
      <FadeIn>
        <div className="relative w-full h-50">
          <div
            style={{ backgroundImage: `url(${ostensorio})` }}
            className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-heading p-15 text-5xl text-white md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
              Nossos Ministérios
            </h1>
          </div>
        </div>
      </FadeIn>

      {/* Introdução */}
      <section className="px-6 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed font-light italic mb-6">
              "Existem dons diferentes, mas o Espírito é o mesmo; diferentes ministérios,
              mas o Senhor é o mesmo." (1 Coríntios 12,4-5).
            </p>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto font-body leading-relaxed">
              Conheça as vocações que animam e sustentam nossa comunidade na fé.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full mt-8"></div>
          </FadeIn>
        </div>
      </section>

      {/* Lista de Ministérios */}
      <section className="px-6 mt-16 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {ministries.map((ministry, index) => (
            <FadeIn key={ministry.title} delay={index * 150 + 300}>
              <Card
                title={ministry.title}
                description={ministry.description}
                image={ministry.image}
                orientation="horizontal"
                reversed={index % 2 !== 0}
                className="shadow-xl bg-white border-none"
              >
                <div className="mt-6 flex justify-start">
                  <Button
                    onClick={() => setSelectedMinistry(ministry)}
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
        isOpen={!!selectedMinistry}
        onClose={() => setSelectedMinistry(null)}
        title={selectedMinistry?.title || ""}
      >
        {selectedMinistry && (
          <div className="flex flex-col gap-4 text-neutral-700">
            <p className="text-base leading-relaxed mb-2 font-medium italic text-neutral-600">
              "{selectedMinistry.description}"
            </p>

            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 space-y-3">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary-800 min-w-[80px]">Horários:</span>
                <span className="text-neutral-600">{selectedMinistry.details.schedule}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary-800 min-w-[80px]">Local:</span>
                <span className="text-neutral-600">{selectedMinistry.details.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary-800 min-w-[80px]">Coordenação:</span>
                <span className="text-neutral-600">{selectedMinistry.details.coordinator}</span>
              </div>
            </div>

            <div className="mt-2">
              <h4 className="text-lg font-heading text-primary-900 mb-2">Sobre o Serviço</h4>
              <p className="text-sm leading-relaxed text-neutral-600 text-justify">
                {selectedMinistry.details.fullDescription}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                onClick={() => setSelectedMinistry(null)}
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
