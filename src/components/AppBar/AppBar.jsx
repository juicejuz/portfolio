import React, { Component } from 'react';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Menu from './Menu/Menu';

class AppBar extends Component {
  state = {
    toggleMenuOpen: false,
    hamburgerRotateClose: false,
    navShowOpen: false,
    brandingShowOpen: false,
    navItemShow: false
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        toggleMenuOpen: !prevState.toggleMenuOpen,
        hamburgerRotateClose: !prevState.hamburgerRotateClose,
        navShowOpen: !prevState.navShowOpen,
        brandingShowOpen: !prevState.brandingShowOpen,
        navItemShow: !prevState.navItemShow
      };
    });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <HamburgerMenu
            click={this.toggleMenu}
            rotate={this.state.hamburgerRotateClose}
          />
          <Menu
            show={this.state.toggleMenuOpen}
            navShow={this.state.navShowOpen}
            brandShow={this.state.brandingShowOpen}
            itemShow={this.state.navItemShow}
            navItem={this.state.navService}
          />
        </header>
      </React.Fragment>
    );
  }
}

export default AppBar;
