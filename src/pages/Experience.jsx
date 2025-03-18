import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.6, ease: "easeOut" },
  }),
};

const scrollUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Experience = () => {
  const experienceDetails = [
    "Developed and customized applications within the Frappe framework using Python scripting and automation to improve business processes.",
    "Designed and optimized billing software screens and reports, enhancing system efficiency by 20% through optimized queries and automation.",
    "Created and deployed Python-based REST APIs for seamless data exchange between different modules.",
    "Improved database performance using SQL queries, reducing query execution time by 30%.",
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black space-y-8">
      {/* Main Experience Box */}
      <motion.div
        className="bg-gray-300 p-8 rounded-lg shadow-lg text-center border border-transparent cursor-pointer w-[90%] md:w-[60%]"
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 0px 25px 5px rgba(138, 43, 226, 0.8)", // Neon purple glow
          borderColor: "rgba(138, 43, 226, 0.8)", // Border glow effect
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-2xl font-bold mb-2 text-black"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          💼 Full-Stack Python Developer
        </motion.h2>

        {/* Animated Company Name */}
        <motion.p
          className="text-gray-700 font-semibold"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Regent Info Solution, Coimbatore
        </motion.p>

        {/* Animated List of Experience */}
        <ul className="text-gray-700 text-left list-disc list-inside mt-4">
          {experienceDetails.map((item, index) => (
            <motion.li
              key={index}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={index + 2}
              className="mb-2"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Hands-on Experience Box with Scroll-up Animation */}
      <motion.div
        className="bg-purple-600 text-white p-4 rounded-lg shadow-lg text-center border w-[50%] md:w-[30%] cursor-pointer"
        variants={scrollUpVariant}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.6)", // White glowing effect
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <h3 className="text-lg font-semibold">🛠 Hands-on Experience</h3>
        <p className="text-sm mt-2">Worked on real-world projects using Python, SQL, JS,  Django, React, and Frappe.</p>
      </motion.div>
    </div>
  );
};

export default Experience;
