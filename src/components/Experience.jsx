import React from "react";

const experiences = [
  {
    date: "Feb 2024 – Present",
    role: "Azure Data Engineer",
    company: "United Health",
    responsibilities: [
      "Developed real-time data pipeline with Azure Synapse and Stream Analytics processing 15M+ daily events.",
      "Built Azure Data Factory and Kafka workflows to reduce latency and enable real-time insights.",
      "Designed Databricks clusters transforming 10TB+ daily data, enhancing performance by 35%.",
      "Created Power BI dashboards and Azure Monitor alerts to reduce incident response time.",
      "Collaborated cross-functionally to gather requirements and improve data systems by 20%.",
      "Implemented ML models in Azure ML to predict call quality issues and improve reliability.",
    ],
    technologies: [
      "Azure Synapse", "Stream Analytics", "ADF", "Kafka",
      "Databricks", "Power BI", "Azure ML", "Python", "SQL"
    ],
  },
  {
    date: "Aug 2022 – Feb 2024",
    role: "Data Engineer",
    company: "Infinite Electronics",
    responsibilities: [
      "Automated ingestion of 8+ TB IoT data using ADF and Apache Airflow.",
      "Processed real-time streams via Kafka & Event Hubs with 50k+ events/sec capacity.",
      "Reduced batch processing time 35% by optimizing Databricks workflows.",
      "Built Power BI and Grafana dashboards improving supply chain visibility by 20%.",
      "Enabled anomaly detection using Azure ML improving forecasting accuracy.",
      "Developed CI/CD pipelines using Git and Jenkins for ETL deployments.",
    ],
    technologies: [
      "Azure", "ADF", "Databricks", "Kafka",
      "Event Hubs", "Grafana", "Power BI", "Airflow"
    ],
  },
  {
    date: "Aug 2021 – Jul 2022",
    role: "Data Engineer",
    company: "Mindtree ",
    responsibilities: [
      "Wrote Python and fleet queries for dynamic dataset sourcing and faster acquisition.",
      "Built custom visualizations in Grafana and JavaScript for real-time decision making.",
      "Processed 5TB+ daily fleet data using Apache Kafka and Spark with alerting mechanisms.",
      "Integrated AWS Lambda and S3 for cost-efficient ETL pipelines.",
    ],
    technologies: [
      "Apache Spark", "Kafka", "Grafana", "Python", "AWS Lambda", "JavaScript"
    ],
  },
  {
    date: "Aug 2020 – Jul 2021",
    role: "Data Engineer",
    company: "Wipro Ltd.",
    responsibilities: [
      "Gathered requirements from cross-functional teams for sales KPIs and ETL design.",
      "Queried 15M+ records using SQL and implemented ETL via Talend for Snowflake.",
      "Used Python and R for trend analysis and predictive metrics.",
      "Created Tableau dashboards driving a 9% boost in stakeholder decisions.",
    ],
    technologies: [
      "SQL", "Python", "Talend", "Snowflake", "Tableau", "R", "AWS Glue"
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-12 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
      <div className="max-w-5xl mx-auto grid gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <h3 className="text-lg text-indigo-600 font-semibold">{exp.date}</h3>
            <h2 className="text-2xl font-bold">{exp.role}</h2>
            <p className="text-md font-medium text-gray-700 mb-4">{exp.company}</p>

            <div className="mb-3">
              <h4 className="font-semibold text-indigo-500">Responsibilities:</h4>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-500">Technologies:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, id) => (
                  <span
                    key={id}
                    className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
