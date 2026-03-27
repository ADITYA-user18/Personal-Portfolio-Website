import CustomCursor from "@/components/shared/CustomCursor";
import SliderEngine from "@/components/shared/SliderEngine";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <SliderEngine>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />

      </SliderEngine>
    </main>
  );
}