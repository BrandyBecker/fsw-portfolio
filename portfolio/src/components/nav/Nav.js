import React from 'react';
import './Nav.css';
import profile from '../nav/pfp.png';

function Nav() {
  return (
    <div className="Nav">
      <div className="info">
      <img class="pfp" src={profile} alt="Profile Picture of Myself"/>
        <h1 class="name">Brandy Becker</h1>
        <div className="lilabout">
            <p>FullStack Software Developer</p>
            <p>( 22 | 🐈 | 💻 | ☕ )</p>
        </div>
        <div className="socials">
            <i class="fab fa-github" href="#" target="_blank"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-twitter"></i>
            <i class="fas fa-envelope"></i>
        </div>
        <ul class="tabs">
            <li class="link">About Me</li>
            <li class="link">Skills</li>
            <li class="link">Projects</li>
            <li class="link">Resume</li>
            <li class="link">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
