import "./App.css";
// import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
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
        <Projects/>
        {/* <ContactMe/> */}
      </div>
      <Footer/>
    </div>
  );
};

export default App;
