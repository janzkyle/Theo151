import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavLink,
  NavItem,
  NavbarToggler,
  Collapse
} from "mdbreact";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <Navbar color="indigo" dark expand="md" scrolling fixed="top">
        <NavbarBrand>
          <strong className="white-text">Theo 151</strong>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav right>
            <NavItem>
              <NavLink to="#History">History</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#Survey">Survey</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#Interview">Interview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#Conclusion">Conclusion</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
