import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutMeSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}