import { useNavigate } from "react-router-dom";
import Card from "./card";
import { Button } from "./ui/button";
import { FadeIn } from "./ui/fade-in";
import ostensorio from "../assets/images/ostensorio.jpg";
import musica from "../assets/images/musica.jpeg";
import liturgia from "../assets/images/liturgia.jpg";

export default function MinistriesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-neutral-100">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-900 mb-4">
              Nossos Ministérios
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-10 mb-16">
          <FadeIn delay={100}>
            <Card
              title="Música"
              image={musica}
              description="Somos uma casa de portas abertas. Nosso ministério de acolhimento existe para receber cada pessoa como se fosse o próprio Cristo, oferecendo um ambiente de amor, escuta e fraternidade. Aqui, ninguém é um estranho, mas um irmão esperado."
              orientation="horizontal"
            />
          </FadeIn>

          <FadeIn delay={200}>
            <Card
              title="Intercessão"
              image={ostensorio}
              description="Sustentamos a missão através da oração constante. Nossos intercessores se colocam na brecha pela Igreja, pelo clero e por todos os que nos confiam suas intenções e dores. Cremos no poder da oração que move montanhas."
              orientation="horizontal"
              reversed
            />
          </FadeIn>

          <FadeIn delay={300}>
            <Card
              title="Liturgia"
              image={liturgia}
              description="Não podemos calar o que vimos e ouvimos. Levamos a alegria do Evangelho através de missões, retiros e formação, buscando inflamar os corações com o Sagrado Amor. Nossa missão é tornar Jesus conhecido e amado."
              orientation="horizontal"
            />
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => navigate("/ministries")}
              className="px-8 py-3 text-lg bg-primary-500 border-primary-600 text-text-primary ease-in-out duration-300 hover:bg-primary-400"
            >
              Saiba mais
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
