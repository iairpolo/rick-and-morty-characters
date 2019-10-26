import React, { useState, useEffect } from 'react';

const SearchForm = () => {
  const handleSubmit = () => {};

  return (
    <form action='submit'>
      <input placeholder='What character are you looking for?' />
      <button onSubmit={handleSubmit}>Search</button>
    </form>
  );
};

export default SearchForm;
