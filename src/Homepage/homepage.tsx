// import Navbar from "@/components/Navbar";
import { Navbar } from "@/components/Navbar";
import About from "@/Modules/About/About";
import Contact from "@/Modules/Contact/Contact";
import Hero from "@/Modules/Hero/hero";


const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Contact/>
    </>
  );
};

export default Homepage;
