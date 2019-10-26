import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CharactersList from '../components/CharactersList';

const Home = () => {
  const [data, setData] = useState({
    results: []
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const API = 'https://rickandmortyapi.com/api/character/';

  const fetchCharacters = (url, search = false) => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(response => {
        search
          ? setData(response)
          : setData({
              info: response.info,
              results: data.results.concat(response.results)
            });
        if (response.error) setError(response.error);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters(API);
  }, []);

  const handleClick = () => {
    fetchCharacters(data.info.next);
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchCharacters(`${API}?name=${search}`, true);
  };

  return (
    <main className='Main'>
      <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
      <CharactersList
        loading={loading}
        error={error}
        characters={data.results}
      />
      {!loading && <button onClick={handleClick}>Next characters</button>}
    </main>
  );
};

export default Home;
