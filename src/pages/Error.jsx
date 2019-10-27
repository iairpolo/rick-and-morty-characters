import React from 'react';

import './styles/ErrorPage.css';

const Error = ({ error, reload }) => (
  <section className='ErrorPage'>
    <h2>Something went wrong</h2>
    <p>{error}</p>
    <button className='ErrorButton' onClick={reload}>
      Go back
    </button>
  </section>
);

export default Error;
