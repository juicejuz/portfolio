import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  let navClasses = 'menu-nav';
  if (props.navShow) {
    navClasses = 'menu-nav show';
  }
  let navItemClasses = 'nav-item nav-link';
  if (props.itemShow) {
    navItemClasses = 'nav-item nav-link show';
  }
  return (
    <React.Fragment>
      <ul className={navClasses}>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className={navItemClasses}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            exact
            activeClassName="active"
            className={navItemClasses}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/study"
            exact
            activeClassName="active"
            className={navItemClasses}
          >
            My Study
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            exact
            activeClassName="active"
            className={navItemClasses}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Nav;
