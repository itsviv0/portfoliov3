import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const appearElements = document.querySelectorAll(".appear-animation");

    const appearObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            appearObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    appearElements.forEach((element) => {
      appearObserver.observe(element);
    });

    return () => {
      appearElements.forEach((element) => {
        appearObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-navy">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
