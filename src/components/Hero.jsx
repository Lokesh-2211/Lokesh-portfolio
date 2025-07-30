import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/lokesh.jpeg"; // Ensure the image name is correct and exists

export default function Hero() {
  return (
    <section id = "Home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Lokesh Mudduluru"
          className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lokesh Mudduluru
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Data Engineer | Big Data | Azure | Python | Spark | Snowflake
          </p>
        </motion.div>
      </div>
    </section>
  );
}
