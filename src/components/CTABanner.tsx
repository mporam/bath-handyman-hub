import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-16 bg-sky-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Contact us today for a free, no-obligation quote on your next home improvement project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="xl">
            <a href="tel:07951634661">
              <Phone className="w-5 h-5" />
              07951 634 661
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href="mailto:bathhomeservices@gmail.com">
              <Mail className="w-5 h-5" />
              bathhomeservices@gmail.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
