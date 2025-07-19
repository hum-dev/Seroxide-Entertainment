import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // EmailJS configuration - updated parameter names to match template
    const result = await emailjs.send(
      'service_4owq9v7', // Replace with your EmailJS service ID
      'template_8jzypf8', // Replace with your EmailJS template ID
      {
        name: formData.name,           // Changed from 'from_name' to 'name'
        email: formData.email,         // Changed from 'from_email' to 'email'
        phone: formData.phone,         // This was already correct
        eventType: formData.eventType, // Changed from 'event_type' to 'eventType'
        message: formData.message,     // This was already correct
        to_email: 'info@seroxideentertainment.co.ke',
      },
      'bhGOdL7wOp5be1cW6' // Replace with your EmailJS public key
    );

    if (result.status === 200) {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: ""
      });
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    toast({
      variant: "destructive",
      title: "Failed to send message",
      description: "Please try again or contact us directly.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 712 345 678", "+254 723 456 789"],
      action: "tel:+254712345678"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@seroxideentertainment.co.ke", "bookings@seroxideentertainment.co.ke"],
      action: "mailto:info@seroxideentertainment.co.ke"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Westlands, Nairobi", "Kenya"],
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-anton font-bold text-gradient mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create an unforgettable experience? Let's discuss your vision and 
            bring it to life with our professional entertainment services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl flex items-center">
                  <Send className="mr-2 h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="hover:border-primary/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="hover:border-primary/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 712 345 678"
                        className="hover:border-primary/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium mb-2">Event Type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background hover:border-primary/50 focus:border-primary focus:outline-none"
                      >
                        <option value="">Select event type</option>
                        <option value="school-tour">School Tour</option>
                        <option value="concert">Concert</option>
                        <option value="brand-activation">Brand Activation</option>
                        <option value="dj-services">DJ Services</option>
                        <option value="sound-lighting">Sound & Lighting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event requirements, expected audience, date, and any specific needs..."
                      rows={5}
                      required
                      className="hover:border-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift card-shadow">
                  <CardContent className="flex items-start p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-montserrat font-semibold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Button */}
            <Card className="bg-green-50 border-green-200 hover-lift">
              <CardContent className="flex items-center p-6">
                <MessageSquare className="h-8 w-8 text-green-600 mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-green-800 mb-1">WhatsApp Us</h3>
                  <p className="text-green-600">Get instant response on WhatsApp</p>
                </div>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/254712345678', '_blank')}
                >
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-montserrat font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: "Instagram", url: "#", color: "from-pink-500 to-purple-600" },
                  { name: "TikTok", url: "#", color: "from-black to-gray-800" },
                  { name: "YouTube", url: "#", color: "from-red-500 to-red-700" },
                  { name: "Facebook", url: "#", color: "from-blue-500 to-blue-700" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white font-semibold hover-scale`}
                  >
                    {social.name.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Our Location</h3>
                  <p className="text-muted-foreground">Westlands, Nairobi, Kenya</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;