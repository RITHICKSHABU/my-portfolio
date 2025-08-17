// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-7xl font-extrabold mb-4"
//       >
//         Hi, I’m <span className="text-blue-500">Your Name</span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl"
//       >
//         A passionate <span className="font-semibold">AI/ML Engineer</span> and <span className="font-semibold">Web Developer</span> who loves building impactful projects.
//       </motion.p>

//       <motion.a
//         href="#projects"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.6, duration: 1 }}
//         className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-600 transition"
//       >
//         View My Work
//       </motion.a>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center min-h-screen px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      {/* Animated Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4"
      >
        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">RTHICK SHABU R.C</span>
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mb-8 max-w-2xl"
      >
        I build modern, responsive web applications and interactive UI experiences. Let’s make your ideas come to life.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
