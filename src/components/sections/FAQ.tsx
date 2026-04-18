import { faqItems } from '@/lib/data';
import SectionHeading from './SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          kicker="FAQ"
          title={
            <>
              Häufige <em>Fragen</em>.
            </>
          }
        />

        <Accordion type="single" collapsible className="mt-16 w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
