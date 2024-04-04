import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Location />
    </div>
  );
};

export default App;