import { Link } from "react-scroll";

const MobileNav = ({ links }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-black/55
     min-w-full h-[75px] backdrop-blur-lg shadow-md flex justify-between px-5 pt-2 items-center"
    >
      {links.map((item, index) => (
        <Link
          to={item.path}
          smooth={true}
          spy={true}
          key={index}
          offset={item.offset || 0}
          duration={500}
          activeClass="text-primary rounded-full bg-accent"
          className="capitalize font-medium hover:text-accent-hover cursor-pointer
           transition-all flex flex-col items-center px-5 py-[2px]"
        >
          {item.MobIcon}
          <span className="-mt-[3px]">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
