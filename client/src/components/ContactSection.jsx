import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent"
    >
      {/* ✉️ Heading */}
      <motion.h2
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        📬 Let’s Connect
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Reach out — let’s build something great together!
      </motion.p>

      {/* Contact Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-12 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Email */}
        <motion.a
          href="mailto:sagarmistry@example.com"
          className="flex flex-col items-center gap-2 group"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FiMail className="text-5xl text-red-400 group-hover:text-red-500 transition" />
          <span className="text-gray-300 group-hover:text-white transition font-medium">
            Email
          </span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/sagarmistry"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaLinkedin className="text-5xl text-blue-500 group-hover:text-blue-600 transition" />
          <span className="text-gray-300 group-hover:text-white transition font-medium">
            LinkedIn
          </span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/sagarmistry"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaGithub className="text-5xl text-gray-300 group-hover:text-white transition" />
          <span className="text-gray-300 group-hover:text-white transition font-medium">
            GitHub
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
