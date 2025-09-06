import { Card } from "@/components/ui/card";

const industries = [
  {
    name: "Aerospace & Defense",
    icon: "🚀",
    description: "Precision components for critical aerospace applications",
    projects: "150+",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Power Generation & Electronics", 
    icon: "⚡",
    description: "Advanced components for energy and electronic systems",
    projects: "200+",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    name: "Medical & Pharmaceutical",
    icon: "🏥",
    description: "FDA-compliant precision parts for medical devices",
    projects: "120+",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "Automobile & Racing",
    icon: "🏎️",
    description: "High-performance components for automotive excellence",
    projects: "300+",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    name: "Industrial Heating/Cooling",
    icon: "🌡️",
    description: "Thermal management solutions for industrial applications",
    projects: "180+",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    name: "Heavy Machinery & Control",
    icon: "🔧",
    description: "Robust components for heavy industrial equipment",
    projects: "220+",
    gradient: "from-gray-500/20 to-slate-500/20"
  },
  {
    name: "Entertainment",
    icon: "🎭",
    description: "Specialized components for entertainment industry",
    projects: "80+",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Domestic Applications",
    icon: "🏠",
    description: "Consumer-grade precision components",
    projects: "160+",
    gradient: "from-indigo-500/20 to-blue-500/20"
  }
];

export const Industries = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="holographic">INDUSTRIES WE SERVE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proudly contributing precision metal spinning solutions across diverse sectors worldwide
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={industry.name}
              className={`tech-border bg-gradient-to-br ${industry.gradient} hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-slide-up cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Shimmer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
              
              <div className="p-6 relative z-10">
                {/* Icon & Projects Count */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{industry.projects}</div>
                    <div className="text-xs text-muted-foreground">PROJECTS</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold mb-3 group-hover:glow-text transition-all duration-300 text-sm">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-green-400 font-mono">ACTIVE</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block tech-border bg-primary/5 backdrop-blur-sm">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Don't see your industry?</h3>
              <p className="text-muted-foreground mb-6">
                We specialize in custom solutions for unique applications
              </p>
              <button className="tech-border bg-gradient-to-r from-primary to-accent text-background px-6 py-3 rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                DISCUSS YOUR PROJECT
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};