import { SKILLS } from "../../utils/data"
import SkillCard from "./SkillCard/SkillCard"
import './Skills.css'

const Skills = () => {
    return (
      <div className="skills-container">
          <h5>Technical Proficiency</h5>
          <div className="skills-content">
              <div className="skills">
                {SKILLS.map((item)=>(
                    <SkillCard 
                    key = {item.title}
                    iconUrl = {item.icon}
                    title={item.title}
                    isActive = {item.isActive}

                    />
                ))}
              </div>
              <div className="skills-info"></div>
          </div>
   
      </div>
    )
  }
  
  export default Skills