// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail } from "lucide-react";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="py-20 px-6 max-w-6xl mx-auto text-center
//                  bg-gradient-to-r from-primary to-secondary text-white
//                  dark:from-gray-800 dark:to-gray-900"
//     >
//       {/* Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl font-bold mb-6"
//       >
//         Contact Me
//       </motion.h2>

//       {/* Social Links */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="flex justify-center gap-6 mt-6"
//       >
//         <a
//           href="https://github.com/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-gray-200"
//         >
//           <Github size={28} />
//         </a>
//         <a
//           href="https://linkedin.com/in/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-gray-200"
//         >
//           <Linkedin size={28} />
//         </a>
//         <a
//           href="https://mail.google.com/mail/?view=cm&fs=1&to=raveendranshabu@gmail.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-gray-200"
//         >
//           <Mail size={28} />
//         </a>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-6xl mx-auto text-center
                 bg-gradient-to-r from-primary to-secondary text-white
                 dark:from-gray-800 dark:to-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex justify-center gap-6 mt-6"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=raveendranshabu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          <Mail size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
