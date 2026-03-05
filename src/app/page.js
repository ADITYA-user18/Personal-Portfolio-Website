import CustomCursor from "@/components/shared/CustomCursor";
import SliderEngine from "@/components/shared/SliderEngine";
import Hero from "@/components/sections/Hero";
// Future imports
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <SliderEngine>
        <Hero />
        <Skills />
        <About/>
        <Projects/>
        <Contact/>
        
      </SliderEngine>
    </main>
  );
}