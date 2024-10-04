import { VscGithub } from "react-icons/vsc";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Projects = [
  {
    title: "E-commerece",
    href: "/",
    gitHub: "/",
    tags: ["react", "node.js", "mongoDB", "stripe"],
    imageUrl:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709147758/catalog/1598229736060620800/y8qkfd7nbovlkxjntkmj.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores in provident distinctio recusandae natus mollitia quidem totam aperiam dolores numquam, rerum perferendis praesentium.",
  },
  {
    title: "E-commerece",
    href: "/",
    gitHub: "/",
    tags: ["react", "node.js", "mongoDB", "stripe"],
    imageUrl:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709147758/catalog/1598229736060620800/y8qkfd7nbovlkxjntkmj.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores in provident distinctio recusandae natus mollitia quidem totam aperiam dolores numquam, rerum perferendis praesentium.",
  },
  {
    title: "E-commerece",
    href: "/",
    gitHub: "/",
    tags: ["react", "node.js", "mongoDB", "stripe"],
    imageUrl:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709147758/catalog/1598229736060620800/y8qkfd7nbovlkxjntkmj.webp",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores in provident distinctio recusandae natus mollitia quidem totam aperiam dolores numquam, rerum perferendis praesentium.",
  },
];

const Myprojects = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:items-start gap-4 mb-12">
        {/* <div className="absolute inset-0"> */}
        {/* </div> */}
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-white/60 uppercase tracking-wide text-lg mb-4">My work</h3>
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
      <div className="flex flex-col md:flex-row gap-6">
        {Projects.map((project, index) => (
          <motion.div
            variants={fadeIn("up", (index / 10) * 2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-tertiary rounded-lg shadow-md "
            key={index}
          >
            <div className="m-3 overflow-hidden relative group">
              <div
                className="absolute  opacity-0 group-hover:opacity-100 z-20 bg-black/50 inset-0
               rounded-lg flex justify-center items-center"
              >
                <Button className="rounded-md px-4 bg-accent/60">View details</Button>
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
            <div className="flex flex-col gap-2 p-3">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Myprojects;
