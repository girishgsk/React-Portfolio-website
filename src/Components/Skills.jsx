import React from "react";
import { Link } from "react-router-dom";
import "../Styles/skills.css";

const Skills = () => {
  return (
    <>
      <div className="skill_container">
        <h1 id="Skill_tagline">Skills at a Glance</h1>
        <div className="row col-md-12 p-4">
          <div
            className="col-lg-6 col-12 mt-5"
            // style={{
            //   maxWidth: 500,
            // }}
          >
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  FrontEnd
                </h5>
                <p className="card-text">
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                    }}
                    className="badge fs-6"
                  >
                    ReactJS
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    HTML
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    Wordpress
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  BackEnd
                </h5>
                <p className="card-text">
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    NodeJS
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    ExpressJS
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    HBS
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6 mt-2 "
                  >
                    PHP
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  Styling
                </h5>
                <p className="card-text">
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    CSS
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6 "
                  >
                    Bootstrap
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    FlexBox
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6 mt-2"
                  >
                    SCSS
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  Database
                </h5>
                <p className="card-text">
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    MongoDB
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6 "
                  >
                    SQL
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    MySQL
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6 mt-2"
                  >
                    Mongoose
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5">
            <div className="card">
              <div className="card-body">
                <h5 id="h5_card" className="card-title">
                  Programming Languages
                </h5>
                <p className="card-text">
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    Javascript
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    Typescript
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6 "
                  >
                    Python
                  </div>
                  <div
                    style={{
                      padding: 12,
                      marginRight: 10,
                      backgroundColor: "rgb(25, 118, 210)",
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    className="badge fs-6"
                  >
                    C++
                  </div>
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
        <div className="card card_Education text-center mt-5">
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
        <div className="card card_Education text-center mt-5">
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
