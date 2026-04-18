import { useEffect, useState } from 'react';

const MENU_ITEMS: { label: string; href: string }[] = [
  { label: 'Start', href: '#hero' },
  { label: "So funktioniert's", href: '#how-it-works' },
  { label: 'Produkte', href: '#products' },
  { label: 'Anlässe', href: '#occasions' },
  { label: 'Unternehmen', href: '#b2b' },
];

function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(',')]);

  return active;
}

export default function Navigation() {
  const active = useActiveSection(MENU_ITEMS.map((i) => i.href.slice(1)));

  return (
    <nav className="relative z-20 flex justify-between items-center px-6 sm:px-8 py-6 max-w-7xl mx-auto">
      <a href="#hero" className="font-display text-3xl tracking-tight text-black flex items-baseline gap-1.5">
        <em className="not-italic font-display">₿</em>
        <span>Sats4You</span>
      </a>

      <ul className="hidden md:flex gap-8 font-sans text-sm">
        {MENU_ITEMS.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <li key={item.label}>
              <a
                href={item.href}
                className={`transition-colors hover:text-black ${
                  isActive ? 'text-black' : 'text-[#6F6F6F]'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href="#products"
        className="bg-black text-white rounded-full px-6 py-2.5 text-sm transition-transform hover:scale-[1.03]"
      >
        Jetzt schenken
      </a>
    </nav>
  );
}
