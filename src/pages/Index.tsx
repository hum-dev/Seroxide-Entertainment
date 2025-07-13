import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EventsSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;