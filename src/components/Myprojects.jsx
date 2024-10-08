import { VscGithub } from "react-icons/vsc";
// import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/config";
import { toast } from "sonner";

const Myprojects = () => {
  const projectsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleShowProject = () => {
    toast.info("view project not available yet");
  };

  return (
    <div id="work">
      <div className="flex flex-col items-start gap-4 mb-12">
        {/* <div className="absolute inset-0"> */}
        {/* </div> */}
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-white/60 uppercase tracking-wide text-lg mb-4 text-accent">
            My work
          </h3>
          <h2 className="h2 font-extrabold tracking-tighter">Projects.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="details  md:max-w-[700px] text-sm leading-snug text-white/60"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          exercitationem iste tempora, cupiditate pariatur ducimus excepturi earum labore
        </motion.p>
      </div>
      <div
        ref={projectsRef}
        className="grid gap-y-7 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            variants={fadeIn("up", (index / 10) * 2)}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="flex"
            key={index}
          >
            <div className="bg-tertiary rounded-lg p-4  hover:shadow-custom hover:scale-105 hover:-translate-y-5 transition ">
              <div className="mb-3 overflow-hidden relative group">
                <div
                  className="absolute  opacity-0 group-hover:opacity-100 z-20 bg-black/50 scale-110 inset-0
               rounded-lg flex justify-center items-center"
                >
                  <button
                    className="rounded-md px-4 hover:bg-tertiary transition bg-accent/95"
                    onClick={handleShowProject}
                  >
                    View details{" "}
                  </button>
                </div>

                <div className="absolute top-2 right-2 p-2 z-20 bg-black/80 cursor-pointer rounded-full hover:bg-black hover:scale-110 transition duration-300">
                  <VscGithub className="text-xl" />
                </div>
                <img
                  src={project.imageUrl}
                  className="rounded-lg group-hover:scale-125 transition duration-300"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 py-2">
                <h3 className="h3 tracking-tighter">{project.title}</h3>
                <p className="text-white/60 text-sm">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-accent text-xs my-4">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Myprojects;
