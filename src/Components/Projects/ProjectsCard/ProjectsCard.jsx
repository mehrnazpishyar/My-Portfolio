import React, { useEffect, useRef, useState } from "react";
import "./ProjectsCard.css";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, url, github }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`projects-card ${isVisible ? "in-view" : ""}`}
    >
      <div className="projects-card-image">
        <img onClick={() => window.open(url, "_blank")} src={src} alt="project" />
      </div>
      <div className="projects-card-content">
        <div>
          <div className="projects-card-header">
            <h3 onClick={() => window.open(url, "_blank")}>{title}</h3>
            <div className="projects-card-icons">
              <span
                className="icon"
                onClick={() => window.open(github, "_blank")}
              >
                <BsGithub />
              </span>
              <span className="icon" onClick={() => window.open(url, "_blank")}>
                <FaGlobe />
              </span>
            </div>
          </div>
          <p
            className={`project-description ${isExpanded ? "expanded" : ""}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
