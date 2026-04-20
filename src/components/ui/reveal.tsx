import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
  direction?: 'left' | 'right' | 'bottom' | 'top';
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'viewport' | 'transition'>;

const directionMap = {
  left:  { x: -40, y: -20 },
  right: { x: 40,  y: 20 },
  bottom:{ x: 0,   y: 40 },
  top:   { x: 0,   y: -30 },
};

export function Reveal({
  children,
  delay = 0,
  y = 20,
  duration = 0.6,
  className,
  as = 'div',
  direction,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const initial = direction ? directionMap[direction] : { x: 0, y };

  if (reduce) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}