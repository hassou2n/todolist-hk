import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/fontawesome-free-solid";
export const Footer = () => {
  return (
        <div className="footer-container">
          <div className="hk"> © 2022 Todo List App by Hussein Khaleefah <a href="https://hkhaleefah.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLink} />
      </a>
      </div>
        </div>
  );
};
