"use client";

import { useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`px-6 py-5 flex flex-row justify-between items-center ${styles.navbar}`}
    >
      <h1 className={styles.logo}>LOGO</h1>

      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white"></div>
      </div>

      <ul
        className={` flex flex-col md:flex-row gap-6 md:gap-12 absolute md:static md:bg-transparent top-20 left-0 w-full md:w-auto px-6 md:px-0 py-6 md:py-0 z-10 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex ${styles.navLinks}`}
      >
        <li>
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-orange-500 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-orange-500 transition">
            About me
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-orange-500 transition">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact me
          </a>
        </li>
      </ul>

      <button className="hidden md:block px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
