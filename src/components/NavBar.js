import React from 'react';

const NavBar = props => {
  return (
    <nav id="navbar" role="navigation">
      <ul className="nav nav-pills">
        <li className={props.activePage === 'About' ? 'active' : null} role="presentation" id="About" onClick={props.onNavClick}>About</li>
        <li className={props.activePage === 'Work' ? 'active' : null} role="presentation" id="Work" onClick={props.onNavClick}>Work</li>
        <li className={props.activePage === 'Interests' ? 'active' : null} role="presentation" id="Interests" onClick={props.onNavClick}>Interests</li>
      </ul>
    </nav>
  );
}

export default NavBar;