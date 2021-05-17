import React from 'react'
import {Link} from 'react-router-dom'
import bunny from "./assets/hungry bunny.png"

function NavBar() {

  return (
    <div >
      <div className="Container-1">
        <div className="login-feat">
          <Link className="log-in" to={"/signup"} >Sign up</Link> &nbsp;
          <Link className="log-in" to={"/login"} >Log in</Link>
        </div>
      </div>
      <div className="desc">
        <div className="box-1">
          <p className="heading">
          <img src={bunny} width="50" height="60" /> &nbsp;
          Hungry Bunny</p>
          Feel the Magic of Indian-American-Cuban-MiddleEastern Cuisine all in One Place
        </div>
      </div>
      
    </div>
  );
}

export default NavBar;
