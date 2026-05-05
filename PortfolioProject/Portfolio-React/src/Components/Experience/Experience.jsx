import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <div
      id="Experience"
      className="text-white max-w-6xl mx-auto px-6 md:px-20 py-20"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Experience
      </h2>

      <div className="space-y-8">

        {/* CTTC */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black bg-opacity-30 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 flex gap-4"
        >
          <FaBriefcase size={30} className="text-blue-400 mt-1" />

          <div>
            <h3 className="text-xl font-semibold">
              Data Analytics Intern
            </h3>
            <p className="text-gray-400">
              CTTC
            </p>

            <ul className="mt-3 text-gray-300 text-sm list-disc pl-5 space-y-1">
              <li>Worked on data analysis and visualization</li>
              <li>Built Netflix Data Insights Dashboard</li>
              <li>Generated meaningful insights from data</li>
            </ul>
          </div>
        </motion.div>

        {/* Tech Mahindra */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black bg-opacity-30 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 flex gap-4"
        >
          <FaBriefcase size={30} className="text-green-400 mt-1" />

          <div>
            <h3 className="text-xl font-semibold">
              Technical Support Executive
            </h3>

            <p className="text-gray-400">
              Tech Mahindra | Mar 2025 – Jan 2026
            </p>

            <ul className="mt-3 text-gray-300 text-sm list-disc pl-5 space-y-1">
              <li>Provided technical support and resolved issues</li>
              <li>Handled troubleshooting for system problems</li>
              <li>Improved communication and problem-solving skills</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Experience