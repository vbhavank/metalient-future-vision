import { Card } from "@/components/ui/card";
import { MouseParallax } from "@/components/CursorEffects";

// Import partner logos
import drdoLogo from "@/assets/partners/drdo-logo.png";
import tataLogo from "@/assets/partners/tata-logo.webp";
import dassaultLogo from "@/assets/partners/dassault-logo.webp";
import gevernovaLogo from "@/assets/partners/gevernova-logo.jpeg";
import trelleborgLogo from "@/assets/partners/trelleborg-logo.png";

const partners = [
  {
    name: "DRDO",
    logo: drdoLogo,
    description: "Defense Research and Development Organisation",
    sector: "Defense & Aerospace"
  },
  {
    name: "Tata Advanced Systems",
    logo: tataLogo,
    description: "Defense and Aerospace Solutions",
    sector: "Defense & Aerospace"
  },
  {
    name: "Dassault Aviation",
    logo: dassaultLogo,
    description: "Aircraft Manufacturer",
    sector: "Aviation"
  },
  {
    name: "GE Vernova",
    logo: gevernovaLogo,
    description: "Energy Infrastructure",
    sector: "Power Generation"
  },
  {
    name: "Trelleborg",
    logo: trelleborgLogo,
    description: "Engineered Solutions Provider",
    sector: "Industrial"
  }
];

export const Partners = () => {
  return (
    <section className="py-24 px-6 bg-muted/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="holographic">TRUSTED PARTNERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proud to collaborate with industry leaders across defense, aerospace, and advanced manufacturing
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <MouseParallax key={partner.name} intensity={0.5}>
              <Card 
                className="tech-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 group relative overflow-hidden animate-slide-up cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
                
                <div className="p-6 text-center relative z-10">
                  {/* Logo */}
                  <div className="relative h-20 mb-4 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>

                  {/* Partner Info */}
                  <h3 className="font-bold text-sm mb-2 group-hover:glow-text transition-all duration-300">
                    {partner.name}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground mb-2">
                    {partner.description}
                  </p>

                  {/* Sector Badge */}
                  <div className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    {partner.sector}
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-green-400 font-mono">ACTIVE</span>
                  </div>
                </div>
              </Card>
            </MouseParallax>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold holographic mb-2">50+</div>
            <div className="text-muted-foreground text-sm">Years Partnership</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold holographic mb-2">15+</div>
            <div className="text-muted-foreground text-sm">Major Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold holographic mb-2">1000+</div>
            <div className="text-muted-foreground text-sm">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};