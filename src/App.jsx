import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <footer className="text-center py-6 border-t mt-10">
        <p>© {new Date().getFullYear()} RITHICK SHABU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
