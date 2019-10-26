import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/index.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CharacterPage from '../pages/CharacterPage';
import Error from '../pages/Error';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/search=:q' component={Home} />
      <Route exact path='/error' component={Error} />
      <Route exact path='/character/:characterId' component={CharacterPage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
