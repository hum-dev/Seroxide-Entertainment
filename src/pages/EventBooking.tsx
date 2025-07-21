import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import event images
import heroImage from "@/assets/homepage.jpg";
import schoolTourImage from "@/assets/school-tour.jpg";
import djSetupImage from "@/assets/dj-setup.jpg";

const EventBooking = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [ticketQuantity, setTicketQuantity] = useState(1);

  // Sample event data (in a real app, this would come from your backend)
  const events = [
    {
      id: "1",
      title: "Summer Music Festival 2024",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "Nairobi National Stadium",
      attendees: "5,000+",
      image: heroImage,
      category: "Concert",
      description: "The biggest music festival featuring top local and international artists with amazing sound and lighting.",
      price: 2500,
      rating: 4.8,
      reviews: 156
    },
    {
      id: "2",
      title: "University Campus Tour & Entertainment",
      date: "March 22, 2024",
      time: "10:00 AM",
      location: "University of Nairobi",
      attendees: "500+",
      image: schoolTourImage,
      category: "School Tour",
      description: "Educational tour with entertainment, music, and interactive activities for students.",
      price: 1500,
      rating: 4.9,
      reviews: 89
    },
    {
      id: "3",
      title: "Brand Launch Party",
      date: "March 28, 2024",
      time: "6:00 PM",
      location: "KICC, Nairobi",
      attendees: "300+",
      image: djSetupImage,
      category: "Brand Activation",
      description: "Interactive brand experience with music, games, and entertainment.",
      price: 3000,
      rating: 4.7,
      reviews: 43
    },
    {
      id: "4",
      title: "Coastal Adventure Tour",
      date: "April 5-7, 2024",
      time: "3 Days",
      location: "Mombasa & Diani Beach",
      attendees: "50+",
      image: schoolTourImage,
      category: "Tours & Travel",
      description: "Experience the beautiful Kenyan coast with entertainment, activities, and cultural experiences.",
      price: 15000,
      rating: 4.9,
      reviews: 67
    },
    {
      id: "5",
      title: "Mount Kenya Hiking Adventure",
      date: "April 12-14, 2024",
      time: "3 Days/2 Nights",
      location: "Mount Kenya National Park",
      attendees: "30+",
      image: djSetupImage,
      category: "Tours & Travel",
      description: "Adventure hiking trip with entertainment nights and team building activities.",
      price: 12000,
      rating: 4.8,
      reviews: 34
    },
    {
      id: "6",
      title: "Maasai Mara Cultural Safari",
      date: "April 20-22, 2024",
      time: "3 Days/2 Nights",
      location: "Maasai Mara Game Reserve",
      attendees: "40+",
      image: schoolTourImage,
      category: "Tours & Travel",
      description: "Wildlife safari combined with cultural entertainment and traditional Maasai performances.",
      price: 18000,
      rating: 5.0,
      reviews: 78
    }
  ];

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <Button onClick={() => navigate("/events")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = event.price * ticketQuantity;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Event Details */}
            <div>
              <div className="relative mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-80 object-cover rounded-xl shadow-neon"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {event.category}
                </Badge>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-anton font-bold text-gradient mb-4">
                    {event.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(event.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {event.rating} ({event.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm">Date</p>
                      <p className="font-semibold text-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm">Time</p>
                      <p className="font-semibold text-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm">Location</p>
                      <p className="font-semibold text-foreground">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="mr-3 h-5 w-5" />
                    <div>
                      <p className="text-sm">Attendees</p>
                      <p className="font-semibold text-foreground">{event.attendees}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-anton">Book Your Tickets</CardTitle>
                  <CardDescription>
                    Secure your spot at this amazing event
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <span className="text-lg font-semibold">Price per ticket</span>
                    <span className="text-2xl font-bold text-primary">
                      KSh {event.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Number of Tickets</Label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                        disabled={ticketQuantity <= 1}
                      >
                        -
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        value={ticketQuantity}
                        onChange={(e) => setTicketQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="text-center"
                        min="1"
                        max="10"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTicketQuantity(Math.min(10, ticketQuantity + 1))}
                        disabled={ticketQuantity >= 10}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-primary">
                        KSh {totalPrice.toLocaleString()}
                      </span>
                    </div>
                    <Button className="w-full" size="lg">
                      Proceed to Payment
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    Secure payment powered by M-Pesa and Card payments
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventBooking;