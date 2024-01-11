import PropTypes from "prop-types";
import "./Header.css";
import "../../../App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header({ currentPage }) {
  if (!currentPage) {
    currentPage = "home";
  }
  const expand = "xl";
  return (
    <Navbar key={expand} expand={expand} className="navbar-custom">
      <Container fluid>
        <Navbar.Brand className="rainbow_text_animated" href="/">
          <h1>Subhadeep M.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
          <img className="collapse-icon" src="src/assets/collapse.svg" />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="navbar-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <h1 className="rainbow_text_animated">Subhadeep M.</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">
                <img src="src/assets/home.svg" className="link-icon"></img> Home
              </Nav.Link>
              <Nav.Link href="">
                <img src="src/assets/education.svg" className="link-icon"></img>{" "}
                Education
              </Nav.Link>

              <Nav.Link>
                <img
                  src="src/assets/experience.svg"
                  className="link-icon"
                ></img>{" "}
                Experience
              </Nav.Link>
              <Nav.Link>
                <img src="src/assets/projects.svg" className="link-icon"></img>{" "}
                Projects
              </Nav.Link>
              <Nav.Link>
                <img src="src/assets/contact.svg" className="link-icon"></img>{" "}
                Contact
              </Nav.Link>
              <button className="resume">Résumé</button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;

/**
 * <Nav className="">
            <Nav.Link href="/">
              <img src="src/assets/home.svg" className="link-icon"></img> Home
            </Nav.Link>
            <Nav.Link href="">
              <img src="src/assets/education.svg" className="link-icon"></img>{" "}
              Education
            </Nav.Link>

            <Nav.Link>
              <img src="src/assets/experience.svg" className="link-icon"></img>{" "}
              Experience
            </Nav.Link>
            <Nav.Link>
              <img src="src/assets/projects.svg" className="link-icon"></img>{" "}
              Projects
            </Nav.Link>
            <Nav.Link>
              <img src="src/assets/contact.svg" className="link-icon"></img>{" "}
              Contact
            </Nav.Link>
            <Nav.Link>
              <button className="resume">Résumé</button>
            </Nav.Link>
          </Nav>
 */
