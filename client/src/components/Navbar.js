import React,{useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const NavBar = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if (state){
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <li><button 
                        className="btn waves-effect waves-light #c62828 red darken-3"
                        onClick={() => {
                            localStorage.clear()
                            dispatch({type:"CLEAR"})
                            history.push("/")
                        }}
                    >Logout</button>
                </li>

            ]
        }else{
            return [
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">SignUp</Link></li>
            ]
        }
    }
    return (

        <nav>
        <div class="nav-wrapper white">
            <Link to={state?"/":"/signin"} class="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            {renderList()}
            </ul>
        </div>
        </nav>
    )
}

export default NavBar