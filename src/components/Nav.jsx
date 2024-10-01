import { Link } from "react-scroll";

const Nav = ({ links }) => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          to={link.path}
          smooth={true}
          spy={true}
          key={index}
          offset={link.offset || 0}
          duration={500}
          activeClass="text-accent border-b-2 border-accent"
          className="capitalize font-medium hover:text-accent-hover cursor-pointer transition-all"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
