import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CharactersList from '../components/CharactersList';
import './styles/Home.css';
import Error from './Error';

const Home = () => {
  const INITIAL_STATE = {
    info: { next: '' },
    results: [],
    error: ''
  };
  const [data, setData] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const API = 'https://rickandmortyapi.com/api/character/';

  const fetchCharacters = (url, search = false) => {
    if (search) setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (search) {
          if (!response.error) {
            setData(response);
          } else {
            setData({ info: { next: '' }, results: [], error: response.error });
          }
        } else {
          setData({
            info: response.info,
            results: data.results.concat(response.results)
          });
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters(API);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleReload = () => {
    setData(INITIAL_STATE);
    setSearch('');
    setError(null);
    setLoading(true);
    fetchCharacters(API);
  };

  if (error) {
    return <Error error={error} reload={handleReload} />;
  }
  return (
    <main className='Main'>
      <SearchForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={search}
        reload={handleReload}
      />

      <CharactersList
        loading={loading}
        searchError={data.error}
        characters={data.results}
      />

      {!loading && data.info.next && (
        <button className='Main__MoreButton' onClick={handleClick}>
          More characters
        </button>
      )}
    </main>
  );
};

export default Home;
