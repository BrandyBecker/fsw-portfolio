import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="Skills">
    <h1 class="skillstitle">Skills</h1>
      <div class="skillssections">
        <div class="frontend skill">
            <h1><i class="fas fa-laptop-code"></i> <span class="skillname">Front End</span></h1>
            <div class="skills">
                HTML5 | CSS3 | JavaScript | React | Redux | TypeScript | LESS | SASS | Styled Components | Semantic UI | Material UI | Bootstrap | Reactstrap | Axios | Fetch | Netlify | Zeit | Git | Jest | React-Testing-Library
            </div>
        </div>
        <div class="backend skill">
            <h1><i class="fas fa-server"></i> <span class="skillname">Back End</span></h1>
            <div class="skills">
                Node | Python | REST | SQL | GraphQL | Express | KNEX | Heroku | Jest | SuperTest
            </div>
        </div>
        <div class="mobile skill">
            <h1><i class="fas fa-mobile-alt"></i> <span class="skillname">Mobile</span></h1>
            <div class="skills">
                React Native | TypeScript | React | Redux | React-Testing-Library | ExpoCLI
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
