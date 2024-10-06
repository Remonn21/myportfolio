import { skills } from "@/config";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
const Skills = () => {
  return (
    <div id="skills" className="py-10">
      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h3 className="text-white/60 uppercase tracking-wide text-lg mb-4 text-accent">
          My technical skills
        </h3>
        <h2 className="h2 font-extrabold tracking-tighter">Skills.</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-7 mt-16">
        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex"
        >
          <BackgroundGradient className="relative bg-tertiary rounded-[20px] py-7 flex flex-col  px-6 ">
            <h2 className="text-center h3 mb-10">Frontend developer</h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {skills.frontend.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileInView={{
                      scale: [1, 1.3, 1],
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        delay: (index / 10) * 4 + 0.4,
                        ease: [0.25, 0.25, 0.25, 0.75],
                      },
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    key={skill.name}
                    className="flex gap-2 "
                  >
                    <motion.div
                      initial={{ scale: 1, opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        scale: [1, 1.3, 1],
                        transition: {
                          duration: 0.8,
                          delay: (index / 10) * 4 + 0.5,
                          ease: [0.25, 0.25, 0.25, 0.75],
                        },
                      }}
                    >
                      <SkillIcon className="text-xl mt-2" />
                    </motion.div>
                    <div className="flex flex-col">
                      <p className="font-bold">{skill.name}</p>
                      <span className="text-xs text-white/60 capitalize font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </BackgroundGradient>
        </motion.div>
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex"
        >
          <BackgroundGradient className="relative bg-tertiary rounded-[20px] py-7 flex flex-col  px-6 ">
            <h2 className="text-center h3 mb-10">Backend developer</h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {skills.backend.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    whileInView={{
                      scale: [1, 1.3, 1],
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        delay: (index / 10) * 4 + 0.4,
                        ease: [0.25, 0.25, 0.25, 0.75],
                      },
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    key={skill.name}
                    className="flex gap-2 "
                  >
                    <motion.div
                      initial={{ scale: 1, opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        scale: [1, 1.3, 1],
                        transition: {
                          duration: 0.8,
                          delay: (index / 10) * 4 + 0.5,
                          ease: [0.25, 0.25, 0.25, 0.75],
                        },
                      }}
                    >
                      <SkillIcon className="text-xl mt-2" />
                    </motion.div>
                    <div className="flex flex-col">
                      <p className="font-bold">{skill.name}</p>
                      <span className="text-xs text-white/60 capitalize font-semibold">
                        advanced
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
