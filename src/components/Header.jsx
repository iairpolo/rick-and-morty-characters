import React from 'react';
import './styles/Header.css';
import Logo from '../assets/images/logo.png';

const Header = () => (
  <header className='Header'>
    <img src={Logo} alt='Rick and Morty' />
  </header>
);

export default Header;
