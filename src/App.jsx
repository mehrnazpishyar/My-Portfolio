import "./App.css";
import ContactMe from "./Components/ContactMe/ContactMe";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills/>
        <WorkExperience/>
        <ContactMe/>
      </div>
    </div>
  );
};

export default App;
