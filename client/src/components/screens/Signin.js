import React, {useState, useContext} from 'react'
import {Link, useHistory } from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

export const Signin = () => {

    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email,
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error){
                M.toast({html:data.error, classes:"#c62828 red darken-3 "})
            }
            else{
                localStorage.setItem('jwt',data.token)
                localStorage.setItem('user',JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                M.toast({html:"signedin success", classes:'#43a047 green darken-1'})
                history.push('/')
            }
        }).catch(err =>{
            console.log(err)
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
                    type = 'password'
                    placeholder = 'password'
                    value={password}
                    onChange = {(event) => {setPassword(event.target.value)}}
                />
                
                <button 
                    className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={() => PostData()}
                >Login</button>

                <h6>
                    <Link to="/signup">Don't have an account?</Link>
                </h6>

            </div>
        </div>
    )
}
