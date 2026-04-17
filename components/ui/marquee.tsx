import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  fadeWidth?: string;
  pauseOnHover?: boolean;
  fadeColor?: string;
}

export function Marquee({
  children,
  className,
  speed = 40,
  fadeWidth = "8rem",
  pauseOnHover = false,
  fadeColor: _fadeColor = "var(--color-base, #0a0a0a)",
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("group relative w-full overflow-hidden", className)}
      style={{
        maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}, black calc(100% - ${fadeWidth}), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}, black calc(100% - ${fadeWidth}), transparent)`,
      }}
      {...props}
    >
      <div
        className={cn(
          "flex w-max animate-marquee will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
