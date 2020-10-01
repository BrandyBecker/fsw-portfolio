import React from 'react';
import './MiniNav.css';
import {Link} from 'react-router-dom'

function MiniNav() {
  return (
    <div className="MiniNav">
       <Link to="/"><i class="fas fa-home"></i></Link>
       <Link to="/projects"><i class="fas fa-briefcase"></i></Link>
       <i class="fas fa-file"></i>
       <i class="fas fa-address-book"></i>
    </div>
  );
}

export default MiniNav;
