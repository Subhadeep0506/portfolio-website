import PropTypes from "prop-types";
import { useState } from "react";
import { Fragment } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Header.css";
import "../../../App.css";

function Header({ currentPage }) {
  if (!currentPage) {
    currentPage = "home";
  }

  const [darkTheme, setDarkTheme] = useState(true);
  const naviationLinks = (
    <ul className="nav-links">
      <li>
        <a>
          {/* <i className="bi bi-house-fill"></i> Home */}
          <img src="src/assets/home.svg" className="link-icon"></img> Home
        </a>
      </li>
      <li>
        <a>
          {/* <i className="bi bi-book-fill"></i> Education */}
          <img src="src/assets/education.svg" className="link-icon"></img>{" "}
          Education
        </a>
      </li>
      <li>
        <a>
          {/* <i className="bi bi-briefcase-fill"></i> Experience */}
          <img src="src/assets/experience.svg" className="link-icon"></img>{" "}
          Experience
        </a>
      </li>
      <li>
        <a>
          {/* <i className="bi bi-clipboard-data-fill"></i> Projects */}
          <img src="src/assets/projects.svg" className="link-icon"></img>{" "}
          Projects
        </a>
      </li>
      <li>
        <a>
          {/* <i className="bi bi-envelope-fill"></i> Contact */}
          <img src="src/assets/contact.svg" className="link-icon"></img> Contact
        </a>
      </li>
    </ul>
  );

  const socialLinks = (
    <ul className="social-links">
      <li>
        <a
          href="https://www.linkedin.com/in/subhadeepmandal2000/"
          rel="noreferrer"
          target="_blank"
          id="linkedin"
        >
          <img src="src/assets/linkedin.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Subhadeep0506"
          rel="noreferrer"
          target="_blank"
          id="github"
        >
          <img src="src/assets/github.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/syntax_terror_"
          rel="noreferrer"
          target="_blank"
          id="twitter"
        >
          <img src="src/assets/twitter.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/s.u.b.h.a.d.e.e.p__"
          rel="noreferrer"
          target="_blank"
          id="instagram"
        >
          <img src="src/assets/instagram.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a onClick={() => setDarkTheme(!darkTheme)} id="theme-button">
          {darkTheme ? (
            <img src="src/assets/light.svg" className="social-icon"></img>
          ) : (
            <img src="src/assets/dark.svg" className="social-icon"></img>
          )}
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark navbar-expand-md">
      <h1 className="rainbow_text_animated">Subhadeep Mandal</h1>
      <Fragment>
        <Fragment>{naviationLinks}</Fragment>
        <Fragment>{socialLinks}</Fragment>
      </Fragment>
      <ReactTooltip
        data-tooltip-id="theme-button"
        place="bottom"
        data-tooltip-content="Dark"
      />
    </nav>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
