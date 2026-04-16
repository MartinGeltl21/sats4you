import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Ich habe meinem Mann zum Geburtstag eine Bitcoin-Box geschenkt — er war komplett aus dem Häuschen. Die Verpackung war wunderschön und die Anleitung so einfach, dass er sofort loslegen konnte.",
    name: "Laura M.",
    designation: "Kundin aus München",
    src: "https://i.pravatar.cc/500?img=47",
  },
  {
    quote:
      "Endlich ein Geschenk, das nicht im Schrank verstaubt. Mein Vater hat Bitcoin seit Jahren im Blick, aber nie den Einstieg gewagt. Mit der Box hat er es einfach gemacht — danke Sats4You!",
    name: "Tobias R.",
    designation: "Kunde aus Berlin",
    src: "https://i.pravatar.cc/500?img=12",
  },
  {
    quote:
      "Wir haben für das gesamte Team Bitcoin-Boxen zum Jahresabschluss verschenkt. Die Reaktionen waren überwältigend. Schnelle Lieferung, professionelle Aufmachung, absolute Weiterempfehlung.",
    name: "Sandra K.",
    designation: "HR-Leiterin, Frankfurt",
    src: "https://i.pravatar.cc/500?img=32",
  },
  {
    quote:
      "Als Hochzeitsgeschenk war das eine Sensation. Das Brautpaar hatte schon alles — aber Bitcoin hatten sie noch nicht. Heute sagen sie, es war das beste Geschenk auf der ganzen Feier.",
    name: "Markus W.",
    designation: "Kunde aus Hamburg",
    src: "https://i.pravatar.cc/500?img=15",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="text-center mb-4 px-6">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#f7931a]/30 bg-[#f7931a]/5 text-sm text-[#f7931a] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f7931a]" />
          Echte Kunden. Echte Freude.
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Was unsere Kunden sagen
        </h2>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
