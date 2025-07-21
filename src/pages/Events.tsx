import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { Calendar, MapPin, Users, Clock, Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import schoolTourImage from "@/assets/school-tour.jpg";
import djSetupImage from "@/assets/dj-setup.jpg";
import heroConcertImage from "@/assets/festivalconcerts.jpg";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState("grid");

  // Expanded events data for the dedicated events page
  const allEvents = useMemo(() => [
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
      status: "featured",
      price: "KSH 1,500",
      organizer: "Kenya Youth Entertainment",
      tags: ["music", "youth", "outdoor", "festival"]
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
      status: "upcoming",
      price: "Free",
      organizer: "Strathmore Entertainment Society",
      tags: ["education", "students", "campus", "interactive"]
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
      status: "upcoming",
      price: "Free",
      organizer: "Safaricom PLC",
      tags: ["brand", "interactive", "games", "technology"]
    },
    {
      id: 4,
      title: "Kenyatta University Freshers' Night",
      date: "April 2, 2024",
      time: "7:00 PM - 12:00 AM",
      location: "Kenyatta University",
      attendees: "1,500+",
      image: heroConcertImage,
      category: "School Tour",
      description: "Welcome new students with an unforgettable night of music and entertainment.",
      status: "upcoming",
      price: "KSH 800",
      organizer: "KU Students Association",
      tags: ["students", "freshers", "night", "welcome"]
    },
    {
      id: 5,
      title: "Coca-Cola Taste The Feeling Tour",
      date: "April 8, 2024",
      time: "2:00 PM - 9:00 PM",
      location: "Sarit Centre",
      attendees: "800+",
      image: djSetupImage,
      category: "Brand Activation",
      description: "Experience the joy of Coca-Cola with music, prizes, and refreshments.",
      status: "upcoming",
      price: "Free",
      organizer: "Coca-Cola Kenya",
      tags: ["brand", "refreshments", "prizes", "family"]
    },
    {
      id: 6,
      title: "Nairobi Music Week Finale",
      date: "April 15, 2024",
      time: "5:00 PM - 2:00 AM",
      location: "KICC Grounds",
      attendees: "5,000+",
      image: heroConcertImage,
      category: "Concert",
      description: "The grand finale of Nairobi Music Week featuring international and local artists.",
      status: "upcoming",
      price: "KSH 2,500",
      organizer: "Nairobi Music Week",
      tags: ["music", "international", "artists", "finale"]
    },
    {
      id: 7,
      title: "USIU Campus Fest",
      date: "April 22, 2024",
      time: "11:00 AM - 6:00 PM",
      location: "USIU-Africa Campus",
      attendees: "700+",
      image: schoolTourImage,
      category: "School Tour",
      description: "A day-long festival celebrating campus culture with music, food, and activities.",
      status: "upcoming",
      price: "KSH 600",
      organizer: "USIU Entertainment Club",
      tags: ["campus", "festival", "food", "activities"]
    },
    {
      id: 8,
      title: "Samsung Galaxy Experience",
      date: "May 1, 2024",
      time: "10:00 AM - 7:00 PM",
      location: "Village Market",
      attendees: "600+",
      image: djSetupImage,
      category: "Brand Activation",
      description: "Discover the latest Samsung Galaxy features with interactive demos and entertainment.",
      status: "upcoming",
      price: "Free",
      organizer: "Samsung Kenya",
      tags: ["technology", "demos", "interactive", "innovation"]
    }
  ], []);

  const eventCategories = [
    { name: "All Events", count: allEvents.length },
    { name: "Concerts", count: allEvents.filter(e => e.category === "Concert").length },
    { name: "School Tours", count: allEvents.filter(e => e.category === "School Tour").length },
    { name: "Brand Activations", count: allEvents.filter(e => e.category === "Brand Activation").length }
  ];

  // Filter and search events
  const filteredEvents = useMemo(() => {
    let filtered = allEvents;

    // Filter by category
    if (selectedCategory !== "All Events") {
      const categoryMap = {
        "Concerts": "Concert",
        "School Tours": "School Tour", 
        "Brand Activations": "Brand Activation"
      };
      filtered = filtered.filter(event => 
        event.category === categoryMap[selectedCategory as keyof typeof categoryMap]
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort events
    filtered.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === "attendees") {
        return parseInt(b.attendees) - parseInt(a.attendees);
      } else if (sortBy === "price") {
        const aPrice = a.price === "Free" ? 0 : parseInt(a.price.replace(/\D/g, ""));
        const bPrice = b.price === "Free" ? 0 : parseInt(b.price.replace(/\D/g, ""));
        return aPrice - bPrice;
      }
      return 0;
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, allEvents]);

  const EventCard = ({ event, isListView = false }: { event: typeof allEvents[0], isListView?: boolean }) => (
    <Card className={`hover-lift overflow-hidden card-shadow ${isListView ? 'mb-4' : ''}`}>
      <div className={isListView ? "flex" : ""}>
        <div className={`relative ${isListView ? 'w-80 flex-shrink-0' : ''}`}>
          <img
            src={event.image}
            alt={event.title}
            className={`object-cover ${isListView ? 'w-full h-48' : 'w-full h-48'}`}
          />
          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {event.category}
          </div>
          {event.status === "featured" && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              FEATURED
            </div>
          )}
        </div>
        
        <div className={isListView ? 'flex-1' : ''}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="font-montserrat">{event.title}</CardTitle>
              <Badge variant={event.price === "Free" ? "secondary" : "default"}>
                {event.price}
              </Badge>
            </div>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className={`${isListView ? 'grid grid-cols-2 gap-4' : 'space-y-2'} mb-4`}>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                <span>{event.time}</span>
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

            {isListView && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Organizer:</strong> {event.organizer}
                </p>
                <div className="flex flex-wrap gap-1">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button 
                variant="default" 
                className="flex-1"
                onClick={() => window.location.href = `/events/${event.id}/book`}
              >
                {event.price === "Free" ? "Register Free" : "Get Tickets"}
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = `/events/${event.id}/book`}
              >
                Book Event
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-anton font-bold text-gradient mb-6">
              ALL EVENTS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover all upcoming events, concerts, school tours, and brand activations. Find your next amazing experience.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events, locations, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex justify-center">
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

            {/* Sort and View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date</SelectItem>
                      <SelectItem value="attendees">Popularity</SelectItem>
                      <SelectItem value="price">Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">View:</span>
                <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value)}>
                  <ToggleGroupItem value="grid" variant="outline">
                    <Grid className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" variant="outline">
                    <List className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredEvents.length} of {allEvents.length} events
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All Events" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Events Display */}
          {filteredEvents.length > 0 ? (
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} isListView={viewMode === "list"} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No events found matching your criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory("All Events");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
            <h3 className="text-2xl font-anton font-bold mb-4">Want to host an event?</h3>
            <p className="text-muted-foreground mb-6">
              Partner with us to create unforgettable experiences for your audience.
            </p>
            <Button variant="hero" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;