import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
import { Occasions } from "@/components/sections/Occasions";
import { Testimonials } from "@/components/sections/Testimonials";
import { B2B } from "@/components/sections/B2B";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Products />
      <Occasions />
      <Testimonials />
      <B2B />
      <FAQ />
      <Footer />
    </main>
  );
}
