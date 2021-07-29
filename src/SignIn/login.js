import React,{useState,useEffect} from 'react'

export default function Login(){
    const [usersCheck,findUsersCheck]=useState(false)
    const [userDetails, setSignUpDetails]=useState({
        userEmail:"",
        password:"",
    })
    const registerHandler=(event)=>{
        event.preventDefault()
        setSignUpDetails({
            userEmail:"",
            password:""
        })
    }

    const handleChange=(event)=>{
        const {name,value}=event.target
        setSignUpDetails((prevDetails)=>({...prevDetails,[name]:value.trim()}))
        
    }

    return (
        <div  className="signup-box">
            <center>
                <h1>
                    <p>Login</p>
                    <i class="fa fa-user" aria-hidden="true"></i>
                </h1>
                {usersCheck && <p className="error-check">Invalid Username or Password</p>}
            
            </center>
            
            <div className="signup">
                <form onSubmit={registerHandler}>
                    <fieldset>
                        <label>
                            <input
                                className="text-field"
                                type='text'
                                name="userEmail"
                                placeholder="Email Id"
                                onChange={handleChange}
                                value={userDetails.userEmail}
                            />
                        </label>
            
                        <br/>
                        <label>
                            <input
                                className="text-field"
                                type='password'
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={userDetails.password}
                            />
                        </label>
                        <br/>

                    </fieldset>
                    <br/>
                    <p>
                        <button type="submit" className="signup-btn"><b>Submit</b></button>
                    </p>

                    <p><b>Don't Have an Account? Register Below.</b></p>
                    <a href="/signup" className="login-redirect" >Register</a>
                    
                </form>
            </div>  
        </div>
    )
}