import Image from "next/image";
import React from "react";
import personImage from "../../public/person.png";
import styles from "./about.module.scss";

const AboutMe: React.FC = () => {
  return (
    <section className={`${styles.about_me} text-white py-16`}>
      <div className={`${styles.about_me__title} text-center mx-auto`}>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className={`${styles.about_me__subtitle} text-gray-400 mb-6`}>
          User Interface And User Experience And Also Video Editing
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 lg:px-24">
        <div className={`${styles.image_wrapper} relative flex-shrink-0`}>
          <Image
            className={`${styles.person_image} rounded-lg`}
            src={personImage}
            alt="Profile"
          />
        </div>

        {/* Text Section */}
        <div className={`${styles.about_me__body}`}>
          <p className={`${styles.about_me__body__desc} leading-relaxed mb-8`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            aperiam nemo quis nostrum doloremque optio officiis dignissimos
            earum non porro. Non quo autem quidem quis ab veniam quisquam
            necessitatibus fugit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Natus aperiam nemo quis nostrum doloremque optio
            officiis dignissimos earum non porro. Non quo autem quidem quis ab
            veniam quisquam necessitatibus fugit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Natus aperiam nemo quis nostrum
            doloremque optio officiis dignissimos earum non porro. Non quo autem
            quidem quis ab veniam quisquam necessitatibus fugit.
          </p>
          <button className="mt-8 bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-600 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
