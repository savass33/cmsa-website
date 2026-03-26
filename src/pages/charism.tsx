import { FadeIn } from "../components/ui/fade-in";
import compromisso from "../assets/images/compromisso2025.jpeg";
import ostensorio from "../assets/images/ostensorio.jpg";
import santaTeresa from "../assets/images/santateresacalcuta.jpeg";
import saoFrancisco from "../assets/images/saofrancisco.jpeg";

export default function Charism() {
  return (
    <div className="flex flex-col w-full mb-20">
      {/* Hero Section */}
      <FadeIn>
        <div className="relative w-full h-50">
          <div
            style={{ backgroundImage: `url(${compromisso})` }}
            className="absolute inset-0 bg-blend-multiply brightness-70 bg-primary-500 bg-cover bg-center"
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="font-heading px-6 text-5xl text-white md:text-7xl transition-all duration-300 ease-in-out hover:opacity-80">
              Nosso Carisma
            </h1>
          </div>
        </div>
      </FadeIn>

      {/* Introdução ao Carisma */}
      <section className="px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={200}>
            <p className="text-xl md:text-3xl text-primary-900 font-accent italic max-w-4xl mx-auto mb-8">
              "Dar a conhecer o Amor a todo coração pobre."
            </p>
            <p className="text-lg text-neutral-700 font-body leading-relaxed mb-8">
              O carisma de uma comunidade é o dom específico dado pelo Espírito
              Santo para a edificação da Igreja e salvação das almas. O nosso
              carisma não é apenas uma frase bonita, mas uma forma de enxergar o
              mundo, de rezar, de agir e de viver o Evangelho na sua radicalidade.
            </p>
            <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full mb-16"></div>
          </FadeIn>
        </div>
      </section>

      {/* Mistério Cristológico: A Samaritana */}
      <section className="px-6 mb-24">
        <div className="max-w-5xl mx-auto bg-neutral-100/80 rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-200">
          <FadeIn delay={250}>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 flex justify-center order-first md:order-last">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary-900 flex flex-col items-center justify-center border-4 border-secondary-500 shadow-xl p-6 text-center">
                  <span className="text-2xl md:text-3xl text-secondary-400 font-accent italic mb-3 leading-tight">"Dá-me de beber"</span>
                  <div className="w-12 h-1 bg-secondary-500 mb-3 rounded-full"></div>
                  <span className="text-base text-primary-100 font-medium">João 4, 7</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 text-left">
                <h2 className="text-3xl md:text-4xl font-heading text-primary-900 mb-6">
                  Nosso Mistério Cristológico: A Samaritana
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    O <strong>Mistério Cristológico</strong> é o evento da vida de Jesus no qual uma comunidade funda a sua espiritualidade. Para nós, este mistério encontra-se no capítulo 4 do Evangelho de São João: <strong>o encontro de Jesus com a mulher samaritana no poço de Jacó</strong>.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Jesus, o próprio Deus encarnado, faz-se necessitado e cansado da caminhada. Ele se senta à beira do poço e pede água a uma mulher marginalizada, de coração ferido por sucessivas desilusões afetivas, sedenta de um sentido real para sua existência. Ao dizer <em>"Dá-me de beber"</em>, Cristo não revela apenas uma sede física, mas a Sua infinita <strong>sede de almas</strong>. Ele tem sede de que nós tenhamos sede d'Ele.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    A samaritana é o retrato fiel do <strong>coração pobre</strong>: aquela que busca nos poços deste mundo a água que nunca sacia. Jesus se aproxima não com condenação, mas com a oferta da Água Viva: o Espírito Santo, o próprio <strong>Amor</strong>. No momento em que ela descobre quem Ele é, o encontro transforma sua vida. 
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    O ápice deste mistério na nossa vocação ocorre quando a mulher, agora transformada e transbordando a Água Viva, <strong>deixa o seu cântaro para trás</strong> — abandona suas velhas seguranças e pecados — e corre para a cidade. Ela torna-se missionária, dizendo aos outros: <em>"Vinde ver!"</em>. É este o movimento do nosso carisma: deixar Jesus saciar a nossa sede para, em seguida, corrermos ao encontro dos outros corações pobres, <strong>dando-O a conhecer</strong>.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Seções detalhadas do Carisma */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-20">
          
          {/* O que é o Amor? */}
          <FadeIn delay={300} threshold={0.2}>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={ostensorio}
                  alt="O Amor - Santíssimo Sacramento"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-heading text-primary-900 mb-6">
                  O que é o Amor?
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  Para nós, o Amor não é um sentimento passageiro, uma ideia
                  abstrata ou um conceito filosófico. <strong>O Amor é uma Pessoa: Jesus
                  Cristo.</strong> E Ele se faz carne e alimento na Sagrada
                  Eucaristia.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Conhecer o Amor é fazer uma experiência profunda, íntima e
                  pessoal com o Sagrado Coração de Jesus. É descobrir-se
                  infinitamente amado e perdoado. É aos pés do altar e no
                  silêncio da adoração que nós mesmos conhecemos o Amor para,
                  então, transbordá-lo. Não podemos dar aquilo que não temos.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* O que é Dar a conhecer? */}
          <FadeIn delay={300} threshold={0.2}>
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={saoFrancisco}
                  alt="Dar a conhecer - Evangelização"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-heading text-primary-900 mb-6">
                  O que é "Dar a conhecer"?
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  Muitos não amam a Deus porque ainda não O conhecem. Dar a conhecer
                  é o impulso missionário que nos impede de guardar o tesouro da fé
                  apenas para nós mesmos. É a urgência de anunciar, evangelizar e
                  testemunhar com a própria vida.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Não se trata apenas de pregar palavras, mas de sermos pontes de
                  misericórdia. Seja na rua, na faculdade, no trabalho ou em uma
                  missão específica, "dar a conhecer" exige que nossas atitudes e
                  olhares revelem o rosto do Cristo Salvador àqueles que andam na
                  escuridão.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Quem são os corações pobres? */}
          <FadeIn delay={300} threshold={0.2}>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={santaTeresa}
                  alt="Corações pobres - Santa Teresa de Calcutá"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-heading text-primary-900 mb-6">
                  Quem são os "corações pobres"?
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  O "coração pobre" transcende a pobreza material. Embora sejamos
                  chamados a socorrer aqueles que não têm o que comer ou vestir,
                  o nosso carisma olha profundamente para as misérias do espírito.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Os corações pobres são os solitários, os depressivos, os que
                  perderam o sentido da vida, os que estão presos ao pecado, aos
                  vícios e à falta de esperança. Um jovem em um quarto confortável
                  pode ter um "coração pobre" que agoniza por salvação. É a esses, os que
                  mais sofrem e que o mundo muitas vezes esquece, que o nosso
                  Amor precisa chegar primeiro.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Conclusão */}
      <section className="px-6 mt-24">
        <div className="max-w-4xl mx-auto bg-primary-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          <FadeIn delay={400}>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading mb-6 text-secondary-400">
                Um convite a viver este Amor
              </h3>
              <p className="text-lg md:text-xl font-body leading-relaxed text-primary-100 italic">
                "Nós conhecemos e cremos no amor que Deus tem por nós. Deus é amor;
                quem permanece no amor, permanece em Deus e Deus nele." (1 João 4,16)
              </p>
              <div className="mt-10">
                <p className="text-base text-white/80">
                  Nosso carisma é a força motriz que nos faz levantar todos os dias,
                  esquecer os próprios interesses e seguir Aquele que nos amou por
                  primeiro.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
