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
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="flex flex-wrap gap-6 justify-center">
        {[
          {
            title: "🎓 College",
            institution: "Mahendra Engineering College",
            year: "2020-2024",
            course: "B.E Cyber Security",
            score: "CGPA: 8.3",
            color: "rgba(0, 170, 255, 0.9)",
            bgColor: "rgba(235, 245, 255, 1)",
          },
          {
            title: "📚 School",
            institution: "St. Mary's Higher Secondary School",
            year: "2019-2020",
            course: "Computer Science & Mathematics",
            score: "Percentage: 68%",
            color: "rgba(255, 170, 0, 0.9)",
            bgColor: "rgba(255, 243, 224, 1)",
          },
          {
            title: "📚 School",
            institution: "St. Mary's Higher Secondary School",
            year: "2017-2018",
            course: "",
            score: "Percentage: 78%",
            color: "rgba(0, 255, 170, 0.9)",
            bgColor: "rgba(224, 255, 243, 1)",
          }
        ].map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-sm md:max-w-md lg:w-96 text-center border border-transparent cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 + index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0px 0px 20px 5px ${edu.color}`,
              borderColor: edu.color,
              backgroundColor: edu.bgColor,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            {[edu.title, edu.institution, edu.year, edu.course, edu.score].map(
              (text, i) =>
                text && (
                  <motion.p
                    key={i}
                    className="text-gray-900 text-lg font-semibold"
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    {text}
                  </motion.p>
                )
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
