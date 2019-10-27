import React from 'react';
import './styles/SearchForm.css';

const SearchForm = ({ onSubmit, onChange, value, reload }) => (
  <form className='SearchForm' action='submit' onSubmit={onSubmit}>
    <input
      className='SearchForm__Input'
      onChange={onChange}
      value={value}
      placeholder='Search character...'
    />
    <button className='SearchForm__CancelButton' onClick={reload} type='button'>
      X
    </button>
    <button className='SearchForm__Button' type='submit'>
      Search
    </button>
  </form>
);

export default SearchForm;
