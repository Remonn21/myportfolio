import { Link } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { IoIosStats } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";

const links = [
  {
    name: "Home",
    path: "home",
    MobIcon: FaHome,
    offset: -100,
  },
  {
    name: "Services",
    path: "services",
    MobIcon: MdMiscellaneousServices,
    iconClass: "text-2xl",
  },
  {
    name: "Work",
    path: "work",
    MobIcon: IoIosStats,
  },
  {
    name: "contact",
    path: "contact",
    MobIcon: FaMessage,
  },
];

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container max-w-6xl mx-auto flex justify-between items-center ">
        <Link>
          <h1 className="text-4xl font-semibold">
            Remon<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Nav links={links} />
          <Link
            to="/contact"
            className="px-5 py-1 bg-accent rounded-full hover:bg-accent-hover text-black"
          >
            Hire me
          </Link>
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
