import { Scale, Shield, Home, Users, FileText, Gavel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Civil Litigation",
      description: "Comprehensive representation in civil suits including property disputes, contract matters, and debt recovery cases.",
      features: ["Property Disputes", "Contract Enforcement", "Debt Recovery"],
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Strong defense representation in criminal matters with focus on protecting your rights and securing the best possible outcome.",
      features: ["Bail Applications", "Trial Defense", "Appeals"],
    },
    {
      icon: Home,
      title: "Property & Real Estate",
      description: "Expert guidance on property transactions, title verification, land disputes, and real estate documentation.",
      features: ["Title Verification", "Property Transfer", "Land Disputes"],
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Sensitive handling of family matters including divorce, custody, maintenance, and domestic disputes.",
      features: ["Divorce Proceedings", "Child Custody", "Maintenance Claims"],
    },
    {
      icon: FileText,
      title: "Legal Drafting",
      description: "Professional drafting of legal documents, agreements, wills, and contracts with attention to detail.",
      features: ["Agreements", "Wills & Trusts", "Legal Notices"],
    },
    {
      icon: Gavel,
      title: "Consumer Protection",
      description: "Representation in consumer forums for product defects, service deficiencies, and unfair trade practices.",
      features: ["Consumer Complaints", "Compensation Claims", "Appeals"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
            Practice Areas
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            Legal Services We Offer
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive legal solutions tailored to protect your rights and 
            interests across a wide range of practice areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 border border-transparent hover:border-gold/20"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-navy/5 group-hover:bg-gradient-gold rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <service.icon className="w-7 h-7 text-gold group-hover:text-navy transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                Get Legal Help
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which legal service you need? Get a free consultation.
          </p>
          <a href="#contact">
            <Button variant="gold" size="xl">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
