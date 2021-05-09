import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  let [result,setResult]=useState('')
  useEffect(()=>{
    axios.get("http://localhost:5000/").then(res=>{
      setResult(res.data)
    })
  })
  return (
    <div className="App">
      <h1>{result}</h1>
    </div>
  );
}

export default App;
