import Navigation from "@/components/Navigation";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Events;