import taus from "../assets/images/taus.jpeg";

export default function AboutCard() {
  return (
    <div className="relative w-full h-50">
      <div
        style={{ backgroundImage: `url(${taus})` }}
        className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
      ></div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="font-heading p-15 text-5xl text-white md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
          Quem somos
        </h1>
      </div>
    </div>
  );
}
