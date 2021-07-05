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
                            <p className="label-headers">Email Id</p>
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
                            <p className="label-headers">Full Name</p>
                            <input
                                className="text-field"
                                type='text'
                                name="fullName"
                                placeholder="Full Name"
                                onChange={handleChange}
                            />
                        </label>
                        <br/>
                        <label>
                            <p className="label-headers">Password</p>
                            <input
                                className="text-field"
                                type='text'
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </label>
                        <br/>
                        <label>
                            <p className="label-headers">Confirm Password</p>
                            <input
                                className="text-field"
                                type='text'
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                            />
                        </label>
                    </fieldset>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>  
        </div>
    )
}