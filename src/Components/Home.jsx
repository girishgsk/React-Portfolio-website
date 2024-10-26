import React from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css";

const Home = () => {
  return (
    <>
      <div id="home" className="main-section">
        <div className="intro-text">
          <h1>
            Hi There,
            <br />
            I'm Girish
            <span className="highlight"> Kumbhar</span>,
          </h1>
          <p>
            <span className="highlight">MERN </span>
            Stack Web Devel<span className="highlight">op</span>er
          </p>
          <p>
            Have done my Specialisation in Computer Science as a graduate from
            SPPU.
            <br />
            Very passionate about improving my coding skills , developing
            applications & websites.
            <br />I have build WebApps and Websites using MERN Stack. Working
            for myself to improve my skills.
          </p>
          <p></p>
          <Link
            to="https://drive.google.com/file/d/1VlSHnYTbWC7_p7aNx-GPVo_1Fqkt-f-X/view?usp=drivesdk"
            target="blank"
            id="btn"
          >
            Resume <i className="fa-solid fa-square-arrow-up-right"></i>
          </Link>
          <div className="social-icons">
            <Link
              to="https://www.linkedin.com/in/girish-kumbhar-78165b20a/"
              target="blank"
            >
              <img
                src={require("../images/circle-linkedin-512.webp")}
                alt="LinkedIn"
              />
            </Link>
            <Link to="https://github.com/girishgsk" target="blank">
              <img src={require("../images/Github.png")} alt="GitHub" />
            </Link>
            <Link
              to="https://www.facebook.com/girish.kumbhar.376"
              target="blank"
            >
              <img
                id="fb_image"
                src={require("../images/facebook.jpg")}
                alt="facebook"
              />
            </Link>

            <Link to="https://leetcode.com/u/Girishgsk1450/" target="blank">
              <img
                id="fb_image"
                src={require("../images/leetcode.png")}
                alt="LeetCode"
              />
            </Link>
            <Link
              to="https://www.instagram.com/girish_gsk?utm_source=qr&igsh=MWMwOTlsZnA0bndoMQ=="
              target="blank"
            >
              <img src={require("../images/instagram.jpg")} alt="Instagram" />
            </Link>
          </div>
        </div>

        <div className="intro-image">
          <img
            src={require("../images/profile_pic.jpg")}
            alt="Girish kumbhar"
          />
        </div>
      </div>
      <section id="skill_button">
        <Link to="/skills" id="btn" className="btn_skill_home">
          skills <i className="fa-solid fa-square-arrow-up-right"></i>
        </Link>
        <div className="social-icons" />
      </section>
    </>
  );
};

export default Home;
