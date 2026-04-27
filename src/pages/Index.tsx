import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Projects } from "@/components/Projects";
import { Story } from "@/components/Story";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <Projects />
      <Story />
      <Contact />
    </main>
  );
};

export default Index;
