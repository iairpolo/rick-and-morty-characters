import React from 'react';
// import { Link } from 'react-router-dom';

import './styles/ErrorPage.css';

const Error = ({ error }) => (
  <section className='ErrorPage'>
    <h2>Something went wrong</h2>
    <p>{error}</p>
    {/* <Link to='/'>
      <button className='ErrorButton'>Go back to main page</button>
    </Link> */}
  </section>
);

export default Error;
