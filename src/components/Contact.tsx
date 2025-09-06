import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="holographic">GET IN TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your precision metal spinning project to life? Let's discuss your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="tech-border bg-card/50 backdrop-blur-sm">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input 
                      className="tech-border bg-background/50" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input 
                      className="tech-border bg-background/50" 
                      placeholder="Company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    className="tech-border bg-background/50" 
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Industry</label>
                  <Input 
                    className="tech-border bg-background/50" 
                    placeholder="e.g., Aerospace, Medical, Automotive"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Project Details</label>
                  <Textarea 
                    className="tech-border bg-background/50 min-h-[120px]" 
                    placeholder="Describe your requirements, materials, quantities, and timeline..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full tech-border glow-primary bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  SUBMIT PROJECT INQUIRY
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office */}
            <Card className="tech-border bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>🏭</span> MANUFACTURING HUB
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>METALIENT PVT LTD</p>
                  <p>Peenya Industrial Area</p>
                  <p>Bengaluru - 560058</p>
                  <p>Karnataka, India</p>
                </div>
              </div>
            </Card>

            {/* Capabilities Quick Facts */}
            <Card className="tech-border bg-card/50 backdrop-blur-sm">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">QUICK CAPABILITIES</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">0.5-12mm</div>
                    <div className="text-sm text-muted-foreground">Material Range</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">±0.05mm</div>
                    <div className="text-sm text-muted-foreground">Tolerance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-engineering">24/7</div>
                    <div className="text-sm text-muted-foreground">Production</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-customized">Global</div>
                    <div className="text-sm text-muted-foreground">Shipping</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Response Time */}
            <Card className="tech-border bg-card/50 backdrop-blur-sm">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">RESPONSE GUARANTEE</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">ONLINE NOW</span>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>📞 Technical queries: <span className="text-primary">2 hours</span></p>
                  <p>📊 Quote requests: <span className="text-primary">24 hours</span></p>
                  <p>🔧 Custom projects: <span className="text-primary">48 hours</span></p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};