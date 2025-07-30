import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CoreSkills from "./components/CoreSkills";
import Contact from "./components/Contact";  // ✅ Correct import

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white to-sky-100 text-gray-800 min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CoreSkills />
      <Contact /> {/* ✅ Correct usage */}
    </div>
  );
}
