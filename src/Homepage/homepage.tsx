import Navbar from "@/components/Navbar";
import About from "@/Modules/About/About";
import Hero from "@/Modules/Hero/hero";


const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
    </>
  );
};

export default Homepage;
