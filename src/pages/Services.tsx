import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { 
  Wrench, 
  Paintbrush, 
  Hammer, 
  Droplets, 
  Zap, 
  Home,
  DoorOpen,
  TreeDeciduous,
  Settings,
  Bath,
  Sofa,
  Building2
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    description: "From fixing squeaky doors to repairing broken fixtures, we handle all general household repairs. No job is too small - we're here to help with those annoying issues that need sorting.",
    examples: ["Door and hinge adjustments", "Broken fixture repairs", "Lock replacements", "Handle and knob fitting"],
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    description: "Transform your space with professional painting and decorating services. We take care in preparing surfaces properly for a flawless, long-lasting finish.",
    examples: ["Interior wall painting", "Exterior painting", "Wallpaper hanging", "Ceiling painting"],
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Expert carpentry services for all your woodwork needs. From shelving to custom solutions, we bring craftsmanship to every project.",
    examples: ["Shelving installation", "Furniture repairs", "Door hanging", "Skirting board fitting"],
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Minor plumbing repairs and installations to keep your water systems running smoothly. Quick fixes for common household plumbing issues.",
    examples: ["Tap replacements", "Toilet repairs", "Leak fixing", "Shower fitting"],
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Safe and reliable minor electrical work. We handle light fittings, switches, and other small electrical jobs to keep your home bright and functional.",
    examples: ["Light fitting installation", "Switch and socket replacement", "Dimmer installation", "Extractor fan fitting"],
  },
  {
    icon: Home,
    title: "Property Maintenance",
    description: "Regular maintenance services to keep your property in excellent condition. Ideal for landlords and homeowners who want to stay on top of repairs.",
    examples: ["Regular inspection visits", "Preventive maintenance", "Seasonal checks", "Landlord services"],
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "Keep your doors and windows working perfectly with our repair and adjustment services. We fix drafts, sticking doors, and broken mechanisms.",
    examples: ["Door adjustments", "Window repairs", "Draft-proofing", "Cat flap installation"],
  },
  {
    icon: TreeDeciduous,
    title: "Garden Structures",
    description: "Build and repair garden structures to enhance your outdoor space. From fencing to sheds, we handle all outdoor woodwork.",
    examples: ["Fence repairs", "Decking maintenance", "Shed assembly", "Trellis installation"],
  },
  {
    icon: Settings,
    title: "Flat Pack Assembly",
    description: "Save time and frustration with our professional flat pack assembly service. We'll build your furniture quickly and correctly.",
    examples: ["IKEA furniture", "Bedroom furniture", "Office desks", "Wardrobes and storage"],
  },
  {
    icon: Bath,
    title: "Bathroom Maintenance",
    description: "Keep your bathroom in top condition with our maintenance services. From re-sealing to fixture fitting, we've got you covered.",
    examples: ["Silicone re-sealing", "Toilet seat replacement", "Towel rail fitting", "Mirror hanging"],
  },
  {
    icon: Sofa,
    title: "Kitchen Jobs",
    description: "Various kitchen repairs and improvements to keep your kitchen functional and looking great.",
    examples: ["Cupboard repairs", "Handle replacement", "Worktop repairs", "Appliance installation"],
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "We also work with businesses, offices, and commercial properties. Reliable maintenance services tailored to your business needs.",
    examples: ["Office maintenance", "Retail fitting", "Property management", "Scheduled visits"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              A comprehensive range of professional handyman services for your home and business. 
              Quality workmanship at competitive prices.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:gap-10">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className={`bg-secondary rounded-xl p-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h3 className="font-semibold text-foreground mb-3">Common jobs we handle:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.examples.map((example) => (
                        <li key={example} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
