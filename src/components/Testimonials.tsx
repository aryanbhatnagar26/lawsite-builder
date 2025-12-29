import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner, Agra",
      content: "Mr. Chetan Sharma handled our complex property dispute with exceptional skill. His deep knowledge of property law and strategic approach helped us win a case that seemed impossible. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Gupta",
      role: "Teacher, Agra",
      content: "During my divorce proceedings, Mr. Sharma provided not just legal expertise but also emotional support. He ensured my rights were protected and secured a fair settlement. Forever grateful for his help.",
      rating: 5,
    },
    {
      name: "Mohammad Irfan",
      role: "Contractor, Firozabad",
      content: "I was falsely implicated in a criminal case and Mr. Sharma fought relentlessly for my acquittal. His courtroom presence and arguments were outstanding. He restored my faith in the justice system.",
      rating: 5,
    },
    {
      name: "Sunita Sharma",
      role: "Homemaker, Agra",
      content: "For our ancestral property partition, we needed someone trustworthy. Mr. Chetan handled everything professionally and ensured fair distribution among all family members. Excellent service!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
            Client Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our success is measured by the trust and satisfaction of our clients. 
            Here's what they have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:bg-card/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold/40 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-navy text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-gold">1000+</div>
            <div className="text-sm text-primary-foreground/60">Satisfied Clients</div>
          </div>
          <div className="w-px bg-gold/20" />
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-gold">15+</div>
            <div className="text-sm text-primary-foreground/60">Years Experience</div>
          </div>
          <div className="w-px bg-gold/20" />
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-gold">98%</div>
            <div className="text-sm text-primary-foreground/60">Success Rate</div>
          </div>
          <div className="w-px bg-gold/20" />
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-gold">500+</div>
            <div className="text-sm text-primary-foreground/60">Cases Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
