import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Timeline from "@/components/Timeline/Timeline";
import Skills from "@/components/Skills/Skills";
import Awards from "@/components/Awards/Awards";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Timeline />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
