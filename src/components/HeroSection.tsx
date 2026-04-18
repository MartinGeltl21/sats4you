const AVATARS = [
  'https://i.pravatar.cc/100?img=47',
  'https://i.pravatar.cc/100?img=12',
  'https://i.pravatar.cc/100?img=32',
  'https://i.pravatar.cc/100?img=15',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: '20rem' }}
    >
      <h1
        className="font-display font-normal text-5xl sm:text-7xl md:text-8xl max-w-7xl text-white animate-fade-rise"
        style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
      >
        Das perfekte <em className="text-white">Bitcoin-Geschenk</em>.
      </h1>

      <p className="font-sans text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-white animate-fade-rise-delay">
        Kuratiert. Persönlich. Unvergesslich. Bitcoin als Geschenk — einfach, schön verpackt,
        für jeden Anlass. Vom Geburtstag bis zum Firmenjubiläum.
      </p>

      <a
        href="#products"
        className="mt-12 rounded-full px-14 py-5 text-base bg-black text-white transition-transform hover:scale-[1.03] animate-fade-rise-delay-2 inline-block"
      >
        Jetzt schenken
      </a>

      <div className="mt-10 flex items-center gap-4 animate-fade-rise-delay-2">
        <div className="flex -space-x-3">
          {AVATARS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
              style={{ zIndex: AVATARS.length - i }}
            />
          ))}
        </div>
        <p className="font-sans text-sm text-white/90 max-w-xs text-left">
          127+ Kunden verschenken bereits Bitcoin mit Sats4You
        </p>
      </div>
    </section>
  );
}
