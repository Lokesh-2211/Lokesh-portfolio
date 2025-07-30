import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-16 px-4 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        I am a passionate Data Engineer with expertise in building scalable data
        pipelines, real-time processing, and cloud platforms like Azure and AWS.
        I enjoy solving business problems using tools like Databricks, Kafka, and
        Python. I'm always learning and love working on challenging projects that
        create real impact.
      </p>
    </section>
  );
};

export default About;
