import React from "react";
import "./SkillsInfoCard.css";
import { IoIosCheckboxOutline } from "react-icons/io";

const SkillsInfoCard = ({ heading, skills }) => {
  // Group the skills in pairs (2 skills per row, 6 rows) only from the selected skill's data
  const skillRows = Array.from({ length: 6 }, (_, rowIndex) => {
    const startIndex = rowIndex * 2;
    return skills.slice(startIndex, startIndex + 2);
  });

  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <table className="skills-table">
        <tbody>
          {skillRows.map((row, rowIndex) => (
            <tr key={`row_${rowIndex}`}>
              {row.map((skill, colIndex) => (
                <td key={`skill_${rowIndex}_${colIndex}`}>
                  <div className="skill-info">
                    <IoIosCheckboxOutline />
                    <span>{skill.skill}</span>
                  </div>
                </td>
              ))}
              {/* Add an empty cell if the row has an odd number of skills */}
              {row.length < 2 && <td />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsInfoCard;
