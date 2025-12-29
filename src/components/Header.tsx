import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Scale } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Practice Areas" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "bg-navy" : "bg-gold/20"
            }`}>
              <Scale className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? "text-gold" : "text-gold"
              }`} />
            </div>
            <div>
              <h1 className={`font-display text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-navy" : "text-primary-foreground"
              }`}>
                Chetan Sharma
              </h1>
              <p className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-gold"
              }`}>
                Advocate
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2">
              <Button variant={isScrolled ? "gold" : "hero"} size="lg">
                <Phone className="w-4 h-4" />
                Free Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-navy" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-fade-in">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-foreground font-medium hover:text-gold hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+919876543210" className="mt-4">
                <Button variant="gold" size="lg" className="w-full">
                  <Phone className="w-4 h-4" />
                  Free Consultation
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
