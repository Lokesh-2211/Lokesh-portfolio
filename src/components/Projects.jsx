import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Olympic Data Engineering",
      description:
        "Built a robust ETL pipeline using Python and Apache Spark to process Olympic datasets. Hosted on GitHub.",
      link: "https://github.com/your-repo-link",
    },
    {
      title: "Azure Data Pipeline",
      description:
        "Designed and deployed an end-to-end Azure Data Factory pipeline integrated with Data Lake and Synapse Analytics.",
      link: "",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-sky-100 py-10 px-5 text-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-sky-700">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-sky-100 hover:scale-105 hover:shadow-xl transition-all duration-300 hover:border-sky-300"
          >
            <h3 className="text-xl font-bold text-sky-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sky-600 hover:underline font-semibold"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
