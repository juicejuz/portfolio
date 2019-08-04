import React from 'react';
import fakeBioService from '../../../services/fakeBioService';

const Bio = props => {
  const bio = fakeBioService;
  return (
    <React.Fragment>
      <div className="bio-image" />
      <div className="bio">
        <h3 className="text-secondary">{bio.headDesc}</h3>
        <p>{bio.textDesc}</p>
      </div>
    </React.Fragment>
  );
};

export default Bio;
