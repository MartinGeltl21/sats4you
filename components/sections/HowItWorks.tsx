import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Box auswählen",
    description:
      "Du wählst die passende Box für den Anlass — vom ersten Bitcoin-Erlebnis bis zur vollständigen Sovereignty-Lösung.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personalisieren",
    description:
      "Dein Name, eine persönliche Nachricht, eine Grußkarte — jede Box wird zu deinem ganz persönlichen Geschenk.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Verschenken",
    description:
      "Wir liefern. Dein Empfänger öffnet die Box und startet seine Bitcoin-Reise — sicher, einfach, unvergesslich.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#f7931a] mb-4">
            So einfach geht's
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            In drei Schritten zum
            <br />
            <span className="text-[#f7931a]">perfekten Geschenk</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#f7931a]/20 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <Card
              key={i}
              className="bg-[#111111] border-[#222222] hover:border-[#f7931a]/30 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Number badge */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-[#0a0a0a] font-bold text-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                    }}
                  >
                    {step.number}
                  </div>
                  <div className="text-white/20 group-hover:text-[#f7931a]/40 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
