import { Award, BookOpen, Briefcase, GraduationCap, CheckCircle } from "lucide-react";

const About = () => {
  const credentials = [
    { icon: GraduationCap, title: "LLB, LL.M", subtitle: "Delhi University" },
    { icon: Briefcase, title: "15+ Years", subtitle: "Legal Practice" },
    { icon: Award, title: "Bar Council", subtitle: "Enrolled Member" },
    { icon: BookOpen, title: "District Court", subtitle: "Agra, UP" },
  ];

  const highlights = [
    "Expert in Civil & Criminal Litigation",
    "Property & Real Estate Specialist",
    "Family Law & Matrimonial Disputes",
    "Drafting & Legal Documentation",
    "Consumer Forum Matters",
    "Bail & Criminal Defense",
  ];

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
                  alt="Law office with legal books and scales of justice"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-navy p-6 rounded-2xl shadow-gold">
                <div className="text-4xl font-display font-bold">15+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-8 -left-8 w-full h-full bg-navy/10 rounded-2xl -z-0" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">
              About The Advocate
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Chetan Sharma
              <span className="block text-gold text-3xl md:text-4xl mt-2">Advocate & Legal Consultant</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chetan Sharma is a distinguished advocate practicing at Agra District Court 
              with over 15 years of experience in handling complex legal matters. Known for 
              his meticulous approach and deep understanding of Indian law, he has successfully 
              represented hundreds of clients in civil, criminal, and property disputes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a commitment to providing accessible and reliable legal counsel, 
              Mr. Sharma ensures that every client receives personalized attention 
              and strategic representation tailored to their unique circumstances.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-xl shadow-soft text-center hover:shadow-elevated transition-shadow duration-300"
                >
                  <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="font-display font-bold text-navy text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
