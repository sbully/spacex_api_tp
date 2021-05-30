import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { SpaceXLogoWhite, Flag_Fr, Flag_De, Flag_En } from '../assets/';
import LangageContext from '../assets/langage/LangageContext';

function NavBar() {
  const [langage, setLangage] = useContext(LangageContext);
  function handleClickImg(e) {
    console.log(e.target.value);
    setLangage(e.target.value);
  }

  return (
    <>
      <nav className='navbar'>
        <p style={{ color: 'white' }}>{langage}</p>
        <a className='navbar-a' href='/'>
          <img className='navbar-img' alt='logo SpaceX' src={SpaceXLogoWhite} />
        </a>
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
        <div className='navbar-flag-container'>
          <input
            className='navbar-img-flag'
            type='image'
            src={Flag_En}
            alt='England flag'
            onClick={handleClickImg}
            value='ENGLISH'
          />
          <input
            className='navbar-img-flag'
            type='image'
            src={Flag_Fr}
            alt='France flag'
            onClick={handleClickImg}
            value='FRENCH'
          />
          <input
            className='navbar-img-flag'
            type='image'
            src={Flag_De}
            alt='DeutschLand flag'
            onClick={handleClickImg}
            value='DEUTSCH'
          />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
