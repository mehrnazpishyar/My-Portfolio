import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </div>
  );
};

export default App;
