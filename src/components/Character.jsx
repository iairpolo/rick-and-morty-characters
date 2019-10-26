import React from 'react';
import './styles/Character.css';

const Character = ({ character, episodes }) => (
  <section className='Character'>
    <div className='Character__Container'>
      <h1 className='Character__Title'>{character.name}</h1>
      <img
        className='Character__Image'
        src={character.image}
        alt={character.name}
      />
      <div className='Character__Description'>
        <p>Status:</p>
        <p>{character.status}</p>
        <p>Species:</p>
        <p>{character.species}</p>
        <p>Type/Subspecies:</p>
        <p>{character.type}</p>
        <p>Gender:</p>
        <p>{character.gender}</p>
        <p>Origin:</p>
        <p>{character.origin.name}</p>
        <p>Location:</p>
        <p>{character.location.name}</p>
        <p className='Character__EpisodesTitle'>Episodes:</p>
        <div className='Character__Episodes'>
          {character.episode.map(episode => {
            const episodeId = episode.split('episode/')[1];
            const episodeRender = episodes[episodeId - 1];
            return (
              <p key={episodeId}>
                {episodeRender.episode}: {episodeRender.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Character;
