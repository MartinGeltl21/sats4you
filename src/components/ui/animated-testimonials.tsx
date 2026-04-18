import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const ROTATIONS = [-8, 6, 3, 5] as const;
  const getRandomRotation = (index: number) => ROTATIONS[index % ROTATIONS.length] ?? 0;

  return (
    <div className="mx-auto max-w-sm px-4 py-10 md:py-16 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <AnimatePresence>
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.src}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: getRandomRotation(index) }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRandomRotation(index),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: getRandomRotation(index) }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border border-black/10"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 min-h-[260px] md:min-h-0">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <h3 className="font-display text-2xl md:text-3xl text-black leading-snug">
              {testimonials[active].name}
            </h3>
            <p className="mt-1 text-sm text-[#6F6F6F]">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 font-display text-2xl md:text-3xl text-black leading-snug">
              <span className="mr-1">„</span>
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <span>“</span>
            </motion.p>
          </motion.div>
          <div className="flex gap-3 pt-8 md:pt-0">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Vorheriges Testimonial"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white hover:bg-black hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label="Nächstes Testimonial"
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white hover:bg-black hover:text-white transition-colors"
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
