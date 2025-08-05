import React from 'react';
import { FaCode, FaPython, FaPhp, FaReact, FaJs, FaNodeJs, FaLaravel, FaSymfony, FaWindowRestore, FaCss3 } from 'react-icons/fa';
import { SiDjango, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = {
        PYTHON: [
            { name: 'PYTHON', level: 85, icon: <FaPython />, color: '#3572A5' }
        ],
        PHP: [
            { name: 'PHP', level: 85, icon: <FaPhp />, color: '#8892BF' }
        ],
        JAVASCRIPT: [
            { name: 'JAVASCRIPT', level: 90, icon: <FaJs />, color: '#F0DB4F' }
        ],
        NODEJS: [
            { name: 'NODE JS', level: 75, icon: <FaNodeJs />, color: '#68A063' }
        ],
        EXPRESSJS: [
            { name: 'EXPRESS JS', level: 40, icon: <SiExpress />, color: '#000000' }
        ],
        DJANGO: [
            { name: 'DJANGO', level: 85, icon: <SiDjango />, color: '#E34C26' }
        ],
        TKINTER: [
            { name: 'TKINTER', level: 85, icon: <FaWindowRestore />, color: '#4B8BBE' }
        ],
        LARAVEL: [
            { name: 'LARAVEL', level: 90, icon: <FaLaravel />, color: '#FF2D20' }
        ],
        SYMFONY: [
            { name: 'SYMFONY', level: 85, icon: <FaSymfony />, color: '#000' }
        ],
        REACT: [
            { name: 'REACT JS', level: 50, icon: <FaReact />, color: '#61DBFB' }
        ],
        HTML: [
            { name: 'HTML', level: 90, icon: <FaCode />, color: '#FF2D20' }
        ],
        CSS: [
            { name: 'CSS', level: 90, icon: <FaCss3 />, color: '#4B8BBE' }
        ],
    };

    return (
        <div className="skills-container">
            <h3><span className="barre">---</span>Mes Compétences<span className="barre">---</span></h3>
            <div className="skills-content">
                <div className="skills-left">
                    <h4><span className="barre">---</span> Mes qualités</h4>

                    <h6 className="titre">Sérieux et appliqué</h6>
                    <p>Je prends mon travail au sérieux et je fais de mon mieux pour livrer un travail propre et précis.</p>

                    <h6 className="titre">Aime apprendre et progresser</h6>
                    <p>J’aime découvrir de nouvelles choses et je fais des efforts pour m'améliorer chaque jour.</p>

                    <h6 className="titre">Esprit calme et logique</h6>
                    <p>Je préfère analyser tranquillement les problèmes et avancer pas à pas pour trouver des solutions.</p>
                </div>

                <div className="skills-right">
                    {Object.values(skills).flat().map((skill, index) => (
                        <div
                            className="skill-card"
                            key={index}
                            style={{ '--progress-width': `${skill.level}%`, '--skill-color': skill.color }}
                        >
                            <div className="skill-header">
                                <span className="icon">{skill.icon}</span>
                                <span className="name">{skill.name}</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
