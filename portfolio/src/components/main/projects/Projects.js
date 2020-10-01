import React from 'react';
import './Projects.css';
import MiniNav from '../mininav/MiniNav.js';
import ProjectShowcase from './project_showcase/ProjectShowcase.js/ProjectShowcase.js';

function Projects() {
  return (
    <div className="Projects">
      <MiniNav/>
      <ProjectShowcase/>
    </div>
  );
}

export default Projects;
