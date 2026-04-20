import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Zap, Flame, ShieldCheck, Building2, Plus, HelpCircle, ArrowRight } from 'lucide-react';
import { products, productTooltips, type Product } from '@/lib/data';
import SectionHeading from './SectionHeading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Reveal } from '@/components/ui/reveal';
import { scrollToId } from '@/lib/useLenis';

const ICONS: Record<string, typeof Zap> = {
  starter: Zap,
  'orange-pill': Flame,
  sovereignty: ShieldCheck,
  corporate: Building2,
};

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Products() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="products"
      className="relative z-10 bg-white border-t border-black/5"
    >
      <div className={`${prefersReduced ? 'block' : 'lg:hidden'} py-32 md:py-48 px-6`}>
        <ProductsGrid />
      </div>

      {!prefersReduced && (
        <div className="hidden lg:block">
          <ProductsPinTrack />
        </div>
      )}
    </section>
  );
}

function ProductsGrid() {
  return (
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
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}

const PAUSE_AFTER_LAND = 0.5;

function ProductsPinTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const n = products.length;
  const landProgress = n / (n + PAUSE_AFTER_LAND);
  const cardsProgress = useTransform(
    scrollYProgress,
    [0, landProgress],
    [0, 1],
    { clamp: true },
  );

  const warmTint = hexToRgba('#FEF3C7', 0.55);
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.12, 0.85, 1],
    ['rgba(255, 255, 255, 1)', warmTint, warmTint, 'rgba(255, 255, 255, 1)'],
  );

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${(n + PAUSE_AFTER_LAND) * 100}vh` }}
    >
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
      >
        <div className="shrink-0 pt-20 pb-6 px-6 max-w-7xl mx-auto w-full">
          <SectionHeading
            kicker="Produkte"
            title={
              <>
                Für jedes Budget. Für jeden <em>Anlass</em>.
              </>
            }
            subtitle="Vier kuratierte Boxen — vom ersten Bitcoin-Erlebnis bis zur kompletten Sovereignty-Lösung."
          />
        </div>

        <TooltipProvider delayDuration={100}>
          <div className="flex-1 flex items-stretch justify-center min-h-0 px-4 py-4 overflow-hidden">
            <div className="flex flex-row items-stretch gap-3 xl:gap-4 w-full max-w-[1400px] max-h-[720px]">
              {products.map((product, i) => (
                <ProductSlotCard
                  key={product.id}
                  product={product}
                  index={i}
                  total={n}
                  scrollYProgress={cardsProgress}
                />
              ))}
            </div>
          </div>
        </TooltipProvider>

        <div className="shrink-0 px-6 pb-8 pt-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-black/10 relative overflow-hidden">
              <motion.div
                style={{ scaleX: cardsProgress, transformOrigin: '0 0' }}
                className="absolute inset-0 bg-black"
              />
            </div>
            <ProductsCounter progress={cardsProgress} total={n} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProductSlotCard({
  product,
  index,
  total,
  scrollYProgress,
}: {
  product: Product;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const cardX = useTransform(
    scrollYProgress,
    [start, end],
    ['100vw', '0vw'],
    { clamp: true },
  );
  const cardFilter = useTransform(
    scrollYProgress,
    [start, end],
    ['grayscale(1) brightness(0.96)', 'grayscale(0) brightness(1)'],
    { clamp: true },
  );

  return (
    <motion.div
      style={{ x: cardX, filter: cardFilter, willChange: 'transform, filter' }}
      className="flex-1 min-w-0 max-w-[340px] flex"
    >
      <ProductCard product={product} />
    </motion.div>
  );
}

function ProductsCounter({
  progress,
  total,
}: {
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  total: number;
}) {
  const current = useTransform(progress, (p) =>
    String(Math.min(total, Math.max(1, Math.floor(p * total) + 1))).padStart(2, '0'),
  );
  return (
    <div className="font-sans text-xs tracking-[0.2em] uppercase text-black/60 tabular-nums">
      <motion.span>{current}</motion.span>
      <span> / {String(total).padStart(2, '0')}</span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = ICONS[product.id] ?? Zap;
  const isHighlight = !!product.highlight;
  const { theme } = product;

  const scrollToB2B = () => scrollToId('#b2b');

  return (
    <Card
      className={`relative h-full p-0 flex flex-col transition-colors ${
        isHighlight
          ? 'border-black shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]'
          : ''
      }`}
      style={isHighlight ? undefined : { borderColor: theme.accentMuted }}
    >
      {product.badge && (
        <div className="absolute -top-3 left-7 z-10">
          <Badge
            variant="default"
            style={{ backgroundColor: theme.accent, borderColor: theme.accent }}
          >
            {product.badge}
          </Badge>
        </div>
      )}

      <div className="px-7 pt-7 w-full">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full mb-4"
          style={{ backgroundColor: theme.accentLight }}
        >
          <Icon className="h-4 w-4" strokeWidth={1.5} style={{ color: theme.accent }} />
        </div>

        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#6F6F6F] mb-2 block">
          {product.tagline}
        </span>
        <h3
          className={`font-display text-black mb-2 ${
            isHighlight ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
          }`}
          style={{ letterSpacing: '-0.5px', lineHeight: 1 }}
        >
          {product.name}
        </h3>
        <p className="font-sans text-sm text-black font-medium tabular-nums mb-3">
          {product.priceRange}
        </p>
        <p className="font-sans text-[13px] text-[#6F6F6F] leading-relaxed mb-4">
          {product.description}
        </p>

        <Separator />
      </div>

      <div className="px-7 pt-4 pb-2 w-full flex-1">
        <ul className="flex flex-col gap-1.5">
          {product.items.map((item) => {
            const tooltip = productTooltips[item];
            return (
              <li key={item} className="flex items-start gap-2 text-[13px] text-black/80">
                <Plus className="h-3.5 w-3.5 shrink-0 mt-0.5 text-black/40" strokeWidth={1.5} />
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
      </div>

      <div className="px-7 pb-6 pt-3 w-full">
        <Button
          variant={isHighlight ? 'default' : 'outline'}
          className="w-full group"
          onClick={product.id === 'corporate' ? scrollToB2B : undefined}
        >
          {product.cta}
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </Card>
  );
}
