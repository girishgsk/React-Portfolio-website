import React from "react";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container_footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h2>About Me</h2>
              <p>
                Full Stack Developer specializing in the MERN stack. Passionate
                about building scalable web applications and exploring new
                technologies.
              </p>
            </div>
            <div className="footer-section contact">
              <h2>Contact Info</h2>
              <ul>
                <li>
                  <Link to="mailto:girishkumbhar1450@gmail.com">
                    Email: girishkumbhar1450@gmail.com
                  </Link>
                </li>

                <li>
                  <Link to="tel:+91 7219130700">
                    <i className="fa-solid fa-circle-phone"></i>Phone: +91
                    7219130700
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section social">
              <h2>Follow Me</h2>
              <ul>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/girish-kumbhar-78165b20a"
                    target="blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/girishgsk" target="blank">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com" target="blank">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="https://instagram.com" target="blank">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2024 Girish Kumbhar | Designed with ❤️
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
