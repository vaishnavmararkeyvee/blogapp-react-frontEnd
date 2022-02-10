import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';
  
const Navbarsmall = (props) => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
         
          <NavLink to='/'>
            Home
          </NavLink>
          
          <NavLink to='/signup'>
            Sign Up
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin' onClick={props.setlogout(0)}>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbarsmall;