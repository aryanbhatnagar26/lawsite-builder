import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-gold rounded-r-full" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Trusted Legal Counsel in Agra
              </span>
            </div>

            <h1 className="animate-fade-up opacity-0 delay-100 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Chetan Sharma
              <span className="block text-gradient-gold mt-2">Advocate</span>
            </h1>

            <p className="animate-fade-up opacity-0 delay-200 text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Experienced advocate offering reliable legal services for civil, criminal, 
              and property matters. Dedicated to justice and client satisfaction.
            </p>

            <div className="animate-fade-up opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="tel:+919876543210">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="#contact">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <div className="p-2 bg-gold/20 rounded-lg">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a href="mailto:chetan.sharma@advocate.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <div className="p-2 bg-gold/20 rounded-lg">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm">chetan.sharma@advocate.com</span>
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="animate-fade-up opacity-0 delay-500 hidden lg:block">
            <div className="bg-card/10 backdrop-blur-md border border-gold/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-navy/30 rounded-xl">
                  <div className="text-4xl font-display font-bold text-gold mb-2">15+</div>
                  <div className="text-sm text-primary-foreground/70">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-navy/30 rounded-xl">
                  <div className="text-4xl font-display font-bold text-gold mb-2">500+</div>
                  <div className="text-sm text-primary-foreground/70">Cases Won</div>
                </div>
                <div className="text-center p-6 bg-navy/30 rounded-xl">
                  <div className="text-4xl font-display font-bold text-gold mb-2">1000+</div>
                  <div className="text-sm text-primary-foreground/70">Clients Served</div>
                </div>
                <div className="text-center p-6 bg-navy/30 rounded-xl">
                  <div className="text-4xl font-display font-bold text-gold mb-2">98%</div>
                  <div className="text-sm text-primary-foreground/70">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill="hsl(40 30% 96%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
