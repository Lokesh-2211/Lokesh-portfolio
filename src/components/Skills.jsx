import React, { useEffect, useState } from "react";

const groupedSkills = {
  "Cloud Platforms": [
    { name: "Azure", level: 85 },
    { name: "AWS", level: 70 },
    { name: "GCP", level: 60 },
  ],
  "Big Data & ETL": [
    { name: "Apache Spark", level: 90 },
    { name: "Databricks", level: 85 },
    { name: "Azure Data Factory", level: 80 },
    { name: "Airflow", level: 65 },
  ],
  "Programming & Scripting": [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Scala", level: 60 },
  ],
  "Data Warehousing & BI": [
    { name: "Snowflake", level: 80 },
    { name: "Power BI", level: 75 },
  ],
  "Version Control & CI/CD": [
    { name: "Git & GitHub", level: 90 },
    { name: "GitHub Actions", level: 70 },
  ],
};

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-10 px-4 bg-white text-gray-800" id="skills">
      <h2 className="text-2xl font-bold text-center mb-8">Technical Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(groupedSkills).map(([category, skills], idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-3 text-sky-700">{category}</h3>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                      style={{
                        width: animated ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
