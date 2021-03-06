import React,{useState} from 'react'
import backgroundImage from "../assets/food-front-page.jpg"
import signup from "../assets/signup.png"
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
            <img src={backgroundImage} className="food-image"/>
            <h2><center>
            Create an Account!
            <image src={signup}/>
            </center></h2>
            <h1><center><i class="fas fa-user-plus"></i></center></h1>
            
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
                                name="fullName"
                                placeholder="Full Name"
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
                        <label>
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
                    <p>
                        <button type="submit" className="signup-btn"><b>Submit</b></button>
                    </p>      
                    <p><b>Already Have an Account ?</b></p>
                    
                    <a href="/login" className="login-redirect">Login</a>
                </form>
            </div>  
        </div>
    )
}