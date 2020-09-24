import React from "react";
import logo from "../../assets/profilepic.jpg";
import "./style.css";

export default function About() {
  return (
    <main class="container">
      <h2 class="text-white" id="about">
        Man
        <span role="img" aria-label="lightning">
          ⚡
        </span>
        Myth
        <span role="img" aria-label="lightning">
          ⚡
        </span>
        Legend
      </h2>
      <section>
        <div class="card mt-5 bg-transparent border-0">
          <div class="row">
            <div class="col align-items-center">
              <img id="profile-img" src={logo} alt="pic of me" />

              <p class="col-sm-12 text-white">
                Ian Pyeatt is a freelance designer and front end web developer
                based in Dallas, TX. He has a skillset in HTML, CSS, Javascript,
                Node, React, Express, Mongo, and MySQL. He's also proficient in
                Adobe Illustrator, InDesign, and Photoshop. On this website
                you'll find his web development work, but if you're interested
                in seeing his design work please click{" "}
                <a className="text-danger" href="https://ianpyeatt.com">
                  HERE!
                </a>
              </p>

              <p class="col-sm-12 text-white">
                Now then... If you dont find him busting his butt on design
                work, he's probably drinking coffee, spilling beer, eating some
                form of potato, writing Game of Thrones fanfiction (not true . .
                . but maybe), or slowly winning over his friend's dogs until
                they love him more than his friends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
