import React from 'react';
import './styles/CharacterItem.css';
import { Link } from 'react-router-dom';

const CharacterItem = ({ character }) => (
  <li className='CharacterItem'>
    <Link to={`/character/${character.id}`}>
      <img src={character.image} alt='' />
      <div className='CharacterItem__Back'>
        <h4 className='CharacterItem__Name'>{character.name}</h4>
      </div>
    </Link>
  </li>
);

export default CharacterItem;
