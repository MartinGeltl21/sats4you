import { PackageOpen, PenLine, Gift } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Timeline } from '@/components/ui/timeline';

const STEPS = [
  {
    icon: PackageOpen,
    title: 'Box auswählen',
    step: 1,
    description:
      'Du wählst die passende Box für den Anlass — vom ersten Bitcoin-Erlebnis bis zur vollständigen Sovereignty-Lösung.',
  },
  {
    icon: PenLine,
    title: 'Personalisieren',
    step: 2,
    description:
      'Dein Name, eine persönliche Nachricht, eine Grußkarte — jede Box wird zu deinem ganz persönlichen Geschenk.',
  },
  {
    icon: Gift,
    title: 'Verschenken',
    step: 3,
    description:
      'Wir liefern. Dein Empfänger öffnet die Box und startet seine Bitcoin-Reise — sicher, einfach, unvergesslich.',
  },
];

const timelineData = STEPS.map((step) => {
  const Icon = step.icon;
  return {
    title: step.title,
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">
          Schritt {String(step.step).padStart(2, '0')}
        </p>
        <p className="font-sans text-base text-[#6F6F6F] leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    ),
  };
});

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 bg-white pt-12 pb-32 px-6 md:pt-16 md:pb-48"
    >
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
      </div>

      <div className="mt-12 md:mt-20">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
