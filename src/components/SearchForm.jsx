import React from 'react';

const SearchForm = ({ onSubmit, onChange }) => {
  return (
    <form action='submit' onSubmit={onSubmit}>
      <input
        onChange={onChange}
        placeholder='What character are you looking for?'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
