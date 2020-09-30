import React from 'react';
import './Main.css';
import About from './aboutme/About.js';
import Skills from './skills/Skills.js';

function Main() {
  return (
    <div className="Main">
      <About/>
      <Skills/>
    </div>
  );
}

export default Main;
