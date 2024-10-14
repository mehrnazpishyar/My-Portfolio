import { Project_Card } from "../../utils/data";
import "./projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Highlight Projects</h2>
      </div>
      <div className="projects-grid">
        {Project_Card.map((item) => (
          <ProjectsCard
            key={item.title}
            title={item.title}
            des={item.des}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
