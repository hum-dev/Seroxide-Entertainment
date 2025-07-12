import { useState, useEffect } from "react";
import { Play, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/homepage.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Turning Moments Into Memories",
      subtitle: "Kenya's Premier Youth Entertainment Experience",
      description: "From school tours to epic concerts, we create unforgettable experiences that connect with the youth culture.",
      image: heroImage,
      stats: { events: "500+", attendees: "50K+", schools: "200+" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[currentSlide].image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/70 via-dark-navy/50 to-dark-navy/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl float-animation"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-accent/10 blur-xl float-animation" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-vibrant-pink/10 blur-xl float-animation" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="font-anton text-6xl md:text-8xl font-black text-white mb-6 slide-up">
            <span className="text-gradient block">SEROXIDE</span>
            <span className="text-white text-4xl md:text-5xl block mt-2">ENTERTAINMENT</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-white/90 mb-4 font-montserrat font-semibold fade-in-up" style={{ animationDelay: "0.3s" }}>
            {slides[currentSlide].title}
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 font-poppins fade-in-up" style={{ animationDelay: "0.6s" }}>
            {slides[currentSlide].subtitle}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: "0.9s" }}>
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16 fade-in-up" style={{ animationDelay: "1.2s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: "1.5s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-anton text-gradient font-bold">
                {slides[currentSlide].stats.events}
              </div>
              <div className="text-white/70 font-poppins">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-anton text-gradient font-bold">
                {slides[currentSlide].stats.attendees}
              </div>
              <div className="text-white/70 font-poppins">Happy Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-anton text-gradient font-bold">
                {slides[currentSlide].stats.schools}
              </div>
              <div className="text-white/70 font-poppins">Schools Visited</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;