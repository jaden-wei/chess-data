import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-link-container">
        <Link
          activeClass="active"
          to="rapid"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Rapid
        </Link>
        <Link
          activeClass="active"
          to="blitz"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Blitz
        </Link>
        <Link
          activeClass="active"
          to="bullet"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Bullet
        </Link>
        <Link
          activeClass="active"
          to="puzzles"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Puzzles
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
