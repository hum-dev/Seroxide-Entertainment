import { Calendar, Mail, Phone, MapPin, Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "School Tours", href: "/services" },
      { name: "Concerts", href: "/events" },
      { name: "Brand Activations", href: "/services" },
      { name: "DJ Services", href: "/services" },
      { name: "Sound & Lighting", href: "/services" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Gallery", href: "/#gallery" },
      { name: "Blog", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Book Event", href: "/contact" },
      { name: "Get Quote", href: "/contact" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "/contact" }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
    { icon: Music, href: "#", name: "TikTok" },
    { icon: Mail, href: "mailto:info@seroxide.co.ke", name: "Email" }
  ];

  return (
    <footer className="bg-dark-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-anton font-bold text-gradient mb-2">
                SEROXIDE
              </div>
              <div className="text-sm text-gray-300 -mt-1 font-poppins">
                ENTERTAINMENT
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kenya's premier youth entertainment company, creating unforgettable experiences 
              that celebrate and elevate youth culture across the nation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="mr-3 h-4 w-4 text-primary" />
                <span>+254 712 345 678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="mr-3 h-4 w-4 text-primary" />
                <span>info@seroxide.co.ke</span>
              </div>
            </div>
            
            {/* Follow Us Section */}
            <div className="mt-6">
              <h4 className="font-montserrat font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover-scale"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Get the latest updates on our events and entertainment news.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="btn-glow px-6 py-2 rounded-lg font-semibold text-white hover-scale">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-300 text-sm">
              © {currentYear} Seroxide Entertainment. All rights reserved.
            </div>
            
          </div>
          
          {/* Additional Links */}
          <div className="mt-4 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;