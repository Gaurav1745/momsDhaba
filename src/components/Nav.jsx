import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{
        textTransform: "uppercase",
        fontWeight: 700,
        letterSpacing: ".1rem",
        padding: "1REM 0REM",
      }}
      className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom"
    >
      <div className="container mx-3 mx-sm-auto">
        <Link style={{ fontSize: "16px" }} className="navbar-brand" to="/">
          MUMMY DA DHABA
        </Link>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={{ fontSize: "12.8px" }}
          className="collapse navbar-collapse"
          id="navbarResponsive"
        >
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                to=""
              >
                Categories
              </Link>
              <div className="dropdown-menu" role="menu">
                <Link
                  className="dropdown-item"
                  role="presentation"
                  to="/category/0"
                >
                  Breakfast
                </Link>
                <Link
                  className="dropdown-item"
                  role="presentation"
                  to="/category/1"
                >
                  Beverages
                </Link>
                <Link
                  className="dropdown-item"
                  role="presentation"
                  to="/category/2"
                >
                  Snacks
                </Link>
                <Link
                  className="dropdown-item"
                  role="presentation"
                  to="/category/3"
                >
                  Main Course
                </Link>
              </div>
            </li>
            {/* <li className="nav-item" role="presentation"><Link className="nav-link" to="sugg">Suggestions</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
