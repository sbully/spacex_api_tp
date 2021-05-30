import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { SpaceXLogoWhite, Flag_Fr, Flag_De, Flag_En } from '../assets/';
import LangageContext from '../assets/langage/LangageContext';
import { useTranslation } from 'react-i18next';

function NavBar() {
  /* const [langage, setLangage] = useContext(LangageContext); */
  const changeLanguage = useContext(LangageContext);
  function handleClickImg(e) {
    console.log(e.target.value);
    changeLanguage(e.target.value);
  }

  const { t, i18n } = useTranslation();

  return (
    <>
      <nav className='navbar'>
        <a className='navbar-a' href='/'>
          <img className='navbar-img' alt='logo SpaceX' src={SpaceXLogoWhite} />
        </a>
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <Link to='/' className='nav-links'>
              {t('Home')}
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/rockets' className='nav-links'>
              {t('Rockets')}
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to='/upcoming' className='nav-links'>
              {t('Upcoming')}
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
            value='en'
          />
          <input
            className='navbar-img-flag'
            type='image'
            src={Flag_Fr}
            alt='France flag'
            onClick={handleClickImg}
            value='fr'
          />
          <input
            className='navbar-img-flag'
            type='image'
            src={Flag_De}
            alt='DeutschLand flag'
            onClick={handleClickImg}
            value='de'
          />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
