import React from 'react';
import { NavLink } from 'react-router-dom';

const FourOhFour = () => (
  <div className="FourOhFour">
    <h1>Uh Oh, you broke THE ENTIRE INTERNET!</h1>
    <NavLink 
      className="FourOhFour-Link"
      exact
      to="/" >
      Go Home!
    </NavLink>
  </div>
);

export default FourOhFour;