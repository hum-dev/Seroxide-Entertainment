import { Award, Heart, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import manael from "@/assets/Manael Okoth.jpeg";
import thomas from "@/assets/Tom.jpg";
import dan from "@/assets/Heston Kariuki.jpeg";
import ochola from "@/assets/Paul-Ochola1.png";
import mwasame from "@/assets/Paul.jpg";
import mutuma from "@/assets/Mutuma Mwika.jpeg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Youth",
      description: "We live and breathe youth culture, understanding what moves and inspires the next generation."
    },
    {
      icon: Zap,
      title: "High Energy",
      description: "Every event we create is infused with infectious energy that gets crowds moving and excited."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building connections and creating experiences that bring people together."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Professional delivery and attention to detail in every aspect of our entertainment services."
    }
  ];

  const team = [
    {
      name: "Manael Odhiambo",
      role: "Founder & CEO",
      bio: "Visionary leader with 8+ years in youth entertainment",
      image: manael
    },
    {
      name: "Thomas Mukundi",
      role: "Chief Operations Officer",
      bio: "Chief Operations Officer with a passion for logistics and event management",
      image: thomas
    },
    {
      name: "Hyper Dan",
      role: "Operations Manager",
      bio: "Operations Manager with a knack for turning ideas into unforgettable events",
      image: dan
    },
    {
      name: "Ochola The Creator",
      role: "Creatives Director",
      bio: "Creatives Director with a passion for innovative event experiences",
      image: ochola
    },
    {
      name: "Paul Mwasame",
      role: "Financial Manager",
      bio: "Financial Manager with a passion for numbers and strategic planning",
      image: mwasame
    },
    {
      name: "Mutuma Mwika",
      role: "Policy and Strategic Director",
      bio: "Policy and Strategic Director with a passion for youth empowerment and community engagement",
      image: mutuma
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-anton font-bold text-gradient mb-6">
            ABOUT SEROXIDE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are Kenya's premier youth entertainment company, creating unforgettable experiences 
            that celebrate and elevate youth culture across the nation.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-anton font-bold mb-6 text-gradient">
              OUR MISSION
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To bridge the gap between entertainment and education, creating experiences that 
              not only entertain but inspire, motivate, and empower Kenya's youth to reach 
              their full potential.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Since our founding, we've been committed to understanding and celebrating youth 
              culture while providing professional entertainment services that schools, brands, 
              and organizations trust.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-anton font-bold text-primary mb-2">2019</div>
                <p className="text-muted-foreground">Founded</p>
              </div>
              <div>
                <div className="text-3xl font-anton font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Events</p>
              </div>
              <div>
                <div className="text-3xl font-anton font-bold text-primary mb-2">50K+</div>
                <p className="text-muted-foreground">Youth Reached</p>
              </div>
              <div>
                <div className="text-3xl font-anton font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Partners</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-anton font-bold mb-4">
                "Turning Moments Into Memories"
              </h4>
              <p className="text-muted-foreground italic">
                Every event is an opportunity to create something special that will be 
                remembered long after the music stops and the lights fade.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-anton font-bold text-center mb-12 text-gradient">
            OUR VALUES
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-montserrat font-semibold mb-4">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-anton font-bold text-center mb-12 text-gradient">
            MEET THE TEAM
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-neon"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                <h4 className="text-xl font-montserrat font-semibold mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-12">
          <h3 className="text-3xl font-anton font-bold mb-4">
            Ready to Experience the Seroxide Difference?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the hundreds of schools, brands, and organizations who have trusted us 
            to deliver exceptional entertainment experiences.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;