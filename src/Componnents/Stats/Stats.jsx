import React from "react";
import "./Stats.css";

const Stats = () => {
  const stats = [
    { label: "Années d'expérience", value: 1 },
    { label: "Projets réalisés", value: 10 },
    { label: "Diplômes obtenus", value: 4 },
  ];

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <h2 className="section-title">Statistiques</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
