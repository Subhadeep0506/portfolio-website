import PropTypes from "prop-types";
import "../../App.css";
import { useState } from "react";
import { Fragment } from "react";

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
        <a>
          <img src="src/assets/linkedin.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a>
          <img src="src/assets/github.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a>
          <img src="src/assets/twitter.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a>
          <img src="src/assets/instagram.svg" className="social-icon"></img>{" "}
        </a>
      </li>
      <li>
        <a onClick={() => setDarkTheme(!darkTheme)}>
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
    </nav>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
