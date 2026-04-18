import SectionHeading from './SectionHeading';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { testimonials } from '@/lib/data';

const items = testimonials.map((t) => ({
  quote: t.quote,
  name: t.name,
  designation: t.title ? `${t.title} · ${t.location}` : t.location,
  src: t.avatar,
}));

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          kicker="Echte Kunden. Echte Freude."
          title={
            <>
              Was unsere <em>Kunden</em> sagen.
            </>
          }
        />

        <AnimatedTestimonials testimonials={items} autoplay />
      </div>
    </section>
  );
}
