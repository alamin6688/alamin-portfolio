import { Navbar } from "@/components/Navbar";
import About from "@/Modules/About/About";
import Contact from "@/Modules/Contact/Contact";
import Hero from "@/Modules/Hero/hero";
import { Projects } from "@/Modules/Projects/Projects";
import Skills from "@/Modules/Skills/Skills";


const Homepage = () => {
  return (
    <>
    <div className="px-4 lg:px-0">

      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
    </>
  );
};

export default Homepage;
