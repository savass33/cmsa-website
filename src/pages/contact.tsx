import { FadeIn } from "../components/ui/fade-in";
import santaTeresinha from "../assets/images/santateresinha.jpeg";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { socialLinks } from "../data/socialLinks";
import { Button } from "../components/ui/button";

export default function Contact() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585998087212&text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20Sagrado%20Amor%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Comunidade!";

  return (
    <div className="flex flex-col w-full mb-20">
      {/* Cape / Hero Section */}
      <FadeIn>
        <div className="relative w-full h-48 md:h-64">
          <div
            style={{ backgroundImage: `url(${santaTeresinha})` }}
            className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-heading px-6 text-4xl md:text-7xl text-white transition-all duration-300 ease-in-out hover:opacity-80">
              Contato
            </h1>
          </div>
        </div>
      </FadeIn>

      {/* Introdução */}
      <section className="px-6 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto font-body leading-relaxed font-light italic mb-6">
              "Vinde a mim, todos os que estais cansados e sob o peso do vosso fardo e eu vos darei descanso." (Mateus 11,28)
            </p>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto font-body leading-relaxed">
              Tem alguma dúvida, pedido de oração ou quer conhecer mais sobre a nossa Comunidade? 
              Sinta-se à vontade para nos enviar uma mensagem. Estamos de braços abertos para acolher você!
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full mt-8"></div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 mt-16 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Card */}
          <FadeIn delay={300} className="h-full">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center h-full transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <MdLocalPhone size={32} />
              </div>
              <h3 className="text-xl font-heading text-primary-900 mb-3">WhatsApp</h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                Envie uma mensagem direta para o <strong>Marco Túlio</strong>. Responderemos o mais rápido possível.
              </p>
              <p className="font-semibold text-primary-800 mb-6 text-lg">
                (85) 99808-7212
              </p>
              <Button 
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-6"
              >
                Enviar Mensagem
              </Button>
            </div>
          </FadeIn>

          {/* Email Card */}
          <FadeIn delay={400} className="h-full">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center h-full transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <MdEmail size={32} />
              </div>
              <h3 className="text-xl font-heading text-primary-900 mb-3">E-mail</h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                Para assuntos institucionais, parcerias ou dúvidas mais detalhadas.
              </p>
              <p className="font-semibold text-primary-800 mb-6 break-all">
                comunidadesagradoamor<br/>@gmail.com
              </p>
              <Button 
                variant="outline"
                onClick={() => window.location.href = "mailto:comunidadesagradoamor@gmail.com"}
                className="w-full border-primary-200 text-primary-700 hover:bg-primary-50 py-6"
              >
                Escrever E-mail
              </Button>
            </div>
          </FadeIn>

          {/* Location Card */}
          <FadeIn delay={500} className="h-full">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center h-full transition-transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <MdLocationPin size={32} />
              </div>
              <h3 className="text-xl font-heading text-primary-900 mb-3">Onde Estamos</h3>
              <p className="text-neutral-600 mb-6 flex-grow">
                Venha nos fazer uma visita em nossa casa de missão.
              </p>
              <div className="text-primary-800 mb-6">
                <p className="font-semibold mb-1">Casa Santa Teresa de Calcutá</p>
                <p className="text-sm">Vila Dália, 5 - Aeroporto</p>
                <p className="text-sm">Fortaleza - CE</p>
              </div>
              <Button 
                variant="outline"
                onClick={() => window.open("https://maps.google.com/?q=Vila+Dália,+5+-+Aeroporto,+Fortaleza+-+CE", "_blank")}
                className="w-full border-primary-200 text-primary-700 hover:bg-primary-50 py-6"
              >
                Ver no Mapa
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Social Media Section */}
        <FadeIn delay={600} className="mt-16 bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 text-center max-w-5xl mx-auto">
          <h3 className="text-2xl font-heading text-primary-900 mb-4">Redes Sociais</h3>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Acompanhe nosso dia a dia, formações, eventos e momentos de oração através das nossas redes sociais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-neutral-50 hover:bg-primary-50 hover:text-primary-700 text-neutral-700 rounded-xl transition-colors font-medium border border-neutral-100 hover:border-primary-200"
              >
                {link.name.toLowerCase() === 'instagram' ? <FaInstagram size={20} className="text-pink-600" /> : 
                 link.name.toLowerCase() === 'youtube' ? <FaYoutube size={20} className="text-red-600" /> : null}
                {link.name}
              </a>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
