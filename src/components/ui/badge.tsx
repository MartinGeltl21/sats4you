import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium font-sans whitespace-nowrap transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-black text-white',
        outline: 'border-black/15 bg-white text-black',
        muted: 'border-transparent bg-black/5 text-black',
        soft: 'border-black/10 bg-white/70 text-[#6F6F6F]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
