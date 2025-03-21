import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const summaryText = [
    "Motivated Full-Stack Python Developer with expertise in Django, Frappe, and React.",
    "Skilled in Python scripting, automation, and secure backend development.",
    "Passionate about building scalable web applications and optimizing cybersecurity protocols.",
    "Strong problem-solving abilities and hands-on experience in secure routing optimization using machine learning techniques.",
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black px-4">
      {/* Animated Text at the Top */}
      <div className="absolute top-16 sm:top-24 left-5 sm:left-10 text-white text-4xl sm:text-6xl font-bold">
        {/* "HELLO." Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-2"
        >
          HELLO.
        </motion.h1>

        {/* "I'M TAMILARASAN" Letter-by-letter Animation */}
        <h1 className="flex text-2xl sm:text-4xl">
          {Array.from("I'M Tamilarasan").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* "Fullstack Developer" Letter-by-letter Animation */}
        <p className="text-lg sm:text-2xl flex">
          {Array.from("Fullstack Developer").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index + 12) * 0.1 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </p>
      </div>

      {/* Floating Summary Box */}
      <motion.div
        className="bg-gray-300 p-6 sm:p-8 rounded-lg shadow-lg max-w-md sm:max-w-2xl text-center border border-transparent mt-20 sm:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px 5px rgba(0, 255, 255, 0.8)",
          borderColor: "rgba(0, 255, 255, 0.8)",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-xl sm:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SUMMARY
        </motion.h1>

        {/* Animated Paragraphs (Line by Line) */}
        <div className="text-gray-700 space-y-2 text-sm sm:text-base">
          {summaryText.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.5, duration: 0.8 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
