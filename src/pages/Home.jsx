import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CharactersList from '../components/CharactersList';
import Error from './Error';
import './styles/Home.css';

const Home = ({ history }) => {
  const [data, setData] = useState({
    info: { next: '' },
    results: [],
    error: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const API = 'https://rickandmortyapi.com/api/character/';

  const fetchCharacters = (url, search = false) => {
    if (search) setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(response => {
        search
          ? setData(response)
          : setData({
              info: response.info,
              results: data.results.concat(response.results)
            });
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
    history.push(`/search=${search}`);
  };

  if (data.error) {
    return <Error error={data.error} />;
  }
  return (
    <main className='Main'>
      <SearchForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={search}
      />

      <CharactersList
        loading={loading}
        error={error}
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
