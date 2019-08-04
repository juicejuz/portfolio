import React from 'react';

const HamburgerMenu = props => {
  let hamburgerClasses = 'menu-btn';
  if (props.rotate) {
    hamburgerClasses = 'menu-btn close';
  }
  return (
    <React.Fragment>
      <button className={hamburgerClasses} onClick={props.click}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </button>
    </React.Fragment>
  );
};

export default HamburgerMenu;
