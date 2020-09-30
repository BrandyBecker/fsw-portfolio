import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Nav from './components/nav/Nav.js';
import Main from './components/main/Main.js';
import About from './components/main/aboutme/About.js';
import Skills from './components/main/skills/Skills.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>

      <Switch>
        {/* <Route exact path="/" component={About} />
        <Route exact path="/" component={Skills} /> */}
        {/* <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  );
}

export default App;
