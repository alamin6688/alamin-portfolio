

const Skills = () => {
  // Custom array of objects with skills in the specified order
  const skills = [
    {
      id: 1,
      name: "Next.js",
      image: "https://i.postimg.cc/bNPZX0wM/Next-js.png",
    },
    {
      id: 2,
      name: "TypeScript ",
      image: "https://i.postimg.cc/Wb9T90FF/Type-Script.png",
    },
    {
      id: 3,
      name: "Redux",
      image: "https://i.postimg.cc/T3LMCFX6/Redux.png",
    },
    {
      id: 4,
      name: "React.js",
      image:
        "https://gerold.themejunction.net/wp-content/uploads/2024/05/react.png",
    },
    {
      id: 5,
      name: "Express.js",
      image: "https://i.postimg.cc/TwNLjkt5/icons8-express-js-50.png",
    },
    {
      id: 6,
      name: "Node.js",
      image: "https://i.postimg.cc/7hT63qCj/icons8-nodejs-48.png",
    },
    {
      id: 7,
      name: "JavaScript",
      image: "https://i.postimg.cc/mgqFFp6c/icons8-javascript-48.png",
    },
    {
      id: 8,
      name: "MongoDB",
      image: "https://i.postimg.cc/Fzjft993/icons8-mongo-db-48.png",
    },
    {
      id: 9,
      name: "Mongoose",
      image: "https://i.postimg.cc/XJxzVk0w/Mongoose-js.png",
    },
    {
      id: 10,
      name: "PostgreSQL",
      image: "https://i.postimg.cc/T24tCw2h/Postgres-SQL.png",
    },
    {
      id: 11,
      name: "Google Cloud",
      image: "https://i.postimg.cc/jqLpsBL2/Google-Cloud.png",
    },
    {
      id: 12,
      name: "Tailwind",
      image: "https://i.postimg.cc/kMVF18WP/icons8-tailwind-css-48.png",
    },
    {
      id: 13,
      name: "Firebase",
      image: "https://i.postimg.cc/Yqz4bqDw/icons8-firebase-48.png",
    },

    {
      id: 14,
      name: "Bootstrap",
      image: "https://i.postimg.cc/28kjjdGP/icons8-bootstrap-64.png",
    },
    {
      id: 15,
      name: "Figma",
      image:
        "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png",
    },
    {
      id: 16,
      name: "Illustrator",
      image: "https://i.postimg.cc/tgYYqdqX/icons8-illustrator-48.png",
    },
    {
      id: 17,
      name: "CSS3",
      image: "https://i.postimg.cc/5t1CfQHy/icons8-css-48.png",
    },
    {
      id: 18,
      name: "HTML5",
      image: "https://i.postimg.cc/PrpZyjsX/icons8-html5-48.png",
    },
    {
      id: 19,
      name: "NPM",
      image: "https://i.postimg.cc/mkCVPYv3/NPM.png",
    },
    {
      id: 20,
      name: "Git",
      image: "https://i.postimg.cc/g01v3wqK/Git.png",
    },
    {
      id: 21,
      name: "VS-Code",
      image: "https://i.postimg.cc/4xStTKMc/Visual-Studio-Code-VS-Code.png",
    },
  ];

  return (
    <section id="skills" className="bg-foreground">
      <div className="container px-6 w-full pt-4 pb-12 mx-auto">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4 text-white  text-center">
            Skills Overview
          </h2>
          <p className="text-neutral-300  md:text-base text-center ">
            I take your ideas and turn them into unique web projects that not
            only inspire you but also engage your audience.
          </p>
        </div>

        {/* Dynamically rendering skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:grid-cols-6 items-center justify-center py-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center gap-4 bg-[#11152C] rounded-2xl overflow-hidden relative border-indigo-500 border-2 hover:border-[#7f48e6] hover:shadow-[0_0_30px_rgba(127,72,230,0.2)] duration-300 hover:scale-[1.15] transition-all p-4"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-delay={skill.id * 100} // Adding delay based on skill id
            >
              <img src={skill.image} alt={skill.name} className="w-16" />
              <p className="text-2xl text-center tracking-wider text-zinc-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
