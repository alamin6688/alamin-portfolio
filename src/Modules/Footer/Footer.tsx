
import { IoLogoAmplify } from "react-icons/io5";

const Footer = () => {
  return (
    <section id="footer" className="bg-foreground border-t-2 border-[#45428d]">
      <footer className="footer text-neutral-content items-center md:justify-center p-4 py-10 max-w-screen-2xl mx-auto text-white">
        <aside className="grid-flow-col items-center">
          <div className="flex-shrink-0 flex justify-start">
            <a
              href="#home"
              className="flex items-center justify-center hover:shadow-lg duration-300 hover:scale-[1.25] transition-all"
            >
              <IoLogoAmplify className="md:hidden text-5xl text-white bg-gradient-to-r from-pink-600 to-purple-700 mr-2 bg-zinc-100 px-1 rounded-lg" />
            </a>
          </div>
          <div className="tracking-widest md:text-center">
            <p>Developer Portfolio by Fuade Hasan Alamin</p>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
          </div>
        </aside>
        
      </footer>
    </section>
  );
};

export default Footer;