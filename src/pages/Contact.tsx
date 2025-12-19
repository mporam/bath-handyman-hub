import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Get in touch for a free, no-obligation quote. We're here to help with all your 
              home repair and maintenance needs.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a quick question or want to discuss a project in detail, 
                  we'd love to hear from you. Give us a call or send an email and we'll get 
                  back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:07951634661" className="text-primary hover:underline text-lg font-medium">
                        07951 634 661
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Call us for a quick chat about your project
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:bathhomeservices@gmail.com" className="text-primary hover:underline text-lg font-medium">
                        bathhomeservices@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Send us details and we'll reply within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                      <p className="text-foreground text-lg font-medium">
                        Bath, Bristol & Surrounding Areas
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Including Keynsham, Bradford-on-Avon, Corsham, Chippenham, Trowbridge
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* CTA Card */}
              <div>
                <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground h-full flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Request a Free Quote
                  </h2>
                  <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                    Ready to get started? Call us directly or send an email with details of 
                    your project. We'll provide a competitive quote with no obligation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button asChild variant="heroOutline" size="xl" className="w-full justify-center">
                      <a href="tel:07951634661">
                        <Phone className="w-5 h-5" />
                        Call 07951 634 661
                      </a>
                    </Button>
                    <Button asChild variant="cta" size="xl" className="w-full justify-center">
                      <a href="mailto:bathhomeservices@gmail.com">
                        <Mail className="w-5 h-5" />
                        Email Us Now
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                    <p className="text-sm text-primary-foreground/70 text-center">
                      Free quotes • No obligation • Fast response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
