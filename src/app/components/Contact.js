"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = {
  email: "timilehinamolegbe1@gmail.com",
  linkedin: "https://linkedin.com/in/timilehin-amolegbe",
  github: "https://github.com/IamJusttimmy",
  twitter: "https://x.com/iamjusttimmy_",
};

const Contact = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-12 bg-[#121212] text-white"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ADB5]">
          Let&apos;s Connect
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Got an idea you want to bring to life? my inbox is always open. <br />
          Whether you have a project, question or just want to say hi, I will
          get back to you!
        </p>

        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-8">
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center space-x-2 "
          >
            <Image
              src="/images/contact/gmail.svg"
              alt="gmail"
              className="bg-white m-4 p-1 rounded hover:bg-[#00ADB5] transition-colors"
              width={24}
              height={24}
            />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-[#00ADB5] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 "
          >
            <Image
              src="/images/contact/x.svg"
              alt="X"
              className="bg-white m-4 p-1 rounded hover:bg-[#00ADB5] transition-colors"
              width={24}
              height={24}
            />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 "
          >
            <Image
              src="/images/contact/github.svg"
              alt="github"
              className="bg-white m-4 p-1 rounded hover:bg-[#00ADB5] transition-colors"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
