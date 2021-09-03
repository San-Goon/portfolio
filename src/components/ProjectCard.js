import React from "react";
import github from "../assets/icons/github.svg";
const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className="projectCard col-md-6 col-lg-4">
      <figure className="projectCard_wrapper">
        <a href={deployed_url}>
          <img src={image} alt={name} className="projectCard__image" />
        </a>
        <div className="projectCard__title">
          <a href={github_url} target="_blank">
            <img
              src={github}
              alt="github link"
              className="projectCard__image"
            />
          </a>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
