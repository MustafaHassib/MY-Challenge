import Image from "next/image";
import React from "react";
import { FaBehance, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import personImage from "../../public/person.png";
import styles from "./hero.module.scss";
import Navbar from "./navbar/navbar";

const HeroSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className={`${styles.hero_section} text-white py-16`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 lg:px-24">
          <div className="flex-1">
            <p className="text-gray-400">Hi I am</p>
            <h1 className="text-gray-500 text-4xl md:text-2xl font-bold">
              Mustafa Hassib
            </h1>
            <h2 className="text-3xl md:text-6xl font-bold mb-8  text-orange-500">
              Software Developer
            </h2>
            <div
              className={`${styles.social_icons} flex items-center space-x-4 mb-10`}
            >
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500"
                aria-label="Dribbble"
              >
                <FaDribbble size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500"
                aria-label="Behance"
              >
                <FaBehance size={20} />
              </a>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
                Hire Me
              </button>
              <button className="px-6 py-2 border border-gray-400 text-white font-semibold rounded-md hover:bg-gray-800 transition">
                Download CV
              </button>
            </div>
            <div className={`${styles.stats} container mx-auto mt-24`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
                <div className={`${styles.stat_card} py-6`}>
                  <h3 className="text-3xl font-bold text-orange-500">5+</h3>
                  <p className="text-white font-bold">Experiences</p>
                </div>
                <div className={`${styles.stat_card} py-6`}>
                  <h3 className="text-3xl font-bold text-orange-500">20+</h3>
                  <p className="text-white font-bold">Project done</p>
                </div>
                <div className={`${styles.stat_card} py-6`}>
                  <h3 className="text-3xl font-bold text-orange-500">80+</h3>
                  <p className="text-white font-bold">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className={`${styles.image_wrapper}`}>
              <Image
                src={personImage}
                alt="Profile"
                className={`${styles.person_image} w-full h-full object-cover`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
