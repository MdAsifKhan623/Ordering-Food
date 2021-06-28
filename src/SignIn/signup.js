import React,{useState,useEffect} from 'react'

const registerHandler=(event)=>{

}
export default function SignUp(){
    return (
        <div  className="signup-box">
            <div className="signup">
                <form onSubmit={registerHandler}>
                    <fieldset>
                        <label>
                            <p>Email Id</p>
                            <input
                                type='text'
                                placeholder="Email Id"
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Full Name</p>
                            <input
                                type='text'
                                placeholder="Full Name"
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Password</p>
                            <input
                                type='text'
                                placeholder="Password"
                            />
                        </label>
                        <br/>
                        <label>
                            <p>Confirm Password</p>
                            <input
                                type='text'
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