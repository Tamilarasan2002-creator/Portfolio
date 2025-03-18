import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, ease: "easeOut" },
  }),
};

const Education = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Education Box 1 */}
        <motion.div
          className="bg-gray-300 p-8 rounded-lg shadow-lg w-96 text-center border border-transparent cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px 5px rgba(0, 170, 255, 0.9)",
            borderColor: "rgba(0, 170, 255, 0.8)",
            backgroundColor: "rgba(235, 245, 255, 1)",
          }}
        >
          {["🎓 College", "Mahendra Engineering College, 2020-2024", "B.E Cyber Security", "CGPA: 8.3"].map((text, i) => (
            <motion.p key={i} className="text-gray-700 text-lg font-semibold" variants={textVariant} initial="hidden" animate="visible" custom={i}>
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Education Box 2 */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg w-96 text-center border border-transparent cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px 5px rgba(255, 170, 0, 0.9)",
            borderColor: "rgba(255, 170, 0, 0.8)",
            backgroundColor: "rgba(255, 243, 224, 1)",
          }}
        >
          {["📚 School", "St. Mary's Higher Secondary School, 2019-2020", "Computer Science & Mathematics", "Percentage: 68%"].map((text, i) => (
            <motion.p key={i} className="text-gray-700 text-lg font-semibold" variants={textVariant} initial="hidden" animate="visible" custom={i}>
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Education Box 3 */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg w-96 text-center border border-transparent cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px 5px rgba(0, 255, 170, 0.9)",
            borderColor: "rgba(0, 255, 170, 0.8)",
            backgroundColor: "rgba(224, 255, 243, 1)",
          }}
        >
          {["📚 School", "St. Mary's Higher Secondary School, 2017-2018", "Percentage: 78%"].map((text, i) => (
            <motion.p key={i} className="text-gray-700 text-lg font-semibold" variants={textVariant} initial="hidden" animate="visible" custom={i}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
