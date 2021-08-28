// == Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Composants
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Creations from 'src/components/Creations';
import Skills from 'src/components/Skills';
import Footer from 'src/components/Footer';
import TestEffectJs from 'src/components/TestEffectJs';
// == Import
import './app.scss';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/test">
          <TestEffectJs />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/creations">
          <Creations />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
