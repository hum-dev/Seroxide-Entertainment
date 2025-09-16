import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEventStore } from "@/stores/eventStore";
import { EventCard } from "@/components/shared/EventCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();
  
  const { events, getFilteredEvents } = useEventStore();


  const eventCategories = [
    { name: "All Events", count: events.length },
    { name: "Concerts", count: events.filter(e => e.category === "Concert").length },
    { name: "School Tours", count: events.filter(e => e.category === "School Tour").length },
    { name: "Community Drives", count: events.filter(e => e.category === "Community Drive").length }
  ];



  // Filter and sort events
  const filteredAndSortedEvents = useMemo(() => {
    let filtered = getFilteredEvents(selectedCategory);

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.tags && event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );
    }

    // Sort events
    return [...filtered].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === "attendees") {
        return parseInt(b.attendees) - parseInt(a.attendees);
      } else if (sortBy === "price") {
        const aPrice = a.price === "Free" ? 0 : parseInt((a.price ?? "0").replace(/\D/g, ""));
        const bPrice = b.price === "Free" ? 0 : parseInt((b.price ?? "0").replace(/\D/g, ""));
        return aPrice - bPrice;
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy, getFilteredEvents]);



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
                <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as "grid" | "list")}>
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
              Showing {filteredAndSortedEvents.length} of {events.length} events
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All Events" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Events Display */}
          {filteredAndSortedEvents.length > 0 ? (
            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
              {filteredAndSortedEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isListView={viewMode === "list"}
                  showFullDetails={true}
                />
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