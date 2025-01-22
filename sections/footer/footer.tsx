import { FaBehance, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} text-gray-400 py-8`}>
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <h1 className="text-orange-500 text-2xl font-bold mb-6">LOGO</h1>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Services
          </a>
          <a href="#" className="hover:text-white">
            About me
          </a>
          <a href="#" className="hover:text-white">
            Portfolio
          </a>
          <a href="#" className="hover:text-white">
            Contact me
          </a>
        </nav>

        <div
          className={`${styles.social_icons} flex justify-center space-x-4 mb-6`}
        >
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-orange-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-orange-500"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            className="text-gray-400 hover:text-orange-500"
          >
            <FaDribbble size={20} />
          </a>
          <a
            href="#"
            aria-label="Behance"
            className="text-gray-400 hover:text-orange-500"
          >
            <FaBehance size={20} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <MdEmail size={20} />
            <span>mustafahassib@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdPhone size={20} />
            <span>+93 729 107 005</span>
          </div>
        </div>

        <p className={`${styles.copy_right} pt-5`}>
          Designed by <span className="text-white">@mustafahassib </span>
          Software Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
