import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-800 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-text-primary text-3xl md:text-5xl font-heading mb-6">
          Ajude-nos a Evangelizar
        </h2>
        <p className="text-xl text-primary-100 mb-10 leading-relaxed">
          Sua contribuição nos ajuda a manter nossas obras de caridade, 
          eventos e a missão de levar o Sagrado Amor a quem mais precisa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white hover:bg-primary-600 text-primary-500 hover:text-text-primary px-8 py-4 text-lg font-bold"
            onClick={() => navigate("/donate")}
          >
            Quero Contribuir
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            onClick={() => navigate("/contact")}
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
}
