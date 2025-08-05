import React from 'react';
import { motion } from 'framer-motion';
import './Stage.css'

const Stage = () => {
    const experiences = [
        {
            entreprise: 'HAITAO',
            poste: 'Stagiaire Développeur FullStack',
            periode: 'Mars 2022 - Août 2022',
            description: 'Développement d’une application web en PHP et JELIX.',
        },
        {
            entreprise: 'CSFX FIANARANTSOA',
            poste: 'Stagiaire Développeur FullStack',
            periode: 'Mars 2021 - Août 2021',
            description: 'Conception et Réalisation d’un application web de gestion de scolarité en Node JS et Express JS.',
        },
        {
            entreprise: 'DRI HAUTE MATSIATRA | CENTRE FISCAL A',
            poste: 'Stagiaire Développeur FullStack Java',
            periode: 'Nov 2017 - Jan 2018',
            description: 'Conception et Réalisation de gestion de recette fiscale (Java, NetBeans).',
        },
        {
            entreprise: 'PIFTIC BERAVINA FIANARANTSOA',
            poste: 'Stagiaire Développeur FullStack PHP',
            periode: 'Nov 2016 - Jan 2017',
            description: 'Conception et Réalisation d’une application de gestion des membres en PHP, MYSQL, HTML, CSS.',
        }
    ];

    return (
        <div className="stage-container">
            <h3><span className="barre">---</span>Mes Stages<span className="barre">---</span></h3>
            <div className="stages-liste">
            {experiences.map((stage, index) => (
                <motion.div
                    key={index}
                    className="stage-card"
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3, delay: index * 0.1 }} 
                >
                    <h4>{stage.entreprise}</h4>
                    <p><strong>Poste :</strong> {stage.poste}</p>
                    <p><strong>Période :</strong> {stage.periode}</p>
                    <p><strong>Description :</strong> {stage.description}</p>
                </motion.div>
            ))}
            </div>
        </div>
    );
};

export default Stage;
