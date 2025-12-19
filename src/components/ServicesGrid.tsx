import { 
  Wrench, 
  Paintbrush, 
  Hammer, 
  Droplets, 
  Zap, 
  Home,
  DoorOpen,
  TreeDeciduous,
  Settings
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    description: "From fixing squeaky doors to repairing broken fixtures, we handle all general household repairs.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    description: "Interior and exterior painting, wallpapering, and decorating to refresh your living spaces.",
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Shelving, furniture assembly, door hanging, and custom woodwork solutions.",
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Minor plumbing repairs, tap replacements, toilet fixes, and leak repairs.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Light fitting installation, socket replacements, and minor electrical work.",
  },
  {
    icon: Home,
    title: "Property Maintenance",
    description: "Regular maintenance visits to keep your property in top condition year-round.",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "Door and window repairs, lock changes, draught-proofing, and adjustments.",
  },
  {
    icon: TreeDeciduous,
    title: "Garden Services",
    description: "Fence repairs, decking maintenance, shed assembly, and garden structures.",
  },
  {
    icon: Settings,
    title: "Flat Pack Assembly",
    description: "Professional assembly of flat pack furniture from IKEA and other retailers.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive range of handyman services to keep your home in perfect condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
