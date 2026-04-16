"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { label: "So funktioniert's", href: "#how-it-works" },
  { label: "Produkte", href: "#products" },
  { label: "Anlässe", href: "#occasions" },
  { label: "Unternehmen", href: "#b2b" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
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
              className="cursor-pointer px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#products")}
            className="ml-3 cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg text-[#0a0a0a] hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
            }}
          >
            Jetzt schenken
          </button>
        </nav>

        {/* Mobile: Sheet */}
        <Sheet>
          <SheetTrigger
            className="md:hidden cursor-pointer p-2 text-white/70 hover:text-white transition-colors bg-transparent border-0"
            aria-label="Menü öffnen"
          >
            <Menu className="w-5 h-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#0d0d0d] border-l border-white/5 w-72 flex flex-col p-0"
            showCloseButton={false}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <span className="flex items-center gap-2 font-bold text-white text-lg tracking-tight">
                <span className="text-[#f7931a] text-xl">₿</span>
                Sats4You
              </span>
              <SheetClose className="cursor-pointer text-white/40 hover:text-white transition-colors bg-transparent border-0 text-xl leading-none">
                ✕
              </SheetClose>
            </div>

            <nav className="flex flex-col gap-1 flex-1 px-4 pt-4">
              {links.map((link) => (
                <SheetClose
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="cursor-pointer text-left px-3 py-3 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all w-full bg-transparent border-0"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>

            <div className="px-4 pb-6">
              <SheetClose
                onClick={() => scrollTo("#products")}
                className="w-full cursor-pointer px-4 py-3 text-sm font-semibold rounded-xl text-[#0a0a0a] text-center hover:brightness-110 transition-all border-0"
                style={{
                  background:
                    "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                }}
              >
                Jetzt schenken
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
