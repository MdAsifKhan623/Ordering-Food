import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import NavBar from './FrontPage/headerNav'
import foodimage from "./assets/food-delivery.jpg"
import Options from "../src/FrontPage/Options"
import foodFrontPage from "./assets/food-front-page.jpg"
function App() {
  // let [result,setResult]=useState('')
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/").then(res=>{
  //     setResult(res.data)
  //   })
  // })
  return (
    <div className="App">
      <div className="Header-Nav">
        <NavBar/>
        <img src={foodFrontPage} className="food-image"/>
      </div>
      <div className="Options-section">
        <Options/>
      </div>
    </div>
  );
}

export default App;
