import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Skills = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Skills Box - Technical Skills */}
        <motion.div
          className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-2xl flex flex-col items-center border border-transparent"
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px 5px rgba(0, 255, 255, 0.9)",
            borderColor: "rgba(0, 255, 255, 0.8)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl font-bold mb-4"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            SKILLS
          </motion.h1>

          {/* Animated Skill List */}
          <div className="text-gray-700 space-y-2">
            {[
              "🔹 Programming Languages: Python | SQL | JavaScript",
              "🔹 Web Development: HTML | CSS | Tailwind CSS | React.js | Django | Frappe",
              "🔹 Database: MySQL",
              "🔹 Machine Learning & AI: Pandas | NumPy",
              "🔹 Tools & DevOps: GitHub | Postman",
            ].map((skill, index) => (
              <motion.p key={index} variants={textVariant} custom={index + 1}>
                {skill}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Second Skills Box - Soft Skills */}
        <motion.div
          className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-2xl flex flex-col items-center border border-transparent"
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px 5px rgba(255, 0, 255, 0.9)",
            borderColor: "rgba(255, 0, 255, 0.8)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl font-bold mb-4"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            SOFT SKILLS
          </motion.h1>

          {/* Animated Soft Skills List */}
          <div className="text-gray-700 space-y-2">
            {[
              "💡 Problem-Solving",
              "💡 Strong Communication",
              "💡 Time Management",
              "💡 Team Collaboration",
              "💡 Critical Thinking",
            ].map((skill, index) => (
              <motion.p key={index} variants={textVariant} custom={index + 1}>
                {skill}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
