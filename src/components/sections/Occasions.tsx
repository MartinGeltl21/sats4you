import SectionHeading from './SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { occasions, type Occasion } from '@/lib/data';

const TABS = [
  { value: 'alle', label: 'Alle' },
  { value: 'familie', label: 'Familie' },
  { value: 'beruf', label: 'Beruf' },
  { value: 'feste', label: 'Feste' },
] as const;

function OccasionGrid({ items }: { items: Occasion[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {items.map((o) => (
        <div
          key={o.label}
          className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 hover:border-black/30 transition-colors cursor-default"
        >
          <span className="text-2xl select-none shrink-0" aria-hidden>
            {o.emoji}
          </span>
          <span className="font-sans text-sm font-medium text-black leading-tight">
            {o.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Occasions() {
  return (
    <section
      id="occasions"
      className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          kicker="Anlässe"
          title={
            <>
              Das Geschenk, <em>das bleibt</em>.
            </>
          }
          subtitle="Bitcoin verliert keinen Wert durch Abnutzung — es ist das einzige Geschenk, das mit der Zeit besser werden kann."
        />

        <Tabs defaultValue="alle" className="mt-16 md:mt-20 w-full">
          <div className="flex justify-center mb-10">
            <TabsList>
              {TABS.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="alle">
            <OccasionGrid items={occasions} />
          </TabsContent>
          <TabsContent value="familie">
            <OccasionGrid items={occasions.filter((o) => o.category === 'familie')} />
          </TabsContent>
          <TabsContent value="beruf">
            <OccasionGrid items={occasions.filter((o) => o.category === 'beruf')} />
          </TabsContent>
          <TabsContent value="feste">
            <OccasionGrid items={occasions.filter((o) => o.category === 'feste')} />
          </TabsContent>
        </Tabs>

        <div className="mt-14 flex justify-center">
          <p className="font-display text-2xl md:text-3xl text-black italic max-w-xl text-center leading-snug">
            „Bitcoin ist das Geschenk, das bleibt.“
          </p>
        </div>
      </div>
    </section>
  );
}
