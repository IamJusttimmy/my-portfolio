"use client";

import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-neutral-950 bg-opacity-80 backdrop-filter backdrop-blur-lg">
      <nav className="flex items-center justify-between">
        <div className="font-bold text-2xl text-[#00ADB5]">Timmy</div>

        <ul className="hidden md:flex space-x-6 md:space-x-10 text-white">
          <li>
            <a href="#hero" className="hover:text-[#00ADB5] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#00ADB5] transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#00ADB5] transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#00ADB5] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-[#00ADB5] text-white hover:bg-[#007C82] transition-colors"
          >
            Projects
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src="/images/contact/github.svg"
              alt="github"
              className="bg-white m-4 p-1 rounded-full group-hover:bg-[#00ADB5] transition-colors"
              width={40}
              height={40}
            />
          </a>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4 text-white">
            <li>
              <a
                href="#hero"
                className="hover:text-[#00ADB5] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#00ADB5] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#00ADB5] transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#00ADB5] transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/contact/github.svg"
                  alt="github"
                  className="bg-white m-4 p-1 rounded hover:bg-[#00ADB5] transition-colors"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
