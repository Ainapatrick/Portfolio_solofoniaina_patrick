import React, { useEffect, useState } from 'react';
import Header from '../../Componnents/Header/Header';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Respect from '../MonRespect';
import './Profile.css';
import cv from '../../assets/moncv.pdf';


export default function Profile() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="profile-container" id='home'>
      <Header scrolled={scrolled} />
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              <h2>Bonjour! Je suis <span className="text-nom">RAZAFIMANDIMBY Solofoniaina Patrick</span></h2>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Respect />
              </h1>
              <span className="profile-role-tagline">
                Je suis un développeur web avec une passion pour les technologies modernes
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="mailto:rsolofoniainapatrick4@gmail.com?subject=Offre%20de%20mission%20ou%20collaboration" target="_blank" rel="noopener noreferrer">
              <button className="btn primary-btn">
                 Hire me
              </button>
            </a>
            <a href={cv} download="CV_Razafimandimby_S_Patrick.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn download-btn">Dowload CV</button>
            </a>
          </div>
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa"><FaFacebook /></i>
              </a>
              <a href="https://github.com/Ainapatrick/" target='_blank'>
                <i className="fa"><FaGithub /></i>
              </a>
              <a href="https://www.linkedin.com/in/solofoniaina-patrick-razafimandimby-0272bb22a/" target='_blank'>
                <i className="fa"><FaLinkedin /></i>
              </a>
              <a href="#">
                <i className="fa"><FaWhatsapp /></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
