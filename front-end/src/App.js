import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import Routes from './routes';

import './global.css';
function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>  
  );
}

export default App;
