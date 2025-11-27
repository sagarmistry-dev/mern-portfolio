import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";

const techs = [
  { name: "React", icon: SiReact, color: "text-sky-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-200" },
];

const AboutMe = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-transparent text-white"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 🧍 Left: About Description */}
        <motion.div
          className="space-y-6 text-lg text-gray-200 leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">👨‍💻 About Me</h2>

          <p>
            I'm <span className="font-semibold text-blue-400">Sagar Mistry</span>,
            a passionate Full-Stack Developer who loves building scalable, clean,
            and modern web applications.
          </p>

          <p>
            My expertise lies in{" "}
            <span className="text-blue-300 font-medium">
              JavaScript, React, Node.js, MongoDB, and C++
            </span>
            , focusing on crafting elegant frontend interfaces and robust backend
            systems that bring ideas to life.
          </p>

          <p>
            I thrive on solving challenging problems, learning new technologies,
            and collaborating on impactful projects that make a difference.
          </p>

          <motion.button
            onClick={handleScrollToContact}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md shadow-md transition"
            
            whileTap={{ scale: 0.95 }}
          >
            📬 Contact Me
          </motion.button>
        </motion.div>

        {/* ⚙️ Right: Tech Stack */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-blue-400 mb-10">
            🛠️ Tech Stack
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-items-center">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                  boxShadow: "0px 0px 12px rgba(0,0,255,0.5)",
                }}
              >
                <tech.icon className={`text-5xl ${tech.color}`} />
                <p className="text-sm text-gray-300">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
