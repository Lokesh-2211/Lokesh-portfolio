import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Lokesh</h1>
        <div className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-500 transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500 transition">About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500 transition">Projects</a>
          <a href="#experience" className="text-gray-700 hover:text-blue-500 transition">Experience</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
