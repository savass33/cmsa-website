import { FadeIn } from "../components/ui/fade-in";
import santaTeresinha from "../assets/images/santateresinha.jpeg";

export default function Contact() {
  return (
    <div className="flex flex-col w-full mb-20">
      <FadeIn>
        <div className="relative w-full h-50">
          <div
            style={{ backgroundImage: `url(${santaTeresinha})` }}
            className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-heading px-6 text-5xl text-white md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
              Contato
            </h1>
          </div>
        </div>
      </FadeIn>
      <section className="px-6 mt-16 text-center">
        <h2 className="text-3xl font-heading text-primary-900 mb-6">Página em construção</h2>
      </section>
    </div>
  );
}
