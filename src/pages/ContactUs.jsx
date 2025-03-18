import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <motion.div
        className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg text-center border border-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          boxShadow: "0px 0px 20px 5px rgba(0, 255, 255, 0.9)",
          borderColor: "rgba(0, 255, 255, 0.8)",
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <motion.h1
          className="text-3xl font-bold mb-4 text-gray-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          📞 Contact Me
        </motion.h1>

        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Feel free to reach out for any inquiries or collaborations!
        </motion.p>

        <motion.div
          className="text-left text-gray-800 space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <p>📧 <strong>Email:</strong> tamilvrt2002@gmail.com</p>
          <p>📍 <strong>Location:</strong> Namakkal, India</p>
          <p>📱 <strong>Phone:</strong> +91 9597637510</p>
          <p>🐙 <strong>GitHub:</strong> 
            <a href="https://github.com/Tamilarasan2002-creator" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-blue-500 hover:underline">
              github.com/tamilvrt2002
            </a>
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          {[
            { href: "https://www.linkedin.com", imgSrc: "https://cdn-icons-png.flaticon.com/512/145/145807.png", alt: "LinkedIn" },
            { href: "https://github.com/Tamilarasan2002-creator", imgSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png", alt: "GitHub" },
            { href: "https://twitter.com", imgSrc: "https://cdn-icons-png.flaticon.com/512/733/733579.png", alt: "Twitter" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={social.imgSrc}
                alt={social.alt}
                className="w-10 h-10"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
