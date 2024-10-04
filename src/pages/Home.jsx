import Services from "@/components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Myprojects from "@/components/Myprojects";

const Home = () => {
  return (
    <div className="flex flex-col gap-40">
      <About />
      <Services />
      <Myprojects />
      <Contact />
    </div>
  );
};

export default Home;
