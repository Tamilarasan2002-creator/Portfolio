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
    <div className="flex flex-col justify-center items-center min-h-screen bg-black px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Technical Skills Box */}
        <motion.div
          className="bg-gray-300 p-8 rounded-lg shadow-lg w-[90%] md:w-[45%] flex flex-col items-center border border-transparent mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 0px 20px 5px rgba(0, 255, 255, 0.9)", // Cyan glow
            borderColor: "rgba(0, 255, 255, 0.8)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Heading */}
          <motion.h1
            className="text-3xl font-bold mb-4 text-black"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            💻 Technical Skills
          </motion.h1>

          {/* Skill List */}
          <div className="text-gray-800 space-y-2 text-center">
            {[
              "🔹 Programming: Python | SQL | JavaScript",
              "🔹 Web Dev: HTML | CSS | Tailwind CSS | React | Django | Frappe",
              "🔹 Database: MySQL",
              "🔹 AI & ML: Pandas | NumPy",
              "🔹 Tools: GitHub | Postman",
            ].map((skill, index) => (
              <motion.p key={index} variants={textVariant} custom={index + 1}>
                {skill}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Box */}
        <motion.div
          className="bg-gray-300 p-8 rounded-lg shadow-lg w-[90%] md:w-[45%] flex flex-col items-center border border-transparent mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0px 0px 20px 5px rgba(255, 0, 255, 0.9)", // Magenta glow
            borderColor: "rgba(255, 0, 255, 0.8)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Heading */}
          <motion.h1
            className="text-3xl font-bold mb-4 text-black"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            🎯 Soft Skills
          </motion.h1>

          {/* Soft Skills List */}
          <div className="text-gray-800 space-y-2 text-center">
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
