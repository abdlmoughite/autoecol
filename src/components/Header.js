import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo"><img src={`${process.env.PUBLIC_URL}/image/2-removebg-preview yahya.png`} alt="Maaroufi|Logo"/></div>
      <nav className={`${isMenuOpen ? "navbar-header" : "active"}`}>
        {/* Add active class when the menu is open */}
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À Propos</Link>
          </li>
          <li>
            <Link to="/courses">Cours</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
            <Link to="/reservation" >
              <button id="bottone1">
                <strong> S'inscrire</strong>
              </button>
            </Link>
            <Link to="/login" >
              <button id="bottone1">
                <strong> Login </strong>
              </button>
            </Link>
        </ul>
      </nav>
      {/* Hamburger Menu Button */}

      <div className="hamburger" onClick={() => toggleMenu()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
