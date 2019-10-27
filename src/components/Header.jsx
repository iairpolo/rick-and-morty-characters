import React from 'react';
import './styles/Header.css';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='Header'>
    <Link to='/'>
      <img src={Logo} alt='Rick and Morty' />
    </Link>
  </header>
);

export default Header;
