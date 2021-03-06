import React,{useEffect,useState} from 'react'
import './App.css';
import NavBar from './FrontPage/headerNav'
import Contribute from './FrontPage/contribute-app'
import Options from "../src/FrontPage/Options"
import foodFrontPage from "./assets/food-front-page.jpg"
import Footer from './FrontPage/footer'

function App() {

  return (
    <div className="App">
      <div className="Header-Nav">
        <NavBar/>
        <img src={foodFrontPage} className="food-image"/>
      </div>
      <div className="Options-section">
        <Options/>
      </div>
      <div className="contribute-app">
        <Contribute/>
      </div>
      <div className="footer-front">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
