import React, { useState } from 'react';
import{Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { FaBeer } from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';


const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="">The State ECONOMICS</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="">Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/blog">Blog</Link></NavLink>
            </NavItem>
            
          </Nav>
          
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li><CgProfile size='50'></CgProfile> </li>
          </ul>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMain;