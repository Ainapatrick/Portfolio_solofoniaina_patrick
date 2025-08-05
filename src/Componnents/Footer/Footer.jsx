import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <p>{currentYear}<span>  RAZAFIMANDIMBY</span> — Tous droits réservés</p> 
      </div>
    </footer>
  );
};

export default Footer;
