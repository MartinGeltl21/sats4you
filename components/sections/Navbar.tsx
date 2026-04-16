"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "So funktioniert's", href: "#how-it-works" },
  { label: "Produkte", href: "#products" },
  { label: "Anlässe", href: "#occasions" },
  { label: "Unternehmen", href: "#b2b" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex cursor-pointer items-center gap-2 font-bold text-white text-lg tracking-tight"
        >
          <span className="text-[#f7931a] text-xl">₿</span>
          Sats4You
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="cursor-pointer px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#products")}
            className="ml-3 cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg text-[#0a0a0a] transition-all duration-150 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
            }}
          >
            Jetzt schenken
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden cursor-pointer flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          <span
            className={cn(
              "block w-5 h-0.5 bg-white/70 transition-all duration-200",
              open && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block w-5 h-0.5 bg-white/70 transition-all duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-5 h-0.5 bg-white/70 transition-all duration-200",
              open && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="cursor-pointer text-left px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#products")}
            className="mt-2 cursor-pointer px-4 py-2.5 text-sm font-semibold rounded-lg text-[#0a0a0a] text-center"
            style={{
              background: "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
            }}
          >
            Jetzt schenken
          </button>
        </div>
      )}
    </header>
  );
}
