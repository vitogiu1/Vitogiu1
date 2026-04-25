import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import SkillsSection from '@/components/Skills/SkillsSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import ContactSection from '@/components/Contact/ContactSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="main-wrapper">
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
