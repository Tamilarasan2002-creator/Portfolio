import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const scrollUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-6 py-20 overflow-hidden">
      {/* Main Experience Box */}
      <motion.div
        className="bg-gray-300 p-6 sm:p-8 rounded-lg shadow-lg text-center border border-transparent cursor-pointer 
        w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 0px 25px 5px rgba(138, 43, 226, 0.8)", // Neon purple glow
          borderColor: "rgba(138, 43, 226, 0.8)", // Border glow effect
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-xl sm:text-2xl font-bold mb-3 text-black"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          💼 Full-Stack Python Developer
        </motion.h2>

        {/* Animated Company Name */}
        <motion.p
          className="text-gray-800 font-semibold text-base sm:text-lg"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Regent Info Solution, Coimbatore
        </motion.p>

        {/* Animated List of Experience */}
        <ul className="text-gray-800 text-left list-disc list-inside mt-4 leading-relaxed text-sm sm:text-base px-4">
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
        className="bg-purple-600 text-white p-4 sm:p-5 rounded-lg shadow-lg text-center border w-full max-w-xs sm:max-w-sm md:max-w-md cursor-pointer mt-6"
        variants={scrollUpVariant}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.6)", // White glowing effect
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        <h3 className="text-lg sm:text-xl font-semibold">🛠 Hands-on Experience</h3>
        <p className="text-sm sm:text-base mt-2">
          Worked on real-world projects using Python, SQL, JS, Django, React, and Frappe.
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;
