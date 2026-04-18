import { useState } from 'react';
import { occasions, type Occasion } from '../../lib/data';
import SectionHeading from './SectionHeading';
import { useInView } from '../../lib/useInView';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

type Category = 'alle' | Occasion['category'];

const TABS: { value: Category; label: string }[] = [
  { value: 'alle', label: 'Alle' },
  { value: 'familie', label: 'Familie' },
  { value: 'beruf', label: 'Beruf' },
  { value: 'feste', label: 'Feste' },
];

export default function Occasions() {
  const [category, setCategory] = useState<Category>('alle');
  const filtered =
    category === 'alle'
      ? occasions
      : occasions.filter((o) => o.category === category);

  return (
    <section id="occasions" className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          kicker="Anlässe"
          title={
            <>
              Das Geschenk, das <em>bleibt</em>.
            </>
          }
          subtitle="Bitcoin verliert keinen Wert durch Abnutzung — es ist das einzige Geschenk, das mit der Zeit besser werden kann."
        />

        <div className="mt-16 flex justify-center">
          <Tabs
            value={category}
            onValueChange={(v) => setCategory(v as Category)}
          >
            <TabsList>
              {TABS.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((occ, i) => (
            <OccasionTile key={occ.label} occasion={occ} index={i} />
          ))}
        </div>

        <div className="mt-24 md:mt-32 text-center">
          <p
            className="font-display text-3xl sm:text-5xl md:text-6xl text-black max-w-3xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: '-1px' }}
          >
            <em>„Bitcoin ist das Geschenk, das bleibt.“</em>
          </p>
        </div>
      </div>
    </section>
  );
}

function OccasionTile({ occasion, index }: { occasion: Occasion; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white py-8 px-4 transition-all hover:border-black/30 hover:-translate-y-0.5 ${
        inView ? 'reveal-shown' : 'reveal-pending'
      }`}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <span className="text-3xl" aria-hidden>
        {occasion.emoji}
      </span>
      <span className="font-sans text-sm text-black text-center">{occasion.label}</span>
    </div>
  );
}
