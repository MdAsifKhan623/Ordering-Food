import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import bunny from "../assets/hungry bunny.png"

function NavBar() {
  const [formValue,setformValue]=useState('')

  const handleChange=(event)=>{ 
      setformValue(event.target.value)
  }

  const handleSubmit=()=>{

  }

  return (
    <div >
      <div className="Container-1">
        <div className="login-feat">
          <Link className="sign-up" to={"/signup"} >Sign up</Link> &nbsp;
          <Link className="log-in" to={"/login"} >Log in</Link>
        </div>
      </div>
      <div className="desc">
        <div className="box-1">
          <p className="heading">
          <img src={bunny} width="50" height="60" /> &nbsp;
          Hungry Bunny</p>
          Feel the Magic of Indian-American-Cuban-MiddleEastern Cuisine all in One Place
          <br/><br/>
          <div className="address-fill">
            <div className="address-bar">
              <div size="8">
                <input type="text" className="address-type" value={formValue} placeholder="Enter Address" onChange={handleChange} />
              </div>
              <div size>
                <button type="submit" onClick={handleSubmit} className="submit-address" shape="Circle" size="16">
                <i class="fa fa-arrow-right" style={{color:'white'}} aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default NavBar;
