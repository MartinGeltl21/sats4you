"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const customers = [
  { id: 1, name: "Laura M.",    designation: "München",  image: "https://i.pravatar.cc/100?img=47" },
  { id: 2, name: "Tobias R.",   designation: "Berlin",   image: "https://i.pravatar.cc/100?img=12" },
  { id: 3, name: "Sandra K.",   designation: "Frankfurt",image: "https://i.pravatar.cc/100?img=32" },
  { id: 4, name: "Markus W.",   designation: "Hamburg",  image: "https://i.pravatar.cc/100?img=15" },
  { id: 5, name: "Julia H.",    designation: "Köln",     image: "https://i.pravatar.cc/100?img=44" },
];

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a]"
    >
      <Vortex
        backgroundColor="#000000"
        baseHue={20}
        rangeHue={35}
        rangeY={1500}
        particleCount={350}
        baseSpeed={0.1}
        rangeSpeed={0.8}
        baseRadius={0.8}
        rangeRadius={1.2}
        containerClassName="min-h-screen flex items-center justify-center"
        className="w-full"
      >
        {/* Bitcoin ₿ watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="text-[32rem] font-bold leading-none opacity-[0.02] text-[#f7931a]"
            aria-hidden
          >
            ₿
          </span>
        </div>

        {/* Two-column layout */}
        <div className="relative w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 text-left">
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#f7931a]/30 bg-[#f7931a]/5 text-sm text-[#f7931a] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f7931a] animate-pulse" />
              Bitcoin-Geschenke aus Deutschland
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Das perfekte
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                }}
              >
                Bitcoin-Geschenk.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-xl sm:text-2xl text-white/60 font-light tracking-wide mb-4">
              Kuratiert. Persönlich. Unvergesslich.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/40 max-w-lg mb-12 leading-relaxed">
              Bitcoin als Geschenk — einfach, schön verpackt, für jeden Anlass.
              Vom Geburtstag bis zum Firmenjubiläum.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                onClick={() => scrollTo("products")}
                className="text-base px-8 py-6 font-semibold rounded-xl text-[#0a0a0a] hover:brightness-110 transition-all duration-200 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                }}
              >
                Jetzt entdecken
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("b2b")}
                className="text-base px-8 py-6 font-semibold rounded-xl border-white/20 text-white/80 hover:bg-white/5 hover:border-[#f7931a]/50 hover:text-white transition-all duration-200"
              >
                Für Unternehmen
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex flex-col items-start gap-3">
              <div className="flex items-center">
                <AnimatedTooltip items={customers} />
              </div>
              <p className="text-sm text-white/40">
                <span className="text-white/70 font-medium">127+ Kunden</span> verschenken bereits Bitcoin mit Sats4You
              </p>
            </div>
          </div>

          {/* Right: Party image */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-[#f7931a]/10 ring-1 ring-white/10">
              <Image
                src="/party.jpg"
                alt="Bitcoin Geschenk Feier"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle orange overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f7931a]/20 to-transparent" />
            </div>
          </div>

        </div>
      </Vortex>
    </section>
  );
}
