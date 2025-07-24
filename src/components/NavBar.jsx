import React from 'react'
import TahoeLogo from '../assets/tahoe-logo-with-mountain.svg?react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
        
    <nav>
          <NavLink to="/"> <TahoeLogo className='tahoeLogo' /> </NavLink>
      
        
          <div className ="navButtons">
                <NavLink  to="">Eat</NavLink>
                <NavLink  to="">Shop</NavLink>
                <NavLink  to="">Play</NavLink>
                <NavLink  to="">Stay</NavLink>
          </div>
    </nav>


    </>
  )
}

export default NavBar