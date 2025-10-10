// import Typewriter from "./Typewriter";
// import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import "./hero.css";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const viewerContainer = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  //   const handleDone = () => {
  //     console.log(`Done after 25 loops!`);
  //   };

  // script loader singleton
  const ensureSplineScript = async () => {
    const existing = document.querySelector(
      'script[src="https://unpkg.com/@splinetool/viewer@1.10.77/build/spline-viewer.js"]'
    ) as HTMLScriptElement | null;

    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") return;
      // otherwise wait for it to load
      await new Promise<void>((res) => {
        existing.addEventListener("load", () => res(), { once: true });
      });
      return;
    }

    setLoading(true);

    const s = document.createElement("script");
    s.type = "module";
    s.src =
      "https://unpkg.com/@splinetool/viewer@1.10.77/build/spline-viewer.js";
    s.async = true;
    s.addEventListener("load", () => {
      s.setAttribute("data-loaded", "true");
    });
    document.body.appendChild(s);

    await new Promise<void>((res) =>
      s.addEventListener("load", () => res(), { once: true })
    );
    setLoading(false);
  };

  useEffect(() => {
    const container = viewerContainer.current;
    if (!container) return;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // stop observing
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }

          (async () => {
            await ensureSplineScript();

            // create the spline-viewer element after script is ready
            const el = document.createElement("spline-viewer");
            el.setAttribute(
              "url",
              "https://prod.spline.design/w-wqc9vN8AUUTA7J/scene.splinecode"
            );
            el.setAttribute("title", "3D robot scene");
            el.className = "robot-3d";

            container.appendChild(el);
            setLoaded(true);
          })();
        }
      }
    };

    const obs = new IntersectionObserver(onIntersect, {
      root: null,
      threshold: 0.1,
    });
    observerRef.current = obs;
    obs.observe(container);

    return () => {
      try {
        if (observerRef.current) observerRef.current.disconnect();
      } catch {
        /* ignore */
      }
    };
  }, []);

  return (
    <div className="hero-root h-[600px] mx-auto flex items-center justify-center px-4 max-w-screen-2xl">
      <img
        id="image-gradient"
        src="https://i.postimg.cc/TwfMf6kj/gradient.png"
        alt="gradient"
      />
      <div id="layer-blur"></div>

      <div className="hero-inner w-full flex flex-col md:flex-row items-center md:items-stretch gap-8">
        <div className="hero-text flex-1 flex items-center justify-start w-full">
          <div className="space-y-3">
            <h1 className="text-white text-3xl md:text-6xl">
              Fuade Hasan Alamin
            </h1>
            <h2 className="text-2xl bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent font-poppins py-4 tracking-wider capitalize font-semibold">
              FULL STACK DEVELOPER
              {/* <Typewriter
                words={["Frontend Developer_", "MERN Stack Developer_"]}
                loop={25}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1500}
                onLoopDone={handleDone}
              /> */}
            </h2>
            <p className="text-muted-foreground capitalize tracking-[0.05rem] max-w-xl">
              I design and develop websites that do more than look good - they
              tell stories, evoke emotions, and feel alive
            </p>
            <Link to="#contact">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    const offset = 70; // same as your navbar height
                    const sectionPosition =
                      contactSection.getBoundingClientRect().top +
                      window.scrollY;
                    const offsetPosition = sectionPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none mt-3"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                  Contact me
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-visual flex-1 flex items-center justify-center relative lg:w-1/2">
          <div
            ref={viewerContainer}
            aria-hidden={false}
            className="w-full flex justify-center items-center"
          />
          {!loaded && (
            <div className="robot-placeholder w-48 h-48 md:w-64 md:h-64 bg-gray-800/50 rounded-md flex items-center justify-center text-sm text-white">
              {loading ? "Loading 3D..." : "Preparing 3D viewer"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
