import React from 'react';
import ImgNotFound from '../assets/images/404-image.png';

const NotFound = () => (
  <section>
    <img src={ImgNotFound} alt='' />
    <h1>404</h1>
    <h3>Not Found</h3>
  </section>
);

export default NotFound;
