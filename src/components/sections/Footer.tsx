const LINKS = [
  { label: 'Impressum', href: '#' },
  { label: 'Datenschutz', href: '#' },
  { label: 'Kontakt', href: '#b2b' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white border-t border-black/10 px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex-1 max-w-md">
          <a href="#hero" className="font-display text-3xl tracking-tight text-black flex items-baseline gap-1.5">
            <em className="not-italic">₿</em>
            <span>Sats4You</span>
          </a>
          <p className="mt-4 font-sans text-sm text-[#6F6F6F] leading-relaxed">
            Das perfekte Bitcoin-Geschenk. Kuratiert, persönlich, unvergesslich.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-sans text-xs uppercase tracking-widest text-[#6F6F6F] mb-2">
            Rechtliches
          </span>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-black hover:text-[#6F6F6F] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-sans text-xs uppercase tracking-widest text-[#6F6F6F] mb-2">
            Sozial
          </span>
          <a href="#" className="font-sans text-sm text-black hover:text-[#6F6F6F] transition-colors">
            Twitter / X
          </a>
          <a href="#" className="font-sans text-sm text-black hover:text-[#6F6F6F] transition-colors">
            Nostr
          </a>
          <a href="#" className="font-sans text-sm text-black hover:text-[#6F6F6F] transition-colors">
            Instagram
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="font-sans text-xs text-[#6F6F6F]">
          © 2026 Sats4You. Alle Rechte vorbehalten.
        </span>
        <span className="font-sans text-xs text-[#6F6F6F]">
          Made with ☀️ &amp; ₿ in Germany
        </span>
      </div>
    </footer>
  );
}
