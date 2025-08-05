import React from 'react';
import { FaSchool, FaCalendarAlt } from 'react-icons/fa';

import './Education.css'
import { FaGraduationCap } from 'react-icons/fa6';


const Education = () => {
    const diplomes = [
        {
            titre: 'DIPLÔME DE MASTER PROFESSIONNELLE EN INFORMATIQUE',
            ecole: 'École Nationale d’Informatique, Université de Fianarantsoa',
            description: 'Master Professionnel à l\'ENI',
            annee: '2021',
        },
        {
            titre: 'DIPLÔME DE LICENCE PROFESSIONNELLE EN INFORMATIQUE',
            ecole: 'École Nationale d’Informatique, Université de Fianarantsoa',
            description: 'Licence Professionnelle à l\'ENI',
            annee: '2018',
        },
        {
            titre: 'DIPLÔME BACC ET BREVET D’ÉTUDE PROFESSIONNELLE',
            ecole: 'Lycée Technique Professionnel Beravina, Fianarantsoa',
            description: 'Baccalauréat technique Professionnelle',
            annee: '2014',
        }
    ];

    return (
        <div className="education-container">
            <h3 className="education-titre"><span className="barre">---</span>Mon Parcours Éducatif<span className="barre">---</span></h3>
            <div className="diplomes-liste">
                {diplomes.map((diplome, index) => {
                    const animationClass = index % 2 === 0 ? 'animate-left' : 'animate-right';

                    return (
                        <div key={index} className={`diplome-card ${animationClass}`}>
                            <h4>{diplome.titre}</h4>
                            <p><strong><FaSchool /></strong> {diplome.ecole}</p>
                            <p><strong><FaGraduationCap /></strong> {diplome.description}</p>
                            <p><strong><FaCalendarAlt /></strong> {diplome.annee}</p>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default Education;
