"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Zap,
  Flame,
  ShieldCheck,
  Building2,
  Check,
  Info,
  ArrowRight,
} from "lucide-react";
import { products } from "@/lib/data";

const productMeta: Record<
  string,
  {
    icon: React.ElementType;
    color: string;
    bgGradient: string;
    btnBase: string;
    btnHover: string;
  }
> = {
  starter: {
    icon: Zap,
    color: "#60a5fa",
    bgGradient: "from-blue-500/10 to-transparent",
    btnBase: "border-blue-400/25 text-blue-400/70 bg-blue-500/[0.04]",
    btnHover: "hover:border-blue-400/55 hover:text-blue-300 hover:bg-blue-500/[0.12]",
  },
  "orange-pill": {
    icon: Flame,
    color: "#f7931a",
    bgGradient: "from-[#f7931a]/15 to-transparent",
    btnBase: "",
    btnHover: "",
  },
  sovereignty: {
    icon: ShieldCheck,
    color: "#a78bfa",
    bgGradient: "from-violet-500/10 to-transparent",
    btnBase: "border-violet-400/25 text-violet-400/70 bg-violet-500/[0.04]",
    btnHover: "hover:border-violet-400/55 hover:text-violet-300 hover:bg-violet-500/[0.12]",
  },
  corporate: {
    icon: Building2,
    color: "#34d399",
    bgGradient: "from-emerald-500/10 to-transparent",
    btnBase: "border-emerald-400/25 text-emerald-400/70 bg-emerald-500/[0.04]",
    btnHover: "hover:border-emerald-400/55 hover:text-emerald-300 hover:bg-emerald-500/[0.12]",
  },
};

const featureTooltips: Record<string, string> = {
  "Hardware Wallet (BitBox02 oder Jade)":
    "Ein physisches Gerät, das Bitcoin offline sichert — der sicherste Weg zur Selbstverwahrung.",
  "Seedor Backup-Lösung":
    "Stahlplatte zum Eingravieren des Seed-Phrases — feuerfest und wasserdicht.",
  "Custom Branding & Logo":
    "Wir passen Verpackung und Karte komplett an euer Corporate Design an.",
  "Bulk-Bestellungen ab 10 Stück":
    "Staffelpreise ab 10 Einheiten. Je mehr, desto günstiger.",
};

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const meta = productMeta[product.id];
  const Icon = meta.icon;

  const scrollToB2B = () => {
    document.getElementById("b2b")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Card
      className={`relative flex flex-col h-full overflow-hidden border bg-[#0e0e0e] transition-all duration-300 ${
        product.highlight
          ? "border-[#f7931a]/40 shadow-[0_0_50px_-12px_rgba(247,147,26,0.3)]"
          : "border-white/8 hover:border-white/15"
      }`}
    >
      {/* Top accent line */}
      {product.highlight && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #f7931a 50%, transparent 100%)",
          }}
        />
      )}

      {/* Header gradient blob */}
      <div
        className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${meta.bgGradient} pointer-events-none`}
      />

      {/* Header */}
      <div className="relative px-6 pt-7 pb-0 w-full">
        <div className="flex items-start justify-between gap-3 mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: `${meta.color}18`,
              border: `1px solid ${meta.color}30`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color: meta.color }} />
          </div>

          {product.badge && (
            <Badge
              className="shrink-0 text-[#0a0a0a] font-semibold text-xs px-2.5 py-1 border-0"
              style={{
                background: "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
              }}
            >
              {product.badge}
            </Badge>
          )}
        </div>

        <p
          className="text-xs font-semibold uppercase tracking-widest mb-1.5"
          style={{ color: meta.color }}
        >
          {product.tagline}
        </p>
        <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>

        <div className="mb-4">
          <span
            className="text-3xl font-extrabold tracking-tight"
            style={{
              color: product.highlight ? "#f7931a" : "rgba(255,255,255,0.92)",
            }}
          >
            {product.priceRange}
          </span>
        </div>

        <p className="text-sm text-white/45 leading-relaxed mb-5">
          {product.description}
        </p>

        <Separator className="bg-white/6" />
      </div>

      {/* Feature list */}
      <CardContent className="flex-1 px-6 pt-5 pb-4">
        <ul className="space-y-2.5">
          {product.items.map((item, i) => {
            const tooltip = featureTooltips[item];
            return (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <Check
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: meta.color }}
                />
                <span className="text-white/60 flex items-center gap-1.5 leading-snug">
                  {item}
                  {tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="inline-flex cursor-help">
                        <Info className="w-3.5 h-3.5 text-white/25 hover:text-white/60 shrink-0 transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-52 text-xs">
                        {tooltip}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>

      {/* CTA */}
      <CardFooter className="px-6 pb-6 pt-2">
        {product.highlight ? (
          <button
            className="w-full py-3 px-5 rounded-xl font-semibold text-sm text-[#0a0a0a] flex items-center justify-center gap-2 transition-all duration-200 group shadow-lg shadow-[#f7931a]/25 hover:shadow-[#f7931a]/50 hover:brightness-110 active:scale-[0.98] cursor-pointer"
            style={{ background: "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)" }}
          >
            {product.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        ) : (
          <button
            className={`w-full py-3 px-5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all duration-200 group active:scale-[0.98] cursor-pointer ${meta.btnBase} ${meta.btnHover}`}
            onClick={product.id === "corporate" ? scrollToB2B : undefined}
          >
            {product.cta}
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              style={{ color: meta.color }}
            />
          </button>
        )}
      </CardFooter>
    </Card>
  );
}

export function Products() {
  return (
    <section id="products" className="py-16 px-4 sm:py-24 sm:px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#f7931a]/70 mb-4">
            Unsere Boxen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Für jedes Budget.
            <br />
            Für jeden Anlass.
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile Stack */}
        <div className="sm:hidden flex flex-col gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
