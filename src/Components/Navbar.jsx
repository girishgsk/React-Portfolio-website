import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/navbar.css";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <nav className="navbar nabar-bg navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="navbar-brand">
              <h2 className="nav_name">
                <i className="fa-solid fa-code"> </i>
                Girish Kumbhar
              </h2>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience">
                  Experience
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
