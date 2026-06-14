import Link from "next/link";
import React from "react";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/Pawan19786",
    Icon: RiGithubLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/pawansahu7075",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/PawanSahu",
    Icon: RiFacebookLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/pawan-sahu-b07187296?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <a
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default React.memo(Socials);
