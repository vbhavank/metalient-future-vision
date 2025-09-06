import { Button } from "@/components/ui/button";
import { ParticleField } from "./ParticleField";
import { ManufacturingEffects, CNCIndicator, PrecisionGrid } from "./ManufacturingEffects";
import { Navigation } from "./Navigation";
import heroImage from "@/assets/hero-manufacturing.jpg";

export const Hero = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Enhanced Manufacturing Effects */}
      <ParticleField />
      <ManufacturingEffects />

      {/* Precision Grid Overlay */}
      <PrecisionGrid className="z-10" />
      <div className="absolute inset-0 tech-grid z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        {/* Logo with Manufacturing Animation */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent glow-primary mb-6 animate-machinery-hum">
            <span className="text-3xl font-bold text-background">M</span>
          </div>
          {/* CNC Status Indicator */}
          <div className="flex justify-center">
            <CNCIndicator />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="block holographic glow-text">METALIENT</span>
          <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mt-4">
            CUTTING-EDGE METAL SPINNING
          </span>
        </h1>

        {/* Tagline */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
          <span className="flex items-center gap-2 text-engineering">
            <div className="w-2 h-2 rounded-full bg-engineering animate-pulse"></div>
            ENGINEERING
          </span>
          <span className="flex items-center gap-2 text-customized">
            <div className="w-2 h-2 rounded-full bg-customized animate-pulse"></div>
            CUSTOMIZED
          </span>
          <span className="flex items-center gap-2 text-affordable">
            <div className="w-2 h-2 rounded-full bg-affordable animate-pulse"></div>
            AFFORDABLE
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="tech-border glow-primary bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pressure-forge"
            onClick={() => window.location.href = '/products'}
          >
            VIEW PRODUCTS
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="tech-border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE CAPABILITIES
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold holographic">50+</div>
            <div className="text-muted-foreground text-sm">YEARS EXPERIENCE</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold holographic">3</div>
            <div className="text-muted-foreground text-sm">GENERATIONS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold holographic">8+</div>
            <div className="text-muted-foreground text-sm">INDUSTRIES</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
    </>
  );
};