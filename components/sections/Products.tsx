"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";

export function Products() {
  const scrollToB2B = () => {
    const el = document.getElementById("b2b");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#f7931a] mb-4">
            Unsere Boxen
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Für jedes Budget.
            <br />
            Für jeden Anlass.
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`relative flex flex-col bg-[#111111] border transition-all duration-300 group overflow-hidden ${
                product.highlight
                  ? "border-[#f7931a]/50 shadow-[0_0_40px_-10px_rgba(247,147,26,0.25)]"
                  : "border-[#222222] hover:border-[#f7931a]/30"
              }`}
            >
              {/* Highlight top bar */}
              {product.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #f7931a, transparent)",
                  }}
                />
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {product.name}
                  </h3>
                  {product.badge && (
                    <Badge
                      className="shrink-0 text-[#0a0a0a] font-semibold text-xs px-2 py-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                        border: "none",
                      }}
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <p
                  className={`text-2xl font-bold ${
                    product.highlight ? "text-[#f7931a]" : "text-white/90"
                  }`}
                >
                  {product.priceRange}
                </p>
                <p className="text-xs font-medium text-white/40 uppercase tracking-wider mt-1">
                  {product.tagline}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 pt-0">
                <p className="text-sm text-white/50 mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Items list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#f7931a] mt-0.5 shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {product.id === "corporate" ? (
                  <Button
                    className="w-full font-semibold rounded-xl border-[#f7931a]/40 text-[#f7931a] hover:bg-[#f7931a]/10 hover:border-[#f7931a] transition-all duration-200"
                    variant="outline"
                    onClick={scrollToB2B}
                  >
                    {product.cta}
                  </Button>
                ) : (
                  <Button
                    className={`w-full font-semibold rounded-xl transition-all duration-200 ${
                      product.highlight
                        ? "text-[#0a0a0a] hover:brightness-110 shadow-md"
                        : "border-[#f7931a]/40 text-[#f7931a] hover:bg-[#f7931a]/10 hover:border-[#f7931a]"
                    }`}
                    style={
                      product.highlight
                        ? {
                            background:
                              "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                          }
                        : undefined
                    }
                    variant={product.highlight ? "default" : "outline"}
                  >
                    {product.cta}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
