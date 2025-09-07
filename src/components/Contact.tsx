import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MouseParallax } from "@/components/CursorEffects";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    industry: "",
    projectDetails: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Project Inquiry from ${formData.name} - ${formData.company}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Industry: ${formData.industry}

Project Details:
${formData.projectDetails}
    `.trim();
    
    const mailtoLink = `mailto:vasunmetalient@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Email Client Opened",
      description: "Your inquiry has been prepared. Please send the email to complete your request.",
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      industry: "",
      projectDetails: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
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
          <MouseParallax intensity={0.3}>
            <Card className="tech-border bg-card/50 backdrop-blur-sm animate-micro-bounce">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="tech-border bg-background/50" 
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="tech-border bg-background/50" 
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="tech-border bg-background/50" 
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Industry</label>
                    <Input 
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="tech-border bg-background/50" 
                      placeholder="e.g., Aerospace, Medical, Automotive"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details *</label>
                    <Textarea 
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="tech-border bg-background/50 min-h-[120px]" 
                      placeholder="Describe your requirements, materials, quantities, and timeline..."
                      required
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
          </MouseParallax>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office */}
            <MouseParallax intensity={0.2}>
              <Card className="tech-border bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm animate-tilt">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>🏭</span> MANUFACTURING HUB
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="font-bold text-primary">METALIENT INDUSTRIES PVT LTD</p>
                    <p>39 4th Cross, Bodu Bande Anjaneya Swamy Temple Street</p>
                    <p>Srigandha Nagara, Bengaluru - 560091</p>
                    <p>Karnataka, India</p>
                    <div className="mt-4 space-y-2">
                      <p className="flex items-center gap-2">
                        <span>📞</span> 
                        <a href="tel:+919886870752" className="text-primary hover:underline">
                          +91 9886870752
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>✉️</span> 
                        <a href="mailto:vasunmetalient@gmail.com" className="text-primary hover:underline">
                          vasunmetalient@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </MouseParallax>

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