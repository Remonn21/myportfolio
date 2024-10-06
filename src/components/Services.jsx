import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BackgroundGradient } from "./ui/background-gradient";
import { useEffect, useRef, useState } from "react";
const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "I build fully responsive, high-performance web applications from front to back using React.js for the frontend and Node.js for the backend. Whether you need a personal website or a complex web application, I’ve got you covered.",
    Icon: FaCode,
  },
  {
    title: "API Development & Integration",
    description:
      " I design and develop RESTful APIs with Node.js and Express, and integrate third-party services like payment gateways, social media, and more",
    Icon: GiNetworkBars,
  },
  {
    title: "Performance Optimization ",

    description:
      " I optimize web applications for speed and efficiency, ensuring fast load times and smooth performance through code optimization, lazy loading, and more",
    Icon: FaTachometerAlt,
  },
];

const Services = () => {
  const servicesRef = useRef(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div id="services" className="py-10">
      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h3 className="text-white/60 uppercase tracking-wide text-lg mb-4 text-accent">
          What I offer
        </h3>
        <h2 className="h2 font-extrabold tracking-tighter">Services.</h2>
      </motion.div>
      <div ref={servicesRef} className="grid  md:grid-cols-3 gap-10 gap-y-20 mt-20 ">
        {services.map((service, index) => (
          <motion.div
            variants={fadeIn("up", (index / 10) * 2)}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            viewport={{ once: false, amount: 0.2 }}
            key={service}
            className="flex"
          >
            <BackgroundGradient className="relative bg-tertiary rounded-[20px]  p-4 flex flex-col items-center">
              {/* <MovingBorder
              duration={1500}
              className="relative  h-full w-full group bg-tertiary p-4 rounded-md flex flex-col items-center"
            > */}
              <ServiceHex Icon={service.Icon} />
              <div className="text-center -mt-12 flex flex-col gap-5">
                <h2 className="h3 ">{service.title}</h2>
                <p className="text-white/60 leading-normal">{service.description}</p>
              </div>
              {/* </MovingBorder> */}
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

const ServiceHex = ({ Icon }) => {
  return (
    <div className="relative -translate-y-1/2 -top-4">
      {/* Hexagon Container */}
      <div className="w-[104px] h-[120px] bg-accent relative clip-hexagon flex items-center justify-center">
        {/* Icon Inside the Hexagon */}
        <Icon className="text-white text-[40px]" />
      </div>
    </div>
  );
};
