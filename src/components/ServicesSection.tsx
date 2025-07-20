import { 
  Mic, 
  Music, 
  Lightbulb, 
  Users,
  PartyPopper,
  Dumbbell,
  Drama,
  Megaphone,
  ArrowRight,
  Star,
  Camera,
  Crown,
  PaintBucket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ServicesSection = () => {
  const { toast } = useToast();

  const handleGetQuote = (serviceName: string) => {
    // Create WhatsApp message
    const message = `Hi! I'm interested in getting a quote for your ${serviceName} service. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show toast confirmation
    toast({
      title: "Quote Request Sent!",
      description: `We'll get back to you about ${serviceName} shortly.`,
    });
  };

  const handleFreeConsultation = () => {
    // Create WhatsApp message for consultation
    const message = `Hi! I'd like to schedule a free consultation to discuss my event needs. When would be a good time to talk?`;
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show toast confirmation
    toast({
      title: "Consultation Request Sent!",
      description: "We'll contact you shortly to schedule your free consultation.",
    });
  };

  const handleViewPortfolio = () => {
    // Navigate to gallery section on same page or create a portfolio modal
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Portfolio",
        description: "Check out our gallery below to see our previous work!",
      });
    } else {
      // Fallback: create a simple portfolio modal or external link
      toast({
        title: "Portfolio Coming Soon",
        description: "Our detailed portfolio page is under development. Check our gallery section for now!",
      });
    }
  };

  const services = [
    {
      id: 1,
      title: "MC/Hype Man",
      description: "Energetic and engaging hosts to keep your event lively and interactive.",
      icon: Mic,
      features: ["Professional Hosting", "Crowd Engagement", "Event Flow Management", "Energy & Entertainment"],
      price: "From KSh 15,000",
      popular: false,
      color: "bg-cyan-500"
    },
    {
      id: 2,
      title: "Deejay Services",
      description: "Skilled DJs with curated playlists tailored for weddings, parties, corporate events, and more.",
      icon: Music,
      features: ["Custom Playlists", "Professional Equipment", "Mixing & Scratching", "Event-Specific Music"],
      price: "From KSh 20,000",
      popular: true,
      color: "bg-blue-600"
    },
    {
      id: 3,
      title: "Stage, Sound & Lighting",
      description: "Quality equipment and setup to ensure your event looks and sounds professional.",
      icon: Lightbulb,
      features: ["Professional Audio Systems", "Stage Setup", "LED Lighting", "Technical Support"],
      price: "From KSh 50,000",
      popular: false,
      color: "bg-pink-500"
    },
    {
      id: 4,
      title: "Dance Classes",
      description: "Group or individual sessions in various dance styles — perfect for talent development or fitness.",
      icon: Users,
      features: ["Group Sessions", "Individual Training", "Various Dance Styles", "Talent Development"],
      price: "From KSh 5,000",
      popular: false,
      color: "bg-yellow-500"
    },
    {
      id: 5,
      title: "Event Hosting",
      description: "Professional planning and coordination for seamless event experiences.",
      icon: PartyPopper,
      features: ["Event Planning", "Coordination", "Vendor Management", "Timeline Management"],
      price: "From KSh 30,000",
      popular: false,
      color: "bg-yellow-400"
    },
    {
      id: 6,
      title: "Team Building",
      description: "Fun, customized activities that help build strong, collaborative teams.",
      icon: Users,
      features: ["Team Activities", "Leadership Building", "Collaboration Exercises", "Corporate Programs"],
      price: "From KSh 25,000",
      popular: false,
      color: "bg-cyan-400"
    },
    {
      id: 7,
      title: "Zumba & Aerobics",
      description: "High-energy fitness sessions ideal for schools, companies, and wellness events.",
      icon: Dumbbell,
      features: ["Fitness Sessions", "Group Classes", "Health & Wellness", "Energizing Workouts"],
      price: "From KSh 8,000",
      popular: false,
      color: "bg-blue-500"
    },
    {
      id: 8,
      title: "Drama & Acting Training",
      description: "Creative programs to help participants build confidence, expression, and performance skills.",
      icon: Drama,
      features: ["Acting Workshops", "Confidence Building", "Performance Skills", "Creative Expression"],
      price: "From KSh 12,000",
      popular: false,
      color: "bg-pink-600"
    },
    {
      id: 9,
      title: "Marketing & Promotions",
      description: "Support with promoting your events or brand through strategic and creative approaches.",
      icon: Megaphone,
      features: ["Event Promotion", "Brand Marketing", "Social Media", "Creative Campaigns"],
      price: "From KSh 35,000",
      popular: false,
      color: "bg-cyan-500"
    },
    {
      id: 10,
      title: "Mascot & Clown Acts",
      description: "Ideal for kids' parties, school events, and public gatherings — adds fun and excitement.",
      icon: Crown,
      features: ["Character Entertainment", "Children's Shows", "Interactive Performances", "Fun Activities"],
      price: "From KSh 10,000",
      popular: false,
      color: "bg-yellow-400"
    },
    {
      id: 11,
      title: "Artists & Bands",
      description: "Live music and performances from talented acts to suit any occasion.",
      icon: Music,
      features: ["Live Performances", "Various Genres", "Professional Musicians", "Custom Setlists"],
      price: "From KSh 40,000",
      popular: false,
      color: "bg-pink-500"
    },
    {
      id: 12,
      title: "Professional Dancers & Models",
      description: "Book experienced dancers and models for events, ads, music videos, and brand campaigns.",
      icon: Users,
      features: ["Professional Dancers", "Event Models", "Music Videos", "Brand Campaigns"],
      price: "From KSh 18,000",
      popular: false,
      color: "bg-blue-600"
    },
    {
      id: 13,
      title: "Photography, Videography & Drone Coverage",
      description: "Full media coverage for your event — from on-the-ground shots to aerial views.",
      icon: Camera,
      features: ["Professional Photography", "Videography", "Drone Coverage", "Full Event Documentation"],
      price: "From KSh 45,000",
      popular: false,
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-anton font-bold text-gradient mb-6">
            OUR SERVICES
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From school tours to epic concerts, we provide comprehensive entertainment services 
            that resonate with Kenya's dynamic youth culture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`relative overflow-hidden hover-lift card-shadow ${
                service.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold flex items-center">
                  <Star className="mr-1 h-4 w-4" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-lg ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-montserrat text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center border-t pt-4">
                  <div className="text-2xl font-anton font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button 
                    variant={service.popular ? "hero" : "outline"} 
                    className="w-full group"
                    onClick={() => handleGetQuote(service.title)}
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-anton font-bold mb-4">How We Work</h3>
            <p className="text-muted-foreground">Our simple 4-step process to create memorable experiences</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision and requirements" },
              { step: "02", title: "Planning", desc: "Custom event planning tailored to your needs" },
              { step: "03", title: "Execution", desc: "Professional delivery on the day of your event" },
              { step: "04", title: "Follow-up", desc: "Post-event support and feedback collection" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary text-white flex items-center justify-center text-xl font-anton font-bold mb-4">
                  {process.step}
                </div>
                <h4 className="font-montserrat font-semibold text-lg mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-anton font-bold mb-4">Ready to Create Something Amazing?</h3>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can bring your vision to life with our professional entertainment services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={handleFreeConsultation}>
              Get Free Consultation
            </Button>
            <Button variant="outline" size="xl" onClick={handleViewPortfolio}>
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;