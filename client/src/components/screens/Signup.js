import React from 'react'
import {Link} from 'react-router-dom'
// import {Signin} from './Signin'

export const Signup = () => {
    return (
        <div className = 'mycard'>
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input 
                    type = 'text'
                    placeholder = 'email'
                />
                <input 
                    type = 'text'
                    placeholder = 'name'
                />
                <input 
                    type = 'text'
                    placeholder = 'password'
                />
                
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">SignUp</button>

                <h6>
                    <Link to="/signin">Already have an account?</Link>
                </h6>

            </div>
        </div>
    )
}
