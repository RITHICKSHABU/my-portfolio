// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "FTTH Image Classification Using ML",
//     description: "Built a system to classify FTTH images using Machine Learning.",
//     liveLink: "https://your-live-demo-link.com", // replace with actual deployed link
//     githubLink: "https://github.com/RITHICKSHABU/FTTH-MODEL",
//   },
//   {
//     title: "Salary Prediction",
//     description: "AI/ML model to predict salary from data.",
//     liveLink: "https://salary-prediction-team9.streamlit.app",
//     githubLink: "https://github.com/yourusername/salary-prediction", // replace with your repo
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
//       <motion.h2
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
//       >
//         Projects
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="grid md:grid-cols-2 gap-8"
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="p-6 border rounded-xl hover:shadow-xl transition flex flex-col justify-between"
//             whileHover={{ scale: 1.03 }}
//           >
//             <div>
//               <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
//             </div>
//             <div className="mt-4 flex gap-4">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//               >
//                 Live Demo
//               </a>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
//               >
//                 GitHub
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";

const projects = [
  {
    title: "FTTH Image Classification Using ML",
    description: "Built a system to classify FTTH images using Machine Learning.",
    liveLink: "https://your-live-demo-link.com", // replace with actual deployed link
    githubLink: "https://github.com/RITHICKSHABU/FTTH-MODEL",
  },
  {
    title: "Salary Prediction",
    description: "AI/ML model to predict salary from data.",
    liveLink: "https://salary-prediction-team9.streamlit.app",
    githubLink: "https://github.com/yourusername/salary-prediction",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-xl hover:shadow-xl transition flex flex-col justify-between"
            whileHover={{ scale: 1.03 }}
          >
            <div>
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
