import React from 'react';
import './App.css';
import Carousel from './carousel.js';
import 'bootstrap/dist/css/bootstrap.min.css';//css to use for bootstrap
import Navbar from './navbar.js';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Carousel/>
    </div>
    
  );
}

export default App;
