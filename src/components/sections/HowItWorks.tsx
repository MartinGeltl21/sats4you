import { PackageOpen, PenLine, Gift } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useInView } from '../../lib/useInView';

const STEPS = [
  {
    icon: PackageOpen,
    title: 'Box auswählen',
    description:
      'Du wählst die passende Box für den Anlass — vom ersten Bitcoin-Erlebnis bis zur vollständigen Sovereignty-Lösung.',
  },
  {
    icon: PenLine,
    title: 'Personalisieren',
    description:
      'Dein Name, eine persönliche Nachricht, eine Grußkarte — jede Box wird zu deinem ganz persönlichen Geschenk.',
  },
  {
    icon: Gift,
    title: 'Verschenken',
    description:
      'Wir liefern. Dein Empfänger öffnet die Box und startet seine Bitcoin-Reise — sicher, einfach, unvergesslich.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 bg-white py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          kicker="So funktioniert's"
          title={
            <>
              In drei Schritten zum perfekten <em>Geschenk</em>.
            </>
          }
          subtitle="Kein Bitcoin-Wissen nötig. Wir führen dich durch alles."
        />

        <div className="relative mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div
            aria-hidden
            className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-black/10"
          />
          {STEPS.map((step, i) => (
            <Step key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const Icon = step.icon;
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center ${
        inView ? 'reveal-shown' : 'reveal-pending'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border border-black/15 mb-6">
        <Icon className="h-6 w-6 text-black" strokeWidth={1.5} />
      </div>
      <span className="font-sans text-xs uppercase tracking-widest text-[#6F6F6F] mb-3">
        Schritt {String(index + 1).padStart(2, '0')}
      </span>
      <h3
        className="font-display text-3xl sm:text-4xl text-black mb-4"
        style={{ letterSpacing: '-0.5px' }}
      >
        {step.title}
      </h3>
      <p className="font-sans text-base text-[#6F6F6F] leading-relaxed max-w-xs">
        {step.description}
      </p>
    </div>
  );
}
