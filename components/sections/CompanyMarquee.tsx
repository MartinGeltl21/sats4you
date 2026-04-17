import {
  SiTesla,
  SiCashapp,
  SiCoinbase,
  SiBinance,
  SiOkx,
  SiStripe,
  SiPaypal,
  SiShopify,
  SiMicrostrategy,
  SiNvidia,
  SiSpotify,
  SiX,
} from "react-icons/si";
import { Marquee } from "@/components/ui/marquee";

const logos = [
  { Icon: SiTesla, alt: "Tesla" },
  { Icon: SiMicrostrategy, alt: "MicroStrategy" },
  { Icon: SiCoinbase, alt: "Coinbase" },
  { Icon: SiBinance, alt: "Binance" },
  { Icon: SiOkx, alt: "OKX" },
  { Icon: SiCashapp, alt: "Cash App" },
  { Icon: SiStripe, alt: "Stripe" },
  { Icon: SiPaypal, alt: "PayPal" },
  { Icon: SiShopify, alt: "Shopify" },
  { Icon: SiNvidia, alt: "Nvidia" },
  { Icon: SiSpotify, alt: "Spotify" },
  { Icon: SiX, alt: "X" },
];

export function CompanyMarquee() {
  return (
    <div className="w-full">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
        Vertrauen aus Tech &amp; Bitcoin
      </p>
      <Marquee speed={45}>
        {logos.map(({ Icon, alt }) => (
          <div
            key={alt}
            className="flex items-center justify-center mx-8 sm:mx-12"
            aria-label={alt}
          >
            <Icon
              className="h-7 sm:h-9 w-auto text-white/50 hover:text-white/90 transition-colors duration-300"
              size={36}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
