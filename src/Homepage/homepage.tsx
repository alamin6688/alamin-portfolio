import { Navbar } from "@/components/Navbar";
import About from "@/Modules/About/About";
import Contact from "@/Modules/Contact/Contact";
import Footer from "@/Modules/Footer/Footer";
import Hero from "@/Modules/Hero/hero";
import { Projects } from "@/Modules/Projects/Projects";
import Skills from "@/Modules/Skills/Skills";

const Homepage = () => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
