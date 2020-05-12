import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import Routes from './routes';

import './global.css';
import SubHeader from './components/Sub-Header';
function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Routes />
      <Footer />
    </div>  
  );
}

export default App;
