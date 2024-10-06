import { useInView } from "react-intersection-observer";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { toast } from "sonner";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "myCV.pdf";
    link.download = "RemonEhabCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.info("downloading CV...");
  };

  return (
    <section id="home" name="home" className="h-full">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between md:pt-8
            md:pb-16"
      >
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" text-center md:text-left order-2 md:order-none"
        >
          <span className="text-xl">
            Hello, <span className="text-accent">I&apos;m</span>
            <br />
          </span>
          <h1 className="h1 -ml-1 mb-1 text-accent">Remon Ehab</h1>
          <h2 className="h3 capitalize  min-h-12">
            {" "}
            <TypeAnimation
              sequence={[
                "Full-stack Developer",
                2000,
                "backend developer",
                2000,
                "problem solver",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              cursor={false}
            />
          </h2>

          <p className="max-w-[500px] mb-9 leading-normal sm:leading-loose text-white/90">
            I build dynamic, high-performance web apps with clean code, scalable
            solutions, and user-friendly designs. With full-stack expertise, I bring ideas
            to life efficiently and innovatively.{" "}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <button
              onClick={handleDownloadCV}
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
        </motion.div>
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="order-1 md:order-none mb-9 md:mb-0"
        >
          <Photo />
        </motion.div>
      </motion.div>
      <div ref={ref}>
        <Stats inView={inView} />
      </div>
    </section>
  );
};

export default About;
