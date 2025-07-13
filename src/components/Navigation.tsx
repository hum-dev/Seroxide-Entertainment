import { useState } from "react";
import { Menu, X, Calendar, Users, Camera, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGalleryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/", icon: null },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Services", href: "/services", icon: Users },
    { name: "Gallery", href: "/#gallery", icon: Camera },
    { name: "About", href: "/about", icon: null },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-anton font-bold text-gradient">
              SEROXIDE
            </div>
            <div className="text-xs text-muted-foreground -mt-1 font-poppins">
              ENTERTAINMENT
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                item.name === 'Gallery' ? (
                  <button
                    key={item.name}
                    onClick={handleGalleryClick}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium hover:scale-105 transform"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium hover:scale-105 transform"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Button variant="hero" size="default" className="ml-4">
                Book Us
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg border-b border-border">
          {navItems.map((item) => (
            item.name === 'Gallery' ? (
              <button
                key={item.name}
                onClick={handleGalleryClick}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-colors w-full text-left"
              >
                {item.icon && <item.icon className="mr-3 h-4 w-4" />}
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-3 py-2 text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <item.icon className="mr-3 h-4 w-4" />}
                {item.name}
              </Link>
            )
          ))}
          <div className="pt-2">
            <Button variant="hero" size="default" className="w-full">
              Book Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;