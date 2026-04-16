"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="faq" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#f7931a] mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Häufige Fragen
          </h2>
        </div>

        {/* Accordion — Base UI: value is an array */}
        <Accordion
          value={openItems}
          onValueChange={(vals: string[]) => setOpenItems(vals)}
          className="space-y-3"
        >
          {faqItems.map((item, i) => {
            const val = `item-${i}`;
            return (
              <AccordionItem
                key={i}
                value={val}
                className="border border-[#222222] rounded-2xl bg-[#111111] px-6 overflow-hidden data-[state=open]:border-[#f7931a]/30 transition-colors duration-200"
              >
                <AccordionTrigger className="text-white/80 hover:text-white hover:no-underline text-left font-medium py-5 [&>svg]:text-[#f7931a]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 leading-relaxed pb-5 pt-0">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
