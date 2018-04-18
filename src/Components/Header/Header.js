import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <div className="SubHeader">
      <NavLink activeStyle={{color: '#fe584c', boxShadow: '.5px .5px black'}} to="/" exact>Home</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink activeStyle={{color: '#fe584c', boxShadow: '.5px .5px black'}} to="/work">Work</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink activeStyle={{color: '#fe584c', boxShadow: '.5px .5px black'}} to="/contact">Contact</NavLink>
    </div>
  </div>
);

export default Header;