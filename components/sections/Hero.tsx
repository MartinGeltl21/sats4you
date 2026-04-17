"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const customers = [
  { id: 1, name: "Laura M.",    designation: "München",  image: "https://i.pravatar.cc/100?img=47" },
  { id: 2, name: "Tobias R.",   designation: "Berlin",   image: "https://i.pravatar.cc/100?img=12" },
  { id: 3, name: "Sandra K.",   designation: "Frankfurt",image: "https://i.pravatar.cc/100?img=32" },
  { id: 4, name: "Markus W.",   designation: "Hamburg",  image: "https://i.pravatar.cc/100?img=15" },
  { id: 5, name: "Julia H.",    designation: "Köln",     image: "https://i.pravatar.cc/100?img=44" },
];

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <AuroraBackground className="bg-[#0a0a0a] min-h-[100svh] lg:min-h-screen text-white items-start">

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 lg:pt-16 pb-8 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
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

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light tracking-wide mb-4">
              Kuratiert. Persönlich. Unvergesslich.
            </p>

            <p className="text-base sm:text-lg text-white/40 max-w-lg mb-8 sm:mb-12 leading-relaxed">
              Bitcoin als Geschenk — einfach, schön verpackt, für jeden Anlass.
              Vom Geburtstag bis zum Firmenjubiläum.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
              <Button
                size="lg"
                onClick={() => scrollTo("products")}
                className="text-base px-8 py-6 font-semibold rounded-xl text-[#0a0a0a] hover:brightness-110 transition-all duration-200 shadow-lg w-full sm:w-auto"
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
                className="text-base px-8 py-6 font-semibold rounded-xl border-white/20 text-white/80 hover:bg-white/5 hover:border-[#f7931a]/50 hover:text-white transition-all duration-200 w-full sm:w-auto"
              >
                Für Unternehmen
              </Button>
            </div>

            <div className="mt-10 sm:mt-12 flex flex-col items-start gap-3">
              <div className="flex items-center">
                <AnimatedTooltip items={customers} />
              </div>
              <p className="text-sm text-white/40">
                <span className="text-white/70 font-medium">127+ Kunden</span>{" "}
                verschenken bereits Bitcoin mit Sats4You
              </p>
            </div>
          </div>

          {/* Right: 3D Gift image with Skeleton */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <CardContainer containerClassName="py-0" className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
              <CardBody className="w-full">
                <CardItem translateZ={60} className="w-full">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#f7931a]/10 ring-1 ring-white/10">
                    {!imageLoaded && (
                      <Skeleton className="w-full aspect-square rounded-2xl bg-[#1a1a1a]" />
                    )}
                    <Image
                      src="/geschenk.png"
                      alt="Bitcoin Geschenk"
                      width={500}
                      height={500}
                      className={`w-full h-auto object-contain transition-opacity duration-500 ${
                        imageLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
                      }`}
                      priority
                      onLoad={() => setImageLoaded(true)}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#f7931a]/20 to-transparent pointer-events-none" />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

        </div>
      </AuroraBackground>
    </section>
  );
}
