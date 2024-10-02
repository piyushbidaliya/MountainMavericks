import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../asset/logo4.png';

const Menu = () => {
  const { pathname } = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Link to='/' className={pathname === '/' ? 'active' : ''} onClick={closeDropdown}>
        <p>Home</p>
      </Link>
      <div className="menu-item" onClick={toggleDropdown}>
        <p>Trek 
          <i className={showDropdown ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
        </p>
      </div>
      {showDropdown && (
        <div className="dropdown-content" >
          <Link to='/chardham' className={pathname === '/chardham' ? 'active' : ''} onClick={closeDropdown}>
            <p>Chardham Yatra</p>
          </Link>
          <Link to='/ouroffer' className={pathname === '/ouroffer' ? 'active' : ''} onClick={closeDropdown}>
            <p>All Treks</p>
          </Link>
          </div>
      )}
      <Link to='/hotels' className={pathname === '/hotels' ? 'active' : ''} onClick={closeDropdown}>
        <p>Our Hotels</p>
      </Link>
      <Link to='/about' className={pathname === '/about' ? 'active' : ''} onClick={closeDropdown}>
        <p>About Us</p>
      </Link>
      <Link to='/contact' className={pathname === '/contact' ? 'active' : ''} onClick={closeDropdown}>
        <p>Contact Us</p>
      </Link>
    </>
  );
};


const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className="navbar_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='navbar_menu'>
        <Menu />
      </div>
      <div className='navbar-phone'>
        <p><i className='fas fa-phone'></i>8800867279</p>
      </div>
      <div className="navbar-menu-icon" ref={menuRef}>
        {toggleMenu ? (
          <RiCloseLine color='#000' size={24} onClick={() => setToggleMenu(!toggleMenu)} className='navbar-closeline'/>
        ) : (
          <RiMenu3Line color='#000' size={24} onClick={() => setToggleMenu(!toggleMenu)} className='navbar-menuline'/>
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
