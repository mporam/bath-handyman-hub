import { CheckCircle, Clock, Shield, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "We take pride in our work and stand behind every job we complete.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description: "We arrive when we say we will and complete work on schedule.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete peace of mind with comprehensive liability insurance.",
  },
  {
    icon: ThumbsUp,
    title: "No Job Too Small",
    description: "From small fixes to larger projects, we're happy to help.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Bath Home Service?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With years of experience serving the Bath community, we've built our 
              reputation on honest, reliable service and quality workmanship. 
              Whether it's a quick fix or a larger project, we treat every job 
              with the same care and attention to detail.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
              <p className="text-primary-foreground/80 mb-6">
                Tell us about your project and we'll provide a competitive, no-obligation quote.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:01225123456" 
                  className="block text-center bg-primary-foreground text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary-foreground/90 transition-colors"
                >
                  Call: 01225 123 456
                </a>
                <a 
                  href="mailto:info@bathhomeservice.co.uk" 
                  className="block text-center border-2 border-primary-foreground text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
