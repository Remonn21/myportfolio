import { Link } from "react-scroll";

const MobileNav = ({ links }) => {
  return (
    <div
      className="fixed  overflow-hidden bottom-0 left-0 right-0 bg-black/15
     min-w-full h-[75px] z-50 backdrop-blur-2xl shadow-md flex justify-between px-2 pt-2 items-center"
    >
      {links.map((item, index) => (
        <Link
          to={item.path}
          smooth={true}
          spy={true}
          key={index}
          offset={item.offset || 0}
          duration={500}
          activeClass=" rounded-full bg-accent/80"
          className="capitalize font-medium hover:text-accent-hover cursor-pointer
           transition-all flex flex-col items-center px-3 py-[4px] pt-2"
        >
          {item.MobIcon}
          <span className="-mt-[3px]">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
