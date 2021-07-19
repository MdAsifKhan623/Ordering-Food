import React,{useState,useEffect} from 'react'

export default function Login(){
    const [userDetails, setSignUpDetails]=useState({
        userEmail:"",
        password:"",
    })
    const registerHandler=(event)=>{
        event.preventDefault()
    }

    const handleChange=(event)=>{
        const {name,value}=event.target
        setSignUpDetails((prevDetails)=>({...prevDetails,[name]:value.trim()}))
        
    }

    return (
        <div  className="signup-box">
            <h1><center><i class="fa fa-user" aria-hidden="true"></i></center></h1>
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
                            />
                        </label>
            
                        <br/>
                        <label>
                            <input
                                className="text-field"
                                type='text'
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </label>
                        <br/>

                    </fieldset>
                    <br/>
                    <p>
                        <button type="submit" className="signup-btn">Submit</button>
                    </p>

                    <p>Don't Have an Account? Register Below.</p>
                    <a href="/signup" className="login-redirect" >Register</a>
                    
                </form>
            </div>  
        </div>
    )
}