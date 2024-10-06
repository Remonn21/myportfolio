import { Link } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { IoIosStats } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const links = [
  {
    name: "Home",
    path: "home",
    MobIcon: FaHome,
    offset: -150,
  },
  {
    name: "Skills",
    path: "skills",
    MobIcon: MdMiscellaneousServices,
    iconClass: "text-2xl",
    offset: -100,
  },
  {
    name: "Services",
    path: "services",
    MobIcon: MdMiscellaneousServices,
    iconClass: "text-2xl",
    offset: -80,
  },
  {
    name: "Work",
    path: "work",
    MobIcon: IoIosStats,
    offset: -80,
  },
  {
    name: "contact",
    path: "contact",
    MobIcon: FaMessage,
    offset: -200,
  },
];

const Header = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <header ref={ref} className="py-8 xl:py-12 text-white">
      <div className={`container max-w-6xl mx-auto flex justify-between items-center `}>
        <Link>
          <h1 className="text-4xl font-semibold">
            Remon<span className="text-accent">.</span>
          </h1>
        </Link>
        <div
          className={`hidden md:flex items-center gap-8 ${
            !inView
              ? "fixed top-10 left-[50%] -translate-x-1/2 bg-tertiary/50 px-5 py-3 z-50 rounded-full shadow-lg backdrop-blur-2xl transition"
              : ""
          } `}
        >
          <Nav links={links} />
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~017a85ea02fbe8c573"
            className="px-5 py-1 bg-accent rounded-full hover:bg-accent-hover text-black"
          >
            Hire me
          </a>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
