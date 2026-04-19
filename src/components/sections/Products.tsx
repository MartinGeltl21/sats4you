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

function ProductsPinTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const n = products.length;
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(n - 1) * 100}vw`]);

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${n * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
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
          <div className="flex-1 flex items-center min-h-0">
            <motion.div style={{ x }} className="flex will-change-transform">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-screen shrink-0 flex items-center justify-center px-6"
                >
                  <div className="w-full max-w-[440px] h-full max-h-[60vh]">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </TooltipProvider>

        <div className="shrink-0 px-6 pb-8 pt-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[2px] bg-black/10 relative overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: '0 0' }}
                className="absolute inset-0 bg-black"
              />
            </div>
            <ProductsCounter progress={scrollYProgress} total={n} />
          </div>
        </div>
      </div>
    </div>
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

  const scrollToB2B = () => scrollToId('#b2b');

  return (
    <Card
      className={`relative h-full p-0 flex flex-col ${
        isHighlight
          ? 'border-black shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]'
          : 'border-black/10 hover:border-black/30 transition-colors'
      }`}
    >
      {product.badge && (
        <div className="absolute -top-3 left-8 z-10">
          <Badge variant="default">{product.badge}</Badge>
        </div>
      )}

      <div className="px-8 pt-8 w-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 mb-6">
          <Icon className="h-5 w-5 text-black" strokeWidth={1.5} />
        </div>

        <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#6F6F6F] mb-3 block">
          {product.tagline}
        </span>
        <h3
          className={`font-display text-black mb-3 ${
            isHighlight ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
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

        <Separator />
      </div>

      <div className="px-8 pt-6 pb-2 w-full flex-1 min-h-0 overflow-y-auto">
        <ul className="flex flex-col gap-2">
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
      </div>

      <div className="px-8 pb-8 pt-4 w-full">
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
