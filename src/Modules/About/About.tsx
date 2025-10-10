interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultAchievements = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Finalized", value: "10+" },
  { label: "Coffee Consumed", value: "∞" },
];

const About = ({
  title = "About Me",
  description = "I’m a passionate Full-Stack Developer dedicated to building innovative, user-focused web solutions that enhance digital experiences and drive business growth.",

  companiesTitle = "Valued by clients worldwide",
  achievementsTitle = "My Achievements in Numbers",
  achievementsDescription = "Showcasing milestones that reflect my journey as a developer — building impactful projects, optimizing performance, and delivering scalable digital solutions.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section id="about" className="py-32 container mx-auto">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl text-white font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card bg-foreground rounded-[15px] text-white font-monospace text-sm flex flex-col gap-[5px] w-full px-[25px] py-[25px] border-r border-l border-indigo-500">
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">1</p>
              <p className="code">
                <span className="text-[#ff79c6]">public static object</span>
                <span className="text-[#50fa7b]">GetPersonalInfo</span>
                <span className="text-[#8be9fd]">()</span>
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">2</p>
              <p className="code">
                <span className="text-[#8be9fd]">{"{"}</span>
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">3</p>
              <p className="code ml-[30px]">
                <span className="text-[#ff79c6]">return new</span>
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">4</p>
              <p className="code ml-[30px]">
                <span className="text-[#50fa7b]">{"{"}</span>
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">5</p>
              <p className="code ml-[60px]">
                Nickname <span className="text-[#ff79c6]">=</span>
                <span className="text-[#f1fa8c]">"Fuade Hasan Alamin"</span>,
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">6</p>
              <p className="code ml-[60px]">
                Hobbies <span className="text-[#ff79c6]">= new</span>
                <span className="text-[#8be9fd] italic">List</span>&lt;
                <span className="type text-[#ff79c6]"></span>&gt;
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">7</p>
              <p className="code ml-[90px]">
                <span className="text-[#bd93f9]">{"{"}</span>
                <span className="text-[#f1fa8c]">
                  "Coding"<span className="text-white">,</span> "Building simple
                  electronics"<span className="text-white">,</span> "Gaming"
                </span>
                <span className="text-[#bd93f9]">{"}"}</span>,
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">8</p>
              <p className="code ml-[60px]">
                Languages <span className="text-[#ff79c6]">= new</span>
                <span className="text-[#8be9fd] italic">List</span>&lt;
                <span className="type text-[#ff79c6]"></span>&gt;
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">9</p>
              <p className="code ml-[90px]">
                <span className="text-[#bd93f9]">{"{"}</span>
                <span className="text-[#f1fa8c]">
                  "Bangla (native)"<span className="text-white">,</span>{" "}
                  "English"
                </span>
                <span className="text-[#bd93f9]">{"}"}</span>,
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">10</p>
              <p className="code ml-[60px]">
                Bio <span className="text-[#ff79c6]">=</span>
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">11</p>
              <p className="code ml-[90px]">
                <span className="text-[#f1fa8c]">
                  "I create stuff, every time"
                </span>
                <span className="text-[#ff79c6]">+</span>
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">12</p>
              <p className="code ml-[90px]">
                <span className="text-[#f1fa8c]">
                  "from the scratch just to learn new things"
                </span>
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">13</p>
              <p className="code ml-[30px]">
                <span className="text-[#50fa7b]">{"}"}</span>;
              </p>
            </div>
            <div className="line flex gap-[15px]">
              <p className="number text-white/20 w-[20px] text-right">14</p>
              <p className="code">
                <span className="text-[#8be9fd]">{"}"}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-full rounded-lg border-l border-r border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800 flex items-center justify-center">
              <div>
                <figure className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
                  <img src="https://i.postimg.cc/W3b5kTjT/IMG20230806161044-1.jpg" alt="" className="rounded-full h-24 w-24 object-cover"/>
                  <figcaption className="sr-only">
                    Fuade Hasan Alamin, Web Developer
                  </figcaption>
                </figure>
                <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                 Fuade Hasan Alamin
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Web Developer
                </p>
                <div className="flex items-center justify-center">
                  {/* <a
                    href="#"
                    className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
                  >
                    Contact
                  </a> */}
                  <a
                    href="https://github.com/alamin6688"
                    target="_blank"
                    className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="text-center">{companiesTitle} </p>
        </div>
        <div className="bg-[#0A0A0A] relative overflow-hidden rounded-xl p-10 md:p-16 text-white border-t border-b  border-indigo-500">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="text-muted-foreground max-w-xl">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
