import React from "react";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import me from "../assets/me.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailme = () => {
    window.open("mailto: tigerlove95@naver.com");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={me} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        조 <span>강 훈</span>
      </div>
      <div className="sidebar__item sidebar__title">
        Junior Front-End Developer
      </div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          이력서 다운로드
        </div>
      </a>
      {/* <figure className="sidebar__social-icons my-2">
        <a href="">
          <img src="" alt="upInAir2" className="sidebar__icon mr-3" />
        </a>
        <a href="">
          <img src="" alt="upInAir2" className="sidebar__icon" />
        </a>
      </figure> */}
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a
            href="https://github.com/San-Goon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          부천, 대한민국
        </div>
        <div className="sidebar__item">tigerlove95@naver.com</div>
        <div className="sidebar__item">010-6611-2574</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailme}>
        Email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
