import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="ContainerHead">
      <header className="head">
        <a href="#" className="title">
          EatLife
        </a>
        <nav className="navContainer" ref={navRef}>
          <a href="/">Home</a>
          <a href="/Programs">Programs</a>
          <a href="/News">News</a>
          <a href="/#">About Us</a>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="btnContact">Les´t Talk</button>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
