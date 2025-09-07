import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Materials } from "@/components/Materials";
import { Industries } from "@/components/Industries";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { CursorEffects } from "@/components/CursorEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorEffects />
      <Hero />
      <Services />
      <Materials />
      <Industries />
      <About />
      <Partners />
      <Contact />
    </div>
  );
};

export default Index;
