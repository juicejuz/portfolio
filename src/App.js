import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Study from './components/Study/Study';
import Contact from './components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Router>
        <AppBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/study" component={Study} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
