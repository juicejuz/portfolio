import React from 'react';
import Brand from './Brand/Brand';
import Nav from './Nav/Nav';

const Menu = props => {
  let menuClasses = 'menu';
  if (props.show) {
    menuClasses = 'menu open';
  }
  return (
    <React.Fragment>
      <div className={menuClasses}>
        <Brand brandShow={props.brandShow} />
        <Nav navShow={props.navShow} itemShow={props.itemShow} />
      </div>
    </React.Fragment>
  );
};

export default Menu;
