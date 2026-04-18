import { Separator } from '@/components/ui/separator';

const LINKS = [
  { label: 'Impressum', href: '#' },
  { label: 'Datenschutz', href: '#' },
  { label: 'Kontakt', href: '#b2b' },
];

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function NostrIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 4v4H7l5 6 5-6h-4V8h-2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white border-t border-black/10 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="flex-1 max-w-md">
            <a
              href="#hero"
              className="font-display text-3xl tracking-tight text-black flex items-baseline gap-1.5"
            >
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
            <div className="flex items-center gap-4 text-black">
              <a
                href="#"
                className="text-black/60 hover:text-black transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-black/60 hover:text-black transition-colors"
                aria-label="Nostr"
              >
                <NostrIcon />
              </a>
              <a
                href="#"
                className="text-black/60 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <Separator className="mt-16 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="font-sans text-xs text-[#6F6F6F]">
            © 2026 Sats4You. Alle Rechte vorbehalten.
          </span>
          <span className="font-sans text-xs text-[#6F6F6F]">
            Made with ☀️ &amp; ₿ in Germany
          </span>
        </div>
      </div>
    </footer>
  );
}
