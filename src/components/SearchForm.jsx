import React from 'react';
import './styles/SearchForm.css';

const SearchForm = ({ onSubmit, onChange, value }) => (
  <form className='SearchForm' action='submit' onSubmit={onSubmit}>
    <input
      className='SearchForm__Input'
      onChange={onChange}
      value={value}
      placeholder='Search character...'
    />
    <button className='SearchForm__Button' type='submit'>
      Search
    </button>
  </form>
);

export default SearchForm;
