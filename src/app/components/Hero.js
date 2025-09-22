"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-neutral-950 opacity-90 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#121212] via-neutral-950 to-neutral-950 opacity-50"></div>
      </div>

      <div className="relative z-10 w-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Hi, I am
          <span className="inline-block text-[#00ADB5]">
            <TypeAnimation
              sequence={[
                " Timmy",
                4000,
                " a Frontend Developer",
                3000,
                " a React Developer",
                3000,
                " a Problem Solver",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          I solve problems through clean code and build digital experiences that
          users actually love.
          <br />
          Let&apos;s bring your next project to life!
        </p>
        <div className="mt-8 flex justify-center space-x-4 font-bold">
          <a
            href="/Timilehin Amolegbe - Curriculum Vitae.pdf"
            download="Timmy_Resume.pdf"
            className="px-6 py-3 rounded-full text-white bg-[#00ADB5] hover:bg-[#009b9f] transition-colors"
          >
            Download My CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
