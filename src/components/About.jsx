import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-primary dark:border-secondary"
      >
        <img
          src="my-portfolio/public/RITHICK_SHABU.jpg" // ✅ use public folder path
          alt="Rithick Shabu"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Me
        </h2>
        <p className="mb-4 text-lg md:text-xl">
          I am a passionate web developer with experience in building modern and responsive web applications. I love creating interactive user experiences using the latest technologies and best practices.
        </p>
        <p className="text-lg md:text-xl">
          I have worked on projects involving React, Tailwind CSS, and other modern tools. I enjoy learning new frameworks and continuously improving my skills to deliver high-quality software.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
