import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <a
        className="navbar-brand text-white font-weight-bold float-right"
        href="index.html"
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
            <a className="nav-link text-light font-weight-bold" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold text-light"
              href="/portfolio"
            >
              Portfolio
            </a>
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
              href="./assets/IanPyeatt_Resume.pdf"
            >
              Resumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
