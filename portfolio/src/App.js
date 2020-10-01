import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Nav from './components/nav/Nav.js';
import Main from './components/main/Main.js';
import Projects from './components/main/projects/Projects.js';

function App() {
  return (
    <div className="App">
      <Nav/>

      <Switch>
         <Route exact path="/" component={Main} />
         <Route exact path="/projects" component={Projects} />
        {/*<Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  );
}

export default App;
