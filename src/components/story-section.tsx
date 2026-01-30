import foto2025 from "../assets/images/compromisso2025.jpeg";

export default function StorySection() {
  return (
    <section className="mt-12 px-6 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={foto2025}
                alt="Casebre da Comunidade Mariana Sagrado Amor"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden md:block"></div>
          </div>

          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-heading text-primary-900 mb-6">
              Nossa História
            </h2>
            <div className="w-20 h-1 bg-secondary-500 rounded-full mb-16"></div>

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
        <p className="text-lg text-neutral-700 leading-relaxed mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra
          ac leo nec dignissim. Aenean vel condimentum sapien. Sed faucibus
          rhoncus varius. Phasellus ante tortor, convallis sed dolor eget,
          facilisis pretium turpis. Ut tortor massa, tempor id ante a, accumsan
          feugiat nunc. Cras sit amet ligula aliquet, suscipit ligula vitae,
          fringilla purus. In non blandit purus. Nullam et felis lacus. Integer
          placerat, nisl sed interdum venenatis, diam urna dictum lectus,
          vehicula molestie quam diam id risus. Integer ornare massa a tellus
          condimentum congue. Ut libero sem, porta nec dui a, dapibus viverra
          erat. Nunc posuere enim porttitor mollis rutrum. Donec nec nulla id
          mauris elementum hendrerit. Praesent sit amet facilisis eros. Nulla
          lectus ligula, sodales vel convallis sit amet, scelerisque vel nisi.
          Ut gravida leo at laoreet auctor. Duis aliquam, leo eu auctor
          molestie, urna nunc cursus neque, nec finibus tortor sem quis nibh.
          Maecenas finibus condimentum mattis. Proin varius magna nec facilisis
          vehicula. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Mauris sit amet porta ex. Morbi
          sodales nunc in fermentum pharetra. Aenean eu eleifend augue. Nulla
          blandit, est et lobortis dapibus, odio urna dignissim nulla, sed
          ultricies nisi enim non arcu.
        </p>
        <p className="text-lg text-neutral-700 leading-relaxed mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra
          ac leo nec dignissim. Aenean vel condimentum sapien. Sed faucibus
          rhoncus varius. Phasellus ante tortor, convallis sed dolor eget,
          facilisis pretium turpis. Ut tortor massa, tempor id ante a, accumsan
          feugiat nunc. Cras sit amet ligula aliquet,
        </p>
        <p className="text-lg text-neutral-700 leading-relaxed mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra
          ac leo nec dignissim.
        </p>
      </div>
    </section>
  );
}
