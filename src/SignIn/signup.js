import React,{useState,useEffect} from 'react'


export default function SignUp(){

    const [userDetails, setSignUpDetails]=useState({
        userEmail:"",
        fullName:"",
        password:"",
        confirmPassword:""
    })
    const registerHandler=(event)=>{
        console.log("hi",event)
    }

    return (
        <div  className="signup-box">
            <div className="signup">
                <form onSubmit={registerHandler}>
                    <fieldset>
                        <label>
                            <p>Email Id</p>
                            <input
                                type='text'
                                name="emailId"
                                placeholder="Email Id"
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Full Name</p>
                            <input
                                type='text'
                                name="fullName"
                                placeholder="Full Name"
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Password</p>
                            <input
                                type='text'
                                name="password"
                                placeholder="Password"
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Confirm Password</p>
                            <input
                                type='text'
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                        </label>
                        <br/>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>  
        </div>
    )
}