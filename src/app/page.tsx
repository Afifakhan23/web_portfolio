
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Skills from "./components/skills";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
