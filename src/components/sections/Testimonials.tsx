import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '../../lib/data';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => {
      emblaApi.off('select', onSelect);
      window.clearInterval(interval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="relative z-10 bg-white py-32 md:py-48 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          kicker="Echte Kunden. Echte Freude."
          title={
            <>
              Was unsere <em>Kunden</em> sagen.
            </>
          }
        />

        <div className="mt-20 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
              >
                <figure className="flex flex-col h-full rounded-3xl border border-black/10 bg-white p-8">
                  <blockquote
                    className="font-display text-2xl md:text-3xl text-black leading-snug mb-8 flex-1"
                    style={{ letterSpacing: '-0.3px' }}
                  >
                    „{t.quote}“
                  </blockquote>
                  <figcaption className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt=""
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover border border-black/10"
                    />
                    <div className="flex flex-col">
                      <span className="font-sans text-sm text-black font-medium">
                        {t.name}
                      </span>
                      <span className="font-sans text-xs text-[#6F6F6F]">
                        {t.title ? `${t.title} · ` : ''}
                        {t.location}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Zu Testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? 'w-8 bg-black' : 'w-1.5 bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
