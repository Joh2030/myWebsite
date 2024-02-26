import "./App.css";
import HeroSection from "../src/Components/HeroSection";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
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
      <Blogs />
      <Contact />
    </>
  );
}
