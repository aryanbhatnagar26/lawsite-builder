import { Scale, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const practiceAreas = [
    "Civil Litigation",
    "Criminal Defense",
    "Property Law",
    "Family Law",
    "Legal Drafting",
    "Consumer Protection",
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gold/20 rounded-lg">
                <Scale className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Chetan Sharma</h3>
                <p className="text-xs tracking-widest uppercase text-gold">Advocate</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Providing trusted legal counsel and representation in Agra for over 
              15 years. Committed to justice and client satisfaction.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Agra, Uttar Pradesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:chetan.sharma@advocate.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  chetan.sharma@advocate.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span>Near District Court, Civil Lines, Agra, UP - 282002</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Chetan Sharma Advocate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
