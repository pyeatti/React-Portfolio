import React from "react";
import Celeb from "../../assets/celebhoroscope.png";
import Film from "../../assets/filmclub.png";
import Burger from "../../assets/burgerapp.png";
import Budget from "../../assets/budgettracker.png";
import Fitness from "../../assets/fitnesstrack.png";
import Password from "../../assets/passwordgen.png";
import Stone from "../../assets/stoneguardian.png";
import Copy from "../../assets/copyslide.png";

export default function Portfolio() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div
          id="carouselExampleControls"
          className="carousel slide shadow-lg w-75"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className=" card-img d-block w-100"
                src={Film}
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://film-club-ian-aaron.herokuapp.com/"
                  className="card-link btn btn-light shadow"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/abtobey/FilmClub"
                  className="card-link btn btn-outline-light"
                >
                  Repo
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className=" card-img d-block w-100"
                src={Celeb}
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://pyeatti.github.io/CelebrityHoroscope/home.html"
                  className="card-link btn btn-light shadow"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/pyeatti/CelebrityHoroscope"
                  className="card-link btn btn-outline-light "
                >
                  Repo
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 card-img"
                src={Stone}
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://stone-guardians.superhi.com"
                  className="card-link btn btn-light shadow"
                >
                  Deployed Site
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 card-img"
                src={Copy}
                alt="Fourth slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://sliding-copy-ian.superhi.com"
                  className="card-link btn btn-light shadow"
                >
                  Deployed Site
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className=" card-img d-block w-100"
                src={Burger}
                alt="Fifth slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://serene-meadow-21920.herokuapp.com/"
                  className="card-link btn btn-dark shadow"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/abtobey/BurgerLogger"
                  className="card-link btn btn-outline-dark"
                >
                  Repo
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className=" card-img d-block w-100"
                src={Fitness}
                alt="Fifth slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://mysterious-tor-01740.herokuapp.com/"
                  className="card-link btn btn-dark shadow"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/abtobey/FitnessTracker"
                  className="card-link btn btn-outline-dark"
                >
                  Repo
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className=" card-img d-block w-100"
                src={Budget}
                alt="Fifth slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://damp-scrubland-55743.herokuapp.com/"
                  className="card-link btn btn-dark shadow"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/abtobey/PWA-Budget-App"
                  className="card-link btn btn-outline-dark"
                >
                  Repo
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className=" card-img d-block w-100"
                src={Password}
                alt="Fifth slide"
              />
              <div class="carousel-caption d-none d-md-block mb-3">
                <a
                  href="https://pyeatti.github.io/PasswordGenerator/"
                  className="card-link btn btn-dark shadow"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/pyeatti/PasswordGenerator"
                  className="card-link btn btn-outline-dark"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
