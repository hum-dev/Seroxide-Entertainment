import { 
  GraduationCap, 
  Users, 
  Music, 
  Megaphone,
  ArrowRight,
  Star,
  Building,
  PartyPopper
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "School Tours & Talks",
      description: "Educational entertainment experiences that inspire and motivate students across Kenya's institutions.",
      icon: GraduationCap,
      features: ["Motivational Speaking", "Interactive Shows", "Career Guidance", "Youth Empowerment"],
      price: "From KSh 50,000",
      popular: false,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Brand Activations",
      description: "Creative brand experiences that connect with the youth market through engaging entertainment.",
      icon: Megaphone,
      features: ["Product Launches", "Mall Activations", "Festival Sponsorships", "Digital Campaigns"],
      price: "From KSh 150,000",
      popular: true,
      color: "from-pink-500 to-red-500"
    },
    {
      id: 3,
      title: "Youth Concerts",
      description: "High-energy concerts and music festivals that celebrate Kenya's vibrant youth culture.",
      icon: Music,
      features: ["Artist Management", "Sound Production", "Lighting Design", "Crowd Management"],
      price: "From KSh 200,000",
      popular: false,
      color: "from-green-500 to-blue-500"
    },
    {
      id: 4,
      title: "Corporate Events",
      description: "Plan and manage corporate gatherings and conferences.",
      icon: Building,
      features: ["Conference Planning", "Corporate Gatherings", "Team Building", "Professional Management"],
      price: "From KSh 100,000",
      popular: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Social Events",
      description: "Organize weddings, parties, and other social gatherings.",
      icon: PartyPopper,
      features: ["Wedding Planning", "Birthday Parties", "Anniversary Celebrations", "Family Gatherings"],
      price: "From KSh 75,000",
      popular: false,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Event Management",
      description: "Full-service event planning and management for unforgettable youth experiences.",
      icon: Users,
      features: ["Event Planning", "Venue Coordination", "Vendor Management", "Day-of Coordination"],
      price: "From KSh 100,000",
      popular: false,
      color: "from-indigo-500 to-blue-500"
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
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-neon`}>
                  <service.icon className="h-10 w-10 text-white" />
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
            <Button variant="hero" size="xl">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="xl">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;