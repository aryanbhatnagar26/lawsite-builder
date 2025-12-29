import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      href: "tel:+919876543210",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      content: "chetan.sharma@advocate.com",
      href: "mailto:chetan.sharma@advocate.com",
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Near District Court, Civil Lines, Agra, Uttar Pradesh - 282002",
      href: "https://maps.google.com",
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Sat: 9:00 AM - 7:00 PM",
      href: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            Contact Us Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a legal question or need representation? Reach out for a free 
            initial consultation. We're here to help you navigate your legal matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 group-hover:bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-navy mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {item.content}
                    </p>
                    {item.href && (
                      <a
                        href={item.href}
                        className="text-gold font-semibold text-sm hover:underline"
                      >
                        {item.action} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-300"
            >
              <MessageSquare className="w-8 h-8" />
              <div>
                <div className="font-bold">Chat on WhatsApp</div>
                <div className="text-sm text-white/80">Quick response guaranteed</div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl shadow-elevated p-8 md:p-10"
            >
              <h3 className="font-display text-2xl font-bold text-navy mb-6">
                Send a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    required
                    placeholder="Legal matter type"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <Textarea
                  required
                  placeholder="Briefly describe your legal issue..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Your information is kept confidential under attorney-client privilege.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
