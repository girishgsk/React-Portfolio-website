import React from "react";
import { Link } from "react-router-dom";
import "../Styles/skills.css";

const Skills = () => {
  return (
    <>
      <div className="skill_container">
        <h1 id="Skill_tagline">Skills at a Glance</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body card-body-skill">
                <h5 id="h5_card" className="card-title">
                  FrontEnd
                </h5>
                <p className="card-text">
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="button"
                    value="ReactJS"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="submit"
                    value="HTML"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="reset"
                    value="Wordpress"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  BackEnd
                </h5>
                <p className="card-text">
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="button"
                    value="NodeJS"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="submit"
                    value="ExpressJS"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="submit"
                    value="HBS"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="reset"
                    value="PHP"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  Styling
                </h5>
                <p className="card-text">
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="button"
                    value="CSS"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="submit"
                    value="Bootstrap"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="reset"
                    value="FlexBox"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="reset"
                    value="SCSS"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  Database
                </h5>
                <p className="card-text">
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="button"
                    value="MongoDB"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="submit"
                    value="SQL"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="reset"
                    value="MySQL"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  Programming Languages
                </h5>
                <p className="card-text">
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="button"
                    value="Javascript"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="submit"
                    value="Python"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="reset"
                    value="C++"
                  />
                  <input
                    className="btn btn-primary"
                    id="skill_btn"
                    type="reset"
                    value="C"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 id="Skill_tagline_education">Education</h1>
        <div className="card card_Education text-center">
          <div className="card-header">PDEA's College of Engineering Pune</div>
          <div className="card-body ">
            <h5 id="h5_card" className="card-title">
              B.E. Computer Science Engineering
            </h5>
            <p className="card-text">CGPA: 8.64/10</p>
            <Link
              to="https://drive.google.com/file/d/1QW5RlOIS6k3VhwRZ1zBwKw2FBXA-Rtlf/view?usp=drivesdk"
              target="blank"
              className="btn btn-primary"
            >
              Certificate<i className="fa-light fa-file-certificate"></i>
            </Link>
          </div>
          <div className="card-footer text-body-secondary">
            July 2020 - May 2024
          </div>
        </div>
        <div className="card card_Education text-center">
          <div className="card-header">Disha Public School & Jr College</div>
          <div className="card-body">
            <h5 id="h5_card" className="card-title">
              HSC (Higher secondary education)
            </h5>
            <p className="card-text">Percentage: 65.00%</p>
            <Link
              to="https://drive.google.com/file/d/1QMGwKLrgrqU_ZCciTOC9qjLJTnc7A3pQ/view?usp=drivesdk"
              target="blank"
              className="btn btn-primary"
            >
              Certificate <i className="fa-light fa-file-certificate"></i>
            </Link>
          </div>
          <div className="card-footer text-body-secondary">
            May 2018 - May 2020
          </div>
        </div>
        <div className="card card_Education text-center">
          <div className="card-header">SRV Samarth Ramdas Vidyalaya</div>
          <div className="card-body">
            <h5 id="h5_card" className="card-title">
              (SSC) Secondary School Certificate
            </h5>
            <p className="card-text">Percentage: 83.00%</p>
            <Link
              to="https://drive.google.com/file/d/1QTS3m0t8YxbhWvGEcZOGTm1ZdVV2zo-r/view?usp=drivesdk"
              target="blank"
              className="btn btn-primary"
            >
              Certificate <i className="fa-light fa-file-certificate"></i>
            </Link>
          </div>

          <div className="card-footer text-body-secondary">2018</div>
        </div>
        <Link to="/experience" id="btn">
          Experience <i className="fa-solid fa-square-arrow-up-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Skills;
