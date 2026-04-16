"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { occasions } from "@/lib/data";

const tabs = [
  { value: "alle", label: "Alle" },
  { value: "familie", label: "Familie" },
  { value: "beruf", label: "Beruf" },
  { value: "feste", label: "Feste" },
] as const;

function OccasionGrid({
  items,
}: {
  items: typeof occasions;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((occasion, i) => (
        <div
          key={i}
          className="group flex items-center gap-3 p-4 rounded-2xl border border-[#222222] bg-[#111111] hover:border-[#f7931a]/30 hover:bg-[#f7931a]/5 transition-all duration-300 cursor-default"
        >
          <span className="text-2xl select-none shrink-0" aria-hidden>
            {occasion.emoji}
          </span>
          <span className="text-white/70 group-hover:text-white font-medium transition-colors duration-200 text-sm leading-tight">
            {occasion.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Occasions() {
  return (
    <section id="occasions" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Das Geschenk,{" "}
            <span className="text-[#f7931a]">das bleibt.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Bitcoin verliert keinen Wert durch Abnutzung — es ist das einzige
            Geschenk, das mit der Zeit besser werden kann.
          </p>
        </div>

        <Tabs defaultValue="alle" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#111111] border border-[#222222] p-1 rounded-xl gap-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-lg px-5 py-2 text-sm font-medium text-white/50 data-[state=active]:text-[#0a0a0a] data-[state=active]:shadow-none transition-all"
                  style={
                    {
                      "--tw-data-active-bg":
                        "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                    } as React.CSSProperties
                  }
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="alle">
            <OccasionGrid items={occasions} />
          </TabsContent>
          <TabsContent value="familie">
            <OccasionGrid
              items={occasions.filter((o) => o.category === "familie")}
            />
          </TabsContent>
          <TabsContent value="beruf">
            <OccasionGrid
              items={occasions.filter((o) => o.category === "beruf")}
            />
          </TabsContent>
          <TabsContent value="feste">
            <OccasionGrid
              items={occasions.filter((o) => o.category === "feste")}
            />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
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
