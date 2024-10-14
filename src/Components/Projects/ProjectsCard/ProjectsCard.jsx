import './ProjectsCard.css'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";


const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="projects-card">
      <div className="projects-card-image">
        <img src={src} alt="project" />
      </div>
      <div className="projects-card-content">
        <div>
          <div className="projects-card-header">
            <h3>{title}</h3>
            <div className="projects-card-icons">
              <span className="icon">
                <BsGithub />
              </span>
              <span className="icon">
                <FaGlobe />
              </span>
            </div>
          </div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
