import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

import { useEventStore } from "../stores/eventStore";
import { EventCard } from "./shared/EventCard";

const EventsSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const { events, getFilteredEvents } = useEventStore();

  const eventCategories = [
    { name: "All Events", count: events.length },
    { name: "Concerts", count: events.filter(e => e.category === "Concert").length },
    { name: "School Tours", count: events.filter(e => e.category === "School Tour").length },
    { name: "Community Drives", count: events.filter(e => e.category === "Community Drive").length },
    { name: "Tours & Travel", count: events.filter(e => e.category === "Tours & Travel").length }
  ];

  const filteredEvents = useMemo(() => {
    return getFilteredEvents(selectedCategory);
  }, [selectedCategory, getFilteredEvents]);

  // Get featured event (first event from filtered results or first overall)
  const featuredEvent = filteredEvents.length > 0 ? filteredEvents[0] : events[0];
  const otherEvents = filteredEvents.length > 1 ? filteredEvents.slice(1) : [];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-anton font-bold text-gradient mb-6">
            UPCOMING EVENTS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the hottest events, concerts, and experiences that bring youth culture to life.
          </p>
        </div>

        {/* Event Categories Filter */}
        <div className="flex justify-center mb-12">
          <ToggleGroup 
            type="single" 
            value={selectedCategory} 
            onValueChange={(value) => value && setSelectedCategory(value)}
            className="flex flex-wrap gap-2 p-1 bg-muted/30 rounded-lg border"
          >
            {eventCategories.map((category) => (
              <ToggleGroupItem
                key={category.name}
                value={category.name}
                variant="outline"
                className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-medium"
              >
                {category.name} ({category.count})
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 p-8 hover-lift">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-accent text-primary-foreground rounded-full text-sm font-semibold mb-4 transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-default transform hover:-translate-y-0.5 hover:scale-[1.02]">
                  FEATURED EVENT
                </div>
                <h3 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
                  {featuredEvent.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {featuredEvent.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-foreground">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>{featuredEvent.attendees} Expected</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => navigate(`/events/${featuredEvent.id}/book`)}
                  >
                    Get Tickets
                  </Button>
                  {/* <Button variant="outline" size="lg">
                   <Link to={`/events/${featuredEvent.id}`}> Learn More </Link>
                  </Button> */}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-80 object-cover rounded-xl shadow-neon"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-default transform hover:-translate-y-0.5 hover:scale-[1.02]">
                  {featuredEvent.category}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Events Grid */}
        {otherEvents.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {otherEvents.map((event) => (
            <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* No Events Message */}
        {selectedCategory !== "All Events" && filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              No events found for "{selectedCategory}"
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory("All Events")}
            >
              View All Events
            </Button>
          </div>
        )}

        {/* View All Events CTA */}
        <div className="text-center">
          <Link to="/events">
            <Button variant="gradient" size="xl" className="pulse-glow">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
