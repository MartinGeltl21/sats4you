import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import VideoBackground from './components/VideoBackground';
import CompanyMarquee from './components/sections/CompanyMarquee';
import HowItWorks from './components/sections/HowItWorks';
import Products from './components/sections/Products';
import Occasions from './components/sections/Occasions';
import Testimonials from './components/sections/Testimonials';
import B2B from './components/sections/B2B';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden">
      <div className="relative">
        <VideoBackground />
        <Navigation />
        <HeroSection />
      </div>
      <CompanyMarquee />
      <HowItWorks />
      <Products />
      <Occasions />
      <Testimonials />
      <B2B />
      <FAQ />
      <Footer />
      <Toaster />
    </div>
  );
}
