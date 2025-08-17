import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="space-y-4"
      >
        <div className="p-4 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-xl">SIMELABS KOCHI</h3>
          <p className="text-gray-600 dark:text-gray-300">Role: Data Science Intern | Duration: Jun 2025 - Jul 2025</p>
        </div>
        <div className="p-4 border rounded-xl hover:shadow-lg transition">
          <h3 className="font-semibold text-xl">FEATHERS SOLUTION</h3>
          <p className="text-gray-600 dark:text-gray-300">Role: AI/ML Intern | Duration: Jun 2024 - Jul 2024</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
