import React from 'react';
import { projectsData } from '../assets/assets';
import './Projects.css';

const Projects = () => {
  return (
    <section id="Projects" className="projects-section projects-bg">
      <div className="projects-content-overlay">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-location">{project.location}</p>
                <p className="project-price">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 