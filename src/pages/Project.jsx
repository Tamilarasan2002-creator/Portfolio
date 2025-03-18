import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
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
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        className="bg-gray-300 p-8 rounded-lg shadow-lg text-center border border-transparent cursor-pointer"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 0px 20px 4px rgba(34, 139, 34, 0.7)", // Medium green glow
          borderColor: "rgba(34, 139, 34, 0.6)", // Softer green border
          backgroundColor: "rgba(240, 255, 240, 1)", // Gentle green tint
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <h2 className="text-2xl font-bold mb-2">🚀 Final Year Project</h2>
        <p className="text-gray-700 font-semibold">
          Pelican Optimization Algorithm for Enhancing Mobile Secure Routing
        </p>
        <p className="text-gray-500 mb-4">
          Focused on improving security in Wireless Sensor Networks (WSNs).
        </p>

        <ul className="text-gray-600 text-left list-disc list-inside">
          {projectDetails.map((detail, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
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
