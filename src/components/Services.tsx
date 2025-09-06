import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "PROTOTYPING",
    description: "Expertise in both large scale metal spinning and R&D in a wide variety of engineering applications",
    icon: "⚙️",
    features: ["Rapid Development", "Engineering Support", "Custom Solutions"],
    gradient: "from-engineering/20 to-engineering/5"
  },
  {
    title: "CNC AUTOMATION",
    description: "Cutting-edge Computer Numerical Control (CNC) spinning machine manufacturing for large scale automation",
    icon: "🤖",
    features: ["Precision Control", "Large Scale", "Automated Process"],
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "AFFORDABLE SOLUTIONS",
    description: "Affordable metal forming partnership, dramatically reducing cost of development",
    icon: "💎",
    features: ["Cost Effective", "Quality Assured", "Partnership Model"],
    gradient: "from-affordable/20 to-affordable/5"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="holographic">WHAT WE OFFER</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three generations of expertise combined with cutting-edge technology to deliver precision metal forming solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`tech-border bg-gradient-to-br ${service.gradient} hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
              
              <div className="p-8 relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:glow-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge 
                      key={feature}
                      variant="secondary"
                      className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};