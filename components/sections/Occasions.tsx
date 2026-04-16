import { occasions } from "@/lib/data";

export function Occasions() {
  return (
    <section id="occasions" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#f7931a] mb-4">
            Für jeden Anlass
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Das Geschenk, das bleibt.
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Bitcoin verliert keinen Wert durch Abnutzung. Es ist das einzige
            Geschenk, das mit der Zeit besser werden kann.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {occasions.map((occasion, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-[#222222] bg-[#111111] hover:border-[#f7931a]/30 hover:bg-[#f7931a]/5 transition-all duration-300 cursor-default"
            >
              <span className="text-3xl select-none" aria-hidden>
                {occasion.emoji}
              </span>
              <span className="text-white/70 group-hover:text-white font-medium transition-colors duration-200">
                {occasion.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#f7931a]/20 bg-[#f7931a]/5">
            <span className="text-[#f7931a] text-2xl font-bold">₿</span>
            <p className="text-white/60 text-lg italic">
              &ldquo;Bitcoin ist das Geschenk, das bleibt.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
