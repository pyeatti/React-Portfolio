import React from "react";
import Celeb from "../../assets/project1.png";
import Film from "../../assets/project2.png";
import Burger from "../../assets/burgerlogger.png";
import Budget from "../../assets/budgetapp.png";
import Fitness from "../../assets/fitnesstracker.png";
import Password from "../../assets/passwordgenerator.png";
import Stone from "../../assets/stoneguardians.png";
import Copy from "../../assets/copyslider.png";

export default function Portfolio() {
  return (
    <div className="container mt-5">
      <h2>Portfolio</h2>
      <div className="row mb-5">
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center">Celebrity Horoscope</h3>
          </div>
          <img className="card-img shadow-lg" src={Celeb} alt="Celeb" />
          <div className="card-body">
            <a
              href="https://pyeatti.github.io/CelebrityHoroscope/home.html"
              className="card-link btn btn-light shadow"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/pyeatti/CelebrityHoroscope"
              className="card-link text-light"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center text-bold">Film Club</h3>
          </div>
          <img className="card-img shadow-lg" src={Film} alt="Film" />
          <div className="card-body">
            <a
              href="https://film-club-ian-aaron.herokuapp.com/"
              className="card-link btn btn-light shadow"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/abtobey/FilmClub"
              className="card-link text-light underline"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center">Burger Logger</h3>
          </div>
          <img className="card-img shadow-lg" src={Burger} alt="Burger" />
          <div className="card-body">
            <a
              href="https://serene-meadow-21920.herokuapp.com/"
              className="card-link btn btn-outline-light"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/pyeatti/BurgerLogger"
              className="card-link text-light"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center text-bold">
              Password Generator
            </h3>
          </div>
          <img className="card-img shadow-lg" src={Password} alt="Password" />
          <div className="card-body">
            <a
              href="https://pyeatti.github.io/PasswordGenerator/"
              className="card-link btn btn-light shadow"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/pyeatti/PasswordGenerator"
              className="card-link text-light underline"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center">Fitness Tracker</h3>
          </div>
          <img className="card-img shadow-lg" src={Fitness} alt="Fitness" />
          <div className="card-body">
            <a
              href="https://mysterious-tor-01740.herokuapp.com/"
              className="card-link btn btn-outline-light"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/pyeatti/FitnessTracker"
              className="card-link text-light"
            >
              Repo
            </a>
          </div>
        </div>
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center text-bold">Budget Tracker</h3>
          </div>
          <img className="card-img shadow-lg" src={Budget} alt="Celeb" />
          <div className="card-body">
            <a
              href="https://damp-scrubland-55743.herokuapp.com/"
              className="card-link btn btn-light shadow"
            >
              Deployed Site
            </a>
            <a
              href="https://github.com/pyeatti/PWA-Budget-App"
              className="card-link text-light"
            >
              Repo
            </a>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center text-bold">
              Stone Guardians
            </h3>
          </div>
          <img className="card-img shadow-lg" src={Stone} alt="S" />
          <div className="card-body">
            <a
              href="https://stone-guardians.superhi.com"
              className="card-link btn btn-light shadow"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="card bg-transparent border-0 col-md-6 col-sm-12">
          <div className="card-body">
            <h3 className="text-light text-center text-bold">Copy Slider</h3>
          </div>
          <img className="card-img shadow-lg" src={Copy} alt="S" />
          <div className="card-body">
            <a
              href="https://sliding-copy-ian.superhi.com/"
              className="card-link btn btn-light shadow"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
