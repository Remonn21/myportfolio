import { Link } from "react-scroll";

const MobileNav = ({ links }) => {
  return (
    <div
      className="fixed  overflow-hidden bottom-0 left-0 right-0 bg-black/15
     min-w-full h-[65px] z-50 backdrop-blur-2xl shadow-md flex justify-between px-[10px] items-center"
    >
      {links.map((item, index) => {
        const MobIcon = item.MobIcon;
        return (
          <Link
            to={item.path}
            smooth={true}
            spy={true}
            key={index}
            offset={item.offset || 0}
            duration={500}
            activeClass="rounded-full bg-accent/80 active-link"
            className="capitalize font-medium cursor-pointer
           transition-all flex flex-col items-center px-[10px] pt-1  "
          >
            <MobIcon className={`${item.iconClass ? item.iconClass : "text-xl"}`} />
            <span className="-mt-[3px] text-sm">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNav;
