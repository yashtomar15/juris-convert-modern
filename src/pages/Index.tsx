
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <About />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
