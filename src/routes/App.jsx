import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/index.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Character from '../pages/Character';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/character/:characterId' component={Character} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
