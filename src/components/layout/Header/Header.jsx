import PropTypes from "prop-types";
import "./Header.css";
import "../../../App.css";

function Header({ currentPage }) {
  if (!currentPage) {
    currentPage = "home";
  }

  return (
    <nav className="navbar bg-dark navbar-expand-md navbar-dark navbar-custom">
      <h1 className="rainbow_text_animated">Subhadeep M.</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav nav-links">
          <li className="nav-item">
            <a className="nav-link">
              {/* <i className="bi bi-house-fill"></i> Home */}
              <img src="src/assets/home.svg" className="link-icon"></img> Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {/* <i className="bi bi-book-fill"></i> Education */}
              <img
                src="src/assets/education.svg"
                className="link-icon"
              ></img>{" "}
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {/* <i className="bi bi-briefcase-fill"></i> Experience */}
              <img
                src="src/assets/experience.svg"
                className="link-icon"
              ></img>{" "}
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {/* <i className="bi bi-clipboard-data-fill"></i> Projects */}
              <img
                src="src/assets/projects.svg"
                className="link-icon"
              ></img>{" "}
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {/* <i className="bi bi-envelope-fill"></i> Contact */}
              <img
                src="src/assets/contact.svg"
                className="link-icon"
              ></img>{" "}
              Contact
            </a>
          </li>
          <li className="nav-item">
            <button className="resume">Résumé</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
