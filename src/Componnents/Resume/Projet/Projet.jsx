import React from 'react';
import './Projet.css';
import { FaLaravel, FaReact, FaCss3Alt, FaPhp, FaWordpress, FaPython, FaToolbox } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaBootstrap, FaDesktop } from 'react-icons/fa6';
import { SiMysql } from 'react-icons/si';
import Portfolio from '../../../assets/projets/images.jpeg';
import Avion from '../../../assets/projets/images4.jpeg';
import Blog from '../../../assets/projets/images3.jpeg';
import Etudiant from '../../../assets/projets/images1.jpeg';
import Stock from '../../../assets/projets/images4.jpeg';


const Projet = () => {
    const projets = [
        {
            titre: 'Système de gestion des réservations d\'avions',
            description: 'Une application de gestion des réservations de sièges d\'avion avec Laravel et React.',
            technologies: ['Laravel', 'React', 'Bootstrap'],
            lien: 'https://github.com/votre-repo/reservation-system',
            image: Avion
        },
        {
            titre: 'Portfolio personnel',
            description: 'Mon portfolio en ligne pour présenter mes compétences et mes projets.',
            technologies: ['React', 'CSS', 'Framer Motion'],
            lien: 'https://votre-portfolio.com',
            image: Portfolio
        },
        {
            titre: 'Application de gestion d\'étudiants',
            description: 'Une application web pour gérer les informations des étudiants et des cours.',
            technologies: ['Laravel', 'React', 'MySQL'],
            lien: 'https://github.com/votre-repo/student-management',
            image: Etudiant
        },
        {
            titre: 'Application de gestion commande de stock',
            description: 'Une application desktop pour gérer les stock et les commandes des clients.',
            technologies: ['PYTHON', 'TINKINTER', 'MySQL'],
            lien: 'https://github.com/votre-repo/student-management',
            image: Stock
        },
        {
            titre: 'Blog personnel',
            description: 'Un blog simple pour partager des articles techniques et personnels.',
            technologies: ['PHP', 'MySQL', 'CSS'],
            lien: 'https://votre-blog.com',
            image: Blog
        }
    ];

    const techIcons = {
        Laravel: <FaLaravel size={50} color="#FF2D20" />,
        React: <FaReact size={50} color="#61DAFB" />,
        Bootstrap: <FaBootstrap size={50} color="#21759B" />,
        CSS: <FaCss3Alt size={50} color="#1572B6" />,
        PHP: <FaPhp size={50} color="#4F5B93" />,
        WordPress: <FaWordpress size={50} color="#21759B" />,
        MySQL: <SiMysql size={50} color="#FF2D20" />,
        PYTHON:<FaPython size={50} color= '#3572A5'/>,
        TINKINTER:<FaToolbox size={50} color= '#3572A5'/>,
    };

    return (
        <div className="projet-container">
            <h3 className="projet-titre"><span className="barre">---</span>Mes Projets<span className="barre">---</span></h3>
            <div className="projets-liste">
                {projets.map((projet, index) => (
                    <motion.div
                        key={index}
                        className="projet-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="image-wrapper">
                            <img src={projet.image} alt={projet.titre} className="projet-image" />
                            <div className="tech-overlay">
                                {projet.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-icon">
                                        {techIcons[tech]}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="projet-body">
                            <h4>{projet.titre}</h4>
                            <p>{projet.description}</p>
                            <a href={projet.lien} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                        </div>
                    </motion.div>

                ))}
            </div>
        </div>
    );
};

export default Projet;
