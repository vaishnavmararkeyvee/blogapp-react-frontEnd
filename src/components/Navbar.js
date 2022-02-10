import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';
  
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/articlelist'>
            Article List
          </NavLink>
          <NavLink to='/add'>
            Add Article
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin' onClick={props.setlogout(1)}>Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;