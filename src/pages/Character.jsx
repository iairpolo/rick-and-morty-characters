import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const Character = ({ match }) => {
  const {
    params: { characterId }
  } = match;
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = 'https://rickandmortyapi.com/api/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterReq = await fetch(`${API}character/${characterId}`);
        const characterData = await characterReq.json();
        setCharacter(characterData);

        const episodes1Req = await fetch(`${API}episode`);
        const episodes1Data = await episodes1Req.json();

        const episodes2Req = await fetch(`${API}episode/?page=2`);
        const episodes2Data = await episodes2Req.json();

        setEpisodes(episodes1Data.results.concat(episodes2Data.results));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return (
      <section className='ErrorPage'>
        <h2>Looks like we have a problem</h2>
        <p>{error}</p>
      </section>
    );
  } else {
    return (
      <section className='Character'>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type/Subspecies: {character.type}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        <p>Episodes:</p>
        {character.episode.map(episode => {
          const episodeId = episode.split('episode/')[1];
          const episodeRender = episodes[episodeId - 1];
          return (
            <p key={episodeId}>
              {episodeRender.episode}: {episodeRender.name}
            </p>
          );
        })}
      </section>
    );
  }
};

export default Character;
