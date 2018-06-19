import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

class CollapsingSidebar extends Component {
  render() {
    return (
      <Menu className="sidebar" isOpen={false}>
        <ul className="bm-menu">
          <li className="bm-menu-item"><NavLink className="bm-menu-link" exact to="/" activeClassName="bm-menu-item-active">Home</NavLink></li>
          <li className="bm-menu-item"><NavLink className="bm-menu-link" to="/about" activeClassName="bm-menu-item-active">About</NavLink></li>
          <li className="bm-menu-item"><NavLink className="bm-menu-link" to="/contact" activeClassName="bm-menu-item-active">Contact</NavLink></li>
          <li className="bm-menu-item"><NavLink className="bm-menu-link" to="/portfolio" activeClassName="bm-menu-item-active">My Work</NavLink></li>
          <li className="bm-menu-item"><NavLink className="bm-menu-link" to="/requests" activeClassName="bm-menu-item-active">Requests</NavLink></li>
        </ul>
      </Menu>
    );
  }
};

export default CollapsingSidebar;