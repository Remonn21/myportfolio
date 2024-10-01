import { motion } from "framer-motion";
import image from "../assets/myImg3.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
        className="relative  mix-blend-lighten"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[290px] md:w-[490px] h-[290px] md:h-[490px] overflow-hidden absolute left-3 top-1"
        >
          <img src={image} className="object-contain w-full height-full" />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="size-[300px] md:size-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
