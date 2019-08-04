import React, { Component } from 'react';
import fakeMainService from '../../services/fakeMainService';

class Main extends Component {
  state = {
    mainService: fakeMainService
  };

  render() {
    const {
      firstName,
      lastName,
      description,
      socialMedia
    } = this.state.mainService;
    return (
      <React.Fragment>
        <main id="home">
          <h1 className="lg-heading">
            {firstName}
            <span className="text-secondary">{lastName}</span>
          </h1>
          <h2 className="sm-heading">{description}</h2>
          <div className="icons">
            {socialMedia.map(item => (
              <a key={item._id} href={item.urlLink}>
                <i className={item.faName} />
              </a>
            ))}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Main;
