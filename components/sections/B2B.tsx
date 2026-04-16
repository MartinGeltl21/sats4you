"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sellingPoints = [
  {
    title: "Individuelles Branding",
    description:
      "Dein Logo, deine Farben, deine Botschaft — wir passen alles auf deinen Auftritt an.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Bulk-Bestellungen ab 10 Stück",
    description:
      "Ob 10 oder 1.000 Boxen — wir skalieren mit dir. Attraktive Staffelpreise inklusive.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Persönliche Beratung",
    description:
      "Ein Ansprechpartner, der versteht, was du brauchst — von der ersten Anfrage bis zur Lieferung.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
];

export function B2B() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="b2b" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-[#f7931a] mb-4">
              Für Unternehmen
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Mitarbeiter &amp; Kunden begeistern —{" "}
              <span className="text-[#f7931a]">mit Bitcoin.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Bitcoin als Firmengeschenk ist unvergesslich. Kein Kugelschreiber.
              Kein Obstkorb. Etwas, das wirklich bleibt.
            </p>

            {/* Selling points */}
            <div className="space-y-6 mb-10">
              {sellingPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f7931a]/10 border border-[#f7931a]/20 flex items-center justify-center text-[#f7931a]">
                    {point.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      {point.title}
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={() => setOpen(true)}
              className="text-base px-8 py-6 font-semibold rounded-xl text-[#0a0a0a] hover:brightness-110 transition-all duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
              }}
            >
              Jetzt anfragen
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div
              className="w-72 h-72 rounded-3xl border border-[#f7931a]/20 bg-gradient-to-br from-[#f7931a]/10 to-transparent flex items-center justify-center"
              style={{
                boxShadow: "0 0 80px -20px rgba(247,147,26,0.3)",
              }}
            >
              <span className="text-[8rem] text-[#f7931a] opacity-30 font-bold select-none">
                ₿
              </span>
            </div>
            {/* Floating stats */}
            <div className="absolute top-6 right-0 bg-[#111111] border border-[#222222] rounded-2xl p-4 text-center min-w-[120px]">
              <p className="text-2xl font-bold text-[#f7931a]">10+</p>
              <p className="text-xs text-white/40 mt-1">Mindestbestellung</p>
            </div>
            <div className="absolute bottom-6 left-0 bg-[#111111] border border-[#222222] rounded-2xl p-4 text-center min-w-[120px]">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-white/40 mt-1">Individuell</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#111111] border-[#222222] text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              Unternehmensanfrage
            </DialogTitle>
            <DialogDescription className="text-white/50">
              Wir melden uns innerhalb von 24 Stunden bei dir.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-12 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                }}
              >
                <svg
                  className="w-8 h-8 text-[#0a0a0a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Danke für deine Anfrage!
              </h3>
              <p className="text-white/50">
                Wir melden uns bald bei dir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-white/70 text-sm">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Max Mustermann"
                    className="bg-[#0a0a0a] border-[#333333] text-white placeholder:text-white/20 focus-visible:ring-[#f7931a]/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-white/70 text-sm">
                    Firma *
                  </Label>
                  <Input
                    id="company"
                    required
                    placeholder="Musterfirma GmbH"
                    className="bg-[#0a0a0a] border-[#333333] text-white placeholder:text-white/20 focus-visible:ring-[#f7931a]/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-white/70 text-sm">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="max@musterfirma.de"
                  className="bg-[#0a0a0a] border-[#333333] text-white placeholder:text-white/20 focus-visible:ring-[#f7931a]/50"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-white/70 text-sm">Anzahl Boxen *</Label>
                <Select required>
                  <SelectTrigger className="bg-[#0a0a0a] border-[#333333] text-white focus:ring-[#f7931a]/50">
                    <SelectValue
                      placeholder="Bitte wählen"
                      className="text-white/20"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111111] border-[#333333] text-white">
                    <SelectItem value="10-25">10–25 Stück</SelectItem>
                    <SelectItem value="26-50">26–50 Stück</SelectItem>
                    <SelectItem value="51-100">51–100 Stück</SelectItem>
                    <SelectItem value="100+">100+ Stück</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-white/70 text-sm">
                  Nachricht
                </Label>
                <Textarea
                  id="message"
                  placeholder="Besondere Wünsche, Anlass, Deadline..."
                  rows={3}
                  className="bg-[#0a0a0a] border-[#333333] text-white placeholder:text-white/20 focus-visible:ring-[#f7931a]/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-semibold py-5 rounded-xl text-[#0a0a0a] hover:brightness-110 transition-all duration-200 mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, #f7931a 0%, #d4a017 100%)",
                }}
              >
                Anfrage absenden
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
