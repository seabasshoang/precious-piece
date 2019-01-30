import React, { Component } from 'react';
//import { Route , Switch } from 'react-router-dom';
//import NavBar from './components/NavBar/NavBar';
import ImgSlider from './components/ImgSlider/ImgSlider';
import Footer from './components/Footer/Footer';
import Section2 from './components/Section2/Section2';
import SunglassesPage from './components/SunglassesPage/SunglassesPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <div className="TitleTop"></div>
            <div className="Title">
                <div className="Text1" >PRECIOUS PIECES</div>
                <div className="Text2">coming soon</div>
            </div>
            <div className="TitleBottom"></div>
            <ImgSlider/>
          <Section2/>
          <SunglassesPage/>
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default App;
