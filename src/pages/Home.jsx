import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div>
      <section id="home" name="home" className="h-full">
        <div className="container mx-auto h-full"></div>
        <div
          className="flex flex-col md:flex-row items-center justify-between md:pt-8
            md:pb-24"
        >
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">Full-stack Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Remon Ehab</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">
              I excel at crafting elegant digital experience and I am proficient in
              various programing langugaes and technologies
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <button
                className="px-5 py-1 bg-transparent text-accent rounded-full border border-accent flex items-center
               gap-2 uppercase hover:bg-accent hover:text-primary 
               hover:transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
              <div className="mb-8 md:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mb-9 md:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </section>
    </div>
  );
};

export default Home;
