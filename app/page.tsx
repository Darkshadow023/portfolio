import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
