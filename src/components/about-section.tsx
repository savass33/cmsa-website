import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import casebre from "../assets/images/casebre.jpeg";
import foto2025 from "../assets/images/compromisso2025.jpeg"

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src={foto2025} 
                alt="Casebre da Comunidade Mariana Sagrado Amor" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-heading text-primary-900 mb-6">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-secondary-500 rounded-full mb-8"></div>
            
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              A Comunidade Mariana Sagrado Amor é uma família espiritual que busca viver a santidade no cotidiano, 
              inspirada pelo exemplo de Maria. Nosso carisma é <strong>dar a conhecer o Amor a todo coração pobre</strong>.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Nascemos com o desejo de ser presença de Deus no mundo, 
              acolhendo a todos com o amor que brota do Coração de Jesus. Nossa missão é 
              levar este Sagrado Amor aos corações mais necessitados.
            </p>
            
            <Button 
              variant="outline" 
              onClick={() => navigate("/about")}
              className="px-8 py-3 text-lg border-primary-600 text-primary-600 hover:bg-primary-50"
            >
              Conheça Nossa História
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
