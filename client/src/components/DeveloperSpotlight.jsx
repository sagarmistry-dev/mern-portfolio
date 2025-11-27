import { motion } from "framer-motion";

const DeveloperSpotlight = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-500">Sagar Mistry</span>
      </motion.h1>

      <motion.h2
        className="text-lg sm:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Full-Stack Developer crafting scalable and elegant web experiences.
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Passionate about building performant backend systems and sleek,
        responsive UIs using modern JavaScript frameworks.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          View My Work
        </a>
      </motion.div>
    </div>
  );
};

export default DeveloperSpotlight;
