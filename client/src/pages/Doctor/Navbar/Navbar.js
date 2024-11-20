import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Contact } from "../../Contact/Contact";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const isAuthenticated = useSelector(state => state.user.user !== null);

  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" checked={isChecked} onChange={toggleMenu} />
        <label htmlFor="check" className="checkbtn">
          {isChecked ? <FaTimes /> : <FaBars />}
        </label>
        <label className="logo">
          <p>+Medicare+</p>
        </label>
        <ul className={isChecked ? 'nav-links active' : 'nav-links'}>
          
          {!isAuthenticated && (
            <>
              <li><Link to='/' onClick={closeMenu}>Home</Link></li>
              <li><Link to='/login' onClick={closeMenu}>Login</Link></li>
              <li><Link to='/register' onClick={closeMenu}>Register</Link></li>
            </>
          )}
          <li><Link to='/Contact' onClick={closeMenu}>Contact</Link></li>
          <li><Link to='/about' onClick={closeMenu}>About Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
