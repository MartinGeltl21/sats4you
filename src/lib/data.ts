export type Product = {
  id: string;
  name: string;
  priceRange: string;
  tagline: string;
  description: string;
  items: string[];
  cta: string;
  badge?: string;
  highlight?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Occasion = {
  label: string;
  emoji: string;
  category: 'familie' | 'beruf' | 'feste';
};

export type Testimonial = {
  quote: string;
  name: string;
  title?: string;
  location: string;
  avatar: string;
};

export const products: Product[] = [
  {
    id: 'starter',
    name: 'Sats Starter',
    priceRange: '29–49 €',
    tagline: 'Der perfekte Einstieg',
    description: 'Für alle, die Bitcoin noch nicht kennen. Einfach, verständlich, schön.',
    items: [
      'Bitcoin-Gutschein',
      'Erklär-Booklet',
      'Personalisierte Grußkarte',
      'Sats4You Sticker',
    ],
    cta: 'Vorbestellen',
  },
  {
    id: 'orange-pill',
    name: 'Orange Pill Box',
    priceRange: '69–99 €',
    tagline: 'Für echte Überzeugungstäter',
    description: 'Die Box, die Bitcoin wirklich erklärt — und begeistert.',
    items: [
      'Bitcoin-Gutschein',
      'Bitcoin-Buch (kuratiert)',
      'Premium-Verpackung',
      'Bitcoin-Deko-Münze',
      'Personalisierte Grußkarte',
    ],
    cta: 'Vorbestellen',
    badge: 'Bestseller',
    highlight: true,
  },
  {
    id: 'sovereignty',
    name: 'Sovereignty Box',
    priceRange: '249–399 €',
    tagline: 'Für maximale Selbstbestimmung',
    description: 'Das ultimative Bitcoin-Geschenk für Menschen, die es ernst nehmen.',
    items: [
      'Bitcoin-Gutschein',
      'Hardware Wallet (BitBox02 oder Jade)',
      'Seedor Backup-Lösung',
      'Schritt-für-Schritt-Anleitung',
      'Bitcoin-Buch',
      'Premium-Verpackung',
    ],
    cta: 'Vorbestellen',
  },
  {
    id: 'corporate',
    name: 'Corporate Box',
    priceRange: 'Preis auf Anfrage',
    tagline: 'Für Unternehmen',
    description:
      'Maßgeschneidert für Firmen, die Mitarbeiter und Kunden wirklich überraschen wollen.',
    items: [
      'Custom Branding & Logo',
      'Bulk-Bestellungen ab 10 Stück',
      'Persönliche Beratung',
      'Individuelle Inhalte',
      'Eigene Grußkarten',
    ],
    cta: 'Anfragen',
  },
];

export const productTooltips: Record<string, string> = {
  'Hardware Wallet (BitBox02 oder Jade)':
    'Ein physisches Gerät, das Bitcoin offline sichert — der sicherste Weg zur Selbstverwahrung.',
  'Seedor Backup-Lösung':
    'Stahlplatte zum Eingravieren des Seed-Phrases — feuerfest und wasserdicht.',
  'Custom Branding & Logo':
    'Wir passen Verpackung und Karte komplett an euer Corporate Design an.',
  'Bulk-Bestellungen ab 10 Stück':
    'Staffelpreise ab 10 Einheiten. Je mehr, desto günstiger.',
};

export const faqItems: FaqItem[] = [
  {
    question: 'Muss ich Bitcoin verstehen, um eine Box zu verschenken?',
    answer:
      'Nein, das ist der Punkt. Wir erklären alles im Booklet — Schritt für Schritt, verständlich und ohne technischen Jargon. Du schenkst Begeisterung, wir liefern das Wissen dazu.',
  },
  {
    question: 'Wie funktioniert der Bitcoin-Gutschein?',
    answer:
      'Über lizenzierte Partner wie 21bitcoin oder Confinity. Die Gutscheine sind sicher, reguliert und einfach einlösbar — auch für Menschen, die Bitcoin noch nie berührt haben.',
  },
  {
    question: 'Kann ich eine Box personalisieren?',
    answer:
      'Ja — jede Box enthält eine personalisierte Grußkarte mit deiner Nachricht. Höhere Stufen wie die Sovereignty Box und Corporate Box bieten noch mehr individuelle Optionen.',
  },
  {
    question: 'Liefert ihr auch ins Ausland?',
    answer:
      'Aktuell liefern wir nach Deutschland und Österreich. Weitere Länder folgen in Kürze. Falls du Interesse an einer Lieferung ins EU-Ausland hast, kontaktiere uns gerne.',
  },
  {
    question: 'Ist das sicher und legal?',
    answer:
      'Ja, vollständig. Wir verkaufen kein Bitcoin — wir sind ein Geschenkdienstleister. Die enthaltenen Gutscheine stammen von lizenzierten, regulierten Partnern mit BaFin-Aufsicht.',
  },
];

export const occasions: Occasion[] = [
  { label: 'Geburtstag', emoji: '🎂', category: 'familie' },
  { label: 'Hochzeit', emoji: '💍', category: 'familie' },
  { label: 'Geburt', emoji: '👶', category: 'familie' },
  { label: 'Valentinstag', emoji: '❤️', category: 'familie' },
  { label: 'Taufe', emoji: '🕊️', category: 'familie' },
  { label: 'Ruhestand', emoji: '🏖️', category: 'familie' },
  { label: 'Firmenjubiläum', emoji: '🏢', category: 'beruf' },
  { label: 'Beförderung', emoji: '🚀', category: 'beruf' },
  { label: 'Teamgeschenk', emoji: '🤝', category: 'beruf' },
  { label: 'Mitarbeiter-Onboarding', emoji: '🎯', category: 'beruf' },
  { label: 'Weihnachten', emoji: '🎄', category: 'feste' },
  { label: 'Ostern', emoji: '🐣', category: 'feste' },
  { label: 'Silvester', emoji: '🎆', category: 'feste' },
  { label: 'Muttertag', emoji: '🌸', category: 'feste' },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Ich habe meinem Mann zum Geburtstag eine Bitcoin-Box geschenkt — er war komplett aus dem Häuschen. Die Verpackung war wunderschön und die Anleitung so einfach, dass er sofort loslegen konnte.',
    name: 'Laura M.',
    location: 'München',
    avatar: 'https://i.pravatar.cc/500?img=47',
  },
  {
    quote:
      'Endlich ein Geschenk, das nicht im Schrank verstaubt. Mein Vater hat Bitcoin seit Jahren im Blick, aber nie den Einstieg gewagt. Mit der Box hat er es einfach gemacht — danke Sats4You!',
    name: 'Tobias R.',
    location: 'Berlin',
    avatar: 'https://i.pravatar.cc/500?img=12',
  },
  {
    quote:
      'Wir haben für das gesamte Team Bitcoin-Boxen zum Jahresabschluss verschenkt. Die Reaktionen waren überwältigend. Schnelle Lieferung, professionelle Aufmachung, absolute Weiterempfehlung.',
    name: 'Sandra K.',
    title: 'HR-Leiterin',
    location: 'Frankfurt',
    avatar: 'https://i.pravatar.cc/500?img=32',
  },
  {
    quote:
      'Als Hochzeitsgeschenk war das eine Sensation. Das Brautpaar hatte schon alles — aber Bitcoin hatten sie noch nicht. Heute sagen sie, es war das beste Geschenk auf der ganzen Feier.',
    name: 'Markus W.',
    location: 'Hamburg',
    avatar: 'https://i.pravatar.cc/500?img=15',
  },
];
