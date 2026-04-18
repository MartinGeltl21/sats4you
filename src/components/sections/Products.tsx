import { Zap, Flame, ShieldCheck, Building2, Plus, HelpCircle, ArrowRight } from 'lucide-react';
import { products, productTooltips, type Product } from '@/lib/data';
import SectionHeading from './SectionHeading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const ICONS: Record<string, typeof Zap> = {
  starter: Zap,
  'orange-pill': Flame,
  sovereignty: ShieldCheck,
  corporate: Building2,
};

export default function Products() {
  return (
    <section
      id="products"
      className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5"
    >
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = ICONS[product.id] ?? Zap;
  const isHighlight = !!product.highlight;

  const scrollToB2B = () => {
    document.getElementById('b2b')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CardContainer containerClassName="w-full h-full" className="w-full h-full">
      <CardBody className="w-full h-full">
        <Card
          className={`relative h-full p-0 ${
            isHighlight
              ? 'border-black shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]'
              : 'border-black/10 hover:border-black/30 transition-colors'
          }`}
        >
          {product.badge && (
            <CardItem
              translateZ={40}
              className="absolute -top-3 left-8 z-10"
            >
              <Badge variant="default">{product.badge}</Badge>
            </CardItem>
          )}

          <CardItem translateZ={20} className="px-8 pt-8 w-full">
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
          </CardItem>

          <CardItem translateZ={10} className="px-8 pt-6 pb-2 w-full flex-1">
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
          </CardItem>

          <CardItem translateZ={50} className="px-8 pb-8 pt-4 w-full">
            <Button
              variant={isHighlight ? 'default' : 'outline'}
              className="w-full group"
              onClick={product.id === 'corporate' ? scrollToB2B : undefined}
            >
              {product.cta}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </CardItem>
        </Card>
      </CardBody>
    </CardContainer>
  );
}
