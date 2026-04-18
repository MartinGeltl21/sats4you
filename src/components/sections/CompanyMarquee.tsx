import {
  SiTesla,
  SiCashapp,
  SiCoinbase,
  SiBinance,
  SiStripe,
  SiPaypal,
  SiShopify,
  SiNvidia,
  SiSpotify,
  SiX,
} from 'react-icons/si';
import { Marquee } from '@/components/ui/marquee';

const LOGOS = [
  { Icon: SiTesla, alt: 'Tesla' },
  { Icon: SiCoinbase, alt: 'Coinbase' },
  { Icon: SiBinance, alt: 'Binance' },
  { Icon: SiCashapp, alt: 'Cash App' },
  { Icon: SiStripe, alt: 'Stripe' },
  { Icon: SiPaypal, alt: 'PayPal' },
  { Icon: SiShopify, alt: 'Shopify' },
  { Icon: SiNvidia, alt: 'Nvidia' },
  { Icon: SiSpotify, alt: 'Spotify' },
  { Icon: SiX, alt: 'X' },
];

export default function CompanyMarquee() {
  return (
    <section
      aria-label="Vertrauen aus Tech und Bitcoin"
      className="relative z-10 bg-white py-16 md:py-20 px-6 border-t border-black/5"
    >
      <p className="text-center font-sans text-xs uppercase tracking-[0.25em] text-[#6F6F6F] mb-8">
        Vertrauen aus Tech &amp; Bitcoin
      </p>
      <Marquee speed={45} fadeColor="#FFFFFF">
        {LOGOS.map(({ Icon, alt }) => (
          <div
            key={alt}
            className="flex items-center justify-center mx-10 sm:mx-14"
            aria-label={alt}
          >
            <Icon className="h-7 sm:h-8 w-auto text-black/40 hover:text-black transition-colors duration-300" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
