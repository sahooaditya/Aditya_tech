import React from "react";
import { pageLinks } from "../Data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        <li>
          <i className="fab fa-facebook"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
        <li>
          <i className="fab fa-squarespace"></i>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Aditya_tech company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
