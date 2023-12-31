import PropTypes from "prop-types";
import { Fragment } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Header.css";
import "../../../App.css";
import NavLinks from "../../links/NavLinks";

function Header({ currentPage }) {
  if (!currentPage) {
    currentPage = "home";
  }

  return (
    <nav className="navbar bg-dark navbar-expand-md">
      <h1 className="rainbow_text_animated">Subhadeep M.</h1>
      <Fragment>
        <NavLinks />
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
