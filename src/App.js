import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Study from './components/Study/Study';
import Contact from './components/Contact/Contact';
import './App.scss';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Main />
        <About />
        <Study />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
