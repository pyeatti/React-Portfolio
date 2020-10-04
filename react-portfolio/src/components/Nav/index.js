import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Pdf from "../../assets/IP_Resume.pdf";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <Link
        className="navbar-brand text-white font-weight-bold float-right"
        to="/"
      >
        IAN PYEATT
      </Link>
      <button
        className="navbar-toggler justify-content-end"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
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
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
