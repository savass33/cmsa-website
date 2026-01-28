import stteresacalcutta from "../assets/images/santateresacalcuta.jpeg";
import stlisieux from "../assets/images/santateresinha.jpeg";
import stfrancis from "../assets/images/saofrancisco.jpeg";
import stjpii from "../assets/images/saojpii.jpeg";
import stpio from "../assets/images/saopadrepio.jpeg";

export default function BastionsSection() {
  return (
    <section className="px-6 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex justify-center text-3xl md:text-5xl font-heading text-primary-900 mb-4">
          Nossos Baluartes
        </h2>
        <div className="w-40 h-1 bg-secondary-500 rounded-full mb-10 ml-120"></div>

        {/* St Francis */}
        <div className="flex flex-col mb-20 md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={stfrancis}
                alt="Casebre da Comunidade Mariana Sagrado Amor"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading md:text-3xl mb-6">São Francisco</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius. Phasellus ante tortor, convallis sed
              dolor eget, facilisis pretium turpis. Ut tortor massa, tempor id
              ante a, accumsan feugiat nunc. Cras sit amet ligula aliquet,
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius.
            </p>
          </div>
        </div>

        {/* St. Therese of Lisieux */}
        <div className="flex flex-col mb-20 md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading md:text-3xl mb-6">Santa Terezinha</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius. Phasellus ante tortor, convallis sed
              dolor eget, facilisis pretium turpis. Ut tortor massa, tempor id
              ante a, accumsan feugiat nunc. Cras sit amet ligula aliquet,
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={stlisieux}
                alt="Casebre da Comunidade Mariana Sagrado Amor"
                className="w-full h-full scale-120 object-cover object-[center_25%] transition-transform duration-700 hover:scale-125"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>
        </div>

        {/* St John Paul II */}
        <div className="flex flex-col mb-20 md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={stjpii}
                alt="Casebre da Comunidade Mariana Sagrado Amor"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading md:text-3xl mb-6">São João Paulo II</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius. Phasellus ante tortor, convallis sed
              dolor eget, facilisis pretium turpis. Ut tortor massa, tempor id
              ante a, accumsan feugiat nunc. Cras sit amet ligula aliquet,
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius.
            </p>
          </div>
        </div>

        {/* St Teresa of Calcutta */}
        <div className="flex flex-col mb-20 md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading md:text-3xl mb-6">
              Santa Teresa de Calcutá
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius. Phasellus ante tortor, convallis sed
              dolor eget, facilisis pretium turpis. Ut tortor massa, tempor id
              ante a, accumsan feugiat nunc. Cras sit amet ligula aliquet,
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={stteresacalcutta}
                alt="Casebre da Comunidade Mariana Sagrado Amor"
                className="w-full h-full scale-100 object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-secondary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>
        </div>

        {/* St. Pio of Pietrelcina */}
        <div className="flex flex-col mb-20 md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={stpio}
                alt="Casebre da Comunidade Mariana Sagrado Amor"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading md:text-3xl mb-6">São Padre Pio</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius. Phasellus ante tortor, convallis sed
              dolor eget, facilisis pretium turpis. Ut tortor massa, tempor id
              ante a, accumsan feugiat nunc. Cras sit amet ligula aliquet,
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pharetra ac leo nec dignissim. Aenean vel condimentum sapien. Sed
              faucibus rhoncus varius.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
