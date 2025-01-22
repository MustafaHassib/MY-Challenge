import React from "react";
import { FaMale } from "react-icons/fa";
import styles from "./services.module.scss";
const services = [
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur.",
  },
];

const Services: React.FC = () => {
  return (
    <section className={`${styles.services} text-white py-16`}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-gray-400 mb-12">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam.
        </p>
        <div className="flex flex-wrap gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.service_card} p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div
                className={`${styles.icon} mb-5 icon flex justify-center text-5xl mb-4`}
              >
                <FaMale />
              </div>
              <h3 className={`${styles.title} mb-8 text-xl font-semibold mb-2`}>
                {service.title}
              </h3>
              <p className={`${styles.desc} text-gray-400`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
