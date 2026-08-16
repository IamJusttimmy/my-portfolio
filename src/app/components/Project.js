"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Alexta - AI Text Processor",
    description:
      "A Web app that determines the language input, translate to other languages and also summarise input with more than 150 characters with the use of Chrome APIs",
    image: "/images/projects/alexta.png",
    tags: ["React", "Tailwind CSS", "Chrome APIs"],
    gitUrl: "https://github.com/IamJusttimmy/ai-text-processor",
    previewUrl: "https://alexta.vercel.app/",
  },
 {
    id: 2,
    title: "Omen-Signal",
    description:
      "A landing page built for a music group called Omen for their album drop - Signal. The landing page features a sleek, anticipatory and modern design. The page is fully responsive and optimized for performance, ensuring a smooth user experience across all devices.",
    image: "/images/projects/omen.jpeg",
    tags: ["HTML", "CSS", "Javascript"],
    gitUrl:
      "https://github.com/IamJusttimmy/Omen",
    previewUrl: "https://omensignal.vercel.app/",
  },

  {
    id: 3,
    title: "Create User Form",
    description:
      "A CreateUserForm component that validates user input with password requirements. Real-time password validation,API integration, error handling, Accessible form inputs with proper labeling, Client-side validation to prevent invalid submissions.",
    image: "/images/projects/create-user-form.jpeg",
    tags: ["React", "API"],
    gitUrl: "https://github.com/IamJusttimmy/create-user-form",
    previewUrl: "create-form-validation.vercel.app",
  },
  {
    id: 4,
    title: "Clime",
    description:
      "A weather application that fetches and displays real-time weather data based on user input. It provides current weather conditions, temperature, humidity, and wind speed for any location in Lagos. The app features a clean and responsive design, ensuring a seamless user experience across devices.",
    image: "/images/projects/clime.jpeg",
    tags: ["React", "CSS"],
    gitUrl: "https://github.com/ClimeTeam/Clime",
    previewUrl: "https://clime-app.vercel.app/",
  },
  {
    id: 5,
     title: "My Wealth - Finance Tracker",
    description:
      "A personal finance tracking web application for monitoring income, expenses, budgets, and financial balance.Managed application state and implemented local storage for persistent data without a backend service.",
    image: "/images/projects/my-wealth.png",
    tags: ["React", "Recharts", "Tailwind CSS"],
    gitUrl: "https://github.com/IamJusttimmy/my-wealth",
    previewUrl: "https://mywealth-view.vercel.app/",
  },
  {
    id: 6,
     title: "Bureau de Change",
    description:
      "Bureau-de-Change is a sleek web tool for converting currencies and checking exchange rates in real time. Whether you’re traveling, trading, or just curious, it gives quick, accurate rate info — all in a clean, easy-to-use interface.",
    image: "/images/projects/currency-changer.png",
    tags: ["React", "CSS", "API"],
    gitUrl: "https://github.com/IamJusttimmy/bureau-de-change",
    previewUrl: "https://bureau-de-change.vercel.app/",
  },
];

function ProjectCard({ imgUrl, title, description, tags, gitUrl, previewUrl }) {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300">
      <div className="relative h-52 md:h-72">
        <Image src={imgUrl} alt={title} layout="fill" objectFit="cover" />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 md:bg-opacity-0 md:hover:bg-opacity-80 transition-opacity duration-500 flex items-center justify-center space-x-4 opacity-70 md:opacity-0 md:hover:opacity-100">
          {/* 
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-[#00ADB5] p-2 rounded-full hover:bg-[#00ADB5] transition-colors"
          >
            github icon
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
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.5a5.45 5.45 0 0 0-3 0C10.27.65 9.09 1 9.09 1A5.07 5.07 0 0 0 9 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          */}
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-[#00ADB5] p-2 rounded-full hover:bg-[#00ADB5] transition-colors"
          >
            {/* Link Icon */}
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
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#00ADB5] text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 md:px-12 bg-[#121212] text-white"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00ADB5]">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
