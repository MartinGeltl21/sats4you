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

function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

export default function Navigation() {
  const active = useActiveSection(MENU_ITEMS.map((i) => i.href.slice(1)));
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`flex justify-between items-center px-6 sm:px-8 max-w-7xl mx-auto transition-all duration-300 ease-out ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
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
                  className={`transition-colors duration-300 hover:text-black ${
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
          className="bg-black text-white rounded-full px-6 py-2.5 text-sm transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          Jetzt schenken
        </a>
      </div>
    </nav>
  );
}
