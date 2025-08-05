// Header.jsx
import React, { useState } from 'react';
import logo from '../../assets/Home/logo1.png';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="navbar">
        <div className="titre-logo">
          <img src={logo} alt="Profile" className="logo" />
          <h1>PATRICK</h1>
        </div>
        <div className="desktop-menu">
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>À propos</a></li>
            <li><a href="#resume" onClick={() => setMobileMenuOpen(false)}>Projets</a></li>
            <li><a href="#certificat" onClick={() => setMobileMenuOpen(false)}>Certificat</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;