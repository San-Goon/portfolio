import React from "react";
import { languages } from "./data/resume_data";
import { motion } from "framer-motion";
import Bar from "./Bar";

const Resume = () => {
  const resume_variants = {
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
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">학력</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">안양대학교 (2014-2020)</h5>
            <p className="resume-card__name">전기전자공학 전공</p>
            {/* <p className="resume-card__details">채워주세요</p> */}
          </div>
        </div>
        {/* <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">경력</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">채워주세요</h5>
            <p className="resume-card__name">채워주세요</p> 
            <p className="resume-card__details">채워주세요</p> 
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Skills</h5>
          <div className="resume-language__body  mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
