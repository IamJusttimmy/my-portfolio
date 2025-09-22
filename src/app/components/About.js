"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function About() {
  const skills = [
    { name: "React", image: "/skills/react.svg" },
    { name: "Next.js", image: "/skills/nextdotjs.svg" },
    { name: "JavaScript", image: "/skills/javascript.svg" },
    { name: "Tailwind CSS", image: "/skills/tailwindcss.svg" },
    { name: "Git", image: "/skills/git.svg" },
    { name: "GitHub", image: "/skills/github.svg" },
    { name: "HTML5", image: "/skills/html5.svg" },
    { name: "CSS3", image: "/skills/css.svg" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-4 md:px-12 bg-[#121212] text-white min-h-screen flex items-center"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00ADB5]">
          About Me
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 mb-12">
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed mb-6">
              Hi, I am Timmy, a Computer Science graduate who discovered my
              passion for frontend development through the simple joy of telling
              a computer what to do and watching it come to life. Over the past
              year, I have focused on building user-centered web applications
              with React and Next.js, combining theoretical CS foundations with
              hands-on problem-solving.
              <br /> As a self-taught developer, I have developed strong
              research and debugging skills through documentation deep-dives and
              systematic experimentation. I also focus on creating intuitive
              user interfaces and seamless user experiences.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-gray-300">
              What I Offer:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-base mb-8 pl-4">
              <li>
                Building user-friendly, responsive websites and web applications
                from scratch.
              </li>
              <li>
                Transforming UI/UX designs into pixel-perfect, interactive
                frontend experiences.
              </li>
              <li>
                API integration and complex feature implementation and Strong
                debugging and problem-solving abilities
              </li>
              <li>
                Optimizing websites for performance, speed, and accessibility.
              </li>
              <li>
                Collaborating with teams to write clean, reusable, and
                maintainable code.
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-lg">
              <Image
                src="/images/pp.jpg"
                alt="Timmy"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Skills
          </h3>
          <div className="relative overflow-hidden w-full max-w-lg md:max-w-none mx-auto">
            <Swiper
              modules={[Autoplay, EffectCoverflow, Pagination]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {skills.map((skill, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-[#00ADB5] rounded-lg shadow-md"
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="mt-2 text-sm text-center text-white font-semibold">
                    {skill.name}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
