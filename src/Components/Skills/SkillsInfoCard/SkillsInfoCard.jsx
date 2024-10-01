import React from "react";
import "./SkillsInfoCard.css";
import { IoIosCheckboxOutline } from "react-icons/io";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <div className="checkBox">
                <IoIosCheckboxOutline />
              </div>
              <p>{item.skill}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
