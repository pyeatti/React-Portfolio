import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <a
        className="navbar-brand text-white font-weight-bold float-right"
        href="/about"
      >
        IAN PYEATT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link font-weight-bold text-light" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link font-weight-bold text-light"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold text-light"
              href="mailto:pyeatt08@gmail.com"
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold text-light"
              href="./assets/IP_Resume.pdf"
            >
              Resumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
