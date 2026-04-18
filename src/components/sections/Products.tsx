import { Zap, Flame, ShieldCheck, Building2, Plus, HelpCircle } from 'lucide-react';
import { products, productTooltips, type Product } from '../../lib/data';
import SectionHeading from './SectionHeading';
import { useInView } from '../../lib/useInView';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const ICONS: Record<string, typeof Zap> = {
  starter: Zap,
  'orange-pill': Flame,
  sovereignty: ShieldCheck,
  corporate: Building2,
};

export default function Products() {
  return (
    <section id="products" className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          kicker="Produkte"
          title={
            <>
              Für jedes Budget. Für jeden <em>Anlass</em>.
            </>
          }
          subtitle="Vier kuratierte Boxen — vom ersten Bitcoin-Erlebnis bis zur kompletten Sovereignty-Lösung."
        />

        <TooltipProvider delayDuration={100}>
          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = ICONS[product.id] ?? Zap;
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`relative flex flex-col rounded-3xl border bg-white p-8 transition-all hover:-translate-y-1 ${
        product.highlight ? 'border-black' : 'border-black/10 hover:border-black/30'
      } ${inView ? 'reveal-shown' : 'reveal-pending'}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {product.badge && (
        <span className="absolute -top-3 left-8 rounded-full bg-black text-white px-3 py-1 text-xs font-medium tracking-wide">
          {product.badge}
        </span>
      )}

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 mb-6">
        <Icon className="h-5 w-5 text-black" strokeWidth={1.5} />
      </div>

      <span className="font-sans text-xs uppercase tracking-widest text-[#6F6F6F] mb-3">
        {product.tagline}
      </span>
      <h3
        className={`font-display text-black mb-3 ${
          product.highlight ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
        }`}
        style={{ letterSpacing: '-0.5px', lineHeight: 1 }}
      >
        {product.name}
      </h3>
      <p className="font-sans text-base text-black font-medium tabular-nums mb-4">
        {product.priceRange}
      </p>
      <p className="font-sans text-sm text-[#6F6F6F] leading-relaxed mb-6">
        {product.description}
      </p>

      <ul className="flex flex-col gap-2 mb-8 flex-1">
        {product.items.map((item) => {
          const tooltip = productTooltips[item];
          return (
            <li key={item} className="flex items-start gap-2 text-sm text-black/80">
              <Plus className="h-4 w-4 shrink-0 mt-0.5 text-black/40" strokeWidth={1.5} />
              <span className="flex items-center gap-1.5">
                {item}
                {tooltip && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        aria-label={`Mehr Infos zu ${item}`}
                        className="text-black/30 hover:text-black transition-colors"
                      >
                        <HelpCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>{tooltip}</TooltipContent>
                  </Tooltip>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      <a
        href={product.id === 'corporate' ? '#b2b' : '#'}
        className={`rounded-full px-6 py-3 text-sm text-center transition-transform hover:scale-[1.03] ${
          product.highlight
            ? 'bg-black text-white'
            : 'border border-black/20 text-black hover:bg-black hover:text-white'
        }`}
      >
        {product.cta}
      </a>
    </article>
  );
}
