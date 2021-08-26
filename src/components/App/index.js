// == Import npm
import React from 'react';
// Composants
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';
// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Footer />
  </div>
);

// == Export
export default App;
