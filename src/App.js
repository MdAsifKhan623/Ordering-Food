import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  let [result,setResult]=useState('')
  useEffect(()=>{
    axios.get("http://localhost:5000/").then(res=>{
      setResult(res.data)
    })
  })
  return (
    <div className="App">
    <Container fluid>
      <Row>
        <Col xs={6} lg={4} md={4}>
          
        </Col>
        <Col xs={6} lg={4} md={4}>
          <h1 style={{color:'red'}}>{result}</h1>
        </Col>
        <Col xs={6} lg={4} md={4}>
          <a className="log-in" href="#" >Sign up</a> &nbsp;
          <a className="log-in" href="#" >Log in</a>
        </Col>
      </Row>
      
    </Container>
    </div>
  );
}

export default App;
