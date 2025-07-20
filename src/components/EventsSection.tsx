import { Calendar, MapPin, Users, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import schoolTourImage from "@/assets/school-tour.jpg";
import djSetupImage from "@/assets/dj-setup.jpg";

const EventsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const upcomingEvents = useMemo(() => [
    {
      id: 1,
      title: "Nairobi Youth Music Festival",
      date: "March 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Uhuru Park, Nairobi",
      attendees: "2,000+",
      image: djSetupImage,
      category: "Concert",
      description: "Join us for the biggest youth music festival in Nairobi featuring top local artists and DJs.",
      status: "featured"
    },
    {
      id: 2,
      title: "Strathmore University Tour",
      date: "March 20, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Strathmore University",
      attendees: "500+",
      image: schoolTourImage,
      category: "School Tour",
      description: "Educational entertainment experience connecting with university students.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Brand Activation - Safaricom",
      date: "March 25, 2024",
      time: "3:00 PM - 8:00 PM",
      location: "Westgate Mall",
      attendees: "1,000+",
      image: djSetupImage,
      category: "Brand Activation",
      description: "Interactive brand experience with music, games, and entertainment.",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Coastal Adventure Tour",
      date: "April 5-7, 2024",
      time: "3 Days",
      location: "Mombasa & Diani Beach",
      attendees: "50+",
      image: schoolTourImage,
      category: "Tours & Travel",
      description: "Experience the beautiful Kenyan coast with entertainment, activities, and cultural experiences.",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Mount Kenya Hiking Adventure",
      date: "April 12-14, 2024",
      time: "3 Days/2 Nights",
      location: "Mount Kenya National Park",
      attendees: "30+",
      image: djSetupImage,
      category: "Tours & Travel",
      description: "Adventure hiking trip with entertainment nights and team building activities.",
      status: "upcoming"
    },
    {
      id: 6,
      title: "Maasai Mara Cultural Safari",
      date: "April 20-22, 2024",
      time: "3 Days/2 Nights",
      location: "Maasai Mara Game Reserve",
      attendees: "40+",
      image: schoolTourImage,
      category: "Tours & Travel",
      description: "Wildlife safari combined with cultural entertainment and traditional Maasai performances.",
      status: "upcoming"
    }
  ], []);

  const eventCategories = [
    { name: "All Events", count: 6 },
    { name: "Concerts", count: 1 },
    { name: "School Tours", count: 1 },
    { name: "Brand Activations", count: 1 },
    { name: "Tours & Travel", count: 3 }
  ];

  // Filter events based on selected category
  const filteredEvents = useMemo(() => {
    if (selectedCategory === "All Events") {
      return upcomingEvents;
    }
    
    const categoryMap = {
      "Concerts": "Concert",
      "School Tours": "School Tour", 
      "Brand Activations": "Brand Activation",
      "Tours & Travel": "Tours & Travel"
    };
    
    return upcomingEvents.filter(event => 
      event.category === categoryMap[selectedCategory as keyof typeof categoryMap]
    );
  }, [selectedCategory, upcomingEvents]);

  // Get featured event (first event from filtered results or first overall)
  const featuredEvent = filteredEvents.length > 0 ? filteredEvents[0] : upcomingEvents[0];
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
            Experience the hottest events, concerts, and activations that bring youth culture to life across Kenya.
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
                <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                  FEATURED EVENT
                </div>
                <h3 className="text-3xl md:text-4xl font-anton font-bold text-foreground mb-4">
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
                  <Button variant="hero" size="lg">
                    Get Tickets
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-80 object-cover rounded-xl shadow-neon"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
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
            <Card key={event.id} className="hover-lift overflow-hidden card-shadow">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {event.category}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-montserrat">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{event.attendees} Expected</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full hover-scale">
                  View Details
                </Button>
              </CardContent>
            </Card>
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
