import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/rockets' className='nav-links'>
              Rockets
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/upcoming' className='nav-links'>
              Upcoming
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
