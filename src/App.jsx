import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import HeroSection from "./Components/Herosection";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Testimonials />
      <Projects />
      <Blogs />
      <Contact />
    </>
  );
}
