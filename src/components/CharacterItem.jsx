import React from 'react';
import './styles/CharacterItem.css';

const CharacterItem = ({ character }) => (
  <li className='CharacterItem'>
    <img src={character.image} alt='' />
    <div className='CharacterItem__Back'>
      <h4 className='CharacterItem__Name'>{character.name}</h4>
    </div>
  </li>
);

export default CharacterItem;
