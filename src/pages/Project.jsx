import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  const projectDetails = [
    "Used a customized Pelican Optimization Algorithm (POA).",
    "Enhanced secure routing and intrusion detection.",
    "Implemented machine learning for attack detection.",
    "Developed using Python and network simulation tools.",
    "Integrated Python scripting for real-time monitoring.",
    "Optimized security parameters for improved IDS accuracy.",
    "Simulated and tested WSN frameworks for security robustness.",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 py-12">
      <motion.div
        className="bg-gray-300 p-6 md:p-8 rounded-lg shadow-lg text-center border border-transparent cursor-pointer 
        w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 20px 4px rgba(34, 139, 34, 0.7)", // Softer green glow
          borderColor: "rgba(34, 139, 34, 0.6)", // Smooth green border
          backgroundColor: "rgba(245, 255, 250, 1)", // Softer green tint
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-2 text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Final Year Project
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-800 font-semibold text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Pelican Optimization Algorithm for Enhancing Mobile Secure Routing
        </motion.p>

        <motion.p
          className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Focused on improving security in Wireless Sensor Networks (WSNs).
        </motion.p>

        {/* List of Features */}
        <ul className="text-gray-700 text-left list-disc list-inside leading-relaxed text-base md:text-lg">
          {projectDetails.map((detail, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mb-2"
            >
              {detail}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Project;
