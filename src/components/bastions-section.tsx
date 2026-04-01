import stteresacalcutta from "../assets/images/santateresacalcuta.jpeg";
import stlisieux from "../assets/images/santateresinha.jpeg";
import stfrancis from "../assets/images/saofrancisco.jpeg";
import stjpii from "../assets/images/saojpii.jpeg";
import stpio from "../assets/images/saopadrepio.jpeg";

export default function BastionsSection() {
  return (
    <section className="px-6 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex justify-center text-3xl md:text-5xl font-heading text-primary-900 mb-6">
          Nossos Baluartes
        </h2>
        <div className="w-40 h-1 bg-secondary-500 rounded-full mb-16 mx-auto"></div>

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
            <h2 className="font-heading text-3xl md:text-4xl mb-6">São Francisco <span className="text-2xl text-secondary-600 block mt-2">Amor Pobre</span></h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              São Francisco era um homem real, com ambições e fraquezas, mas que foi capaz, com a graça de Deus, de escolher as coisas do céu em vez das coisas do mundo. Viveu uma vida desapegada de riquezas, tesouros, e, sobretudo, da vontade própria, abandonado por completo no caminho que o bom Deus havia lhe preparado.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Seu Amor Pobre nos ensina, acima de tudo, a pobreza espiritual. Reconhecendo-nos como miseráveis e dependentes da misericórdia de Deus, somos chamados a estar com os olhos fixos no Alto e não em bens materiais.
            </p>
          </div>
        </div>

        {/* St. Therese of Lisieux */}
        <div className="flex flex-col-reverse mb-20 md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">Santa Terezinha <span className="text-2xl text-secondary-600 block mt-2">Amor Humilde</span></h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Santa Teresinha do Menino Jesus foi uma freira carmelita que viveu uma vida simples e humilde. No entanto, encontrou um caminho espiritual simples e radical: A "Pequena Via", fundamenta-se na total confiança na misericórdia divina e no amor em cada pequena ação do cotidiano. Um abandono completo à vontade de Deus sem reservas.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Ela nos ensina que a santidade não está em grandes feitos, mas no amor com que vivemos nosso cotidiano. Inundados por esse Amor Humilde, somos chamados a esvaziar-nos para dar a Deus seu devido lugar.
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
            <h2 className="font-heading text-3xl md:text-4xl mb-6">São João Paulo II <span className="text-2xl text-secondary-600 block mt-2">Amor Missionário</span></h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              O Papa João Paulo II foi um grande evangelizador, viajando pelo mundo para proclamar a mensagem de Jesus Cristo para diversos povos e comunidades. Seus ensinamentos sobre o Amor Missionário ecoam profundamente no coração do Sagrado Amor. Somos chamados a sair do nosso comodismo, do nosso conforto, se quisermos que mais almas tenham seu encontro com o Amado.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Ao “dar a conhecer o Amor a todo coração pobre” somos capazes de estar em intimidade com o próprio Crucificado e de levar sua Palavra onde Ele nos mandar.
            </p>
          </div>
        </div>

        {/* St Teresa of Calcutta */}
        <div className="flex flex-col-reverse mb-20 md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Santa Teresa de Calcutá
              <span className="text-2xl text-secondary-600 block mt-2">Amor Servil</span>
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Santa Teresa dedicou toda a sua vida ao auxílio dos mais necessitados. Fundadora da Congregação Missionárias da Caridade, a madre viveu uma rotina de serviço, missão e entrega total de si mesma a Cristo por meio dos pobres.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Pela intercessão da "Santa dos Pobres", nossa comunidade entende esse Amor Servil como uma das bases do carisma Sagrado Amor, conduzindo-nos a sempre levar O Amor aos corações que mais necessitam. A entrega sem limites ao serviço a Deus e ao próximo nos permite viver as obras e os sonhos de Deus para nós.
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
            <h2 className="font-heading text-3xl md:text-4xl mb-6">São Padre Pio <span className="text-2xl text-secondary-600 block mt-2">Amor Transcendente</span></h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              São Padre Pio viveu uma vida de dedicação intensa, renúncias custosas e inúmeros sacrifícios. Sua família sempre foi muito católica e isso o ajudou a crescer com os olhos voltados ao que importava. Foi o primeiro padre a receber os estigmas, tinha dons místicos como o de bilocação e de visualização, mas, acima de tudo isso, sua vida era voltada a ofertar todo o seu sofrimento pela Igreja.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-10">
              Apesar da grandiosidade desse santo, seu Amor Transcendente faz uma ponte entre nós e o céu, sendo o coração a derramar as graças junto a Deus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
