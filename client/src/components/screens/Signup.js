import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import {Signin} from './Signin'

export const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
 
    return (
        <div className = 'mycard'>
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input 
                    type = 'text'
                    placeholder = 'email'
                    value={email}
                    onChange = {(event) => {setEmail(event.target.value)}}
                />
                <input 
                    type = 'text'
                    placeholder = 'name'
                    value={name}
                    onChange = {(event) => {setName(event.target.value)}}
                />
                <input 
                    type = 'text'
                    placeholder = 'password'
                    value={password}
                    onChange = {(event) => {setPassword(event.target.value)}}
                />
                
                <button 
                    className="btn waves-effect waves-light #64b5f6 blue darken-2"
                    onClick = {() => PostData()}
                >SignUp</button>

                <h6>
                    <Link to="/signin">Already have an account?</Link>
                </h6>

            </div>
        </div>
    )
}
