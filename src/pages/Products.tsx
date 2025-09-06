import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ManufacturingEffects, CNCIndicator, PrecisionGrid } from "@/components/ManufacturingEffects";
import { ArrowLeft, Download, Zap, Settings, Shield } from "lucide-react";

// Import product images
import cylinderEndCover from "@/assets/products/cylinder-end-cover.jpg";
import domeSphere from "@/assets/products/dome-sphere.jpg";
import impeller from "@/assets/products/impeller-1.jpg";
import precisionPart from "@/assets/products/precision-part-1.jpg";

const products = [
  {
    id: 1,
    name: "Cylinder End Cover",
    category: "Industrial Components",
    image: cylinderEndCover,
    description: "Precision-engineered cylinder end covers for industrial applications with exceptional dimensional accuracy.",
    specifications: {
      material: "Stainless Steel 316L",
      thickness: "2.5mm",
      tolerance: "±0.05mm",
      finish: "Mirror Polished"
    },
    applications: ["Hydraulic Systems", "Pneumatic Cylinders", "Pressure Vessels"],
    features: ["Corrosion Resistant", "High Pressure Rating", "Custom Sizing Available"]
  },
  {
    id: 2,
    name: "Dome Sphere",
    category: "Specialized Forms",
    image: domeSphere,
    description: "Complex dome and spherical components manufactured using advanced metal spinning techniques.",
    specifications: {
      material: "Aluminum 6061-T6",
      thickness: "1.8mm",
      tolerance: "±0.03mm",
      finish: "Anodized"
    },
    applications: ["Aerospace", "Architectural", "Lighting Systems"],
    features: ["Lightweight Design", "Seamless Construction", "Multiple Sizes"]
  },
  {
    id: 3,
    name: "Precision Impeller",
    category: "Fluid Dynamics",
    image: impeller,
    description: "High-performance impellers designed for optimal fluid flow and efficiency in pumping systems.",
    specifications: {
      material: "Carbon Steel",
      thickness: "3.2mm",
      tolerance: "±0.02mm",
      finish: "Powder Coated"
    },
    applications: ["Centrifugal Pumps", "Turbomachinery", "HVAC Systems"],
    features: ["Dynamic Balancing", "Flow Optimized", "Wear Resistant"]
  },
  {
    id: 4,
    name: "Custom Precision Part",
    category: "Bespoke Solutions",
    image: precisionPart,
    description: "Tailored manufacturing solutions for unique applications requiring exceptional precision and quality.",
    specifications: {
      material: "Various Available",
      thickness: "0.5mm - 12mm",
      tolerance: "±0.01mm",
      finish: "As Required"
    },
    applications: ["Medical Devices", "Electronics", "Research & Development"],
    features: ["Custom Engineering", "Rapid Prototyping", "Quality Certified"]
  }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  return (
    <Card 
      className="tech-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <PrecisionGrid />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
      
      <div className="relative z-10">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          {/* Category Badge */}
          <Badge 
            variant="secondary" 
            className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
          >
            {product.category}
          </Badge>

          {/* CNC Indicator */}
          <div className="absolute top-4 right-4">
            <CNCIndicator />
          </div>
        </div>

        <div className="p-6">
          {/* Product Name */}
          <h3 className="text-xl font-bold mb-3 group-hover:glow-text transition-all duration-300">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-muted-foreground capitalize">{key}:</span>
                <span className="text-primary font-mono">{value}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.features.map((feature) => (
              <Badge 
                key={feature}
                variant="outline"
                className="text-xs border-accent/50 text-accent"
              >
                {feature}
              </Badge>
            ))}
          </div>

          {/* Applications */}
          <div className="mb-4">
            <div className="text-xs text-muted-foreground mb-2">KEY APPLICATIONS</div>
            <div className="flex flex-wrap gap-1">
              {product.applications.map((app) => (
                <span 
                  key={app}
                  className="text-xs px-2 py-1 rounded-full bg-engineering/10 text-engineering border border-engineering/20"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 tech-border bg-gradient-to-r from-primary to-accent text-background hover:shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              SPECS
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="tech-border border-primary text-primary hover:bg-primary hover:text-background"
            >
              QUOTE
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Products = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      
      {/* Manufacturing Effects */}
      <ManufacturingEffects />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative">
        <PrecisionGrid className="opacity-5" />
        
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-8 text-muted-foreground hover:text-primary"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic glow-text">PRODUCT SHOWCASE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Precision-engineered metal spinning solutions across diverse industries. 
              Each component crafted with 50+ years of manufacturing excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold holographic">22+</div>
                <div className="text-muted-foreground text-sm">PRODUCTS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold holographic">±0.01mm</div>
                <div className="text-muted-foreground text-sm">TOLERANCE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold holographic">8+</div>
                <div className="text-muted-foreground text-sm">INDUSTRIES</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold holographic">24/7</div>
                <div className="text-muted-foreground text-sm">PRODUCTION</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="inline-block tech-border bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
              <div className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                  <Settings className="w-8 h-8 text-accent" />
                  <Shield className="w-8 h-8 text-engineering" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Need Custom Manufacturing?</h3>
                <p className="text-muted-foreground mb-6 max-w-lg">
                  Our engineering team specializes in bespoke solutions for unique applications. 
                  Get a personalized quote for your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="tech-border bg-gradient-to-r from-primary to-accent text-background hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    REQUEST CUSTOM QUOTE
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="tech-border border-primary text-primary hover:bg-primary hover:text-background"
                  >
                    TECHNICAL CONSULTATION
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;