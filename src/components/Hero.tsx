import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Your Trusted Handyman in Bath
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Professional home repairs, maintenance and improvement services. 
            No job too small. Quality workmanship guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:01225123456">
                <Phone className="w-5 h-5" />
                01225 123 456
              </a>
            </Button>
            <Button asChild variant="cta" size="xl">
              <a href="mailto:info@bathhomeservice.co.uk">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>

          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors group animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <span>View all our services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 70C1200 73.3 1320 66.7 1380 63.3L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
