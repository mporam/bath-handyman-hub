import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm border-b border-border">
          <a href="tel:01225123456" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>01225 123 456</span>
          </a>
          <a href="mailto:info@bathhomeservice.co.uk" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@bathhomeservice.co.uk</span>
          </a>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary leading-tight">Bath Home</span>
              <span className="text-xs text-muted-foreground leading-tight">Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg">
              <a href="tel:01225123456">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a href="tel:01225123456" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>01225 123 456</span>
                </a>
                <a href="mailto:info@bathhomeservice.co.uk" className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@bathhomeservice.co.uk</span>
                </a>
              </div>
              <Button asChild className="mt-2">
                <a href="tel:01225123456">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
