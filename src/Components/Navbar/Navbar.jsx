import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./logo.png" />
          <div className="hamburger-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={isOpen ? "menu open" : "menu"}>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
              Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
               Projects
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
              Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
