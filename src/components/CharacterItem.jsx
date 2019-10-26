import React from 'react';
import './styles/CharacterItem.css';

const CharacterItem = ({ character }) => (
  <li className='CharacterItem'>
    <img src={character.image} alt='' />
  </li>
);

export default CharacterItem;
