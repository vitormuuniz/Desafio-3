import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SubHeader from './components/Sub-Header';

import Routes from './routes';

import './global.css';

function App() {
  return (
    <div>
      <Routes />
      <Footer />
    </div>  
  );
}

export default App;
