import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
	  <NavLink to="/"> <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png" alt="External Image" /> </NavLink>
        </div>

        {/* Menu Links */}
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" activeClassName="active-link" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active-link" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active-link" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
        
        {/* FontAwesome Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <i className="fa-solid fa-times"></i> : <i class="fa-solid fa-bars"></i>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;