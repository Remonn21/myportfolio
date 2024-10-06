import Services from "@/components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Myprojects from "@/components/Myprojects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="flex flex-col gap-40">
      <About />
      <Skills />
      <Services />
      <Myprojects />
      <Contact />
    </div>
  );
};

export default Home;
