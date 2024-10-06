import { socials } from "@/config";
import { Link } from "react-router-dom";

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            target="_blank"
            href={item.path}
            key={index}
            to={item.path}
            className={iconStyles}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
