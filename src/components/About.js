import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const about_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">
        안녕하세요. 하루하루 발전하는 것이 목표인 프론트엔드 개발자
        조강훈입니다.
        <br />
        <br />
        저는 <strong key={1}>HTML5, CSS3, Javascript(ES6+)</strong>를 기반으로
        웹의 전반적인 지식을 가지고 있으며 특히 <strong key={1}> React </strong>
        를 사용한 Single Page Application 개발에 자신있습니다.
        <br />
        <br />
      </h6>
    </motion.div>
  );
};

export default About;
