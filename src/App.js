import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch,  Link} from 'react-router-dom'
import Login from './SignIn/login'
import SignUp from './SignIn/signup'


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
    <Router>
      <Row>
        <Col xs={6} lg={4} md={4}>
          
        </Col>
        <Col xs={6} lg={4} md={4}>
          <h1 style={{color:'red'}}>{result}</h1>
        </Col>
        <Col xs={6} lg={4} md={4}>
            <Link className="log-in" to="/signup" >Sign up</Link> &nbsp;
            <Link className="log-in" to="/login" >Log in</Link>
            
        </Col>
        
      </Row>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
      
      </Router>
    </Container>
    </div>
  );
}

export default App;
