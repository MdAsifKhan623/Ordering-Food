import React,{useState,useEffect} from 'react'


export default function SignUp(){

    const [userDetails, setSignUpDetails]=useState({
        userEmail:"",
        fullName:"",
        password:"",
        confirmPassword:""
    })
    const registerHandler=(event)=>{
        event.preventDefault()
        if(userDetails.password !== userDetails.confirmPassword){
            console.log("confirm password wrong!!")
        }
    }

    const handleChange=(event)=>{
        const {name,value}=event.target
        setSignUpDetails((prevDetails)=>({...prevDetails,[name]:value.trim()}))
        
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
                                name="userEmail"
                                placeholder="Email Id"
                                onChange={handleChange}
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Full Name</p>
                            <input
                                type='text'
                                name="fullName"
                                placeholder="Full Name"
                                onChange={handleChange}
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Password</p>
                            <input
                                type='text'
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Confirm Password</p>
                            <input
                                type='text'
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
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