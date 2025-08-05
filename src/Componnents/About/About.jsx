import React, { useEffect, useRef } from 'react';
import ProfilePic from '../../assets/ordi2_.jpeg';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('animate');
        } else {
          aboutRef.current.classList.remove('animate');
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="about" ref={aboutRef}>
      <div className="about-content">
        <div className="picture">
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="content-text">
          <h3 className="text-apropos">À propos</h3>
          <div className="aproposSection">
            Je suis <strong style={{ color: '#00ffea', fontSize: '1.2rem', marginBottom: '1rem' }}>Razafimandimby Solofoniaina Patrick</strong>, un développeur web fullstack passionné par les technologies modernes.  
            Ma curiosité m’a poussé à explorer en profondeur des outils comme <strong style={{ color: '#00ffea', fontSize: '1rem' }}>Laravel</strong> et <strong style={{ color: '#00ffea', fontSize: '1rem' }}>React</strong> afin de concevoir des applications performantes et intuitives.
            Motivé par l’innovation et l’intelligence collective, je m’engage toujours dans l’action avec une forte orientation vers les résultats.
          </div>
          <div className="aproposProfile">
            <ul style={{ color: '#ced4da' }}>
              <li>Développeur Fullstack Web</li>
              <li>Expert Laravel & React</li>
              <li>Créateur de solutions numériques adaptées</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
