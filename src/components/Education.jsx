// src/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-white text-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
          <h3 className="text-xl font-semibold">University of Illinois at Springfield</h3>
          <p className="text-sm text-gray-600">M.S. in Management Information Systems – Dec 2023</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
          <h3 className="text-xl font-semibold">Gokaraju Rangaraju Institute of Engineering & Technology</h3>
          <p className="text-sm text-gray-600">B.Tech in Electronics & Communication Engineering – Jul 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
