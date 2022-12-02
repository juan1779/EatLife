import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footContainer">
      <div className="footText">
        <h3>
          emerson
          <br />
          ecologics
        </h3>
        <h3>HERBALIFE</h3>
      </div>

      <div className="Redes-sociales">
        <a className="Redes-btn" href="#">
          <FaFacebook />
        </a>
        <a className="Redes-btn" href="#">
          <FaTwitter />
        </a>
        <a className="Redes-btn" href="#">
          <FaInstagramSquare />
        </a>
        <a className="Redes-btn" href="#">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Footer;
