import React, { Component } from 'react';
import Bio from './Bio/Bio';
import Job from './Job/Job';
import Footer from '../Footer/Footer';

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main id="about">
          <h1 className="lg-heading">
            About <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">Let me tell you a few things...</h2>
          <div className="about-info">
            <Bio />
            <Job />
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
