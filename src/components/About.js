import React from "react";
import api from "../assets/icons/api.svg";
import Skillcard from "./Skillcard";

const skills = [
  {
    icon: api,
    title: "채워주세요",
    about: "채워주세요",
  },
  {
    icon: api,
    title: "채워주세요",
    about: "채워주세요",
  },
  {
    icon: api,
    title: "채워주세요",
    about: "채워주세요",
  },
  {
    icon: api,
    title: "채워주세요",
    about: "채워주세요",
  },
  {
    icon: api,
    title: "채워주세요",
    about: "채워주세요",
  },
  {
    icon: api,
    title: "채워주세요",
    about: "채워주세요",
  },
];

const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">소개란</h6>
      <div className="container about__container">
        <h6 className="about__heading">what I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
