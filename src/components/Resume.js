import React from "react";
import react from "../assets/icons/react.svg";

import Bar from "./Bar";

const languages = [
  { icon: react, name: "JavaScript", level: "50" },
  { icon: react, name: "TypeScript", level: "40" },
  { icon: react, name: "React", level: "85" },
  { icon: react, name: "Next.js", level: "50" },
];

const tools = [
  { icon: react, name: "Figma", level: "50" },
  { icon: react, name: "Higma", level: "50" },
  { icon: react, name: "Jama", level: "50" },
  { icon: react, name: "Jama2", level: "50" },
];

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Computer Science Engineeruiing
            </h5>
            <p className="resume-card__name">Academy of Technology</p>
            <p className="resume-card__details">채워주세요</p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">채워주세요</h5>
            <p className="resume-card__name">채워주세요</p>
            <p className="resume-card__details">채워주세요</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Language and Framework</h5>
          <div className="resume-language__body  mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body  mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
