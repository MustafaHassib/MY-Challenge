import About from "@/sections/about_section/about";
import ContactForm from "@/sections/contactme/contactme";
import Footer from "@/sections/footer/footer";
import HeroSection from "@/sections/hero_section/hero";
import Portfolio from "@/sections/portfolio/portfolio";
import Services from "@/sections/services_section/services";

const Home = () => (
  <div>
    <HeroSection />
    <Services />
    <About />
    <Portfolio />
    <ContactForm />
    <Footer />
  </div>
);
export default Home;
