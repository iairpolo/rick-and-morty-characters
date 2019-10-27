import React from 'react';
import CharacterItem from './CharacterItem';
import Loader from './Loader';

import './styles/CharactersList.css';

const CharactersList = ({ characters = [], loading, searchError }) => {
  if (loading) {
    return (
      <section className='CharactersList'>
        <Loader />
      </section>
    );
  } else if (searchError) {
    return <h2>{searchError}</h2>;
  } else if (characters.length > 0) {
    return (
      <section className='CharactersList'>
        <ul>
          {characters.map(character => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </ul>
      </section>
    );
  }
};

export default CharactersList;
