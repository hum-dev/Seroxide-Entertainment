import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import schoolTourImage from "@/assets/school-tour.jpg";
import djSetupImage from "@/assets/dj-setup.jpg";

const EventsSection = () => {
  const upcomingEvents = [
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
    }
  ];

  const eventCategories = [
    { name: "All Events", count: 12, active: true },
    { name: "Concerts", count: 5, active: false },
    { name: "School Tours", count: 4, active: false },
    { name: "Brand Activations", count: 3, active: false }
  ];

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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {eventCategories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "hero" : "outline"}
              className="hover-scale"
            >
              {category.name} ({category.count})
            </Button>
          ))}
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
                  {upcomingEvents[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {upcomingEvents[0].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-foreground">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>{upcomingEvents[0].date}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    <span>{upcomingEvents[0].time}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <span>{upcomingEvents[0].location}</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>{upcomingEvents[0].attendees} Expected</span>
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
                  src={upcomingEvents[0].image}
                  alt={upcomingEvents[0].title}
                  className="w-full h-80 object-cover rounded-xl shadow-neon"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {upcomingEvents[0].category}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.slice(1).map((event) => (
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

        {/* View All Events CTA */}
        <div className="text-center mt-16">
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