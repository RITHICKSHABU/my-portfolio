// import { useState, useEffect } from "react";
// import { Sun, Moon } from "lucide-react";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-md">
//       <div className="text-xl font-bold">My Portfolio</div>

//       <div className="flex items-center gap-6">
//         {/* Navigation links */}
//         <a href="#hero" className="hover:text-blue-500">Home</a>
//         <a href="#about" className="hover:text-blue-500">About</a>
//         <a href="#projects" className="hover:text-blue-500">Projects</a>
//         <a href="#experience" className="hover:text-blue-500">Experience</a>
//         <a href="#contact" className="hover:text-blue-500">Contact</a>

//         {/* Dark/light mode toggle */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//         >
//           {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react"; // ✅ hooks must be imported
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition">
              {link.name}
            </a>
          ))}

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition">
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition self-start"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
