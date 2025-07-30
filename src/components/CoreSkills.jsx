import React from "react";

export default function CoreSkills() {
  const skills = [
    "Python",
    "SQL",
    "Apache Spark",
    "Databricks",
    "Azure Data Factory",
    "Azure Synapse",
    "Snowflake",
    "Power BI",
    "Azure Event Hubs",
    "Azure Functions",
    "Kafka",
    "GCP BigQuery",
    "Elasticsearch",
    "Java",
  ];

  return (
    <div className="py-10 px-5 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">
        Core Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-sky-200 via-white to-sky-200 text-sky-900 font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300 border border-sky-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
