import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import StartContainer from '../Start';
import AboutContainer from '../About';
import PolicyContiner from '../Policy';
import CareerContainer from '../Career';

// Här importeras alla komponenter. Detta är huvudkomponenten.

function App() {
  return (
    <div className="App">
      <div className="content" id="app-content">
        <Switch>
          <Route exact path="/" component={ StartContainer } />
          <Route path="/about" component={ AboutContainer } />
          <Route path="/policy" component={ PolicyContiner } />
          <Route path="/career" component={ CareerContainer } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
