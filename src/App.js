import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import ImgSlider from './components/ImgSlider/ImgSlider';
import Footer from './components/Footer/Footer'
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <ImgSlider/>
      <Footer/>
      </div>
    );
  }
}

export default App;
