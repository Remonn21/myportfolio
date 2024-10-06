import { FaMobileAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaNodeJs, FaReact, FaBolt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandOauth } from "react-icons/tb";
import {} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTypescript, SiJavascript, SiExpress, SiDocker } from "react-icons/si";

export const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 20,
    text: "Projects completed",
  },
  {
    num: 12,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];
export const socials = [
  { icon: FaGithub, path: "https://github.com/Remonn21/" },
  { icon: FaLinkedin, path: "https://www.linkedin.com/in/remon-ehab-37153017a/" },
  { icon: FaInstagram, path: "https://www.instagram.com/remon_ehab/" },
];
export const skills = {
  frontend: [
    { name: "React.js", level: "advanced", icon: FaReact },
    { name: "Responsive Design", level: "advanced", icon: FaMobileAlt },
    { name: "Tailwind css", level: "advanced", icon: RiTailwindCssFill },
    { name: "Framer motion", level: "advanced", icon: TbBrandFramerMotion },
    { name: "JavaScript (ES6+)", level: "advanced", icon: SiJavascript },
    { name: "TypeScript", level: "advanced", icon: SiTypescript },
  ],
  backend: [
    { name: "Node.js", level: "advanced", icon: FaNodeJs },
    { name: "Express.js", level: "advanced", icon: SiExpress },
    { name: "JWT, Oauth", level: "advanced", icon: TbBrandOauth },
    { name: "Database Design (MongoDB)", level: "advanced", icon: DiMongodb },
    { name: "WebSockets", level: "intermediate", icon: FaBolt },
    { name: "Docker", level: "beginner", icon: SiDocker },
  ],
};

export const projects = [
  {
    title: "E-commerece",
    href: "/",
    gitHub: "/",
    tags: ["react", "node.js", "mongoDB", "stripe"],
    imageUrl: "https://i.imgur.com/LvLq0Qc.png",
    description:
      "A comprehensive and scalable e-commerce solution built with React.js and Node.js, featuring secure payment gateways (Stripe, PayPal), real-time product management, and a fully responsive design. Optimized for performance and user experience, the platform supports advanced search, filtering, and seamless order tracking, providing a robust foundation for businesses to grow their online presence.",
  },
  {
    title: "Travel agency",
    href: "/",
    gitHub: "/",
    tags: ["react", "node.js", "mongoDB", "stripe"],
    imageUrl: "https://i.imgur.com/6ppSTRb.png",
    description:
      "A dynamic and feature-rich travel booking platform developed with React.js and Node.js, offering real-time search for destinations, travel packages, and secure online bookings. The platform is fully responsive, providing users with a seamless experience across devices, while offering integrated payment gateways, itinerary management, and booking confirmations.",
  },
  {
    title: "Food ordering",
    href: "/",
    gitHub: "/",
    tags: ["React.js", "express.js", "Stripe"],
    imageUrl: "https://i.imgur.com/6y9algm.png",
    description:
      "A modern and intuitive food ordering platform built with React.js and Node.js, featuring seamless online ordering, secure payment integration (Stripe), and real-time order tracking. Fully responsive across devices, the platform offers a user-friendly experience for both customers and restaurant admins.",
  },
];
