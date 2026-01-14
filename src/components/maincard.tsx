import logo from "../assets/images/logo-min.png";
import casebre from "../assets/images/casebre.jpeg";

export default function MainCard() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${casebre})`,
        }}
        className="container w-full h-auto flex justify-center items-center bg-blend-multiply brightness-70 bg-primary-500 bg-size-200 bg-center transition-all duration-500 ease-in-out hover:bg-size-125"
      >
        <div className="p-8 md:p-30">
          <img
            src={logo}
            alt="Min logo from cmsa"
            className="w-48 h-48 md:w-80 md:h-80 block mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-5"
          />
          <div className="text-center">
            <h1 className="font-heading text-white text-5xl md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
              Comunidade Mariana
            </h1>
            <h2 className="font-heading text-white text-3xl md:text-5xl transition-all duration-300 ease-in-out hover:opacity-80">
              Sagrado Amor
            </h2>
            <h3 className="font-light text-white text-xl md:text-3xl mt-5 transition-all duration-300 ease-in-out hover:scale-105">
              Pobres, Intímos da Verdade e Livres
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
