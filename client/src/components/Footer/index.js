import React from "react";
import "./style.css";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-center mt-5">
      <a
        href="https://github.com/ramonpbarros/rendez-view"
        target="_blank"
        className="fa zoomIcon mr-2 mt-3"
        style={{color: "white"}}
      >
        <FaGithubSquare />
      </a>
      <p className="mt-3">© Copyright</p>
    </footer>
  );
}

export default Footer;
