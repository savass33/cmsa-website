import logo from "../assets/images/logo-removebg.png";
import { socialLinks } from "../data/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-neutral-200 font-body border-t-4 w-full">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* --- principal grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* idendity column */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="CMSA Logo"
                className="h-16 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-primary-50 tracking-tight">
                  Comunidade Mariana
                </span>
                <span className="text-text-primary text-sm font-semibold tracking-wider">
                  Sagrado Amor
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-xs">
              Evangelizando com amor e carisma agostiniano. Uma família unida
              pela fé e pelo serviço ao próximo.
            </p>
          </div>

          {/* links column*/}
          <div>
            <h3 className="font-heading font-medium text-lg text-text-primary mb-4">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-300 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-300 transition-colors"
                >
                  Carisma & Missão
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-300 transition-colors"
                >
                  Ministérios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-300 transition-colors"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-300 transition-colors"
                >
                  Seja um Benfeitor
                </a>
              </li>
            </ul>
          </div>

          {/* localization and email column */}
          <div>
            <h3 className="font-heading font-medium text-lg text-text-primary mb-4">
              Fale Conosco
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  Vila Dália, 5 - Aeroporto
                  <br />
                  Fortaleza - CE
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span className="hover:text-white">
                  comunidadesagradoamor@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="https://api.whatsapp.com/send?phone=5585998087212&text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20Sagrado%20Amor%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Comunidade!">
                  +55 85 9808-7212
                </a>
              </li>
            </ul>

            {/* social media */}
            <div className="mt-6">
              <span className="text-xs font-medium text-text-primary tracking-wider">
                SIGA-NOS
              </span>
              <div className="flex gap-4 mt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm font-medium border border-neutral-700 px-3 py-1 rounded-md hover:border-primary-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- bottom --- */}
        <div className="border-t border-primary-800 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>
            © 2026 Comunidade Mariana Sagrado Amor. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 md:mt-0">Desenvolvido pelo Sagrado Amor.</p>
        </div>
      </div>
    </footer>
  );
}
