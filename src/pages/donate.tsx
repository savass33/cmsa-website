import { useState } from "react";
import { FadeIn } from "../components/ui/fade-in";
import { Button } from "../components/ui/button";
import { MdContentCopy, MdCheckCircle, MdPix } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import liturgia from "../assets/images/liturgia.jpg";

export default function Donate() {
  const [copied, setCopied] = useState(false);
  const pixKey = "comunidadesagradoamor@gmail.com";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-neutral-50">
      {/* Header Section */}
      <FadeIn>
        <div className="relative w-full h-50">
          <div
            style={{ backgroundImage: `url(${liturgia})` }}
            className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-heading text-center p-15 text-5xl text-white md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
              Benfeitoria
            </h1>
          </div>
        </div>
      </FadeIn>

      <section className="px-6 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed font-light italic mb-6">
              "Simplesmente Amar"
            </p>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto font-body leading-relaxed">
              Sua doação nos ajuda a manter nossas casas de missão e a levar o Amor aos corações que mais necessitam.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full mt-8"></div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Information Column */}
        <FadeIn delay={200} className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-heading text-primary-900 mb-4">Carisma</h2>
            <div className="w-16 h-1 bg-secondary-500 rounded-full mb-6"></div>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Existimos para "dar a conhecer o Amor a todo coração pobre". Esse é o nosso Carisma. Deus nos pede, a cada dia, para ir até cada coração, sem reservas, levando esse Amor que nos move, que é o sentido de tudo para nós.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading text-primary-900 mb-4">Para onde vai a sua doação?</h2>
            <div className="w-16 h-1 bg-secondary-500 rounded-full mb-6"></div>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Todo valor arrecadado é distribuído para manutenção daquilo que Deus nos pede para concretizarmos: dar a conhecer o Amor a todo coração pobre.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed mt-4">
              De forma prática, sua ajuda contribuirá para a manutenção da nossa casa, <strong>A Casa Santa Teresa de Calcutá</strong>, a qual é a nossa casa de missão e evangelização, onde, hoje, realizamos oficina de música para crianças, grupo infantil e adulto de oração, bazar comunitário, Santa Missa, entre outros.
            </p>
          </div>
        </FadeIn>

        {/* Donation Action Column */}
        <FadeIn delay={400} className="flex flex-col gap-6">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-neutral-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary-100 text-primary-900 rounded-full flex items-center justify-center mb-6">
              <MdPix size={40} />
            </div>
            
            <h3 className="text-2xl font-bold text-primary-900 mb-2">Faça sua doação via PIX</h3>
            <p className="text-neutral-500 mb-8">Utilize a chave email abaixo para transferir</p>

            <div className="w-full bg-neutral-50 border border-neutral-200 p-4 rounded-xl flex items-center justify-between mb-8 group">
              <span className="text-neutral-800 font-medium truncate mr-4 select-all">
                {pixKey}
              </span>
              <Button 
                onClick={handleCopyPix}
                className="flex-shrink-0 flex items-center gap-2 !py-2 !px-4"
              >
                {copied ? <MdCheckCircle size={20} /> : <MdContentCopy size={20} />}
                {copied ? "Copiado!" : "Copiar"}
              </Button>
            </div>

            <div className="w-full border-t border-neutral-100 pt-8 mt-4 flex flex-col items-center gap-4">
              <h4 className="text-sm font-bold tracking-widest text-secondary-600 uppercase">Contato & Dúvidas</h4>
              
              <a href="https://wa.me/5585996635083" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors">
                <FaWhatsapp size={24} className="text-green-500" />
                <span className="text-lg font-medium">(85) 99663-5083</span>
              </a>

              <a href="https://instagram.com/com.sagradoamor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors">
                <FaInstagram size={24} className="text-pink-600" />
                <span className="text-lg font-medium">@com.sagradoamor</span>
              </a>
            </div>
          </div>
        </FadeIn>

      </section>
    </div>
  );
}
