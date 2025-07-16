import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialsImage from "@/assets/testimonials.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mercy Wanjiku",
      role: "Student, University of Nairobi",
      content: "Seroxide Entertainment brought so much energy to our campus! The concert was absolutely incredible and the whole event was perfectly organized. Can't wait for the next one!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b93c?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "David Kiprotich",
      role: "Events Manager, Strathmore University",
      content: "Professional, creative, and truly understanding of youth culture. Seroxide delivered beyond our expectations for our annual fest. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Faith Achieng",
      role: "Marketing Director, Coca-Cola Kenya",
      content: "Our brand activation with Seroxide was a huge success! They know how to connect with the youth market authentically. The engagement was phenomenal.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Brian Mutua",
      role: "Student, KICD College",
      content: "The school tour was so inspiring! The speakers were relatable and the entertainment was top-notch. It motivated me to pursue my dreams with more passion.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Grace Njeri",
      role: "Principal, Nairobi High School",
      content: "Seroxide Entertainment provided exactly what our students needed - entertainment that educates and inspires. Professional team with great values.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Kevin Otieno",
      role: "Youth Leader, Kibera",
      content: "These guys are real! They understand the streets and still bring class to every event. Seroxide is changing the game in youth entertainment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={testimonialsImage} 
          alt="Happy youth" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-anton font-bold text-gradient mb-6">
            WHAT PEOPLE SAY
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the students, institutions, and brands 
            who've experienced the Seroxide difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-anton font-bold text-gradient mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-anton font-bold text-gradient mb-2">500+</div>
            <p className="text-muted-foreground">Events Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-anton font-bold text-gradient mb-2">50K+</div>
            <p className="text-muted-foreground">Happy Attendees</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-anton font-bold text-gradient mb-2">200+</div>
            <p className="text-muted-foreground">Institutions Served</p>
          </div>
        </div>

        {/* Testimonials Continuous Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll-horizontal">
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex-shrink-0 w-96 hover-lift card-shadow bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial) => (
              <Card key={`${testimonial.id}-duplicate`} className="flex-shrink-0 w-96 hover-lift card-shadow bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's create an unforgettable experience together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-glow px-8 py-3 rounded-lg font-semibold text-white hover-scale">
              Book Your Event
            </button>
            <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 hover-scale">
              View More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;