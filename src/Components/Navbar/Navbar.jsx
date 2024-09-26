// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./logo.png" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Project</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
