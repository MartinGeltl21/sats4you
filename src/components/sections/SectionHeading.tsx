import { type ReactNode } from 'react';
import { useInView } from '../../lib/useInView';

type Props = {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
};

export default function SectionHeading({ kicker, title, subtitle, align = 'center' }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div
      ref={ref}
      className={`flex flex-col max-w-3xl ${alignment} ${inView ? 'reveal-shown' : 'reveal-pending'}`}
    >
      {kicker && (
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#6F6F6F] mb-5">
          {kicker}
        </span>
      )}
      <h2
        className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-black"
        style={{ lineHeight: 0.95, letterSpacing: '-1.5px' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-base sm:text-lg text-[#6F6F6F] mt-6 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
