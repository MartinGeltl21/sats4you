"use client";
import { PackageOpen, PenLine, Gift } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

const steps = [
  {
    title: "Box auswählen",
    icon: PackageOpen,
    step: 1,
    description:
      "Du wählst die passende Box für den Anlass — vom ersten Bitcoin-Erlebnis bis zur vollständigen Sovereignty-Lösung.",
  },
  {
    title: "Personalisieren",
    icon: PenLine,
    step: 2,
    description:
      "Dein Name, eine persönliche Nachricht, eine Grußkarte — jede Box wird zu deinem ganz persönlichen Geschenk.",
  },
  {
    title: "Verschenken",
    icon: Gift,
    step: 3,
    description:
      "Wir liefern. Dein Empfänger öffnet die Box und startet seine Bitcoin-Reise — sicher, einfach, unvergesslich.",
  },
];

const timelineData = steps.map((step) => {
  const Icon = step.icon;
  return {
    title: step.title,
    content: (
      <div className="flex flex-col gap-3">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#0a0a0a] shadow-lg shadow-[#f7931a]/20"
          style={{ background: "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)" }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <p className="text-xs font-semibold text-[#f7931a]/60 uppercase tracking-widest">
          Schritt {step.step}
        </p>
        <p className="text-white/50 leading-relaxed text-sm max-w-sm">
          {step.description}
        </p>
      </div>
    ),
  };
});

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#080808] pb-20 sm:pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          In drei Schritten zum
          <br />
          <span className="text-[#f7931a]">perfekten Geschenk.</span>
        </h2>
        <p className="mt-4 text-white/40 text-base sm:text-lg max-w-md">
          Kein Bitcoin-Wissen nötig. Wir führen dich durch alles.
        </p>
      </div>

      <Timeline data={timelineData} />
    </section>
  );
}
