import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Event } from "@/types/events";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
  isListView?: boolean;
  showFullDetails?: boolean;
}

export const EventCard = ({ event, isListView = false, showFullDetails = false }: EventCardProps) => (
  <Card className={`hover-lift overflow-hidden card-shadow ${isListView ? 'mb-4' : ''}`}>
    <div className={isListView ? "flex" : ""}>
      <div className={`relative ${isListView ? 'w-80 flex-shrink-0' : ''}`}>
        <img
          src={event.image}
          alt={event.title}
          className={`object-cover ${isListView ? 'w-full h-48' : 'w-full h-48'}`}
        />
        <div className="absolute top-4 left-4 bg-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-default transform hover:-translate-y-0.5 hover:scale-[1.02]">
          {event.category}
        </div>
        {event.status === "featured" && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 hover:bg-accent hover:text-accent-foreground cursor-default transform hover:-translate-y-0.5 hover:scale-[1.02]">
            FEATURED
          </div>
        )}
      </div>
      
      <div className={isListView ? 'flex-1' : ''}>
        <CardHeader>
          <h3 className="text-xl font-bold">{event.title}</h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-4">
            {event.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-foreground">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-foreground">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-foreground">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-foreground">
              <Users className="mr-2 h-5 w-5 text-primary" />
              <span>{event.attendees}</span>
            </div>
          </div>

          {showFullDetails && event.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            {event.status !== "Past" && (
              <Button asChild variant="gradient">
                <Link to={`/events/${event.id.toString()}/book`}>Get Tickets</Link>
              </Button>
            )}
            {/* <Button asChild variant="outline">
              <Link to={`/events/${event.id.toString()}`}>Learn More</Link>
            </Button> */}
          </div>
        </CardContent>
      </div>
    </div>
  </Card>
);