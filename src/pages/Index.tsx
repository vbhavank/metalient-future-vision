import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Materials } from "@/components/Materials";
import { Industries } from "@/components/Industries";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Materials />
      <Industries />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
