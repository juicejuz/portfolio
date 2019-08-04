import React from 'react';
import { fakeJobService } from '../../../services/json/fakeJobService.json';

const Job = props => {
  const job = fakeJobService;
  return (
    <React.Fragment>
      {job.map(item => (
        <div key={item._id} className={item.cssName}>
          <h3>{item.headDesc}</h3>
          <h6>{item.shortDesc}</h6>
          <p>{item.textDesc}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Job;
