import React from 'react';
import CharacterItem from './CharacterItem';
import Loader from './Loader';
import Error from '../pages/Error';

import './styles/CharactersList.css';

const CharactersList = ({ characters = [], loading, error }) => {
  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error error={error} />;
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
