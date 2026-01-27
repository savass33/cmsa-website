import logo from "../assets/images/logo-min.png";
import casebre from "../assets/images/casebre.jpeg";

export default function MainCard() {
  return (
    <div className="relative w-full h-230 text-white">
      <div
        style={{
          backgroundImage: `url(${casebre})`,
        }}
        className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
      ></div>
      <div className="relative flex flex-col justify-center items-center w-full h-full p-8 md:py-32">
        <img
          src={logo}
          alt="Min logo from cmsa"
          className="w-48 h-48 md:w-80 md:h-80 block mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-3"
        />
        <div className="text-center">
          <h1 className="font-heading text-5xl text-white md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
            Comunidade Mariana
          </h1>
          <h2 className="font-heading text-3xl text-white md:text-5xl transition-all duration-300 ease-in-out hover:opacity-80">
            Sagrado Amor
          </h2>
          <h3 className="font-accent italic text-xl text-secondary-200 md:text-3xl mt-6 transition-all duration-300 ease-in-out hover:scale-105">
            "Dar a conhecer o Amor a todo coração pobre"
          </h3>
          <div className="flex gap-4 justify-center mt-8 text-white/80 text-sm md:text-base font-light tracking-[0.2em] uppercase">
            <span>Pobres</span>
            <span className="text-secondary-500">•</span>
            <span>Íntimos da Verdade</span>
            <span className="text-secondary-500">•</span>
            <span>Livres</span>
          </div>
        </div>
      </div>
    </div>
  );
}
