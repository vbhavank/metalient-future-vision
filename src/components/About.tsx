import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="holographic">HERITAGE MEETS INNOVATION</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Story */}
            <Card className="tech-border bg-card/50 backdrop-blur-sm">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="outline" className="border-primary text-primary">EST. 1970s</Badge>
                  <Badge variant="outline" className="border-accent text-accent">BENGALURU</Badge>
                </div>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Culminating over <span className="text-primary font-bold">50 years</span> and 
                  <span className="text-accent font-bold"> three generations</span> of experience in metal forming technologies, 
                  <span className="holographic font-bold"> METALIENT PVT LTD</span> strives to increase accessibility to innovation 
                  and support top-class research.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Located at the heart of India's Silicon Valley, Bengaluru and Asia's largest Industrial area, 
                  Peenya Industrial Area, we offer high-class metal formed products complemented with deep experience 
                  building Computer Numerical Control (CNC) based metal spinning machines.
                </p>
              </div>
            </Card>

            {/* Key Differentiators */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="tech-border bg-engineering/10 border-engineering/20">
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-engineering mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </Card>
              
              <Card className="tech-border bg-customized/10 border-customized/20">
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-customized mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Generations</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="space-y-8">
            {/* Mission */}
            <Card className="tech-border bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 holographic">OUR MISSION</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize precision metal spinning technology through innovation, 
                  making advanced manufacturing accessible to researchers, engineers, 
                  and industries worldwide while maintaining uncompromising quality standards.
                </p>
              </div>
            </Card>

            {/* Location Highlight */}
            <Card className="tech-border bg-card/50 backdrop-blur-sm">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>📍</span> STRATEGIC LOCATION
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-muted-foreground">Bengaluru - India's Silicon Valley</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-muted-foreground">Peenya Industrial Area - Asia's Largest</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-muted-foreground">Global Export Hub</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="tech-border bg-card/50 backdrop-blur-sm">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">QUALITY ASSURANCE</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    ISO Certified
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    Export Quality
                  </Badge>
                  <Badge variant="secondary" className="bg-engineering/10 text-engineering border-engineering/20">
                    R&D Approved
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};