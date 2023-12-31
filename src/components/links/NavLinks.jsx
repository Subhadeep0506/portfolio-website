function NavLinks() {
  return (
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
      <li>
        <button className="resume">Résumé</button>
      </li>
    </ul>
  );
}

export default NavLinks;
