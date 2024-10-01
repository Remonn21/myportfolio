import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} to={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
