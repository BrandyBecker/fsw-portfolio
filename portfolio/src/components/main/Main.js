import React from 'react';
import './Main.css';
import About from './aboutme/About.js';
import Skills from './skills/Skills.js';
import MiniNav from './mininav/MiniNav.js';

function Main() {
  return (
    <div className="Main">
      <MiniNav/>
      <div className="secondary">
        <About/>
        <Skills/>
      </div>
    </div>
  );
}

export default Main;
