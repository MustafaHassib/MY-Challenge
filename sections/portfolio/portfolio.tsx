"use client";

import Image from "next/image";
import React, { useState } from "react";
import portfolioImage from "../../public/pexels-alexander-mass-748453803-29625547.jpg";

import styles from "./portfolio.module.scss";
const Portfolio: React.FC = () => {
  const categories = [
    "All",
    "Website Design",
    "App Mobile Design",
    "App Desktop",
    "Braiding",
  ];

  const projects = [
    {
      id: 1,
      category: "Website Design",
      name: "Project Name",
      image: portfolioImage,
    },
    {
      id: 2,
      category: "App Mobile Design",
      name: "Project Name",
      image: portfolioImage,
    },
    {
      id: 3,
      category: "App Desktop",
      name: "Project Name",
      image: portfolioImage,
    },
    {
      id: 4,
      category: "Braiding",
      name: "Project Name",
      image: portfolioImage,
    },
    {
      id: 5,
      category: "Website Design",
      name: "Project Name",
      image: portfolioImage,
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="portfolio bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
        <div className="flex flex-wrap gap-2 justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-semibold ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-400"
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${styles.project_card}  rounded-lg overflow-hidden shadow-lg`}
            >
              <Image
                src={project.image}
                alt={project.name}
                className="w-full object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="text-gray-400 font-bold">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
