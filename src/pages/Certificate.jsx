import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Certification = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-wrap justify-center gap-8">
        {[ 
          { title: "📜 Frontend Certificate", issuer: "Issued by Infosys", details: "HTML, CSS, JavaScript", color: "rgba(0, 255, 255, 0.8)" },
          { title: "📜 CyberSecurity", issuer: "Issued by Cisco Network Security", details: "Introduction to Cyber Security", color: "rgba(255, 165, 0, 0.8)" },
          { title: "📜 GET", issuer: "Issued by Government Of Tamil Nadu", details: "Typewriting English Junior (FIRST CLASS WITH DISTINCTION)", color: "rgba(0, 255, 0, 0.8)" },
          { title: "📜 Project Paper Presentation", issuer: "Issued by Kalpataru Institute of Technology", details: "2nd IEEE International Conference on Data Science and Network Security (ICDSNS - 2024)", color: "rgba(255, 0, 255, 0.8)" }
        ].map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 p-8 rounded-lg shadow-lg w-96 text-center border-2 border-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              boxShadow: `0px 0px 20px ${cert.color}`,
              borderColor: cert.color,
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <motion.h2 className="text-2xl font-bold mb-2" variants={textVariant} initial="hidden" animate="visible" custom={1}>
              {cert.title}
            </motion.h2>
            <motion.p className="text-gray-700 font-semibold" variants={textVariant} initial="hidden" animate="visible" custom={2}>
              {cert.issuer}
            </motion.p>
            <motion.p className="text-gray-500 mb-4" variants={textVariant} initial="hidden" animate="visible" custom={3}>
              {cert.details}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certification;