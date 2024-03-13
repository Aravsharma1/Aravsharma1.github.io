import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
    

      {/* copyright */}
      <div className="footer-cpyright">
        <p id="social-media-contact-me-temp-connect">Contact Me</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://github.com/Aravsharma1">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/arav_sharmaaaa/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/arav-sharma/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
