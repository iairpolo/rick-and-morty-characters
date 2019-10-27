import React, { useState, useEffect } from 'react';
import './styles/CharacterPage.css';
import Loader from '../components/Loader';
import Error from './Error';
import Character from '../components/Character';

const CharacterPage = ({ match, history }) => {
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

  const handleReload = () => {
    history.push('/');
  };

  if (loading) {
    return (
      <section className='Character'>
        <Loader />
      </section>
    );
  } else if (error) {
    return <Error error={error} reload={handleReload} />;
  } else {
    return <Character character={character} episodes={episodes} />;
  }
};

export default CharacterPage;
