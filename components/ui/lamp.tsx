"use client";

import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        // Allow the glow to breathe vertically without clipping,
        // but still prevent horizontal overflow from wide beams.
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-clip overflow-y-visible",
        className
      )}
    >
      {/* Lamp beams layer */}
      <div className="pointer-events-none relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left beam */}
        <div
          className="absolute inset-auto right-1/2 h-56 w-[30rem] opacity-25 mix-blend-screen"
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #f7931a, transparent, transparent)",
          }}
        />
        {/* Right beam */}
        <div
          className="absolute inset-auto left-1/2 h-56 w-[30rem] opacity-25 mix-blend-screen"
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #f7931a)",
          }}
        />

        {/* Soft fade to avoid a hard cutoff, without painting over the background */}
        <div className="absolute top-1/2 h-56 w-full translate-y-10 scale-x-150 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-transparent blur-2xl" />

        {/* Wide soft glow */}
        <div className="absolute inset-auto z-10 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#f7931a] opacity-[0.06] blur-3xl mix-blend-screen" />

        {/* Tight bright glow (the lamp "bulb") */}
        <div className="absolute inset-auto z-10 h-36 w-64 -translate-y-24 rounded-full bg-[#f7931a] opacity-[0.10] blur-2xl mix-blend-screen" />

        {/* Horizontal light bar */}
        <div className="absolute inset-auto z-10 h-px w-[30rem] -translate-y-28 bg-gradient-to-r from-transparent via-[#f7931a]/40 to-transparent opacity-60 mix-blend-screen" />

        {/* Top mask to hide beam origin */}
        <div className="absolute inset-auto z-10 h-44 w-full -translate-y-[12.5rem] bg-gradient-to-b from-[#0a0a0a]/35 via-[#0a0a0a]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex w-full -translate-y-28 flex-col items-center px-5 sm:-translate-y-40 lg:-translate-y-64">
        {children}
      </div>
    </div>
  );
}