import React, { Component } from 'react';

import './resources/styles/bootstrap.min.css';
import './App.css';
import Login from './pages/login/index.js';
import Headers from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import NavBar from './components/NavBar/index.js';




class App extends Component {
  render() {
    return (
      <div>
      <Headers/>
      <NavBar/>
      <Login/>
      <Footer/>
      </div>
      
    )
  }
}

export default App;
