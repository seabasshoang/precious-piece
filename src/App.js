import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import ImgSlider from './components/ImgSlider/ImgSlider';
import Footer from './components/Footer/Footer'
import Section2 from './components/Section2/Section2';
import SunglassesPage from './components/SunglassesPage/SunglassesPage';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <ImgSlider/>
      <Section2/>
      <Footer/>
      <SunglassesPage/>
      </div>
    );
  }
}

export default App;
