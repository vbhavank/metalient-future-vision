import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const materials = [
  {
    name: "Aluminium/Brass/Copper/Lead",
    range: "0.5mm - 12mm",
    strength: 95,
    applications: ["Aerospace", "Electronics", "Automotive"],
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Carbon Rolled Steel (CRC)",
    range: "0.5mm - 4mm", 
    strength: 88,
    applications: ["Industrial", "Heavy Machinery", "Construction"],
    color: "from-gray-400 to-gray-600"
  },
  {
    name: "Stainless Steel",
    range: "0.8mm - 3mm",
    strength: 92,
    applications: ["Medical", "Food Grade", "Marine"],
    color: "from-blue-400 to-cyan-500"
  }
];

export const Materials = () => {
  return (
    <section className="py-24 px-6 bg-muted/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="holographic">PRECISION MATERIALS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced material capabilities with precise thickness control for diverse industrial applications
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <Card 
              key={material.name}
              className="tech-border bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 group relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-8">
                {/* Material Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:glow-text transition-all duration-300">
                    {material.name}
                  </h3>
                  <div className="text-2xl font-mono text-primary">
                    {material.range}
                  </div>
                </div>

                {/* Strength Indicator */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">PRECISION CAPABILITY</span>
                    <span className="text-sm font-bold">{material.strength}%</span>
                  </div>
                  <Progress 
                    value={material.strength} 
                    className="h-2 bg-background/50"
                  />
                </div>

                {/* Visual Bar */}
                <div className="mb-6">
                  <div className={`h-4 rounded-full bg-gradient-to-r ${material.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <div className="text-sm text-muted-foreground mb-2">KEY APPLICATIONS</div>
                  <div className="flex flex-wrap gap-2">
                    {material.applications.map((app) => (
                      <span 
                        key={app}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};