import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as AnimatedSVG } from "../images/animatedShape.svg";
import "../Styles/experience.css";

const Experience = () => {
  return (
    <>
      <div class="container">
        <h1 id="experince_tagline">Projects</h1>
        <div class="card mb-3">
          <img
            src={require("../images/OnlineDeleviryProject1.png")}
            class="card-img-top"
            alt="OnlineDeleviryProject1.png"
          />
          <div class="card-body">
            <h5 class="card-title">
              Online Delivery Website (Fully Responsive)
            </h5>
            <p class="card-text">
              Build a online food delivery website for the clients by using MERN
              stack , which is also responsive on any device enhancing user
              experience and service accessibility.
            </p>
            <Link
              to="https://ornate-faun-c1d8b8.netlify.app/"
              target="blank"
              class="btn btn-primary"
            >
              Live Link
            </Link>
          </div>
        </div>

        <div class="card mb-3">
          <img
            src={require("../images/CMS image.png")}
            class="card-img-top"
            alt="CMS image.png"
          />
          <div class="card-body">
            <h5 class="card-title">CMS Application with complete MERN</h5>
            <p class="card-text">
              <strong>1. </strong>Content management system is a software
              application used to handle changes in website content creation,
              enabling multiple authors to develop, update, and publish
              material.
              <br />
              <strong>2. </strong> Developed a robust CMS application using the
              MERN stack, featuring intuitive user interfaces, efficient content
              management, and full CRUD functionality, empowering users to
              manage web content seamlessly and effectively with Login and
              Signup Authentication.
            </p>
            <Link
              to="https://github.com/girishgsk/CMS-Application-Backend"
              target="blank"
              class="btn btn-primary"
            >
              GitHub Link
            </Link>
          </div>
        </div>

        <div class="card mb-3">
          <img
            src={require("../images/onlineDelivery2.png")}
            class="card-img-top"
            alt="onlineDelivery2.png"
          />
          <div class="card-body">
            <h5 class="card-title">Food Delivery Website (Fully Responsive)</h5>
            <p class="card-text">
              Build a food delivery website for the clients by using HTML
              ,CSS,JS which is also responsive on any device to enhancing user
              experience and service accessibility.
            </p>
            <Link
              to="https://aquamarine-stroopwafel-c4cedd.netlify.app/"
              target="blank"
              class="btn btn-primary"
            >
              Live Link
            </Link>
          </div>
        </div>

        <div class="card mb-3">
          <img
            src={require("../images/Employee-registration.png")}
            class="card-img-top"
            alt="Employee Registration & Management"
          />
          <div class="card-body">
            <h5 class="card-title">Employee Registration & Management</h5>
            <p class="card-text">
              <strong>1. </strong> Developed the backend for an Employee
              Registration application using Node.js and Express.js. The backend
              features a RESTful API that supports all CRUD operations for
              managing employee data. Each endpoint is secured and input
              validation to ensure data integrity. The application interacts
              with a MongoDB database using Mongoose.
              <br />
              <strong>2. </strong>Client side is handle using ReactJS. This
              application includes comprehensive validation mechanisms to ensure
              accurate and complete data entry during the employee registration
              process.
            </p>
            <Link
              to="https://github.com/girishgsk/Employee-Registration-FrontEnd"
              target="blank"
              class="btn btn-primary"
            >
              GitHub Link
            </Link>
          </div>
        </div>

        <div class="card mb-3">
          <img
            src={require("../images/ConstructionWeb.png")}
            class="card-img-top"
            alt="Construction web SS "
          />
          <div class="card-body">
            <h5 class="card-title">Online Construction service Website</h5>
            <p class="card-text">
              Build a Online Business Website which provides all the detail
              about the company Services provided to the clients and Deployed
              it.
            </p>
            <Link
              to="https://funny-melba-4524f0.netlify.app/"
              target="blank"
              class="btn btn-primary"
            >
              Live Link
            </Link>
          </div>
        </div>

        <div class="card mb-3">
          <img
            src={require("../images/Regestration form.png")}
            class="card-img-top"
            alt="Employee Registration & Management"
          />
          <div class="card-body">
            <h5 class="card-title">
              Registration Form with Validations (MySQL)
            </h5>
            <p class="card-text">
              <strong>1. </strong> Developed the backend for an Registration
              application using Node.js and Express.js. The backend features a
              RESTful API. Each endpoint is secured and input validation to
              ensure data integrity. The application interacts with a MySQL
              database.
              <br />
              <strong>2. </strong>Client side is handle using ReactJS. This
              application includes comprehensive validation mechanisms to ensure
              accurate and complete data entry during the registration process.
            </p>
            <Link
              to="https://github.com/girishgsk/Tech-Assist-1"
              target="blank"
              class="btn btn-primary"
            >
              GitHub Link
            </Link>
          </div>
        </div>

        <div class="card mb-3">
          <img
            src={require("../images/TicTacToe.png")}
            class="card-img-top"
            alt="Tic-Tac-toe SS"
          />
          <div class="card-body">
            <h5 class="card-title">Tic-Tac-Toe(ReactJS)</h5>
            <p class="card-text">
              Created a Tic-tac-toe game by using React Js library and learn
              more about react js , It is very usefull as we can create as many
              components in react js so it can create a virtual DOM.
            </p>
            <Link
              to="https://gilded-buttercream-0539ce.netlify.app"
              target="blank"
              class="btn btn-primary"
            >
              Live Link
            </Link>
          </div>
        </div>
        <div class="card mb-3">
          <img
            src={require("../images/LoginSignup.png")}
            class="card-img-top"
            alt="Tic-Tac-toe SS"
          />
          <div class="card-body">
            <h5 class="card-title">LoginSignup Page</h5>
            <p class="card-text">
              Build a Login-Signup form usind MERN stack which can validate the
              email and password to safely login , database used MongoDB.{" "}
            </p>
            <Link
              to="https://nodejs-task-ipvv.onrender.com/signup"
              target="blank"
              class="btn btn-primary"
            >
              Live Link
            </Link>
          </div>
        </div>
        <div class="card mb-3">
          <img
            src={require("../images/voiceControlChatbot.jpeg")}
            class="card-img-top"
            alt="chatBot SS"
          />
          <div class="card-body">
            <h5 class="card-title">Voice Control ChatBot (LLM)</h5>
            <p class="card-text">
              In Final year our project was i-Voice Chatbot, Built a voice
              controlled chatbot (Personalized Large Language Model) which has
              been trained on personal data as well as integrated with Gemini
              API to give more accurate and shortest possible reply.
            </p>
          </div>
        </div>
        <h1 id="h1_Exprience">Experiences</h1>
        <div class="card card_Education text-center">
          <div class="card-header">Oasis Infobyt</div>
          <div class="card-body ">
            <h5 class="card-title">Full Stack Developer</h5>
            <p class="card-text">
              • Web Development & Design: Developed responsive web applications
              using HTML, CSS, JavaScript, Reactjs, and Nodejs, ensuring optimal
              performance and user experience.
            </p>
            <p>
              • Gained hands-on experience with version control systems Git and
              collaborated effectively using GitHub.
            </p>
            <Link
              to="https://www.linkedin.com/posts/girish-kumbhar-78165b20a_internship-certificate-activity-7032953639786717184-M2NO?utm_source=share&utm_medium=member_desktop"
              target="blank"
              class="btn btn-primary"
            >
              Certificate
            </Link>
          </div>
          <div class="card-footer text-body-secondary">
            January 2023 - February 2023
          </div>
        </div>
        <div class="card card_Education text-center">
          <div class="card-header">Let’s Grow More</div>
          <div class="card-body ">
            <h5 class="card-title">Web Developer</h5>
            <p class="card-text">
              • Implemented server-side logic with Node.js and Express.js,
              managed MongoDB databases, and integrated third-party APIs to
              enhance application functionality.
            </p>
            <p>
              • Gained hands-on experience with version control systems Git and
              collaborated effectively using GitHub.
            </p>
            <Link
              to="https://www.linkedin.com/posts/girish-kumbhar-78165b20a_lgm-internship-activity-7049818129710866432-XNgp?utm_source=share&utm_medium=member_desktop"
              target="blank"
              class="btn btn-primary"
            >
              Certificate
            </Link>
          </div>
          <div class="card-footer text-body-secondary">
            March 2023 - April 2023
          </div>
        </div>
        <div class="card card_Education text-center">
          <div class="card-header">Google Cloud</div>
          <div class="card-body ">
            <h5 class="card-title">Cloud Engineering</h5>
            <p class="card-text">
              • Completed Google Cloud ready program in April on Qwiklabs
              Platform and received goodies Cloud computing.
            </p>
            <p>
              • Learn about Kubernetes ,cloud clusters and much more about the
              cloud computing.
            </p>
            <Link
              to="https://www.linkedin.com/posts/girish-kumbhar-78165b20a_googlecloud-googlecloudplatform-activity-6862650911966273536-iNuZ?utm_source=share&utm_medium=member_desktop"
              target="blank"
              class="btn btn-primary"
            >
              Certificate
            </Link>
          </div>
          <div class="card-footer text-body-secondary">
            October 2020 - November 2020
          </div>
        </div>
        <Link to="/" id="btn">
          Home <i class="fa-solid fa-square-arrow-up-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Experience;
