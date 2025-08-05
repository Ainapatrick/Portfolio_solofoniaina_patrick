import React, { useState } from 'react';
import './Certificat.css';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPython, FaJs } from 'react-icons/fa';
import img1 from '../../assets/projets/images1.jpeg';
import img2 from '../../assets/projets/images4.jpeg';

const Certificat = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const certificats = [
        {
            titre: 'Certificat JavaScript',
            description: 'Maîtrise de base du JavaScript moderne',
            lien: 'https://www.sololearn.com/fr/profile/34622722',
            image: img2,
            icon: <FaJs size={32} color="#f7df1e" />,
        },
        {
            titre: 'Certificat Python',
            description: 'Formation complète en Python sur SoloLearn',
            lien: 'https://www.sololearn.com/fr/profile/34622722',
            image: img1,
            icon: <FaPython size={32} color="#00bfff" />,
        },
        {
            titre: 'Certificat JavaScript',
            description: 'Maîtrise de base du JavaScript moderne',
            lien: 'https://www.sololearn.com/fr/profile/34622722',
            image: img2,
            icon: <FaJs size={32} color="#f7df1e" />,
        },
    ];

    const [indexActuel, setIndexActuel] = useState(0);

    const variants = {
        enter: { x: 100, opacity: 0, },
        center: {
            x: 0, opacity: 1, transition:
            {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
        exit: {
            x: -100,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'easeIn',
            },
        },
    };

    return (
        <div className="certificat-container" id="certificat" ref={ref}>
            <h3 className="certificat-title">Mes Certificats</h3>

            <div className="certificat-slide-wrapper">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={indexActuel}
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="certificat-card"
                    >
                        <div className="certificat-content">
                            <div className="certificat-body">
                                <div className="certificat-icon">{certificats[indexActuel].icon}</div>
                                <h4>{certificats[indexActuel].titre}</h4>
                                <p>{certificats[indexActuel].description}</p>
                                <a
                                    href={certificats[indexActuel].lien}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-detail"
                                >
                                    Voir le certificat
                                </a>
                            </div>
                            <div className="image-certificat">
                                <img
                                    src={certificats[indexActuel].image}
                                    alt={certificats[indexActuel].titre}
                                    className="certificat-image"
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="pagination-dots">
                {certificats.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === indexActuel ? 'active' : ''}`}
                        onClick={() => setIndexActuel(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Certificat;