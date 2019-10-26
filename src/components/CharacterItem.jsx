import React from 'react';

const CharacterItem = ({ character }) => (
  <li>
    <img src={character.image} alt='' />
  </li>
);

export default CharacterItem;
