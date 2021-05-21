import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import NavBar from './FrontPage/headerNav'
import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch,  Link} from 'react-router-dom'
import SignUp from './SignIn/signup';
import Login from './SignIn/login'
import foodimage from "./assets/food-delivery.jpg"

function App() {
  // let [result,setResult]=useState('')
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/").then(res=>{
  //     setResult(res.data)
  //   })
  // })
  return (
    <div className="App">
      <NavBar/>
      <img src={foodimage} className="food-image"/>
      

    </div>
  );
}

export default App;
